/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: "postgresql",
    dbCredentials: {
        url: 'postgresql://neondb_owner:wTM4FSsu6oeP@ep-noisy-darkness-a5vwifir.us-east-2.aws.neon.tech/neondb?sslmode=require',
    },
};
