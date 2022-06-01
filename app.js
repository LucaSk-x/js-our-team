let colsContainer = document.getElementById("colsContainer");

const teamComponent = [
    {
        nome: "Wayne",
        cognome: "Barnett",
        ruolo: "Founder & CEO",
    },
    {
        nome: "Angela",
        cognome: "Carroll",
        ruolo: "Chief Editor",
    },
    {
        nome: "Walter",
        cognome: "Gordon",
        ruolo: "Office Menager",
    },
    {
        nome: "Angela",
        cognome: "Lopez",
        ruolo: "Social Media Menager",
    },
    {
        nome: "Scott",
        cognome: "Estrada",
        ruolo: "Developer",
    },
    {
        nome: "Barbara",
        cognome: "Ramos",
        ruolo: "Graphic Design",
    },
];

for (let i = 0; i < teamComponent.length; i++) {

    const create = document.createElement("div");
    colsContainer.append(create);
    let colFour = create.classList.add("col-4");



    let colCard = colsContainer.querySelectorAll(':scope > div');
    let divCard = document.createElement("div");
    colCard.append(divCard)
    let myCard = divCard.classList.add("myCard")


    for (let key in teamComponent) {
        teamComponent[key],
    


        console.log(teamComponent[key].nome);
        console.log(teamComponent[key].cognome);
        console.log(teamComponent[key].ruolo);
    }
    
}
