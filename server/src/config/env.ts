import dotenv from "dotenv";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

dotenv.config({ path: path.resolve(__dirname, "../../../.env") });

export const env = {
  PORT: parseInt(process.env.PORT || process.env.SERVER_PORT || "3001", 10),
  JWT_SECRET: process.env.JWT_SECRET || "",
  ADMIN_USERNAME: process.env.ADMIN_USERNAME || "",
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD || "",
  CLIENT_URL: process.env.CLIENT_URL || "http://localhost:5173",
} as const;

const required = ["JWT_SECRET", "ADMIN_USERNAME", "ADMIN_PASSWORD"] as const;
for (const key of required) {
  if (!env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
}
