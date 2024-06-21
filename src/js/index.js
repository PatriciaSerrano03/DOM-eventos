// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

//DOM - Event
const ButtonElement = document.getElementById('button');

const printClick = () => {
  console.log('CLICK');
};

ButtonElement.addEventListener('click', printClick);

//DOM - Objetos
const Button2Element = document.getElementById('button2');

const printClick2 = event => {
  console.log(event);
};

Button2Element.addEventListener('click', printClick2);

//Escuchar un Scroll
/* const ViewScroll = event => {
  console.log(event);
};

window.addEventListener('scroll', ViewScroll); */
