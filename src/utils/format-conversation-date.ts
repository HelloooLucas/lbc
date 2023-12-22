export function getHoursAndMinutes(date: Date) {
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

function formatConversationDate(timestamp: number) {
  const now = new Date();
  const date = new Date(timestamp);

  const isBeforeToday =
    now > date && now.toDateString() !== date.toDateString();

  if (isBeforeToday) {
    return new Date(timestamp).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });
  }

  return getHoursAndMinutes(date);
}

export default formatConversationDate;
