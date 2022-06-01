let colsContainer = document.getElementById("colsContainer");

const teamComponent = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        imgSrc: "wayne-barnett-founder-ceo.jpg",
    },
    {
        nome: "Angela Carroll",
        ruolo: "Chief Editor",
        imgSrc: "angela-caroll-chief-editor.jpg",
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Menager",
        imgSrc: "walter-gordon-office-manager.jpg",
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Menager",
        imgSrc: "angela-lopez-social-media-manager.jpg",

    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        imgSrc: "scott-estrada-developer.jpg",
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Design",
        imgSrc: "barbara-ramos-graphic-designer.jpg",
    },
];

function createTeam (oggetto) {
    const myCard = document.createElement("div");
    myCard.classList.add("my-card", "col-4");

    const imgContain = document.createElement("div");
    imgContain.classList.add("img-contain");

    const img = document.createElement("img");
    img.src = `img/${oggetto.imgSrc}`;
           /* `img/${object.imgUrl}`; */

    const cardText = document.createElement('div');
    cardText.classList.add('card-text');
    cardText.innerHTML = `<h3>${oggetto.nome}</h3><p>${oggetto.ruolo}</p>`;

    imgContain.appendChild(img);
    myCard.appendChild(imgContain);
    myCard.appendChild(cardText);

    return myCard
}


function createContain (array, input) {
    for (let i = 0; array.length; i++){
        input.appendChild(createTeam(array[i]))
    }
}

createContain(teamComponent, colsContainer)