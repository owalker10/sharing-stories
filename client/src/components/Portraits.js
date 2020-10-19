import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import { Spacer } from './utils'

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
    },
    portrait: {
        paddingTop: '100%',
        backgroundColor: 'grey',
        borderRadius: '5px',
    }
}))

const fake = ['Lizzy','Joe','Mary','Theodore','Billy']

export default () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
        <div className={classes.grid}>
            {fake.map(name => {
                return (
                    <div className={classes.container}>
                        <div className={classes.portrait}/>
                        <Spacer height={1}/>
                        <Typography>{name}</Typography>
                    </div>
                )
            })}
        </div>
        </div>
    )
    
   
}