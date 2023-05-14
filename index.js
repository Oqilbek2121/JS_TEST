// let userName = prompt("Ismingizni kiriting");
// let test1 = prompt("HTML dasturlash tilimi? \n A)Yoq Dasturlash tili emas \n B)Dasturlash tili \n C)Hammani ozi ixtiyoriy");
// document.write(userName);
// document.write("<br/>");
// document.write("1-savol" + "\n " + "Sizning javobingiz" + " " + test1 + " " + "Tog'ri javob :A");

function test() {
    alert("Testlar soni: 4; \nTestdan o'tish: 3;");
    let nameLastName = prompt("Ismingizni kiriting");
    let test1 = prompt();

    document.getElementById('content').innerText = nameLastName + "\n " + "1-savol" + "\n " + "Sizning javobingiz" + " " + test1 + " " + "Tog'ri javob :A";

}