import CopyrightIcon from '@mui/icons-material/Copyright';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';

import { IconButton, Typography } from '@mui/material';

import * as React from 'react';

import config from '@public/config.json';

export default function BottomNav() {
    return (
        <footer className="flex 
            mw-full 
            flex-row 
            flex-wrap 
            items-center 
            text-center 
            justify-between
            mx-8
            mb-2">
            <ul className="flex flex-wrap items-center gap-y-2 gap-x-2">
                <li>
                <Typography variant="subtitle2">
                    Gless Valera
                </Typography>
                </li>
            </ul>
            <ul className="flex flex-wrap items-center gap-y-2 gap-x-2">
                <li>
                <Typography variant="subtitle2">
                    <CopyrightIcon fontSize='inherit'/> 2024 - Julianne Gless Valera
                </Typography>
                </li>
            </ul>
            <ul className="flex flex-wrap items-center gap-y-2 gap-x-2">
                <li>
                    <IconButton aria-label="E-Mail"  href={`mailto:${config.MAIL_LINK}`}>
                        <MailIcon />
                    </IconButton>
                </li>
                <li>
                    <IconButton aria-label="LinkedIn"  href={`${config.LINKEDIN_LINK}`}>
                        <LinkedInIcon />
                    </IconButton>
                </li>
                <li>
                    <IconButton aria-label="Phone Number"  href={`tel:${config.PHONE_NUMBER}`}>
                        <PhoneIcon />
                    </IconButton>
                </li>
            </ul>
        </footer>
    );
}