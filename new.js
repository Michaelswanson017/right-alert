// let age = document.getElementById('age');
//     function showUser(surname, name) {
//     console.log("Пользователь " + surname + " " + name + ", его возраст " + this.value);
// }
// showUser();


// showUser('Петров', 'Михаил');


// let age = document.getElementById('age');
//     console.log(this.age.value);


let age = document.getElementById('age');
    function showUser(surname, name) {
    console.log("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
showUser();