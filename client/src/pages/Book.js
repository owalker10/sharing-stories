import React, { useEffect, useRef, useState } from 'react'
import { useSessionState } from '../context'
import { makeStyles } from '@material-ui/core/styles'
import { Home, FormatListBulleted, Help, Menu } from '@material-ui/icons'
import { Container, Typography, Divider } from '@material-ui/core'
import { FlipButton, SpeedDial } from '../components/buttons'
import { OkayDialog } from '../components/dialogs'
import { TextBased, TableOfContents, Meet, Category } from '../components/pages'
import { Spacer } from '../components/utils'
import { Paragraph, Heading, Subheading } from '../styles/type'
import FlipPage from 'react-flip-page'
import faces from '../assets/faces.png'
import chars from '../data/characters'
import { useHistory } from 'react-router-dom'

const shadow = theme => ({
    content: '""', // ::before and ::after both require content
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: theme.palette.gradients.page,
    opacity: 0.5,
    pointerEvents :'none',
    //zIndex: 0
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
        '& > *': {
            //zIndex: '1',
        },
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


export const categories = ['food','sports','map']
// populate the pages
let pages

// 1 indexed ugh
const getPage = (name,category) => {
    const i = chars.findIndex(c => c.name == name)
    const j = categories.indexOf(category) + 1 // 0 for "meet"
    return i === -1 ? 0 : 1 + i*(1+categories.length) + j
}


let flipPage

const pageNum = () => {
    return flipPage.current ? flipPage.current.state.page : -1
}

export const prev = () => {
    if (flipPage.current.state.page > 0){
        flipPage.current.gotoPreviousPage()
    }
}
export const next = () => {
    if (flipPage.current.state.page < pages.length){
        flipPage.current.gotoNextPage()
    }
}

const downHandler = (event) => {
    if (event.key === 'ArrowLeft'){
        document.activeElement.blur();
        prev()
    }
    if (event.key === 'ArrowRight'){
        document.activeElement.blur();
        next()
    }
}

export const goToPage = (name,category) => {
    flipPage.current.gotoPage(getPage(name,category))
}


export default props => {
    const classes = useStyles()

    flipPage = useRef(null)

    pages = [TableOfContents]
    chars.map((c,i)=>{
        pages.push(Meet(i))
        categories.map(c => {
            pages.push(Category(i,c))
        })
    })

    const history = useHistory()

    const [page,setPage] = useSessionState('page',0)
    const [modalOpen,setModalOpen] = useSessionState('modalOpen',false)
    const [firstTime,setFirstTime] = useSessionState('firstTime',true)
    const [dialOpen, setDialOpen] = useState(false)



    // speed dial actions
    const actions = [
        { name: 'Home', icon: <Home/>, onClick: ()=>{history.push('/')} },
        { name: 'Table of Contents', icon: <FormatListBulleted/>, onClick: ()=>{goToPage("Table","Of Contents")} },
        { name: 'Help', icon: <Help/>, onClick: ()=>{setModalOpen(true)} }
    ]

    useEffect(() => {
        window.addEventListener('keydown', downHandler);
        // Remove event listeners on cleanup
        return () => {
          window.removeEventListener('keydown', downHandler);
        };
      }, [downHandler]); // Empty array ensures that effect is only run on mount and unmount


    useEffect(() => {
        if (!flipPage.current) return
        if (page > pages.length){
            flipPage.current.gotoPage(0)
        }
        else
            flipPage.current.gotoPage(page)
    },[flipPage])

    useEffect(() => {
        if (firstTime){
            setModalOpen(true)
            setFirstTime(false)
        }
    },[])

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
                        onPageChange={(i)=>{setPage(i)}}
                    >
                        {pages.map(c=><ToPages pages={c}/>)}
                    </FlipPage>
                </div>
            <FlipButton classes={{root: `${classes.flip} left`}} onClick={()=>{prev()}} hide={page===0}/>
            <FlipButton right classes={{root: `${classes.flip} right`}} onClick={()=>{next()}} hide={page===pages.length-1}/>

            <SpeedDial
                onClose={()=>{setDialOpen(false)}}
                onOpen={()=>{setDialOpen(true)}}
                open={dialOpen}
                direction='up'
                actions={actions}
                ariaLabel={"Menu"}
                icon={<Menu style={{fontSize: '2.5rem'}}/>}
            />

            <OkayDialog
                title="Welcome!"
                onClose={()=>{setModalOpen(false)}}
                open={modalOpen}
            >
                <Typography paragraph>
                    Sharing Stories is an interactive experiece. Many of the items on the pages are interactable and can take you to other pages.
                    To simply flip the page, you can use your left and right arrows keys or the left and right buttons next to the book.
                </Typography>
                <Typography paragraph>
                    You can use the menu in the bottom right corner to go back to the home page, flip to the table of contents, or view this help message again.
                </Typography>
            </OkayDialog>

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