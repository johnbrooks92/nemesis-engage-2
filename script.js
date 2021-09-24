"use strict";

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
    let card = document.createElement("div");
    card.className = res.series;

    // Tried using linebreak as a let or const and it wasn't working, went with a var and reproduced through out because JS gonna JS
    var linebreak = document.createElement('br');
    card.appendChild(linebreak);


    //Adding toggle for selecting 1st character
    let label = document.createElement('button');
    label.className = "charSelBtn1";
    label.id = res.id + "charSelectBtn1";
    let p1 = document.createTextNode('P1 (Away)');
    label.appendChild(p1);
    //
    // let input = document.createElement('input');
    // input.type = "checkbox";
    // label.appendChild(input);
    //
    // let span = document.createElement('span');
    // span.className = "slider slider1";
    // span.id = "charID" + res.id;
    // label.appendChild(span);

    card.appendChild(label);

//Adding toggle for selecting 2nd character
    let label2 = document.createElement('button');
    label2.className = "charSelBtn2";
    label2.id = "charSelectBtn2" + res.id;
    let p2 = document.createTextNode('P2 (Home)');
    label2.appendChild(p2);
    

    // let input2 = document.createElement('input');
    // input2.type = "checkbox";
    // label2.appendChild(input2);
    //
    // let span2 = document.createElement('span');
    // span2.className = "slider slider2";
    // span2.id = "charID" + res.id + "extra";
    // label2.appendChild(span2);

    card.appendChild(label2);
    
    //Rendering an image element/class desgination and directing the source to read the base64 string storing the image 
    let image = document.createElement("img");
    image.src = res.img;
    image.className = "charSelectImg";
    card.appendChild(image);

    //Displaying further character Data
    let name = document.createTextNode('Name: ' + res.name + '');
    card.appendChild(name);
    var linebreak = document.createElement('br');
    card.appendChild(linebreak);

    let series = document.createTextNode('Series: ' + res.series + '');
    card.appendChild(series);
    var linebreak = document.createElement('br');
    card.appendChild(linebreak);

    let rivals = document.createTextNode('Rival(s): ' + res.rivals);
    card.appendChild(rivals);
    var linebreak = document.createElement('br');
    card.appendChild(linebreak);

    let atk = document.createTextNode('Attack: ' + res.atk);
    card.appendChild(atk);
    var linebreak = document.createElement('br');
    card.appendChild(linebreak);

    let def = document.createTextNode('Defense: ' + res.defend);
    card.appendChild(def);
    var linebreak = document.createElement('br');
    card.appendChild(linebreak);

    let aurAtk = document.createTextNode('AuraAtk: ' + res.atkaura);
    card.appendChild(aurAtk);
    var linebreak = document.createElement('br');
    card.appendChild(linebreak);

    let aurDef = document.createTextNode('AuraDef: ' + res.defaura);
    card.appendChild(aurDef);
    var linebreak = document.createElement('br');
    card.appendChild(linebreak);

    let spd = document.createTextNode('Speed: ' + res.speed);
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
        // document.getElementById('charSelectBtn2' + res.id).disabled = true;

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
                console.log(player1Series);
                console.log(res.series);

                // document.getElementById('charSelectBtn2' + res.id).disabled = false;

                
                
            }
            //Check Data is Storing Correct Value
            console.log(player1Name);
            console.log(player1Series);
            
            topRow.innerHTML += "You selected " + player1Name + " as Player 1! <br>"

            //Player 1 Info Box
            let player1InfoBox = document.createElement("div");
            player1InfoBox.id = "battle1";

            //Player 1 Character Name Render to Info Box
            var charNameHeader1 = document.createElement('h2')
            charNameHeader1.idName = "charNameHeader1" + res.name;
            let p1Name = document.createTextNode('' + res.name);
            charNameHeader1.appendChild(p1Name);
            player1InfoBox.appendChild(charNameHeader1);

            //Player 1 Character Img Render to Info Box
            let image1 = document.createElement("img");
            image1.src = res.img;
            image1.id = "p1Img";

            let p1Image = document.createElement("div");
            p1Image.id = "p1ImageDiv"
            p1Image.appendChild(image1);
            player1InfoBox.appendChild(p1Image);
            var linebreak = document.createElement('br');
            player1InfoBox.appendChild(linebreak);
            var linebreak = document.createElement('br');
            player1InfoBox.appendChild(linebreak);

            //Player1 Character 1st Move Button Render to Info Box
            var p1move1btn = document.createElement("btn")
            p1move1btn.id = "p1Move1";
            let p1move1name = document.createTextNode('' + res.moves[0]);
            p1move1btn.appendChild(p1move1name);
            player1InfoBox.appendChild(p1move1btn);
            var linebreak = document.createElement('br');
            player1InfoBox.appendChild(linebreak);
            var linebreak = document.createElement('br');
            player1InfoBox.appendChild(linebreak);

            //Player1 Character 2nd Move Button Render to Info Box
            var p1move2btn = document.createElement("btn")
            p1move2btn.id = "p1Move2";
            let p1move2name = document.createTextNode('' + res.moves[1]);
            p1move2btn.appendChild(p1move2name);
            player1InfoBox.appendChild(p1move2btn);
            var linebreak = document.createElement('br');
            player1InfoBox.appendChild(linebreak);
            var linebreak = document.createElement('br');
            player1InfoBox.appendChild(linebreak);

            //Player1 Character 3rd Move Button Render to Info Box
            var p1move3btn = document.createElement("btn")
            p1move3btn.id = "p1Move3";
            let p1move3name = document.createTextNode('' + res.moves[2]);
            p1move3btn.appendChild(p1move3name);
            player1InfoBox.appendChild(p1move3btn);
            var linebreak = document.createElement('br');
            player1InfoBox.appendChild(linebreak);
            var linebreak = document.createElement('br');
            player1InfoBox.appendChild(linebreak);

            //Player1 Character Ultimate Move Button Render to Info Box
            var p1moveUltbtn = document.createElement("btn")
            p1moveUltbtn.id = "p1MoveUlt";
            let p1moveUltname = document.createTextNode('' + res.ultimate);
            p1moveUltbtn.appendChild(p1moveUltname);
            player1InfoBox.appendChild(p1moveUltbtn);
            var linebreak = document.createElement('br');
            player1InfoBox.appendChild(linebreak);
            var linebreak = document.createElement('br');
            player1InfoBox.appendChild(linebreak);

            // Render Stats For Player 1
            var stats1 = document.createElement('h2')
            stats1.id = "stats1" + res.name;
            let p1Atk = document.createTextNode('Attack: ' + res.atk);
            stats1.appendChild(p1Atk);
            var linebreak = document.createElement('br');
            stats1.appendChild(linebreak);
            let p1Def = document.createTextNode('Defense: ' + res.defend);
            stats1.appendChild(p1Def);
            var linebreak = document.createElement('br');
            stats1.appendChild(linebreak);
            let p1AtkAura = document.createTextNode('Aura Attack: ' + res.atkaura);
            stats1.appendChild(p1AtkAura);
            var linebreak = document.createElement('br');
            stats1.appendChild(linebreak);
            let p1DefAura = document.createTextNode('Aura Defense: ' + res.defaura);
            stats1.appendChild(p1DefAura);
            var linebreak = document.createElement('br');
            stats1.appendChild(linebreak);
            let p1Spd = document.createTextNode('Speed: ' + res.speed);
            stats1.appendChild(p1Spd);
            player1InfoBox.appendChild(stats1);


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
            let battleContainer = document.querySelector("#battleScreen");
            battleContainer.appendChild(player1InfoBox);
        })


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
             console.log(player2Name);
             console.log(player2Series);


             topRow.innerHTML += "You selected " + player2Name + " as Player 2! <br>"
             topRow.innerHTML += "The battle will begin in 5 seconds! <br>"
             
            
            // Check res.series for value and change p1 and p2 background based on it.
            //Player 2 Info Box
             let player2InfoBox = document.createElement("div");
             player2InfoBox.id = "battle2";
             
             //Player 2 Character Name Render to Info Box
             var charNameHeader2 = document.createElement('h2')
             charNameHeader2.id = "charNameHeader2" + res.name;
             let p2Name = document.createTextNode('' + res.name);
             charNameHeader2.appendChild(p2Name);
             player2InfoBox.appendChild(charNameHeader2);
             
             //Player 2 HP and Aura Bar; Make sure to reset totals when fight ends
             
             
             //Player 2 Character Img Render to Info Box
             let image2 = document.createElement("img");
             image2.src = res.img;
             image2.id = "p2Img"; 
             let p2Image = document.createElement("div");
             p2Image.id = "p2ImageDiv";
             p2Image.appendChild(image2);
             player2InfoBox.appendChild(p2Image);
             var linebreak = document.createElement('br');
             player2InfoBox.appendChild(linebreak);
             var linebreak = document.createElement('br');
             player2InfoBox.appendChild(linebreak);

             //Player2 Character 1st Move Button Render to Info Box
             var p2move1btn = document.createElement("btn")
             p2move1btn.id = "p2Move1";
             let p2move1name = document.createTextNode('' + res.moves[0]);
             p2move1btn.appendChild(p2move1name);
             player2InfoBox.appendChild(p2move1btn);
             var linebreak = document.createElement('br');
             player2InfoBox.appendChild(linebreak);
             var linebreak = document.createElement('br');
             player2InfoBox.appendChild(linebreak);

             //Player2 Character 2nd Move Button Render to Info Box
             var p2move2btn = document.createElement("btn")
             p2move2btn.id = "p2Move2";
             let p2move2name = document.createTextNode('' + res.moves[1]);
             p2move2btn.appendChild(p2move2name);
             player2InfoBox.appendChild(p2move2btn);
             var linebreak = document.createElement('br');
             player2InfoBox.appendChild(linebreak);
             var linebreak = document.createElement('br');
             player2InfoBox.appendChild(linebreak);

             //Player2 Character 3rd Move Button Render to Info Box
             var p2move3btn = document.createElement("btn")
             p2move3btn.id = "p2Move3";
             let p2move3name = document.createTextNode('' + res.moves[2]);
             p2move3btn.appendChild(p2move3name);
             player2InfoBox.appendChild(p2move3btn);
             var linebreak = document.createElement('br');
             player2InfoBox.appendChild(linebreak);
             var linebreak = document.createElement('br');
             player2InfoBox.appendChild(linebreak);
             
             //Player2 Character Ultimate Move Button Render to Info Box
             var p2moveUltbtn = document.createElement("btn")
             p2moveUltbtn.id = "p2MoveUlt";
             let p2moveUltname = document.createTextNode('' + res.ultimate);
             p2moveUltbtn.appendChild(p2moveUltname);
             player2InfoBox.appendChild(p2moveUltbtn);
             var linebreak = document.createElement('br');
             player2InfoBox.appendChild(linebreak);
             var linebreak = document.createElement('br');
             player2InfoBox.appendChild(linebreak);

             // Render Stats For Player 2
             var stats2 = document.createElement('h2')
             stats2.id = "stats2" + res.name;
             let p2Atk = document.createTextNode('Attack: ' + res.atk);
             stats2.appendChild(p2Atk);
             var linebreak = document.createElement('br');
             stats2.appendChild(linebreak);
             let p2Def = document.createTextNode('Defense: ' + res.defend);
             stats2.appendChild(p2Def);
             var linebreak = document.createElement('br');
             stats2.appendChild(linebreak);
             let p2AtkAura = document.createTextNode('Aura Attack: ' + res.atkaura);
             stats2.appendChild(p2AtkAura);
             var linebreak = document.createElement('br');
             stats2.appendChild(linebreak);
             let p2DefAura = document.createTextNode('Aura Defense: ' + res.defaura);
             stats2.appendChild(p2DefAura);
             var linebreak = document.createElement('br');
             stats2.appendChild(linebreak);
             let p2Spd = document.createTextNode('Speed: ' + res.speed);
             stats2.appendChild(p2Spd);
             player2InfoBox.appendChild(stats2);

             
             //Append Player2 Info Box to battleScreen Div
             let battleContainer = document.querySelector("#battleScreen");
             battleContainer.appendChild(player2InfoBox);
             
             
             console.log(player2Series);
             console.log(player2Name);
             console.log(player2Rivals);
             
            
             
             //Add timeout delay to golle and display countdown
             // $('#characterSelectScreen').toggle();
             setTimeout(function(){ $('#characterSelectScreen').toggle(); }, 5000);
             setTimeout(function(){ $('#topRow').toggle(); }, 5000);
             setTimeout(function(){ $('#battleScreen').toggle(); }, 5000);
             setTimeout(function(){ $('#battleScreen').css({'display': 'flex'}); }, 5000);
             setTimeout(function(){ $('#battle1').toggle(); }, 5000);
             setTimeout(function(){ $('#battle1' + res.name).css({'display': 'block'}); }, 5000);
             setTimeout(function(){ $('#battle2').toggle(); }, 5000);
             setTimeout(function(){ $('#battle2' + res.name).css({'display': 'block'}); }, 5000);
             
             
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
             });
        })
    });

    //Adds cards and all stored data to container for characters
    let container = document.querySelector("#characterSelectScreen");
    container.appendChild(card);

    $('#' + res.id + 'charSelectBtn1').click(function() {
        window.location='#';
    });
    $('#charSelectBtn2' + res.id).click(function() {
        window.location='#';
    })
    
    
});

