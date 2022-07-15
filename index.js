document.getElementById("tinhLuong").onclick = function() {
  //input
   var day = document.getElementById("day").value;
   const salary = 100000;

   //count
   var tongluong = day * salary;
   var format = new Intl.NumberFormat("vn-VN");
   var totalVND = format.format(tongluong);

   //output
   var showSalary = "";
   showSalary += "<p>The salary: </p>"
   showSalary += "<p>" +totalVND+ "</p>"
   document.getElementById("tongLuong").innerHTML = showSalary;
}

document.getElementById("count").onclick = function() {
 //input
   var n1 = document.getElementById("n1").value;
   var n2 = document.getElementById("n2").value;
   var n3 = document.getElementById("n3").value;
   var n4 = document.getElementById("n4").value;
   var n5 = document.getElementById("n5").value;
//count
   var valueofN = (n1+n2+n3+n4+n5)/5;
//output
   var showvalue = "";
   showvalue += "<p>the average value is: </p>"
   showvalue += "<p>"+ valueofN + "<p>";

   document.getElementById("average").innerHTML = showvalue;
}



document.getElementById("change").onclick = function() {
   //input
    const Usd = 23500;
   var vnMoney = document.getElementById("inputN").value;
    //count
    var vndValue = Usd * vnMoney;
    var format = new Intl.NumberFormat("vn-VN");
    var totalVND = format.format(vndValue);
 
    //output
    var showMoney = "";
    showMoney += "<p>Money number: </p>"
    showMoney += "<p>" +totalVND+ "</p>"
    document.getElementById("showN").innerHTML = showMoney;
 }


 document.getElementById("countM").onclick = function() {
   //input 
   var dai = document.getElementById("dai").value*1;
   var rong = document.getElementById( "rong").value*1;

   //count
   var chuvi = (dai+rong)*2;
   var dientich = dai * rong;
   //output
   var showQ = "";
   showQ += "<p>chu vi = "+ chuvi + "</p>"
   showQ += "<p>dien tich = "+ dientich + "</p>"
   document.getElementById("show").innerHTML = showQ;
 }
 //bai 5
 document.getElementById("counter").onclick = function() {
   //input
   var num = document.getElementById("number").value;
   var hang_chuc = num / 10;
   var hang_dv = num % 10;
    //count
    var ki_so = hang_chuc + hang_dv;
    //output
    var getout = "";
    getout += "<p>tong cua 2 ki so : </p>";
    getout += "<p>"+ Math.floor(ki_so) + "</p>"
    document.getElementById("board").innerHTML = getout ; 

 }