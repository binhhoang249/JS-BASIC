/* 

1. Hàm?
    - Một khối mã
    - làm 1 việc cụ thể

2. Loại hàm
    - Built-in
    - Tự định nghĩa

3. Tính chât
    - Không được thực ti khi định nghĩa
    - Sẽ thực thi khi được gọi
    - Có thể nhận tham số
    - Có thể trả về giá trị
4. Tạo hàm đầu tiên

5. Quy tắt đặt tên hàm:
  - Có thể chứa chữ cái in hoa từ a-z , 0-9, _ $ Không được đặt tên hàm tên biến bằng sô đầu tiên
*/

function showDialog() {
    alert("Hello World");
}
console.log(showDialog())

// Tham số hàm - JavaScript cơ bản

/*
1. Tham số?
    - Định nghĩa?
    - Kiểu dữ liêuụ? -- không giới hạn
    - Tính private   
    - 1 tham số
    - Nhiều tham số

2. Truyền tham số 
    - 1 tham số
    - Nhiều tham số

3, Arguments?
    - Đối tương arguments
    - Giới thiệu vòng for.
*/

function writeLog(message) {
    console.log(message)
}

writeLog('Text message')
//  khi định nghĩa ở hàm thì gọi là tham số
// khi gọi hàm nhập vào giá trị thì gọi là đối số