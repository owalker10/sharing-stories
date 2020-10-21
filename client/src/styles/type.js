import React from 'react'
import { Typography, withStyles } from '@material-ui/core'

/*
Typography components
*/

export const Paragraph = withStyles(theme => ({
    root: {
        fontFamily: 'abril-text, serif',
        fontWeight: 300,
        fontSize: '1.3vw',
        textIndent: '4ch',
        lineHeight: '1.5em',
        '&.first': {
            '&::first-letter':{
                fontSize: '3em',
                fontWeight: 400
            }
        }
    }
}))(props => ( <Typography paragraph variant='body1' component='p' className={props.first ? 'first' : ''} {...props}/> ))


export const Heading = withStyles(theme => ({
    root: {
        fontFamily: 'abril-display, serif',
        fontWeight: 400,
        fontSize: '4rem'
    }
}))(props => ( <Typography variant='h1' component='h1' {...props}/> ))


export const Subheading = withStyles(theme => ({
    root: {
        fontFamily: 'abril-text, serif',
        fontWeight: 300,
        fontSize: '1.7rem',
        textIndent: '2ch',
        opacity: 0.7
    }
}))(props => ( <Typography variant='h2' component='h2' {...props}/> ))
