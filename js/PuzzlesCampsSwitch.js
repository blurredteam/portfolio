const imagesP = 
["./assets/img/Puzles/geometryP.PNG",
 "./assets/img/Puzles/cuadroP.PNG",
 "./assets/img/Puzles/hieloP.PNG",
 "./assets/img/Puzles/aguaP.PNG",
 "./assets/img/Puzles/hogeraP.PNG"
];
const textsP = 
["Esquiva afiladas rocas",
 "Soluciona enigmáticos rompecabezas",
 "Escapa de resbaladizas zonas heladas",
 "Recoge agua como puedas",
 "Descansa antes de que las cosas se pongan feas"
];
let currentIndexP = 0;

function changePContent(directionP) {
  currentIndexP = (currentIndexP + directionP + imagesP.length) % imagesP.length;
  const imageElementP = document.querySelector("#PImage");
  const textContainerP = document.querySelector("#PText");
  imageElementP.src = imagesP[currentIndexP];
  textContainerP.innerHTML = textsP[currentIndexP];
}

