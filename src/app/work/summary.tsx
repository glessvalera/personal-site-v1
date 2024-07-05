import { WorkCard } from "@/components/card/WorkCard";
import { WorkType } from "@/components/types/WorkTypes";
import Grid from "@mui/material/Grid";

import work from "@public/work.json"

export default function Summary() {
    return (
        <Grid container columns={{ s: 6, md: 12 }}>
            <Grid xs={6} className="flex justify-center items-center pt-5">
                <WorkCard
                    title={work.WeHelpAndCare.title}
                    org={work.WeHelpAndCare.org}
                    workType={WorkType.UXR}
                    alt=""
                    navTo="/work/we-help-and-care/" />
            </Grid>
            <Grid xs={6} className="flex justify-center items-center pt-5">
                <WorkCard
                    title={work.MelaninVillage.title}
                    org={work.MelaninVillage.org}
                    workType={WorkType.UXR} 
                    alt=""
                    navTo="/work/melanin-village/"/>
            </Grid>
            <Grid xs={6} className="flex justify-center items-center pt-5">
                <WorkCard
                    title={work.EndangeredSpecies.title}
                    org={work.EndangeredSpecies.org}
                    workType={WorkType.UIUX} 
                    alt=""
                    navTo="/work/endangered-species-international/"/>
            </Grid>
            <Grid xs={6} className="flex justify-center items-center pt-5">
                <WorkCard
                    title={work.ParkMobileLive.title}
                    org={work.ParkMobileLive.org}
                    workType={WorkType.UIUX} 
                    alt=""
                    navTo="/work/parkmobile-live/"/>
            </Grid>
        </Grid>
    );
}
