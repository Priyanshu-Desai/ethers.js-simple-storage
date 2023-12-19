const ethers = require("ethers");
const fs = require("fs-extra");
require("dotenv").config();

async function main() {
  const options = {
    gasLimit: 5000000,
  };
  const provider = new ethers.JsonRpcProvider(process.env.RPC_SERVER);
  const encryptedJson = fs.readFileSync("./.encryptedKey.json", "utf-8");
  let wallet = ethers.Wallet.fromEncryptedJsonSync(
    encryptedJson,
    process.env.PRIVATE_KEY_PASSWORD
  );
  wallet = await wallet.connect(provider);
  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf-8");
  const bin = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.bin", "utf-8");

  const contractFactory = new ethers.ContractFactory(abi, bin, wallet);
  console.log("deploying contract");
  const contract = await contractFactory.deploy(options);
  await contract.deploymentTransaction().wait(1);

  const currentFavouriteNumber = await contract.retrieve();
  console.log(`currentFavouriteNumber: ${currentFavouriteNumber.toString()}`);
  const transactionResponse = await contract.store("5");
  await transactionResponse.wait(1);
  const newFavouriteNumber = await contract.retrieve();
  console.log(`newFavouriteNumber: ${newFavouriteNumber.toString()}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
