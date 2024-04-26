import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.textcortex.com/v1/codes",
  auth: "gAAAAABmLA3hx - WeAPECOPB42Yv1JJOzTU9gGqH4U9LcxLlQe9O1iTddQZW5SREPRnzQVy0rKFrB9GsMIAzYeO2NG8NnTX1nhK93BihUIgLA7OIW4Qie9wLPskE2ZFbLHCYSoGN2P_tE",
  // "http://localhost:5000/aqi",
});

export default instance;
