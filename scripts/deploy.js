
require("dotenv").config();
const { ethers } = require("hardhat");

async function main() {
  console.log("Deploying HelloWorld contract to Sepolia...");

  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  const helloWorld = await HelloWorld.deploy();

  await helloWorld.waitForDeployment();

  const contractAddress = await helloWorld.getAddress();

  console.log("HelloWorld deployed successfully!");
  console.log("Contract Address:", contractAddress);
  console.log("Network:", "Sepolia");
}

main().catch((error) => {
  console.error("Deployment failed:", error);
  process.exitCode = 1;
});
