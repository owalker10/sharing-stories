import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import { Dialog, DialogContent, DialogActions, DialogTitle } from '@material-ui/core'
import { SecondaryButton } from './buttons'

const useStyles = makeStyles(theme => ({
    paper: {
        margin: 0,
        padding: theme.spacing(2),
        minWidth: '500px',
        minHeight: '400px'
    }
}));

export const OkayDialog = ({ title, children, onClose,...props }) => {
    const classes = useStyles()

    return (
        <Dialog {...props} onClose={onClose} classes={{paper: classes.paper}}>
            <DialogTitle disableTypography>
                <Typography variant='h4'>{title}</Typography>
            </DialogTitle>
            <DialogContent>{children}</DialogContent>
            <DialogActions style={{justifyContent: 'center'}}>
                <SecondaryButton autoFocus onClick={onClose}>okay!</SecondaryButton>
            </DialogActions>
        </Dialog>
    )
}