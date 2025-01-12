function doorChecking(doorNum){
    if (doorNum === 3){
        console.log(`Congratulations, Pen4o! You found the treasure behind Door ${doorNum}!`)
    } else if (doorNum === 2 || doorNum === 1){
        console.log(`A bucket of cold water splashes on you! Unlucky Pen4o!`);
    } else {
        console.log("Invalid choice. Please select Door 1, 2, or 3.");
    }
}
doorChecking()
