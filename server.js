
const express = require('express');
const bodyParser = require('body-parser');
const Web3 = require('web3');
const contract = require('@truffle/contract');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
const ContentModerationArtifact = JSON.parse(fs.readFileSync('./build/contracts/ContentModeration.json', 'utf8'));
const ContentModeration = contract(ContentModerationArtifact);
ContentModeration.setProvider(web3.currentProvider);

app.post('/report', async (req, res) => {
    const { contentHash } = req.body;
    const accounts = await web3.eth.getAccounts();
    const instance = await ContentModeration.deployed();
    await instance.createRecord(contentHash, { from: accounts[0] });
    res.send({ message: 'Content reported successfully' });
});

app.post('/moderate', async (req, res) => {
    const { id, isFlagged, isApproved } = req.body;
    const accounts = await web3.eth.getAccounts();
    const instance = await ContentModeration.deployed();
    await instance.moderateRecord(id, isFlagged, isApproved, { from: accounts[0] });
    res.send({ message: 'Content moderated successfully' });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
