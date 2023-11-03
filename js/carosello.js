//al caricamento della pagina voglio inserire delle immagini
let percorsi = [
    "https://picsum.photos/id/101/900/400", //0
    "https://picsum.photos/id/102/900/400", //1
    "https://picsum.photos/id/103/900/400", //2
    "https://picsum.photos/id/104/900/400", //3
    "https://picsum.photos/id/200/400/800"  //4
];

for (let i = 0; i < percorsi.length; i++) {

    immagine = `<img class="slide" src="${percorsi[i]}"></img>`;
    document.getElementById("image-wrapper").innerHTML += immagine;
}

// let x = 0;
// while (x < percorsi.length) {
    
//     immagine = `<img class="slide" src="${percorsi[x]}"></img>`;
//     document.getElementById("image-wrapper").innerHTML += immagine;
//     x++;
// }



//al caricamento voglio che una delle immagini sia vibile
const immagini = document.getElementsByClassName("slide");
let imgAttuale = 0;
const ultimaImg = percorsi.length - 1;
immagini[imgAttuale].classList.add("visible");

// gestire evento di click sulle freccette
// al click, cambiare l'immagine visibile
document.getElementById("prevBtn").addEventListener("click", function () {
    console.log("indietro");
});

document.getElementById("nextBtn").addEventListener("click", function () {

    if (imgAttuale < ultimaImg) {
        //rimuovo la visibilità sull'immagine attuale
        immagini[imgAttuale].classList.remove("visible");

        //aggiorno il contatore dell'immagine attuale
        imgAttuale++;

        //aggiungo la visibilità sulla prossima immagine
        immagini[imgAttuale].classList.add("visible");
    }

});
