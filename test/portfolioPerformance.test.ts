import { calculatePortfolioPerformance } from "../src/portfolio/portfolioPerformance";

describe("calculatePortfolioPerformance", () => {
    it("should calculate 60% gain", () => {
        const result = calculatePortfolioPerformance(10000, 16000);

        expect(result.profitOrLoss).toBe(6000);
        expect(result.percentageChange).toBe(60);
        expect(result.performanceSummary).toBe("Excellent performance! Your investments are doing great.")
    })
});

describe("calculatePortfolioPerformance", () => {
    it("should calculate 30% gain", () => {
        const result = calculatePortfolioPerformance(10000, 13000);

        expect(result.profitOrLoss).toBe(3000);
        expect(result.percentageChange).toBe(30);
        expect(result.performanceSummary).toBe("Excellent performance! Your investments are doing great.")
    })
});