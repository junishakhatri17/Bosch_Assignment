import React from 'react';
import logo from './logo.svg';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Button } from '@material-ui/core';
import Typography from "@material-ui/core/Typography";
import './App.css';

class Header extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className="root">
                <AppBar position="static">
                <Toolbar className="toolBar">
                    <Typography variant="h6" color="inherit" className="grow">
                    <Button>
                    <img className="App-logo" src={logo} alt="Logo" />;
                        <span style={{ fontSize: "1.2em", color: "#ffffff" }}>
                        LOGO
                        </span>

                    </Button>
                    </Typography>
                    <span>User Name</span>
                </Toolbar>
                </AppBar>
            </div>
            );
        }
    }

export default Header;
