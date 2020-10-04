import React, { useEffect, useRef } from 'react'
import { useSessionState } from '../context'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Typography, Divider } from '@material-ui/core'
import { FlipButton } from '../components/buttons'
import { Spacer } from '../components/utils'
import { Paragraph, Heading, Subheading } from '../styles/type'
import FlipPage from 'react-flip-page'
import faces from '../assets/faces.png'

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
            console.log('from prev',page)
            flipPage.current.gotoPreviousPage()
            
        }
    }
    const next = () => {
        if (page < NPAGES){
            console.log('from next',page)
            flipPage.current.gotoNextPage()
            //console.log(page)
            
        }
    }

    const downHandler = ({ key }) => {
        console.log('down')
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
        console.log(page)
    },[page])

    useEffect(() => {
        if (!flipPage.current) return
        console.log('hey')
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
                        {[...Array(NPAGES)].map((n,i)=>(
                            <Pages num={i+1}/>
                        ))}
                    </FlipPage>
                </div>
            <FlipButton classes={{root: `${classes.flip} left`}} onClick={()=>{prev()}} hide={page===1}/>
            <FlipButton right classes={{root: `${classes.flip} right`}} onClick={()=>{next()}} hide={page===NPAGES}/>
        </Container>
    )

}

const Pages = ({num}) => {
    const classes = useStyles()
    return (
        <div>
            <div className={`${classes.page} left`}>
                <Heading>{`Chapter ${num}`}</Heading>
                <Spacer height={1}/>
                <Subheading>A very interesting story</Subheading>
                <Spacer height={2}/>
                <Divider/>
                <Spacer height={10}/>
                <Paragraph first>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec purus sed ipsum iaculis aliquet nec ut orci. Nulla leo lacus, sagittis eu viverra ultrices, ultrices non tellus. Quisque convallis a ligula non pretium. Donec nec maximus lectus, ac commodo libero. Nullam eu sapien ligula. Praesent scelerisque vulputate arcu quis rutrum. Phasellus tincidunt lobortis enim, ac bibendum orci ultrices at. Integer et ornare velit.</Paragraph>
                <Paragraph>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed luctus lacinia diam nec efficitur. Nam suscipit viverra dolor at tempus. Ut sollicitudin et nisl quis porta. Sed nec dolor a magna efficitur feugiat. Nullam iaculis imperdiet metus at viverra. Donec ac est eleifend, congue ipsum sed, porta justo. Mauris ultricies quam ut mi consequat porttitor. Ut pulvinar libero orci, ut posuere diam luctus non. Sed luctus purus leo, efficitur feugiat elit sagittis sed. Nam in tincidunt risus. Fusce congue nunc vel tincidunt eleifend. Sed vel interdum diam. Nullam leo ante, interdum in augue in, vehicula tincidunt lorem.</Paragraph>
            </div>
            <div className={`${classes.page} right`}>
                <div style={{
                    alignSelf: 'center',
                    margin: 'auto',
                    width: '80%'
                }}>
                    <img src={faces} width='100%'/>
                    <Typography style={{fontFamily: 'abril-text'}}>A pretty picture.</Typography>
                </div>
            </div>
        </div>
)}