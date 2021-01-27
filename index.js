function add(num1, num2) {
    // console.log("INPUT", num1, num2);
    const sum = num1 + num2;
    // console.log("SUM", sum);
    return sum
}

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

// exporteren
module.exports = {
    add: add,
    findByName: findByName,
};