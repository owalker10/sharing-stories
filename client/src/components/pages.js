import React from 'react'
import { Divider, Typography } from '@material-ui/core'
import { Paragraph, Heading, Subheading } from '../styles/type'
import { Spacer } from './utils'
import Portraits from './Portraits'
import ClickOne from './ClickOne'
import CategoryPictures, { Map } from './Category'
import characters from '../data/characters'
import words from '../assets/words'
import TheEndPNG from '../assets/the_end.png'

export const TextBased = ({ heading, paragraphs, center, character, ...props }) => {
    return (<div style={{height:'100%', postition: 'relative', display: 'flex', flexDirection: 'column'}}>
            {heading || character ? (<div style={center ? {position:'absolute', width: '100%'} : {}}>
                {heading ? <>
                    <Heading>{heading[0]}</Heading>
                    <Spacer height={1}/>
                </> : null }
                <Subheading>{heading ? heading[1] : character}</Subheading>
                <Spacer height={2}/>
                <Divider/>
                <Spacer height={10}/>
            </div>) : null}
            <div style={ center ?
                {display: 'flex',flexDirection:'column',justifyContent:'center', margin: 'auto'} : {}
                }>
                {paragraphs.map((p,i) => (
                    <Paragraph first={i==0 &&!center}>{p}</Paragraph>
                ))}
            </div>
        </div>)
}

export const TableOfContents = [
        <TextBased
            heading={['Table of Contents','Meet the Characters!']}
            paragraphs={['Welcome to Sharing Stories! We\'re excited for you to meet all our amazing characters!',
                'To start someone\'s story, click on their picture to the right. Or, flip through the book using the buttons or your arrow keys.']}
        />,
        <Portraits/>
    ]

export const Meet = (i) => ([
    <TextBased
        heading={[`Chapter ${i+1}`,characters[i].name]}
        paragraphs={characters[i].intro}
    />,
    <ClickOne char={characters[i]}/>
])

export const Category = (i,category) => ([
    <TextBased
        center
        paragraphs={characters[i][category].text}
        character={characters[i].name}
    />,
    (category == 'map' ? 
    <Map header={words[category].gif} images={characters[i][category].images} />
    : <CategoryPictures header={words[category].gif} images={characters[i][category].images}/>)
])

const BoxStyle = {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    border: '1px solid rgba(0, 0, 0, 0.87)',
    padding: '10px 40px'
}

const TheEndStyle = {
    fontWeight: 400,
    fontSize: '10rem'
}

export const TheEnd = [
    <TextBased
        center
        paragraphs={["Thank you for letting us share our stories! Even though we're all from Austin, we all come from different backgrounds that shape who we are.",
            "We hope this book inspires you to learn more about the stories of people in your life. Everyone has one, and no two are the same!"]}
    />,
    <div style={{height:'100%', postition: 'relative', display: 'flex', flexDirection: 'column', alignItems:'center',justifyContent:'center'}}>
        <img src={TheEndPNG} style={{width:'100%'}}/>
    </div>
]