export const mergeSortAnimations = (array) => {
    if(array.length===1) {
        return array;
    } 
    const mid= Math.floor(array.length/2);
    const firstHalf= mergeSortAnimations(array.slice(0, mid));
    const secondHalf= mergeSortAnimations(array.slice(mid));
    const sortedArr= [];
    const animations= [];
    let i=0, j=0, k=0;
    console.log(firstHalf, secondHalf)
    while(i < firstHalf.length && j < secondHalf.length) {

        // These are the values that we're comparing; we push them once to change their color.
        animations.push([i,j]);

        // These are the values that we're comparing; we push them a second time to revert their color.
        animations.push([i,j]);

        if(firstHalf[i]<secondHalf[j]) {
            animations.push([k++, firstHalf[i]]);
            sortedArr.push(firstHalf[i++]);
        }
        else {
            animations.push([k++, secondHalf[j]]);
            sortedArr.push(secondHalf[j++]);
        }
    }
    while (i < firstHalf.length) {
        
        // These are the values that we're comparing; we push them once to change their color.
       animations.push([i,i]);

       // These are the values that we're comparing; we push them a second time to revert their color.
       animations.push([i,i])

       animations.push([k++, firstHalf[i]]);

        sortedArr.push(firstHalf[i++]);
    }
    while (j < secondHalf.length) {
        
         // These are the values that we're comparing; we push them once to change their color.
        animations.push([j,j]);

        // These are the values that we're comparing; we push them a second time to revert their color.
        animations.push([j,j])

        animations.push([k++, secondHalf[j]]);
        sortedArr.push(secondHalf[j++]);
    }

    // console.log(animations);
    return animations;
}