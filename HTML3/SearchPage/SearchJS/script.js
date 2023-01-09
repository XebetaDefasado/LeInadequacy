const menu = document.getElementById('menu')
const menuOpener = document.getElementById('menuOpener');
const impList = document.getElementById('impButtons');

const page = document.getElementById('page')
const homePage = document.getElementById('homePage');
const searchPage = document.getElementById('searchPage');
const textPage = document.getElementById('textHistoryPage');

const homeIcon = document.getElementById('homeIcon');
const searchIcon = document.getElementById('searchIcon');
const textIcon = document.getElementById('textIcon');

//Styling -start//
menuOpener.addEventListener('click', ()=> {
    if(menu.style.width === "1vw"){
    menu.style.width = "17.5vw"
    menu.style.borderTopRightRadius = "calc(17.5vw / 5)"
    menu.style.borderBottomRightRadius = "calc(17.5vw / 5)"
    
    page.style.width = "calc(100vw - 1px - 18.5vw)"
    page.style.left = "calc(17.5vw + 1px)"

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

    page.style.width = "calc(100vw - 1px - 1vw)"
    page.style.left = "calc(1vw + 1px)"

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