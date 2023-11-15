import { useDrivers, useSafetyAnswers } from "../hooks";

export default function Home() {
  const {
    data: dataDrivers,
    isPending: isPendingDrivers,
    error: errorDrivers,
  } = useDrivers();

  const {
    data: dataSafetyAnswers,
    isPending: isPendingSafetyAnswers,
    error: errorSafetyAnswers,
  } = useSafetyAnswers();

  if (isPendingDrivers || isPendingSafetyAnswers) return <div>Loading...</div>;

  if (errorDrivers)
    return <span>Driver API Error: {errorDrivers.message}</span>;

  if (errorSafetyAnswers)
    return <span>Safety API Error: {errorSafetyAnswers.message}</span>;

  return (
    <pre>{JSON.stringify({ dataDrivers, dataSafetyAnswers }, null, 2)}</pre>
  );
}
