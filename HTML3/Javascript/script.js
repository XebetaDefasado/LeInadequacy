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
        let wordArrayed = argDepList("m", "a", "s");
        let wordTexted = wordArrayed.join("");
        let Info = undefined;
        let Probability = pickRandom(2)
        if(Probability === 0){
            Info = pickRandom(UpperAdvConj);
            pageText.textContent = pageText.textContent.replace(wordTexted, Info)
        }
        if(Probability === 1){
            Info = pickRandom(AdvConj);
            pageText.textContent = pageText.textContent.replace(wordTexted, Info)
        }
    }
})
