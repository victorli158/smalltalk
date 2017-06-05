//Write an Array#merge_sort method; it should not modify the original array.
function mergeSort(array) {
  if (array.length <= 1){
    return array;
  }

  let mid = Math.floor(array.length/2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  let sortedLeft = mergeSort(left);
  let sortedRight = mergeSort(right);
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let merged = [];
  while (left.length > 0 && right.length > 0){
    if (left[0] < right[0]){
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }

  return merged.concat(left).concat(right);

}

console.log(mergeSort([1,9,2,3,0,5,6,43,24]));
