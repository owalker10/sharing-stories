import React from 'react'
import { Button, withStyles, makeStyles } from '@material-ui/core'
import { SpeedDial as MuiSpeedDial, SpeedDialAction } from '@material-ui/lab'
import Left from '@material-ui/icons/ChevronLeft';

export const PrimaryButton = withStyles(theme => ({
    root: {
        height: '65px',
        padding: '0 65px',
        backgroundImage: theme.palette.gradients.mintWrap,
        backgroundSize: '200% auto',
        color: 'white',
        borderRadius: '100px',
        fontSize: '24px',
        fontWeight: 500,
        filter: `drop-shadow(${theme.customShadows.buttons.shallow})`,
        transition: '0.5s',
        '&:hover': {
            backgroundPosition: 'right center'
        }
    }
}))(Button)

export const SecondaryButton = withStyles(theme => ({
    root: {
        height: '50px',
        width: '250px',
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        borderRadius: '100px',
        fontSize: '22px',
        fontWeight: 500,
        filter: `drop-shadow(${theme.customShadows.buttons.shallow})`,
        '&:hover': {
            backgroundColor: theme.palette.mint500
        }

    }
}))(Button)

const StyledFlipButton = withStyles(theme => ({
    root: {
        background: theme.palette.mint100,
        color: theme.palette.mint400,
        borderRadius: '100%',
        width: '40px',
        minWidth: '50px',
        height: '50px',
        opacity: 0.5,
        transition: '0.5s',
        filter: `drop-shadow(${theme.customShadows.buttons.deep})`,
        '&:hover':{
            //background: theme.palette.mint200
            opacity: 1,
            background: theme.palette.mint100
        }

    }
}))(Button)

export const FlipButton = ({right,hide, ...props}) => (
    <StyledFlipButton {...props} style={{display: hide ? 'none' : ''}}>
        <Left style={{fontSize:'2.2rem',transform:right?'rotate(180deg)':''}}/>
    </StyledFlipButton>
)

const StyledSpeedDial = withStyles(theme => ({
    root: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        marginRight: '20px',
        marginBottom: '20px',
    },
    fab: {
        width: '80px',
        height: '80px',
        backgroundImage: theme.palette.gradients.mintWrap,
        backgroundSize: '200% auto',
        opacity: 0.5,
        transition: '0.25s !important',
        '&:hover': {
            opacity: 1,
            transform: 'rotate(-180deg) !important'
        }
    },
    actions: {
    }
}))(MuiSpeedDial)

const StyledAction = withStyles(theme => ({
    fab: {
        width: '60px',
        height: '60px',
        margin: '16px',
        backgroundColor: theme.palette.primary.dark,
        transition: '0.3s',
        color: 'white',
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
            //filter: 'brightness(50%)'
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))'
        }
    }
}))(SpeedDialAction)

const tooltipStyle = makeStyles(theme => ({
    tooltip: {
        fontSize: '1rem'
    }
}))

export const SpeedDial = ({actions, ...props}) => {
    const tooltipClasses = tooltipStyle()
    return (
    <StyledSpeedDial {...props}>
        {actions.map(a => (
            <StyledAction
                key={a.name}
                ariaLabel={a.name}
                tooltipTitle={a.name}
                onClick={a.onClick}
                icon={a.icon}
                //tooltipOpen
                TooltipClasses={tooltipClasses}
            />
        ))}
    </StyledSpeedDial>
    )
}
