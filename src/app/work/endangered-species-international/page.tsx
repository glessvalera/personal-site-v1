import { WorkSummary } from "@/components/page/WorkSummary";

import work from "@public/work.json"

export default function EndangeredSpecies() {
  return (
    <div className="flex flex-col items-center justify-between">
      <WorkSummary {...work.EndangeredSpecies} />
    </div>
  );
}
