import { Button, Typography } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import config from '@public/config.json';

export default function Hero() {
    return (
        <div className='flex flex-col center justify-center items-center min-h-svh gap-4 xl:w-1/2'>
            {/* Title */}
            <div className='flex flex-row w-full justify-center'>
                <Typography variant="h3" component="pre">Julianne </Typography>
                <Typography variant="h3" className="highlight before:bg-violet-400 text-center">Gless Valera</Typography>
            </div>
            {/* Subtitle 1 */}
            <Typography variant="subtitle1">noun | /‘ju•li•æn glɛs vɑ•lɛ•rɑ/</Typography>
            <hr className="w-full border-black border-1" />
            {/* Content */}
            <ul className="list-decimal w-full pl-4">
                <Typography variant="body2" component="li">
                    A UX researcher in Southern California
                </Typography>
                <Typography variant="body2" component="li">
                    A scientist who studies people&apos;s behavior to make experiences more enjoyable
                </Typography>
            </ul>
            <Typography className="self-start" variant="body1">
                📌 Currently: {config.CURRENT_BLURB}
            </Typography>
            {/* Action Buttons */}
            <Button variant="contained" href="/about"><ArrowForwardIosIcon /> More About Me </Button>
        </div>
    );
}