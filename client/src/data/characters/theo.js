import React from 'react'

export default {
    name: 'Theo',
    portrait: require('../../assets/people/theo.png'),
    intro: ["Hi! My name is Theo and I’m from Austin, Texas, but my parents weren’t born in America.",
        "My mom comes from England and my dad comes from Nigeria! They met in London - and came to New York to have me. My family and I have been around the globe!"],
    sports: {
        text: [<span>My parents bonded over <b>soccer</b>. Even though they were from such different places, soccer was super popular in both England and Nigeria and it gave them a common interest.</span>,
            <span>Now, every weekend, we tune in to cheer for our favorite British soccer team - Manchester United!</span>
        ],
        images: [require('../../assets/sports/soccer.png')]
    },
    food: {
        text: [<span>My favorite Nigerian food is <b>suya</b>, which is spicy beef, skewered and slow roasted. I grew up making it with my dad on special occasions, so I have really good memories of it!</span>,
        <span>Another Nigerian food I really like is <b>jollof</b> rice, rice simmered in spices and tomato. It’s easy to make and dangerous, because once I have a bite I always finish my plate and ask for seconds.</span>],
        images: [require('../../assets/food/suya.png'),require('../../assets/food/jollof.png')]
    },
    clothing: {
        text: [<span>Nigerian fashion is a combination of a conservative past and a flashy, fun present. For example, although women don't generally wear head coverings because of religion anymore, they stuck around as a fashion statement!</span>,
        <span>Nigerians like big beautiful patterns, matching or showy colors, and being comfortable. Men like wearing <b>Isiagu</b> shirts with each-catching patterns and both men and women wear <b>dashiki</b>, casual shirts that keep you cool in the African heat.</span>],
        images: [require('../../assets/clothing/Dashiki_Isiagu.png')]
    },
    holidays: {
        text: [<span>A funny thing is, even though my parents grew up on different continents, they celebrated the same holidays, just in different ways. For <b>Easter</b>, my mom ate lots of chocolate, whereas my dad spent the day celebrating with his village.</span>,
        <span>For <b>Christmas</b>, my dad spent a quiet day with family, but my mom was always super busy helping her mom cook a huge feast for all their extended family.</span>,
        <span>Now in our household, we combine the two-- lots of food, family, and also rest.</span>],
        images: [require('../../assets/holidays/nigerian.png')]
    },
    map: {
        text: [<span><b>Nigeria</b> is a country in West Africa and has a population of almost 200 million, making it the most populous country in Africa. It is a federal republic comprising 36 states and the Federal Capital Territory, where the capital, Abuja, is located. <b>Hover over the map to see a closer picture!</b></span>,
            <span>Nigeria is what's called a multinational state, meaning it's got a lot of different types of people! There are more than 250 ethnic groups speaking over 500 languages. It's only official language is English and most people are either Muslim or Christian.</span>],
        images: [require('../../assets/map/nigeria_far.png'),require('../../assets/map/nigeria_close.png')]
    }
}