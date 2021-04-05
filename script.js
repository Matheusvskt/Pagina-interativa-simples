window.onload = function (){
    buttons = document.querySelectorAll("nav button"); // queryselector seleciona todos os botôes do elemento nav
    for (let button of buttons){
        button.onclick = () => openTab(button.dataset.tabname); //associando ao evento click de cada botão a chamada a função openTab e passando o argumento do atributo 
    }
    openTab("BCC");
}

function openTab(tabName){// função opentab deixa visivel o section BCC

    const lastTabActive = document.querySelector(".tabActive"); // busca na tabActive o section visivel 
    if(lastTabActive !== null) 
        lastTabActive.className = ""; //remove a classe tabActive do elemento section, fazendo com que o section ativo deixe de ser visivel 


    const lastButtonActive = document.querySelector(".buttonActive");//busca no buttonActive o botao ativo
    if(lastButtonActive !== null)
        lastButtonActive.className = "";//remove a classe buttonActive do elemento section, fazendo com que o botao ativo fique inativo

    const query1 = ".tabs > section[data-tabname='" + tabName + "']";// usando a string css como seletor de atributo 
    const query2 = "nav  button [data-tabname='" + tabName + "']";  //  usando a string css como seletor de atributo 

    document.querySelector(query1).className = "tabActive"; // selectorAll seleciona todas as section do tabActive, indicando nova classe que o elemento section vai ter. Tornando- o visivel
    document.querySelector(query2).className = "buttonActive"; // seleciona todos os botões dentro do menu de navegação e depois seleciona o botão que o usuario clicou  

}
