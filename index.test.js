// importeren
const add = require("./index").add;
const findByName = require("./index").findByName;
// Of op deze manier
// const {add, findByName} = require("./index")


test("add () function should return the sum of 2 numbers", () => {
    console.log("Hallo dit is een test, echt waar")
// ARRANGE
    const number1 = 4;
    const number2 = 5;

// ACT
    const sum = add(number1, number2);

// ASSERT
    expect(sum).toBe(9);
});

function findByName(users, name){
    // console.log("INPUT", users, name);
    // 1. loop maken
    //2. if statement: is de naam hetzelfde als de naam uit het object?
    //3. zo ja return dat object

    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        // console.log("USER 1 voor 1?", user.name)
        if(user.name === name) {
            // console.log("GEVONDEN?", user)
            return user
        }
    }

    return null;
}


test('findByName() returns an object from an array with a specified name',() =>{
    // ARRANGE
    const users = [
        {id: 1, name: 'Rein'},
        {id: 2, name: 'Nova'},
        {id: 3, name: 'Mitchell'},
    ];
    const userNameToFind = 'Nova';

    //ACT
    const user = findByName(users, userNameToFind);

    //ASSERT
    expect(user).toEqual({id:2, name: 'Nova'});
});


test('findByName should return null, if the element is not found', () =>{

    //ARRANGE
    const users = [
        {id: 1, name: 'Rein'},
        {id: 2, name: 'Nova'},
        {id: 3, name: 'Mitchell'},
    ];
    const userNameToFind = "Kees";

    //ACT
    const user = findByName(users, userNameToFind)

    //ASSERT
    expect(user).toBeNull();
});