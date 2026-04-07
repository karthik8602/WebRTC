let IS_PROD = true;

const server = IS_PROD
  ? "https://webrtc-f1ci.onrender.com"
  : "http://localhost:3000/";

export default server;
