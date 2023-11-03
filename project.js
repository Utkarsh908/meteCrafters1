/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/
// Create a variable to hold your NFTs
const nftCollection = [];

function mintNFT(name, description, rarity) {
  const nft = {
    name,
    description,
    rarity,
  };
  nftCollection.push(nft);
}

/ This function will list all NFTs' metadata to the console.
function listNFTs() {
  for (const nft of nftCollection) {
    console.log("Name: " + nft.name);
    console.log("Description: " + nft.description);
    console.log("Rarity: " + nft.rarity);
  }
}

// This function will return the total number of NFTs created.
function getTotalSupply() {
  return nftCollection.length;
}

// Call your functions below this line
mintNFT("NFT1", "This is the first NFT", "Common");
mintNFT("NFT2", "Another NFT description", "Rare");
mintNFT("NFT3","Third NFT description","Rare");
listNFTs();

const totalSupply = getTotalSupply();
console.log("Total Supply: " + totalSupply);

