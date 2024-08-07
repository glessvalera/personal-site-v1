import { WorkSummary } from "@/components/page/WorkSummary";

import work from "@public/work.json"

export default function WeHelpAndCare() {
  return (
    <div className="flex flex-col items-center justify-between">
      <WorkSummary {...work.WeHelpAndCare} />
    </div>
  );
}
