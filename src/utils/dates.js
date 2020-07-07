export const minutesToHours = minutes => {
  const hours = (minutes / 60);
  const rhours = Math.floor(hours);
  const rminutes = Math.round((hours - rhours) * 60);
  if (rhours === 0) return `${rminutes}min`;
  return `${rhours}h ${rminutes}min`;
};