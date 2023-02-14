import { handleAuth } from "@auth0/nextjs-auth0";

console.log("I am in the entry file");
console.log("the AUTH0_SECRET env var is set: ", process.env.AUTH0_SECRET);
console.log("the AUTH0_BASE_URL env var is set: ", process.env.AUTH0_BASE_URL);
console.log(
  "the AUTH0_ISSUER_BASE_URL env var is set: ",
  process.env.AUTH0_ISSUER_BASE_URL
);
console.log(
  "the AUTH0_CLIENT_SECRET env var is set: ",
  process.env.AUTH0_CLIENT_SECRET
);
console.log(
  "the AUTH0_CLIENT_ID env var is set: ",
  process.env.AUTH0_CLIENT_ID
);

export default handleAuth();
