function formatHHMMSS(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
    throw new TypeError("formatHHMMSS expects a valid Date");
  }

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { formatHHMMSS };
}

if (typeof window !== "undefined") {
  window.formatHHMMSS = formatHHMMSS;
}
