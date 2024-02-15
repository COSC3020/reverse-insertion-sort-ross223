function insertionSortReverse(array) {
    for(var i = array.length - 2; i >= 0; i--) {
        var val = array[i];
        for(var j = i + 1; j < array.length && array[j] < val; j++) {
          array[j - 1]  = array[j];
        }
        array[j - 1] = val; // Used chat GPT to help with this line here
    }
    return array;
}
