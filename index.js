const { MerkleTree } = require("merkletreejs")
const keccak256 = require("keccak256")

// overwrite this array with the eth addresses you want to whitelist
const allowList = [
  "0x0000000000000000000000000000000000000000",
  "0x0000000000000000000000000000000000000000",
];

const leaves = allowList.map((address) => keccak256(address));
const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
const root = tree.getHexRoot();

console.log(root);
