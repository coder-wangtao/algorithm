const data = [
  { id: 1, pid: 0, name: "用户管理" },
  { id: 2, pid: 1, name: "领导" },
  { id: 3, pid: 1, name: "员工" },
  { id: 4, pid: 3, name: "程序员" },
  { id: 5, pid: 3, name: "设计师" },
  { id: 6, pid: 1, name: "财务" },
  { id: 7, pid: 0, name: "设备管理" },
  { id: 8, pid: 7, name: "电脑" },
  { id: 9, pid: 7, name: "桌子" },
];

function formatDataTree(data) {
  let parents = data.filter((p) => p.pid === 0);
  let children = data.filter((c) => c.pid !== 0);
  dataToTree(parents, children);
  function dataToTree(parents, children) {
    parents.map((p) => {
      children.map((c, i) => {
        if (c.pid === p.id) {
          let _children = JSON.parse(JSON.stringify(children));
          _children.splice(i, 1);
          dataToTree([c], _children);
          if (p.children) {
            p.children.push(c);
          } else {
            p.children = [c];
          }
        }
      });
    });
  }
  return parents;
}
console.log(formatDataTree(data));
