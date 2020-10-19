import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import { Spacer } from './utils'
import Stick from '../assets/stick.png'
import words from '../assets/words'
import CG from '../components/ClickableGif'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '100%'
    },
    header: {
        width: '60%',
        margin: '-25% 0',
    },
    grid: {
        width: '90%',
        display: 'grid',
        gridTemplateColumns: 'auto',
        gridAutoRows: '1fr',
        gridAutoFlow: 'row',
        justifyItems: 'center',
        //backgroundColor: theme.palette.primary.light,
    },
    img: {
        maxWidth: '100%',
        minWidth:0,
        minHeight: 0,
        maxHeight: '100%'
    }
}))

const pos = i => {
    const r = Math.floor((2*i)/3)+1
    const c = (2*i)%3+1
    return `${r} / ${c} / ${r+1} / ${c+1}`
}

const Item = ({src, ...props}) => {
    const classes = useStyles()
    return (
        <img className={classes.img} src={src} {...props}/>
    )
}


export default ({header, images}) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <img className={classes.header} src={header}/>
            <div className={classes.grid}>
                {images.map((src,i)=>(
                    <Item src={src} style={{gridArea: pos(i)}}/>
                ))}
            </div>
        </div>
    )
    
   
}