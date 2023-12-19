const ethers = require("ethers");
const fs = require("fs-extra");
require("dotenv").config;

async function main() {
  const wallet = new ethers.Wallet(process.env.key);
  const encryptedKey = wallet.encrypt("password123", process.env.PRIVATE_KEY);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
