export type SafetyAnswer = {
  id: string;
  speedingTickets: boolean;
  vehicleServiced: boolean;
  consumedAlcohol: boolean;
};

export type Driver = {
  id: string;
  name: string;
  phone: string | null;
  rego: string | null;
};

export type MergedSafetyAnswersDriver = {
  id: string;
  name: string;
  phone: string;
  rego: string;
  speedingTickets: boolean;
  vehicleServiced: boolean;
  consumedAlcohol: boolean;
};
