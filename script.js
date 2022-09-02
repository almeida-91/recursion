function fibs(n) {
    let array = [0,1];
    for (let i = 2 ; i< n ; i++) {
        array[i] = array[i-1] + array[i-2];
    }
    return array;
}

function fibsRec(n){
    if (n==1) return [0];
    if (n==2) return [0,1];
    let fibArray = [0,1];
    for (let i = 3; i <= n ; i++){
        fibArray = fibArray.concat(fibsRec(i-1).pop() + fibsRec(i-2).pop());
    }
    return fibArray;
}

function mergeSort(initialArray) {

    // base case, array with 1 element is sorted
    
    if (initialArray.length == 1) return initialArray;

    // if array has more than 1 element, divide it in half
    // recursively sort both halves
    
    let halfSize = initialArray.length/2;

    let leftSideArray = initialArray.slice(0,halfSize);
    let rightSideArray = initialArray.slice(halfSize);

    leftSideArray = mergeSort(leftSideArray);
    rightSideArray = mergeSort(rightSideArray); 

    // create sorted array by merging both arrays
    // which were already sorted before, recursively
    
    let sortedArray = [];
    let sortedIndex = 0;
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex <= leftSideArray.length-1 &&
        rightIndex <= rightSideArray.length-1)
        {
            if (leftSideArray[leftIndex] < rightSideArray[rightIndex]){
                sortedArray[sortedIndex] = leftSideArray[leftIndex];
                leftIndex++;
            } else {
                sortedArray[sortedIndex] = rightSideArray[rightIndex];
                rightIndex++;
            }
            sortedIndex++;
        }
    if (leftIndex > leftSideArray.length-1) {
        rightSideArray = rightSideArray.slice(rightIndex);
        sortedArray = sortedArray.concat(rightSideArray);
    } else {
        leftSideArray = leftSideArray.slice(leftIndex);
        sortedArray = sortedArray.concat(leftSideArray);
    }
    return sortedArray;
}