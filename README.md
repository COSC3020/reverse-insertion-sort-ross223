[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/Bi-S25fM)
# Reverse Insertion Sort

Consider the code for insertion sort we covered in class:

```javascript
function insertionSort(arr) {
  for(var i = 1; i < arr.length; i++) {
    var val = arr[i];
    var j;
    for(j = i; j > 0 && arr[j-1] > val; j--) {
      arr[j] = arr[j-1];
    }
    arr[j] = val;
  }
  return arr;
}
```

Change this function such that it works from the end of the array rather than
the beginning, `insertionSortReverse()` -- only the direction of
iterating over the elements is reversed, the array is still sorted the same way
(ascending). Add your code in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Average-Case Time Complexity of Insertion Sort

In the lectures, we covered that insertion sort has best-case time complexity of
$\Theta(n)$ and worst-case time complexity of $\Theta(n^2)$. What is the
average-case time complexity ($\Theta$)?

Hint: Think about what happens in each iteration of the loop, and how often the
loop is executed. Keep in mind that for asymptotic analysis we don't care about
constant factors.

Describe your reasoning and the conclusion you've come to. Your reasoning is
most important -- you can easily find the answer, but you need to demonstrate
that you've understood the concept. Add your answer to this markdown file.

The average case of insertion sort is n^2. The outer loop always runs n times 
as set by the loop conditions. Now, assume that we have an randomly sorted list 
(that is each element is placed into an array randomly). This means that for any 
two adjacent elements in the array, they are either sorted or not. Then on 
average, two elements need to be swaped about 1/2 of the time. This is important
because the inner loop runs each time an element needs to be swaped. Since there are 
n(n-1)/2 pairs of elements in any given set of dataand half of these need to be 
swaped this means that our average case runtime is equal to n + (1/2)n(n-1)/2 
which is equal to $\Theta(n^2)$.

This post helped me understand the proof really well:
https://stackoverflow.com/questions/17055341/why-is-insertion-sort-%CE%98n2-in-the-average-case
