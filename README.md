# SEPM Project --- HelloWorld Smart Contract

This repository documents the SEPM project work across **Part 1.1, Part
1.2, and Part 2**. The project uses a Solidity `HelloWorld` smart
contract, Docker-based Solidity compilation, GitHub Actions automation,
and deployment to the Ethereum Sepolia test network.

## Project Parts at a Glance

  -----------------------------------------------------------------------
  Part                    Focus                   Key work
  ----------------------- ----------------------- -----------------------
  **Part 1.1**            Local setup and smart   Solidity
                          contract compilation    `HelloWorld.sol`, npm
                                                  project setup, Docker
                                                  Solidity compiler,
                                                  Docker Compose

  **Part 1.2**            GitHub repository and   Personal GitHub
                          CI pipeline             repository, GitHub
                                                  Actions compile
                                                  workflow, run
                                                  screenshots, submission
                                                  links

  **Part 2**              Testnet deployment and  Sepolia deployment,
                          verification            GitHub Actions
                                                  deployment workflow,
                                                  Etherscan source
                                                  verification,
                                                  deployment evidence
  -----------------------------------------------------------------------

------------------------------------------------------------------------

# Part 1.1 --- Smart Contract and Local Compilation

## Objective

Create the `HelloWorld` Solidity contract and set up the project to
compile it using the Solidity compiler in Docker.

## Work completed

-   Created `contracts/HelloWorld.sol`.
-   Set up the npm project and project dependencies.
-   Configured Docker and Docker Compose to run Solidity compiler
    `0.8.24`.
-   Generated Standard JSON compiler input using
    `scripts/build-input.js`.
-   Compiled the contract locally using the Docker-based Solidity
    compiler.

## Contract overview

The `HelloWorld` contract stores a message and provides functions to
retrieve and update it.

-   **Constructor:** initializes the message to `Hello, SEPM!`.
-   **`getMessage()`**: reads the stored message.
-   **`setMessage(string)`**: updates the stored message.

Source: [`contracts/HelloWorld.sol`](contracts/HelloWorld.sol)

## Local compilation

Install dependencies:

``` powershell
npm ci
```

Generate compiler input:

``` powershell
npm run prepare-input
```

Run Docker Compose compilation:

``` powershell
docker compose run --rm solc
```

------------------------------------------------------------------------

# Part 1.2 --- GitHub Repository and Continuous Integration

## Objective

Publish the project in a GitHub repository and automate contract
compilation using GitHub Actions.

## Work completed

-   Published the project to the personal repository.
-   Created a GitHub Actions workflow to compile the Solidity contract.
-   Configured the workflow to install npm dependencies and compile the
    contract.
-   Captured local compilation and GitHub Actions execution screenshots.
-   Added the submission links and evidence to the `submissions/`
    directory.

## CI workflow

Workflow file:
[`.github/workflows/compile.yml`](.github/workflows/compile.yml)

The workflow runs on pushes and pull requests targeting `main`, and
supports manual execution. It generates Standard JSON compiler input,
compiles with Solidity `0.8.24`, checks compiler errors, prints deployed
bytecode sizes, and uploads the compiler output artifact.

## Part 1.2 evidence and links

-   GitHub repository:
    [prathamesh-71/sepm-vault-app](https://github.com/prathamesh-71/sepm-vault-app)
-   GitHub Actions run: [View workflow
    run](https://github.com/prathamesh-71/sepm-vault-app/actions/runs/41414345503)
-   Local compilation screenshot:
    [`submissions/screenshot_local_run.png`](submissions/screenshot_local_run.png)
-   GitHub Actions screenshot:
    [`submissions/screenshot_github_run.png`](submissions/screenshot_github_run.png)
-   Submission links file:
    [`submissions/submission_links.txt`](submissions/submission_links.txt)

------------------------------------------------------------------------

# Part 2 --- Sepolia Deployment and Etherscan Verification

## Objective

Compile and deploy the `HelloWorld` smart contract to the Ethereum
Sepolia testnet, automate deployment using GitHub Actions, and verify
the contract source on Etherscan.

## Contract and deployment details

  ------------------------------------------------------------------------------------------------------------------------------
  Item                                Details
  ----------------------------------- ------------------------------------------------------------------------------------------
  Contract name                       `HelloWorld`

  Solidity version                    `0.8.24`

  Network                             Ethereum Sepolia Testnet

  Contract address                    `0xDf45609c9790b3bf3181dA2a8f91041AD89ce1FE`

  Etherscan contract page             [View contract and verified
                                      source](https://sepolia.etherscan.io/address/0xDf45609c9790b3bf3181dA2a8f91041AD89ce1FE)

  Source verification                 Verified on Etherscan
  ------------------------------------------------------------------------------------------------------------------------------

## GitHub Actions deployment workflow

Workflow file:
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)

The workflow compiles the contract. The deployment job is configured to
run only when manually triggered using `workflow_dispatch`, and only
after compilation succeeds.

Configure these GitHub Actions repository secrets:

-   `SEPOLIA_RPC_URL`
-   `SEPOLIA_PRIVATE_KEY`

**Security:** Never commit `.env`, RPC credentials, or private keys. The
local `.env` file is ignored by Git. Use GitHub Actions Secrets for
deployment credentials.

## Part 2 evidence

The `screenshots/` directory contains the screenshots for deployment,
workflow execution, contract details, and Etherscan verification.

-   [Browse screenshots in the
    repository](https://github.com/prathamesh-71/sepm-vault-app/tree/main/screenshots)
-   [GitHub repository](https://github.com/prathamesh-71/sepm-vault-app)
-   [Sepolia Etherscan
    contract](https://sepolia.etherscan.io/address/0xDf45609c9790b3bf3181dA2a8f91041AD89ce1FE)

------------------------------------------------------------------------

## Repository Structure

``` text
sepm_project_submission/
├── .github/
│   └── workflows/
│       ├── compile.yml
│       └── deploy.yml
├── contracts/
│   └── HelloWorld.sol
├── scripts/
│   ├── build-input.js
│   └── deploy.js
├── submissions/
│   ├── screenshot_github_run.png
│   ├── screenshot_local_run.png
│   └── submission_links.txt
├── screenshots/
│   └── deployment and verification evidence
├── docker-compose.yml
├── hardhat.config.ts
├── package.json
├── package-lock.json
└── README.md
```

## Technology Stack

-   Solidity `0.8.24`
-   Node.js and npm
-   Docker and Docker Compose
-   Hardhat
-   GitHub and GitHub Actions
-   Ethereum Sepolia testnet
-   Etherscan

## Setup

### Prerequisites

-   Node.js 20
-   npm
-   Docker Desktop (for Docker-based compilation)

Install dependencies:

``` powershell
npm ci
```

Compile with Hardhat:

``` powershell
npx hardhat compile
```

Generate Standard JSON compiler input and compile with Docker:

``` powershell
npm run prepare-input
docker compose run --rm solc
```

## Main Links

-   **GitHub repository:**
    https://github.com/prathamesh-71/sepm-vault-app
-   **GitHub Actions run:**
    https://github.com/prathamesh-71/sepm-vault-app/actions/runs/41414345503
-   **Sepolia Etherscan contract:**
    https://sepolia.etherscan.io/address/0xDf45609c9790b3bf3181dA2a8f91041AD89ce1FE

## Disclaimer

This is an academic project for learning and demonstration. Sepolia is a
test network. Do not include private keys or credentials in source code,
commits, screenshots, or public repositories.
