"use strict";
function renderFighter(fighter) {
    var html = '<div class="col l4 s6">';
    html += '<div class="card" style="max-width: 18rem;">';
    html += '<h4 class="card-name">' + fighter.name + '</h4>';
    html += '<h5 class="card-image">' + fighter.image + '</h5>';

    $(#img-container).append(card)
}


function renderFighters(fighters) {
    var html = '';
    for (var i = 0; i<= fighters.length - 1; i++) {
        html += renderFighter(fighters(i));
    }
    return html;
}

