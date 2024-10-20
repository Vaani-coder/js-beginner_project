// Step 1: Create a variable to hold your NFTs (array to store multiple NFTs)
let nfts = [];

// Step 2: Function to mint an NFT with metadata passed as parameters
function mintNFT(name, description, owner) {
    // Creating an NFT object
    const nft = {
        name: name,
        description: description,
        owner: owner
    };

    // Storing the NFT object in the array
    nfts.push(nft);
    console.log(`Minted NFT: ${nft.name}`);
}

// Step 3: Function to list all NFTs metadata
function listNFTs() {
    nfts.forEach((nft, index) => {
        console.log(`NFT #${index + 1}:`);
        console.log(`  Name: ${nft.name}`);
        console.log(`  Description: ${nft.description}`);
        console.log(`  Owner: ${nft.owner}`);
    });
}

// Step 4: Function to return the total number of NFTs minted
function getTotalSupply() {
    return nfts.length;
}

// Step 5: Call the functions to test the implementation
mintNFT("CryptoPunk", "A unique digital avatar", "Alice");
mintNFT("Bored Ape", "A rare ape NFT", "Bob");
mintNFT("Doodle", "A fun and colorful doodle", "Charlie");

listNFTs();
console.log(`Total NFTs minted: ${getTotalSupply()}`);
