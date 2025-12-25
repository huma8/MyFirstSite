let savedurls = []
let localRecords = JSON.parse(localStorage.getItem("CURRENT-URL"))
/*
//bu listeyi yerel depolamada kullanabilmemiz için stringe çevirmeliyiz. bu yüzden:
savedurls = JSON.stringify(savedurls)
// yine eski haline almak için de bu yapılır, ayrıştırma:
savedurls = JSON.parse(savedurls)
// türünü de bu şekilde görebilirsin.
console.log(typeof savedurls)
*/

//const sayesinde bunları değiştirilemez değişkenler olarak adlandırdık.
const inputText = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

const tabBtn = document.getElementById("tab-btn")
const clearBtn = document.getElementById("clear-btn")


//BAŞLANGIÇ:


if (localRecords) {
    savedurls = localRecords
    renderListElements(savedurls)
}

function renderListElements(record) {
    let listItems = ""
    for(let i = 0; i < record.length; i++){
        //bu kodu htmli anlayacak hale getirmek için innerHtml kullanılır.
        //listItems +="<li>" + "<a href=' " + savedurls[i]  +" ' target='_blank' '>" + savedurls[i] + "</a>" + "</li>"
        listItems += `
        <li>
            <a href='${record[i]}' target='_blank'>
                ${record[i]}
            </a>
        </li>
        `
            
        //ama farklı bir şekilde de bunun aynısını yaptırabilirsin. 
        //const li = document.createElement("li")
        //li.textContent = savedurls[i]
        //ulEl.append(li)
    }
    ulEl.innerHTML = listItems
}

function getText(){
    if (inputText.value != "") {
        savedurls.push(inputText.value)
        storeData()
    }
    inputText.value = ""
}

function storeData() {
    localStorage.setItem("CURRENT-URL", JSON.stringify(savedurls))
    console.log(localStorage.getItem("CURRENT-URL"))
}


// TIKLAMA KONTROLÜ:

inputBtn.addEventListener("click", function() {
    getText()
    renderListElements(savedurls)
})

/* çift tıklama kontrolü
html de < ondblclick = "function()">
javascript te  nesne.ondblclick = function() {kodlar.}
eventlistener ile nesne.addEventListener("dblclick", kodlar etc.)
*/
clearBtn.addEventListener("dblclick", function() {
    savedurls = []
    localStorage.clear()
    renderListElements(savedurls)
})


/* çalışması için chrome extensionsdan güncellemelisin ve 
sadece extension olarak çalışıyor site olarak değil.*/
tabBtn.addEventListener("click", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        savedurls.push(tabs[0].url)
        localStorage.setItem("CURRENT-URL", JSON.stringify(savedurls))
        renderListElements(savedurls)
    })
})








