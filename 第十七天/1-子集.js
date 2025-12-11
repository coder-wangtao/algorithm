const nums = [1, 2, 3];

var subsets = function (nums) {
  let ans = [];
  let backTracing = (start, path) => {
    ans.push(path.slice());
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backTracing(i + 1, path);
      path.pop();
    }
  };
  backTracing(0, []);
  return ans;
};

console.log(subsets(nums));
