import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        overflow: 'hidden',
        transition: '0.5s',
        paddingTop: '5px',
        '&:hover':{
            cursor: 'pointer',
            paddingBottom: '5px',
            paddingTop: 0,
            '& .static': {
                opacity:0
            },
            '& .gif': {
                opacity: 1
            }
        }
    },
    container: {
        position: 'relative'
    },
    static: {
        position: 'absolute',
        margin: '-25% 0',
        width: '100%',
        opacity: 1,
        '&:hover': {
            //opacity:0
        }
    },
    gif: {
        width: '100%',
        margin: '-25% 0',
        opacity: 0,
        '&:hover': {
            //opacity: 1
        }
    }
}))



export default ({srcs, ...props}) => {
    const classes = useStyles()
    return (
        <div className={classes.root} {...props}>
            <img className={`${classes.static} static`} src={srcs.static}/>
            <img className={`${classes.gif} gif`} src={srcs.gif}/>
        </div>)
}