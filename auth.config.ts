/*export default {
    providers: [
      {
        domain: "https://dominant-seahorse-57.clerk.accounts.dev/",
        applicationID: "convex",
      },
    ]
  };*/
const authConfig = {
    providers: [
      {
        
        domain: process.env.CLERK_ISSUER_URL,
        applicationID: "convex",
      },
    ],
  };
  
  export default authConfig;