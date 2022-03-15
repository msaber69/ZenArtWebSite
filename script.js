function cacher(){
    var tr = document.getElementById("tablereserv");
    if(tr.style.display == "none"){
        tr.style.display = "block";
    }
    else{
        tr.style.display ="none";
    }
}

var newCommandForm = document.forms.newCommand; 
function ajouterclient(){
    console.log(newCommandForm.elements.nom.value)
    console.log(newCommandForm.elements.telephone.value)

    const newItem = document.createElement('tr')
    const nomTd = document.createElement('td')
    const prenomTd = document.createElement('td')
    const emailTd = document.createElement('td')
    const telephoneTd = document.createElement('td')
    const modeLivraisonTd = document.createElement('td')
    const masseurTd = document.createElement('td')
    const dureeTd = document.createElement('td')
    const personnesTd = document.createElement('td')
    const datereservTd = document.createElement('td')
    const promoTd = document.createElement('td')
    nomTd.textContent = document.newCommand.nom.value
    prenomTd.textContent = document.newCommand.prenom.value
    emailTd.textContent = document.newCommand.email.value
    telephoneTd.textContent = document.newCommand.telephone.value
    modeLivraisonTd.textContent = document.newCommand.livraison.value
    masseurTd.textContent = document.newCommand.masseur.value
    dureeTd.textContent = document.newCommand.duree.value
    personnesTd.textContent = document.newCommand.personnes.value
    datereservTd.textContent = document.newCommand.reserv.value
    promoTd.textContent = document.newCommand.promo.value

    console.log(masseurTd.textContent)
    console.log(dureeTd.textContent)
    console.log(personnesTd.textContent)

    if (!document.newCommand.nom.checkValidity() ||
      !document.newCommand.prenom.checkValidity() ||
      !document.newCommand.telephone.checkValidity() ||
      !document.newCommand.email.checkValidity()
     ) {
           return
    }

    newItem.append(nomTd, prenomTd, emailTd, telephoneTd, modeLivraisonTd, masseurTd, dureeTd, personnesTd, datereservTd, promoTd)
    const table = document.querySelector('.datatable tbody')
    table.appendChild(newItem)

    
    

    

     

}