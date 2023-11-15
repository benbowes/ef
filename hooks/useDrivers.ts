import { useQuery } from "@tanstack/react-query";
import { Driver } from "../mocks/types";

const fetchDrivers = async (): Promise<Driver[]> =>
  await fetch("https://backend/api/v2/drivers").then((res) => res.json());

const useDrivers = () =>
  useQuery({
    queryKey: ["drivers"],
    queryFn: () => fetchDrivers(),
  });

export { useDrivers, fetchDrivers };
