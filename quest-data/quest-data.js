const monsters = {
    id: 'monsters',
    title: 'Interesing Diner in Klammath Falls',
    map: {
        top: '89%',
        left: '44%'
    },
    image: '../assets/klamath.jpg',
    description: `
    You enter the city of Klamath falls.  The place looks beautiful.  You stop at a folksy looking diner on the Main Street.  You have a hankering for some biscuits and gravy.  You sit at a counter seat.  The waitress comes up to you and gives you a menu.  At the top of the menu is “OUR SPECIALTY: SUSHI”.  You like sushi but you came in for buscuits and gravy and something seems odd about getting sushi at a diner in Klamath Falls.   What do you do?
    `,
    choices: [{
        id: 'sushi',
        description: 'Order the sushi.  WHAT COULD GO WRONG?',
        result: `
            As someone who can never turn down sushi, you order the sushi and wolf it down.  It doesn't take long before you realize your mistake.  A sudden, sharp pain wretches your stomach and you black out.  Your last thought is, "What was I thinking?"
        `,
        hp: -100,
        gold: -20
    }, {
        id: 'biscuits',
        description: 'Order biscuits and gravy',
        result: `
            You came in for some good ol biscuits and gravy and by god thats what you are gonna have!  You order arrives with a mountain of white sauce speckled with chuncks of "sausage".  You inhale it with a cup of terrible coffee and feel satisfied, if not slightly woozy.  You pay and leave the diner.
        `,
        hp: -10,
        gold: -10
    }, {
        id: 'run',
        description: 'Kindly get up and leave, placing 5 dollars on the counter for their trouble',
        result: `
            Coming to your senses you realize, "What kind of place has sushi so far from the sea?  And what is that rotten fishy smell coming from the kitchen?  I better just grab something on the road getting out of this weird town."  As you walk out the door, you find a 20 dollar bill on the ground.  
        `,
        hp: 0,
        gold: 15
    }]
};

const dragon = {
    id: 'dragon',
    title: 'A Beach Bar Detour',
    map: {
        top: '57%',
        left: '67%'
    },
    image: '../assets/beach.jpg',
    audio: 'dragon.wav',
    action: 'dragon-growl.aiff',
    description: `
    You've been riding your bike for 10 straight days going up the coast.  It is beautiful but the isolation and fatigue is getting to you.  You come to a small beach town.  Its picturesque image is lovely to behold.  Ahead, you see a sign that says “Tavern”.  You are tired and thirsty and would love to see some people. You stroll in and sit at the bar.  A stranger sits next to you and offers to buy you a drink.  What do you do?
    `,
    choices: [{
        id: 'accept',
        description: 'Hell yeah! Buy me that drink!',
        result: `
            You gladly accept the kind gesture.  The man winks at the bartender and puts up his index finger.  You are presented with a mysterious glass of brown liquor.  Without thinking, you knock it back.  As the jukebox starts playing a honky tonk song, you slowly fade out to darkness.  You wake up on the beach with empty pockets and a raging headache.  Hopefully you can find your bike and get out of this place!
        `,
        hp: -15,
        gold: -20
    }, {
        id: 'decline',
        description: 'Thanks for the offer but i will buy my own drink',
        result: `
            You politely decline the offer of a drink but you order yourself a beer.  After chatting with the stranger you discover that he is the cousin of your college roomate and you find out some hilarous stories about your 'holier than thou' former roommate.  
        `,
        hp: 0,
        gold: -5
    }, {
        id: 'buy',
        description: 'Decline the offer but instead offer to buy the stranger a drink',
        result: `
            You are touched by the generous offer to buy you a drink by a complete stranger.  Overcome with emotion, you instead offer to buy the stranger and everyone in the bar a drink.  Everyone is delighted with the free drinks and shower you with praise!  The bartender, touched by your offer to buy everyone a drink, adds you to his will and you become the sole heir to his fortune which include property and a boat.
        `,
        hp: 0,
        gold: 1000
    }]
};

const treasure = {
    id: 'treasure',
    title: 'A Mountain of Choice',
    map: {
        top: '31%',
        left: '5%'
    },
    image: '../assets/mountain.jpg',
    audio: 'treasure-chests.wav',
    action: 'chest-opening.wav',
    description: `
        You've always wanted to climb a mountain.  You finally get your chance!  Your tour around the state of Oregon has brought you face to face with a majestic peak.  You enter mountain climbing guided tour office and are presented with several options.  Which do you choose?
    `,
    choices: [{
        id: 'solo',
        description: 'A solo climb!  You are feeling it!',
        result: 'You tell the guide, "I think I got this!  I have wanted to do this my entire life and now is my chance!  You pay the attendant 20 dollars for some ropes and set out for the mountain.  3 years later, your frozen corpse is descovered by some hikers from Finland.  Whoops. ',
        hp: -100,
        gold: -20
    }, {
        id: 'guided',
        description: 'I will take a guided climb please',
        result: 'Although you feel invincible, you realize that the smart choice is to take the guided tour with the expert.  Besides, you have never done this before, what are you, CRAZY??  The tour guide takes you up the easy route on the mountain and you discover that you made the correct decision.  At one point, you slip and tumbler and, if not for the rope and guide, you would have taken one last flight.  Great pictures from the summit though!  Checked box on the bucket list',
        hp: 0,
        gold: -50
    }, {
        id: 'chairlift',
        description: 'Maybe I will take the chair lift this time',
        result: 'The final option on the list is to buy a 5 dollar ride on the chair lift.  It does not take you to the summit but it gets you pretty close.  Also, there is free coffee and doughnuts at the observation deck at the top of the lift.  You get some good pictures and some free food and coffee. Not bad!',
        hp: 10,
        gold: -5
    }]
};

const quests = [
    monsters, 
    treasure,
    dragon
];


export default quests;