//~ Mode ADMIN
function login(username, password){

    adminJSON.admins.forEach(user => {
        if(user.name == username && user.password == password){
            console.log('Current User :' +  " " + username)
            characterMaxJumps = 100,
            characterMovesSpeed = 10,
            characterPositionY = 0,
            maxHealth = 10,
            healthPlayer = 10
        } else{
            console.error("Mauvais nom ou mauvais mot de passe !")
        }
    });
}