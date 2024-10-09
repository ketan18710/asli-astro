const fs = require("fs");
const path = require("path");
require("dotenv").config();

const htmlFile = path.join(__dirname, "index.html");
let htmlContent = fs.readFileSync(htmlFile, "utf8");

// Get all environment variables
const envVars = process.env;

// Replace all placeholders in the HTML file
for (const [key, value] of Object.entries(envVars)) {
  const placeholder = `%${key}%`;
  const regex = new RegExp(placeholder, "g");
  htmlContent = htmlContent.replace(regex, value);
}

fs.writeFileSync(htmlFile, htmlContent);

console.log(
  "Build completed: Environment variables have been injected into the HTML file."
);
