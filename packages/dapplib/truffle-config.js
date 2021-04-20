require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'give nation flush special drift repeat pitch mixture gesture opera fortune giggle'; 
let testAccounts = [
"0x9446dfe793205ced734422bbbd02a57f108455a8d00634e9d3ae5192a4ff349b",
"0x3d4aef9598eb520ce3df43514a73e2de01d8867bbff08e6d24a71f3eef174609",
"0xe1e5c84c49f8da44960a86cf217619dad3ab093a09968ea0e4de4c4bceaac1b7",
"0xbc16c177815b8c79c76080eb89894bf2302147d888d4f1183d9f47416d835079",
"0x5e8c0e9457284633f9bb2d9d71151024a31d7edb42be27fce4a0190194cbee59",
"0x320c342482222b3d49cdec56040dd818e7c70ad6f4aa592407e89c63c6e968f4",
"0xbeb5f40366df30e32935297568e8c65745d9f126fdcaa759893fd67edede6d69",
"0x838692be88f674ac92e94e4735b2300be1103c286710cc311e59efec7d112aa1",
"0x3599abddb1c23cfebd698738d9526684f86ef1876426d6bd0119ad73e413d6ae",
"0x21ba694db359b051cadd886c5aacb0c48afba459cb14135d3fe0dddacb99d55e"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


