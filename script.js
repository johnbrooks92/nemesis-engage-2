"use strict";

//When I press enter, character select displays

var beginCode = 13;
var skipCode = 83;
var myAudio;
var timeoutCancel1;
var timeoutCancel2;
var timeoutCancel3;
var timeoutCancel4;
var timeoutCancel5;

$('body').keydown(function (event) {
    $(this).scrollTop(0);
    var inputCode = event.which;
    if (inputCode == beginCode) {


        $('#startupScreen h2').css('display', 'none');
        $('#startupScreen h1').css('display', 'block');
        setTimeout(function () {
            $('#startupScreen h1').css('display', 'none');
            $('#startupScreen h5').css('display', 'block');
        }, 1500);
        setTimeout(function () {
            $('#startupScreen h5').css('display', 'none');
        }, 2500);
        setTimeout(function () {
            $('#startupScreen h5').css('display', 'block');
        }, 3500);
        setTimeout(function () {
            $('#startupScreen h5').css('display', 'none');
        }, 4500);
        setTimeout(function () {
            $('#startupScreen h5').css('display', 'block');
        }, 5500);
        setTimeout(function () {
            $('#startupScreen h5').css('display', 'none');
        }, 6500);
        setTimeout(function () {
            $('#startupScreen h5').css('display', 'block');
        }, 7500);
        setTimeout(function () {
            $('#startupScreen h5').css('display', 'none');
        }, 8500);
        setTimeout(function () {
            $('#startupScreen h5').css('display', 'block');
        }, 9500);
        setTimeout(function () {
            $('#startupScreen h5').css('display', 'none');
        }, 10500);
        setTimeout(function () {
            $('#startupScreen h5').css('display', 'block');
        }, 11500);
        setTimeout(function () {
            $('#startupScreen h5').css('display', 'none');
        }, 12500);
        setTimeout(function () {
            $('#startupScreen h5').css('display', 'block');
        }, 13500);
        setTimeout(function () {
            $('#startupScreen h5').css('display', 'none');
        }, 14500);
        setTimeout(function () {
            $('#startupScreen h5').css('display', 'block');
        }, 15500);
        setTimeout(function () {
            $('#startupScreen h5').css('display', 'none');
        }, 16500);

        function randomIntFromInterval(min, max) { // min and max included 
            return Math.floor(Math.random() * (max - min + 1) + min)
        }

        var rndInt = randomIntFromInterval(1, 4)

        if (rndInt == 1) {
            myAudio = new Audio('audio/montage-opening-1.mp3');
            myAudio.play();
            myAudio.volume = 0.75;
        } else if (rndInt == 2) {
            myAudio = new Audio('audio/montage-opening-2.mp3');
            myAudio.play();
            myAudio.volume = 0.75;
        } else if (rndInt == 3) {
            myAudio = new Audio('audio/montage-opening-3.mp3');
            myAudio.play();
            myAudio.volume = 0.75;
        } else if (rndInt == 4) {
            myAudio = new Audio('audio/montage-opening-4.mp3');
            myAudio.play();
            myAudio.volume = 0.75;
        }

        setTimeout(function () {
            $('#startupScreen').css('background-image', 'url(img/montage/maul-vs-ahsoka-montage-1.gif');
        }, 1500);
        setTimeout(function () {
            $('#startupScreen').css('background-image', 'url(img/montage/frieza-montage-1.gif');
        }, 3750);
        setTimeout(function () {
            $('#startupScreen').css('background-image', 'url(img/montage/aku-montage-1.gif');
        }, 7000);
        setTimeout(function () {
            $('#startupScreen').css('background-image', 'url(img/montage/sly-montage-1.gif');
        }, 8000);
        setTimeout(function () {
            $('#startupScreen').css('background-image', 'url(img/montage/sensui-montage-3.gif');
        }, 8000);
        setTimeout(function () {
            $('#startupScreen').css('background-image', 'url(img/montage/deku-vs-todoroki.gif');
        }, 10500);
        setTimeout(function () {
            $('#startupScreen').css('background-image', 'url(img/montage/sasuke-vs-itachi-montage-2.gif');
        }, 13500);
        setTimeout(function () {
            $('#startupScreen').css('background-image', 'url(img/montage/vegeta-montage-1.gif');
        }, 16500);
        setTimeout(function () {
            $('#startupScreen').css('background-image', 'url(img/montage/yuyu-gang-montage-1.webp');
        }, 17000);
        setTimeout(function () {
            $('#startupScreen').css('background-image', 'url(img/montage/flash-montage-1.webp');
        }, 18000);
        setTimeout(function () {
            $('#startupScreen').css('background-image', 'url(img/montage/goku-montage-1.gif');
        }, 20000);
        setTimeout(function () {
            $('#startupScreen').css('background-image', 'url(img/montage/deku-vs-bakugo.gif');
        }, 23250);
        setTimeout(function () {
            $('#startupScreen').css('background-image', 'url(img/montage/batman-montage-1.webp');
        }, 27250);
        setTimeout(function () {
            $('#startupScreen').css('background-image', 'url(img/montage/eren-montage-1.gif');
        }, 29500);
        setTimeout(function () {
            $('#startupScreen').css('background-image', 'url(img/montage/naruto-vs-sasuke-montage-1.gif');
        }, 32500);
        setTimeout(function () {
            $('#startupScreen').css('background-image', 'url(img/montage/optimus-prime-montage-1.webp');
        }, 35000);
        setTimeout(function () {
            $('#startupScreen').css('background-image', 'url(img/montage/hiei-montage-1.gif');
        }, 36750);
        setTimeout(function () {
            $('#startupScreen').css('background-image', 'url(img/montage/megatron-montage-1.gif');
        }, 37800);
        setTimeout(function () {
            $('#startupScreen').css('background-image', 'url(img/montage/toon-link-montage-1.gif');
        }, 42000);
        setTimeout(function () {
            $('#startupScreen').css('background-image', 'url(img/montage/obi-wan-montage-1.webp');
        }, 43000);
        setTimeout(function () {
            $('#startupScreen').css('background-image', 'url(img/montage/starscream-montage-1.webp');
        }, 45000);
        setTimeout(function () {
            $('#startupScreen').css('background-image', 'url(img/montage/kakashi-montage-2.webp');
        }, 45500);
        setTimeout(function () {
            $('#startupScreen').css('background-image', 'url(img/montage/superman-montage-1.webp');
        }, 46500);
        setTimeout(function () {
            $('#startupScreen').css('background-image', 'url(img/montage/sensui-montage-2.gif');
        }, 48000);
        setTimeout(function () {
            $('#startupScreen').css('background-image', 'url(img/montage/samurai-jack-montage-1.gif');
        }, 50250);
        setTimeout(function () {
            $('#startupScreen').css('background-image', 'url(img/montage/yusuke-montage-2.gif');
        }, 52500);
        setTimeout(function () {
            $('#startupScreen').css('background-image', 'url(img/montage/anakin-montage-2.gif');
        }, 55750);
        setTimeout(function () {
            $('#startupScreen').css('background-image', 'url(img/montage/naruto-montage-1.webp');
        }, 58000);
        setTimeout(function () {
            $('#startupScreen').css('background-image', 'url(img/montage/sasuke-montage-1.webp');
        }, 60000);
        setTimeout(function () {
            $('#startupScreen').css('background-image', 'url(img/montage/kurama-montage-1.gif');
        }, 62000);
        setTimeout(function () {
            $('#startupScreen').css('background-image', 'url(img/montage/kuwabara-montage-1.gif');
        }, 64000);
        setTimeout(function () {
            $('#startupScreen').css('background-image', 'url(img/montage/jack-vs-aku-montage-1.gif');
        }, 68000);
        setTimeout(function () {
            $('#startupScreen').css('background-image', 'url(img/montage/kakashi-montage-1.gif');
        }, 69000);
        setTimeout(function () {
            $('#startupScreen').css('background-image', 'url(img/montage/flash-montage-2.gif');
        }, 70000);
        setTimeout(function () {
            $('#startupScreen').css('background-image', 'url(img/montage/eren-montage-2.webp');
        }, 72000);
        setTimeout(function () {
            $('#startupScreen').css('background-image', 'url(img/montage/sensui-montage-1.gif');
        }, 74000);
        setTimeout(function () {
            $('#startupScreen').css('background-image', 'url(img/montage/yusuke-montage-1.webp');
        }, 77000);
        setTimeout(function () {
            $('#startupScreen').css('background-image', 'url(img/montage/deku-montage-1.webp');
        }, 80000);
        setTimeout(function () {
            $('#startupScreen').css('background-image', 'url(img/montage/maul-montage-1.gif');
        }, 82000);
        setTimeout(function () {
            $('#startupScreen').css('background-image', 'url(img/montage/vader-montage-1.gif');
        }, 84000);


        timeoutCancel1 = setTimeout(function () {
            $('#startupScreen').css({'display': 'none'});
        }, 90000);
        timeoutCancel2 = setTimeout(function () {
            myAudio.pause();
        }, 90250);
        timeoutCancel3 = setTimeout(function () {
            $('#topRow').css({'display': 'block'});
        }, 90000);
        timeoutCancel4 = setTimeout(function () {
            $('#characterSelectScreen').css({'display': 'block'});
        }, 90000);
        timeoutCancel5 = setTimeout(function () {
            $('*').off('keyup keydown keypress');
        }, 90000);
    } else if (inputCode == skipCode) {
        myAudio.pause();
        $('#startupScreen').css({'display': 'none'});
        $('#topRow').css({'display': 'block'});
        $('#characterSelectScreen').css({'display': 'block'});
        $('*').off('keyup keydown keypress');
        clearTimeout(timeoutCancel1);
        clearTimeout(timeoutCancel2);
        clearTimeout(timeoutCancel3);
        clearTimeout(timeoutCancel4);
        clearTimeout(timeoutCancel5);
    }

});

//Define Health Variables
var p1HPTotals = 1200;
var p2HPTotals = 1200;
var p1KiTotals = 600;
var p2KiTotals = 600;
var topRow = document.getElementById("topRow");

//Define Counter Variables
var player1TurnCounter = 1;
var player2TurnCounter = 1;


var overallTurnCounter = 0;

var p1Uniqueid = 0;
var p1UniqueAtk = 0;
var p1UniqueDef = 0;
var p1UniqueAAtk = 0;
var p1UniqueADef = 0;
var p1UniqueSpd = 0;
var p2Uniqueid = 0;
var p2UniqueSpd = 0;


// Holds the data for all characters;
const rosterObject = {
    "fighters": [
        {
            "name": "Batman",
            "moves": ["Omni-Style Rush", "Batarang", "Cape Cover"],
            "ultimate": "Gotham's God",
            "transformations": "Classic, Animated, Beyond",
            "series": "DC",
            "img": "img/batman-base.png",
            "unlock": "yes",
            "rivals": "Superman, Flash",
            "atk": 17,
            "defend": 23,
            "speed": 16,
            "atkaura": 14,
            "defaura": 20,
            "id": "1"
        },
        {
            "name": "Flash",
            "moves": ["Tornado Fist", "G Force Punch", "Afterimage"],
            "ultimate": "Time Rip",
            "transformations": "Kid Flash, Classic Barry, Wally West",
            "series": "DC",
            "img": "img/flash-base.png",
            "unlock": "no",
            "rivals": "Superman, Batman",
            "atk": 20,
            "defend": 10,
            "speed": 25,
            "atkaura": 11,
            "defaura": 24,
            "id": "2"
        },
        {
            "name": "Superman",
            "moves": ["Krypton Rush", "Heat Vision", "Ice Breath"],
            "ultimate": "Solar Flare",
            "transformations": "Classic, Animated, X",
            "series": "DC",
            "img": "img/superman-base.png",
            "unlock": "yes",
            "rivals": "Batman, Flash",
            "atk": 23,
            "defend": 19,
            "speed": 16,
            "atkaura": 21,
            "defaura": 11,
            "id": "3"
        },
        {
            "name": "Goku",
            "moves": ["Kamehameha", "Dragon Fist", "Kaioken Triple Attack"],
            "ultimate": "Spirit Bomb",
            "transformations": "Super Saiyan, Super Saiyan 2, Super Saiyan 3, SS God, SS God SS",
            "series": "Dragonball",
            "img": "img/goku-base.png",
            "unlock": "yes",
            "rivals": "Vegeta, Frieza",
            "atk": 20,
            "defend": 17,
            "speed": 17,
            "atkaura": 17,
            "defaura": 19,
            "id": "4"
        },
        {
            "name": "Frieza",
            "moves": ["Death Beam", "Nova Strike", "Death Wave"],
            "ultimate": "Death Ball",
            "transformations": "Base, Second Form, Third Form, Final Form, Golden",
            "series": "Dragonball",
            "img": "img/frieza-base.png",
            "unlock": "no",
            "rivals": "Goku, Vegeta",
            "atk": 15,
            "defend": 12,
            "speed": 24,
            "atkaura": 25,
            "defaura": 14,
            "id": "5"
        },
        {
            "name": "Vegeta",
            "moves": ["Galick Gun", "Dirty Fireworks", "Infinite Break"],
            "ultimate": "Final Flash",
            "transformations": "Super Saiyan, Majin (SS2), Super Saiyan 3, SS God, SS God SS",
            "series": "Dragonball",
            "img": "img/vegeta-base.png",
            "unlock": "yes",
            "rivals": "Goku, Frieza",
            "atk": 17,
            "defend": 13,
            "speed": 23,
            "atkaura": 20,
            "defaura": 17,
            "id": "6"
        },
        {
            "name": "Link",
            "moves": ["Barrage of Arrows", "Boomerang Bash", "Bomb-Slash Combo"],
            "ultimate": "The Wind Waker",
            "transformations": "Toon, Young, Skyward",
            "series": "Zelda",
            "img": "img/link-base.png",
            "unlock": "no",
            "rivals": "Sly",
            "atk": 22,
            "defend": 22,
            "speed": 20,
            "atkaura": 14,
            "defaura": 12,
            "id": "7"
        },
        {
            "name": "Bakugo",
            "moves": ["Explosive Punch", "Explosive Kick", "Reverse Explosion"],
            "ultimate": "OFA Full Cowling 100%",
            "transformations": "School Uniform, GEMGD, OFA 100%",
            "series": "My Hero Academia",
            "img": "img/bakugo-base.png",
            "unlock": "no",
            "rivals": "Izuku, Shoto",
            "atk": 21,
            "defend": 14,
            "speed": 20,
            "atkaura": 23,
            "defaura": 14,
            "id": "8"
        },
        {
            "name": "Izuku",
            "moves": ["New Hampshire Smash", "Detroit Smash", "Black Whip"],
            "ultimate": "OFA Full Cowling 100%",
            "transformations": "School Uniform, Deku, OFA 100%",
            "series": "My Hero Academia",
            "img": "img/deku-base.png",
            "unlock": "no",
            "rivals": "Bakugo, Shoto",
            "atk": 22,
            "defend": 10,
            "speed": 23,
            "atkaura": 23,
            "defaura": 12,
            "id": "9"
        },
        {
            "name": "Shoto",
            "moves": ["Heaven-Piercing Ice Wall", "Wall of Flames", "Flashfreeze Heatwave"],
            "ultimate": "Flashfire Fist - Jet Kindling",
            "transformations": "School Uniform, UA Festival, Both Halves",
            "series": "My Hero Academia",
            "img": "img/todoroki-base.png",
            "unlock": "no",
            "rivals": "Izuku, Bakugo",
            "atk": 19,
            "defend": 19,
            "speed": 14,
            "atkaura": 19,
            "defaura": 19,
            "id": "10"
        },
        {
            "name": "Itachi",
            "moves": ["Clone Explosion Jutsu", "Tsukuyomi", "Amaterasu"],
            "ultimate": "Susanoo",
            "transformations": "Anbu, Akatsuki, Reanimated",
            "series": "Naruto",
            "img": "img/itachi-base.png",
            "unlock": "no",
            "rivals": "Sasuke, Kakashi, Naruto",
            "atk": 16,
            "defend": 18,
            "speed": 15,
            "atkaura": 19,
            "defaura": 22,
            "id": "11"
        },
        {
            "name": "Kakashi",
            "moves": ["Lightning Blade", "Earth Style: Mud Wall", "Primary Lotus"],
            "ultimate": "Kamui",
            "transformations": "Youth, Anbu, Adult, Mangekyo, Double Mangekyo",
            "series": "Naruto",
            "img": "img/kakashi-base.png",
            "unlock": "no",
            "rivals": "Naruto, Sasuke, Itachi",
            "atk": 20,
            "defend": 18,
            "speed": 17,
            "atkaura": 21,
            "defaura": 14,
            "id": "12"
        },
        {
            "name": "Naruto",
            "moves": ["Rasengan", "Uzumaki Barrage", "Toad Summoning"],
            "ultimate": "RasenShuriken",
            "transformations": "Youth, Adult, Perfect Sage, Kyuubi Chakra, Prime",
            "series": "Naruto",
            "img": "img/naruto-base.png",
            "unlock": "yes",
            "rivals": "Sasuke, Kakashi, Itachi",
            "atk": 22,
            "defend": 17,
            "speed": 15,
            "atkaura": 21,
            "defaura": 15,
            "id": "13"
        },
        {
            "name": "Sasuke",
            "moves": ["Chidori", "Barrage of Lions", "Snake Summoning"],
            "ultimate": "Kirin",
            "transformations": "Youth, Adult, Mangekyo, Eternal Mangekyo, Prime",
            "series": "Naruto",
            "img": "img/sasuke-base.png",
            "unlock": "yes",
            "rivals": "Itachi, Naruto, Kakashi",
            "atk": 16,
            "defend": 14,
            "speed": 22,
            "atkaura": 24,
            "defaura": 14,
            "id": "14"
        },
        {
            "name": "Aku",
            "moves": ["Scarabs Scurrying", "Demonic Dash", "Eye Beams"],
            "ultimate": "Necromancy",
            "transformations": "Scorpion, Chinese Dragon, Final Form",
            "series": "Samurai Jack",
            "img": "img/aku-base.png",
            "unlock": "no",
            "rivals": "Jack",
            "atk": 14,
            "defend": 16,
            "speed": 12,
            "atkaura": 25,
            "defaura": 23,
            "id": "15"
        },
        {
            "name": "Jack",
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
            "id": "16"
        },{
            "name": "Eren",
            "moves": ["ODM Gear", "Attack Titan", "WarHammer Titan"],
            "ultimate": "The Rumbling",
            "transformations": "Survey Corps, Jaegerist, Founding Titan",
            "series": "Attack on Titan",
            "img": "img/eren-base.png",
            "unlock": "no",
            "rivals": "Reiner",
            "atk": 25,
            "defend": 16,
            "speed": 10,
            "atkaura": 25,
            "defaura": 14,
            "id": "17"
        },
        {
            "name": "Sly",
            "moves": ["Cane Hook Slash", "Bentley's Brave Byte", "Murray's Manhandling"],
            "ultimate": "Master Thievious Raccoonus",
            "transformations": "Sly 1, Sly 2, Sly 3",
            "series": "Sly Cooper",
            "img": "img/sly-base.png",
            "unlock": "no",
            "rivals": "Link",
            "atk": 21,
            "defend": 23,
            "speed": 22,
            "atkaura": 10,
            "defaura": 13,
            "id": "18"
        },
        {
            "name": "Ahsoka",
            "moves": ["Force Push", "Force Throw", "Force Choke"],
            "ultimate": "Force Speed Rush",
            "transformations": "Padawan Prodigy, Rogue Jedi, Force Sage",
            "series": "StarWars",
            "img": "img/ahsoka-base.png",
            "unlock": "no",
            "rivals": "Obi-Wan, Anakin, Maul",
            "atk": 15,
            "defend": 15,
            "speed": 22,
            "atkaura": 22,
            "defaura": 16,
            "id": "19"
        },
        {
            "name": "Anakin",
            "moves": ["Force Choke", "Force Lightning", "Lightsaber Boomerang"],
            "ultimate": "Force Defend Rush",
            "transformations": "Knight, Prime Vader, Darth Vader",
            "series": "StarWars",
            "img": "img/anakin-base.png",
            "unlock": "yes",
            "rivals": "Obi-Wan, Maul, Ahsoka",
            "atk": 16,
            "defend": 12,
            "speed": 18,
            "atkaura": 25,
            "defaura": 19,
            "id": "20"
        },
        {
            "name": "Maul",
            "moves": ["Force Choke", "Force Throw", "Saber Slash"],
            "ultimate": "Dark Side Destruction",
            "transformations": "Darth, Mecha, Mandalorian",
            "series": "StarWars",
            "img": "img/maul-base.png",
            "unlock": "no",
            "rivals": "Obi-Wan, Anakin, Ahsoka",
            "atk": 16,
            "defend": 20,
            "speed": 18,
            "atkaura": 20,
            "defaura": 16,
            "id": "21"
        },
        {
            "name": "Obi-Wan",
            "moves": ["Force Push", "Force Throw", "Mind Trick"],
            "ultimate": "Force Valor Rush",
            "transformations": "Knight, Master, Ben Kenobi",
            "series": "StarWars",
            "img": "img/obi-wan-base.png",
            "unlock": "yes",
            "rivals": "Anakin, Maul, Ahsoka",
            "atk": 12,
            "defend": 18,
            "speed": 16,
            "atkaura": 19,
            "defaura": 25,
            "id": "22"
        },
        {
            "name": "Megatron",
            "moves": ["Metal Mash", "Requiem Blaster", "Skyboom Shield"],
            "ultimate": "Mega Melting",
            "transformations": "G1, War Tank, Armada",
            "series": "Transformers",
            "img": "img/megatron-base.png",
            "unlock": "yes",
            "rivals": "Optimus, Starscream",
            "atk": 22,
            "defend": 16,
            "speed": 8,
            "atkaura": 24,
            "defaura": 20,
            "id": "23"
        },
        {
            "name": "Optimus",
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
            "id": "24"
        },
        {
            "name": "Starscream",
            "moves": ["Scream's Rage", "Star Saber", "Skyboom Shield"],
            "ultimate": "SuperNova Fireworks",
            "transformations": "G1, Jet Plane, Armada",
            "series": "Transformers",
            "img": "img/starscream-base.png",
            "unlock": "no",
            "rivals": "Optimus, Megatron",
            "atk": 20,
            "defend": 20,
            "speed": 10,
            "atkaura": 20,
            "defaura": 20,
            "id": "25"
        },
        {
            "name": "Hiei",
            "moves": ["Speed Slice", "Fist of the Mortal Flame", "Sword of Darkness Flame"],
            "ultimate": "Dragon of the Darkness Flame",
            "transformations": "Dark Tournament, Jaganshi, Chapter Black",
            "series": "YuYu Hakusho",
            "img": "img/hiei-base.png",
            "unlock": "no",
            "rivals": "Yusuke, Kuwabara, Kurama",
            "atk": 20,
            "defend": 12,
            "speed": 25,
            "atkaura": 20,
            "defaura": 13,
            "id": "26"
        },
        {
            "name": "Kurama",
            "moves": ["Rose Whip", "Seed of the Death Plant", "Ojigi Plant"],
            "ultimate": "Sinning Tree",
            "transformations": "Shuichi, Dark Tournament, Yoko",
            "series": "YuYu Hakusho",
            "img": "img/kurama-base.png",
            "unlock": "no",
            "rivals": "Yusuke, Kuwabara, Hiei",
            "atk": 15,
            "defend": 22,
            "speed": 14,
            "atkaura": 17,
            "defaura": 22,
            "id": "27"
        },
        {
            "name": "Kuwabara",
            "moves": ["Spirit Sword", "Spirit Kick", "Spirit Sword Javelin"],
            "ultimate": "Dimension Sword",
            "transformations": "School Uniform, Dark Tournament, Chapter Black",
            "series": "YuYu Hakusho",
            "img": "img/kuwabara-base.png",
            "unlock": "no",
            "rivals": "Yusuke, Kurama, Hiei",
            "atk": 19,
            "defend": 16,
            "speed": 18,
            "atkaura": 17,
            "defaura": 20,
            "id": "28"
        },
        {
            "name": "Sensui",
            "moves": ["Fissure Kick", "Crimson Ball Wave", "Sacred Energy Armor"],
            "ultimate": "Sacred Energy Beam",
            "transformations": "Spirit Detective, Chapter Black, Sacred God",
            "series": "YuYu Hakusho",
            "img": "img/sensui-base.png",
            "unlock": "no",
            "rivals": "Yusuke",
            "atk": 22,
            "defend": 12,
            "speed": 22,
            "atkaura": 24,
            "defaura": 10,
            "id": "29"
        },
        {
            "name": "Yusuke",
            "moves": ["Spirit Gun", "Spirit Gun Fist", "Spirit Wave"],
            "ultimate": "Mazoku Spirit Gun",
            "transformations": "School Uniform, Dark Tournament, Chapter Black",
            "series": "YuYu Hakusho",
            "img": "img/yusuke-base.png",
            "unlock": "no",
            "rivals": "Kuwabara, Kurama, Hiei",
            "atk": 17,
            "defend": 18,
            "speed": 20,
            "atkaura": 17,
            "defaura": 18,
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
        $("#" + res.id + "charSelectBtn1").click(function () {

            p1Uniqueid += res.id;
            p1UniqueAtk += res.atk;
            p1UniqueDef += res.defend;
            p1UniqueAAtk += res.atkaura;
            p1UniqueADef += res.defaura;
            p1UniqueSpd += res.speed;

            $('.charSelBtn1').prop("disabled", true);
            $('.charSelBtn2').prop("disabled", false);

            var isPlayer1Selection = true;

            if (isPlayer1Selection == true) {
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
            hpHeader1.id = "hpHeader1";
            var barNameHP1 = document.createTextNode('HP ' + p1HPTotals + "/1200");
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
            kiHeader1.id = "kiHeader1";
            var barNameKI1 = document.createTextNode('KI ' + p1KiTotals + "/1200");
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
            p1SenzuBtn.class = "p1ButtonSet";
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
            p1AuraRecBtn.class = "p1ButtonSet";
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
            p1move1btn.class = "p1ButtonSet";
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
            p1move2btn.class = "p1ButtonSet";
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
            p1move3btn.class = "p1ButtonSet";
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
            p1moveUltbtn.class = "p1ButtonSet";
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


            // $(document).ready(function () {
            //     if (res.series == "Dragonball") {
            //         $('#battle1').css('background-image', 'url(img/db_background.webp');
            //     }
            //     if (res.series == "DC") {
            //         $('#battle1').css('background-image', 'url(img/dc-bg.png');
            //     }
            //     if (res.series == "Naruto") {
            //         $('#battle1').css('background-image', 'url(img/hidden_leaf.png');
            //     }
            //     if (res.series == "StarWars") {
            //         $('#battle1').css('background-image', 'url(img/star-wars-bg.jpg');
            //     }
            //     if (res.series == "Transformers") {
            //         $('#battle1').css('background-image', 'url(img/transformers-bg.jpeg');
            //         $('#battle1').css('background-size', 'cover');
            //     }
            //     if (res.series == "YuYu Hakusho") {
            //         $('#battle1').css('background-image', 'url(img/yyh-logo.png');
            //         $('#battle1').css('background-size', 'cover');
            //     }
            //     if (res.series == "My Hero Academia") {
            //         $('#battle1').css('background-image', 'url(img/my-hero-logo.jpeg');
            //         $('#battle1').css('background-size', 'cover');
            //     }
            //     if (res.series == "Samurai Jack") {
            //         $('#battle1').css('background-image', 'url(img/samurai-jack-bg.jpeg');
            //         $('#battle1').css('background-size', 'cover');
            //     }
            //     if (res.series == "Sly Cooper") {
            //         $('#battle1').css('background-image', 'url(img/sly-bg.jpeg');
            //         $('#battle1').css('background-size', 'cover');
            //     }
            //     if (res.series == "Attack on Titan") {
            //         $('#battle1').css('background-image', 'url(img/aot-bg.jpeg');
            //         $('#battle1').css('background-size', 'cover');
            //     }
            //     if (res.series == "Zelda") {
            //         $('#battle1').css('background-image', 'url(img/zelda-bg.png');
            //         $('#battle1').css('background-size', 'cover');
            //     }
            // });


            //Append Player1 Info Box to battleScreen Div
            var battleContainer = document.querySelector("#battleScreen");
            battleContainer.appendChild(player1InfoBox);
            battleContainer.appendChild(textBoxDiv);


            //HP Recovery Formula
            $('#p1SenzuBtn').click(function () {
                document.getElementById('battle1').style.pointerEvents = 'none';
                document.getElementById('battle2').style.pointerEvents = 'auto';

                p1HPTotals = 1200
                var p1HPBar = (p1HPTotals / 1200) * 300;
                p1HP.style.width = p1HPBar + "px";
                var textBoxDiv = document.getElementById('textBox');
                textBoxDiv.innerHTML += p1FighterName + " recovered health completely! <br>";
                var p1SenzuBtn = document.getElementById('p1SenzuBtn');
                $(p1SenzuBtn).css('visibility', 'hidden');

                var audioElement = document.createElement('audio');
                audioElement.setAttribute('src', 'audio/senzu-bean-audio.mp3');
                audioElement.setAttribute('autoplay', 'autoplay');
                audioElement.play();

                player1TurnCounter += 1;

                if ((overallTurnCounter >= 1) && (player1TurnCounter == player2TurnCounter) && (rosterObject.fighters[p1Uniqueid - 1].speed > rosterObject.fighters[p2Uniqueid - 1].speed)) {
                    overallTurnCounter += 1;
                    var textBoxDiv = document.getElementById('textBox');
                    textBoxDiv.innerHTML += "Turn #" + overallTurnCounter + "<br>";
                    document.getElementById('battle1').style.pointerEvents = 'auto';
                    document.getElementById('battle2').style.pointerEvents = 'none';
                } else if ((overallTurnCounter > 1) && (player1TurnCounter == player2TurnCounter) && (rosterObject.fighters[p1Uniqueid - 1].speed <= rosterObject.fighters[p2Uniqueid - 1].speed)) {
                    overallTurnCounter += 1;
                    var textBoxDiv = document.getElementById('textBox');
                    textBoxDiv.innerHTML += "Turn #" + overallTurnCounter + "<br>";
                    document.getElementById('battle1').style.pointerEvents = 'none';
                    document.getElementById('battle2').style.pointerEvents = 'auto';
                } else {
                }
                ;

            });
            //Ki Recovery Formula
            $('#p1AuraRecBtn').click(function () {

                document.getElementById('battle1').style.pointerEvents = 'none';
                document.getElementById('battle2').style.pointerEvents = 'auto';


                // document.getElementById("GokuKiAudio").play(); - change to sound of DBZ auras
                if (p1KiTotals <= 800) {
                    p1KiTotals += 400;
                } else if (p1KiTotals > 800) {
                    p1KiTotals = 1200;
                }
                var p1KiBar = (p1KiTotals / 1200) * 300;
                p1Ki.style.width = p1KiBar + "px";
                kiHeader1.textContent = 'KI ' + p1KiTotals + "/1200";

                var textBoxDiv = document.getElementById('textBox');
                textBoxDiv.innerHTML += p1FighterName + " recovered his ki! " + p1FighterName + " now has " + p1KiTotals + " Ki remaining.<br>";
                var audioElement = document.createElement('audio');
                audioElement.setAttribute('src', 'audio/ki-recovery-audio.mp3');
                audioElement.setAttribute('autoplay', 'autoplay');
                audioElement.play();

                player1TurnCounter += 1;

                if ((overallTurnCounter >= 1) && (player1TurnCounter == player2TurnCounter) && (rosterObject.fighters[p1Uniqueid - 1].speed > rosterObject.fighters[p2Uniqueid - 1].speed)) {
                    overallTurnCounter += 1;
                    var textBoxDiv = document.getElementById('textBox');
                    textBoxDiv.innerHTML += "Turn #" + overallTurnCounter + "<br>";
                    document.getElementById('battle1').style.pointerEvents = 'auto';
                    document.getElementById('battle2').style.pointerEvents = 'none';
                } else if ((overallTurnCounter >= 1) && (player1TurnCounter == player2TurnCounter) && (rosterObject.fighters[p1Uniqueid - 1].speed <= rosterObject.fighters[p2Uniqueid - 1].speed)) {
                    overallTurnCounter += 1;
                    var textBoxDiv = document.getElementById('textBox');
                    textBoxDiv.innerHTML += "Turn #" + overallTurnCounter + "<br>";
                    document.getElementById('battle1').style.pointerEvents = 'none';
                    document.getElementById('battle2').style.pointerEvents = 'auto';
                } else {
                }
                ;

            });


            //P1 Stat Change Formulas
            $('#p1Move1').click(function () {
                if ((p1Move1Selection == "Rasengan" || "Chidori" || "Kamehameha" || "Galick Gun" || "Force Push" || "Force Choke" || "Death Beam" || "Lightning Blade" || "Spirit Gun" || "Spirit Sword" || "Heaven-Piercing Ice Wall") && (p1KiTotals >= 250)) {


                    p1AtkCounter += 2;
                    p1DefCounter += 0;
                    p1AuraAtkCounter += 2;
                    p1AuraDefCounter += 0;
                    p1SpdCounter += -2;


                    var newP1Atk = p1UniqueAtk + p1AtkCounter;
                    var newP1Def = p1UniqueDef + p1DefCounter;
                    var newP1AuraAtk = p1UniqueAAtk + p1AuraAtkCounter;
                    var newP1AuraDef = p1UniqueDef + p1AuraDefCounter;
                    var newP1Spd = p1UniqueSpd + p1SpdCounter;
                    p1Atk.textContent = 'Attack: ' + newP1Atk;
                    p1Def.textContent = 'Defense: ' + newP1Def;
                    p1AuraAtk.textContent = 'Aura Attack: ' + newP1AuraAtk;
                    p1AuraDef.textContent = 'Aura Defense: ' + newP1AuraDef;
                    p1Spd.textContent = 'Speed: ' + newP1Spd;


                    var propAtk1 = {atk: newP1Atk};
                    var propDef1 = {defend: newP1Def};
                    var propAuraAtk1 = {atkaura: newP1AuraAtk};
                    var propAuraDef1 = {defaura: newP1AuraDef};
                    var propSpd1 = {speed: newP1Spd};

                    $.extend(rosterObject.fighters[p1id - 1], propAtk1);
                    $.extend(rosterObject.fighters[p1id - 1], propDef1);
                    $.extend(rosterObject.fighters[p1id - 1], propAuraAtk1);
                    $.extend(rosterObject.fighters[p1id - 1], propAuraDef1);
                    $.extend(rosterObject.fighters[p1id - 1], propSpd1);

                    p1UniqueSpd += p1SpdCounter;
                    player1TurnCounter += 1;

                } else if ((p1Move1Selection == "Krypton Rush" || "Omni-Style Rush" || "Full Force Punch" || "Metal Mash" || "Tornado Fist" || "Scream's Rage" || "Rose Whip" || "Speed Slice" || "New Hampshire Smash" || "Explosive Punch" || "Cane Hook Slash" || "Clone Explosion Jutsu" || "Barrage of Arrows" || "Samurai Slashing" || "Scarabs Scurrying" || "ODM Gear" || "Fissure Kick") && (p1KiTotals >= 250)) {


                    p1AtkCounter += 2;
                    p1DefCounter += 0;
                    p1AuraAtkCounter += 2;
                    p1AuraDefCounter += 0;
                    p1SpdCounter += -2;


                    var newP1Atk = p1UniqueAtk + p1AtkCounter;
                    var newP1Def = p1UniqueDef + p1DefCounter;
                    var newP1AuraAtk = p1UniqueAAtk + p1AuraAtkCounter;
                    var newP1AuraDef = p1UniqueDef + p1AuraDefCounter;
                    var newP1Spd = p1UniqueSpd + p1SpdCounter;
                    p1Atk.textContent = 'Attack: ' + newP1Atk;
                    p1Def.textContent = 'Defense: ' + newP1Def;
                    p1AuraAtk.textContent = 'Aura Attack: ' + newP1AuraAtk;
                    p1AuraDef.textContent = 'Aura Defense: ' + newP1AuraDef;
                    p1Spd.textContent = 'Speed: ' + newP1Spd;


                    var propAtk1 = {atk: newP1Atk};
                    var propDef1 = {defend: newP1Def};
                    var propAuraAtk1 = {atkaura: newP1AuraAtk};
                    var propAuraDef1 = {defaura: newP1AuraDef};
                    var propSpd1 = {speed: newP1Spd};

                    $.extend(rosterObject.fighters[p1id - 1], propAtk1);
                    $.extend(rosterObject.fighters[p1id - 1], propDef1);
                    $.extend(rosterObject.fighters[p1id - 1], propAuraAtk1);
                    $.extend(rosterObject.fighters[p1id - 1], propAuraDef1);
                    $.extend(rosterObject.fighters[p1id - 1], propSpd1);

                    p1UniqueSpd += p1SpdCounter;
                    player1TurnCounter += 1;

                } else if (p1KiTotals < 250) {
                    textBoxDiv.innerHTML += "You don't have enough Ki to use this!! <br>";
                }
            });
            $('#p1Move2').click(function () {
                if ((p1Move2Selection == "Uzumaki Barrage" || "Barrage of Lions" || "Dragon Fist" || "Batarang" || "Star Saber" || "Nova Strike" || "G Force Punch" || "Spirit Gun Fist" | "Spirit Kick" || "Fist of the Mortal Flame" || "Detroit Smash" || "Explosive Kick" || "Boomerang Bash" || "Speed Slice" || "Demonic Dash" || "Attack Titan") && (p1KiTotals >= 325)) {


                    p1AtkCounter += 0;
                    p1DefCounter += 0;
                    p1AuraAtkCounter += 0;
                    p1AuraDefCounter += 0;
                    p1SpdCounter += 0;


                    var newP1Atk = p1UniqueAtk + p1AtkCounter;
                    var newP1Def = p1UniqueDef + p1DefCounter;
                    var newP1AuraAtk = p1UniqueAAtk + p1AuraAtkCounter;
                    var newP1AuraDef = p1UniqueDef + p1AuraDefCounter;
                    var newP1Spd = p1UniqueSpd + p1SpdCounter;
                    p1Atk.textContent = 'Attack: ' + newP1Atk;
                    p1Def.textContent = 'Defense: ' + newP1Def;
                    p1AuraAtk.textContent = 'Aura Attack: ' + newP1AuraAtk;
                    p1AuraDef.textContent = 'Aura Defense: ' + newP1AuraDef;
                    p1Spd.textContent = 'Speed: ' + newP1Spd;


                    var propAtk1 = {atk: newP1Atk};
                    var propDef1 = {defend: newP1Def};
                    var propAuraAtk1 = {atkaura: newP1AuraAtk};
                    var propAuraDef1 = {defaura: newP1AuraDef};
                    var propSpd1 = {speed: newP1Spd};

                    $.extend(rosterObject.fighters[p1id - 1], propAtk1);
                    $.extend(rosterObject.fighters[p1id - 1], propDef1);
                    $.extend(rosterObject.fighters[p1id - 1], propAuraAtk1);
                    $.extend(rosterObject.fighters[p1id - 1], propAuraDef1);
                    $.extend(rosterObject.fighters[p1id - 1], propSpd1);

                    player1TurnCounter += 1;
               
                } else if ((p1Move2Selection == "Dirty Fireworks" || "Heat Vision" || "Force Throw" || "Force Lightning" || "Requiem Blaster" || "Earth Style: Mud Wall" || "Seed of the Death Plant" || "Wall of Flames" || "Bentley's Brave Byte" || "Tsukuyomi" || "Crimson Ball Wave") && (p1KiTotals >= 325)) {


                    p1AtkCounter += 0;
                    p1DefCounter += 0;
                    p1AuraAtkCounter += 0;
                    p1AuraDefCounter += 0;
                    p1SpdCounter += 0;


                    var newP1Atk = p1UniqueAtk + p1AtkCounter;
                    var newP1Def = p1UniqueDef + p1DefCounter;
                    var newP1AuraAtk = p1UniqueAAtk + p1AuraAtkCounter;
                    var newP1AuraDef = p1UniqueDef + p1AuraDefCounter;
                    var newP1Spd = p1UniqueSpd + p1SpdCounter;
                    p1Atk.textContent = 'Attack: ' + newP1Atk;
                    p1Def.textContent = 'Defense: ' + newP1Def;
                    p1AuraAtk.textContent = 'Aura Attack: ' + newP1AuraAtk;
                    p1AuraDef.textContent = 'Aura Defense: ' + newP1AuraDef;
                    p1Spd.textContent = 'Speed: ' + newP1Spd;


                    var propAtk1 = {atk: newP1Atk};
                    var propDef1 = {defend: newP1Def};
                    var propAuraAtk1 = {atkaura: newP1AuraAtk};
                    var propAuraDef1 = {defaura: newP1AuraDef};
                    var propSpd1 = {speed: newP1Spd};

                    $.extend(rosterObject.fighters[p1id - 1], propAtk1);
                    $.extend(rosterObject.fighters[p1id - 1], propDef1);
                    $.extend(rosterObject.fighters[p1id - 1], propAuraAtk1);
                    $.extend(rosterObject.fighters[p1id - 1], propAuraDef1);
                    $.extend(rosterObject.fighters[p1id - 1], propSpd1);

                    player1TurnCounter += 1;
                } else if (p1KiTotals < 325) {
                    textBoxDiv.innerHTML += "You don't have enough Ki to use this!! <br>";
                }
            });
            $('#p1Move3').click(function () {
                if ((p1Move3Selection == "Toad Summoning" || "Snake Summoning" || "Ice Breath" || "Mind Trick" || "Death Wave" || "Force Choke" || "Spirit Wave" || "Spirit Sword Javelin" || "Sword of Darkness Flame" || "Black Whip" || "Reverse Explosion" || "Flashfreeze Heatwave" || "Amaterasu" || "Eye Beams" || "WarHammer Titan") && (p1KiTotals >= 750)) {


                    p1AtkCounter += 0;
                    p1DefCounter += 3;
                    p1AuraAtkCounter += 0;
                    p1AuraDefCounter += 3;
                    p1SpdCounter += -3;


                    var newP1Atk = p1UniqueAtk + p1AtkCounter;
                    var newP1Def = p1UniqueDef + p1DefCounter;
                    var newP1AuraAtk = p1UniqueAAtk + p1AuraAtkCounter;
                    var newP1AuraDef = p1UniqueDef + p1AuraDefCounter;
                    var newP1Spd = p1UniqueSpd + p1SpdCounter;
                    p1Atk.textContent = 'Attack: ' + newP1Atk;
                    p1Def.textContent = 'Defense: ' + newP1Def;
                    p1AuraAtk.textContent = 'Aura Attack: ' + newP1AuraAtk;
                    p1AuraDef.textContent = 'Aura Defense: ' + newP1AuraDef;
                    p1Spd.textContent = 'Speed: ' + newP1Spd;


                    var propAtk1 = {atk: newP1Atk};
                    var propDef1 = {defend: newP1Def};
                    var propAuraAtk1 = {atkaura: newP1AuraAtk};
                    var propAuraDef1 = {defaura: newP1AuraDef};
                    var propSpd1 = {speed: newP1Spd};

                    $.extend(rosterObject.fighters[p1id - 1], propAtk1);
                    $.extend(rosterObject.fighters[p1id - 1], propDef1);
                    $.extend(rosterObject.fighters[p1id - 1], propAuraAtk1);
                    $.extend(rosterObject.fighters[p1id - 1], propAuraDef1);
                    $.extend(rosterObject.fighters[p1id - 1], propSpd1);

                    p1UniqueSpd += p1SpdCounter;
                    player1TurnCounter += 1;
                } else if ((p1Move3Selection == "Kaioken Triple Attack" || "Infinite Break" || "Cape Cover" || "Lightsaber Boomerang" || "Skyboom Shield" || "Primary Lotus" || "Afterimage" || "Ojigi Plant" || "Murray's Manhandling" || "Saber Slash" || "Bomb-Slash Combo" || "Parry" || "Sacred Energy Armor") && (p1KiTotals >= 750)) {


                    p1AtkCounter += 0;
                    p1DefCounter += 3;
                    p1AuraAtkCounter += 0;
                    p1AuraDefCounter += 3;
                    p1SpdCounter += -3;


                    var newP1Atk = p1UniqueAtk + p1AtkCounter;
                    var newP1Def = p1UniqueDef + p1DefCounter;
                    var newP1AuraAtk = p1UniqueAAtk + p1AuraAtkCounter;
                    var newP1AuraDef = p1UniqueDef + p1AuraDefCounter;
                    var newP1Spd = p1UniqueSpd + p1SpdCounter;
                    p1Atk.textContent = 'Attack: ' + newP1Atk;
                    p1Def.textContent = 'Defense: ' + newP1Def;
                    p1AuraAtk.textContent = 'Aura Attack: ' + newP1AuraAtk;
                    p1AuraDef.textContent = 'Aura Defense: ' + newP1AuraDef;
                    p1Spd.textContent = 'Speed: ' + newP1Spd;


                    var propAtk1 = {atk: newP1Atk};
                    var propDef1 = {defend: newP1Def};
                    var propAuraAtk1 = {atkaura: newP1AuraAtk};
                    var propAuraDef1 = {defaura: newP1AuraDef};
                    var propSpd1 = {speed: newP1Spd};

                    $.extend(rosterObject.fighters[p1id - 1], propAtk1);
                    $.extend(rosterObject.fighters[p1id - 1], propDef1);
                    $.extend(rosterObject.fighters[p1id - 1], propAuraAtk1);
                    $.extend(rosterObject.fighters[p1id - 1], propAuraDef1);
                    $.extend(rosterObject.fighters[p1id - 1], propSpd1);

                    p1UniqueSpd += p1SpdCounter;
                    player1TurnCounter += 1;
                } else if (p1KiTotals < 750) {
                    textBoxDiv.innerHTML += "You don't have enough Ki to use this!! <br>";
                }
            });
            $('#p1MoveUlt').click(function () {
                if ((p1MoveUltSelection == "RasenShuriken" || "Kirin" || "Spirit Bomb" || "Final Flash" || "Solar Flare" || "Mega Melting" || "Death Ball" || "Kamui" || "SuperNova Fireworks" || "Mazoku Spirit Gun" || "Dimension Sword" || "Sinning Tree" || "Dragon of the Darkness Flame" || "Flashfire Fist - Jet Kindling" || "Susanoo" || "Necromancy" || "Sacred Energy Beam") && (p1KiTotals >= 1000)) {


                    p1AtkCounter += -2;
                    p1DefCounter += -2;
                    p1AuraAtkCounter += -2;
                    p1AuraDefCounter += -2;
                    p1SpdCounter += -2;

                    var newP1Atk = p1UniqueAtk + p1AtkCounter;
                    var newP1Def = p1UniqueDef + p1DefCounter;
                    var newP1AuraAtk = p1UniqueAAtk + p1AuraAtkCounter;
                    var newP1AuraDef = p1UniqueDef + p1AuraDefCounter;
                    var newP1Spd = p1UniqueSpd + p1SpdCounter;
                    p1Atk.textContent = 'Attack: ' + newP1Atk;
                    p1Def.textContent = 'Defense: ' + newP1Def;
                    p1AuraAtk.textContent = 'Aura Attack: ' + newP1AuraAtk;
                    p1AuraDef.textContent = 'Aura Defense: ' + newP1AuraDef;
                    p1Spd.textContent = 'Speed: ' + newP1Spd;


                    var propAtk1 = {atk: newP1Atk};
                    var propDef1 = {defend: newP1Def};
                    var propAuraAtk1 = {atkaura: newP1AuraAtk};
                    var propAuraDef1 = {defaura: newP1AuraDef};
                    var propSpd1 = {speed: newP1Spd};

                    $.extend(rosterObject.fighters[p1id - 1], propAtk1);
                    $.extend(rosterObject.fighters[p1id - 1], propDef1);
                    $.extend(rosterObject.fighters[p1id - 1], propAuraAtk1);
                    $.extend(rosterObject.fighters[p1id - 1], propAuraDef1);
                    $.extend(rosterObject.fighters[p1id - 1], propSpd1);

                    p1UniqueSpd += p1SpdCounter;
                    player1TurnCounter += 1;


                } else if ((p1MoveUltSelection == "Gotham's God" || "Force Valor Rush" || "Force Defend Rush" || "Prime Reckoning" || "Time Rip" || "Force Speed Rush" || "OFA Full Cowling 100%" || "Master Thievious Raccoonus" || "Dark Side Destruction" || "The Wind Waker" || "Slayer of Aku" || "The Rumbling") && (p1KiTotals >= 1000)) {


                    p1AtkCounter += -2;
                    p1DefCounter += -2;
                    p1AuraAtkCounter += -2;
                    p1AuraDefCounter += -2;
                    p1SpdCounter += -2;

                    var newP1Atk = p1UniqueAtk + p1AtkCounter;
                    var newP1Def = p1UniqueDef + p1DefCounter;
                    var newP1AuraAtk = p1UniqueAAtk + p1AuraAtkCounter;
                    var newP1AuraDef = p1UniqueDef + p1AuraDefCounter;
                    var newP1Spd = p1UniqueSpd + p1SpdCounter;
                    p1Atk.textContent = 'Attack: ' + newP1Atk;
                    p1Def.textContent = 'Defense: ' + newP1Def;
                    p1AuraAtk.textContent = 'Aura Attack: ' + newP1AuraAtk;
                    p1AuraDef.textContent = 'Aura Defense: ' + newP1AuraDef;
                    p1Spd.textContent = 'Speed: ' + newP1Spd;


                    var propAtk1 = {atk: newP1Atk};
                    var propDef1 = {defend: newP1Def};
                    var propAuraAtk1 = {atkaura: newP1AuraAtk};
                    var propAuraDef1 = {defaura: newP1AuraDef};
                    var propSpd1 = {speed: newP1Spd};

                    $.extend(rosterObject.fighters[p1id - 1], propAtk1);
                    $.extend(rosterObject.fighters[p1id - 1], propDef1);
                    $.extend(rosterObject.fighters[p1id - 1], propAuraAtk1);
                    $.extend(rosterObject.fighters[p1id - 1], propAuraDef1);
                    $.extend(rosterObject.fighters[p1id - 1], propSpd1);

                    p1UniqueSpd += p1SpdCounter;
                    player1TurnCounter += 1;
                    


                } else if (p1KiTotals < 1000) {
                    textBoxDiv.innerHTML += "You don't have enough Ki to use this!! <br>";
                }
            });

            $('#p2Move1').click(function () {
                var p2Move1Selection = document.getElementById("p2Move1").textContent;
                if ((p2Move1Selection == "Rasengan" || "Chidori" || "Kamehameha" || "Galick Gun" || "Force Push" || "Force Choke" || "Death Beam" || "Lightning Blade" || "Spirit Gun" || "Spirit Sword" || "Heaven-Piercing Ice Wall") && (p2KiTotals >= 250)) {


                    p1AtkCounter += 0;
                    p1DefCounter += 0;
                    p1AuraAtkCounter += -3;
                    p1AuraDefCounter += -3;
                    p1SpdCounter += 2;

                    var p1AtkDiv = document.getElementById("p1AtkDiv");
                    var p1DefDiv = document.getElementById("p1DefDiv");
                    var p1AuraAtkDiv = document.getElementById("p1AuraAtkDiv");
                    var p1AuraDefDiv = document.getElementById("p1AuraDefDiv");
                    var p1SpdDiv = document.getElementById("p1SpdDiv");
                    var newP1Atk = p1UniqueAtk + p1AtkCounter;
                    var newP1Def = p1UniqueDef + p1DefCounter;
                    var newP1AuraAtk = p1UniqueAAtk + p1AuraAtkCounter;
                    var newP1AuraDef = p1UniqueDef + p1AuraDefCounter;
                    var newP1Spd = p1UniqueSpd + p1SpdCounter;

                    var propAtk1 = {atk: newP1Atk};
                    var propDef1 = {defend: newP1Def};
                    var propAuraAtk1 = {atkaura: newP1AuraAtk};
                    var propAuraDef1 = {defaura: newP1AuraDef};
                    var propSpd1 = {speed: newP1Spd};

                    $.extend(rosterObject.fighters[p1Uniqueid - 1], propAtk1);
                    $.extend(rosterObject.fighters[p1Uniqueid - 1], propDef1);
                    $.extend(rosterObject.fighters[p1Uniqueid - 1], propAuraAtk1);
                    $.extend(rosterObject.fighters[p1Uniqueid - 1], propAuraDef1);
                    $.extend(rosterObject.fighters[p1Uniqueid - 1], propSpd1);

                    p1AtkDiv.textContent = 'Attack: ' + newP1Atk;
                    p1DefDiv.textContent = 'Defense: ' + newP1Def;
                    p1AuraAtkDiv.textContent = 'Aura Attack: ' + newP1AuraAtk;
                    p1AuraDefDiv.textContent = 'Aura Defense: ' + newP1AuraDef;
                    p1SpdDiv.textContent = 'Speed: ' + newP1Spd;
                } else if ((p2Move1Selection == "Krypton Rush" || "Omni-Style Rush" || "Full Force Punch" || "Metal Mash" || "Tornado Fist" || "Scream's Rage" || "Rose Whip" || "Speed Slice" || "New Hampshire Smash" || "Explosive Punch" || "Cane Hook Slash" || "Clone Explosion Jutsu" || "Barrage of Arrows" || "Samurai Slashing" || "Scarabs Scurrying" || "ODM Gear" || "Fissure Kick") && (p2KiTotals >= 250)) {


                    p1AtkCounter += -3;
                    p1DefCounter += -3;
                    p1AuraAtkCounter += 0;
                    p1AuraDefCounter += -0;
                    p1SpdCounter += 3;

                    var p1AtkDiv = document.getElementById("p1AtkDiv");
                    var p1DefDiv = document.getElementById("p1DefDiv");
                    var p1AuraAtkDiv = document.getElementById("p1AuraAtkDiv");
                    var p1AuraDefDiv = document.getElementById("p1AuraDefDiv");
                    var p1SpdDiv = document.getElementById("p1SpdDiv");
                    var newP1Atk = p1UniqueAtk + p1AtkCounter;
                    var newP1Def = p1UniqueDef + p1DefCounter;
                    var newP1AuraAtk = p1UniqueAAtk + p1AuraAtkCounter;
                    var newP1AuraDef = p1UniqueDef + p1AuraDefCounter;
                    var newP1Spd = p1UniqueSpd + p1SpdCounter;

                    var propAtk1 = {atk: newP1Atk};
                    var propDef1 = {defend: newP1Def};
                    var propAuraAtk1 = {atkaura: newP1AuraAtk};
                    var propAuraDef1 = {defaura: newP1AuraDef};
                    var propSpd1 = {speed: newP1Spd};

                    $.extend(rosterObject.fighters[p1Uniqueid - 1], propAtk1);
                    $.extend(rosterObject.fighters[p1Uniqueid - 1], propDef1);
                    $.extend(rosterObject.fighters[p1Uniqueid - 1], propAuraAtk1);
                    $.extend(rosterObject.fighters[p1Uniqueid - 1], propAuraDef1);
                    $.extend(rosterObject.fighters[p1Uniqueid - 1], propSpd1);

                    p1AtkDiv.textContent = 'Attack: ' + newP1Atk;
                    p1DefDiv.textContent = 'Defense: ' + newP1Def;
                    p1AuraAtkDiv.textContent = 'Aura Attack: ' + newP1AuraAtk;
                    p1AuraDefDiv.textContent = 'Aura Defense: ' + newP1AuraDef;
                    p1SpdDiv.textContent = 'Speed: ' + newP1Spd;
                } 
            });
            $('#p2Move2').click(function () {
                var p2Move2Selection = document.getElementById("p2Move2").textContent;
                if ((p2Move2Selection == "Uzumaki Barrage" || "Barrage of Lions" || "Dragon Fist" || "Batarang" || "Star Saber" || "Nova Strike" || "G Force Punch" || "Spirit Gun Fist" | "Spirit Kick" || "Fist of the Mortal Flame" || "Detroit Smash" || "Explosive Kick" || "Boomerang Bash" || "Speed Slice" || "Demonic Dash" || "Attack Titan") && (p2KiTotals > 325)) {

                    p1AtkCounter += 0;
                    p1DefCounter += -2;
                    p1AuraAtkCounter += 3;
                    p1AuraDefCounter += -2;
                    p1SpdCounter += 0;

                    var p1AtkDiv = document.getElementById("p1AtkDiv");
                    var p1DefDiv = document.getElementById("p1DefDiv");
                    var p1AuraAtkDiv = document.getElementById("p1AuraAtkDiv");
                    var p1AuraDefDiv = document.getElementById("p1AuraDefDiv");
                    var p1SpdDiv = document.getElementById("p1SpdDiv");
                    var newP1Atk = p1UniqueAtk + p1AtkCounter;
                    var newP1Def = p1UniqueDef + p1DefCounter;
                    var newP1AuraAtk = p1UniqueAAtk + p1AuraAtkCounter;
                    var newP1AuraDef = p1UniqueDef + p1AuraDefCounter;
                    var newP1Spd = p1UniqueSpd + p1SpdCounter;

                    var propAtk1 = {atk: newP1Atk};
                    var propDef1 = {defend: newP1Def};
                    var propAuraAtk1 = {atkaura: newP1AuraAtk};
                    var propAuraDef1 = {defaura: newP1AuraDef};
                    var propSpd1 = {speed: newP1Spd};

                    $.extend(rosterObject.fighters[p1Uniqueid - 1], propAtk1);
                    $.extend(rosterObject.fighters[p1Uniqueid - 1], propDef1);
                    $.extend(rosterObject.fighters[p1Uniqueid - 1], propAuraAtk1);
                    $.extend(rosterObject.fighters[p1Uniqueid - 1], propAuraDef1);
                    $.extend(rosterObject.fighters[p1Uniqueid - 1], propSpd1);

                    p1AtkDiv.textContent = 'Attack: ' + newP1Atk;
                    p1DefDiv.textContent = 'Defense: ' + newP1Def;
                    p1AuraAtkDiv.textContent = 'Aura Attack: ' + newP1AuraAtk;
                    p1AuraDefDiv.textContent = 'Aura Defense: ' + newP1AuraDef;
                    p1SpdDiv.textContent = 'Speed: ' + newP1Spd;
                } else if ((p2Move2Selection == "Dirty Fireworks" || "Heat Vision" || "Force Throw" || "Force Lightning" || "Requiem Blaster" || "Earth Style: Mud Wall" || "Seed of the Death Plant" || "Wall of Flames" || "Bentley's Brave Byte" || "Tsukuyomi" || "Crimson Ball Wave") && (p2KiTotals > 325)) {

                    p1AtkCounter += -2;
                    p1DefCounter += 0;
                    p1AuraAtkCounter += -2;
                    p1AuraDefCounter += 3;
                    p1SpdCounter += 0;

                    var p1AtkDiv = document.getElementById("p1AtkDiv");
                    var p1DefDiv = document.getElementById("p1DefDiv");
                    var p1AuraAtkDiv = document.getElementById("p1AuraAtkDiv");
                    var p1AuraDefDiv = document.getElementById("p1AuraDefDiv");
                    var p1SpdDiv = document.getElementById("p1SpdDiv");
                    var newP1Atk = p1UniqueAtk + p1AtkCounter;
                    var newP1Def = p1UniqueDef + p1DefCounter;
                    var newP1AuraAtk = p1UniqueAAtk + p1AuraAtkCounter;
                    var newP1AuraDef = p1UniqueDef + p1AuraDefCounter;
                    var newP1Spd = p1UniqueSpd + p1SpdCounter;

                    var propAtk1 = {atk: newP1Atk};
                    var propDef1 = {defend: newP1Def};
                    var propAuraAtk1 = {atkaura: newP1AuraAtk};
                    var propAuraDef1 = {defaura: newP1AuraDef};
                    var propSpd1 = {speed: newP1Spd};

                    $.extend(rosterObject.fighters[p1Uniqueid - 1], propAtk1);
                    $.extend(rosterObject.fighters[p1Uniqueid - 1], propDef1);
                    $.extend(rosterObject.fighters[p1Uniqueid - 1], propAuraAtk1);
                    $.extend(rosterObject.fighters[p1Uniqueid - 1], propAuraDef1);
                    $.extend(rosterObject.fighters[p1Uniqueid - 1], propSpd1);

                    p1AtkDiv.textContent = 'Attack: ' + newP1Atk;
                    p1DefDiv.textContent = 'Defense: ' + newP1Def;
                    p1AuraAtkDiv.textContent = 'Aura Attack: ' + newP1AuraAtk;
                    p1AuraDefDiv.textContent = 'Aura Defense: ' + newP1AuraDef;
                    p1SpdDiv.textContent = 'Speed: ' + newP1Spd;
                } 
            });
            $('#p2Move3').click(function () {
                var p2Move3Selection = document.getElementById("p2Move3").textContent;
                if ((p2Move3Selection == "Toad Summoning" || "Snake Summoning" || "Ice Breath" || "Mind Trick" || "Death Wave" || "Force Choke" || "Spirit Wave" || "Spirit Sword Javelin" || "Sword of Darkness Flame" || "Black Whip" || "Reverse Explosion" || "Flashfreeze Heatwave" || "Amaterasu" || "Eye Beams" || "WarHammer Titan") && (p2KiTotals >= 750)) {


                    p1AtkCounter += 0;
                    p1DefCounter += -2;
                    p1AuraAtkCounter += 0;
                    p1AuraDefCounter += -2;
                    p1SpdCounter += -3;

                    var p1AtkDiv = document.getElementById("p1AtkDiv");
                    var p1DefDiv = document.getElementById("p1DefDiv");
                    var p1AuraAtkDiv = document.getElementById("p1AuraAtkDiv");
                    var p1AuraDefDiv = document.getElementById("p1AuraDefDiv");
                    var p1SpdDiv = document.getElementById("p1SpdDiv");
                    var newP1Atk = p1UniqueAtk + p1AtkCounter;
                    var newP1Def = p1UniqueDef + p1DefCounter;
                    var newP1AuraAtk = p1UniqueAAtk + p1AuraAtkCounter;
                    var newP1AuraDef = p1UniqueDef + p1AuraDefCounter;
                    var newP1Spd = p1UniqueSpd + p1SpdCounter;

                    var propAtk1 = {atk: newP1Atk};
                    var propDef1 = {defend: newP1Def};
                    var propAuraAtk1 = {atkaura: newP1AuraAtk};
                    var propAuraDef1 = {defaura: newP1AuraDef};
                    var propSpd1 = {speed: newP1Spd};

                    $.extend(rosterObject.fighters[p1Uniqueid - 1], propAtk1);
                    $.extend(rosterObject.fighters[p1Uniqueid - 1], propDef1);
                    $.extend(rosterObject.fighters[p1Uniqueid - 1], propAuraAtk1);
                    $.extend(rosterObject.fighters[p1Uniqueid - 1], propAuraDef1);
                    $.extend(rosterObject.fighters[p1Uniqueid - 1], propSpd1);

                    p1AtkDiv.textContent = 'Attack: ' + newP1Atk;
                    p1DefDiv.textContent = 'Defense: ' + newP1Def;
                    p1AuraAtkDiv.textContent = 'Aura Attack: ' + newP1AuraAtk;
                    p1AuraDefDiv.textContent = 'Aura Defense: ' + newP1AuraDef;
                    p1SpdDiv.textContent = 'Speed: ' + newP1Spd;
                } else if ((p2Move3Selection == "Kaioken Triple Attack" || "Infinite Break" || "Cape Cover" || "Lightsaber Boomerang" || "Skyboom Shield" || "Primary Lotus" || "Afterimage" || "Ojigi Plant" || "Murray's Manhandling" || "Saber Slash" || "Bomb-Slash Combo" || "Parry" || "Sacred Energy Armor") && (p2KiTotals >= 750)) {


                    p1AtkCounter += -2;
                    p1DefCounter += 0;
                    p1AuraAtkCounter += -2;
                    p1AuraDefCounter += 0;
                    p1SpdCounter += -3;

                    var p1AtkDiv = document.getElementById("p1AtkDiv");
                    var p1DefDiv = document.getElementById("p1DefDiv");
                    var p1AuraAtkDiv = document.getElementById("p1AuraAtkDiv");
                    var p1AuraDefDiv = document.getElementById("p1AuraDefDiv");
                    var p1SpdDiv = document.getElementById("p1SpdDiv");
                    var newP1Atk = p1UniqueAtk + p1AtkCounter;
                    var newP1Def = p1UniqueDef + p1DefCounter;
                    var newP1AuraAtk = p1UniqueAAtk + p1AuraAtkCounter;
                    var newP1AuraDef = p1UniqueDef + p1AuraDefCounter;
                    var newP1Spd = p1UniqueSpd + p1SpdCounter;

                    var propAtk1 = {atk: newP1Atk};
                    var propDef1 = {defend: newP1Def};
                    var propAuraAtk1 = {atkaura: newP1AuraAtk};
                    var propAuraDef1 = {defaura: newP1AuraDef};
                    var propSpd1 = {speed: newP1Spd};

                    $.extend(rosterObject.fighters[p1Uniqueid - 1], propAtk1);
                    $.extend(rosterObject.fighters[p1Uniqueid - 1], propDef1);
                    $.extend(rosterObject.fighters[p1Uniqueid - 1], propAuraAtk1);
                    $.extend(rosterObject.fighters[p1Uniqueid - 1], propAuraDef1);
                    $.extend(rosterObject.fighters[p1Uniqueid - 1], propSpd1);

                    p1AtkDiv.textContent = 'Attack: ' + newP1Atk;
                    p1DefDiv.textContent = 'Defense: ' + newP1Def;
                    p1AuraAtkDiv.textContent = 'Aura Attack: ' + newP1AuraAtk;
                    p1AuraDefDiv.textContent = 'Aura Defense: ' + newP1AuraDef;
                    p1SpdDiv.textContent = 'Speed: ' + newP1Spd;
                } 
            });

            $('#p2MoveUlt').click(function () {
                var p2MoveUltSelection = document.getElementById("p2MoveUlt").textContent;
                if ((p2MoveUltSelection == "RasenShuriken" || "Kirin" || "Spirit Bomb" || "Final Flash" || "Solar Flare" || "Mega Melting" || "Death Ball" || "Kamui" || "SuperNova Fireworks" || "Mazoku Spirit Gun" || "Dimension Sword" || "Sinning Tree" || "Dragon of the Darkness Flame" || "Flashfire Fist - Jet Kindling" || "Susanoo" || "Necromancy" || "Sacred Energy Beam") && (p2KiTotals >= 1000)) {


                    p1AtkCounter += 0;
                    p1DefCounter += -2;
                    p1AuraAtkCounter += 0;
                    p1AuraDefCounter += -2;
                    p1SpdCounter += 0;

                    var p1AtkDiv = document.getElementById("p1AtkDiv");
                    var p1DefDiv = document.getElementById("p1DefDiv");
                    var p1AuraAtkDiv = document.getElementById("p1AuraAtkDiv");
                    var p1AuraDefDiv = document.getElementById("p1AuraDefDiv");
                    var p1SpdDiv = document.getElementById("p1SpdDiv");
                    var newP1Atk = p1UniqueAtk + p1AtkCounter;
                    var newP1Def = p1UniqueDef + p1DefCounter;
                    var newP1AuraAtk = p1UniqueAAtk + p1AuraAtkCounter;
                    var newP1AuraDef = p1UniqueDef + p1AuraDefCounter;
                    var newP1Spd = p1UniqueSpd + p1SpdCounter;

                    var propAtk1 = {atk: newP1Atk};
                    var propDef1 = {defend: newP1Def};
                    var propAuraAtk1 = {atkaura: newP1AuraAtk};
                    var propAuraDef1 = {defaura: newP1AuraDef};
                    var propSpd1 = {speed: newP1Spd};

                    $.extend(rosterObject.fighters[p1Uniqueid - 1], propAtk1);
                    $.extend(rosterObject.fighters[p1Uniqueid - 1], propDef1);
                    $.extend(rosterObject.fighters[p1Uniqueid - 1], propAuraAtk1);
                    $.extend(rosterObject.fighters[p1Uniqueid - 1], propAuraDef1);
                    $.extend(rosterObject.fighters[p1Uniqueid - 1], propSpd1);

                    p1AtkDiv.textContent = 'Attack: ' + newP1Atk;
                    p1DefDiv.textContent = 'Defense: ' + newP1Def;
                    p1AuraAtkDiv.textContent = 'Aura Attack: ' + newP1AuraAtk;
                    p1AuraDefDiv.textContent = 'Aura Defense: ' + newP1AuraDef;
                    p1SpdDiv.textContent = 'Speed: ' + newP1Spd;
                } else if ((p2MoveUltSelection == "Gotham's God" || "Force Valor Rush" || "Force Defend Rush" || "Prime Reckoning" || "Time Rip" || "Force Speed Rush" || "OFA Full Cowling 100%" || "Master Thievious Raccoonus" || "Dark Side Destruction" || "The Wind Waker" || "Slayer of Aku" || "The Rumbling") && (p2KiTotals >= 1000)) {


                    p1AtkCounter += -2;
                    p1DefCounter += 0;
                    p1AuraAtkCounter += -2;
                    p1AuraDefCounter += 0;
                    p1SpdCounter += 0;

                    var p1AtkDiv = document.getElementById("p1AtkDiv");
                    var p1DefDiv = document.getElementById("p1DefDiv");
                    var p1AuraAtkDiv = document.getElementById("p1AuraAtkDiv");
                    var p1AuraDefDiv = document.getElementById("p1AuraDefDiv");
                    var p1SpdDiv = document.getElementById("p1SpdDiv");
                    var newP1Atk = p1UniqueAtk + p1AtkCounter;
                    var newP1Def = p1UniqueDef + p1DefCounter;
                    var newP1AuraAtk = p1UniqueAAtk + p1AuraAtkCounter;
                    var newP1AuraDef = p1UniqueDef + p1AuraDefCounter;
                    var newP1Spd = p1UniqueSpd + p1SpdCounter;

                    var propAtk1 = {atk: newP1Atk};
                    var propDef1 = {defend: newP1Def};
                    var propAuraAtk1 = {atkaura: newP1AuraAtk};
                    var propAuraDef1 = {defaura: newP1AuraDef};
                    var propSpd1 = {speed: newP1Spd};

                    $.extend(rosterObject.fighters[p1Uniqueid - 1], propAtk1);
                    $.extend(rosterObject.fighters[p1Uniqueid - 1], propDef1);
                    $.extend(rosterObject.fighters[p1Uniqueid - 1], propAuraAtk1);
                    $.extend(rosterObject.fighters[p1Uniqueid - 1], propAuraDef1);
                    $.extend(rosterObject.fighters[p1Uniqueid - 1], propSpd1);

                    p1AtkDiv.textContent = 'Attack: ' + newP1Atk;
                    p1DefDiv.textContent = 'Defense: ' + newP1Def;
                    p1AuraAtkDiv.textContent = 'Aura Attack: ' + newP1AuraAtk;
                    p1AuraDefDiv.textContent = 'Aura Defense: ' + newP1AuraDef;
                    p1SpdDiv.textContent = 'Speed: ' + newP1Spd;
                } 
            });
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
            var p1id = res.id;
        })

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
        $('#charSelectBtn2' + res.id).click(function () {

            p2Uniqueid += res.id;
            p2UniqueSpd += res.speed;
            $('.charSelBtn2').prop("disabled", true);
            $('.charSelBtn2').prop("disabled", true);
            $('.p1ButtonSet').off('click');
            var isPlayer2Selection = true;

            if (isPlayer2Selection == true) {
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
            hpHeader2.id = "hpHeader2";
            var barNameHP2 = document.createTextNode('HP ' + p2HPTotals + "/1200");
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
            var barNameKI2 = document.createTextNode('KI ' + p2KiTotals + "/1200");
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
            p2SenzuBtn.class = "p2ButtonSet";
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
            p2AuraRecBtn.class = "p2ButtonSet";
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
            p2move1btn.class = "p2ButtonSet";
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
            p2move2btn.class = "p2ButtonSet";
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
            p2move3btn.class = "p2ButtonSet";
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
            p2moveUltbtn.class = "p2ButtonSet";
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
            setTimeout(function () {
                $('#characterSelectScreen').toggle();
            }, 3000);
            setTimeout(function () {
                $('#textBox').toggle();
            }, 3000);
            setTimeout(function () {
                $('#topRow').toggle();
            }, 3000);
            setTimeout(function () {
                $('#textBox').css({'display': 'flex'});
                $('#textBox').css({'flex-direction': 'column-reverse'});
            }, 3000);
            setTimeout(function () {
                $('#battleScreen').toggle();
            }, 3000);
            setTimeout(function () {
                $('#battleScreen').css({'display': 'flex'});
            }, 3000);
            setTimeout(function () {
                $('#battle1').toggle();
            }, 3000);
            setTimeout(function () {
                $('#battle1' + res.name).css({'display': 'block'});
            }, 3000);
            setTimeout(function () {
                $('#battle2').toggle();
            }, 3000);
            setTimeout(function () {
                $('#battle2' + res.name).css({'display': 'block'});
            }, 3000);
            setTimeout(function () {
                $('.hpBar').toggle();
            }, 3000);
            setTimeout(function () {
                $('.hpBorder').toggle();
            }, 3000);
            setTimeout(function () {
                $('.kiBar').toggle();
            }, 3000);
            setTimeout(function () {
                $('.kiBorder').toggle();
            }, 3000);
            setTimeout(function () {
                $('.p1StatDiv').toggle();
            }, 3000);
            setTimeout(function () {
                if ((player1TurnCounter == player2TurnCounter) && (rosterObject.fighters[p1Uniqueid - 1].speed > rosterObject.fighters[p2Uniqueid - 1].speed)) {
                    overallTurnCounter += 1;
                    var textBoxDiv = document.getElementById('textBox');
                    textBoxDiv.innerHTML += "You begin with 1200/1200 HP and 600/1200 Ki. Remember speed checks are done behind the screen each turn and buttons should toggle appropriately. Home player gets the tiebreaker on speed. Make sure to mind Ki Consumption or you might waste a turn! Enjoy! <br>" + "Ki Consumption <br>" + "Move 1: 250ki<br>" + "Move 2: 325ki<br>" + "Move 3: 750ki<br>" + "Move 4: 1000ki<br>" + "Turn #" + overallTurnCounter + ". " + rosterObject.fighters[p1Uniqueid - 1].name + " is first this turn.";
                    document.getElementById('battle1').style.pointerEvents = 'auto';
                    document.getElementById('battle2').style.pointerEvents = 'none';
                } else if ((player1TurnCounter == player2TurnCounter) && (rosterObject.fighters[p1Uniqueid - 1].speed <= rosterObject.fighters[p2Uniqueid - 1].speed)) {
                    overallTurnCounter += 1;
                    var textBoxDiv = document.getElementById('textBox');
                    textBoxDiv.innerHTML += "You begin with 1200/1200 HP and 600/1200 Ki. Remember speed checks are done behind the screen each turn and buttons should toggle appropriately. Home player gets the tiebreaker on speed. Make sure to mind Ki Consumption or you might waste a turn! Enjoy! <br>" + "Ki Consumption <br>" + "Move 1: 250ki<br>" + "Move 2: 325ki<br>" + "Move 3: 750ki<br>" + "Move 4: 1000ki<br>" + "Turn #" + overallTurnCounter + ". " + rosterObject.fighters[p2Uniqueid - 1].name + " is first this turn.";
                    document.getElementById('battle1').style.pointerEvents = 'none';
                    document.getElementById('battle2').style.pointerEvents = 'auto';
                }

            }, 3500);


            // $('.p1ButtonSet btn').prop("disabled", true);
            // $('.p2ButtonSet btn').prop("disabled", true);
            $(document).ready(function () {
                if (res.series == "Dragonball") {
                    // $('#battle2').css('background-image', 'url(img/db_background.webp');
                }
                if (res.series == "DC") {
                    // $('#battle2').css('background-image', 'url(img/dc-bg.png');
                    $('#battleScreen').css('background-image', 'url(img/batcave.jpeg');
                    $('#battleScreen').css('background-size', 'cover');
                }
                if (res.series == "Naruto") {
                    // $('#battle2').css('background-image', 'url(img/hidden_leaf.png');
                    $('#battleScreen').css('background-image', 'url(img/naruto-stage-1.png');
                    $('#battleScreen').css('background-size', 'cover');
                }
                if (res.series == "StarWars") {
                    // $('#battle2').css('background-image', 'url(img/star-wars-bg.jpg');
                    $('#battleScreen').css('background-image', 'url(img/millenium-falcon-bg.jpeg');
                    $('#battleScreen').css('background-size', 'cover');
                }
                if (res.series == "Transformers") {
                    // $('#battle2').css('background-image', 'url(img/transformers-bg.jpeg');
                    // $('#battle2').css('background-size', 'cover');
                    $('#battleScreen').css('background-image', 'url(img/cybertron.jpeg');
                    $('#battleScreen').css('background-size', 'cover');
                }
                if (res.series == "YuYu Hakusho") {
                    // $('#battle2').css('background-image', 'url(img/yyh-logo.png');
                    // $('#battle2').css('background-size', 'cover');
                    $('#battleScreen').css('background-image', 'url(img/genkai-temple.jpeg');
                    $('#battleScreen').css('background-size', 'cover');
                }
                if (res.series == "My Hero Academia") {
                    // $('#battle2').css('background-image', 'url(img/my-hero-logo.jpeg');
                    // $('#battle2').css('background-size', 'cover');
                    $('#battleScreen').css('background-image', 'url(img/ua-hero-academy.png');
                    $('#battleScreen').css('background-size', 'cover');
                }
                if (res.series == "Samurai Jack") {
                    // $('#battle2').css('background-image', 'url(img/samurai-jack-bg.jpeg');
                    // $('#battle2').css('background-size', 'cover');
                    $('#battleScreen').css('background-image', 'url(img/jackground.jpeg');
                    $('#battleScreen').css('background-size', 'cover');
                }
                if (res.series == "Sly Cooper") {
                    // $('#battle2').css('background-image', 'url(img/sly-bg.jpeg');
                    // $('#battle2').css('background-size', 'cover');
                    $('#battleScreen').css('background-image', 'url(img/sly-stage.jpeg');
                    $('#battleScreen').css('background-size', 'cover');
                }
                if (res.series == "Attack on Titan") {
                    // $('#battle2').css('background-image', 'url(img/aot-bg.jpeg');
                    // $('#battle2').css('background-size', 'cover');
                    $('#battleScreen').css('background-image', 'url(img/aot-stage-1.jpeg');
                    $('#battleScreen').css('background-size', 'cover');
                }
                if (res.series == "Zelda") {
                    // $('#battle2').css('background-image', 'url(img/zelda-bg.png');
                    // $('#battle2').css('background-size', 'cover');
                    $('#battleScreen').css('background-image', 'url(img/hyrule.jpeg');
                    $('#battleScreen').css('background-size', 'cover');
                }
                //Speed Check


                // p1Move1 Effects on Player 2

                // ON CLICK FUNCTIONS FOR BUTTONS

                //HP Recovery Formula
                $('#p2SenzuBtn').click(function () {

                    document.getElementById('battle1').style.pointerEvents = 'auto';
                    document.getElementById('battle2').style.pointerEvents = 'none';
                    player2TurnCounter += 1;
                    p2HPTotals = 1200
                    var p2HPBar = (p2HPTotals / 1200) * 300;
                    p2HP.style.width = p2HPBar + "px";
                    var textBoxDiv = document.getElementById('textBox');
                    textBoxDiv.innerHTML += player2Name + " recovered health completely! <br>";
                    var p2SenzuBtn = document.getElementById('p2SenzuBtn');
                    $(p2SenzuBtn).css('visibility', 'hidden');

                    var audioElement = document.createElement('audio');
                    audioElement.setAttribute('src', 'audio/senzu-bean-audio.mp3');
                    audioElement.setAttribute('autoplay', 'autoplay');
                    audioElement.play();

                    if ((overallTurnCounter >= 1) && (player1TurnCounter == player2TurnCounter) && (rosterObject.fighters[p1Uniqueid - 1].speed > rosterObject.fighters[p2Uniqueid - 1].speed)) {
                        overallTurnCounter += 1;
                        var textBoxDiv = document.getElementById('textBox');
                        textBoxDiv.innerHTML += "Turn #" + overallTurnCounter + "<br>";
                        document.getElementById('battle1').style.pointerEvents = 'auto';
                        document.getElementById('battle2').style.pointerEvents = 'none';
                    } else if ((overallTurnCounter >= 1) && (player1TurnCounter == player2TurnCounter) && (rosterObject.fighters[p1Uniqueid - 1].speed <= rosterObject.fighters[p2Uniqueid - 1].speed)) {
                        overallTurnCounter += 1;
                        var textBoxDiv = document.getElementById('textBox');
                        textBoxDiv.innerHTML += "Turn #" + overallTurnCounter + "<br>";
                        document.getElementById('battle1').style.pointerEvents = 'none';
                        document.getElementById('battle2').style.pointerEvents = 'auto';
                    } else {
                    }


                });
                //Ki Recovery Formula
                $('#p2AuraRecBtn').click(function () {

                    document.getElementById('battle1').style.pointerEvents = 'auto';
                    document.getElementById('battle2').style.pointerEvents = 'none';
                    player2TurnCounter += 1;

                    if (p2KiTotals <= 800) {
                        p2KiTotals += 400;
                    } else if (p2KiTotals > 800) {
                        p2KiTotals = 1200
                    }
                    var p2KiBar = (p2KiTotals / 1200) * 300;
                    p2Ki.style.width = p2KiBar + "px";
                    kiHeader2.textContent = 'KI ' + p2KiTotals + "/1200";


                    var textBoxDiv = document.getElementById('textBox');
                    textBoxDiv.innerHTML += player2Name + " recovered his ki! " + player2Name + " now has " + p2KiTotals + " Ki remaining.<br>";
                    var audioElement = document.createElement('audio');
                    audioElement.setAttribute('src', 'audio/ki-recovery-audio.mp3');
                    audioElement.setAttribute('autoplay', 'autoplay');
                    audioElement.play();

                    if ((overallTurnCounter >= 1) && (player1TurnCounter == player2TurnCounter) && (rosterObject.fighters[p1Uniqueid - 1].speed > rosterObject.fighters[p2Uniqueid - 1].speed)) {
                        overallTurnCounter += 1;
                        var textBoxDiv = document.getElementById('textBox');
                        textBoxDiv.innerHTML += "Turn #" + overallTurnCounter + "<br>";
                        document.getElementById('battle1').style.pointerEvents = 'auto';
                        document.getElementById('battle2').style.pointerEvents = 'none';
                    } else if ((overallTurnCounter >= 1) && (player1TurnCounter == player2TurnCounter) && (rosterObject.fighters[p1Uniqueid - 1].speed <= rosterObject.fighters[p2Uniqueid - 1].speed)) {
                        overallTurnCounter += 1;
                        var textBoxDiv = document.getElementById('textBox');
                        textBoxDiv.innerHTML += "Turn #" + overallTurnCounter + "<br>";
                        document.getElementById('battle1').style.pointerEvents = 'none';
                        document.getElementById('battle2').style.pointerEvents = 'auto';
                    } else {
                    }

                });


                // PLAYER 1 BUTTONS

                $('#p1Move1').click(function () {


                    var p1Move1Selection = document.getElementById("p1Move1").textContent;
                    if ((p1Move1Selection == "Rasengan" || "Chidori" || "Kamehameha" || "Galick Gun" || "Force Push" || "Force Choke" || "Death Beam" || "Lightning Blade" || "Spirit Gun" || "Spirit Sword" || "Heaven-Piercing Ice Wall") && (p1KiTotals >= 250)) {
                        document.getElementById('battle1').style.pointerEvents = 'none';
                        document.getElementById('battle2').style.pointerEvents = 'auto';

                        p2AtkCounter += 0;
                        p2AuraAtkCounter += -3;
                        p2DefCounter += 0;
                        p2AuraDefCounter += -3;
                        p2SpdCounter += 2;

                        //Ki Set Up
                        p1KiTotals -= 250;
                        var P1KiBarWidth = (p1KiTotals / 1200) * 300;
                        p1Ki.style.width = P1KiBarWidth + "px";
                        var kiHeader1 = document.getElementById("kiHeader1")
                        kiHeader1.textContent = 'KI ' + p1KiTotals + "/1200";
                        
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

                        var propAtk2 = {atk: newP2Atk};
                        var propDef2 = {defend: newP2Def};
                        var propAuraAtk2 = {atkaura: newP2AuraAtk};
                        var propAuraDef2 = {defaura: newP2AuraDef};
                        var propSpd2 = {speed: newP2Spd};

                        $.extend(rosterObject.fighters[p2id - 1], propAtk2);
                        $.extend(rosterObject.fighters[p2id - 1], propDef2);
                        $.extend(rosterObject.fighters[p2id - 1], propAuraAtk2);
                        $.extend(rosterObject.fighters[p2id - 1], propAuraDef2);
                        $.extend(rosterObject.fighters[p2id - 1], propSpd2);


                        //Damage Calculator
                        var damage = Math.round(75 * (rosterObject.fighters[p1Uniqueid - 1].atkaura / rosterObject.fighters[p2id - 1].defaura));
                        p2HPTotals -= damage;
                        var p1FighterNameDiv = document.getElementById("charNameHeader1").innerText;
                        var p1FighterMoveDiv = document.getElementById("p1Move1").innerText;
                        var textBoxDiv = document.getElementById('textBox');
                        textBoxDiv.innerHTML += p1FighterNameDiv + " used " + p1FighterMoveDiv + " and did " + damage + " in damage!<br>" + player2Name + " has " + p2HPTotals + " HP remaining!<br>";

                        if (p2HPTotals <= 0) {
                            p2HPTotals = 0;
                            var p1FighterNameDiv = document.getElementById("charNameHeader1").innerText;
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += p1FighterNameDiv + " wins the fight!<br>";
                            textBoxDiv.innerHTML += "Game will reload in 5 seconds.<br>";
                            setTimeout(function () {
                                window.location.reload(true);
                            }, 5000);
                        }

                        var P2HPBarWidth = (p2HPTotals / 1200) * 300;
                        p2HP.style.width = P2HPBarWidth + "px";
                        var hpHeader2 = document.getElementById("hpHeader2");
                        hpHeader2.textContent = 'HP ' + p2HPTotals + "/1200";

                        if ((overallTurnCounter >= 1) && (player1TurnCounter == player2TurnCounter) && (rosterObject.fighters[p1Uniqueid - 1].speed > rosterObject.fighters[p2Uniqueid - 1].speed)) {
                            overallTurnCounter += 1;
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += "Turn #" + overallTurnCounter + "<br>";
                            document.getElementById('battle1').style.pointerEvents = 'auto';
                            document.getElementById('battle2').style.pointerEvents = 'none';
                        } else if ((overallTurnCounter >= 1) && (player1TurnCounter == player2TurnCounter) && (rosterObject.fighters[p1Uniqueid - 1].speed <= rosterObject.fighters[p2Uniqueid - 1].speed)) {
                            overallTurnCounter += 1;
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += "Turn #" + overallTurnCounter + "<br>";
                            document.getElementById('battle1').style.pointerEvents = 'none';
                            document.getElementById('battle2').style.pointerEvents = 'auto';
                        } else {
                        }


                    } else if ((p1Move1Selection == "Krypton Rush" || "Omni-Style Rush" || "Full Force Punch" || "Metal Mash" || "Tornado Fist" || "Scream's Rage" || "Rose Whip" || "Speed Slice" || "New Hampshire Smash" || "Explosive Punch" || "Cane Hook Slash" || "Clone Explosion Jutsu" || "Barrage of Arrows" || "Samurai Slashing" || "Scarabs Scurrying" || "ODM Gear" || "Fissure Kick") && (p1KiTotals >= 250)) {
                        document.getElementById('battle1').style.pointerEvents = 'none';
                        document.getElementById('battle2').style.pointerEvents = 'auto';

                        p2AtkCounter += -3;
                        p2AuraAtkCounter += 0;
                        p2DefCounter += -3;
                        p2AuraDefCounter += 0;
                        p2SpdCounter += +2;

//Ki Set Up
                        p1KiTotals -= 250;
                        var P1KiBarWidth = (p1KiTotals / 1200) * 300;
                        p1Ki.style.width = P1KiBarWidth + "px";
                        var kiHeader1 = document.getElementById("kiHeader1")
                        kiHeader1.textContent = 'KI ' + p1KiTotals + "/1200";
                        
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

                        var propAtk2 = {atk: newP2Atk};
                        var propDef2 = {defend: newP2Def};
                        var propAuraAtk2 = {atkaura: newP2AuraAtk};
                        var propAuraDef2 = {defaura: newP2AuraDef};
                        var propSpd2 = {speed: newP2Spd};

                        $.extend(rosterObject.fighters[p2id - 1], propAtk2);
                        $.extend(rosterObject.fighters[p2id - 1], propDef2);
                        $.extend(rosterObject.fighters[p2id - 1], propAuraAtk2);
                        $.extend(rosterObject.fighters[p2id - 1], propAuraDef2);
                        $.extend(rosterObject.fighters[p2id - 1], propSpd2);


                        //Damage Calculator
                        var damage = Math.round(75 * (rosterObject.fighters[p1Uniqueid - 1].atk / rosterObject.fighters[p2id - 1].defend));
                        p2HPTotals -= damage;
                        var p1FighterNameDiv = document.getElementById("charNameHeader1").innerText;
                        var p1FighterMoveDiv = document.getElementById("p1Move1").innerText;
                        var textBoxDiv = document.getElementById('textBox');
                        textBoxDiv.innerHTML += p1FighterNameDiv + " used " + p1FighterMoveDiv + " and did " + damage + " in damage!<br>" + player2Name + " has " + p2HPTotals + " HP remaining!<br>";

                        if (p2HPTotals <= 0) {
                            p2HPTotals = 0;
                            var p1FighterNameDiv = document.getElementById("charNameHeader1").innerText;
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += p1FighterNameDiv + " wins the fight!<br>";
                            textBoxDiv.innerHTML += "Game will reload in 5 seconds.<br>";
                            setTimeout(function () {
                                window.location.reload(true);
                            }, 5000);
                        }

                        var P2HPBarWidth = (p2HPTotals / 1200) * 300;
                        p2HP.style.width = P2HPBarWidth + "px";
                        var hpHeader2 = document.getElementById("hpHeader2");
                        hpHeader2.textContent = 'HP ' + p2HPTotals + "/1200";

                        if ((overallTurnCounter >= 1) && (player1TurnCounter == player2TurnCounter) && (rosterObject.fighters[p1Uniqueid - 1].speed > rosterObject.fighters[p2Uniqueid - 1].speed)) {
                            overallTurnCounter += 1;
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += "Turn #" + overallTurnCounter + "<br>";
                            document.getElementById('battle1').style.pointerEvents = 'auto';
                            document.getElementById('battle2').style.pointerEvents = 'none';
                        } else if ((overallTurnCounter >= 1) && (player1TurnCounter == player2TurnCounter) && (rosterObject.fighters[p1Uniqueid - 1].speed <= rosterObject.fighters[p2Uniqueid - 1].speed)) {
                            overallTurnCounter += 1;
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += "Turn #" + overallTurnCounter + "<br>";
                            document.getElementById('battle1').style.pointerEvents = 'none';
                            document.getElementById('battle2').style.pointerEvents = 'auto';
                        } else {
                        }
                    }else {}
                });

                $('#p1Move2').click(function () {
                    var p1Move2Selection = document.getElementById("p1Move2").textContent;
                    if ((p1Move2Selection == "Uzumaki Barrage" || "Barrage of Lions" || "Dragon Fist" || "Batarang" || "Star Saber" || "Nova Strike" || "G Force Punch" || "Spirit Gun Fist" | "Spirit Kick" || "Fist of the Mortal Flame" || "Detroit Smash" || "Explosive Kick" || "Boomerang Bash" || "Speed Slice" || "Demonic Dash" || "Attack Titan") && (p1KiTotals >= 325)) {

                        document.getElementById('battle1').style.pointerEvents = 'none';
                        document.getElementById('battle2').style.pointerEvents = 'auto';


                        //P2 Stat Changes    
                        p2AtkCounter += 0;
                        p2AuraAtkCounter += 3;
                        p2DefCounter += -2;
                        p2AuraDefCounter += -2;
                        p2SpdCounter += -0;

                        //Ki Set Up
                        p1KiTotals -= 325;
                        var P1KiBarWidth = (p1KiTotals / 1200) * 300;
                        p1Ki.style.width = P1KiBarWidth + "px";
                        var kiHeader1 = document.getElementById("kiHeader1")
                        kiHeader1.textContent = 'KI ' + p1KiTotals + "/1200";

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

                        var propAtk2 = {atk: newP2Atk};
                        var propDef2 = {defend: newP2Def};
                        var propAuraAtk2 = {atkaura: newP2AuraAtk};
                        var propAuraDef2 = {defaura: newP2AuraDef};
                        var propSpd2 = {speed: newP2Spd};

                        $.extend(rosterObject.fighters[p2id - 1], propAtk2);
                        $.extend(rosterObject.fighters[p2id - 1], propDef2);
                        $.extend(rosterObject.fighters[p2id - 1], propAuraAtk2);
                        $.extend(rosterObject.fighters[p2id - 1], propAuraDef2);
                        $.extend(rosterObject.fighters[p2id - 1], propSpd2);


                        //Damage Calculator
                        var damage = Math.round(125 * (rosterObject.fighters[p1Uniqueid - 1].atk / rosterObject.fighters[p2id - 1].defend));
                        p2HPTotals -= damage;
                        var p1FighterNameDiv = document.getElementById("charNameHeader1").innerText;
                        var p1FighterMoveDiv = document.getElementById("p1Move2").innerText;
                        var textBoxDiv = document.getElementById('textBox');
                        textBoxDiv.innerHTML += p1FighterNameDiv + " used " + p1FighterMoveDiv + " and did " + damage + " in damage!<br>" + player2Name + " has " + p2HPTotals + " HP remaining!<br>";

                        if (p2HPTotals <= 0) {
                            p2HPTotals = 0;
                            var p1FighterNameDiv = document.getElementById("charNameHeader1").innerText;
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += p1FighterNameDiv + " wins the fight!<br>";
                            textBoxDiv.innerHTML += "Game will reload in 5 seconds.<br>";
                            setTimeout(function () {
                                window.location.reload(true);
                            }, 5000);
                        }


                        var P2HPBarWidth = (p2HPTotals / 1200) * 300;
                        p2HP.style.width = P2HPBarWidth + "px";
                        var hpHeader2 = document.getElementById("hpHeader2");
                        hpHeader2.textContent = 'HP ' + p2HPTotals + "/1200";

                        if ((overallTurnCounter >= 1) && (player1TurnCounter == player2TurnCounter) && (rosterObject.fighters[p1Uniqueid - 1].speed > rosterObject.fighters[p2Uniqueid - 1].speed)) {
                            overallTurnCounter += 1;
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += "Turn #" + overallTurnCounter + "<br>";
                            document.getElementById('battle1').style.pointerEvents = 'auto';
                            document.getElementById('battle2').style.pointerEvents = 'none';
                        } else if ((overallTurnCounter >= 1) && (player1TurnCounter == player2TurnCounter) && (rosterObject.fighters[p1Uniqueid - 1].speed <= rosterObject.fighters[p2Uniqueid - 1].speed)) {
                            overallTurnCounter += 1;
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += "Turn #" + overallTurnCounter + "<br>";
                            document.getElementById('battle1').style.pointerEvents = 'none';
                            document.getElementById('battle2').style.pointerEvents = 'auto';
                        } else {
                        }

                    } else if ((p1Move2Selection == "Dirty Fireworks" || "Heat Vision" || "Force Throw" || "Force Lightning" || "Requiem Blaster" || "Earth Style: Mud Wall" || "Seed of the Death Plant" || "Wall of Flames" || "Bentley's Brave Byte" || "Tsukuyomi" || "Crimson Ball Wave") && (p1KiTotals >= 325)) {

                        document.getElementById('battle1').style.pointerEvents = 'none';
                        document.getElementById('battle2').style.pointerEvents = 'auto';


                        //P2 Stat Changes    
                        p2AtkCounter += -2;
                        p2AuraAtkCounter += -2;
                        p2DefCounter += 0;
                        p2AuraDefCounter += 3;
                        p2SpdCounter += 0;

                        //Ki Set Up
                        p1KiTotals -= 325;
                        var P1KiBarWidth = (p1KiTotals / 1200) * 300;
                        p1Ki.style.width = P1KiBarWidth + "px";
                        var kiHeader1 = document.getElementById("kiHeader1")
                        kiHeader1.textContent = 'KI ' + p1KiTotals + "/1200";
                        
                        
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

                        var propAtk2 = {atk: newP2Atk};
                        var propDef2 = {defend: newP2Def};
                        var propAuraAtk2 = {atkaura: newP2AuraAtk};
                        var propAuraDef2 = {defaura: newP2AuraDef};
                        var propSpd2 = {speed: newP2Spd};

                        $.extend(rosterObject.fighters[p2id - 1], propAtk2);
                        $.extend(rosterObject.fighters[p2id - 1], propDef2);
                        $.extend(rosterObject.fighters[p2id - 1], propAuraAtk2);
                        $.extend(rosterObject.fighters[p2id - 1], propAuraDef2);
                        $.extend(rosterObject.fighters[p2id - 1], propSpd2);


                        //Damage Calculator
                        var damage = Math.round(125 * (rosterObject.fighters[p1Uniqueid - 1].atkaura / rosterObject.fighters[p2id - 1].defaura));
                        p2HPTotals -= damage;
                        var p1FighterNameDiv = document.getElementById("charNameHeader1").innerText;
                        var p1FighterMoveDiv = document.getElementById("p1Move2").innerText;
                        var textBoxDiv = document.getElementById('textBox');
                        textBoxDiv.innerHTML += p1FighterNameDiv + " used " + p1FighterMoveDiv + " and did " + damage + " in damage!<br>" + player2Name + " has " + p2HPTotals + " HP remaining!<br>";

                        if (p2HPTotals <= 0) {
                            p2HPTotals = 0;
                            var p1FighterNameDiv = document.getElementById("charNameHeader1").innerText;
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += p1FighterNameDiv + " wins the fight!<br>";
                            textBoxDiv.innerHTML += "Game will reload in 5 seconds.<br>";
                            setTimeout(function () {
                                window.location.reload(true);
                            }, 5000);
                        }


                        var P2HPBarWidth = (p2HPTotals / 1200) * 300;
                        p2HP.style.width = P2HPBarWidth + "px";
                        var hpHeader2 = document.getElementById("hpHeader2");
                        hpHeader2.textContent = 'HP ' + p2HPTotals + "/1200";

                        if ((overallTurnCounter >= 1) && (player1TurnCounter == player2TurnCounter) && (rosterObject.fighters[p1Uniqueid - 1].speed > rosterObject.fighters[p2Uniqueid - 1].speed)) {
                            overallTurnCounter += 1;
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += "Turn #" + overallTurnCounter + "<br>";
                            document.getElementById('battle1').style.pointerEvents = 'auto';
                            document.getElementById('battle2').style.pointerEvents = 'none';
                        } else if ((overallTurnCounter >= 1) && (player1TurnCounter == player2TurnCounter) && (rosterObject.fighters[p1Uniqueid - 1].speed <= rosterObject.fighters[p2Uniqueid - 1].speed)) {
                            overallTurnCounter += 1;
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += "Turn #" + overallTurnCounter + "<br>";
                            document.getElementById('battle1').style.pointerEvents = 'none';
                            document.getElementById('battle2').style.pointerEvents = 'auto';
                        } else {
                        }
                    } else {}
                });


                $('#p1Move3').click(function () {

                    var p1Move3Selection = document.getElementById("p1Move3").textContent;
                    if ((p1Move3Selection == "Toad Summoning" || "Snake Summoning" || "Ice Breath" || "Mind Trick" || "Death Wave" || "Force Choke" || "Spirit Wave" || "Spirit Sword Javelin" || "Sword of Darkness Flame" || "Black Whip" || "Reverse Explosion" || "Flashfreeze Heatwave" || "Amaterasu" || "Eye Beams" || "WarHammer Titan") && (p1KiTotals >= 750)) {
                        document.getElementById('battle1').style.pointerEvents = 'none';
                        document.getElementById('battle2').style.pointerEvents = 'auto';


                        //P2 Stat Changes    
                        p2AtkCounter += 0;
                        p2AuraAtkCounter += 0;
                        p2DefCounter += 3;
                        p2AuraDefCounter += 3;
                        p2SpdCounter += -3;

                        //Ki Set Up
                        p1KiTotals -= 750;
                        var P1KiBarWidth = (p1KiTotals / 1200) * 300;
                        p1Ki.style.width = P1KiBarWidth + "px";
                        var kiHeader1 = document.getElementById("kiHeader1")
                        kiHeader1.textContent = 'KI ' + p1KiTotals + "/1200";


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

                        var propAtk2 = {atk: newP2Atk};
                        var propDef2 = {defend: newP2Def};
                        var propAuraAtk2 = {atkaura: newP2AuraAtk};
                        var propAuraDef2 = {defaura: newP2AuraDef};
                        var propSpd2 = {speed: newP2Spd};

                        $.extend(rosterObject.fighters[p2id - 1], propAtk2);
                        $.extend(rosterObject.fighters[p2id - 1], propDef2);
                        $.extend(rosterObject.fighters[p2id - 1], propAuraAtk2);
                        $.extend(rosterObject.fighters[p2id - 1], propAuraDef2);
                        $.extend(rosterObject.fighters[p2id - 1], propSpd2);


                        //Damage Calculator
                        var damage = Math.round(175 * (rosterObject.fighters[p1Uniqueid - 1].atkaura / rosterObject.fighters[p2id - 1].defaura));
                        p2HPTotals -= damage;
                        var p1FighterNameDiv = document.getElementById("charNameHeader1").innerText;
                        var p1FighterMoveDiv = document.getElementById("p1Move3").innerText;
                        var textBoxDiv = document.getElementById('textBox');
                        textBoxDiv.innerHTML += p1FighterNameDiv + " used " + p1FighterMoveDiv + " and did " + damage + " in damage!<br>" + player2Name + " has " + p2HPTotals + " HP remaining!<br>";

                        if (p2HPTotals <= 0) {
                            p2HPTotals = 0;
                            var p1FighterNameDiv = document.getElementById("charNameHeader1").innerText;
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += p1FighterNameDiv + " wins the fight!<br>";
                            textBoxDiv.innerHTML += "Game will reload in 5 seconds.<br>";
                            setTimeout(function () {
                                window.location.reload(true);
                            }, 5000);
                        }


                        var P2HPBarWidth = (p2HPTotals / 1200) * 300;
                        p2HP.style.width = P2HPBarWidth + "px";
                        var hpHeader2 = document.getElementById("hpHeader2");
                        hpHeader2.textContent = 'HP ' + p2HPTotals + "/1200";

                        if ((overallTurnCounter >= 1) && (player1TurnCounter == player2TurnCounter) && (rosterObject.fighters[p1Uniqueid - 1].speed > rosterObject.fighters[p2Uniqueid - 1].speed)) {
                            overallTurnCounter += 1;
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += "Turn #" + overallTurnCounter + "<br>";
                            document.getElementById('battle1').style.pointerEvents = 'auto';
                            document.getElementById('battle2').style.pointerEvents = 'none';
                        } else if ((overallTurnCounter >= 1) && (player1TurnCounter == player2TurnCounter) && (rosterObject.fighters[p1Uniqueid - 1].speed <= rosterObject.fighters[p2Uniqueid - 1].speed)) {
                            overallTurnCounter += 1;
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += "Turn #" + overallTurnCounter + "<br>";
                            document.getElementById('battle1').style.pointerEvents = 'none';
                            document.getElementById('battle2').style.pointerEvents = 'auto';
                        } else {
                        }

                    } else if ((p1Move3Selection == "Kaioken Triple Attack" || "Infinite Break" || "Cape Cover" || "Lightsaber Boomerang" || "Skyboom Shield" || "Primary Lotus" || "Afterimage" || "Ojigi Plant" || "Murray's Manhandling" || "Saber Slash" || "Bomb-Slash Combo" || "Parry" || "Sacred Energy Armor") && (p1KiTotals >= 750)) {
                        document.getElementById('battle1').style.pointerEvents = 'none';
                        document.getElementById('battle2').style.pointerEvents = 'auto';

                        //P2 Stat Changes    
                        p2AtkCounter += 3;
                        p2AuraAtkCounter += 3;
                        p2DefCounter += 0;
                        p2AuraDefCounter += 0;
                        p2SpdCounter += -3;

                        //Ki Set Up
                        p1KiTotals -= 750;
                        var P1KiBarWidth = (p1KiTotals / 1200) * 300;
                        p1Ki.style.width = P1KiBarWidth + "px";
                        var kiHeader1 = document.getElementById("kiHeader1")
                        kiHeader1.textContent = 'KI ' + p1KiTotals + "/1200";


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

                        var propAtk2 = {atk: newP2Atk};
                        var propDef2 = {defend: newP2Def};
                        var propAuraAtk2 = {atkaura: newP2AuraAtk};
                        var propAuraDef2 = {defaura: newP2AuraDef};
                        var propSpd2 = {speed: newP2Spd};

                        $.extend(rosterObject.fighters[p2id - 1], propAtk2);
                        $.extend(rosterObject.fighters[p2id - 1], propDef2);
                        $.extend(rosterObject.fighters[p2id - 1], propAuraAtk2);
                        $.extend(rosterObject.fighters[p2id - 1], propAuraDef2);
                        $.extend(rosterObject.fighters[p2id - 1], propSpd2);


                        //Damage Calculator
                        var damage = Math.round(175 * (rosterObject.fighters[p1Uniqueid - 1].atk / rosterObject.fighters[p2id - 1].defend));
                        p2HPTotals -= damage;
                        var p1FighterNameDiv = document.getElementById("charNameHeader1").innerText;
                        var p1FighterMoveDiv = document.getElementById("p1Move3").innerText;
                        var textBoxDiv = document.getElementById('textBox');
                        textBoxDiv.innerHTML += p1FighterNameDiv + " used " + p1FighterMoveDiv + " and did " + damage + " in damage!<br>" + player2Name + " has " + p2HPTotals + " HP remaining!<br>";

                        if (p2HPTotals <= 0) {
                            p2HPTotals = 0;
                            var p1FighterNameDiv = document.getElementById("charNameHeader1").innerText;
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += p1FighterNameDiv + " wins the fight!<br>";
                            textBoxDiv.innerHTML += "Game will reload in 5 seconds.<br>";
                            setTimeout(function () {
                                window.location.reload(true);
                            }, 5000);
                        }


                        var P2HPBarWidth = (p2HPTotals / 1200) * 300;
                        p2HP.style.width = P2HPBarWidth + "px";
                        var hpHeader2 = document.getElementById("hpHeader2");
                        hpHeader2.textContent = 'HP ' + p2HPTotals + "/1200";

                        if ((overallTurnCounter >= 1) && (player1TurnCounter == player2TurnCounter) && (rosterObject.fighters[p1Uniqueid - 1].speed > rosterObject.fighters[p2Uniqueid - 1].speed)) {
                            overallTurnCounter += 1;
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += "Turn #" + overallTurnCounter + "<br>";
                            document.getElementById('battle1').style.pointerEvents = 'auto';
                            document.getElementById('battle2').style.pointerEvents = 'none';
                        } else if ((overallTurnCounter >= 1) && (player1TurnCounter == player2TurnCounter) && (rosterObject.fighters[p1Uniqueid - 1].speed <= rosterObject.fighters[p2Uniqueid - 1].speed)) {
                            overallTurnCounter += 1;
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += "Turn #" + overallTurnCounter + "<br>";
                            document.getElementById('battle1').style.pointerEvents = 'none';
                            document.getElementById('battle2').style.pointerEvents = 'auto';
                        } else {
                        }

                    } else {}
                });


                //Aura or Physical depending on Character
                $('#p1MoveUlt').click(function () {
                    var p1MoveUltSelection = document.getElementById("p1MoveUlt").textContent;
                    if ((p1MoveUltSelection == "RasenShuriken" || "Kirin" || "Spirit Bomb" || "Final Flash" || "Solar Flare" || "Mega Melting" || "Death Ball" || "Kamui" || "SuperNova Fireworks" || "Mazoku Spirit Gun" || "Dimension Sword" || "Sinning Tree" || "Dragon of the Darkness Flame" || "Flashfire Fist - Jet Kindling" || "Susanoo" || "Necromancy" || "Sacred Energy Beam") && (p1KiTotals >= 1000)) {
                        document.getElementById('battle1').style.pointerEvents = 'none';
                        document.getElementById('battle2').style.pointerEvents = 'auto';


                        //P2 Stat Changes    
                        p2AtkCounter += 0;
                        p2AuraAtkCounter += 0;
                        p2DefCounter += -2;
                        p2AuraDefCounter += -2;
                        p2SpdCounter += 0;

                        //Ki Set Up
                        p1KiTotals -= 1000;
                        var P1KiBarWidth = (p1KiTotals / 1200) * 300;
                        p1Ki.style.width = P1KiBarWidth + "px";
                        var kiHeader1 = document.getElementById("kiHeader1")
                        kiHeader1.textContent = 'KI ' + p1KiTotals + "/1200";


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

                        var propAtk2 = {atk: newP2Atk};
                        var propDef2 = {defend: newP2Def};
                        var propAuraAtk2 = {atkaura: newP2AuraAtk};
                        var propAuraDef2 = {defaura: newP2AuraDef};
                        var propSpd2 = {speed: newP2Spd};

                        $.extend(rosterObject.fighters[p2id - 1], propAtk2);
                        $.extend(rosterObject.fighters[p2id - 1], propDef2);
                        $.extend(rosterObject.fighters[p2id - 1], propAuraAtk2);
                        $.extend(rosterObject.fighters[p2id - 1], propAuraDef2);
                        $.extend(rosterObject.fighters[p2id - 1], propSpd2);

                        //Damage Calculator
                        var damage = Math.round(225 * (rosterObject.fighters[p1Uniqueid - 1].atkaura / rosterObject.fighters[p2id - 1].defaura));
                        p2HPTotals -= damage;
                        var p1FighterNameDiv = document.getElementById("charNameHeader1").innerText;
                        var p1FighterMoveDiv = document.getElementById("p1MoveUlt").innerText;
                        var textBoxDiv = document.getElementById('textBox');
                        textBoxDiv.innerHTML += p1FighterNameDiv + " used " + p1FighterMoveDiv + " and did " + damage + " in damage!<br>" + player2Name + " has " + p2HPTotals + " HP remaining!<br>";

                        if (p2HPTotals <= 0) {
                            p2HPTotals = 0;
                            var p1FighterNameDiv = document.getElementById("charNameHeader1").innerText;
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += p1FighterNameDiv + " wins the fight!<br>";
                            textBoxDiv.innerHTML += "Game will reload in 5 seconds.<br>";
                            setTimeout(function () {
                                window.location.reload(true);
                            }, 5000);
                        }

                        var P2HPBarWidth = (p2HPTotals / 1200) * 300;
                        p2HP.style.width = P2HPBarWidth + "px";
                        var hpHeader2 = document.getElementById("hpHeader2");
                        hpHeader2.textContent = 'HP ' + p2HPTotals + "/1200";

                        if ((overallTurnCounter >= 1) && (player1TurnCounter == player2TurnCounter) && (rosterObject.fighters[p1Uniqueid - 1].speed > rosterObject.fighters[p2Uniqueid - 1].speed)) {
                            overallTurnCounter += 1;
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += "Turn #" + overallTurnCounter + "<br>";
                            document.getElementById('battle1').style.pointerEvents = 'auto';
                            document.getElementById('battle2').style.pointerEvents = 'none';
                        } else if ((overallTurnCounter >= 1) && (player1TurnCounter == player2TurnCounter) && (rosterObject.fighters[p1Uniqueid - 1].speed <= rosterObject.fighters[p2Uniqueid - 1].speed)) {
                            overallTurnCounter += 1;
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += "Turn #" + overallTurnCounter + "<br>";
                            document.getElementById('battle1').style.pointerEvents = 'none';
                            document.getElementById('battle2').style.pointerEvents = 'auto';
                        } else {
                        }
                    } else if ((p1MoveUltSelection == "Gotham's God" || "Force Valor Rush" || "Force Defend Rush" || "Prime Reckoning" || "Time Rip" || "Force Speed Rush" || "OFA Full Cowling 100%" || "Master Thievious Raccoonus" || "Dark Side Destruction" || "The Wind Waker" || "Slayer of Aku" || "The Rumbling") && (p1KiTotals >= 1000)) {
                        document.getElementById('battle1').style.pointerEvents = 'none';
                        document.getElementById('battle2').style.pointerEvents = 'auto';


                        //P2 Stat Changes    
                        p2AtkCounter += -2;
                        p2AuraAtkCounter += -2;
                        p2DefCounter += 0;
                        p2AuraDefCounter += 0;
                        p2SpdCounter += 0;

                        //Ki Set Up
                        p1KiTotals -= 1000;
                        var P1KiBarWidth = (p1KiTotals / 1200) * 300;
                        p1Ki.style.width = P1KiBarWidth + "px";
                        var kiHeader1 = document.getElementById("kiHeader1")
                        kiHeader1.textContent = 'KI ' + p1KiTotals + "/1200";


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

                        var propAtk2 = {atk: newP2Atk};
                        var propDef2 = {defend: newP2Def};
                        var propAuraAtk2 = {atkaura: newP2AuraAtk};
                        var propAuraDef2 = {defaura: newP2AuraDef};
                        var propSpd2 = {speed: newP2Spd};

                        $.extend(rosterObject.fighters[p2id - 1], propAtk2);
                        $.extend(rosterObject.fighters[p2id - 1], propDef2);
                        $.extend(rosterObject.fighters[p2id - 1], propAuraAtk2);
                        $.extend(rosterObject.fighters[p2id - 1], propAuraDef2);
                        $.extend(rosterObject.fighters[p2id - 1], propSpd2);

                        //Damage Calculator
                        var damage = Math.round(225 * (rosterObject.fighters[p1Uniqueid - 1].atk / rosterObject.fighters[p2id - 1].defend));
                        p2HPTotals -= damage;
                        var p1FighterNameDiv = document.getElementById("charNameHeader1").innerText;
                        var p1FighterMoveDiv = document.getElementById("p1MoveUlt").innerText;
                        var textBoxDiv = document.getElementById('textBox');
                        textBoxDiv.innerHTML += p1FighterNameDiv + " used " + p1FighterMoveDiv + " and did " + damage + " in damage!<br>" + player2Name + " has " + p2HPTotals + " HP remaining!<br>";

                        if (p2HPTotals <= 0) {
                            p2HPTotals = 0;
                            var p1FighterNameDiv = document.getElementById("charNameHeader1").innerText;
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += p1FighterNameDiv + " wins the fight!<br>";
                            textBoxDiv.innerHTML += "Game will reload in 5 seconds.<br>";
                            setTimeout(function () {
                                window.location.reload(true);
                            }, 5000);
                        }
                        var P2HPBarWidth = (p2HPTotals / 1200) * 300;
                        p2HP.style.width = P2HPBarWidth + "px";
                        var hpHeader2 = document.getElementById("hpHeader2");
                        hpHeader2.textContent = 'HP ' + p2HPTotals + "/1200";

                        if ((overallTurnCounter >= 1) && (player1TurnCounter == player2TurnCounter) && (rosterObject.fighters[p1Uniqueid - 1].speed > rosterObject.fighters[p2Uniqueid - 1].speed)) {
                            overallTurnCounter += 1;
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += "Turn #" + overallTurnCounter + "<br>";
                            document.getElementById('battle1').style.pointerEvents = 'auto';
                            document.getElementById('battle2').style.pointerEvents = 'none';
                        } else if ((overallTurnCounter >= 1) && (player1TurnCounter == player2TurnCounter) && (rosterObject.fighters[p1Uniqueid - 1].speed <= rosterObject.fighters[p2Uniqueid - 1].speed)) {
                            overallTurnCounter += 1;
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += "Turn #" + overallTurnCounter + "<br>";
                            document.getElementById('battle1').style.pointerEvents = 'none';
                            document.getElementById('battle2').style.pointerEvents = 'auto';
                        } else {
                        }
                    }else {}
                });

                // PLAYER 2 BUTTONS

                $('#p2Move1').click(function () {
                    if ((p2Move1Selection == "Rasengan" || "Chidori" || "Kamehameha" || "Galick Gun" || "Force Push" || "Force Choke" || "Death Beam" || "Lightning Blade" || "Spirit Gun" || "Spirit Sword" || "Heaven-Piercing Ice Wall") && (p2KiTotals >= 250)) {

                        document.getElementById('battle1').style.pointerEvents = 'auto';
                        document.getElementById('battle2').style.pointerEvents = 'none';


                        //P2 Stat Changes    
                        p2AtkCounter += 2;
                        p2AuraAtkCounter += 2;
                        p2DefCounter += 0;
                        p2AuraDefCounter += 0;
                        p2SpdCounter += -2;


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


                        var propAtk2 = {atk: newP2Atk};
                        var propDef2 = {defend: newP2Def};
                        var propAuraAtk2 = {atkaura: newP2AuraAtk};
                        var propAuraDef2 = {defaura: newP2AuraDef};
                        var propSpd2 = {speed: newP2Spd};

                        $.extend(rosterObject.fighters[p2id - 1], propAtk2);
                        $.extend(rosterObject.fighters[p2id - 1], propDef2);
                        $.extend(rosterObject.fighters[p2id - 1], propAuraAtk2);
                        $.extend(rosterObject.fighters[p2id - 1], propAuraDef2);
                        $.extend(rosterObject.fighters[p2id - 1], propSpd2);

                        p2UniqueSpd += p2SpdCounter;
                        player2TurnCounter += 1;
                        //Ki Set Up
                        p2KiTotals -= 250;
                        var P2KiBarWidth = (p2KiTotals / 1200) * 300;
                        p2Ki.style.width = P2KiBarWidth + "px";

                        kiHeader2.textContent = 'KI ' + p2KiTotals + "/1200";
                        //Damage Calculator
                        var damage = Math.round(75 * ((rosterObject.fighters[p2id - 1].atkaura) / (rosterObject.fighters[p1Uniqueid - 1].defaura)));
                        p1HPTotals -= damage;
                        var p1FighterNameDiv = document.getElementById("charNameHeader1").innerText;
                        var p2FighterNameDiv = document.getElementById("charNameHeader2").innerText;
                        var p2FighterMoveDiv = document.getElementById("p2Move1").innerText;
                        var textBoxDiv = document.getElementById('textBox');
                        textBoxDiv.innerHTML += p2FighterNameDiv + " used " + p2FighterMoveDiv + " and did " + damage + " in damage!<br>" + p1FighterNameDiv + " has " + p1HPTotals + " HP remaining!<br>";

                        if (p1HPTotals <= 0) {
                            p1HPTotals = 0;
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += res.name + " wins the fight!<br>";
                            textBoxDiv.innerHTML += "Game will reload in 5 seconds.<br>";
                            setTimeout(function () {
                                window.location.reload(true);
                            }, 5000);
                        }


                        var P1HPBarWidth = (p1HPTotals / 1200) * 300;
                        var p1HP = document.getElementById("p1Health");
                        p1HP.style.width = P1HPBarWidth + "px";
                        var hpHeader1 = document.getElementById("hpHeader1");
                        hpHeader1.textContent = 'HP ' + p1HPTotals + "/1200";

                        if ((overallTurnCounter >= 1) && (player1TurnCounter == player2TurnCounter) && (rosterObject.fighters[p1Uniqueid - 1].speed > rosterObject.fighters[p2Uniqueid - 1].speed)) {
                            overallTurnCounter += 1;
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += "Turn #" + overallTurnCounter + "<br>";
                            document.getElementById('battle1').style.pointerEvents = 'auto';
                            document.getElementById('battle2').style.pointerEvents = 'none';
                        } else if ((overallTurnCounter >= 1) && (player1TurnCounter == player2TurnCounter) && (rosterObject.fighters[p1Uniqueid - 1].speed <= rosterObject.fighters[p2Uniqueid - 1].speed)) {
                            overallTurnCounter += 1;
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += "Turn #" + overallTurnCounter + "<br>";
                            document.getElementById('battle1').style.pointerEvents = 'none';
                            document.getElementById('battle2').style.pointerEvents = 'auto';
                        } else {
                        }
                    } else if ((p2Move1Selection == "Krypton Rush" || "Omni-Style Rush" || "Full Force Punch" || "Metal Mash" || "Tornado Fist" || "Scream's Rage" || "Rose Whip" || "Speed Slice" || "New Hampshire Smash" || "Explosive Punch" || "Cane Hook Slash" || "Clone Explosion Jutsu" || "Barrage of Arrows" || "Samurai Slashing" || "Scarabs Scurrying" || "ODM Gear" || "Fissure Kick") && (p2KiTotals >= 250)) {

                        document.getElementById('battle1').style.pointerEvents = 'auto';
                        document.getElementById('battle2').style.pointerEvents = 'none';


                        //P2 Stat Changes    
                        p2AtkCounter += 2;
                        p2AuraAtkCounter += 2;
                        p2DefCounter += 0;
                        p2AuraDefCounter += 0;
                        p2SpdCounter += -2;


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


                        var propAtk2 = {atk: newP2Atk};
                        var propDef2 = {defend: newP2Def};
                        var propAuraAtk2 = {atkaura: newP2AuraAtk};
                        var propAuraDef2 = {defaura: newP2AuraDef};
                        var propSpd2 = {speed: newP2Spd};

                        $.extend(rosterObject.fighters[p2id - 1], propAtk2);
                        $.extend(rosterObject.fighters[p2id - 1], propDef2);
                        $.extend(rosterObject.fighters[p2id - 1], propAuraAtk2);
                        $.extend(rosterObject.fighters[p2id - 1], propAuraDef2);
                        $.extend(rosterObject.fighters[p2id - 1], propSpd2);

                        p2UniqueSpd += p2SpdCounter;
                        player2TurnCounter += 1;
                        //Ki Set Up
                        p2KiTotals -= 250;
                        var P2KiBarWidth = (p2KiTotals / 1200) * 300;
                        p2Ki.style.width = P2KiBarWidth + "px";
                        kiHeader2.textContent = 'KI ' + p2KiTotals + "/1200";
                        //Damage Calculator
                        var damage = Math.round(75 * ((rosterObject.fighters[p2id - 1].atk) / (rosterObject.fighters[p1Uniqueid - 1].defend)));
                        p1HPTotals -= damage;
                        var p1FighterNameDiv = document.getElementById("charNameHeader1").innerText;
                        var p2FighterNameDiv = document.getElementById("charNameHeader2").innerText;
                        var p2FighterMoveDiv = document.getElementById("p2Move1").innerText;
                        var textBoxDiv = document.getElementById('textBox');
                        textBoxDiv.innerHTML += p2FighterNameDiv + " used " + p2FighterMoveDiv + " and did " + damage + " in damage!<br>" + p1FighterNameDiv + " has " + p1HPTotals + " HP remaining!<br>";

                        if (p1HPTotals <= 0) {
                            p1HPTotals = 0;
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += res.name + " wins the fight!<br>";
                            textBoxDiv.innerHTML += "Game will reload in 5 seconds.<br>";
                            setTimeout(function () {
                                window.location.reload(true);
                            }, 5000);
                        }


                        var P1HPBarWidth = (p1HPTotals / 1200) * 300;
                        var p1HP = document.getElementById("p1Health");
                        p1HP.style.width = P1HPBarWidth + "px";
                        var hpHeader1 = document.getElementById("hpHeader1");
                        hpHeader1.textContent = 'HP ' + p1HPTotals + "/1200";

                        if ((overallTurnCounter >= 1) && (player1TurnCounter == player2TurnCounter) && (rosterObject.fighters[p1Uniqueid - 1].speed > rosterObject.fighters[p2Uniqueid - 1].speed)) {
                            overallTurnCounter += 1;
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += "Turn #" + overallTurnCounter + "<br>";
                            document.getElementById('battle1').style.pointerEvents = 'auto';
                            document.getElementById('battle2').style.pointerEvents = 'none';
                        } else if ((overallTurnCounter >= 1) && (player1TurnCounter == player2TurnCounter) && (rosterObject.fighters[p1Uniqueid - 1].speed <= rosterObject.fighters[p2Uniqueid - 1].speed)) {
                            overallTurnCounter += 1;
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += "Turn #" + overallTurnCounter + "<br>";
                            document.getElementById('battle1').style.pointerEvents = 'none';
                            document.getElementById('battle2').style.pointerEvents = 'auto';
                        } else {
                        }
                    } else if (p2KiTotals < 250) {
                        var textBoxDiv = document.getElementById('textBox');
                        textBoxDiv.innerHTML += "You don't have enough Ki to use this!! <br>";
                    }
                });


                $('#p2Move2').click(function () {
                    if ((p2Move2Selection == "Uzumaki Barrage" || "Barrage of Lions" || "Dragon Fist" || "Batarang" || "Star Saber" || "Nova Strike" || "G Force Punch" || "Spirit Gun Fist" | "Spirit Kick" || "Fist of the Mortal Flame" || "Detroit Smash" || "Explosive Kick" || "Boomerang Bash" || "Speed Slice" || "Demonic Dash" || "Attack Titan") && (p2KiTotals >= 325)) {

                        document.getElementById('battle1').style.pointerEvents = 'auto';
                        document.getElementById('battle2').style.pointerEvents = 'none';

                        //P2 Stat Changes    
                        p2AtkCounter += 0;
                        p2AuraAtkCounter += 0;
                        p2DefCounter += 0;
                        p2AuraDefCounter += 0;
                        p2SpdCounter += 0;


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

                        var propAtk2 = {atk: newP2Atk};
                        var propDef2 = {defend: newP2Def};
                        var propAuraAtk2 = {atkaura: newP2AuraAtk};
                        var propAuraDef2 = {defaura: newP2AuraDef};
                        var propSpd2 = {speed: newP2Spd};

                        $.extend(rosterObject.fighters[p2id - 1], propAtk2);
                        $.extend(rosterObject.fighters[p2id - 1], propDef2);
                        $.extend(rosterObject.fighters[p2id - 1], propAuraAtk2);
                        $.extend(rosterObject.fighters[p2id - 1], propAuraDef2);
                        $.extend(rosterObject.fighters[p2id - 1], propSpd2);

                        player2TurnCounter += 1;
                        //Ki Set Up
                        p2KiTotals -= 325;
                        var P2KiBarWidth = (p2KiTotals / 1200) * 300;
                        p2Ki.style.width = P2KiBarWidth + "px";
                        kiHeader2.textContent = 'KI ' + p2KiTotals + "/1200";

                        //Damage Calculator
                        var damage = Math.round(125 * ((rosterObject.fighters[p2id - 1].atk) / (rosterObject.fighters[p1Uniqueid - 1].defend)));
                        p1HPTotals -= damage;
                        var p1FighterNameDiv = document.getElementById("charNameHeader1").innerText;
                        var p2FighterNameDiv = document.getElementById("charNameHeader2").innerText;
                        var p2FighterMoveDiv = document.getElementById("p2Move2").innerText;
                        var textBoxDiv = document.getElementById('textBox');
                        textBoxDiv.innerHTML += p2FighterNameDiv + " used " + p2FighterMoveDiv + " and did " + damage + " in damage!<br>" + p1FighterNameDiv + " has " + p1HPTotals + " HP remaining!<br>";

                        if (p1HPTotals <= 0) {
                            p1HPTotals = 0
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += res.name + " wins the fight!<br>";
                            textBoxDiv.innerHTML += "Game will reload in 5 seconds.<br>";
                            setTimeout(function () {
                                window.location.reload(true);
                            }, 5000);
                        }

                        var P1HPBarWidth = (p1HPTotals / 1200) * 300;
                        var p1HP = document.getElementById("p1Health");
                        p1HP.style.width = P1HPBarWidth + "px";
                        var hpHeader1 = document.getElementById("hpHeader1");
                        hpHeader1.textContent = 'HP ' + p1HPTotals + "/1200";


                        if ((overallTurnCounter >= 1) && (player1TurnCounter == player2TurnCounter) && (rosterObject.fighters[p1Uniqueid - 1].speed > rosterObject.fighters[p2Uniqueid - 1].speed)) {
                            overallTurnCounter += 1;
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += "Turn #" + overallTurnCounter + "<br>";
                            document.getElementById('battle1').style.pointerEvents = 'auto';
                            document.getElementById('battle2').style.pointerEvents = 'none';
                        } else if ((overallTurnCounter >= 1) && (player1TurnCounter == player2TurnCounter) && (rosterObject.fighters[p1Uniqueid - 1].speed <= rosterObject.fighters[p2Uniqueid - 1].speed)) {
                            overallTurnCounter += 1;
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += "Turn #" + overallTurnCounter + "<br>";
                            document.getElementById('battle1').style.pointerEvents = 'none';
                            document.getElementById('battle2').style.pointerEvents = 'auto';
                        } else {
                        }
                    } else if ((p2Move2Selection == "Dirty Fireworks" || "Heat Vision" || "Force Throw" || "Force Lightning" || "Requiem Blaster" || "Earth Style: Mud Wall" || "Seed of the Death Plant" || "Wall of Flames" || "Bentley's Brave Byte" || "Tsukuyomi" || "Crimson Ball Wave") && (p2KiTotals >= 325)) {

                        document.getElementById('battle1').style.pointerEvents = 'auto';
                        document.getElementById('battle2').style.pointerEvents = 'none';

                        //P2 Stat Changes    
                        p2AtkCounter += 0;
                        p2AuraAtkCounter += 0;
                        p2DefCounter += 0;
                        p2AuraDefCounter += 0;
                        p2SpdCounter += 0;


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

                        var propAtk2 = {atk: newP2Atk};
                        var propDef2 = {defend: newP2Def};
                        var propAuraAtk2 = {atkaura: newP2AuraAtk};
                        var propAuraDef2 = {defaura: newP2AuraDef};
                        var propSpd2 = {speed: newP2Spd};

                        $.extend(rosterObject.fighters[p2id - 1], propAtk2);
                        $.extend(rosterObject.fighters[p2id - 1], propDef2);
                        $.extend(rosterObject.fighters[p2id - 1], propAuraAtk2);
                        $.extend(rosterObject.fighters[p2id - 1], propAuraDef2);
                        $.extend(rosterObject.fighters[p2id - 1], propSpd2);

                        player2TurnCounter += 1;
                        //Ki Set Up
                        p2KiTotals -= 325;
                        var P2KiBarWidth = (p2KiTotals / 1200) * 300;
                        p2Ki.style.width = P2KiBarWidth + "px";
                        kiHeader2.textContent = 'KI ' + p2KiTotals + "/1200";

                        //Damage Calculator
                        var damage = Math.round(125 * ((rosterObject.fighters[p2id - 1].atkaura) / (rosterObject.fighters[p1Uniqueid - 1].defaura)));
                        p1HPTotals -= damage;
                        var p1FighterNameDiv = document.getElementById("charNameHeader1").innerText;
                        var p2FighterNameDiv = document.getElementById("charNameHeader2").innerText;
                        var p2FighterMoveDiv = document.getElementById("p2Move2").innerText;
                        var textBoxDiv = document.getElementById('textBox');
                        textBoxDiv.innerHTML += p2FighterNameDiv + " used " + p2FighterMoveDiv + " and did " + damage + " in damage!<br>" + p1FighterNameDiv + " has " + p1HPTotals + " HP remaining!<br>";

                        if (p1HPTotals <= 0) {
                            p1HPTotals = 0
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += res.name + " wins the fight!<br>";
                            textBoxDiv.innerHTML += "Game will reload in 5 seconds.<br>";
                            setTimeout(function () {
                                window.location.reload(true);
                            }, 5000);
                        }

                        var P1HPBarWidth = (p1HPTotals / 1200) * 300;
                        var p1HP = document.getElementById("p1Health");
                        p1HP.style.width = P1HPBarWidth + "px";
                        var hpHeader1 = document.getElementById("hpHeader1");
                        hpHeader1.textContent = 'HP ' + p1HPTotals + "/1200";


                        if ((overallTurnCounter >= 1) && (player1TurnCounter == player2TurnCounter) && (rosterObject.fighters[p1Uniqueid - 1].speed > rosterObject.fighters[p2Uniqueid - 1].speed)) {
                            overallTurnCounter += 1;
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += "Turn #" + overallTurnCounter + "<br>";
                            document.getElementById('battle1').style.pointerEvents = 'auto';
                            document.getElementById('battle2').style.pointerEvents = 'none';
                        } else if ((overallTurnCounter >= 1) && (player1TurnCounter == player2TurnCounter) && (rosterObject.fighters[p1Uniqueid - 1].speed <= rosterObject.fighters[p2Uniqueid - 1].speed)) {
                            overallTurnCounter += 1;
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += "Turn #" + overallTurnCounter + "<br>";
                            document.getElementById('battle1').style.pointerEvents = 'none';
                            document.getElementById('battle2').style.pointerEvents = 'auto';
                        } else {
                        }
                    } else if (p2KiTotals < 325) {
                        var textBoxDiv = document.getElementById('textBox');
                        textBoxDiv.innerHTML += "You don't have enough Ki to use this!! <br>";
                    }
                });


                $('#p2Move3').click(function () {
                    if ((p2Move3Selection == "Toad Summoning" || "Snake Summoning" || "Ice Breath" || "Mind Trick" || "Death Wave" || "Force Choke" || "Spirit Wave" || "Spirit Sword Javelin" || "Sword of Darkness Flame" || "Black Whip" || "Reverse Explosion" || "Flashfreeze Heatwave" || "Amaterasu" || "Eye Beams" || "WarHammer Titan") && (p2KiTotals >= 750)) {

                        document.getElementById('battle1').style.pointerEvents = 'auto';
                        document.getElementById('battle2').style.pointerEvents = 'none';


                        //P2 Stat Changes    
                        p2AtkCounter += 0;
                        p2AuraAtkCounter += 0;
                        p2DefCounter += 2;
                        p2AuraDefCounter += 2;
                        p2SpdCounter += -1;


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


                        var propAtk2 = {atk: newP2Atk};
                        var propDef2 = {defend: newP2Def};
                        var propAuraAtk2 = {atkaura: newP2AuraAtk};
                        var propAuraDef2 = {defaura: newP2AuraDef};
                        var propSpd2 = {speed: newP2Spd};

                        $.extend(rosterObject.fighters[p2id - 1], propAtk2);
                        $.extend(rosterObject.fighters[p2id - 1], propDef2);
                        $.extend(rosterObject.fighters[p2id - 1], propAuraAtk2);
                        $.extend(rosterObject.fighters[p2id - 1], propAuraDef2);
                        $.extend(rosterObject.fighters[p2id - 1], propSpd2);

                        p2UniqueSpd += p2SpdCounter;
                        player2TurnCounter += 1;
                        //Ki Set Up
                        p2KiTotals -= 750;
                        var P2KiBarWidth = (p2KiTotals / 1200) * 300;
                        p2Ki.style.width = P2KiBarWidth + "px";
                        kiHeader2.textContent = 'KI ' + p2KiTotals + "/1200";

                        //Damage Calculator
                        var damage = Math.round(175 * ((rosterObject.fighters[p2id - 1].atkaura) / (rosterObject.fighters[p1Uniqueid - 1].defaura)));
                        p1HPTotals -= damage;
                        var p1FighterNameDiv = document.getElementById("charNameHeader1").innerText;
                        var p2FighterNameDiv = document.getElementById("charNameHeader2").innerText;
                        var p2FighterMoveDiv = document.getElementById("p2Move3").innerText;
                        var textBoxDiv = document.getElementById('textBox');
                        textBoxDiv.innerHTML += p2FighterNameDiv + " used " + p2FighterMoveDiv + " and did " + damage + " in damage!<br>" + p1FighterNameDiv + " has " + p1HPTotals + " HP remaining!<br>";

                        if (p1HPTotals <= 0) {
                            p1HPTotals = 0;
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += res.name + " wins the fight!<br>";
                            textBoxDiv.innerHTML += "Game will reload in 5 seconds.<br>";
                            setTimeout(function () {
                                window.location.reload(true);
                            }, 5000);
                        }

                        var P1HPBarWidth = (p1HPTotals / 1200) * 300;
                        var p1HP = document.getElementById("p1Health");
                        p1HP.style.width = P1HPBarWidth + "px";
                        var hpHeader1 = document.getElementById("hpHeader1");
                        hpHeader1.textContent = 'HP ' + p1HPTotals + "/1200";


                        if ((overallTurnCounter >= 1) && (player1TurnCounter == player2TurnCounter) && (rosterObject.fighters[p1Uniqueid - 1].speed > rosterObject.fighters[p2Uniqueid - 1].speed)) {
                            overallTurnCounter += 1;
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += "Turn #" + overallTurnCounter + "<br>";
                            document.getElementById('battle1').style.pointerEvents = 'auto';
                            document.getElementById('battle2').style.pointerEvents = 'none';
                        } else if ((overallTurnCounter >= 1) && (player1TurnCounter == player2TurnCounter) && (rosterObject.fighters[p1Uniqueid - 1].speed <= rosterObject.fighters[p2Uniqueid - 1].speed)) {
                            overallTurnCounter += 1;
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += "Turn #" + overallTurnCounter + "<br>";
                            document.getElementById('battle1').style.pointerEvents = 'none';
                            document.getElementById('battle2').style.pointerEvents = 'auto';
                        } else {
                        }
                    } else if ((p2Move3Selection == "Kaioken Triple Attack" || "Infinite Break" || "Cape Cover" || "Lightsaber Boomerang" || "Skyboom Shield" || "Primary Lotus" || "Afterimage" || "Ojigi Plant" || "Murray's Manhandling" || "Saber Slash" || "Bomb-Slash Combo" || "Parry" || "Sacred Energy Armor") && (p2KiTotals >= 750)) {


                        document.getElementById('battle1').style.pointerEvents = 'auto';
                        document.getElementById('battle2').style.pointerEvents = 'none';


                        //P2 Stat Changes    
                        p2AtkCounter += 0;
                        p2AuraAtkCounter += 0;
                        p2DefCounter += 2;
                        p2AuraDefCounter += 2;
                        p2SpdCounter += -1;


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


                        var propAtk2 = {atk: newP2Atk};
                        var propDef2 = {defend: newP2Def};
                        var propAuraAtk2 = {atkaura: newP2AuraAtk};
                        var propAuraDef2 = {defaura: newP2AuraDef};
                        var propSpd2 = {speed: newP2Spd};

                        $.extend(rosterObject.fighters[p2id - 1], propAtk2);
                        $.extend(rosterObject.fighters[p2id - 1], propDef2);
                        $.extend(rosterObject.fighters[p2id - 1], propAuraAtk2);
                        $.extend(rosterObject.fighters[p2id - 1], propAuraDef2);
                        $.extend(rosterObject.fighters[p2id - 1], propSpd2);

                        p2UniqueSpd += p2SpdCounter;
                        player2TurnCounter += 1;
                        //Ki Set Up
                        p2KiTotals -= 750;
                        var P2KiBarWidth = (p2KiTotals / 1200) * 300;
                        p2Ki.style.width = P2KiBarWidth + "px";
                        kiHeader2.textContent = 'KI ' + p2KiTotals + "/1200";

                        //Damage Calculator
                        var damage = Math.round(175 * ((rosterObject.fighters[p2id - 1].atk) / (rosterObject.fighters[p1Uniqueid - 1].defend)));
                        p1HPTotals -= damage;
                        var p1FighterNameDiv = document.getElementById("charNameHeader1").innerText;
                        var p2FighterNameDiv = document.getElementById("charNameHeader2").innerText;
                        var p2FighterMoveDiv = document.getElementById("p2Move3").innerText;
                        var textBoxDiv = document.getElementById('textBox');
                        textBoxDiv.innerHTML += p2FighterNameDiv + " used " + p2FighterMoveDiv + " and did " + damage + " in damage!<br>" + p1FighterNameDiv + " has " + p1HPTotals + " HP remaining!<br>";

                        if (p1HPTotals <= 0) {
                            p1HPTotals = 0;
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += res.name + " wins the fight!<br>";
                            textBoxDiv.innerHTML += "Game will reload in 5 seconds.<br>";
                            setTimeout(function () {
                                window.location.reload(true);
                            }, 5000);
                        }

                        var P1HPBarWidth = (p1HPTotals / 1200) * 300;
                        var p1HP = document.getElementById("p1Health");
                        p1HP.style.width = P1HPBarWidth + "px";
                        var hpHeader1 = document.getElementById("hpHeader1");
                        hpHeader1.textContent = 'HP ' + p1HPTotals + "/1200";


                        if ((overallTurnCounter >= 1) && (player1TurnCounter == player2TurnCounter) && (rosterObject.fighters[p1Uniqueid - 1].speed > rosterObject.fighters[p2Uniqueid - 1].speed)) {
                            overallTurnCounter += 1;
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += "Turn #" + overallTurnCounter + "<br>";
                            document.getElementById('battle1').style.pointerEvents = 'auto';
                            document.getElementById('battle2').style.pointerEvents = 'none';
                        } else if ((overallTurnCounter >= 1) && (player1TurnCounter == player2TurnCounter) && (rosterObject.fighters[p1Uniqueid - 1].speed <= rosterObject.fighters[p2Uniqueid - 1].speed)) {
                            overallTurnCounter += 1;
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += "Turn #" + overallTurnCounter + "<br>";
                            document.getElementById('battle1').style.pointerEvents = 'none';
                            document.getElementById('battle2').style.pointerEvents = 'auto';
                        } else {
                        }
                    }else if (p2KiTotals < 750) {
                        var textBoxDiv = document.getElementById('textBox');
                        textBoxDiv.innerHTML += "You don't have enough Ki to use this!! <br>";
                    }
                });
                $('#p2MoveUlt').click(function () {
                    if ((p2MoveUltSelection == "RasenShuriken" || "Kirin" || "Spirit Bomb" || "Final Flash" || "Solar Flare" || "Mega Melting" || "Death Ball" || "Kamui" || "SuperNova Fireworks" || "Mazoku Spirit Gun" || "Dimension Sword" || "Sinning Tree" || "Dragon of the Darkness Flame" || "Flashfire Fist - Jet Kindling" || "Susanoo" || "Necromancy" || "Sacred Energy Beam") && (p2KiTotals >= 1000)) {

                        document.getElementById('battle1').style.pointerEvents = 'auto';
                        document.getElementById('battle2').style.pointerEvents = 'none';

                        //P2 Stat Changes    
                        p2AtkCounter += -2;
                        p2AuraAtkCounter += -2;
                        p2DefCounter += -2;
                        p2AuraDefCounter += -2;
                        p2SpdCounter += -2;


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


                        var propAtk2 = {atk: newP2Atk};
                        var propDef2 = {defend: newP2Def};
                        var propAuraAtk2 = {atkaura: newP2AuraAtk};
                        var propAuraDef2 = {defaura: newP2AuraDef};
                        var propSpd2 = {speed: newP2Spd};

                        $.extend(rosterObject.fighters[p2id - 1], propAtk2);
                        $.extend(rosterObject.fighters[p2id - 1], propDef2);
                        $.extend(rosterObject.fighters[p2id - 1], propAuraAtk2);
                        $.extend(rosterObject.fighters[p2id - 1], propAuraDef2);
                        $.extend(rosterObject.fighters[p2id - 1], propSpd2);

                        p2UniqueSpd += p2SpdCounter;
                        player2TurnCounter += 1;

                        //P2 Damage and Ki/Health Adjustments
                        //Ki Set Up
                        p2KiTotals -= 1000;
                        var P2KiBarWidth = (p2KiTotals / 1200) * 300;
                        p2Ki.style.width = P2KiBarWidth + "px";
                        kiHeader2.textContent = 'KI ' + p2KiTotals + "/1200";

                        //Damage Calculator
                        var damage = Math.round(225 * ((rosterObject.fighters[p2id - 1].atkaura) / (rosterObject.fighters[p1Uniqueid - 1].defaura)));
                        p1HPTotals -= damage;
                        var p1FighterNameDiv = document.getElementById("charNameHeader1").innerText;
                        var p2FighterNameDiv = document.getElementById("charNameHeader2").innerText;
                        var p2FighterMoveDiv = document.getElementById("p2MoveUlt").innerText;
                        var textBoxDiv = document.getElementById('textBox');
                        textBoxDiv.innerHTML += p2FighterNameDiv + " used " + p2FighterMoveDiv + " and did " + damage + " in damage!<br>" + p1FighterNameDiv + " has " + p1HPTotals + " HP remaining!<br>";

                        if (p1HPTotals <= 0) {
                            p1HPTotals = 0;
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += res.name + " wins the fight!<br>";
                            textBoxDiv.innerHTML += "Game will reload in 5 seconds.<br>";
                            setTimeout(function () {
                                window.location.reload(true);
                            }, 5000);
                        }


                        var P1HPBarWidth = (p1HPTotals / 1200) * 300;
                        var p1HP = document.getElementById("p1Health");
                        p1HP.style.width = P1HPBarWidth + "px";
                        var hpHeader1 = document.getElementById("hpHeader1");
                        hpHeader1.textContent = 'HP ' + p1HPTotals + "/1200";

                        if ((overallTurnCounter >= 1) && (player1TurnCounter == player2TurnCounter) && (rosterObject.fighters[p1Uniqueid - 1].speed > rosterObject.fighters[p2Uniqueid - 1].speed)) {
                            overallTurnCounter += 1;
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += "Turn #" + overallTurnCounter + "<br>";
                            document.getElementById('battle1').style.pointerEvents = 'auto';
                            document.getElementById('battle2').style.pointerEvents = 'none';
                        } else if ((overallTurnCounter >= 1) && (player1TurnCounter == player2TurnCounter) && (rosterObject.fighters[p1Uniqueid - 1].speed <= rosterObject.fighters[p2Uniqueid - 1].speed)) {
                            overallTurnCounter += 1;
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += "Turn #" + overallTurnCounter + "<br>";
                            document.getElementById('battle1').style.pointerEvents = 'none';
                            document.getElementById('battle2').style.pointerEvents = 'auto';
                        } else {
                        }
                    } else if ((p2MoveUltSelection == "Gotham's God" || "Force Valor Rush" || "Force Defend Rush" || "Prime Reckoning" || "Time Rip" || "Force Speed Rush" || "OFA Full Cowling 100%" || "Master Thievious Raccoonus" || "Dark Side Destruction" || "The Wind Waker" || "Slayer of Aku" || "The Rumbling") && (p2KiTotals >= 1000)) {

                        document.getElementById('battle1').style.pointerEvents = 'auto';
                        document.getElementById('battle2').style.pointerEvents = 'none';

                        //P2 Stat Changes    
                        p2AtkCounter += -2;
                        p2AuraAtkCounter += -2;
                        p2DefCounter += -2;
                        p2AuraDefCounter += -2;
                        p2SpdCounter += -2;


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


                        var propAtk2 = {atk: newP2Atk};
                        var propDef2 = {defend: newP2Def};
                        var propAuraAtk2 = {atkaura: newP2AuraAtk};
                        var propAuraDef2 = {defaura: newP2AuraDef};
                        var propSpd2 = {speed: newP2Spd};

                        $.extend(rosterObject.fighters[p2id - 1], propAtk2);
                        $.extend(rosterObject.fighters[p2id - 1], propDef2);
                        $.extend(rosterObject.fighters[p2id - 1], propAuraAtk2);
                        $.extend(rosterObject.fighters[p2id - 1], propAuraDef2);
                        $.extend(rosterObject.fighters[p2id - 1], propSpd2);

                        p2UniqueSpd += p2SpdCounter;
                        player2TurnCounter += 1;

                        //P2 Damage and Ki/Health Adjustments
                        //Ki Set Up
                        p2KiTotals -= 1000;
                        var P2KiBarWidth = (p2KiTotals / 1200) * 300;
                        p2Ki.style.width = P2KiBarWidth + "px";
                        kiHeader2.textContent = 'KI ' + p2KiTotals + "/1200";

                        //Damage Calculator
                        var damage = Math.round(225 * ((rosterObject.fighters[p2id - 1].atk) / (rosterObject.fighters[p1Uniqueid - 1].defend)));
                        p1HPTotals -= damage;
                        var p1FighterNameDiv = document.getElementById("charNameHeader1").innerText;
                        var p2FighterNameDiv = document.getElementById("charNameHeader2").innerText;
                        var p2FighterMoveDiv = document.getElementById("p2MoveUlt").innerText;
                        var textBoxDiv = document.getElementById('textBox');
                        textBoxDiv.innerHTML += p2FighterNameDiv + " used " + p2FighterMoveDiv + " and did " + damage + " in damage!<br>" + p1FighterNameDiv + " has " + p1HPTotals + " HP remaining!<br>";

                        if (p1HPTotals <= 0) {
                            p1HPTotals = 0;
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += res.name + " wins the fight!<br>";
                            textBoxDiv.innerHTML += "Game will reload in 5 seconds.<br>";
                            setTimeout(function () {
                                window.location.reload(true);
                            }, 5000);
                        }

                        var P1HPBarWidth = (p1HPTotals / 1200) * 300;
                        var p1HP = document.getElementById("p1Health");
                        p1HP.style.width = P1HPBarWidth + "px";
                        var hpHeader1 = document.getElementById("hpHeader1");
                        hpHeader1.textContent = 'HP ' + p1HPTotals + "/1200";

                        if ((overallTurnCounter >= 1) && (player1TurnCounter == player2TurnCounter) && (rosterObject.fighters[p1Uniqueid - 1].speed > rosterObject.fighters[p2Uniqueid - 1].speed)) {
                            overallTurnCounter += 1;
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += "Turn #" + overallTurnCounter + "<br>";
                            document.getElementById('battle1').style.pointerEvents = 'auto';
                            document.getElementById('battle2').style.pointerEvents = 'none';
                        } else if ((overallTurnCounter >= 1) && (player1TurnCounter == player2TurnCounter) && (rosterObject.fighters[p1Uniqueid - 1].speed <= rosterObject.fighters[p2Uniqueid - 1].speed)) {
                            overallTurnCounter += 1;
                            var textBoxDiv = document.getElementById('textBox');
                            textBoxDiv.innerHTML += "Turn #" + overallTurnCounter + "<br>";
                            document.getElementById('battle1').style.pointerEvents = 'none';
                            document.getElementById('battle2').style.pointerEvents = 'auto';
                        } else {
                        }
                    } else if (p2KiTotals < 1000) {
                        var textBoxDiv = document.getElementById('textBox');
                        textBoxDiv.innerHTML += "You don't have enough Ki to use this!! <br>";
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
            var p2id = res.id;
            var p2AtkCounter = 0;
            var p2DefCounter = 0;
            var p2AuraAtkCounter = 0;
            var p2AuraDefCounter = 0;
            var p2SpdCounter = 0;
            var p1BattleDivContainer = document.getElementById("battle1");
        })
    });
    //Adds cards and all stored data to container for characters
    var container = document.querySelector("#characterSelectScreen");
    container.appendChild(card);

    $('#' + res.id + 'charSelectBtn1').click(function () {
        window.location = '#';
    });
    $('#charSelectBtn2' + res.id).click(function () {
        window.location = '#';
    });
});


