const container = document.getElementById("email-container");
const emailInput = document.getElementById("email-input");
const emailList = document.getElementById("email-list");
const suggestList = document.getElementById("email-suggest");

const domains = [
  "gmail.com",
  "qq.com",
  "163.com",
  "126.com",
  "outlook.com",
  "hotmail.com",
];

let emails = [];
let index = -1;

// 校验邮箱
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// 渲染邮箱标签
function renderEmails() {
  emailList.innerHTML = "";
  emails.forEach((email, i) => {
    const li = document.createElement("li");
    li.textContent = email;
    if (!isValidEmail(email)) li.classList.add("invalid");
    const remove = document.createElement("span");
    remove.textContent = "×";
    remove.onclick = () => {
      emails.splice(i, 1);
      renderEmails();
    };
    li.appendChild(remove);
    emailList.appendChild(li);
  });
}

// 添加邮箱
function addEmail(email) {
  email = email.trim();
  if (!email) return;
  emails.push(email);
  renderEmails();
  emailInput.value = "";
  suggestList.style.display = "none";
}

// 显示后缀提示
function showSuggestions() {
  const value = emailInput.value.trim();
  suggestList.innerHTML = "";
  index = -1;
  if (!value) {
    suggestList.style.display = "none";
    return;
  }

  const [name, domainPart] = value.split("@");
  const matches = domains.filter(
    (d) => !domainPart || d.startsWith(domainPart)
  );
  if (matches.length === 0) {
    suggestList.style.display = "none";
    return;
  }

  matches.forEach((d) => {
    const li = document.createElement("li");
    li.textContent = `${name}@${d}`;
    li.addEventListener("mousedown", () => {
      addEmail(li.textContent);
    });
    suggestList.appendChild(li);
  });

  suggestList.style.display = "block";
}

// 输入监听
emailInput.addEventListener("input", showSuggestions);

// 键盘操作
emailInput.addEventListener("keydown", (e) => {
  const items = suggestList.querySelectorAll("li");
  if (e.key === "ArrowDown") {
    if (!items.length) return;
    index = (index + 1) % items.length;
    items.forEach((li) => li.classList.remove("active"));
    items[index].classList.add("active");
  } else if (e.key === "ArrowUp") {
    if (!items.length) return;
    index = (index - 1 + items.length) % items.length;
    items.forEach((li) => li.classList.remove("active"));
    items[index].classList.add("active");
  } else if (e.key === "Enter" || e.key === ",") {
    e.preventDefault();
    if (index >= 0 && items[index]) {
      addEmail(items[index].textContent);
    } else {
      addEmail(emailInput.value);
    }
  } else if (e.key === "Backspace" && emailInput.value === "") {
    emails.pop();
    renderEmails();
  }
});

// 点击外部隐藏提示
document.addEventListener("click", (e) => {
  if (!container.contains(e.target)) {
    suggestList.style.display = "none";
  }
});
