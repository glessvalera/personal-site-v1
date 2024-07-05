import { WorkSummary } from "@/components/page/WorkSummary";

import work from "@public/work.json"

export default function ParkMobileLive() {
  return (
    <div className="flex flex-col items-center justify-between">
      <WorkSummary {...work.ParkMobileLive} />
    </div>
  );
}
