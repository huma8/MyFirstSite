import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


/*
import {add} from "../functions.js" 
bu belgenin içinde bulunduğu klasöre geri dön ve functions.js dosyasını belgeye dahil et.

    console.log(add(12, 3))
cross origin hatası alacaksın. çözmek için:
konsolo bu kodu yaz : python -m http.server 
bu sayede yerel makinende bir python serveri çalıştırılacak.
daha sonra tarayıcında bu adresi arat: http://localhost:8000/
bu sayede sayfan gözükecek.

python serveri açtığında bazen css üzerinde yaptığın değişiklikler tarayıcının
önbelleği yüzünden gözükmüyor bu yüzden geçmişi silmeyi unutma.
*/

const appSettings = {
    databaseURL : "https://mobilesale-a3cdf-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListDB = ref(database, "ShoppingList")


const addBtn = document.getElementById("add-btn")
const inputText = document.getElementById("input-field")
const listElement = document.getElementById("shopping-list")



addBtn.addEventListener("click", function() {
    let inputValue = inputText.value
    push(shoppingListDB, inputValue)
    clearInputField()
})

if (ref(database, "ShoppingList") != null) {

    onValue(shoppingListDB, function(snapshot) {
        if (snapshot.exists()) {
            let itemsArray = Object.entries(snapshot.val())

            clearShoppingList()
            for (let i = 0; i < itemsArray.length; i++){
                let currentItem = itemsArray[i]
                let currentItemID = currentItem[0]
                let currentItemVal = currentItem[1]
                appendToShoppingList(currentItem)
            }
        } else {
            listElement.innerHTML = "Doldur bakıyım :D" 
        }
    })

}


function appendToShoppingList(item){
    //listElement.innerHTML += `<li>${itemValue}</li>`

    let itemID = item[0]
    let itemValue = item[1]
    let newEl = document.createElement("li")


    newEl.textContent = itemValue

    newEl.addEventListener("dblclick", function(){
        let exactLocationOfItemInDB = ref(database, `ShoppingList/${itemID}`)
        remove(exactLocationOfItemInDB)
    })

    listElement.append(newEl)
}

function clearShoppingList(){
    listElement.innerHTML = ""
}

function clearInputField(){
    inputText.value= ""
}