function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
function doorChecking(doorNum){
    let randomNum = getRandomInt(1, 3);
    if (doorNum === randomNum){
        console.log(`Congratulations, Pen4o! You found the treasure behind Door ${doorNum}!`)
    } else if (doorNum !== randomNum){
        console.log(`A bucket of cold water splashes on you! Unlucky Pen4o!`);
    } else {
        console.log("Invalid choice. Please select Door 1, 2, or 3.");
    }
    console.log(randomNum)
}
doorChecking()
