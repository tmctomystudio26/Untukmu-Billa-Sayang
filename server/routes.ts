import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve the static HTML file at root
  app.get("/", (_req, res) => {
    res.sendFile(path.join(__dirname, "..", "index.html"));
  });

  const httpServer = createServer(app);

  return httpServer;
}
