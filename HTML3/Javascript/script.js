const pageText = document.getElementById('pageText');
const wordChanger = document.getElementById('wordChanger')

wordChanger.addEventListener('click', () => {
    function list(n1, n2){
        let cont = 0;
        let storage = [];
        for(let i = n1; i <= n2; i++){
            storage[cont] = i;
            cont++
        }
        return storage
    }

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
    setTimeout( () => {
        while(pageText.textContent.includes(UpperAdvConj[0])){
            wordArrayed = argDepList("M", "A", "S")
            wordTexted = wordArrayed.join("");
            Info = wordTexted.toLowerCase()
            pageText.textContent = pageText.textContent.replace(wordTexted, Info)
            console.log(1)
        }
        while(pageText.textContent.includes(UpperAdvConj[1])){
            wordArrayed = argDepList("P", "O", "R", "É", "M")
            wordTexted = wordArrayed.join("");
            Info = wordTexted.toLowerCase()
            pageText.textContent = pageText.textContent.replace(wordTexted, Info)
            console.log(2)
        }
        while(pageText.textContent.includes(UpperAdvConj[2])){
            wordArrayed = argDepList("E", "N", "T", "R", "E", "T", "A", "N", "T", "O")
            wordTexted = wordArrayed.join("");
            Info = wordTexted.toLowerCase()
            pageText.textContent = pageText.textContent.replace(wordTexted, Info)
            console.log(3)
        }
        while(pageText.textContent.includes(UpperAdvConj[3])){
            wordArrayed = argDepList("T", "O", "D", "A", "V", "I", "A")
            wordTexted = wordArrayed.join("");
            Info = wordTexted.toLowerCase()
            pageText.textContent = pageText.textContent.replace(wordTexted, Info)
            console.log(4)
        }
    }, 2000)
})
