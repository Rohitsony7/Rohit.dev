import { calculateTotalExperience } from "./calculate-experience";

export function formatPeriod(
  startDate: string,
  endDate: string | "Present"
): string {
  const formattedEndDate =
    endDate === "Present"
      ? "Present"
      : new Date(endDate).toLocaleDateString("en-US", {
          month: "short",
          year: "numeric",
        });
  const experience = calculateTotalExperience(startDate);
  const formattedStartDate = new Date(startDate).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  return `${formattedStartDate} - ${formattedEndDate} (${experience})`;
}
