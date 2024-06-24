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
                    <Link href="/" passHref>
                        <Button href="/" className="gap-x-2">
                            <Typography variant="h6">
                                Gless Valera
                            </Typography>
                            <Typography variant="h6" className="opacity-60">
                                /glɛs vɑ•lɛ•rɑ/
                            </Typography>
                        </Button>
                    </Link>
                </span>


                <ul className="flex flex-wrap items-center gap-y-2 gap-x-6">
                    <li>
                        <Link href="/about" passHref>
                            <Button >About</Button>
                        </Link>
                    </li>
                    <li>
                        <Link href="/work" passHref>
                            <Button >Work</Button>
                        </Link>
                    </li>
                    <li>
                        <Link href={config.RESUME_LINK} passHref>
                            <Button >Resume</Button>
                        </Link>
                    </li>
                    <li>
                        <Link href={`mailto:${config.MAIL_LINK}`} passHref>
                            <Button >Contact</Button>
                        </Link>
                    </li>
                    <li>
                        <Link href="/faq" passHref>
                            <Button >Why Hire Me?</Button>
                        </Link>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>

    );
}