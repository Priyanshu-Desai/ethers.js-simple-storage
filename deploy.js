const ethers = require('ethers');
const fs = require('fs-extra')
require('dotenv').config();

async function main(){
    const options = {
     
        "gasLimit": 5000000
    }
    const provider = new ethers.JsonRpcProvider(process.env.RPC_SERVER);
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

    const abi = fs.readFileSync('./SimpleStorage_sol_SimpleStorage.abi', 'utf-8');
    const bin = fs.readFileSync('./SimpleStorage_sol_SimpleStorage.bin', 'utf-8');

    const contractFactory = new ethers.ContractFactory(abi, bin, wallet);
    console.log('deploying');
    const contract = await contractFactory.deploy(options);
    console.log(contract);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });