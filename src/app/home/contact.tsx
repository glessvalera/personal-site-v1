import { Button, Typography } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import config from '@public/config.json';

export default function ContactMe() {
    return (
        <div className='flex flex-col center justify-center items-center min-h-svh gap-4 xl:w-1/2'>
            {/* Title */}
            <div className='flex flex-row w-full justify-center'>
                <Typography variant="h3" className="highlight before:bg-violet-400">Contact Me</Typography>
            </div>
            {/* Content */}
            <Typography variant="body2">
                Hi new friend!  If you have any questions or want to create something great together, let&apos;s connect!  
            </Typography>
            {/* Action Buttons */}
            <Button variant="contained" href="/about"><ArrowForwardIosIcon  href={`mailto:${config.MAIL_LINK}`}/> Contact Me </Button>
        </div>
    );
}