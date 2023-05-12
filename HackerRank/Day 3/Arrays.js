function getSecondLargest(nums) {
    const sorted_array          = nums.sort((a,b) => a - b );
    console.log(sorted_array);
    const unique_sorted_array   = [...new Set(sorted_array)];
    console.log(unique_sorted_array);
    return unique_sorted_array[unique_sorted_array.length - 2];
}

console.log(getSecondLargest([2, 3, 6, 6, 5]));