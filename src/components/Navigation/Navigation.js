import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';

import styles from './style';

const Navigation = ({ classes }) => (
    <>
        <AppBar position="static">
            <Container maxWidth="lg">
                <Toolbar className={classes.toolbar}>
                    <div>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Button
                            href="/"
                            className={classes.menuButton}
                            color="inherit"
                        >
                            Dashboard
                        </Button>
                    </div>
                    <div className={classes.user}>
                        <Typography>Liudmila Mzhachikh</Typography>
                        <Avatar className={classes.avatar} />
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    </>
);

export default withStyles(styles)(Navigation);
