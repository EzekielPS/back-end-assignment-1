import express, { Express } from "express";
import { calculatePortfolioPerformance } from "./portfolio/portfolioPerformance";

const app: Express = express();

// Interface for health check response
interface HealthCheckResponse {
    status: string;
    uptime: number;
    timestamp: string;
    version: string;
}

app.get("/", (req, res) => {
    res.send("Hello, world!");
});

/**
 * Health check endpoint that returns server status information
 * @returns JSON response with server health metrics
 */
app.get("/api/v1/health", (req, res) => {
    const healthData: HealthCheckResponse = {
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    };

    res.json(healthData);
});

app.get("/api/v1/portfolio/performance", (req, res) => {

    const initialInvestment = Number(req.query.initialInvestment)
    const currentValue = Number(req.query.currentValue)

    const result = calculatePortfolioPerformance(initialInvestment, currentValue)

    res.json(result)
})

export default app;
