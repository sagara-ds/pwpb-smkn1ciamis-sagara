/*let i;
for (i = 0; i <= 1000; i++) {
    console.log(i + ". Abdi moal kasiangan deui")
}*/

/*let x = 0;
while(x <= 10) {
    if (x == 2) {
        console.log(x + "Ini baru di custom");
    }else {
        console.log(x + ". ini x")
    }
    x++;
}*/

/*let i;
for (i = 1; i <= 50; i++) {
    if (i % 2 ){
        console.log (i + " Adalah bilangan ganjil")
    }else {
        console.log(i + " Adalah bilangan genap")
    }
}*/

var i = 0;

function login(){
user = prompt("Masukkan username:");
pass = prompt("Masukkan Pass:");

if (user == "gar" && pass == 123) {
    i=0;
}else{
    alert("USERNAME ATAU PASSWORD SALAH");
    i++;
};
}

do{
    login;
}while(i = 3){
    alert("Diblokir");
}
