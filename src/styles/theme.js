import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        background: {
            paper: '#fff',
            default: '#fafafa',
        },
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                a: {
                    color: 'rgba(0, 0, 0, 0.87);',
                    '&:hover': {
                        textDecoration: 'none',
                    },
                },
                canvas: {
                    border: '1px solid rgba(0, 0, 0, 0.23)'
                }
            },
        },
    },
});

export default theme;
