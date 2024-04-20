/* Validação do botao de login */

function validar(){
    let usuario = document.getElementById('usuario').value; // busca as informaçoes do id da outra pagina
    let senha = document.getElementById('senha').value;

    if(usuario === 'Admin' && senha === '12345' ){ // === compara e valida a informação
        window.open('../pages/dashboard.html'); // vai abrir em uma janela o outra pagina 
    }else{
        alert('Usuario/senha invalida')
    }
}

/* Criano um slideshow automatico */

let imagens=['./images/Carro1.jpg','./images/Carro2.jpg','./images/Carro3.jpg']; // define as imagens na variavel
let index = 0; // puxa o indice da imagem q esta dentro a lista, no caso começar pela 0
let time = 3000; // define o tempo que ira aparecer a imagem, no caso 3segs

function slideShow(){ 
    document.getElementById('imgbanner').src=imagens[index]; // puxa a imagem da variavel
    index++; // Faz passar entre as imagens
    if(index == imagens.length){ // quando o index for igual a quantidade de imagens na variavel, volta para o index 0, criando um loop
        index = 0
    }
    setTimeout('slideShow()', time); // set timeout define o fim de um loop ou tempo
}
slideShow() // chama a função para funcionar quem no python

