function myBsearch(array, target) {
  let mid = Math.floor(array.length / 2);
  if (array[mid] === target){
    return mid;
  } else if (array.length === 1 && array[mid] !== target) {
    return -1;
  }

  let left = array.slice(0, mid);
  let right = array.slice(mid + 1);

  if (target < array[mid]){
    return myBsearch(left, target);
  } else if (target > array[mid]) {
    if (myBsearch(right, target) >= 0){
      return mid + myBsearch(right, target) + 1;
    } else {
      return -1;
    }
  }
}

console.log(myBsearch([1,2,3,4,5], 2) ); // 1
console.log(myBsearch([1,2,3,4,5], 5)); // 4
console.log(myBsearch([1,2,3,4,5], 6)); // -1
