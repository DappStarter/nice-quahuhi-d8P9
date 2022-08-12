require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enrich sun foot blanket radar peace public hard light army gauge'; 
let testAccounts = [
"0x2a5b256ce24f9070c6c55fbdc5406e69a0c45b4be7427bd033953d38f12c64ce",
"0xf71457121fda84e312a1eb3c7c76b52d8cb3c48ba8902925e2cbe545953cd90c",
"0x68b020423c1346a2afb98cc7e49b2f9b025237d61dcbc209c95a45fab20bcff5",
"0x52086eec073f95e60090f55ee174f8c15130c0e57b2e5a8cc7935c1e5641698a",
"0x288d37536520790893091ab5eb271f9d76d6f1f0c965ae7f77c1c8750749978f",
"0xa8543b596e809c59cae482089de38457ab874b1df751c08afbc23dd560cc232c",
"0x65ca83df6a8627becbc4edcb2e5807b0d8106708bce42de734f730ecba4a7b61",
"0x5ff82bd98ce1118d10273441e8f69b2b474a7232b7d3745f93086628a1cf72de",
"0x3d5e7738c5da9b6d757f6476299585cc5fdec6874959dafc12d867584e4e6301",
"0x9920f07960554c156318f5ce8ab200377dee598415f4c9a90c04c9054208fdd4"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


