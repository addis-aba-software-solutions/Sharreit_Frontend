import { makeStyles } from "@material-ui/core"

export default makeStyles((theme) => ({
    rooot: {
        backgroundColor: '#F3FCF4',
        height: '100vh',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"

    },
    root: {
        marginTop: '5%',
        maxWidth: 750,
        maxHeight: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    image_icons: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        paddingRight: 10,
        marginBotton: 10
    },

    addIcon: {
        width: 150,
        height: 80,
        marginLeft: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    addedImage: {
        width: 150,
        height: 80,
        borderRadius: 5
    },

    hide: {
        display: 'none'
    },

    tipText: {
        paddingTop: 10,
        paddingLeft: 16
    },

    title: {
        marginTop: 21,
        color: '#847e7e',
        fontWeight: 700
    },

    formLabel: {
        color: '#847e7e',
        fontWeight: 650,
        marginLeft: 32,
        marginTop: 16,
        marginRight: 10
    },

    singularField: {
        marginTop: 20,
        margin: theme.spacing(1),
        minWidth: 120,
        width: 200
    },

    leftSide: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        float: "left"
    },

    rightSide: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        float: "right",
        paddingRight: 60
    },

    termsAndConditions: {
        width: 500,
        height: 250
    },

    controlFields: {
        width: 250
    },

    box: {
        borderRadius: 5
    },

    footerButtons: {
        marginTop: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 200
    },

    postButton: {
        width: 150,
        backgroundColor: '#8997e6',
        color: '#fff',
        height: 35,
        borderRadius: 15,
        '&:hover': {
            backgroundColor: '#2238b3'
        }
    },

    postButtonText: {
        fontSize: 15,
        fontWeight: 60
    },

    boxButton: {
        borderRadius: 15
    },

    boost: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },

    boostButton: {
        backgroundColor: '#8997e6',
        color: '#fff',
        left: 50,
        marginRight: 58,
        '&:hover': {
            backgroundColor: '#2238b3'
        }
    },

    boostText: {
        fontWeight: 700,
        color: '#8c8c8c'
    }
}))