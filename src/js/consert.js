const images1 = [
    "https://cdn.glitch.global/fd06fedf-8cb1-4823-b565-9cbd742af1fa/cake-gbce1f6caa_1280.jpg?v=1690124772827",
    "./src/imagens/comida/comida10 (1).jpg",
    "./src/imagens/comida/comida10 (4).jpg",
    "./src/imagens/comida/comida10 (7).jpg",
    "./src/imagens/comida/comida10 (10).jpg",
    "https://cdn.glitch.global/fd06fedf-8cb1-4823-b565-9cbd742af1fa/croissants-gfff24a6fa_1280.jpg?v=1690124774704",
     // Adicione mais as imagens aqui
];
const images2 = [
    "https://cdn.glitch.global/fd06fedf-8cb1-4823-b565-9cbd742af1fa/cupcakes-gd61196306_1280.jpg?v=1690124776065",
    "./src/imagens/comida/comida10 (2).jpg",
    "./src/imagens/comida/comida10 (5).jpg",
    "./src/imagens/comida/comida10 (8).jpg",
    "./src/imagens/comida/comida10 (11).jpg",
    "./src/imagens/comida/comida10 (13).jpg",

    // Adicione mais as imagens aqui
];
const images3 = [
    "https://cdn.glitch.global/fd06fedf-8cb1-4823-b565-9cbd742af1fa/muffin-g37a31a822_1280.jpg?v=1690124782793",
    "./src/imagens/comida/comida10 (3).jpg",
    "./src/imagens/comida/comida10 (6).jpg",
    "./src/imagens/comida/comida10 (9).jpg",
    "./src/imagens/comida/comida10 (12).jpg",
    "https://cdn.glitch.global/fd06fedf-8cb1-4823-b565-9cbd742af1fa/comida_grade3-panqueca.jpg?v=1690290159923"

    
    // Adicione mais as imagens aqui
];





let currentImageIndex1 = 0;
let currentImageIndex2 = 0;
let currentImageIndex3 = 0;
const imageGallery = document.getElementById("image-gallery");
const imageGalleryImg1 = imageGallery.querySelector("#img1");
const imageGalleryImg2 = imageGallery.querySelector("#img2");
const imageGalleryImg3 = imageGallery.querySelector("#img3");

function updateGalleryImage() {
    imageGalleryImg1.src = images1[currentImageIndex1];
    imageGalleryImg2.src = images2[currentImageIndex2];
    imageGalleryImg3.src = images3[currentImageIndex3];
}

function nextImage() {
    currentImageIndex1 = (currentImageIndex1 + 1) % images1.length;
    currentImageIndex2 = (currentImageIndex2 + 1) % images2.length;
    currentImageIndex3 = (currentImageIndex3 + 1) % images3.length;
    updateGalleryImage();
}

function prevImage() {
    currentImageIndex1 = (currentImageIndex1 - 1 + images1.length) % images1.length;
    currentImageIndex2 = (currentImageIndex2 - 1 + images2.length) % images2.length;
    currentImageIndex3 = (currentImageIndex3 - 1 + images3.length) % images3.length;
    updateGalleryImage();
}


// carrossel de imagens

const grade = document.getElementById("grade");
const img = document.querySelectorAll("#grade img");

let idx = 0;

function carrossel () {

    idx++;

    if (idx >= img.length - 1){

        idx = 0;

    }

    
    grade.style.transform = `translateX(${-idx * 100}%)`;

}

setInterval(carrossel, 3000);


// Inicializar a galeria com a primeira imagem
updateGalleryImage();








