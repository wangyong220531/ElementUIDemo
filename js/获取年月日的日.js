let date = "2022-11-30"
console.log(Number(date.split("-").slice(2))); // 方式一
console.log(date.split("-").slice(2).join("-")); // 方式二