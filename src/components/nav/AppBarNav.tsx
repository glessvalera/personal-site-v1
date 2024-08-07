import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import Link from 'next/link'

import config from '@public/config.json';

export default function AppBarNav() {
    return (
        <AppBar position="relative" color="inherit">
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
                    <Button className="gap-x-2" LinkComponent={Link} href="/" >
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
                        <Button LinkComponent={Link} href="/about" >About</Button>
                    </li>
                    <li>
                        <Button LinkComponent={Link} href="/work" >Work</Button>
                    </li>
                    <li>
                        <Button LinkComponent={Link} href={config.RESUME_LINK} >Resume</Button>
                    </li>
                    <li>
                        <Button LinkComponent={Link} href={`mailto:${config.MAIL_LINK}`}>Contact</Button>
                    </li>
                    <li>
                        <Button LinkComponent={Link} href="/faq">Why Hire Me?</Button>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>

    );
}