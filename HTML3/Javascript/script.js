const pageText = document.getElementById('pageText');
const wordChanger = document.getElementById('wordChanger')


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