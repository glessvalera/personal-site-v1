import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid";


export interface WorkSummaryProps {
    img?: string,
    alt?: string,

    title: string,
    org: string,
    team?: string[],
    roles?: string[],
    tools?: string[],
    projectType?: string,
    time?: string,
    summary?: string
}

function conditionalRenderBodyList(heading: string, items?: string[]) {
    return (
        <>{items ?
            <>
                <Typography variant="body2" className="font-bold"> {heading}: </Typography>
                <Typography variant="body2" className="whitespace-pre-line"> {items.join("\n")} </Typography>
            </> :
            <div />
        }</>

    );
}

function conditionalRenderBody(heading: string, item?: string) {
    return (
        <>{item ?
            <>
                <Typography variant="body2" className="font-bold"> {heading}: </Typography>
                <Typography variant="body2" className="whitespace-pre-line"> {item} </Typography>
            </> :
            <div />
        }</>

    );
}

export function WorkSummary(props: WorkSummaryProps) {

    return (
        <div className='flex flex-col center justify-center items-center min-h-svh'>
            {/* Organization */}
            <div className='flex flex-row w-full'>
                <Typography variant="h4" className="text-primaryDark"> {props.org} </Typography>
            </div>
            {/* Title */}
            <div className='flex flex-row w-full'>
                <Typography variant="h3"> {props.title} </Typography>
            </div>
            <Grid container columns={{ s: 6, md: 12 }}>
                {/* Info Column */}
                <Grid xs={4}>
                    {conditionalRenderBodyList("Team", props.team)}
                    {conditionalRenderBodyList("Role", props.roles)}
                    {conditionalRenderBodyList("Tools", props.tools)}
                    {conditionalRenderBody("Category", props.projectType)}
                    {conditionalRenderBody("Time", props.time)}
                </Grid>
                {/* Summary Column */}
                <Grid xs={8}>
                    <Typography variant="body1"> {props.summary} </Typography>
                </Grid>
            </Grid>
        </div>
    )
}