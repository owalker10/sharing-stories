import React from 'react'
import { Divider, Typography } from '@material-ui/core'
import { Paragraph, Heading, Subheading } from '../styles/type'
import { Spacer } from './utils'
import Portraits from './Portraits'
import ClickOne from './ClickOne'
import CategoryPictures from './Category'
import characters from '../data/characters'
import words from '../assets/words'

export const TextBased = ({ heading, paragraphs, center, ...props }) => {
    return (<div style={ center ?
        {height: '100%', display: 'flex',flexDirection:'column',justifyContent:'center'} : {}
        }>
            {heading ? (<>
                <Heading>{heading[0]}</Heading>
                <Spacer height={1}/>
                <Subheading>{heading[1]}</Subheading>
                <Spacer height={2}/>
                <Divider/>
                <Spacer height={10}/>
            </>) : null}
            {paragraphs.map((p,i) => (
                <Paragraph first={i==0 &&!center}>{p}</Paragraph>
            ))}
        </div>)
}

export const TableOfContents = [
        <TextBased
            heading={['Table of Contents','Meet the Characters!']}
            paragraphs={['Welcome to Sharing Stories! We\'re excited for your to meet all our amazing characters!',
                'To start someone\'s story, click on their picture to the right. Or, flip through the book using the buttons or your arrow keys.']}
        />,
        <Portraits/>
    ]

export const Meet = (i) => ([
    <TextBased
        heading={[`Chapter ${i+1}`,characters[i].name]}
        paragraphs={characters[i].intro}
    />,
    <ClickOne/>
])

export const Category = (i,category) => ([
    <TextBased
        center
        paragraphs={characters[i][category].text}
    />,
    <CategoryPictures header={words[category].gif} images={characters[i][category].images}/>
])