import React from 'react'
import { Backdrop, CircularProgress, Typography } from '@material-ui/core'
import useStyles from './styles'

export default ({ primary }) => {
    const classes = useStyles()
    return (
        <Backdrop className={classes.backdrop} open={true}>
            <div className={classes.root}>
                <Typography variant="h4" className={classes.text}>{primary}</Typography>
                <CircularProgress color="inherit" />
            </div>
        </Backdrop>
    )
}