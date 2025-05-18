export function calculateTotalExperience(fromStartDate: string): string {
  const startDate = new Date(fromStartDate);
  const currentDate = new Date();

  const totalMonths =
    (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
    (currentDate.getMonth() - startDate.getMonth());

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return `${years} years ${months} months`;
}

// Example usage:
const totalExperience = calculateTotalExperience("2019-01-01");
console.log(totalExperience); // Outputs: "6 years 4 months"
