import React, { useEffect, useRef } from 'react'
import { useSessionState } from '../context'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Typography, Divider } from '@material-ui/core'
import { FlipButton } from '../components/buttons'
import { Spacer } from '../components/utils'
import { Paragraph, Heading, Subheading } from '../styles/type'
import FlipPage from 'react-flip-page'
import faces from '../assets/faces.png'
import { TextBased, TableOfContents, Meet, Category } from '../components/pages'
import chars from '../data/characters'

const shadow = theme => ({
    content: '""', // ::before and ::after both require content
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: theme.palette.gradients.page,
    opacity: 0.5,
})

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
        display: 'flex',
        flexDirection: 'column',
        //background: theme.palette.gradients.page,
        height: '100%',
        width: '50%',
        backgroundColor: '#FEFEFA',
        padding: '60px',
        '&.left': {
            right: '50%',
            '&::before' : shadow(theme),
            borderRight: '2px solid #DDDDDD',
        },
        '&.right': {
            left: '50%',
            '&::before': {...shadow(theme),transform: 'rotate(180deg)'}
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
    const NPAGES = 5

    const flipPage = useRef(null)


    const [page,setPage] = useSessionState('page',1)

    const prev = () => {
        if (page > 1){
            flipPage.current.gotoPreviousPage()
        }
    }
    const next = () => {
        if (page < NPAGES){
            flipPage.current.gotoNextPage()
        }
    }

    const downHandler = ({ key }) => {
        if (key === 'ArrowLeft'){
            prev()
        }
        if (key === 'ArrowRight'){
            next()
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', downHandler);
        // Remove event listeners on cleanup
        return () => {
          window.removeEventListener('keydown', downHandler);
        };
      }, [downHandler]); // Empty array ensures that effect is only run on mount and unmount


    useEffect(() => {
        if (!flipPage.current) return
        if (page > NPAGES){
            flipPage.current.gotoPage(0)
        }
        else
            flipPage.current.gotoPage(page-1)
    },[flipPage])

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
                        ref={flipPage}
                        onPageChange={(i)=>{setPage(i+1)}}
                    >
                        {[...Array(3*chars.length+1)].map((n,i)=>(
                            <Pages num={i+1}/>
                        ))}
                    </FlipPage>
                </div>
            <FlipButton classes={{root: `${classes.flip} left`}} onClick={()=>{prev()}} hide={page===1}/>
            <FlipButton right classes={{root: `${classes.flip} right`}} onClick={()=>{next()}} hide={page===NPAGES}/>
        </Container>
    )

}

// must be 2 item array
const ToPages = ({pages}) => {
    const classes = useStyles()
    return (
        <div>
            <div className={`${classes.page} left`}>
                {pages[0]}
            </div>
            <div className={`${classes.page} right`}>
                {pages[1]}
            </div>
        </div>
    )

}

const Pages = ({num}) => {
    const classes = useStyles()
    return (
        num == 1 ? <ToPages pages={TableOfContents}/>
        : num % 3 == 2 ? <ToPages pages={Meet(0)}/>
        : num % 3 == 1 ? <ToPages pages={Category(0,'sports')}/>
        : <ToPages pages={Category(0,'food')}/>
)}