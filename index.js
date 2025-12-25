// document.getElementById("sayac").innerText = 10  ilk kod :D
// matematik ifadeleri de kullanabilirsin. işlemleri  hardcode(elinle teker teker yazmak) yerine değişkenlerle yapabilirsin.)

// let sayac = 5 + 5

// console.log(sayac)

// ctrl + k + c tuşları ile hepsini yorum satırı yapabilirsin fare ile seçip.



let count = 0

let greeting = document.getElementById("greet1")

let welcome = "OOO, Hoşgeldin! "
let urName = "Ertuğrul"

greeting.innerHTML = welcome + urName

// html deki sınıfının idsini girerek onu başka bir değişkene kaydettik.

let counter = document.getElementById("counter1")
function increment() {
    count += 1
    // öğrendiğimiz ilk kodu uygulama zamanı geldi :D
    counter.innerText = count
} 

//artık textContent i kullanıyoruz tamam mı :D
function save() {
    let entries = document.getElementById("entries1")
    // entries.innerText += count + " - "    düzgün çalışmaz.
    // veya entries.innerHTML += ... şeklinde biliyon olayını zaten.

    // entries.innerHTML = entries.innerHTML + count + " - "    ama 
    // bu da o kadar efektif değil. o yüzden şunu yazıyoruz.
    entries.textContent += count + " - "
    
    count = 0
    counter.textContent = count
}

//hesap makinesi için:

let num1 = 10
let num2 = 7

document.getElementById("num1").textContent = num1
document.getElementById("num2").textContent = num2

function add() {
    let result = num1 + num2
    document.getElementById("result1").textContent = "RESULT = " + result
}

function subtract() {
    let result = num1 - num2
    document.getElementById("result1").textContent = "RESULT = " + result
}

function divide() {
    let result = num1 / num2
    document.getElementById("result1").textContent = "RESULT = " + result
}

function multiply() {
    let result = num1 * num2
    document.getElementById("result1").textContent = "RESULT = " + result
}

// Kart oyunu bölümü
// blackjack yerine ne yapacaksın?-------------------------------------------------------
// rastgele bir sayı seçilir sonra kullanıcıların o sayıya olan yakınlığı vb.. bir benzeri yapılır.








let cards = []
let sum = 0
let tamIsabet = false
let isAlive = false
let message = ""

/* bu iki değişken birbiriyle çok bağlı o yüzden bunları bir objeye kaydedeceğiz.
let para = 0
let oyuncu = "Ertuğrul"

sınıfların yani objelerin içine fonksiyon kaydedersen bunlara method denir. ve key:value
çiftinden yalnız keyi çağırmanla fonksiyon çalışır. fonksiyona özel bir isim belirtmene gerek
bile yok.
*/
let player = {
    name: "Ertuğrul",
    money: 100
}


let moneyMessage = document.getElementById("para1")
moneyMessage.textContent = player.name + " = " + player.money
let titleMessage = document.getElementById("msg-gameround")
let sumEl = document.querySelector("#sum-element")
sumEl.textContent = "Toplam: "
/*bu queryselector un diğerinden farkı: query css elementine gidip onu değiştirir.
eğer parantez  içine body yazarsan tüm sayfanın görünümünü değiştirecektir.*/
let cardsEl = document.getElementById("cards-element")
cardsEl.textContent = "Kartlar: "

function getRandomCard(){
    /*  Math.random 0 ile bir arasında rastgele bir float değer seçer. 
        Math.floor içine yazılan değerin küsüratını kaldırır.
    */
    let randomkart = Math.floor(Math.random()*13 + 1)
    if (randomkart === 1){
        return 11
    }
    else if (randomkart >= 11) {
        return 10
    }
    else {
        return randomkart
    }
}

function displayCards(){
    moneyMessage.textContent = player.name + " = " + player.money
    cardsEl.textContent = "Kartlar: "
    sumEl.textContent = "Toplam: " + sum
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
}

function renderGame(){
    displayCards()
    /* burada 3 eşittir kullanılıyor dikkat et. 2 eşittir de kullanabilirdin ama kullansaydın
    sum == "100" ifadesi ve sum == 100 ifadesinin ikisini de doğru kabul edecekti biz bunu
    istemiyoruz. === katı eşitlik anlamında kullanılır.*/
    if (sum < 21) {
        message = "kart çekmek ister misin?"
    } 

    else if (sum === 21) {
        message = "sayıyı tutturdun!"
        tamIsabet = true
        para += 100
    } 

    else {
        message = "kaybettin."
        isAlive = false
    }
    titleMessage.textContent = message
}

function startGame(){
    isAlive = true
    tamIsabet = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function newCard() {
    console.log("şuan görüyorsun beni.")
    //Koşul ifadesi doğru bir hata da vermiyor ama sağlanmıyor delirecem.
    //programda doğru fonksiyonu çağırdığından emin ol akıllı. :D
    if (isAlive === true && tamIsabet === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}








let myArray = ["C#", "C", "C++", "Python", "Javascript", "Unity", "Blender"]
// myArray.length                   bu komut listenin uzunluğunu bize döndürecek.
// myArray.push("react")            bu komut listeye react kelimesini ekleyecek (append bildiğin)
/* pop,splice,filter,shift, unshift,lowdash,remove,delete,reset   
komutlarıyla listeden eleman silebilirsin. biz sondaki elemanı pop() ile sildik.*/





