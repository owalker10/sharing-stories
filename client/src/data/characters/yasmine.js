import React from 'react'

export default {
    name: 'Yasmine',
    portrait: require('../../assets/people/yasmine.png'),
    intro: ["Howdy! My name is Yasmine and I am of Moroccan origin, but was born and raised in Austin TX.",
        "I’m 20 years old and a junior in college studying biology!  I love to make art in many different forms including painting, calligraphy, pottery, henna tattoos-- the list goes on!"],
    sports: {
        text: [<span>The most popular sport in Morocco is <b>soccer</b>, no other sport gets as much love as soccer does. Moroccans take pride in their national soccer team. </span>],
        images: [require('../../assets/sports/soccer.png')]
    },
    food: {
        text: [<span>My favorite Moroccan dish is <b>Couscous</b>! Couscous is like tiny little balls of pasta made of grain that is topped with a meat and vegetable stew most of the time containing carrots, squash, zucchini, lamb or chicken. It also happens to be one of the most famous dishes from the Moroccan cuisine.</span>,
        <span>Another famous dish is <b>tagine</b> which is highly perfected in the way it's served. Tagine is a traditional stew made with either lamb or chicken meat, topped with veggies and is eaten with bread, no utensils! Tagine is served in a cone shaped ceramic pot.</span>,
        <span>Fun fact: another side dish Moroccans enjoy is cooked snails! (they're actually very yummy)
        </span>],
        images: [require('../../assets/food/couscous.png'),require('../../assets/food/tagine.png'),require('../../assets/food/cooked_snails.png')]
    },
    clothing: {
        text: [<span>One of the most common pieces of clothing for women and men to wear is a <b>jelaba</b>, which is like a gown with a hood that is worn upon going out. It has elements of elegance and modesty and is worn everywhere is Morocco!</span>],
        images: [require('../../assets/clothing/Jelaba.png')]
    },
    holidays: {
        text: [<span>With a population that is majority Muslim, many people from Morocco celebrate the Islamic holidays <b>Ramadan</b> and <b>Eid</b>.</span>,
        <span>Ramadan is a month where Muslims fast from sunrise to sundown and take part in spiritual rejuvenation. Following Ramadan is a celebratory holiday called Eid, which is also known as "the festival of breaking fast". Muslims attend prayer, wear their nicest clothes, eat great food, and celebrate with friends and family!</span>],
        images: []
    },
    map: {
        text: [<span><b>Morocco</b> is a country in North Africa and has a population of over 36 million. Together with Spain, it forms the Strait of Gibraltar. <b>Hover over the map to see a closer picture!</b></span>,
            <span>Morocco's predominant religion is <b>Islam</b>, and its official languages are <b>Arabic</b> and <b>Berber</b>. The Moroccan dialect of Arabic, referred to as Darija, and French are also widely spoken. Moroccan culture is a blend of Berber, Arab, Sephardi Jews, West African and European influences.</span>],
        images: [require('../../assets/map/morocco_far.png'),require('../../assets/map/morocco_close.png')]
    }
}