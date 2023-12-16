const images = 
["./assets/img/Cueva/Pantalla_entre_niveles.PNG",
 "./assets/img/Cueva/mapa.png",
 "./assets/img/Cueva/Pantalla_entre_niveles_2.png"
];
const texts = 
["Los aventureros se adentran en una oscura y tenebrosa cueva llena de secretos, retos, sorpresas y piedras bonitas",
 "Desplazate entre las casillas en las que superarás retos, amasarás fortuna y descubrirás tesoros",
 "Si han logrado llegar al final de la cueva, los aventureros encuentran un frondoso bosque.<br>¿Qué secretos albergará?"
];
let currentIndex = 0;

function changeContent(direction) {
  currentIndex = (currentIndex + direction + images.length) % images.length;
  const imageElement = document.querySelector("#caveImage");
  const textContainer = document.querySelector("#caveText");
  imageElement.src = images[currentIndex];
  textContainer.innerHTML = texts[currentIndex];
}

