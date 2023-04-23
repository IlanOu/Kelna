//~ vérifier si une touche est pressée 
function keyPressed() {

    //* Bouton echap
    if (keyCode == ESCAPE) {
        if (inGame) {
            gameIsPaused = !gameIsPaused
        }
    }

    //* Barre espace
    if (keyCode == 32 || keyCode == 38) {
        spaceKeyIsPressed = true;
    }

    //* Flèche de droite
    if ((keyCode == 39 || keyCode == 68)) {
        rightArrowPressed = true;
        numberOfSteps++
    }

    //* Flèche de gauche
    if ((keyCode == 37 || keyCode == 81)) {
        leftArrowPressed = true;
        numberOfSteps++
    }

    //* Flèche de haut
    if ((keyCode == 38 || keyCode == 90)) {
        highArrowPressed = true;
        characterIsEating = true
    }

    //* Flèche de bas
    if ((keyCode == 40 || keyCode == 83)) {
        downArrowPressed = true;
    }



    if (canInteractWithPNJ) {
        //* Touche E
        if (keyCode == 69 && engineOne) {
            PressInteractPNJ = !PressInteractPNJ
        }
    }

    if (canTalkWithPNJ) {
        //* Touche E
        if (keyCode == 69 && engineOne) {
            PressTalkPNJ = !PressTalkPNJ
        }
    }

    if (canGetItem){
        if (keyCode == 69 && engineOne) {
            getCurrentItem();
            //! Récupérer l'item
        }
    }

    //* Touche R
    if (keyCode == 82) {
        dashKeyIsPressed = true
    }

    //* Touche I
    if (keyCode == 73) {
        addItemToInventory(itemsJSON.Items.sword_1, 1);
    }

    //* Touche O du clavier
    if (keyCode == 79) {
        addItemToInventory(itemsJSON.Items.food_1, 1);
    }

}

//~ vérifier si une touche est relâchée 
function keyReleased() {
    //* Barre espace
    if (keyCode == 32 || keyCode == 38) {
        spaceKeyIsPressed = false;
        characterDoubleJumping = true;
    }

    //* Flèche de droite
    if ((keyCode == 39 || keyCode == 68)) {
        rightArrowPressed = false;
    }

    //* Flèche de gauche
    if ((keyCode == 37 || keyCode == 81)) {
        leftArrowPressed = false;
    }

    //* Flèche de haut
    if ((keyCode == 38 || keyCode == 90)) {
        highArrowPressed = false;
        characterIsEating = false
    }

    //* Flèche de bas
    if ((keyCode == 40 || keyCode == 83)) {
        downArrowPressed = false;
    }

    //* Touche R
    if (keyCode == 82) {
        dashKeyIsPressed = false
    }

    //* Si n'importe quelle touche est relachée
    if (keyCode) {
        pressingKey = false;
    }


    if (canEnterInHouse) {
        //* Touche E
        if (keyCode == 69 && engineOne) {

            PressInteractPNJ = false
            engineOne = !engineOne;
        }
    }


    if (canGoOutTheHouse) {
        if (keyCode == 69 && engineOne === false) {
            engineOne = !engineOne;
        }
    }
}


//~ Clique de souris
function mousePressed() {
    if (mouseButton === LEFT) {

        slotOne = Inventory[0]
        leftClickPressed = true
        if (inventoryIsEmpty(slotOne) === false) {
            if (!PressTalkPNJ && !PressInteractPNJ) {
                if (!gameIsPaused && gameIsPlaying && characterAnimationIndex <= characterTextureList.length - 1) {
                    if (!characterHitting && !characterComboHitting && !characterComboHittingDouble) {
                        characterHitting = true
                        characterComboHitting = false
                        characterComboHittingDouble = false
                        lastHit = "1"
                    } else if (characterHitting && !characterComboHitting && !characterComboHittingDouble) {
                        characterHitting = false
                        characterComboHitting = true
                        characterComboHittingDouble = false
                        lastHit = "2"
                    } else if (!characterHitting && characterComboHitting && !characterComboHittingDouble) {
                        characterHitting = false
                        characterComboHitting = false
                        characterComboHittingDouble = true
                        lastHit = "3"
                    }
                }
            }
        } else {
            return
        }
    }
}