import React from 'react'

export default {
    name: 'Lizzy',
    intro: ["Hi! My name is Lizzy and I grew up in Houston, Texas. My parents came to America from Singapore and Malaysia.",
        "Singapore and Malaysia are small countries in Southeast Asia. There are a lot of things that make these countries a little different to America, like the food, clothing, and sports! Click to find out more!"],
    sports: {
        text: [<span>Some of the most popular sports in Singapore and Malaysia are <b>football</b>, <b>rugby</b>, and <b>badminton</b>. Football in southeast Asia is the same as <b>soccer</b> we play in America!</span>,
        <span>Rugby is also played in many countries around the world! Two teams try to score by running with the ball past the goal line or kicking it.</span>,
        <span>My mom’s favorite sport was badminton. It is like tennis but the racquet is smaller and they are hitting something called a shuttle instead of a ball.</span>],
        images: [require('../../assets/sports/soccer.png'),require('../../assets/sports/rugby.png'),require('../../assets/sports/badminton.png')]
    },
    food: {
        text: [<span><b>Chili crab</b> is the national dish of Singapore! It is crab cooked in a delicious tomato and chili sauce.</span>,
        <span>My favorite food from Singapore and Malaysia is <b>satay</b>. It is chicken or beef grilled on a stick which makes it fun to eat!</span>,
        <span>The best thing to eat for breakfast in Singapore is <b>kaya toast with kopi</b>. Kaya is a sweet coconut pandan spread that is green! It is normally served with coffee which people in Singapore call kopi.</span>,
        <span><b>Nasi Lemak</b> is a very popular dish in Malaysia. It is coconut rice with toppings like meat, egg, or spicy chili.</span>],
        images: [require('../../assets/food/chili_crab.png'),require('../../assets/food/kaya_toast.png'),require('../../assets/food/nasi_lemak.png'),require('../../assets/food/satay.png')]
    },
    map: {
        text: [<span>Malaysia are Singapore are both countries in Southeast Asia. <b>Hover over the map to see a closer picture!</b></span>,
            <span><b>Malaysia</b> is made up of Peninsular Malaysia and East Malaysia. It's population is about half indigenous Malays, a quarter Chinese, and various other South Asian ethnicities.</span>,
            <span><b>Singapore</b> is a little island that's both a city and a state. It's 450 times smaller than Malaysia! The people are predominantly Chinese but many are also Malay or Indian. People speak many different dialects and come from all sorts of places!</span>],
        images: [require('../../assets/map/ms_far.png'),require('../../assets/map/ms_close.png')]
    }
}