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

## Lý thuyết
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

- Props vs State
    - Truyền dữ liệu từ cha xuống con: Props
    - Truyền dữ liệu giữa component ngang hàng: để state trên component cha,rồi từ cha truyền ngược xuống component con.
    - Truyền dữ liệu giữa các trang khác nhau: dùng Redux.

- Dùng Extension: Reactjs code snippets cho VS code
- Khi tạo 1 component mới thì gõ: rsfp (=> tạo component mới nhanh)