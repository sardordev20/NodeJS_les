// OPERATION SISTEM
// operation sestem bizga foydalanuvchi qaysi qurilmadan kirayotganini ko'rsatib beradi
// va uni texnik xususiyatlarin ham bilsak bo'ladi.
// os-ni ishlatishimizdan oldin chaqirib olishimiz kerak.

const os = require('os');

// biz ihslatayotgan platform-ani ko'rsatib beradi.
// console.log(os.platform());

// information yani biz ishlatayotgan os-dagi ma'lumotlarimizni ko'rsak bo'ladi.
// console.log(os.cpus());

// architecuture ya'ni biz ishlatayotgan qo'rilmamizni axtekturasini ko'rsatib beradi.
// console.log(os.arch());

// free memore ya'ni biz ishalatayotgan qo'rilmamizni qancha bo'sh joyi borigini ko'rsatib beradi.
// console.log(os.freemem())

// total memore ya'ni bizni qo'rilmamizning umumiy xotriasini ko'rsatadi
// console.log(os.totalmem());

// enter point biz qanaqadir fail-ni ochadigan bo'lsak qayirdan boshlanishini ko'rsatib beradi
console.log(os.homedir());