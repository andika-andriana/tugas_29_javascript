function regex() {
  let data = "Belajar menimba ilmu programming bersama Niomic";
  hasil = new RegExp("bersama");
  return hasil.exec(data);
}
console.log(regex());