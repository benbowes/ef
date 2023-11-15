import { http, HttpResponse } from "msw";
import { SafetyAnswer, Driver } from "./types";
import drivers from "./data/drivers.json";
import safteyAnswers from "./data/safetyAnswers.json";

export const handlers = [
  http.get("https://backend/api/v2/drivers", ({ request, params, cookies }) =>
    HttpResponse.json<Driver[]>(drivers)
  ),
  http.get(
    "https://backend/api/v1/safety-answers",
    ({ request, params, cookies }) =>
      HttpResponse.json<SafetyAnswer[]>(safteyAnswers)
  ),
];
