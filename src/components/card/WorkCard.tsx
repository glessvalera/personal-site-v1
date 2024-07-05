
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';

import Link from 'next/link'

import getImagePath from '../helper/PathGenerator';
import { WorkType } from '../types/WorkTypes';

export interface WorkCardProps {
    title?: string,
    org?: string,
    workType?: WorkType,
    img?: string,
    alt: string,
    navTo?: string,
}

export function WorkCard(props: WorkCardProps) {
    return (
        <Card sx={{ maxWidth: 345 }} className='h-full'>
            <CardActionArea LinkComponent={Link} className='flex flex-col h-full' href={`${props.navTo}`}>
                < CardMedia
                    component="img"
                    image={
                        getImagePath(props.img ? `imgs/work/${props.img}.jpg` : `imgs/noimg.png`)}
                    alt={props.alt}
                />
                <CardHeader
                    subheader={`${props.org} | ${props.workType}`}
                    title={props.title}
                    className='h-full'
                />
            </CardActionArea>

        </Card>
    )
}