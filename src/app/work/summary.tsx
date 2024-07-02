import { WorkCard, WorkType } from "@/components/card/WorkCard";
import Grid from "@mui/material/Grid";

export default function Summary() {
    return (
        <Grid container columns={{ s: 6, md: 12 }}>
            <Grid xs={6} className="flex justify-center items-center pt-5">
                <WorkCard
                    title="Empowering Humanitarian Efforts in Southeast Asia: Product Validation for Impact"
                    org="We Help and Care"
                    workType={WorkType.UXR} />
            </Grid>
            <Grid xs={6} className="flex justify-center items-center pt-5">
                <WorkCard
                    title="Closing the Equity Gap: Content Optimization to Support Black and Brown Homeschooling"
                    org="The Melanin Village"
                    workType={WorkType.UXR} />
            </Grid>
            <Grid xs={6} className="flex justify-center items-center pt-5">
                <WorkCard
                    title="Cultivating Conservation Champions: Inspiring Action Through Wildlife Education"
                    org="Endangered Species International"
                    workType={WorkType.UIUX} />
            </Grid>
            <Grid xs={6} className="flex justify-center items-center pt-5">
                <WorkCard
                    title="Smart Parking: Real-Time Availability for a Smoother Commute"
                    org="ParkMobile LIVE"
                    workType={WorkType.UIUX} />
            </Grid>
        </Grid>
    );
}
