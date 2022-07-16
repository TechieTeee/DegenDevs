import { DeployFunction } from "hardhat-deploy/types"
import { HardhatRuntimeEnvironment } from "hardhat/types"
import { network } from "hardhat"
import {
  networkConfig,
  developmentChains,
  VERIFICATION_BLOCK_CONFIRMATIONS,
} from "../helper-hardhat-config"
import { verify } from "../helpers/verify"
import { helpers } from "@chainlink/test-helpers"

const deployFunction: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment
) {
  // code here
  const { getNamedAccounts, deployments, getChainId } = hre
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()
  const chainId: number | undefined = network.config.chainId
  if (!chainId) return

  const args = ["Hi, this is a test"]
  const waitBlockConfirmations: number = developmentChains.includes(
    network.name
  )
    ? 1
    : VERIFICATION_BLOCK_CONFIRMATIONS
  const degendevs = await deploy("DegenDevs", {
    from: deployer,
    args: args,
    log: true,
    waitConfirmations: waitBlockConfirmations,
  })

  if (
    !developmentChains.includes(network.name) &&
    process.env.ETHERSCAN_API_KEY
  ) {
    log("Verifying...")
    await verify(degendevs.address, args)
  }

  const networkName = network.name == "hardhat" ? "localhost" : network.name
  log(
    `yarn hardhat read-keepers-counter --contract ${degendevs.address} --network ${networkName}`
  )
  log("----------------------------------------------------")
}
export default deployFunction
deployFunction.tags = ["all", "degendevs"]
