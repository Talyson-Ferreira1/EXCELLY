//---  Esse código é responsável por abri e fechar o menu responsivo  ----------

const btnMobile = document.getElementById( 'btn-mobile');
const nav = document.getElementById('nav');

function toggleMenu(event){
    if (event.type === 'touchstart')event.preventDefaut();
    nav.classList.toggle('active'); 
}


btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

//---  Esse código é responsável por iniciar as animações de entrada dos elementos  ----------


//---  Sobre ----------

var btnSobre = document.querySelector('.container-text-sobre a');
var videoPort = document.querySelector('.portfolio-preview');
var clipPort = document.querySelector('.clip-portfolio');

btnSobre.onmouseenter = function(){
    btnSobre.classList.add('active')
    videoPort.classList.add('active')
    clipPort.play()
    this.innerHTML="Ir para o site"
}
btnSobre.onmouseout = function(){
    btnSobre.classList.remove('active')
    videoPort.classList.remove('active')
    clipPort.pause()
    this.innerHTML="Ver portfólio"
}
//---  Footer ----------


