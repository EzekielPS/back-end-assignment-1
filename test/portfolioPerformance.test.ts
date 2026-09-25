import { calculatePortfolioPerformance } from "../src/portfolio/portfolioPerformance";

// 02 - Gain
describe("calculatePortfolioPerformance", () => {
    it("should calculate 60% gain", () => {
        const result = calculatePortfolioPerformance(10000, 16000);

        expect(result.profitOrLoss).toBe(6000);
        expect(result.percentageChange).toBe(60);
        expect(result.performanceSummary).toBe("Excellent performance! Your investments are doing great.")
    })
});

// 03 - Gain
describe("calculatePortfolioPerformance", () => {
    it("should calculate 30% gain", () => {
        const result = calculatePortfolioPerformance(10000, 13000);

        expect(result.profitOrLoss).toBe(3000);
        expect(result.percentageChange).toBe(30);
        expect(result.performanceSummary).toBe("Excellent performance! Your investments are doing great.")
    })
});

// 04 - Gain
describe("calculatePortfolioPerformance", () => {
    it("should calculate less than 30% but greater than 10% gain", () => {
        const result = calculatePortfolioPerformance(10000, 12999.9);

        expect(result.profitOrLoss).toBe(2999.8999999999996);
        expect(result.percentageChange).toBe(29.999);
        expect(result.performanceSummary).toBe("Solid gain. Keep monitoring your investments.")
    })
});

// 05 - Gain
describe("calculatePortfolioPerformance", () => {
    it("should calculate 10% gain", () => {
        const result = calculatePortfolioPerformance(10000, 11000);

        expect(result.profitOrLoss).toBe(1000);
        expect(result.percentageChange).toBe(10);
        expect(result.performanceSummary).toBe("Solid gain. Keep monitoring your investments.")
    })
});