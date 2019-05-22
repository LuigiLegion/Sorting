function bubbleSort(array) {

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]){
        swap(array, i, j)
      }
    }
  }
  return array
}

function swap(array, index1, index2) {
  let temp = array[index1]
  array[index1] = array[index2]
  array[index2] = temp
}

