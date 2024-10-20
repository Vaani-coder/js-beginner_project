Introduction: This script is about creating and managing NFTs (Non-Fungible Tokens). Don't worry if you're not familiar with the technical details. Think of NFTs like unique digital collectibles, each with its own name, description, and owner.

1. Storing NFTs:
First, we need a place to store all our NFTs, like a digital collection box. In the code, we create an empty collection (a list) called nfts. Every time we create a new NFT, we’ll put it into this box.

2. Creating an NFT:
To create an NFT, we use a function called mintNFT. "Minting" is just a fancy word for making or creating something new.

We give the NFT three pieces of information: a name (what it's called), a description (a little info about it), and the owner (who owns it).
Once we create the NFT with these details, we put it into our collection (the nfts list). For example, an NFT might have the name "CryptoPunk," the description "A unique digital avatar," and an owner called "Alice."
3. Listing All NFTs:
Next, we have a function called listNFTs. Imagine you want to show off your NFT collection to friends. This function will go through each NFT in the collection and print out its details—its name, description, and owner—so you can see everything in one place.

4. Total Number of NFTs:
Finally, we have a function called getTotalSupply. This is like asking, "How many NFTs do I have in my collection?" It will count the total number of NFTs we've created and let us know how many there are.

5. Putting It All Together:
At the end of the script, we:

Create three different NFTs: "CryptoPunk" for Alice, "Bored Ape" for Bob, and "Doodle" for Charlie.
Use the listNFTs function to show the details of each NFT.
Finally, we print out the total number of NFTs in our collection.
Summary: This script is like creating and managing a collection of unique digital items. We can create new ones, list out what we have, and even count how many we’ve collected!
