const { messages } = require("./new-messages");

const localHour = new Date().getHours();
const generateGreeting = (hour) => {
  if (hour >= 18 || hour < 6) return "Boa Noite!";
  if (hour >= 18 && hour < 6) return "Bom Dia!";
  if (hour >= 12 && hour < 18) return "Boa Tarde!";
  return "...";
};
const greeting = generateGreeting(localHour);
console.log(greeting);
messages.map((message, i) => console.log(`${i}: ${message}`));
