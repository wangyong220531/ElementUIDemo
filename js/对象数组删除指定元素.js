let arr = [
    { id: 1, name: "a" },
    { id: 2, name: "b" },
    { id: 3, name: "c" }
]

// 删除id是2的元素

// 方法一
arr.splice(
    arr.findIndex(item => item.id === 2),
    1
)

// 方法二
const newArr = arr.filter(item => item.id !== 2)

console.log(newArr)
