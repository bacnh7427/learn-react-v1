# Getting Started with Create React App

## Folder structure

```
src
|__ components (shared components between features)
|   |__ Loading
|       |__ index.jsx
|       |__ styles.scss
|
|__ features
|   |__ Todo
|       |__ components (components of features Todo)
|       |__ pages (pages of the feature Todo)
|       |__ index.jsx (entry point of feature Todo)
|
|__ App.js
```
***
- Setup npm, nvm, nvx
- Chạy lệnh khởi tạo dự án: npx create-react-app learn-reactjs
- cd vào thư mục learn-reactjs và npm start để chạy

- Props là gì?
    - Props là dữ liệu được truyền từ component cha xuống component con.
    - Props là thuộc tính READ-ONLY, component con không thay đổi được. Muốn đổi thì nhờ component cha.
    - Props giúp tạo ra sự đa dạng cho component. Cùng một component với props khác nhau thì render ra khác nhau.

- State là gì?
    State được tạo ra và quản lý bởi component hiện tại
    State được dùng cho những dữ liệu có khả năng sẽ thay đổi