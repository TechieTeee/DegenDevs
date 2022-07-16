# Hardhat typescript template

## Hardhat plugins installed

- hardhat-deploy
- hardhat-gas-reporter
- hardhat-typechain
- hardhat-contract-sizer
- @nomiclabs/hardhat-ethers": "npm:hardhat-deploy-ethers@^0.3.0-beta.10"
- "@nomiclabs/hardhat-etherscan": "^3.0.0",
- "@nomiclabs/hardhat-waffle": "^2.0.1",

```
AVAILABLE TASKS:

  accounts              Prints the list of accounts
  check                 Check whatever you need
  clean                 Clears the cache and deletes all artifacts
  compile               Compiles the entire project, building all artifacts
  console               Opens a hardhat console
  coverage              Generates a code coverage report for tests
  deploy                Deploy contracts
  etherscan-verify      submit contract source code to etherscan
  export                export contract deployment of the specified network into one file
  export-artifacts
  flatten               Flattens and prints contracts and their dependencies
  fund-link             Funds a contract with LINK
  gas-reporter:merge
  help                  Prints this message
  node                  Starts a JSON-RPC server on top of Hardhat EVM
  run                   Runs a user-defined script after compiling the project
  size-contracts        Output the size of compiled contracts
  sourcify              submit contract source code to sourcify (https://sourcify.dev)
  test                  Runs mocha tests
  typechain             Generate Typechain typings for compiled contracts
  verify                Verifies contract on Etherscan
```

```shell
yarn hardhat deploy
yarn hardhat deploy --network rinkeby
yarn hardhat node (run automatly all deploys)

yarn hardhat run ./scripts/greet.ts --network localhost

yarn hardhat test (generate gas-report.log)
yarn hardhat coverage

yarn hardhat typechain

yarn prettier '**/*.{json,sol,md}' --check
yarn prettier '**/*.{json,sol,md}' --write

yarn eslint '**/*.{js,ts}'
yarn eslint '**/*.{js,ts}' --fix
yarn solhint 'contracts/**/*.sol'
yarn solhint 'contracts/**/*.sol' --fix
```

## typescript support

- "@typechain/ethers-v5": "^9.0.0",
- "@typechain/hardhat": "^4.0.0",
- "@types/chai": "^4.3.0",
- "@types/mocha": "^9.0.0",
- "ts-node": "^10.4.0",
- "typechain": "^7.0.0",
- "typescript": "^4.5.4"
- "@typescript-eslint/eslint-plugin": "^5.30.5",
- "@typescript-eslint/parser": "^5.30.5",

## linting

- "solhint": "^3.3.6",
- "eslint": "^8.19.0",

## prettier

- "prettier": "^2.4.1",
- "prettier-plugin-solidity": "^1.0.0-beta.19",

.prettierrc

```json
{
  "tabWidth": 2,
  "useTabs": false,
  "semi": false,
  "singleQuote": false
}
```

## testing

- "chai": "^4.3.4",
- "ethereum-waffle": "^3.4.0",

## Etherscan verification

Configure your own etherscan api key in .env
