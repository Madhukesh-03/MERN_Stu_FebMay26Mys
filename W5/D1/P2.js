const items = {
    item1: "Lapto",
    item2: "Server",
    item3: "cloudAPI"
};

for(const [item,itemName] of Object.entries(items)){
    console.log(`${item}:${itemName}`);
}