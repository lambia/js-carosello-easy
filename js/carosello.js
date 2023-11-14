const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

//Svuoto il contenitore
document.getElementById("slide-wrapper").innerHTML = "";

//Inserisco le immagini nel DOM
for (let i = 0; i < images.length; i++) {
	images[i]

}

images.forEach((item, i, array) => {

	let contenuto = `<div class="card">
		<h1 id="card-title">${item.title}</h1>
		<div id="card-image-wrapper">
			<img class="card-image" src="${item.image}">
		</div>
		<p id="card-description">${item.text}</p>
	</div>`;

	document.getElementById("slide-wrapper").innerHTML += contenuto;
});

//Rendo visibile la prima immagine
let imgAttuale = 0;
let immagini = document.getElementsByClassName("card");
immagini[imgAttuale].classList.add("visible");

//Gestiamo il click su "previous"
document.getElementById("prevBtn").addEventListener("click", function() {
	
	//se non siamo in prima slide
	if(imgAttuale > 0) {
		//nascondo l'immagine attualmente visibile
		immagini[imgAttuale].classList.remove("visible");
	
		//incremento l'immagine attuale
		imgAttuale--;
	
		//rendo visibile la nuova immagine attuale
		immagini[imgAttuale].classList.add("visible");
	} else {

		//nascondo l'immagine attualmente visibile
		immagini[imgAttuale].classList.remove("visible");
	
		//sposto il contatore sull'ultima immagine
		imgAttuale = immagini.length - 1;
	
		//rendo visibile la nuova immagine attuale
		immagini[imgAttuale].classList.add("visible");

	}

});

//Gestiamo il click su "next"
document.getElementById("nextBtn").addEventListener("click", function() {

	//se non siamo in ultima slide
	if(imgAttuale < immagini.length-1) {
		//nascondo l'immagine attualmente visibile
		immagini[imgAttuale].classList.remove("visible");
	
		//incremento l'immagine attuale
		imgAttuale++;
	
		//rendo visibile la nuova immagine attuale
		immagini[imgAttuale].classList.add("visible");
	} else {

		//nascondo l'immagine attualmente visibile
		immagini[imgAttuale].classList.remove("visible");
	
		//sposto il contatore sull'ultima immagine
		imgAttuale = 0;
	
		//rendo visibile la nuova immagine attuale
		immagini[imgAttuale].classList.add("visible");

	}

});
