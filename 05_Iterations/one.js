for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(index);
}

console.log("Jello World");

// break and continue

for (let index = 0; index < 10; index++) {
    if (index == 5)
    {
        console.log("index = 5");
        break; // continue;
    }
    console.log(`index = ${index}`);
}