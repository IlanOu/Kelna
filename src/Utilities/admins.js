//~ Mode ADMIN
function login(username, password) {

    adminJSON.admins.forEach(user => {
        if (user.name == username && user.password == password) {
            logged = true
            characterMaxJumps = 100,
            characterPositionY = 0,
            maxHealth = 10,
            healthPlayer = 10
            dashSystem = true
        } else {
            console.error("Nom ou mot de passe incorrect !")
        }

    });
}



function logout() {
    if (logged) {
        characterMaxJumps = init_characterMaxJumps,
        maxHealth = init_maxHealth,
        healthPlayer = init_healthPlayer
        logged = false
        dashSystem = false
    } else {
        console.error("Vous n'êtes pas connecté pour vous déconnecter !")
    }
}