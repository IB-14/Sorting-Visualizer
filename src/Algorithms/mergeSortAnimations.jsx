export default function mergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, i]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, i]);
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([j, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([j, j]);
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }














// export const mergeSortAnimations = (array) => {
//     if(array.length===1) {
//         return array;
//     } 
//     const mid= Math.floor(array.length/2);
//     const firstHalf= mergeSortAnimations(array.slice(0, mid));
//     const secondHalf= mergeSortAnimations(array.slice(mid));
//     const sortedArr= [];
//     const animations= [];
//     let i=0, j=0, k=0;
//     console.log(firstHalf, secondHalf)
//     while(i < firstHalf.length && j < secondHalf.length) {

//         // These are the values that we're comparing; we push them once to change their color.
//         animations.push([i,j]);

//         // These are the values that we're comparing; we push them a second time to revert their color.
//         animations.push([i,j]);

//         if(firstHalf[i]<secondHalf[j]) {
//             animations.push([k++, firstHalf[i]]);
//             sortedArr.push(firstHalf[i++]);
//         }
//         else {
//             animations.push([k++, secondHalf[j]]);
//             sortedArr.push(secondHalf[j++]);
//         }
//     }
//     while (i < firstHalf.length) {
        
//         // These are the values that we're comparing; we push them once to change their color.
//        animations.push([i,i]);

//        // These are the values that we're comparing; we push them a second time to revert their color.
//        animations.push([i,i])

//        animations.push([k++, firstHalf[i]]);

//         sortedArr.push(firstHalf[i++]);
//     }
//     while (j < secondHalf.length) {
        
//          // These are the values that we're comparing; we push them once to change their color.
//         animations.push([j,j]);

//         // These are the values that we're comparing; we push them a second time to revert their color.
//         animations.push([j,j])

//         animations.push([k++, secondHalf[j]]);
//         sortedArr.push(secondHalf[j++]);
//     }

//     // console.log(animations);
//     return animations;
// }