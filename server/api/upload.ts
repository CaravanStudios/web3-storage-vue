import * as Client from '@web3-storage/w3up-client'
import { StoreMemory } from '@web3-storage/w3up-client/stores/memory'
import { importDAG } from '@ucanto/core/delegation'
import { CarReader } from '@ipld/car'
import * as Signer from '@ucanto/principal/ed25519'
import { UploadListSuccess } from '@web3-storage/w3up-client/types'
import { UploadList } from '@web3-storage/w3up-client/types'


export default defineEventHandler(async (event): Promise<void> => {

    const body = await readMultipartFormData(event);
    if (body.length > 1) {
        // handle a whole dir

    } else {
        const data = body[0];
        // Load client with specific private key
        const principal = Signer.parse(process.env.KEY ?? '')
        const store = new StoreMemory();
        const client = await Client.create({ principal, store })
        // Add proof that this agent has been delegated capabilities on the space
        const proof = await parseProof(process.env.PROOF ?? '')
        const space = await client.addSpace(proof)
        await client.setCurrentSpace(space.did())
        console.log("Space Key: ", space.did());

        // convert body into binary blob
        //console.log("data: ", data);
        const blob = new Blob([data.data], { type: data.type });
        const result = await client.uploadFile(blob);
        console.log("lets hope this isn't too crazy", result)
        // fetch the CIDs
        const uploadListResult = client.capability.upload.list({ cursor: '', size: 25 })
        //fetch metadata
        const files = await Promise.all(
            uploadListResult.upload.list.map(async (upload) => {
              const metadata = await client.getMetadata(upload.cid)
              return { cid: upload.cid, metadata }
            })
          )
          console.log("These are them: ",files)
          return files

    }
    // returm event.res

})

/** @param {string} data Base64 encoded CAR file */
async function parseProof(data: String) {
    const blocks = []
    const reader = await CarReader.fromBytes(Buffer.from(data, 'base64'))
    for await (const block of reader.blocks()) {
        blocks.push(block)
    }
    return importDAG(blocks)
}
