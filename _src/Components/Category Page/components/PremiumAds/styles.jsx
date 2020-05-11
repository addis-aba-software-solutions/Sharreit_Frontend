import { makeStyles } from '@material-ui/core'
import Colors from '../../../../Config/config'


export default makeStyles(theme => ({
    root: {
        display: "flex",
        justifyContent: "center",
        borderRadius: 10,
        height: 550,
        flexDirection: "column",
        marginRight: 20,
        marginBottom: 20,
        marginTop: 10
    },

    image: {
        width: 'auto',
        height: 'auto'
    },
    cardText: {
        fontWeight: 500
    }
}))