import * as Client from '@web3-storage/w3up-client'
import { StoreMemory } from '@web3-storage/w3up-client/stores/memory'
import { importDAG } from '@ucanto/core/delegation'
import { CarReader } from '@ipld/car'
import * as Signer from '@ucanto/principal/ed25519'
import { UploadListSuccess } from '@web3-storage/w3up-client/types'
import { UploadList } from '@web3-storage/w3up-client/types'


export default defineEventHandler(async (event: H3Event): Promise<void> => {

    const body = await readMultipartFormData(event);
    const data = body[0];
    // Load client with specific private key
    try {
    const principal = Signer.parse(process.env.KEY ?? '')
    const store = new StoreMemory();
    const client = await Client.create({ principal, store })
    // Add proof that this agent has been delegated capabilities on the space
    const proof = await parseProof(process.env.PROOF ?? '')
    const space = await client.addSpace(proof)
    await client.setCurrentSpace(space.did())

    // convert body into binary blob
    const blob = new Blob([data.data], { type: data.type });;
    const result = await client.uploadFile(blob);
    return { cid: result};
    } catch (e) {
        setResponseStatus(500);
        return {
            message: e.getMessage()
        }
    }

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

