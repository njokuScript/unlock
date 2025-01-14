const { ethers } = require('hardhat')
const {
  getNetwork,
  getUnlock,
  getProxyAdminAddress,
} = require('@unlock-protocol/hardhat-helpers')
const {
  abi: proxyAdminABI,
} = require('@unlock-protocol/hardhat-helpers/dist/ABIs/ProxyAdmin.json')

const getOwners = require('../multisig/owners')

async function main({ unlockAddress, quiet = false }) {
  let safeAddress
  const { id: chainId, name } = await getNetwork()
  if (!unlockAddress) {
    ;({ unlockAddress, multisig: safeAddress } = await getNetwork())
  }

  const errorLog = (txt) => console.log(`[${name}]: ⚠️  ${txt}`)

  const unlock = await getUnlock(unlockAddress)
  const unlockOwner = await unlock.owner()
  const isMultisig = safeAddress === unlockOwner

  let proxyAdminAddress, proxyAdminOwner
  try {
    proxyAdminAddress = await getProxyAdminAddress({ chainId })
  } catch (error) {
    errorLog(`ERROR: Failed to fetch ProxyAdmin address`)
  }

  if (proxyAdminAddress) {
    const proxyAdmin = await ethers.getContractAt(
      proxyAdminABI,
      proxyAdminAddress
    )
    proxyAdminOwner = await proxyAdmin.owner()
  }

  if (proxyAdminOwner !== unlockOwner) {
    errorLog(`Unlock contract and ProxyAdmin have different owners!`)
  }

  let nbOwners
  try {
    nbOwners = (await getOwners({ safeAddress: unlockOwner })).length
  } catch (error) {
    errorLog(`Unlock owner is not the team multisig !`)
  }

  if (nbOwners && !isMultisig) {
    errorLog(`Multisig in networks package does not match with Unlock owner!`)
  }

  if (!quiet) {
    console.log(
      `Unlock deployed on ${name} \n`,
      `-  address: ${unlockAddress} \n`,
      `-  unlockVersion: ${await unlock.unlockVersion()} \n`,
      `-  publicLockVersion: ${await unlock.publicLockLatestVersion()} \n`,
      `-  owner: ${unlockOwner} ${nbOwners ? `(${nbOwners} owners)` : ''}\n`,
      `-  proxyAdminAddress: ${proxyAdminAddress} \n`
    )
  }
}

// execute as standalone
if (require.main === module) {
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
}

module.exports = main
