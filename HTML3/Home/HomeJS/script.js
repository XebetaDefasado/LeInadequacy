const pageText = document.getElementById('pageText');
const menu = document.getElementById('menu');
const menuOpener = document.getElementById('menuOpener');

const impList = document.getElementById('impButtons');
const homePage = document.getElementById('homePage');
const searchPage = document.getElementById('searchPage');
const textPage = document.getElementById('textHistoryPage');

const homeIcon = document.getElementById('homeIcon');
const searchIcon = document.getElementById('searchIcon');
const textIcon = document.getElementById('textIcon');

const buttons = document.getElementById('buttons');
const wordChanger = document.getElementById('wordChanger');
const wcText = document.getElementById('wcText');

const resetButton = document.getElementById('resetButton');
const rtText = document.getElementById('rtText');

//Lowercase transmutation -start//
wordChanger.addEventListener('click', () => {

    function argDepList(){
        let cont = 0;
        let storage = []
        for(let i = 0; i < arguments.length; i++){
            storage[cont] = arguments[cont];
            cont++
        }
        return storage
    }

    function pickRandom(arg){
        if(Array.isArray(arg)){
            let i = Math.floor(Math.random() * arg.length)
            return arg[i]
        }
        if(typeof arg === "number"){
            let i = Math.floor(Math.random() * Math.floor(arg))
            return i
        }
    }

    let wordArrayed = undefined
    let wordTexted = undefined
    let Info = undefined;
    let Probability = undefined

    const AdvConj = [
        "mas",
        "porém",
        "entretanto,",
        "todavia,"
    ]

    const UpperAdvConj = [
        "MAS",
        "PORÉM",
        "ENTRETANTO,",
        "TODAVIA,"
    ];

    while(pageText.textContent.includes(AdvConj[0])){
        wordArrayed = argDepList("m", "a", "s");
        wordTexted = wordArrayed.join("");
        Probability = pickRandom(2)
        if(Probability === 0){
            Info = pickRandom(UpperAdvConj);
            pageText.textContent = pageText.textContent.replace(wordTexted, Info)
        }
        if(Probability === 1){
            Info = pickRandom(AdvConj);
            pageText.textContent = pageText.textContent.replace(wordTexted, Info)
        }
    }
    while(pageText.textContent.includes(AdvConj[1])){
        wordArrayed = argDepList("p", "o", "r", "é", "m");
        wordTexted = wordArrayed.join("");
        Probability = pickRandom(2)
        if(Probability === 0){
            Info = pickRandom(UpperAdvConj);
            pageText.textContent = pageText.textContent.replace(wordTexted, Info)
        }
        if(Probability === 1){
            Info = pickRandom(AdvConj);
            pageText.textContent = pageText.textContent.replace(wordTexted, Info)
        }
    }
    while(pageText.textContent.includes(AdvConj[2])){
        wordArrayed = argDepList("e", "n", "t", "r", "e", "t", "a", "n", "t", "o", ",");
        wordTexted = wordArrayed.join("");
        Probability = pickRandom(2)
        if(Probability === 0){
            Info = pickRandom(UpperAdvConj);
            pageText.textContent = pageText.textContent.replace(wordTexted, Info)
        }
        if(Probability === 1){
            Info = pickRandom(AdvConj);
            pageText.textContent = pageText.textContent.replace(wordTexted, Info)
        }
    }
    while(pageText.textContent.includes(AdvConj[3])){
        wordArrayed = argDepList("t", "o", "d", "a", "v", "i", "a", ",");
        wordTexted = wordArrayed.join("");
        Probability = pickRandom(2)
        if(Probability === 0){
            Info = pickRandom(UpperAdvConj);
            pageText.textContent = pageText.textContent.replace(wordTexted, Info)
        }
        if(Probability === 1){
            Info = pickRandom(AdvConj);
            pageText.textContent = pageText.textContent.replace(wordTexted, Info)
        }
    }
    setTimeout( () => { //Basically format part//
        while(pageText.textContent.includes(UpperAdvConj[0])){
            wordArrayed = argDepList("M", "A", "S")
            wordTexted = wordArrayed.join("");
            Info = wordTexted.toLowerCase()
            pageText.textContent = pageText.textContent.replace(wordTexted, Info)
        }
        while(pageText.textContent.includes(UpperAdvConj[1])){
            wordArrayed = argDepList("P", "O", "R", "É", "M")
            wordTexted = wordArrayed.join("");
            Info = wordTexted.toLowerCase()
            pageText.textContent = pageText.textContent.replace(wordTexted, Info)
        }
        while(pageText.textContent.includes(UpperAdvConj[2])){
            wordArrayed = argDepList("E", "N", "T", "R", "E", "T", "A", "N", "T", "O")
            wordTexted = wordArrayed.join("");
            Info = wordTexted.toLowerCase()
            pageText.textContent = pageText.textContent.replace(wordTexted, Info)
        }
        while(pageText.textContent.includes(UpperAdvConj[3])){
            wordArrayed = argDepList("T", "O", "D", "A", "V", "I", "A")
            wordTexted = wordArrayed.join("");
            Info = wordTexted.toLowerCase()
            pageText.textContent = pageText.textContent.replace(wordTexted, Info)
        }
    }, 0)
})
//Lowercase transmutation -end//

//Uppercase transmutation -start//
wordChanger.addEventListener('click', () => {
    function pickRandom(arg){
        if(Array.isArray(arg)){
            let i = Math.floor(Math.random() * arg.length)
            return arg[i]
        }
        if(typeof arg === "number"){
            let i = Math.floor(Math.random() * Math.floor(arg))
            return i
        }
    }

    let word = undefined
    let Info = undefined;

    const capitularAdvConj = [
        "Mas",
        "Porém",
        "Entretanto",
        "Todavia"
    ]
    const capitularUpperAdvConj = [
        "MAs",
        "POrém",
        "ENtretanto",
        "TOdavia"
    ]

    while(pageText.textContent.includes(capitularAdvConj[0])){
        word = "Mas"
        Info = pickRandom(capitularUpperAdvConj)
        pageText.textContent = pageText.textContent.replace(word, Info)
    }
    while(pageText.textContent.includes(capitularAdvConj[1])){
        word = "Porém"
        Info = pickRandom(capitularUpperAdvConj)
        pageText.textContent = pageText.textContent.replace(word, Info)
    }
    while(pageText.textContent.includes(capitularAdvConj[2])){
        word = "Entretanto"
        Info = pickRandom(capitularUpperAdvConj)
        pageText.textContent = pageText.textContent.replace(word, Info)
    }
    while(pageText.textContent.includes(capitularAdvConj[3])){
        word = "Todavia"
        Info = pickRandom(capitularUpperAdvConj)
        pageText.textContent = pageText.textContent.replace(word, Info)
    }
    setTimeout(()=>{
        while(pageText.textContent.includes(capitularUpperAdvConj[0])){
            word = "MAs"
            Info = capitularAdvConj[0]
            pageText.textContent = pageText.textContent.replace(word, Info)
        }
        while(pageText.textContent.includes(capitularUpperAdvConj[1])){
            word = "POrém"
            Info = capitularAdvConj[1]
            pageText.textContent = pageText.textContent.replace(word, Info)
        }
        while(pageText.textContent.includes(capitularUpperAdvConj[2])){
            word = "ENtretanto"
            Info = capitularAdvConj[2]
            pageText.textContent = pageText.textContent.replace(word, Info)
        }
        while(pageText.textContent.includes(capitularUpperAdvConj[3])){
            word = "TOdavia"
            Info = capitularAdvConj[3]
            pageText.textContent = pageText.textContent.replace(word, Info)
        }
    }, 0)
})
//Uppercase transmutation -end//

//Styling -start//
menuOpener.addEventListener('click', ()=> {
    if(menu.style.width === "1vw"){
    menu.style.width = "17.5vw"
    menu.style.borderTopRightRadius = "calc(17.5vw / 5)"
    menu.style.borderBottomRightRadius = "calc(17.5vw / 5)"

    menuOpener.style.left = "calc(17.5vw - 23px)"
    menuOpener.style.transform = "rotate3d(0, 0, 1, 360deg)"
    menuOpener.style.width = "48px"
    menuOpener.style.height = "48px"
    menuOpener.style.borderRadius = "20px"
    setTimeout(() => {
        menuOpener.textContent = "Close"
    }, 0);
    homePage.style.width = "98px"
    homePage.style.height = "98px"
    homePage.style.borderWidth = "1px"
    homeIcon.style.width = "64px"
    homeIcon.style.height = "64px"
    homeIcon.style.transform = "rotate(360deg)";

    searchPage.style.width = "98px"
    searchPage.style.height = "98px"
    searchPage.style.borderWidth = "1px"
    searchIcon.style.width = "64px"
    searchIcon.style.height = "64px"
    searchIcon.style.transform = "rotate(360deg)";

    textPage.style.width = "98px"
    textPage.style.height = "98px"
    textPage.style.borderWidth = "1px"
    textIcon.style.width = "64px"
    textIcon.style.height = "64px"
    textIcon.style.transform = "rotate(360deg)";
    return
    }
    menu.style.width = "1vw"
    menu.style.borderTopRightRadius = "calc(1vw / 1)"
    menu.style.borderBottomRightRadius = "calc(1vw / 1)"

    menuOpener.style.left = "calc(1vw - 11px)"
    menuOpener.style.transform = "rotate3d(0, 0, 1, 0deg)"
    menuOpener.style.width = "23px"
    menuOpener.style.height = "48px"
    menuOpener.style.writingMode = "vertical-lr"
    menuOpener.textContent = "Open";

    homePage.style.width = "0px"
    homePage.style.height = "0px"
    homePage.style.borderWidth = "0"
    homeIcon.style.width = "0px"
    homeIcon.style.height = "0px"
    homeIcon.style.transform = "rotate(0deg)";

    searchPage.style.width = "0px"
    searchPage.style.height = "0px"
    searchPage.style.borderWidth = "0"
    searchIcon.style.width = "0px"
    searchIcon.style.height = "0px"
    searchIcon.style.transform = "rotate(0deg)";

    textPage.style.width = "0px"
    textPage.style.height = "0px"
    textPage.style.borderWidth = "0"
    textIcon.style.width = "0px"
    textIcon.style.height = "0px"
    textIcon.style.transform = "rotate(0deg)";
})
//Styling -end//

//Reset btn -start//
resetButton.addEventListener('click', () => {
    
})

