**Merkle Root Calculator**

This is a simple javascript tool that calculates a merkle root for you. 

How to use

1. `git clone git@github.com:Crossmint/merkle-pkg.git`
2. `cd merkle-pkg`
3. `yarn install`

Edit index.js file and paste the ethereum addresses you want to be included in your merkleroot into the allowList array. 

```js
// overwrite this array to include your whitelist addresses
const allowList = [
  "0x0000000000000000000000000000000000000000",
  "0x0000000000000000000000000000000000000000",
];
```

Save the file and then run:

`node index.js`

sample output: 
`0x57570dbcb8388f7a4cb09bf05bcb6c44f46b11a956b25a1b6d50a2d27f2ee71e`

That is the merkle root you'll update your contract with. 