const hre = require("hardhat");

async function main() {
  const message = "Hello World";

  const mymessage = await hre.ethers.deployContract("MyMessage", [message]);

  await mymessage.waitForDeployment();

  console.log(`My first WCX contract was deployed to ${mymessage.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
