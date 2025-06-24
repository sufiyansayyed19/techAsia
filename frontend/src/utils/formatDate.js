// src/utils/formatDate.js

/**
 * Formats a date string (e.g., "2023-08-15") into a more readable format (e.g., "August 15, 2023").
 * @param {string} dateString - The date string to format.
 * @returns {string} The formatted date, or "Invalid Date" if the input is invalid.
 */
export const formatDate = (dateString) => {
  if (!dateString) return "Invalid Date";

  // The 'T00:00:00' part is added to prevent timezone issues
  // where the date might be interpreted as the previous day.
  const date = new Date(`${dateString}T00:00:00`);

  if (isNaN(date)) return "Invalid Date";

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};