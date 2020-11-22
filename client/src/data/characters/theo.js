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
    map: {
        text: [<span><b>Nigeria</b> is a country in West Africa and has a population of almost 200 million, making it the most populous country in Africa. It is a federal republic comprising 36 states and the Federal Capital Territory, where the capital, Abuja, is located.</span>,
            <span>Nigeria is what's called a multinational state, meaning it's got a lot of different types of people! There are more than 250 ethnic groups speaking over 500 languages. It's only official language is English and most people are either Muslim or Christian.</span>],
        images: []
    }
}