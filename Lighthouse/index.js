// stars
for(var x = 0; x < 60; x++){
    var divElemet = document.createElement("div");
    divElemet.className = 'star';

    document.querySelector("div.stars").appendChild(divElemet);
}

//mountains
for(var x = 0; x < 4; x++){
    var divElemet = document.createElement("div");
    divElemet.className = 'mountain';

    document.querySelector("div.mountains").appendChild(divElemet);
}

//waves
for(var x = 0; x < 30; x++){
    var divElemet = document.createElement("div");
    divElemet.className = "wave";

    document.querySelector("div.sea").appendChild(divElemet);
}

// //sails
// for(var x = 0; x < 2; x++){
//     var divElemet = document.createElement("div");
//     divElemet.className = "sail";

//     document.querySelector("div.boat").appendChild(divElemet);
// }

//windows
for(var x = 0; x < 4; x++){
    var divElemet = document.createElement("div");
    divElemet.className = "window";

    document.querySelector("div.windows").appendChild(divElemet);
}
