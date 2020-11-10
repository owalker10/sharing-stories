import React from 'react'

export default {
    name: 'Sarah',
    portrait: require('../../assets/people/sarah.png'),
    intro: ["Hi there! My name is Sarah Joohee Choi, and I'm from Austin, Texas. [work in progres]"],
    sports: {
        text: [<span><b>Baseball</b> and <b>soccer</b> are two of the most popular sports in Korea. Koreans take a lot of pride in their baseball and soccer teams. Furthermore, there are several professional Korean baseball players in the MLB and soccer players in the Premier League.</span>,
            <span>Korea also holds many <b>badminton</b> competitions and tournaments.</span>,
            <span>Last but certainly not least, <b>taekwondo</b>, otherwise known as Korean martial arts, is very popular. Taekwondo athletes wear doboks and specialize in many kicking techniques.</span>],
        images: [require('../../assets/sports/baseball.png'),require('../../assets/sports/soccer.png'),require('../../assets/sports/taekwondo.png')]
    },
    food: {
        text: [<span>My favorite Korean dish is <b>kimchi jjigae</b>! <b>Kimchi</b> is a staple Korean side dish of salted, seasoned, and fermented napa cabbage. It gives almost any Korean dish an added freshness and extra crunch. Add kimchi along with some pork or seafood and other vegetables to a pot of broth to make a stew called kimchi jjigae!</span>,
        <span><b>Tteokbokki</b> is another famous Korean dish popular amongst street food. I love eating this spicy rice cake dish as a late-night snack!</span>,
        <span><b>Bingsu</b> is my favorite Korean dessert. This Korean shaved ice dessert is most commonly topped with sweet red beans or the fruit along with some condensed milk.</span>],
        images: [require('../../assets/food/kimchi_jjigae.png'),require('../../assets/food/bingsu.png'),require('../../assets/food/kimchi.png')]
    },
    map: {
        text: [<span><b>South Korea</b> is a country located in the southern part of the Korean Peninsula, in East Asia. Its population is 51 million but about half live in the Seoul metropolitan area.</span>,
            <span>96% of the population is ethnically Korena, and the official language is Korean. Many people follow either Christianity or Buddhism.</span>],
        images: []
    }
}