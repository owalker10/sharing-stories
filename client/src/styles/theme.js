import { createMuiTheme } from '@material-ui/core/styles'



let mint = {
    mint100: '#E5F4F5',
    mint200: '#92D2BF',
    mint400: '#1E8E86',
    mint500: '#0D625C',
}


export default createMuiTheme({
    palette: {
        primary: {
            light: mint.mint200,
            main: mint.mint400,
            dark: mint.mint500
        },
        secondary: {
            main: '#FCB040' // goldenrod
        },
        /*background: {
            default: '#2E2D32' // dark grey
        },*/
        gradients: {
            mint: 'linear-gradient(90deg, #0E625C 0%, #15927D 71.95%, #09AB7B 97.29%)',
            mintWrap: 'linear-gradient(90deg, #0E625C 0%, #15927D 35%, #09AB7B 50%, #15927D 65%, #0E625C 100%)',
            background: 'linear-gradient(0deg, #0E635D 0%, rgba(196, 196, 196, 0) 78.12%)', // opacity 10%
            page: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 69.79%, rgba(0, 0, 0, 0.05) 90.63%, rgba(0, 0, 0, 0.1) 95.46%, rgba(0, 0, 0, 0.17) 100%, rgba(0, 0, 0, 0.19) 100%)'
        },
        ...mint
    },
    customShadows: {
        buttons: {
            shallow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
            deep: '0px 4px 6px rgba(0, 0, 0, 0.17)'
        },
        book: '0px 14px 40px rgba(0, 0, 0, 0.20)'
    },
    typography: {
        fontFamily: '"omnes-pro", "Roboto", sans-serif',
        button: {
            textTransform: 'none'
        }
    }
})

