import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Typography } from '@material-ui/core'
import { FlipButton } from '../components/buttons'
import { Spacer } from '../components/utils'
import FlipPage from 'react-flip-page'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        height: '100vh',
        maxWidth: '100vw',
        background: theme.palette.secondary.main,
        opacity: 0.9,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        //textAlign: 'center',
    },
    flip: {
        position: 'absolute',
        top: '48vh',
        '&.left': {
            left: '30px'
        },
        '&.right': {
            right: '30px'
        }
    },
    wrapper: {
        height: 'calc(100% - 100px)',
        width: 'calc(100% - 155px)',
    },
    page: {
        position: 'absolute',
        //background: theme.palette.gradients.page,
        height: '100%',
        width: '50%',
        backgroundColor: '#FEFEFA',
        padding: '60px',
        '&::before' : {
            content: '""', // ::before and ::after both require content
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: theme.palette.gradients.page,
            opacity: 0.5
        },
        '&.left': {
            right: '50%',
            borderRight: '2px solid #DDDDDD',
        },
        '&.right': {
            left: '50%',
            transform: 'rotate(180deg)'
        }
    },
    back1: {
        position: 'absolute',
        height: 'calc(100% - 120px)',
        width: 'calc(100% - 190px)',
        backgroundColor: '#F1F1F1'
    },
    back2: {
        position: 'absolute',
        height: 'calc(100% - 140px)',
        width: 'calc(100% - 180px)',
        backgroundColor: '#E8E7E7',
        boxShadow: theme.customShadows.book
    }

}))


export default props => {
    const classes = useStyles()

    useEffect(() => {
        window.addEventListener('keydown', downHandler);
        // Remove event listeners on cleanup
        return () => {
          window.removeEventListener('keydown', downHandler);
        };
      }, []); // Empty array ensures that effect is only run on mount and unmount

    let flipPage

    const downHandler = ({ key }) => {
        if (key === 'ArrowLeft'){
            flipPage.gotoPreviousPage()
            //console.log('prev')
        }
        if (key === 'ArrowRight'){
            flipPage.gotoNextPage()
            //console.log('next')
        }
    }

    return (
        <Container component='main' className={classes.root}>
                <div className={classes.back2}/>
                <div className={classes.back1}/>
                <div className={classes.wrapper}>
                    <FlipPage
                        orientation='horizontal'
                        animationDuration={500}
                        uncutPages
                        responsive
                        ref={(component) => { flipPage = component; }}
                    >
                        <Pages num={1}/>
                        <Pages num={2}/>
                    </FlipPage>
                </div>
            <FlipButton classes={{root: `${classes.flip} left`}} onClick={()=>{flipPage.gotoPreviousPage()}}/>
            <FlipButton right classes={{root: `${classes.flip} right`}} onClick={()=>{flipPage.gotoNextPage()}}/>
        </Container>
    )

}

const Pages = ({num}) => {
    const classes = useStyles()
    return (
        <div>
            <div className={`${classes.page} left`}>
                <Typography variant='h1'>{`Chapter ${num}`}</Typography>
                <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec purus sed ipsum iaculis aliquet nec ut orci. Nulla leo lacus, sagittis eu viverra ultrices, ultrices non tellus. Quisque convallis a ligula non pretium. Donec nec maximus lectus, ac commodo libero. Nullam eu sapien ligula. Praesent scelerisque vulputate arcu quis rutrum. Phasellus tincidunt lobortis enim, ac bibendum orci ultrices at. Integer et ornare velit.</Typography>
            </div>
            <div className={`${classes.page} right`}/>
        </div>
)}