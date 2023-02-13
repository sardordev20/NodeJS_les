// MODULE FILESISTEM. FS

const fs = require("fs"); // fs bizga yangi fail yoki folder q'shib beradi.
const path = require("path"); // fs-ni ishlatayotgan payti har doim path ni ham chaqirishimiz kerak

// fs.mkdir(path.join(__dirname, "template"), (err) => {
// path.join bizga yangi narsa yuklab beradi.
// fs da har doim 3 ta parametre qabul qiladi
/*
  1) path
  2) option buni ishlatmasak ham bo'ladi.
  3) err
   */
// if (err) throw new Error();
// biz har doim nodejs-da fs ishlatganimizda err-ni ko'rsatib o'tib ketishimiz kerak

//   console.log("Folder was create successfully");
// });

// fs.mkdir(path.join(__dirname, "notes"), err => {
//   if (err) throw new Error();

//   console.log("Folder was create successfully");
// });

fs.writeFile(
  path.join(__dirname, "notes", "test.txt"),
  "Create new course NodeJS",
  (err) => {
    if (err) throw new Error();

    console.log("File was create successfully");

    fs.appendFile(
      path.join(__dirname, "notes", "test.txt"),
      " and microservice project",
      (err) => {
        if (err) throw new Error();

        console.log("File was changed successfully");

        fs.readFile(path.join(__dirname, "notes", "test.txt"),"utf-8", (err, data) => {
          if (err) throw new Error();
        
          // console.log(Buffer.from(data).toString()); Buffer-ni o'qishni oson yo'li optionga utf-8 qilib qo'ysak bo'ldi
          console.log(data);
        });
      }
    );
  }
);

