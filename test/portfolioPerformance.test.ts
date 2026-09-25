import { calculatePortfolioPerformance } from "../src/portfolio/portfolioPerformance";

describe("calculatePortfolioPerformance", () => {
    it("should calculate 60% gain", () => {
        const result = calculatePortfolioPerformance(10000, 16000);

        expect(result.profitOrLoss).toBe(6000);
        expect(result.percentageChange).toBe(60);
        expect(result.performanceSummary).toBe("Excellent performance! Your investments are doing great.")
    })
})