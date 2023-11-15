import { useQuery } from "@tanstack/react-query";
import { SafetyAnswer } from "../mocks/types";

const fetchSafetyAnswers = async (): Promise<SafetyAnswer[]> =>
  await fetch("https://backend/api/v1/safety-answers").then((res) =>
    res.json()
  );

const useSafetyAnswers = () =>
  useQuery({
    queryKey: ["safetyAnswers"],
    queryFn: () => fetchSafetyAnswers(),
  });

export { useSafetyAnswers, fetchSafetyAnswers };
