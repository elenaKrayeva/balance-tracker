export function getTodayDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); 
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function getOneMonthAgoDate() {
  const today = new Date();
  today.setMonth(today.getMonth() - 1);
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function getOneYearAgoDate() {
  const today = new Date();
  today.setFullYear(today.getFullYear() - 1); 
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export function generateRgbColors(numColors) {
  return Array.from({ length: numColors }, () => {
    const red = Math.floor(Math.random() * 256); 
    const green = Math.floor(Math.random() * 128); 
    const blue = Math.floor(Math.random() * 256); 
    return `rgb(${red},${green},${blue})`;
  });
};

export function capitalizeStr(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
} 