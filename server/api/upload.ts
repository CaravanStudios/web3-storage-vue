import * as Client from '@web3-storage/w3up-client'
import { StoreMemory } from '@web3-storage/w3up-client/stores/memory'
import { importDAG } from '@ucanto/core/delegation'
import { CarReader } from '@ipld/car'
import * as Signer from '@ucanto/principal/ed25519'

export default defineEventHandler(async (file: File): Promise<void> => {
    // Load client with specific private key
    const principal = Signer.parse(process.env.KEY)
    const store = new StoreMemory()
    const client = await Client.create({ principal, store })
    // Add proof that this agent has been delegated capabilities on the space
    const proof = await parseProof(process.env.PROOF)
    const space = await client.addSpace(proof)
    await client.setCurrentSpace(space.did())
    const response = await client.uploadFile(file)
    return response;
})

/** @param {string} data Base64 encoded CAR file */
async function parseProof(data) {
    const blocks = []
    const reader = await CarReader.fromBytes(Buffer.from(data, 'base64'))
    for await (const block of reader.blocks()) {
        blocks.push(block)
    }
    return importDAG(blocks)
}
