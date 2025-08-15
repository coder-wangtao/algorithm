// 给你两个 版本号字符串 version1 和 version2 ，请你比较它们。版本号由被点 '.' 分开的修订号组成。修订号的值 是它 转换为整数 并忽略前导零。
// 比较版本号时，请按 从左到右的顺序 依次比较它们的修订号。如果其中一个版本字符串的修订号较少，则将缺失的修订号视为 0。

// const version1 = "1.2";
// const version2 = "1.10";
// const version1 = "1.01";
// const version2 = "1.001";
const version1 = "1.0.1";
const version2 = "1.0.0.0";
var compareVersion = function (version1, version2) {
  let arr1 = version1.split(".");
  let arr2 = version2.split(".");
  let len = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < len; i++) {
    let data1 = 0,
      data2 = 0;
    if (i < arr1.length) {
      data1 = parseInt(arr1[i]);
    }
    if (i < arr2.length) {
      data2 = parseInt(arr2[i]);
    }
    if (data1 > data2) {
      return 1;
    } else if (data1 < data2) {
      return -1;
    }
  }
  return 0;
};

compareVersion(version1, version2);
