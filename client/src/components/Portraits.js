import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import { Spacer } from './utils'
import { prev, next, goToPage } from '../pages/Book'
import '../styles/keyframes.css'
import characters from '../data/characters'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
    },
    grid: {
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridAutoRows: 'auto',
        gridAutoFlow: 'row',
        gap: '30px'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    portrait: {
        paddingTop: '100%',
        backgroundColor: theme.palette.primary.main,
        borderRadius: '5px',
        width: '100%',
        cursor: 'pointer',
        marginTop: '10px',
        transition: '0.5s',
        position: 'relative',
        '&:hover':{
            marginTop: 0,
            marginBottom: '10px',
            boxShadow: theme.shadows[8],
            '&::before': {
                content: '""', // ::before and ::after both require content
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'white',
                pointerEvents :'none',
                animation: 'glow 1.2s linear 0s infinite alternate'
                //animationName: 'glow'
            }
        },
        '&.comingSoon': {
            backgroundColor: 'lightgray',
            pointerEvents: 'none'
        }
    },
    name: {
        fontSize: '1.3rem'
    },
    picture: {
        position: 'absolute',
        top: 0,
        width: 'auto',
        left: 0,
        right: 0,
        margin: '0 auto',
        height: '100%'
    }
}))


export default () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
        <div className={classes.grid}>
            {characters.map(char => {
                const name = char.name
                return (
                    <div className={classes.container} onClick={()=>{goToPage(name,'meet')}}>
                        <div className={`${classes.portrait} ${name ==='Coming Soon' ? 'comingSoon' : ''}`}>
                            {name !=='Coming Soon' ? 
                            <img src={characters.find(c=>(c.name==name)).portrait} className={classes.picture}/>
                            : null}
                        </div>
                        <Spacer height={1}/>
                        <Typography className={classes.name}>{name}</Typography>
                    </div>
                )
            })}
        </div>
        </div>
    )
    
   
}