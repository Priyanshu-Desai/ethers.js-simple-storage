# ethers.js-simple-storage

learning Ethers.js and creating my first code

# how to use

to use this, download the code onto your local machine.
then run `npm install` to install all the dependencies.
you must now compile the smart contract. to do this, use the command `npm run compile`.
once the contract is compiled, you must encrypt the keys. to do this, run the command `PRIVATE_KEY='<your wallet private key>' PRIVATE_KEY_PASSWORD='<encryption password>' npm run encrypt`.
once the encrypt json has been generated, you van run the contract by writing the command `RPC_SERVER='<rpc server>' npm run run-prod`
