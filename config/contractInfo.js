const fs = require('fs');
let WorkerManagerData = fs.readFileSync('./../smartContracts/abis/workerManager.json', 'utf8');
let ItemManagerData = fs.readFileSync('./../smartContracts/abis/itemManager.json', 'utf8');

WorkerManagerData = JSON.parse(WorkerManagerData);
ItemManagerData = JSON.parse(ItemManagerData);

module.exports = {
    contractInfo :{
        owner : WorkerManagerData.owner, //'0x627306090abab3a6e1400e9345bc60c78a8bef57',
        workerManagerAddress : WorkerManagerData.address,
        itemManagerAddress : ItemManagerData.address
        //workerManagerAbi : WorkerManagerData.abi,
        //ItemManagerAbi : ItemManagerData.abi,
    }
};