"use strict";


// function recoverGoku() {
// //     document.getElementById("GokuHealthAudio").play();
// //     sonHP = 1200
// //     var GokuHPBar = (sonHP/1200)*300;
// //     GokuHP.style.width = GokuHPBar + "px";
// //     bottomRow.innerHTML += "<br>Goku recovered his health! Goku now has " + sonHP + " HP remaining.";
// //     GokuHealthBtn.disabled = true;
// // }
// function senzu1() {
//     document.getElementById("GokuHealthAudio").play(); - change to Krillin saying "SENZU BEAN!" in TFS
//     p1HP = 1200
//     var p1HPBar = (p1HP/1200)*300;
//     p1HP.style.width = p1HPBar + "px";
//     bottomRow.innerHTML += "<br>" + Res.name + " recovered health completely!";
//     p1SenzuBtn.disabled = true;
// }
// function senzu2() {
//     document.getElementById("GokuHealthAudio").play(); - change to Krillin saying "SENZU BEAN!" in TFS
//     p1HP = 1200
//     var p1HPBar = (p1HP/1200)*300;
//     p1HP.style.width = p1HPBar + "px";
//     bottomRow.innerHTML += "<br>" + Res.name + " recovered health completely!";
//     p2SenzuBtn.disabled = true;
// }



//
// function kiGoku() {
//     document.getElementById("GokuKiAudio").play(); 
//     if(sonKi<=800) {
//         sonKi += 400;
//     } else if(sonKi>800) {
//         sonKi = 1200
//     }
//     var GokuKiBar = (sonKi/1200)*300;
//     GokuKi.style.width = GokuKiBar + "px";
//     bottomRow.innerHTML += "<br>Goku recovered his ki! Goku now has " + sonKi + " Ki remaining.";
// }//
// function auraRecovery1() {
//     document.getElementById("GokuKiAudio").play(); - change to sound of DBZ auras
//     if(p1Ki<=800) {
//         p1Ki += 400;
//     } else if(p1Ki>800) {
//         p1Ki = 1200
//     }
//     var p1KiBar = (p1Ki/1200)*300;
//     p1Ki.style.width = p1KiBar + "px";
//     bottomRow.innerHTML += "<br>" + Res.name + " recovered his ki!" + res.name(p1) + " now has " + p1Ki + " Ki remaining.";
// }
// function auraRecovery2() {
//     document.getElementById("GokuKiAudio").play(); - change to sound of DBZ auras
//     if(p2Ki<=800) {
//         p2Ki += 400;
//     } else if(p2Ki>800) {
//         p2Ki = 1200
//     }
//     var p2KiBar = (p2Ki/1200)*300;
//     p2Ki.style.width = p2KiBar + "px";
//     bottomRow.innerHTML += "<br>" + Res.name + " recovered his ki!" + res.name(p2) + " now has " + p2Ki + " Ki remaining.";
// }


//When I press enter, character select displays

var beginCode=[13];
var inputCode=[];

$('body').keyup(function(event) {
    $(this).scrollTop(0);
    inputCode.push(event.which);
    console.log(inputCode);

    if (inputCode.join(',') === beginCode.join(',')) {
        $('#startupScreen').css({
            'display': 'none'
        }); 
        $('#topRow').css({
            'display': 'block'
        }); 
        $('#characterSelectScreen').css({
            'display': 'block'
        });
    }

});
//Define Health Variables
var p1HPTotals = 1200;
var p2HPTotals = 1200;
var p1KiTotals = 1200;
var p2KiTotals = 1200;
var topRow = document.getElementById("topRow");
// Holds the data for all characters;
var rosterObject = {
    "fighters": [
        {
            "name": "Son Goku",
            "moves": ["Kamehameha", "Dragon Fist", "Kaioken Triple Attack"],
            "ultimate": "Spirit Bomb",
            "transformations": "Super Saiyan, Super Saiyan 2, Super Saiyan 3, SS God, SS God SS",
            "series": "Dragonball",
            "img": "img/goku-base.png",
            "unlock": "yes",
            "rivals": "Prince Vegeta, Emperor Frieza",
            "atk": 20,
            "defend": 17,
            "speed": 17,
            "atkaura": 17,
            "defaura": 19,
            "id": "1"
        },
        {
            "name": "Prince Vegeta",
            "moves": ["Galick Gun", "Dirty Fireworks", "Infinite Break"],
            "ultimate": "Final Flash",
            "transformations": "Super Saiyan, Majin (SS2), Super Saiyan 3, SS God, SS God SS",
            "series": "Dragonball",
            "img": "img/vegeta-base.png",
            "unlock": "yes",
            "rivals": "Son Goku, Emperor Frieza",
            "atk": 17,
            "defend": 13,
            "speed": 23,
            "atkaura": 20,
            "defaura": 17,
            "id": "2"
        },
        {
            "name": "Naruto Uzumaki",
            "moves": ["Rasengan", "Uzumaki Barrage", "Toad Summoning"],
            "ultimate": "RasenShuriken",
            "transformations": "Youth, Adult, Perfect Sage, Kyuubi Chakra, Prime",
            "series": "Naruto",
            "img": "img/naruto-base.png",
            "unlock": "yes",
            "rivals": "Sasuke Uchiha, Kakashi Hatake, Itachi Uchiha",
            "atk": 22,
            "defend": 17,
            "speed": 15,
            "atkaura": 21,
            "defaura": 15,
            "id": "3"
        },
        {
            "name": "Sasuke Uchiha",
            "moves": ["Chidori", "Barrage of Lions", "Snake Summoning"],
            "ultimate": "Kirin",
            "transformations": "Youth, Adult, Mangekyo, Eternal Mangekyo, Prime",
            "series": "Naruto",
            "img": "img/sasuke-base.png",
            "unlock": "yes",
            "rivals": "Itachi Uchiha, Naruto Uzumaki, Kakashi Hatake",
            "atk": 16,
            "defend": 14,
            "speed": 22,
            "atkaura": 24,
            "defaura": 14,
            "id": "4"
        },
        {
            "name": "Superman, Clark Kent",
            "moves": ["Krypton Rush", "Heat Vision", "Ice Breath"],
            "ultimate": "Solar Flare",
            "transformations": "Classic, Animated, X",
            "series": "DC",
            "img": "img/superman-base.png",
            "unlock": "yes",
            "rivals": "Batman, Bruce Wayne, The Flash, Barry Allen",
            "atk": 23,
            "defend": 19,
            "speed": 16,
            "atkaura": 21,
            "defaura": 11,
            "id": "5"
        },
        {
            "name": "Batman, Bruce Wayne",
            "moves": ["Omni-Style Rush", "Batarang", "Cape Cover"],
            "ultimate": "Gotham's God",
            "transformations": "Classic, Animated, Beyond",
            "series": "DC",
            "img": "img/batman-base.png",
            "unlock": "yes",
            "rivals": "Superman, Clark Kent, The Flash, Barry Allen",
            "atk": 17,
            "defend": 23,
            "speed": 16,
            "atkaura": 14,
            "defaura": 20,
            "id": "6"
        },
        {
            "name": "Obi-Wan Kenobi",
            "moves": ["Force Push", "Force Throw", "Mind Trick"],
            "ultimate": "Force Valor Rush",
            "transformations": "Knight, Master, Ben Kenobi",
            "series": "StarWars",
            "img": "img/obi-wan-base.png",
            "unlock": "yes",
            "rivals": "Anakin Skywalker, Maul, Ahsoka Tano",
            "atk": 12,
            "defend": 18,
            "speed": 16,
            "atkaura": 19,
            "defaura": 25,
            "id": "7"
        },
        {
            "name": "Anakin Skywalker",
            "moves": ["Force Choke", "Force Lightning", "Lightsaber Boomerang"],
            "ultimate": "Force Defend Rush",
            "transformations": "Knight, Prime Vader, Darth Vader",
            "series": "StarWars",
            "img": "img/anakin-base.png",
            "unlock": "yes",
            "rivals": "Obi-Wan Kenobi, Maul, Ahsoka Tano",
            "atk": 16,
            "defend": 12,
            "speed": 18,
            "atkaura": 25,
            "defaura": 19,
            "id": "8"
        },
        {
            "name": "Optimus Prime",
            "moves": ["Full Force Punch", "Star Saber", "Skyboom Shield"],
            "ultimate": "Prime Reckoning",
            "transformations": "G1, Semi-Truck, Armada",
            "series": "Transformers",
            "img": "img/optimus-base.png",
            "unlock": "yes",
            "rivals": "Megatron, Starscream",
            "atk": 22,
            "defend": 20,
            "speed": 8,
            "atkaura": 16,
            "defaura": 24,
            "id": "9"
        },
        {
            "name": "Megatron",
            "moves": ["Metal Mash", "Requiem Blaster", "Skyboom Shield"],
            "ultimate": "Mega Melting",
            "transformations": "G1, War Tank, Armada",
            "series": "Transformers",
            "img": "img/megatron-base.png",
            "unlock": "yes",
            "rivals": "Optimus Prime, Starscream",
            "atk": 22,
            "defend": 16,
            "speed": 8,
            "atkaura": 24,
            "defaura": 20,
            "id": "10"
        },
        {
            "name": "Emperor Frieza",
            "moves": ["Death Beam", "Nova Strike", "Death Wave"],
            "ultimate": "Death Ball",
            "transformations": "Base, Second Form, Third Form, Final Form, Golden",
            "series": "Dragonball",
            "img": "img/frieza-base.png",
            "unlock": "no",
            "rivals": "Son Goku, Prince Vegeta",
            "atk": 15,
            "defend": 12,
            "speed": 24,
            "atkaura": 25,
            "defaura": 14,
            "id": "11"
        },
        {
            "name": "Kakashi Hatake",
            "moves": ["Lightning Blade", "Earth Style: Mud Wall", "Primary Lotus"],
            "ultimate": "Kamui",
            "transformations": "Youth, Anbu, Adult, Mangekyo, Double Mangekyo",
            "series": "Naruto",
            "img": "img/kakashi-base.png",
            "unlock": "no",
            "rivals": "Naruto Uzumaki, Sasuke Uchiha, Itachi Uchiha",
            "atk": 20,
            "defend": 18,
            "speed": 17,
            "atkaura": 21,
            "defaura": 14,
            "id": "12"
        },
        {
            "name": "The Flash, Barry Allen, Wally West",
            "moves": ["Tornado Fist", "G Force Punch", "Afterimage"],
            "ultimate": "Time Rip",
            "transformations": "Kid Flash, Classic Barry, Wally West",
            "series": "DC",
            "img": "img/flash-base.png",
            "unlock": "no",
            "rivals": "Superman, Clark Kent, Batman, Bruce Wayne",
            "atk": 20,
            "defend": 10,
            "speed": 25,
            "atkaura": 11,
            "defaura": 24,
            "id": "13"
        },
        {
            "name": "Ahsoka Tano",
            "moves": ["Force Push", "Force Throw", "Force Choke"],
            "ultimate": "Force Speed Rush",
            "transformations": "Padawan Prodigy, Rogue Jedi, Force Sage",
            "series": "StarWars",
            "img": "img/ahsoka-base.png",
            "unlock": "no",
            "rivals": "Obi-Wan Kenobi, Anakin Skywalker, Maul",
            "atk": 15,
            "defend": 15,
            "speed": 22,
            "atkaura": 22,
            "defaura": 16,
            "id": "14"
        },
        {
            "name": "Starscream",
            "moves": ["Scream's Rage", "Star Saber", "Skyboom Shield"],
            "ultimate": "SuperNova Fireworks",
            "transformations": "G1, Jet Plane, Armada",
            "series": "Transformers",
            "img": "img/starscream-base.png",
            "unlock": "no",
            "rivals": "Optimus Prime, Megatron",
            "atk": 20,
            "defend": 20,
            "speed": 10,
            "atkaura": 20,
            "defaura": 20,
            "id": "15"
        },
        {
            "name": "Yusuke Urameshi",
            "moves": ["Spirit Gun", "Spirit ShotGun", "Spirit Wave"],
            "ultimate": "Mazoku Spirit Gun",
            "transformations": "School Uniform, Dark Tournament, Chapter Black",
            "series": "YuYu Hakusho",
            "img": "img/yusuke-base.png",
            "unlock": "no",
            "rivals": "Kuwabara Kazuma, Kurama, Hiei",
            "atk": 17,
            "defend": 18,
            "speed": 20,
            "atkaura": 17,
            "defaura": 18,
            "id": "16"
        },
        {
            "name": "Kazuma Kuwabara",
            "moves": ["Spirit Sword", "Spirit Kick", "Spirit Sword Javelin"],
            "ultimate": "Dimension Sword",
            "transformations": "School Uniform, Dark Tournament, Chapter Black",
            "series": "YuYu Hakusho",
            "img": "img/kuwabara-base.png",
            "unlock": "no",
            "rivals": "Yusuke Urameshi, Kurama, Hiei",
            "atk": 19,
            "defend": 16,
            "speed": 18,
            "atkaura": 17,
            "defaura": 20,
            "id": "17"
        },
        {
            "name": "Kurama",
            "moves": ["Rose Whip", "Seed of the Death Plant", "Ojigi Plant"],
            "ultimate": "Sinning Tree",
            "transformations": "Shuichi, Dark Tournament, Yoko",
            "series": "YuYu Hakusho",
            "img": "img/kurama-base.png",
            "unlock": "no",
            "rivals": "Yusuke Urameshi, Kuwabara Kazuma, Hiei",
            "atk": 15,
            "defend": 22,
            "speed": 14,
            "atkaura": 17,
            "defaura": 22,
            "id": "18"
        },
        {
            "name": "Hiei",
            "moves": ["Speed Slice", "Fist of the Mortal Flame", "Sword of Darkness Flame"],
            "ultimate": "Dragon of the Darkness Flame",
            "transformations": "Dark Tournament, Jaganshi, Chapter Black",
            "series": "YuYu Hakusho",
            "img": "img/hiei-base.png",
            "unlock": "no",
            "rivals": "Yusuke Urameshi, Kuwabara Kazuma, Kurama",
            "atk": 20,
            "defend": 12,
            "speed": 25,
            "atkaura": 20,
            "defaura": 13,
            "id": "19"
        },
        {
            "name": "Izuku Midoriya",
            "moves": ["New Hampshire Smash", "Detroit Smash", "Black Whip"],
            "ultimate": "OFA Full Cowling 100%",
            "transformations": "School Uniform, Deku, OFA 100%",
            "series": "My Hero Academia",
            "img": "img/deku-base.png",
            "unlock": "no",
            "rivals": "Katsuki Bakugo, Shoto Todoroki",
            "atk": 22,
            "defend": 10,
            "speed": 23,
            "atkaura": 23,
            "defaura": 12,
            "id": "20"
        },
        {
            "name": "Katsuki Bakugo",
            "moves": ["Explosive Punch", "Explosive Kick", "Reverse Explosion"],
            "ultimate": "OFA Full Cowling 100%",
            "transformations": "School Uniform, GEMGD, OFA 100%",
            "series": "My Hero Academia",
            "img": "img/bakugo-base.png",
            "unlock": "no",
            "rivals": "Izuku Midoriya, Shoto Todoroki",
            "atk": 21,
            "defend": 14,
            "speed": 20,
            "atkaura": 23,
            "defaura": 14,
            "id": "21"
        },
        {
            "name": "Shoto Todoroki",
            "moves": ["Heaven-Piercing Ice Wall", "Wall of Flames", "Flashfreeze Heatwave"],
            "ultimate": "Flashfire Fist - Jet Kindling",
            "transformations": "School Uniform, UA Festival, Both Halves",
            "series": "My Hero Academia",
            "img": "img/todoroki-base.png",
            "unlock": "no",
            "rivals": "Izuku Midoriya, Katsuki Bakugo",
            "atk": 19,
            "defend": 19,
            "speed": 14,
            "atkaura": 19,
            "defaura": 19,
            "id": "22"
        },
        {
            "name": "Sly Cooper",
            "moves": ["Cane Hook Slash", "Bentley's Brave Byte", "Murray's Manhandling"],
            "ultimate": "Master Thievious Raccoonus",
            "transformations": "Sly 1, Sly 2, Sly 3",
            "series": "Sly Cooper",
            "img": "img/sly-base.png",
            "unlock": "no",
            "rivals": "Toon Link",
            "atk": 21,
            "defend": 23,
            "speed": 22,
            "atkaura": 10,
            "defaura": 13,
            "id": "23"
        },
        {
            "name": "Itachi Uchiha",
            "moves": ["Clone Explosion Jutsu", "Tsukuyomi", "Amaterasu"],
            "ultimate": "Susanoo",
            "transformations": "Anbu, Akatsuki, Reanimated",
            "series": "Naruto",
            "img": "img/itachi-base.png",
            "unlock": "no",
            "rivals": "Sasuke Uchiha, Kakashi Hatake",
            "atk": 16,
            "defend": 18,
            "speed": 15,
            "atkaura": 19,
            "defaura": 22,
            "id": "24"
        },
        {
            "name": "Maul",
            "moves": ["Force Choke", "Force Throw", "Saber Slash"],
            "ultimate": "Dark Side Destruction",
            "transformations": "Darth, Mecha, Mandalorian",
            "series": "StarWars",
            "img": "img/maul-base.png",
            "unlock": "no",
            "rivals": "Obi-Wan Kenobi, Anakin Skywalker, Ahsoka Tano",
            "atk": 16,
            "defend": 20,
            "speed": 18,
            "atkaura": 20,
            "defaura": 16,
            "id": "25"
        },
        {
            "name": "Link",
            "moves": ["Barrage of Arrows", "Boomerang Bash", "Bomb-Slash Combo"],
            "ultimate": "The Wind Waker",
            "transformations": "Toon, Young, Skyward",
            "series": "Zelda",
            "img": "img/link-base.png",
            "unlock": "no",
            "rivals": "Sly Cooper",
            "atk": 22,
            "defend": 22,
            "speed": 20,
            "atkaura": 14,
            "defaura": 12,
            "id": "26"
        },
        {
            "name": "Samurai Jack",
            "moves": ["Samurai Slashing", "Speed Slice", "Parry"],
            "ultimate": "Slayer of Aku",
            "transformations": "Young, Old (Long Hair), Finale",
            "series": "Samurai Jack",
            "img": "img/jack-base.png",
            "unlock": "no",
            "rivals": "Aku",
            "atk": 25,
            "defend": 23,
            "speed": 21,
            "atkaura": 11,
            "defaura": 10,
            "id": "27"
        },
        {
            "name": "Aku",
            "moves": ["Scarabs Scurrying", "Demonic Dash", "Eye Beams"],
            "ultimate": "Necromancy",
            "transformations": "Scorpion, Chinese Dragon, Final Form",
            "series": "Samurai Jack",
            "img": "img/aku-base.png",
            "unlock": "no",
            "rivals": "Samurai Jack",
            "atk": 14,
            "defend": 16,
            "speed": 12,
            "atkaura": 25,
            "defaura": 23,
            "id": "28"
        },
        {
            "name": "Eren Jaeger",
            "moves": ["ODM Gear", "Attack Titan", "WarHammer Titan"],
            "ultimate": "The Rumbling",
            "transformations": "Survey Corps, Jaegerist, Founding Titan",
            "series": "Attack on Titan",
            "img": "img/eren-base.png",
            "unlock": "no",
            "rivals": "Reiner Braun",
            "atk": 25,
            "defend": 16,
            "speed": 10,
            "atkaura": 25,
            "defaura": 14,
            "id": "29"
        },
        {
            "name": "Reiner Braun",
            "moves": ["ODM Gear", "Lowered Shoulder", "Summoning Scream"],
            "ultimate": "Titan Catapult",
            "transformations": "Survey Corps, Veteran, Armored Titan",
            "series": "Attack on Titan",
            "img": "img/reiner-base.png",
            "unlock": "no",
            "rivals": "Eren Jaeger",
            "atk": 16,
            "defend": 25,
            "speed": 10,
            "atkaura": 14,
            "defaura": 25,
            "id": "30"
        }
    ]
}

//This is rendering cards with the data of each fighter in the object
// Simultaenously, this card is grabbing data and appending it to html to create Character Select screen
rosterObject.fighters.forEach(res => {

    //This is rendering a card and class designation
    var card = document.createElement("div");
    card.className = res.series;

    // Tried using linebreak as a var or const and it wasn't working, went with a var and reproduced through out because JS gonna JS
    var linebreak = document.createElement('br');
    card.appendChild(linebreak);


    //Adding toggle for selecting 1st character
    var label = document.createElement('button');
    label.className = "charSelBtn1";
    label.id = res.id + "charSelectBtn1";
    var p1 = document.createTextNode('P1 (Away)');
    label.appendChild(p1);
    card.appendChild(label);

//Adding toggle for selecting 2nd character
    var label2 = document.createElement('button');
    label2.className = "charSelBtn2";
    label2.id = "charSelectBtn2" + res.id;
    var p2 = document.createTextNode('P2 (Home)');
    label2.appendChild(p2);
    card.appendChild(label2);
    
    //Rendering an image element/class desgination and directing the source to read the base64 string storing the image 
    var image = document.createElement("img");
    image.src = res.img;
    image.className = "charSelectImg";
    card.appendChild(image);

    //Displaying further character Data
    var name = document.createTextNode('Name: ' + res.name + '');
    card.appendChild(name);
    var linebreak = document.createElement('br');
    card.appendChild(linebreak);

    var series = document.createTextNode('Series: ' + res.series + '');
    card.appendChild(series);
    var linebreak = document.createElement('br');
    card.appendChild(linebreak);

    var rivals = document.createTextNode('Rival(s): ' + res.rivals);
    card.appendChild(rivals);
    var linebreak = document.createElement('br');
    card.appendChild(linebreak);

    var atk = document.createTextNode('Attack: ' + res.atk);
    card.appendChild(atk);
    var linebreak = document.createElement('br');
    card.appendChild(linebreak);

    var def = document.createTextNode('Defense: ' + res.defend);
    card.appendChild(def);
    var linebreak = document.createElement('br');
    card.appendChild(linebreak);

    var aurAtk = document.createTextNode('AuraAtk: ' + res.atkaura);
    card.appendChild(aurAtk);
    var linebreak = document.createElement('br');
    card.appendChild(linebreak);

    var aurDef = document.createTextNode('AuraDef: ' + res.defaura);
    card.appendChild(aurDef);
    var linebreak = document.createElement('br');
    card.appendChild(linebreak);

    var spd = document.createTextNode('Speed: ' + res.speed);
    card.appendChild(spd);


    //Conditional statements to update card background colors based on series value
    

    $(document).ready(function () {
        if (res.series == "Dragonball") {
            $('.Dragonball').css('background-image', 'url(img/db_background.webp');
        }
        if (res.series == "DC") {
            $('.DC').css('background-image', 'url(img/dc-bg.png');
        }
        if (res.series == "Naruto") {
            $('.Naruto').css('background-image', 'url(img/hidden_leaf.png');
        }
        if (res.series == "StarWars") {
            $('.StarWars').css('background-image', 'url(img/star-wars-bg.jpg');
        }
        if (res.series == "Transformers") {
            $('.Transformers').css('background-image', 'url(img/transformers-bg.jpeg');
            $('.Transformers').css('background-size', 'cover');
        }
        if (res.series == "YuYu Hakusho") {
            $('.YuYu').css('background-image', 'url(img/yyh-logo.png');
            $('.YuYu').css('background-size', 'cover');
        }
        if (res.series == "My Hero Academia") {
            $('.Academia').css('background-image', 'url(img/my-hero-logo.jpeg');
            $('.Academia').css('background-size', 'cover');
        }
        if (res.series == "Samurai Jack") {
            $('.Jack').css('background-image', 'url(img/samurai-jack-bg.jpeg');
            $('.Jack').css('background-size', 'cover');
        }
        if (res.series == "Sly Cooper") {
            $('.Sly').css('background-image', 'url(img/sly-bg.jpeg');
            $('.Sly').css('background-size', 'cover');
        }
        if (res.series == "Attack on Titan") {
            $('.Titan').css('background-image', 'url(img/aot-bg.jpeg');
            $('.Titan').css('background-size', 'cover');
        }
        if (res.series == "Zelda") {
            $('.Zelda').css('background-image', 'url(img/zelda-bg.png');
            $('.Zelda').css('background-size', 'cover');
        }
        $('.charSelBtn2').prop("disabled", true);
        //Stores P1 Data Once Selected and Renders in Battle Screen
        $("#" + res.id + "charSelectBtn1").click(function(){


            $('.charSelBtn1').prop("disabled", true);
            $('.charSelBtn2').prop("disabled", false);

            var isPlayer1Selection = true;
            
            if(isPlayer1Selection == true){
                var player1Name = res.name;
                var player1Img = res.img;
                var player1Moves = res.moves;
                var player1Ultimate = res.ultimate;
                var player1Atk = res.atk;
                var player1Def = res.defend;
                var player1AuraAtk = res.atkaura;
                var player1AuraDef = res.defaura;
                var player1Spd = res.speed;
                var player1Rivals = res.rivals;
                var player1Series = res.series;
            }
            
            //Check Data is Storing Correct Value
            
            topRow.innerHTML += "You selected " + player1Name + " as Player 1! <br>"

            //Player 1 Info Box
            var player1InfoBox = document.createElement("div");
            player1InfoBox.id = "battle1";

            //Player 1 Character Name Render to Info Box
            var charNameHeader1 = document.createElement('h2')
            charNameHeader1.id = "charNameHeader1";
            var p1Name = document.createTextNode('' + res.name);
            charNameHeader1.appendChild(p1Name);
            player1InfoBox.appendChild(charNameHeader1);

            //Player 1 Character Img Render to Info Box
            var image1 = document.createElement("img");
            image1.src = res.img;
            image1.id = "p1Img";

            var p1Image = document.createElement("div");
            p1Image.id = "p1ImageDiv"
            p1Image.appendChild(image1);
            player1InfoBox.appendChild(p1Image);
            var linebreak = document.createElement('br');
            player1InfoBox.appendChild(linebreak);

            //Player2 HP and Aura Bar; Make sure to reset totals when fight ends
            var hpHeader1 = document.createElement('h2')
            hpHeader1.id = "hpHeader1" + res.name;
            var barNameHP1 = document.createTextNode('HP');
            hpHeader1.appendChild(barNameHP1);
            player1InfoBox.appendChild(hpHeader1);
            
            
            var p1HealthBorder = document.createElement("div");
            p1HealthBorder.className = "hpBorder";
            p1HealthBorder.id = "p1HealthBorder";
            var p1HP = document.createElement("div")
            p1HP.className = "hpBar";
            p1HP.id = "p1Health";
            p1HealthBorder.appendChild(p1HP);
            player1InfoBox.appendChild(p1HealthBorder);
            var linebreak = document.createElement('br');
            player1InfoBox.appendChild(linebreak);


            var kiHeader1 = document.createElement('h2')
            kiHeader1.id = "kiHeader1" + res.name;
            var barNameKI1 = document.createTextNode('KI');
            kiHeader1.appendChild(barNameKI1);
            player1InfoBox.appendChild(kiHeader1); 
            
            var p1KiBorder = document.createElement("div");
            p1KiBorder.className = "kiBorder";
            p1KiBorder.id = "p1KiBorder";
            var p1Ki = document.createElement("div")
            p1Ki.className = "kiBar";
            p1Ki.id = "p1Ki";
            p1KiBorder.appendChild(p1Ki);
            player1InfoBox.appendChild(p1KiBorder);
            var linebreak = document.createElement('br');
            player1InfoBox.appendChild(linebreak);


            //Player1 Senzu Bean Button Render to Info Box
            var p1SenzuBtn = document.createElement("btn")
            p1SenzuBtn.id = "p1SenzuBtn";
            var p1SenzuName = document.createTextNode("Senzu Bean");
            p1SenzuBtn.appendChild(p1SenzuName);
            player1InfoBox.appendChild(p1SenzuBtn);
            var linebreak = document.createElement('br');
            player1InfoBox.appendChild(linebreak);
            var linebreak = document.createElement('br');
            player1InfoBox.appendChild(linebreak);

            //Player1 Aura Recovery Button Render to Info Box
            var p1AuraRecBtn = document.createElement("btn")
            p1AuraRecBtn.id = "p1AuraRecBtn";
            var p1AuraRecName = document.createTextNode("Gather Ki");
            p1AuraRecBtn.appendChild(p1AuraRecName);
            player1InfoBox.appendChild(p1AuraRecBtn);
            var linebreak = document.createElement('br');
            player1InfoBox.appendChild(linebreak);
            var linebreak = document.createElement('br');
            player1InfoBox.appendChild(linebreak);
            
            //Player1 Character 1st Move Button Render to Info Box
            var p1move1btn = document.createElement("btn")
            p1move1btn.id = "p1Move1";
            var p1move1name = document.createTextNode('' + res.moves[0]);
            p1move1btn.appendChild(p1move1name);
            player1InfoBox.appendChild(p1move1btn);
            var linebreak = document.createElement('br');
            player1InfoBox.appendChild(linebreak);
            var linebreak = document.createElement('br');
            player1InfoBox.appendChild(linebreak);
            
            
            //Player1 Character 2nd Move Button Render to Info Box
            var p1move2btn = document.createElement("btn")
            p1move2btn.id = "p1Move2";
            var p1move2name = document.createTextNode('' + res.moves[1]);
            p1move2btn.appendChild(p1move2name);
            player1InfoBox.appendChild(p1move2btn);
            var linebreak = document.createElement('br');
            player1InfoBox.appendChild(linebreak);
            var linebreak = document.createElement('br');
            player1InfoBox.appendChild(linebreak);

            //Player1 Character 3rd Move Button Render to Info Box
            var p1move3btn = document.createElement("btn")
            p1move3btn.id = "p1Move3";
            var p1move3name = document.createTextNode('' + res.moves[2]);
            p1move3btn.appendChild(p1move3name);
            player1InfoBox.appendChild(p1move3btn);
            var linebreak = document.createElement('br');
            player1InfoBox.appendChild(linebreak);
            var linebreak = document.createElement('br');
            player1InfoBox.appendChild(linebreak);

            //Player1 Character Ultimate Move Button Render to Info Box
            var p1moveUltbtn = document.createElement("btn")
            p1moveUltbtn.id = "p1MoveUlt";
            var p1moveUltname = document.createTextNode('' + res.ultimate);
            p1moveUltbtn.appendChild(p1moveUltname);
            player1InfoBox.appendChild(p1moveUltbtn);
            var linebreak = document.createElement('br');
            player1InfoBox.appendChild(linebreak);
            var linebreak = document.createElement('br');
            player1InfoBox.appendChild(linebreak);
            
           

            // Render Stats For Player 1
            var stats1 = document.createElement('h2')
            stats1.id = "stats1" + res.name;
            
            
            var p1AtkDiv = document.createElement("div");
            p1AtkDiv.className = "p1StatDiv";
            p1AtkDiv.id = "p1AtkDiv";
            var p1Atk = document.createTextNode('Attack: ' + res.atk);
            p1Atk.id = "p1Atk";
            p1AtkDiv.appendChild(p1Atk);
            stats1.appendChild(p1AtkDiv);
            
            
            var p1DefDiv = document.createElement("div");
            p1DefDiv.className = "p1StatDiv";
            p1DefDiv.id = "p1DefDiv";
            var p1Def = document.createTextNode('Defense: ' + res.defend);
            p1Def.id = "p1Def";
            p1DefDiv.appendChild(p1Def);
            stats1.appendChild(p1DefDiv);
            
            
            var p1AuraAtkDiv = document.createElement("div");
            p1AuraAtkDiv.className = "p1StatDiv";
            p1AuraAtkDiv.id = "p1AuraAtkDiv";
            var p1AuraAtk = document.createTextNode('Aura Attack: ' + res.atkaura);
            p1AuraAtk.id = "p1AuraAtk";
            p1AuraAtkDiv.appendChild(p1AuraAtk);
            stats1.appendChild(p1AuraAtkDiv);


            var p1AuraDefDiv = document.createElement("div");
            p1AuraDefDiv.className = "p1StatDiv";
            p1AuraDefDiv.id = "p1AuraDefDiv";
            var p1AuraDef = document.createTextNode('Aura Defense: ' + res.defaura);
            p1AuraDef.id = "p1AuraDef";
            p1AuraDefDiv.appendChild(p1AuraDef);
            stats1.appendChild(p1AuraDefDiv);
            
            
            var p1SpdDiv = document.createElement("div");
            p1SpdDiv.className = "p1StatDiv";
            p1SpdDiv.id = "p1SpdDiv";
            var p1Spd = document.createTextNode('Speed: ' + res.speed);
            p1Spd.id = "p1Spd";
            p1SpdDiv.appendChild(p1Spd);
            stats1.appendChild(p1SpdDiv);
            player1InfoBox.appendChild(stats1);
            
            var textBoxDiv = document.createElement("div");
            textBoxDiv.id = "textBox";
            var textBoxHeader = document.createElement('h2');
            textBoxHeader.id = "textBoxHeader";
            var textBoxHeaderText = document.createTextNode('Battle Log');
            textBoxHeader.appendChild(textBoxHeaderText);
            textBoxDiv.appendChild(textBoxHeader);
            
            

            $(document).ready(function () {
                if (res.series == "Dragonball") {
                    $('#battle1').css('background-image', 'url(img/db_background.webp');
                }
                if (res.series == "DC") {
                    $('#battle1').css('background-image', 'url(img/dc-bg.png');
                }
                if (res.series == "Naruto") {
                    $('#battle1').css('background-image', 'url(img/hidden_leaf.png');
                }
                if (res.series == "StarWars") {
                    $('#battle1').css('background-image', 'url(img/star-wars-bg.jpg');
                }
                if (res.series == "Transformers") {
                    $('#battle1').css('background-image', 'url(img/transformers-bg.jpeg');
                    $('#battle1').css('background-size', 'cover');
                }
                if (res.series == "YuYu Hakusho") {
                    $('#battle1').css('background-image', 'url(img/yyh-logo.png');
                    $('#battle1').css('background-size', 'cover');
                }
                if (res.series == "My Hero Academia") {
                    $('#battle1').css('background-image', 'url(img/my-hero-logo.jpeg');
                    $('#battle1').css('background-size', 'cover');
                }
                if (res.series == "Samurai Jack") {
                    $('#battle1').css('background-image', 'url(img/samurai-jack-bg.jpeg');
                    $('#battle1').css('background-size', 'cover');
                }
                if (res.series == "Sly Cooper") {
                    $('#battle1').css('background-image', 'url(img/sly-bg.jpeg');
                    $('#battle1').css('background-size', 'cover');
                }
                if (res.series == "Attack on Titan") {
                    $('#battle1').css('background-image', 'url(img/aot-bg.jpeg');
                    $('#battle1').css('background-size', 'cover');
                }
                if (res.series == "Zelda") {
                    $('#battle1').css('background-image', 'url(img/zelda-bg.png');
                    $('#battle1').css('background-size', 'cover');
                }
            });
            
            
            //Append Player1 Info Box to battleScreen Div
            var battleContainer = document.querySelector("#battleScreen");
            battleContainer.appendChild(player1InfoBox);
            battleContainer.appendChild(textBoxDiv);



            //HP Recovery Formula
            $('#p1SenzuBtn').click(function() {
                p1HPTotals = 1200
                var p1HPBar = (p1HPTotals/1200)*300;
                p1HP.style.width = p1HPBar + "px";

                textBoxDiv.innerHTML += p1FighterName + " recovered health completely! <br>";
                var p1SenzuBtn = document.getElementById('p1SenzuBtn');
                $(p1SenzuBtn).css('visibility', 'hidden');

                var audioElement = document.createElement('audio');
                audioElement.setAttribute('src', 'audio/senzu-bean-audio.mp3');
                audioElement.setAttribute('autoplay', 'autoplay');
                audioElement.play();
                
                
            });
            //Ki Recovery Formula
            $('#p1AuraRecBtn').click(function() {

                // document.getElementById("GokuKiAudio").play(); - change to sound of DBZ auras
                if(p1KiTotals<=800) {
                    p1KiTotals += 400;
                } else if(p1KiTotals>800) {
                    p1KiTotals = 1200
                }
                var p1KiBar = (p1KiTotals/1200)*300;
                p1Ki.style.width = p1KiBar + "px";
                // bottomRow.innerHTML += "<br>" + Res.name +  - Send to textbox once made

                textBoxDiv.innerHTML += p1FighterName + " recovered his ki! " + p1FighterName + " now has " + p1KiTotals + " Ki remaining.<br>";
                var audioElement = document.createElement('audio');
                audioElement.setAttribute('src', 'audio/ki-recovery-audio.mp3');
                audioElement.setAttribute('autoplay', 'autoplay');
                audioElement.play();
            });
            
            
            //P1 Stat Change Formulas
            $('#p1Move1').click(function() {
                if ((p1Move1Selection == "Rasengan" || "Chidori")  && (p1KiTotals > 154)) {
                    
                    p1AtkCounter +=5;
                    p1DefCounter +=5;
                    p1AuraAtkCounter +=5;
                    p1AuraDefCounter +=5;
                    p1SpdCounter +=-5;
                    
                   
                    
                    var newP1Atk = p1FightAtk + p1AtkCounter;
                    var newP1Def = p1FightDef + p1DefCounter;
                    var newP1AuraAtk = p1FightAuraAtk + p1AuraAtkCounter;
                    var newP1AuraDef = p1FightAuraDef + p1AuraDefCounter;
                    var newP1Spd = p1FightSpd + p1SpdCounter;
                    p1Atk.textContent = 'Attack: ' + newP1Atk;
                    p1Def.textContent = 'Defense: ' + newP1Def;
                    p1AuraAtk.textContent = 'Aura Attack: ' + newP1AuraAtk;
                    p1AuraDef.textContent = 'Aura Defense: ' + newP1AuraDef;
                    p1Spd.textContent = 'Speed: ' + newP1Spd;
                    
                   
                }
            });
            $('#p1Move2').click(function() {
                if ((p1Move2Selection == "Uzumaki Barrage" || "Barrage of Lions")  && (p1KiTotals > 154)) {
                   
                    p1AtkCounter +=5;
                    p1DefCounter +=5;
                    p1AuraAtkCounter +=5;
                    p1AuraDefCounter +=5;
                    p1SpdCounter +=-5;
                    
                    
                    var newP1Atk = p1FightAtk + p1AtkCounter;
                    var newP1Def = p1FightDef + p1DefCounter;
                    var newP1AuraAtk = p1FightAuraAtk + p1AuraAtkCounter;
                    var newP1AuraDef = p1FightAuraDef + p1AuraDefCounter;
                    var newP1Spd = p1FightSpd + p1SpdCounter;
                    p1Atk.textContent = 'Attack: ' + newP1Atk;
                    p1Def.textContent = 'Defense: ' + newP1Def;
                    p1AuraAtk.textContent = 'Aura Attack: ' + newP1AuraAtk;
                    p1AuraDef.textContent = 'Aura Defense: ' + newP1AuraDef;
                    p1Spd.textContent = 'Speed: ' + newP1Spd;
                }
            });
            $('#p1Move3').click(function() {
                if ((p1Move3Selection == "Toad Summoning" || "Snake Summoning")  && (p1KiTotals > 154)) {

                    p1AtkCounter +=5;
                    p1DefCounter +=5;
                    p1AuraAtkCounter +=5;
                    p1AuraDefCounter +=5;
                    p1SpdCounter +=-5;
                    
                    
                    var newP1Atk = p1FightAtk + p1AtkCounter;
                    var newP1Def = p1FightDef + p1DefCounter;
                    var newP1AuraAtk = p1FightAuraAtk + p1AuraAtkCounter;
                    var newP1AuraDef = p1FightAuraDef + p1AuraDefCounter;
                    var newP1Spd = p1FightSpd + p1SpdCounter;
                    p1Atk.textContent = 'Attack: ' + newP1Atk;
                    p1Def.textContent = 'Defense: ' + newP1Def;
                    p1AuraAtk.textContent = 'Aura Attack: ' + newP1AuraAtk;
                    p1AuraDef.textContent = 'Aura Defense: ' + newP1AuraDef;
                    p1Spd.textContent = 'Speed: ' + newP1Spd;
                }
            });
            $('#p1MoveUlt').click(function() {
                if ((p1MoveUltSelection == "RasenShuriken" || "Kirin")  && (p1KiTotals > 154)) {
          
                    p1AtkCounter +=5;
                    p1DefCounter +=5;
                    p1AuraAtkCounter +=5;
                    p1AuraDefCounter +=5;
                    p1SpdCounter +=-5;

                    var newP1Atk = p1FightAtk + p1AtkCounter;
                    var newP1Def = p1FightDef + p1DefCounter;
                    var newP1AuraAtk = p1FightAuraAtk + p1AuraAtkCounter;
                    var newP1AuraDef = p1FightAuraDef + p1AuraDefCounter;
                    var newP1Spd = p1FightSpd + p1SpdCounter;
                    p1Atk.textContent = 'Attack: ' + newP1Atk;
                    p1Def.textContent = 'Defense: ' + newP1Def;
                    p1AuraAtk.textContent = 'Aura Attack: ' + newP1AuraAtk;
                    p1AuraDef.textContent = 'Aura Defense: ' + newP1AuraDef;
                    p1Spd.textContent = 'Speed: ' + newP1Spd;
                }
            });

        })
        //Declaring Variables for P1 Data To Be Manipulated Later In Script
        var p1Move1Selection = res.moves[0];
        var p1Move2Selection = res.moves[1];
        var p1Move3Selection = res.moves[2];
        var p1MoveUltSelection = res.ultimate;
        var p1FighterName = res.name;
        var p1FightAtk = res.atk;
        var p1FightDef = res.defend;
        var p1FightAuraAtk = res.atkaura;
        var p1FightAuraDef = res.defaura;
        var p1FightSpd = res.speed;
        var p1AtkCounter = 0;
        var p1DefCounter = 0;
        var p1AuraAtkCounter = 0;
        var p1AuraDefCounter = 0;
        var p1SpdCounter = 0;
        var p2AtkCounter = 0;
        var p2DefCounter = 0;
        var p2AuraAtkCounter = 0;
        var p2AuraDefCounter = 0;
        var p2SpdCounter = 0;
       


        //Stores P2 Data Once Selected and Renders in Battle Screen
        $('#charSelectBtn2' + res.id).click(function(){

            $('.charSelBtn2').prop("disabled", true);
            
            var isPlayer2Selection = true;
            
            if(isPlayer2Selection == true){
                var player2Name = res.name;
                var player2Img = res.img;
                var player2Moves = res.moves;
                var player2Ultimate = res.ultimate;
                var player2Atk = res.atk;
                var player2Def = res.defend;
                var player2AuraAtk = res.atkaura;
                var player2AuraDef = res.defaura;
                var player2Spd = res.speed;
                var player2Rivals = res.rivals;
                var player2Series = res.series;
            }
            //Check Data is Storing Correct Value
             topRow.innerHTML += "You selected " + player2Name + " as Player 2! <br>"
             topRow.innerHTML += "The battle will begin in 3 seconds! <br>"
             
            
            // Check res.series for value and change p1 and p2 background based on it.
            //Player 2 Info Box
             var player2InfoBox = document.createElement("div");
             player2InfoBox.id = "battle2";
             
             //Player 2 Character Name Render to Info Box
             var charNameHeader2 = document.createElement('h2')
             charNameHeader2.id = "charNameHeader2";
             var p2Name = document.createTextNode('' + res.name);
             charNameHeader2.appendChild(p2Name);
             player2InfoBox.appendChild(charNameHeader2);
             
             //Player 2 Character Img Render to Info Box
             var image2 = document.createElement("img");
             image2.src = res.img;
             image2.id = "p2Img"; 
             var p2Image = document.createElement("div");
             p2Image.id = "p2ImageDiv";
             p2Image.appendChild(image2);
             player2InfoBox.appendChild(p2Image);
             var linebreak = document.createElement('br');
             player2InfoBox.appendChild(linebreak);
             
            //Player2 HP and Aura Bar; Make sure to reset totals when fight ends
            var hpHeader2 = document.createElement('h2')
            hpHeader2.id = "hpHeader2" + res.name;
            var barNameHP2 = document.createTextNode('HP');
            hpHeader2.appendChild(barNameHP2);
            player2InfoBox.appendChild(hpHeader2);
            
            var p2HealthBorder = document.createElement("div");
            p2HealthBorder.className = "hpBorder";
            p2HealthBorder.id = "p2HealthBorder";
            var p2HP = document.createElement("div")
            p2HP.className = "hpBar";
            p2HP.id = "p2Health";
            p2HealthBorder.appendChild(p2HP);
            player2InfoBox.appendChild(p2HealthBorder);
            var linebreak = document.createElement('br');
            player2InfoBox.appendChild(linebreak);
            
            var kiHeader2 = document.createElement('h2')
            kiHeader2.id = "kiHeader2" + res.name;
            var barNameKI2 = document.createTextNode('KI');
            kiHeader2.appendChild(barNameKI2);
            player2InfoBox.appendChild(kiHeader2);

            var p2KiBorder = document.createElement("div");
            p2KiBorder.className = "kiBorder";
            p2KiBorder.id = "p2KiBorder";
            var p2Ki = document.createElement("div")
            p2Ki.className = "kiBar";
            p2Ki.id = "p2Ki";
            p2KiBorder.appendChild(p2Ki);
            player2InfoBox.appendChild(p2KiBorder);
            var linebreak = document.createElement('br');
            player2InfoBox.appendChild(linebreak);
            //Player2 Senzu Bean Button Render to Info Box
            var p2SenzuBtn = document.createElement("btn")
            p2SenzuBtn.id = "p2SenzuBtn";
            var p2SenzuName = document.createTextNode("Senzu Bean");
            p2SenzuBtn.appendChild(p2SenzuName);
            player2InfoBox.appendChild(p2SenzuBtn);
            var linebreak = document.createElement('br');
            player2InfoBox.appendChild(linebreak);
            var linebreak = document.createElement('br');
            player2InfoBox.appendChild(linebreak);

            //Player2 Aura Recovery Button Render to Info Box
            var p2AuraRecBtn = document.createElement("btn")
            p2AuraRecBtn.id = "p2AuraRecBtn";
            var p2AuraRecName = document.createTextNode("Gather Ki");
            p2AuraRecBtn.appendChild(p2AuraRecName);
            player2InfoBox.appendChild(p2AuraRecBtn);
            var linebreak = document.createElement('br');
            player2InfoBox.appendChild(linebreak);
            var linebreak = document.createElement('br');
            player2InfoBox.appendChild(linebreak);

            //Player2 Character 1st Move Button Render to Info Box
             var p2move1btn = document.createElement("btn")
             p2move1btn.id = "p2Move1";
             var p2move1name = document.createTextNode('' + res.moves[0]);
             p2move1btn.appendChild(p2move1name);
             player2InfoBox.appendChild(p2move1btn);
             var linebreak = document.createElement('br');
             player2InfoBox.appendChild(linebreak);
             var linebreak = document.createElement('br');
             player2InfoBox.appendChild(linebreak);

             //Player2 Character 2nd Move Button Render to Info Box
             var p2move2btn = document.createElement("btn")
             p2move2btn.id = "p2Move2";
             var p2move2name = document.createTextNode('' + res.moves[1]);
             p2move2btn.appendChild(p2move2name);
             player2InfoBox.appendChild(p2move2btn);
             var linebreak = document.createElement('br');
             player2InfoBox.appendChild(linebreak);
             var linebreak = document.createElement('br');
             player2InfoBox.appendChild(linebreak);

             //Player2 Character 3rd Move Button Render to Info Box
             var p2move3btn = document.createElement("btn")
             p2move3btn.id = "p2Move3";
             var p2move3name = document.createTextNode('' + res.moves[2]);
             p2move3btn.appendChild(p2move3name);
             player2InfoBox.appendChild(p2move3btn);
             var linebreak = document.createElement('br');
             player2InfoBox.appendChild(linebreak);
             var linebreak = document.createElement('br');
             player2InfoBox.appendChild(linebreak);
             
             //Player2 Character Ultimate Move Button Render to Info Box
             var p2moveUltbtn = document.createElement("btn")
             p2moveUltbtn.id = "p2MoveUlt";
             var p2moveUltname = document.createTextNode('' + res.ultimate);
             p2moveUltbtn.appendChild(p2moveUltname);
             player2InfoBox.appendChild(p2moveUltbtn);
             var linebreak = document.createElement('br');
             player2InfoBox.appendChild(linebreak);
             var linebreak = document.createElement('br');
             player2InfoBox.appendChild(linebreak);

        

             // Render Stats For Player 2
             var stats2 = document.createElement('h2')
             stats2.id = "stats2" + res.name;
             var p2Atk = document.createTextNode('Attack: ' + res.atk);
             stats2.appendChild(p2Atk);
             var linebreak = document.createElement('br');
             stats2.appendChild(linebreak);
             var p2Def = document.createTextNode('Defense: ' + res.defend);
             stats2.appendChild(p2Def);
             var linebreak = document.createElement('br');
             stats2.appendChild(linebreak);
             var p2AtkAura = document.createTextNode('Aura Attack: ' + res.atkaura);
             stats2.appendChild(p2AtkAura);
             var linebreak = document.createElement('br');
             stats2.appendChild(linebreak);
             var p2DefAura = document.createTextNode('Aura Defense: ' + res.defaura);
             stats2.appendChild(p2DefAura);
             var linebreak = document.createElement('br');
             stats2.appendChild(linebreak);
             var p2Spd = document.createTextNode('Speed: ' + res.speed);
             stats2.appendChild(p2Spd);
             player2InfoBox.appendChild(stats2);

             
             //Append Player2 Info Box to battleScreen Div
             var battleContainer = document.querySelector("#battleScreen");
             battleContainer.appendChild(player2InfoBox);
             
             
             // Switching to 
             setTimeout(function(){ $('#characterSelectScreen').toggle(); }, 3000);
             setTimeout(function(){ $('#textBox').toggle(); }, 3000);
             setTimeout(function(){ $('#topRow').toggle(); }, 3000);
             setTimeout(function(){ $('#battleScreen').toggle(); }, 3000);
             setTimeout(function(){ $('#battleScreen').css({'display': 'flex'}); }, 3000);
             setTimeout(function(){ $('#battle1').toggle(); }, 3000);
             setTimeout(function(){ $('#battle1' + res.name).css({'display': 'block'}); }, 3000);
             setTimeout(function(){ $('#battle2').toggle(); }, 3000);
             setTimeout(function(){ $('#battle2' + res.name).css({'display': 'block'}); }, 3000);
             setTimeout(function(){ $('.hpBar').toggle(); }, 3000);
             setTimeout(function(){ $('.hpBorder').toggle(); }, 3000);
             setTimeout(function(){ $('.kiBar').toggle(); }, 3000);
             setTimeout(function(){ $('.kiBorder').toggle(); }, 3000);
             setTimeout(function(){ $('.p1StatDiv').toggle(); }, 3000);
             
             
             $(document).ready(function () {
                 if (res.series == "Dragonball") {
                     $('#battle2').css('background-image', 'url(img/db_background.webp');
                 }
                 if (res.series == "DC") {
                     $('#battle2').css('background-image', 'url(img/dc-bg.png');
                     $('#battleScreen').css('background-image', 'url(img/batcave.jpeg');
                     $('#battleScreen').css('background-size', 'cover');
                 }
                 if (res.series == "Naruto") {
                     $('#battle2').css('background-image', 'url(img/hidden_leaf.png');
                     $('#battleScreen').css('background-image', 'url(img/naruto-stage-1.png');
                     $('#battleScreen').css('background-size', 'cover');
                 }
                 if (res.series == "StarWars") {
                     $('#battle2').css('background-image', 'url(img/star-wars-bg.jpg');
                     $('#battleScreen').css('background-image', 'url(img/millenium-falcon-bg.jpeg');
                     $('#battleScreen').css('background-size', 'cover');
                 }
                 if (res.series == "Transformers") {
                     $('#battle2').css('background-image', 'url(img/transformers-bg.jpeg');
                     $('#battle2').css('background-size', 'cover');
                     $('#battleScreen').css('background-image', 'url(img/cybertron.jpeg');
                     $('#battleScreen').css('background-size', 'cover');
                 }
                 if (res.series == "YuYu Hakusho") {
                     $('#battle2').css('background-image', 'url(img/yyh-logo.png');
                     $('#battle2').css('background-size', 'cover');
                     $('#battleScreen').css('background-image', 'url(img/genkai-temple.jpeg');
                     $('#battleScreen').css('background-size', 'cover');
                 }
                 if (res.series == "My Hero Academia") {
                     $('#battle2').css('background-image', 'url(img/my-hero-logo.jpeg');
                     $('#battle2').css('background-size', 'cover');
                     $('#battleScreen').css('background-image', 'url(img/ua-hero-academy.png');
                     $('#battleScreen').css('background-size', 'cover');
                 }
                 if (res.series == "Samurai Jack") {
                     $('#battle2').css('background-image', 'url(img/samurai-jack-bg.jpeg');
                     $('#battle2').css('background-size', 'cover');
                     $('#battleScreen').css('background-image', 'url(img/jackground.jpeg');
                     $('#battleScreen').css('background-size', 'cover');
                 }
                 if (res.series == "Sly Cooper") {
                     $('#battle2').css('background-image', 'url(img/sly-bg.jpeg');
                     $('#battle2').css('background-size', 'cover');
                     $('#battleScreen').css('background-image', 'url(img/sly-stage.jpeg');
                     $('#battleScreen').css('background-size', 'cover');
                 }
                 if (res.series == "Attack on Titan") {
                     $('#battle2').css('background-image', 'url(img/aot-bg.jpeg');
                     $('#battle2').css('background-size', 'cover');
                     $('#battleScreen').css('background-image', 'url(img/aot-stage-1.jpeg');
                     $('#battleScreen').css('background-size', 'cover');
                 }
                 if (res.series == "Zelda") {
                     $('#battle2').css('background-image', 'url(img/zelda-bg.png');
                     $('#battle2').css('background-size', 'cover');
                     $('#battleScreen').css('background-image', 'url(img/hyrule.jpeg');
                     $('#battleScreen').css('background-size', 'cover');
                 }

                 
                 // p1Move1 Effects on Player 2
                
                 // ON CLICK FUNCTIONS FOR BUTTONS

                 //HP Recovery Formula
                 $('#p2SenzuBtn').click(function() {
                     p2HPTotals = 1200
                     var p2HPBar = (p2HPTotals/1200)*300;
                     p2HP.style.width = p2HPBar + "px";

                     // bottomRow.innerHTML += "<br>" + Res.name + " recovered health completely!"; - Send to textbox once made
                     var p2SenzuBtn = document.getElementById('p2SenzuBtn');
                     $(p2SenzuBtn).css('visibility', 'hidden');

                     var audioElement = document.createElement('audio');
                     audioElement.setAttribute('src', 'audio/senzu-bean-audio.mp3');
                     audioElement.setAttribute('autoplay', 'autoplay');
                     audioElement.play();


                 });
                 //Ki Recovery Formula
                 $('#p2AuraRecBtn').click(function() {

                     if(p2KiTotals<=800) {
                         p2KiTotals += 400;
                     } else if(p2KiTotals>800) {
                         p2KiTotals = 1200
                     }
                     var p2KiBar = (p2KiTotals/1200)*300;
                     p2Ki.style.width = p2KiBar + "px";
                     // bottomRow.innerHTML += "<br>" + Res.name + " recovered his ki!" + res.name(p1) + " now has " + p1Ki + " Ki remaining."; - Send to textbox once made

                     var audioElement = document.createElement('audio');
                     audioElement.setAttribute('src', 'audio/ki-recovery-audio.mp3');
                     audioElement.setAttribute('autoplay', 'autoplay');
                     audioElement.play();
                 });



                 // PLAYER 1 BUTTONS

                 $('#p1Move1').click(function() {
                     //Move Type 1 = Classic Beam Ball Type Beat
                     if ((p1Move1Selection == "Rasengan" || "Chidori")  && (p1KiTotals > 154)) {


                         p2AtkCounter +=8;
                         p2AuraAtkCounter +=8;
                         p2DefCounter +=-5;
                         p2AuraDefCounter +=-5;
                         p2SpdCounter +=-2;
                         
                         
                         var p1FighterNameDiv = document.getElementById("charNameHeader1").innerText;
                         var p1FighterMoveDiv = document.getElementById("p1Move1").innerText;
                         console.log(p1FighterNameDiv + " used " + p1FighterMoveDiv + "!");
                         
                         var P2HPBarWidth = (p2HPTotals / 1200) * 300;
                         p2HP.style.width = P2HPBarWidth + "px";

                         //Damage Calculator
                         var damage = Math.round(Math.random() * 60 + 45);
                         console.log("damage = "+ damage);
                         p2HPTotals -= damage;
                         if (p2HPTotals < 0) {
                             p2HPTotals = 0;
                             console.log(p1FighterNameDiv + " wins the fight!");
                         }

                         //Ki Set Up
                         p1KiTotals -= 155;
                         var P1KiBarWidth = (p1KiTotals / 1200) * 300;
                         p1Ki.style.width = P1KiBarWidth + "px";
                         

                         var newP2Atk = p2FightAtk + p2AtkCounter;
                         var newP2Def = p2FightDef + p2DefCounter;
                         var newP2AuraAtk = p2FightAuraAtk + p2AuraAtkCounter;
                         var newP2AuraDef = p2FightAuraDef + p2AuraDefCounter;
                         var newP2Spd = p2FightSpd + p2SpdCounter;
                         p2Atk.textContent = 'Attack: ' + newP2Atk;
                         p2Def.textContent = 'Defense: ' + newP2Def;
                         p2AtkAura.textContent = 'Aura Attack: ' + newP2AuraAtk;
                         p2DefAura.textContent = 'Aura Defense: ' + newP2AuraDef;
                         p2Spd.textContent = 'Speed: ' + newP2Spd;

                     }
                 });
                 
                 $('#p1Move2').click(function() {
                     // Melee Move. Physical Barrage of Attacks
                     if ((p1Move2Selection == "Uzumaki Barrage" || "Barrage of Lions")  && (p1KiTotals > 154)) {
                     
                    
                         var p1FighterNameDiv = document.getElementById("charNameHeader1").innerText;
                         console.log(p1FighterNameDiv);
                         var p1FighterMoveDiv = document.getElementById("p1Move2").innerText;
                         console.log(p1FighterNameDiv + " used " + p1FighterMoveDiv + "!");
                         
                         
                         var P2HPBarWidth = (p2HPTotals / 1200) * 300;
                         p2HP.style.width = P2HPBarWidth + "px";

                         //Damage Calculator
                         var damage = Math.round(Math.random() * 60 + 45);
                         p2HPTotals -= damage;
                         if (p2HPTotals < 0) {
                             p2HPTotals = 0;
                             console.log(p1FighterNameDiv + " wins the fight!");
                         }
                         //Ki Set Up
                         p1KiTotals -= 155;
                         var P1KiBarWidth = (p1KiTotals / 1200) * 300;
                         p1Ki.style.width = P1KiBarWidth + "px";

                         //P2 Stat Changes    
                         p2AtkCounter +=8;
                         p2AuraAtkCounter +=8;
                         p2DefCounter +=-5;
                         p2AuraDefCounter +=-5;
                         p2SpdCounter +=-2;


                         var newP2Atk = p2FightAtk + p2AtkCounter;
                         var newP2Def = p2FightDef + p2DefCounter;
                         var newP2AuraAtk = p2FightAuraAtk + p2AuraAtkCounter;
                         var newP2AuraDef = p2FightAuraDef + p2AuraDefCounter;
                         var newP2Spd = p2FightSpd + p2SpdCounter;
                         p2Atk.textContent = 'Attack: ' + newP2Atk;
                         p2Def.textContent = 'Defense: ' + newP2Def;
                         p2AtkAura.textContent = 'Aura Attack: ' + newP2AuraAtk;
                         p2DefAura.textContent = 'Aura Defense: ' + newP2AuraDef;
                         p2Spd.textContent = 'Speed: ' + newP2Spd;
                     }
                 });
                 
                 
                 $('#p1Move3').click(function() {
                     //High Ki Consumption... Best Damage of all 3
                     if ((p1Move3Selection == "Toad Summoning" || "Snake Summoning") && (p1KiTotals > 154)) {
                         
                         
                         var p1FighterNameDiv = document.getElementById("charNameHeader1").innerText;
                         var p1FighterMoveDiv = document.getElementById("p1Move3").innerText;
                         console.log(p1FighterNameDiv + " used " + p1FighterMoveDiv + "!");
                         
                         var P2HPBarWidth = (p2HPTotals / 1200) * 300;
                         p2HP.style.width = P2HPBarWidth + "px";

                         //Damage Calculator
                         var damage = Math.round(Math.random() * 60 + 45);
                         p2HPTotals -= damage;
                         if (p2HPTotals < 0) {
                             p2HPTotals = 0;
                             console.log(p1FighterNameDiv + " wins the fight!");
                         }

                         //Ki Set Up
                         p1KiTotals -= 155;
                         var P1KiBarWidth = (p1KiTotals / 1200) * 300;
                         p1Ki.style.width = P1KiBarWidth + "px";


                         //P2 Stat Changes    
                         p2AtkCounter +=8;
                         p2AuraAtkCounter +=8;
                         p2DefCounter +=-5;
                         p2AuraDefCounter +=-5;
                         p2SpdCounter +=-2;


                         var newP2Atk = p2FightAtk + p2AtkCounter;
                         var newP2Def = p2FightDef + p2DefCounter;
                         var newP2AuraAtk = p2FightAuraAtk + p2AuraAtkCounter;
                         var newP2AuraDef = p2FightAuraDef + p2AuraDefCounter;
                         var newP2Spd = p2FightSpd + p2SpdCounter;
                         p2Atk.textContent = 'Attack: ' + newP2Atk;
                         p2Def.textContent = 'Defense: ' + newP2Def;
                         p2AtkAura.textContent = 'Aura Attack: ' + newP2AuraAtk;
                         p2DefAura.textContent = 'Aura Defense: ' + newP2AuraDef;
                         p2Spd.textContent = 'Speed: ' + newP2Spd;
                     }
                 });
                 
                 
                 
                 //Aura or Physical depending on Character
                 $('#p1MoveUlt').click(function() {
                     //Aura Atk - highest ki consumption - best stat boost add-on
                     if ((p1MoveUltSelection == "RasenShuriken" || "Kirin") && (p1KiTotals > 154)) {
                         

                         //P2 Stat Changes    
                         p2AtkCounter +=8;
                         p2AuraAtkCounter +=8;
                         p2DefCounter +=-5;
                         p2AuraDefCounter +=-5;
                         p2SpdCounter +=-2;
                         
                         
                         var p1FighterNameDiv = document.getElementById("charNameHeader1").innerText;
                         console.log(p1FighterNameDiv);
                         var p1FighterMoveDiv = document.getElementById("p1MoveUlt").innerText;
                         console.log(p1FighterNameDiv + " used " + p1FighterMoveDiv + "!");
                         
                         
                         var P2HPBarWidth = (p2HPTotals / 1200) * 300;
                         p2HP.style.width = P2HPBarWidth + "px";

                         //Damage Calculator
                         var damage = Math.round(Math.random() * 60 + 45);
                         p2HPTotals -= damage;
                         if (p2HPTotals < 0) {
                             p2HPTotals = 0;
                             console.log(p1FighterNameDiv + " wins the fight!");
                         }

                         //Ki Set Up
                         p1KiTotals -= 155;
                         var P1KiBarWidth = (p1KiTotals / 1200) * 300;
                         p1Ki.style.width = P1KiBarWidth + "px";

                         var newP2Atk = p2FightAtk + p2AtkCounter;
                         var newP2Def = p2FightDef + p2DefCounter;
                         var newP2AuraAtk = p2FightAuraAtk + p2AuraAtkCounter;
                         var newP2AuraDef = p2FightAuraDef + p2AuraDefCounter;
                         var newP2Spd = p2FightSpd + p2SpdCounter;
                         p2Atk.textContent = 'Attack: ' + newP2Atk;
                         p2Def.textContent = 'Defense: ' + newP2Def;
                         p2AtkAura.textContent = 'Aura Attack: ' + newP2AuraAtk;
                         p2DefAura.textContent = 'Aura Defense: ' + newP2AuraDef;
                         p2Spd.textContent = 'Speed: ' + newP2Spd;
                     }
                 });
                 
                 // PLAYER 2 BUTTONS
                 
                 $('#p2Move1').click(function() {
                     if ((p2Move1Selection == "Rasengan" || "Chidori")  && (p2KiTotals > 154)) {

                         p1AtkCounter +=5;
                         p1DefCounter +=5;
                         p1AuraAtkCounter +=5;
                         p1AuraDefCounter +=5;
                         p1SpdCounter +=-5;
                         
                         var p1AtkDiv = document.getElementById("p1AtkDiv");
                         var p1DefDiv = document.getElementById("p1DefDiv");
                         var p1AuraAtkDiv = document.getElementById("p1AuraAtkDiv");
                         var p1AuraDefDiv = document.getElementById("p1AuraDefDiv");
                         var p1SpdDiv = document.getElementById("p1SpdDiv");
                         var newP1Atk = p1FightAtk + p1AtkCounter;
                         var newP1Def = p1FightDef + p1DefCounter;
                         var newP1AuraAtk = p1FightAuraAtk + p1AuraAtkCounter;
                         var newP1AuraDef = p1FightAuraDef + p1AuraDefCounter;
                         var newP1Spd = p1FightSpd + p1SpdCounter;
                         p1AtkDiv.textContent = 'Attack: ' + newP1Atk;
                         p1DefDiv.textContent = 'Defense: ' + newP1Def;
                         p1AuraAtkDiv.textContent = 'Aura Attack: ' + newP1AuraAtk;
                         p1AuraDefDiv.textContent = 'Aura Defense: ' + newP1AuraDef;
                         p1SpdDiv.textContent = 'Speed: ' + newP1Spd;

                         //P2 Stat Changes    
                         p2AtkCounter +=8;
                         p2AuraAtkCounter +=8;
                         p2DefCounter +=-5;
                         p2AuraDefCounter +=-5;
                         p2SpdCounter +=-2;


                         var newP2Atk = p2FightAtk + p2AtkCounter;
                         var newP2Def = p2FightDef + p2DefCounter;
                         var newP2AuraAtk = p2FightAuraAtk + p2AuraAtkCounter;
                         var newP2AuraDef = p2FightAuraDef + p2AuraDefCounter;
                         var newP2Spd = p2FightSpd + p2SpdCounter;
                         p2Atk.textContent = 'Attack: ' + newP2Atk;
                         p2Def.textContent = 'Defense: ' + newP2Def;
                         p2AtkAura.textContent = 'Aura Attack: ' + newP2AuraAtk;
                         p2DefAura.textContent = 'Aura Defense: ' + newP2AuraDef;
                         p2Spd.textContent = 'Speed: ' + newP2Spd;



                         //Ki Set Up
                         p2KiTotals -= 155;
                         var P2KiBarWidth = (p2KiTotals / 1200) * 300;
                         p2Ki.style.width = P2KiBarWidth + "px";

                         //Damage Calculator
                         var damage = Math.round(Math.random() * 60 + 45);
                         p1HPTotals -= damage;
                         if (p1HPTotals < 0) {
                             p1HPTotals = 0;
                             console.log(res.name + " wins the fight!");
                         }

                         var P1HPBarWidth = (p1HPTotals / 1200) * 300;
                         var p1HP = document.getElementById("p1Health");
                         p1HP.style.width = P1HPBarWidth + "px";

                         console.log(res.name + " used " + p2Move1Selection + "!");

                     }
                 });


                 $('#p2Move2').click(function() {
                     if ((p2Move2Selection == "Uzumaki Barrage" || "Barrage of Lions")  && (p2KiTotals > 154)) {

                        //P1 Stat Changes
                         p1AtkCounter +=5;
                         p1DefCounter +=5;
                         p1AuraAtkCounter +=5;
                         p1AuraDefCounter +=5;
                         p1SpdCounter +=-5;

                         var p1AtkDiv = document.getElementById("p1AtkDiv");
                         var p1DefDiv = document.getElementById("p1DefDiv");
                         var p1AuraAtkDiv = document.getElementById("p1AuraAtkDiv");
                         var p1AuraDefDiv = document.getElementById("p1AuraDefDiv");
                         var p1SpdDiv = document.getElementById("p1SpdDiv");
                         var newP1Atk = p1FightAtk + p1AtkCounter;
                         var newP1Def = p1FightDef + p1DefCounter;
                         var newP1AuraAtk = p1FightAuraAtk + p1AuraAtkCounter;
                         var newP1AuraDef = p1FightAuraDef + p1AuraDefCounter;
                         var newP1Spd = p1FightSpd + p1SpdCounter;
                         p1AtkDiv.textContent = 'Attack: ' + newP1Atk;
                         p1DefDiv.textContent = 'Defense: ' + newP1Def;
                         p1AuraAtkDiv.textContent = 'Aura Attack: ' + newP1AuraAtk;
                         p1AuraDefDiv.textContent = 'Aura Defense: ' + newP1AuraDef;
                         p1SpdDiv.textContent = 'Speed: ' + newP1Spd;
                         
                         //P2 Stat Changes    
                         p2AtkCounter +=8;
                         p2AuraAtkCounter +=8;
                         p2DefCounter +=-5;
                         p2AuraDefCounter +=-5;
                         p2SpdCounter +=-2;


                         var newP2Atk = p2FightAtk + p2AtkCounter;
                         var newP2Def = p2FightDef + p2DefCounter;
                         var newP2AuraAtk = p2FightAuraAtk + p2AuraAtkCounter;
                         var newP2AuraDef = p2FightAuraDef + p2AuraDefCounter;
                         var newP2Spd = p2FightSpd + p2SpdCounter;
                         p2Atk.textContent = 'Attack: ' + newP2Atk;
                         p2Def.textContent = 'Defense: ' + newP2Def;
                         p2AtkAura.textContent = 'Aura Attack: ' + newP2AuraAtk;
                         p2DefAura.textContent = 'Aura Defense: ' + newP2AuraDef;
                         p2Spd.textContent = 'Speed: ' + newP2Spd;
                         
                         //Ki Set Up
                         p2KiTotals -= 155;
                         var P2KiBarWidth = (p2KiTotals / 1200) * 300;
                         p2Ki.style.width = P2KiBarWidth + "px";

                         //Damage Calculator
                         var damage = Math.round(Math.random() * 60 + 45);
                         p1HPTotals -= damage;
                         if (p1HPTotals < 0) {
                             p1HPTotals = 0
                             console.log(res.name + " wins the fight!");
                         }

                         var P1HPBarWidth = (p1HPTotals / 1200) * 300;
                         var p1HP = document.getElementById("p1Health");
                         p1HP.style.width = P1HPBarWidth + "px";

                         console.log(res.name + " used " + p2Move2Selection + "!");

                        
                     }
                 });


                 $('#p2Move3').click(function() {
                     if ((p2Move3Selection == "Toad Summoning" || "Snake Summoning") && (p2KiTotals > 154)) {
                         //P1 Stat Changes
                         p1AtkCounter +=5;
                         p1DefCounter +=5;
                         p1AuraAtkCounter +=5;
                         p1AuraDefCounter +=5;
                         p1SpdCounter +=-5;

                         var p1AtkDiv = document.getElementById("p1AtkDiv");
                         var p1DefDiv = document.getElementById("p1DefDiv");
                         var p1AuraAtkDiv = document.getElementById("p1AuraAtkDiv");
                         var p1AuraDefDiv = document.getElementById("p1AuraDefDiv");
                         var p1SpdDiv = document.getElementById("p1SpdDiv");
                         var newP1Atk = p1FightAtk + p1AtkCounter;
                         var newP1Def = p1FightDef + p1DefCounter;
                         var newP1AuraAtk = p1FightAuraAtk + p1AuraAtkCounter;
                         var newP1AuraDef = p1FightAuraDef + p1AuraDefCounter;
                         var newP1Spd = p1FightSpd + p1SpdCounter;
                         p1AtkDiv.textContent = 'Attack: ' + newP1Atk;
                         p1DefDiv.textContent = 'Defense: ' + newP1Def;
                         p1AuraAtkDiv.textContent = 'Aura Attack: ' + newP1AuraAtk;
                         p1AuraDefDiv.textContent = 'Aura Defense: ' + newP1AuraDef;
                         p1SpdDiv.textContent = 'Speed: ' + newP1Spd;
                         
                         
                         //P2 Stat Changes    
                         p2AtkCounter +=8;
                         p2AuraAtkCounter +=8;
                         p2DefCounter +=-5;
                         p2AuraDefCounter +=-5;
                         p2SpdCounter +=-2;


                         var newP2Atk = p2FightAtk + p2AtkCounter;
                         var newP2Def = p2FightDef + p2DefCounter;
                         var newP2AuraAtk = p2FightAuraAtk + p2AuraAtkCounter;
                         var newP2AuraDef = p2FightAuraDef + p2AuraDefCounter;
                         var newP2Spd = p2FightSpd + p2SpdCounter;
                         p2Atk.textContent = 'Attack: ' + newP2Atk;
                         p2Def.textContent = 'Defense: ' + newP2Def;
                         p2AtkAura.textContent = 'Aura Attack: ' + newP2AuraAtk;
                         p2DefAura.textContent = 'Aura Defense: ' + newP2AuraDef;
                         p2Spd.textContent = 'Speed: ' + newP2Spd;
                         
                         //Ki Set Up
                         p2KiTotals -= 155;
                         var P2KiBarWidth = (p2KiTotals / 1200) * 300;
                         p2Ki.style.width = P2KiBarWidth + "px";

                         //Damage Calculator
                         var damage = Math.round(Math.random() * 60 + 45);
                         p1HPTotals -= damage;
                         if (p1HPTotals < 0) {
                             p1HPTotals = 0;
                             console.log(res.name + " wins the fight!");
                         }

                         var P1HPBarWidth = (p1HPTotals / 1200) * 300;
                         var p1HP = document.getElementById("p1Health");
                         p1HP.style.width = P1HPBarWidth + "px";

                         console.log(res.name + " used " + p2Move3Selection + "!");

                       
                     }
                 });
                 $('#p2MoveUlt').click(function() {
                     if ((p2MoveUltSelection == "RasenShuriken" || "Kirin") && (p2KiTotals > 154)) {

                         //P1 Stat Changes
                         p1AtkCounter +=5;
                         p1DefCounter +=5;
                         p1AuraAtkCounter +=5;
                         p1AuraDefCounter +=5;
                         p1SpdCounter +=-5;

                         var p1AtkDiv = document.getElementById("p1AtkDiv");
                         var p1DefDiv = document.getElementById("p1DefDiv");
                         var p1AuraAtkDiv = document.getElementById("p1AuraAtkDiv");
                         var p1AuraDefDiv = document.getElementById("p1AuraDefDiv");
                         var p1SpdDiv = document.getElementById("p1SpdDiv");
                         var newP1Atk = p1FightAtk + p1AtkCounter;
                         var newP1Def = p1FightDef + p1DefCounter;
                         var newP1AuraAtk = p1FightAuraAtk + p1AuraAtkCounter;
                         var newP1AuraDef = p1FightAuraDef + p1AuraDefCounter;
                         var newP1Spd = p1FightSpd + p1SpdCounter;
                         p1AtkDiv.textContent = 'Attack: ' + newP1Atk;
                         p1DefDiv.textContent = 'Defense: ' + newP1Def;
                         p1AuraAtkDiv.textContent = 'Aura Attack: ' + newP1AuraAtk;
                         p1AuraDefDiv.textContent = 'Aura Defense: ' + newP1AuraDef;
                         p1SpdDiv.textContent = 'Speed: ' + newP1Spd;

                         //P2 Stat Changes    
                         p2AtkCounter +=8;
                         p2AuraAtkCounter +=8;
                         p2DefCounter +=-5;
                         p2AuraDefCounter +=-5;
                         p2SpdCounter +=-2;


                         var newP2Atk = p2FightAtk + p2AtkCounter;
                         var newP2Def = p2FightDef + p2DefCounter;
                         var newP2AuraAtk = p2FightAuraAtk + p2AuraAtkCounter;
                         var newP2AuraDef = p2FightAuraDef + p2AuraDefCounter;
                         var newP2Spd = p2FightSpd + p2SpdCounter;
                         p2Atk.textContent = 'Attack: ' + newP2Atk;
                         p2Def.textContent = 'Defense: ' + newP2Def;
                         p2AtkAura.textContent = 'Aura Attack: ' + newP2AuraAtk;
                         p2DefAura.textContent = 'Aura Defense: ' + newP2AuraDef;
                         p2Spd.textContent = 'Speed: ' + newP2Spd;
                         
                         //P2 Damage and Ki/Health Adjustments
                          //Ki Set Up
                         p2KiTotals -= 155;
                         var P2KiBarWidth = (p2KiTotals / 1200) * 300;
                         p2Ki.style.width = P2KiBarWidth + "px";

                         //Damage Calculator
                         var damage = Math.round(Math.random() * 60 + 45);
                         p1HPTotals -= damage;
                         if (p1HPTotals < 0) {
                             p1HPTotals = 0;
                             console.log(res.name + " wins the fight!");
                         }
                         var P1HPBarWidth = (p1HPTotals / 1200) * 300;
                         var p1HP = document.getElementById("p1Health");
                         p1HP.style.width = P1HPBarWidth + "px";
                         console.log(res.name + " used " + p2MoveUltSelection + "!");


                     }
                 });

             });
             
             var p2Move1Selection = res.moves[0];
            var p2Move2Selection = res.moves[1];
            var p2Move3Selection = res.moves[2];
            var p2MoveUltSelection = res.ultimate;
            var p2FighterName = res.name;
            var p2FightAtk = res.atk;
            var p2FightDef = res.defend;
            var p2FightAuraAtk = res.atkaura;
            var p2FightAuraDef = res.defaura;
            var p2FightSpd = res.speed;
            var p2AtkCounter = 0;
            var p2DefCounter = 0;
            var p2AuraAtkCounter = 0;
            var p2AuraDefCounter = 0;
            var p2SpdCounter = 0;
        })

        
    });


    //Adds cards and all stored data to container for characters
    var container = document.querySelector("#characterSelectScreen");
    container.appendChild(card);

    $('#' + res.id + 'charSelectBtn1').click(function() {
        window.location='#';
    });
    $('#charSelectBtn2' + res.id).click(function() {
        window.location='#';
    })
    
    
});

