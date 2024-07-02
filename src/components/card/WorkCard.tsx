
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export enum WorkType {
    UXR = "UX Research",
    UXW = "UX Writing / Content Design",
    UIUX = "UI / UX Design"
}

export interface WorkCardProps {
    title?: string,
    org?: string,
    workType?: WorkType,
    img?: string,
    alt?: string,
}

export function WorkCard(props: WorkCardProps) {
    return (
        <Card sx={{ maxWidth: 345 }} className='h-full'>
            < CardMedia
                component="img"
                height="194"
                image={
                    props.img ? `imgs/work/${props.img}.jpg` : `imgs/noimg.png`}
                alt={props.alt}
            />
            <CardHeader
                subheader={`${props.org} | ${props.workType}`}
                title={props.title}
            />
        </Card>
    )
}