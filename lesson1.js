if (true) {
    var x = 10;
}
console.log(x); // In ra 10, dù x được khai báo trong block if

if (true) {
    let y = 20;
    const z = 30;
}
console.log(y); // Lỗi: y không được định nghĩa ở ngoài block
console.log(z); // Lỗi: z không được định nghĩa ở ngoài block
