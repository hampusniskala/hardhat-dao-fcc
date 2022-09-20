import { network } from "hardhat"

export async function moveTime(amount: number) {
    console.log(`Moving time by ${amount} seconds...`)
    await network.provider.send("evm_increaseTime", [amount])
    console.log(
        `Completed time move. You are now ${amount} seconds in the future`
    )
}
