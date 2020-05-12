import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },

    text: {
        marginBottom: 10
    },

    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    }
}))