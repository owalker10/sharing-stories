import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import { Spacer } from './utils'
import Stick from '../assets/stick.png'
import words from '../assets/words'
import CG from '../components/ClickableGif'
import { categories, goToPage } from '../pages/Book'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        height: '100%'
    },
    grid: {
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridAutoRows: 'auto',
        gridAutoFlow: 'row',
        gap: '15px',
        gridTemplateAreas: `
        "one   two    three"
        "four  person five"
        "six   person seven"
        "eight nine   ten"
        `
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    portrait: {
        //backgroundColor: 'grey',
        borderRadius: '5px',
        gridArea: 'person',
        width: '100%'
    }
}))

const clickables = ['clothing','food','holidays','map','sports']
const order = ['two','four','five','eight','ten']

export default ({char}) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
        <div className={classes.grid}>
            {clickables.map((name,i) => {
                return (
                    <div className={classes.container} style={{gridArea: order[i]}}>
                        <CG srcs={words[name]}
                        onClick={(categories.includes(name) ? ()=>{goToPage(char.name,name)} : null)}
                        />
                    </div>
                )
            })}
            <img src={char.portrait} className={classes.portrait}/>
        </div>
        </div>
    )
    
   
}