import { useMemo } from "react";
import { useDrivers, useSafetyAnswers } from "../hooks";

export default function Home() {
  const { data: dataDrivers, isPending: isPendingDrivers } = useDrivers();
  const { data: dataSafetyAnswers, isPending: isPendingSafetyAnswers } =
    useSafetyAnswers();

  if (isPendingDrivers || isPendingSafetyAnswers) return <div>Loading...</div>;

  return (
    <div>
      <pre>{JSON.stringify({ dataDrivers, dataSafetyAnswers }, null, 2)}</pre>
    </div>
  );
}
