import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grow, Typography } from '@material-ui/core'
import { PrimaryButton } from '../components/buttons'
import Logo from '../assets/logo.png'
import { Spacer } from '../components/utils'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        height: '100vh',
        maxWidth: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        //textAlign: 'center',
        backgroundColor: 'white',
        '&::before' : {
            content: '""', // ::before and ::after both require content
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: theme.palette.gradients.background,
            opacity: .15
        }
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 22,
        width: '500px',
        fontWeight:500,
        '& b': {
            fontWeight: 800,
            fontStyle: 'italic'
        }
    }

}))

export default props => {
    const classes = useStyles()

    return (
        <Container component='main' className={classes.root}>
            <Grow in={true} style={{ transformOrigin: '50% 100%'}} timeout={1000}>
                <div className={classes.container}>
                    <img src={Logo} width='600px'/>
                    <Spacer height={8}/>
                    <Typography className={classes.text}>
                        <b>Sharing Stories</b> is an interactive experience that tells the story of diversity through the perspectives of different people and backgrounds.
                    </Typography>
                    <Spacer height={8}/>
                    <PrimaryButton>begin the story</PrimaryButton>
                </div>
            </Grow>
        </Container>
    )

}