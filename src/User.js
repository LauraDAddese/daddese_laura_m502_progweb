export class User {
  titre;
  prenom;
  nom;
  ville;
  pays;
  age;
  email;

  #present;
  #element;

  constructor(titre, prenom, nom, ville, pays, age, email) {
    this.titre = titre;
    this.prenom = prenom;
    this.nom = nom;
    this.ville = ville;
    this.pays = pays;
    this.age = age;
    this.email = email;
    this.#present = false;
    this.#element = this.#creatElement();
  }

  #creatElement() {
    const containerElement = document.createElement("section");
    containerElement.classList.add("tabUser");

    const childHTML = `
    <div class="user" data-present="${this.#present}">
    <img src="https://randomuser.me/api/portraits/women/37.jpg">
    <div class="user--info">
            <h1>${this.prenom} ${this.nom}</h1>
            <p>${this.age} years old</p>
            <p>${this.ville}, ${this.pays}</p>
    </div>
    <a href="${this.email}">
            <span class="mail">✉️</span>
    </a>
    </div>
`;

    containerElement.insertAdjacentHTML("afterbegin", childHTML);

    return containerElement;
  }

  render(main){
    main.appendChild(this.#element);
  }

  changePesent(){
    if(this.#present==true){
     this.#present = false; 

    }
  }
}
