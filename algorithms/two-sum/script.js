function twoSum(nums, target) {
  let storage = {};
  for (let i = 0; i < nums.length; i++) {
    let search = target - nums[i];
    let index2 = storage[search];
    if (index2 != null) {
      return [index2, i];
    } else {
      storage[nums[i]] = i;
    }
  }
}

console.log(twoSum([2, 5, 4, 10], 14));
