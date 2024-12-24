// var name="gorkem";
// var age=24;

// function go(name, age){
//     alert(name);
//     alert(age);

// }
// go('Gorkem',24);
// go('mete', 35);
// var name=prompt();
//--------------------------------------------
// function add(first, second) {
//     return first + second

// }
// var sum=add(3,4);
// alert(sum);
//alert(add(3, 4));
//------------------------------------------
// function go(name, age) {
//     if (age < 20) {
//         return name + " küçüktür";
//     } else {
//         return name + " büyüktür";
//     }
// }
// alert(go('görkem', 24));

//recursion javascript

let countDownFrom = (num) => {
    if (num < 0) return;
    console.log(num)
    countDownFrom(num - 1)
}
countDownFrom(10)



// let categories = [
//     { id: 'animals', 'parent': null },
//     { id: 'mammals', 'parent': 'animals' },
//     { id: 'cat', 'parent': 'mammals' },
//     { id: 'dog', 'parent': 'mammals' },
//     { id: 'labrodor', 'parent': 'dog' },
//     { id: 'husky', 'parent': 'dog' },
//     { id: 'persian', 'parent': 'cat' },
//     { id: 'exotic', 'parent': 'cat' }
// ]

// let makeTree = (categories, parent = null) => {
//     let node = {}
//     categories
//         .filter(x => x.parent == parent)
//         .forEach(x => { node[x.id] = makeTree(categories, x.id) })
//     return node;
// }
// console.log(
//     JSON.stringify(
//         makeTree(categories),
//         null,
//         2
//     )
// )
// {
//     animals: {
//         mammals: {
//             dog: {
//                 labrodor: null
//                 husky: null
//             }
//         }
//         mammals: {
//             cat: {
//                 persian: null
//                 exotic: null
//             }
//         }
//     }
// }

function go() {
    console.log(arguments);
};
go('text ');
ConsoleArguments(1, 2, 3, 4, 5, 6, 7)
function ConsoleArguments() {
    for (i = 0; i < arguments.length; i++) {
        console.log("argüman " + (i + 1) + " = " + arguments[i])

    }
}


let meyve = ['banana', 'berry']
meyve.push('armut');
console.log(meyve);
meyve.pop();
console.log(meyve);
let meyveler=['banana','berry'];
meyveler.unshift('apple');
console.log(meyveler);

// var obj=new Object();
var obj={};
obj.name="Ülker Holding";
var ogrenci=new Object();
ogrenci["ad"]="Görkem"
ogrenci["yas"]=24
console.log(ogrenci["ad"]);
console.log(ogrenci["yas"]);
console.log(obj.name);

var student={
    name:"görkem",
    lastname:"demirkol",
    age:24,
    address:{
        street:1486,
        city:"Denizli",
        country:"Türkiye"
    }
};
document.write("<br>"+student.name+"<br>");//document.body.innerHTML=(student.name) yeni Yazılışı
document.write(student.address.street);



var arryName=new Array(3);
arryName[0]=123;
arryName[1]=234;
arryName[2]=345;
arryName[3]=567;
document.write("<br>"+arryName);
console.log(arryName.length);

// var arr =[1,2,3,4];
// var aet =0;

// for(var i=0; i<arr.length; i++){
//     aet+=arr[i];
// }
// console.log(aet);

// var arr = [1,"buğra",12,"erkan"];
// var aet =0;
// for(var i=0; i<arr.lenght; i++){
//     console.log(arr[i])
// }

// var arr= [
//     [1,3,5],
//     [2,4,6]
// ];
// alert(arr[1][1]);

// var arr= [1,2,-5,80,120];
// var index =arr.indexOf(80);
// alert(index);

// var arr =[12,45,-3,82,12,78,12,45,82];
// var counter =0;
// var index = arr.indexOf(12);
// while(index !=-1){
//     counter++;
//     index= arr.indexOf(12, index+1);
// }
// console.log(counter);

// var index = arr.lastIndexOf(12)
// console.log(index);

// var index =arr.lastIndexOf(12);
// while(index !=-1){
//     counter++;
//     if(index==0)
//         break;
//     index=arr.lastIndexOf(12, index-1);

// }
// console.log(counter);


// var array=[10,1,20,21,30,3,2,15,28,37,100];

// function compareFunc(a,b){
//     if(a>b)
//         return -1;
//     else if (b>a)
//         return 1;
//     else
//     return 0;
// }

// array.sort(compareFunc);
// console.log(array);

// var icecek ="kola,kahve,çay";
// var array = icecek.split(',');
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);

// var array = ["kola","kahve","çay"];
// var str = array.join();
// console.log(str);

var str ="buğra \nellek";
// alert(str);
// alert(str[0]);
var str2="osman";
var toplam =str +" ve " + str2;
console.log(toplam);
console.log(str.length);
var upperstr = str.toUpperCase();
console.log(upperstr);

// var str3 =" mete mete mete osman murat berk mete osman murat berk berk berk";
// var bul ="mete";
// içinde kaç tane osman geçiyor

var yenistr = str2.substring(1,3);
console.log(yenistr);





























function getMonthNameFromNumber(monthNumber){
    var monthName= [
        "ocak", "şubat", "mart", "nisan", "mayıs", "haziran", "temmuz", "ağustos", "eylül", "ekim", "kasım", "aralık"
    ];
    return monthName[monthNumber];
}
var monthName = getMonthNameFromNumber(new Date(1999, 0, 14, 11, 20, 0, 0).getMonth());
document.write(monthName+"<br>");

var dateOfBirth = new Date("January 13, 1980 11:20:00");
var monthNumber = dateOfBirth.getMonth();
document.write(monthNumber);

const yiyecek ={
    init: function(type) {
        this.type = type
    },
    eat: function(){
        console.log('Ben bugün '+this.type + ' yedim.');

    }
}
const iskender= Object.create(yiyecek)
iskender.init('iskender');
iskender.eat();


// let öğrenciler = {

//     ad : 'buğra',
//     soyad : 'ellek',
//     doğumTarihi:'11/23/1999',
//     bilgiGöster : function(){
//         document.getElementById('öğrenciler').innerHTML= "öğrenci adı: " + this.ad + ' ' + this.soyad;
//     },
//     yasGöster: function(){
//         const fark =Date.now() - Date.parse(this.doğumTarihi);
//         const öğrenciyasi = Math.floor(fark/(365*24*60*60*1000));
//         document.getElementById('öğrenciYasi').innerHTML =(this.ad + ' ' + this.soyad + ' şu anda ' + öğrenciyasi + ' yaşında');
//     }



// }
// öğrenciler.bilgiGöster();
// öğrenciler.yasGöster();

function kisiler(ad, soyad, doğumtarihi){
    this.ad = ad;
    this.soyad = soyad;
    this.doğumtarihi=doğumtarihi;
    this.bilgiGöster = function(){
        document.getElementById('öğrenciler').innerHTML= "öğrenci adı: " + this.ad + ' ' + this.soyad;
    },
    this.yasGöster = function(){
        const fark =Date.now() - Date.parse(this.doğumTarihi);
        const öğrenciyasi = Math.floor(fark/(365*24*60*60*1000));
        document.getElementById('öğrenciYasi').innerHTML =(this.ad + ' ' + this.soyad + ' şu anda ' + öğrenciyasi + ' yaşında');
    }

}

let buğra = new kisiler('buğra', 'ellek', '23/11/1999')
buğra.bilgiGöster();
buğra.yasGöster();

function otel(name, şehir, yıldız, odaSayısı, rezerveOda){
    this.name=name;
    this.şehir=şehir;
    this.yıldız=yıldız;
    this.odaSayısı=odaSayısı;
    this.rezerveOda=rezerveOda
    this.bosOda= function(){
        return this.odaSayısı - this.rezerveOda;
    }
    this.müsaitlikOranı = function(){
        return Math.floor(this.bosOda() / this.odaSayısı *100) + ' % ';
    }

}

let Anemon = new otel('Anemon otel', 'Denizli', 4, 100, 26),
Dedeman = new otel('Clup Dedeman', 'Denizli', 5, 150, 59),
Montebello = new otel('Montebello', 'Fethiye', 5, 300, 250);

document.getElementById('otel1').innerHTML = Anemon.şehir + '\' de bulunan ' + 'Anemon ' 
+ Anemon.yıldız + ' yıldızlı bir oteldir. Anemon\'un boş odası ' + Anemon.bosOda() + ' adettir. Müsaitlik oranı da ' + Anemon.müsaitlikOranı() + '\'dır.';


class otelYönetimi{
    constructor(name, şehir, yıldız, odaSayısı, rezerveOda){
        this.name=name;
        this.şehir=şehir;
        this.yıldız=yıldız;
        this.odaSayısı=odaSayısı;
        this.rezerveOda=rezerveOda
        this.bosOda= function(){
            return this.odaSayısı - this.rezerveOda;
        }
        this.müsaitlikOranı = function(){
            return Math.floor(this.bosOda() / this.odaSayısı *100) + ' % ';
        }
    
    }
}

// class insanlar{
//     #id
//     constructor(ad, soyad, doğumTarihi) {
//         this.ad=ad;
//         this.soyad=soyad;
//         this.doğumTarihi=this.doğumTarihi;
//         this.#id = Math.floor(Math.random()*100);

        
//     }
//     get id() {
//         return this.#id;

//     }

// }
// let Buğra = new insanlar('buğra', 'ellek' , '11/23/1999');
// console.log(Buğra);

// class Teacher extends insanlar{
//      constructor(ad, soyad, doğumTarihi, subjects = []){
//         super(ad, soyad, doğumTarihi);
//         this.subjects = subjects;
//      }
//      showSubjects(){
//         console.log(this.ad + ' ' + this.soyad + ' derse girecek. ' + 
//             this.subjects.join(' ,'));
//      }


// }
// const meteB = new Teacher('Mete', 'Başkafa', '14/06/1990', ['yazılım', 'matematik']);

// meteB.showSubjects();

//      class It extends Teacher{
//          constructor(ad, soyad, doğumTarihi, subjects=[], kıdem){
//              super(ad, soyad, doğumTarihi, subjects=[]);
//              this.kıdem= kıdem;
//          }
//          kıdemGöster(){
//              console.log(this.ad + ' ' + this.soyad + ' ' + this.kıdem + ' seviyesine sahiptir. ');
//          }
//     }

//  const Osman = new It('osman', 'şenel', '01/04/1992', ['css', 'html', 'js'], 'kıdemsiz');
//  Osman.showSubjects();
//  Osman.kıdemGöster();
//  console.log(Osman);

class insanlar{
    constructor(ad, soyad, doğumTarihi){
        this.ad=ad;
        this.soyad=soyad;
        this.doğumTarihi=doğumTarihi;
    }
}
class Teacher extends insanlar{
    constructor(ad, soyad, doğumTarihi, subjects=[]){
              super(ad, soyad, doğumTarihi),
              this.subjects= subjects;
            }
            showSubjects(){
                console.log(this.ad + ' ' + this.soyad + ' derse girecek' + this.subjects.joi)
            }
}

class It extends Teacher{
    constructor(ad, soyad, doğumTarihi, subjects=[], kıdem){
        super(ad, soyad, doğumTarihi, subjects=[]);
        this.kıdem= kıdem;
}
    showSubjects(){
        console.log(this.ad + ' ' + this.soyad + ' ile birlikte bt derslerini öğrenebilecek.' + this.subjects.join(','));
        document.write('<p>' + this.ad + ' ' + this.soyad + '</p><ol><li>' + this.subjects.join('<li></li>') + '</li></ol>');
    }
}

const Osman = new It('osman', 'şenel', '01/04/1992', ['css', 'html', 'js'], 'kıdemsiz');
Osman.showSubjects();

console.log(Osman instanceof insanlar);
console.log(Osman instanceof Teacher);
console.log(Osman instanceof It);
