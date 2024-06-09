export function getColorClass(caseNumber: number) {
  const colors = [
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "rose",
  ];
  const colorIndex = (caseNumber - 1) % colors.length;
  const colorIntensity =
    Math.floor((caseNumber - 1) / colors.length) * 100 + 300;
  const hoverIntensity = colorIntensity + 50;

  if (colorIntensity > 900) {
    return `bg-${colors[colorIndex]}-900 hover:bg-${colors[colorIndex]}-950`;
  }

  return `bg-${colors[colorIndex]}-${colorIntensity} hover:bg-${colors[colorIndex]}-${hoverIntensity}`;
}

// 등차수열의 합
export function arithmeticSequenceSum(n: number) {
  return (n * (1 + n)) / 2;
}
