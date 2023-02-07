import { User } from "./User";

const main = document.querySelector("main");

const fetchUsers = async () => {
    const users = await fetch(`https://randomuser.me/api/?results=20`);
    const data = await users.json();
    const tabUsers = await data.results;
    
    console.log(tabUsers);
    //const tabUsersSimple = [];
    tabUsers.forEach(element => {
        //tabUsersSimple.push(new User(element.name.title, element.name.first, element.name.last, element.location.city, element.location.country, element.dob.age, element.email, element.picture.large)
        new User(element.name.title, element.name.first, element.name.last, element.location.city, element.location.country, element.dob.age, element.email, element.picture.large).render(main)
    });
    //console.log(tabUsersSimple)
    

}
fetchUsers();

const handleClick = async (e) => {
    const dataPresent = e.target.closest(".user").dataset.present;
    console.log(dataPresent)
  
}

main.addEventListener("click", handleClick);
