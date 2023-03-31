let addItemToInventory = (item) => {
    

    if (Inventory.length < 3) {

        switch (item.category) {
            case "weapon":
                Inventory[0] = item
                
                break;

            case "food":
                Inventory[1] = item

                break;

            case "other":
                Inventory[2] = item

                break;
        }
        
    }    
};




let displayInventory = () => {
    if (endInventory === false) {
        let ForSlotTwoX = ForSlotOneX;
        let ForSlotThreeX = ForSlotTwoX;
        let ForAllSlotY = 250;

        noFill();

        if (currentSlot === 0) {
            stroke(0, 204, 204);
            rect(ForSlotOneX, ForAllSlotY, WidthSlot, HeightSlot);
            stroke(255);

        } if (currentSlot === 1) {
            stroke(0, 204, 204);
            rect(ForSlotTwoX, ForAllSlotY + 87, WidthSlot, HeightSlot);
            stroke(255);
        }
        if (currentSlot === 2) {
            stroke(0, 204, 204);
            rect(ForSlotThreeX, ForAllSlotY + 174, WidthSlot, HeightSlot);
            stroke(255);
        }

        rect(ForSlotOneX, ForAllSlotY, WidthSlot, HeightSlot);
        rect(ForSlotTwoX, ForAllSlotY + HeightSlot, WidthSlot, HeightSlot);
        rect(ForSlotThreeX, ForAllSlotY + HeightSlot*2, WidthSlot, HeightSlot);

        for (let i = 0; i < Inventory.length; i++) {
            if (Inventory[i]) {
                let x, y;
                if (i === 0) {
                    x = ForSlotOneX
                    y = ForAllSlotY
                } if (i === 1) {
                    x = ForSlotTwoX
                    y = ForAllSlotY + 87
                }
                if (i === 2) {
                    x = ForSlotThreeX
                    y = ForAllSlotY + 174
                }
                // let imageItem = createImg(Inventory[i].img, "item");
                // imageItem.hide();
                // image(imageItem, x, y, WidthSlot, HeightSlot);

                image(itemList[Inventory[i].itemNumber], x, y, WidthSlot, HeightSlot);  
            }
        }
    }
};




//#region BACKUP



// if (Inventory.length < 3) {

//     if (currentSlot === 0 && filtre === "Swords") {
//         if (Inventory[0] && Inventory[0].filtre === "Swords") {
//             Inventory[0] = image;
//         } else {
//             Inventory[0] = image;

//         }
//     } if (currentSlot === 1 && filtre === "Bows") {
//         Inventory[1] = image;
//     } if (currentSlot === 2 && filtre === "Potions") {
//         Inventory[2] = image;
//     }


//     else if (filtre === "Swords") {
//         Inventory[0] = image;
//     } else if (filtre === "Bows") {
//         Inventory[1] = image;
//     } else if (filtre === "Potions") {
//         Inventory[2] = image;
//     }
// }

// let displayInventory = () => {


//     if (endInventory === false) {
//         let ForSlotTwoX = ForSlotOneX ;
//         let ForSlotThreeX = ForSlotTwoX;
//         let ForAllSlotY = 250;

//         noFill();

//         if (currentSlot === 0) {
//             stroke(0, 204, 204);
//             rect(ForSlotOneX, ForAllSlotY, WidthSlot, HeightSlot);
//             stroke(255);

//         } if (currentSlot === 1) {
//             stroke(0, 204, 204);
//             rect(ForSlotTwoX, ForAllSlotY + 87, WidthSlot, HeightSlot);
//             stroke(255);
//         }
//         if (currentSlot === 2) {
//             stroke(0, 204, 204);
//             rect(ForSlotThreeX, ForAllSlotY + 174, WidthSlot, HeightSlot);
//             stroke(255);
//         }

//         rect(ForSlotOneX, ForAllSlotY, WidthSlot, HeightSlot);
//         rect(ForSlotTwoX, ForAllSlotY + 87, WidthSlot, HeightSlot);
//         rect(ForSlotThreeX, ForAllSlotY + 174, WidthSlot, HeightSlot);

//         for (let i = 0; i < Inventory.length; i++) {
//             if (Inventory[i]) {
//                 let x = ForSlotOneX + i * 125 + WidthSlot / 2;
//                 let y = ForAllSlotY + HeightSlot / 2;
//                 image(Inventory[i], x, y, WidthSlot, HeightSlot);
//             }
//         }
//     }
// };


// let addItemToInventory = (image) => {
//     if (Inventory.length < 3) {
//         Inventory.push(image);
//     }
// };




// {
//     "Items": {
//         "Swords": {
//             "Sword_1": {
//                 "img": "",
//                     "degat": "10"
//             }
//         },
//         "Bows": {
//             "Bow_1": {
//                 "img": "",
//                     "degat": "8"
//             }
//         }
//     }
// }



// "img": "",
//     "degat": "10"





// let addItemToInventory = (image, filtre) => {
//     if (Inventory.length < 3) {

//         if (currentSlot === 0 && filtre === "Swords") {
//             Inventory[0] = image;
//         } if (currentSlot === 1 && filtre === "Bows") {
//             Inventory[1] = image;
//         } if (currentSlot === 2 && filtre === "Potions") {
//             Inventory[2] = image;
//         }


//         else if (filtre === "Swords"){
//             Inventory[0] = image;
//         } else if (filtre === "Bows"){
//             Inventory[1] = image;
//         } else if (filtre === "Potions"){
//             Inventory[2] = image;
//         }
//     }
// };





//#endregion BACKUP