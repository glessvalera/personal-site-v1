import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import config from '@public/config.json';

export default function AppBarNav() {


    return (
        <AppBar position="absolute" color="transparent">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                </IconButton>
                <span className="flex flex-row grow">
                    <Button href="/" className="gap-x-2">
                        <Typography variant="h6">
                            Gless Valera
                        </Typography>
                        <Typography variant="h6" className="opacity-60">
                            /glɛs vɑ•lɛ•rɑ/
                        </Typography>
                    </Button>
                </span>


                <ul className="flex flex-wrap items-center gap-y-2 gap-x-6">
                    <li>
                        <Button href="/about">About</Button>
                    </li>
                    <li>
                        <Button href="/work">Work</Button>
                    </li>
                    <li>
                        <Button href={config.RESUME_LINK}>Resume</Button>
                    </li>
                    <li>
                        <Button href={`mailto:${config.MAIL_LINK}`}>Contact</Button>
                    </li>
                    <li>
                        <Button href="/faq">Why Hire Me?</Button>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>

    );
}