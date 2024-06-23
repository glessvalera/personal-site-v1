import * as React from 'react';
import Typography from '@mui/material/Typography';

export default function BottomNav() {
    return (
        <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
            <Typography variant="h6">Footer</Typography>
        </footer>
    );
}