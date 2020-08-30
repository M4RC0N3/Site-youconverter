//============================================LINK_DA LOGO===================================================
const logolink = document.querySelector('.logo');

logolink.addEventListener('click', olhaclick)

function olhaclick(){

    window.scroll({
        top: 0,
        behavior:"smooth"
    });
}

//===================================LINK_DO_MENU===========================================================
const menu = document.querySelectorAll('header a');
//console.log(menu);
menu.forEach(verificaclick)

function verificaclick(item){

    item.addEventListener('click', scrollclick);
}

function scrollclick(event){
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop; 
    //console.log(element);

    window.scroll({    
        top: to, 
        behavior: "smooth"
    });
}
//===================================================================================================

const area_botao = document.querySelectorAll('button');
//console.log(area_botao);

area_botao.forEach(clica);

function clica(item){
    item.addEventListener('click', btns_convert);
}

function btns_convert(event){
    const element = event.target;
    const id = element.getAttribute('id');
    //console.log(id);

    function pegavalor(){
        var text = document.getElementById("area_conversor").value;
        return text;
    }
    function mostravalor(){
       var textmod = document.getElementById("area_conversor").value = convert;
        return textmod;   
    }

    if (id == 'btn_minuscula'){
        pegavalor();       
        convert = pegavalor().toLowerCase();
        mostravalor()      
    }

    if (id == 'btn_maiuscula' ){
        pegavalor();
        convert = pegavalor().toUpperCase();     
        mostravalor();
    }

    if (id == 'btn_alternado'){     
        function separa(){
            var text = pegavalor().toLowerCase();
            var separado = text.split('');
            return separado;
        }
        //console.log(separa());
        var qtdletras = separa().length;
        let i = 0;
        convert = separa();
       
        for(i; i < qtdletras; i=i+2){
                //console.log(separa()[i]+' par');
            convert[i]= convert[i].toUpperCase();
        }
        convert = convert.join('');
        //console.log(convert);
        mostravalor();
    }

    if (id == 'btn_inverte'){
        let div = pegavalor().split('');       
        let invert = div.reverse();
        convert = invert.join('');
        mostravalor();     
    }
    if (id == 'btn_seleciona'){
        document.getElementById("area_conversor").select();
    }
    if (id == 'btn_primeira_palavra'){

        var space = pegavalor();
        let qtd_palavras = space.length;
        console.log(space.split(''));

        let i = 0;
        /* for(i; i < qtd_palavras; i++){
            

        } */



    }
}