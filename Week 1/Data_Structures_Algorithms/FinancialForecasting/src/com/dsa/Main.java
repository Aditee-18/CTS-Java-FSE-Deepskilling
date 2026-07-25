package com.dsa;

public class Main {
    public static void main(String[] args) {
        double initialInvestment = 1000.0;
        double annualGrowthRate = 0.05;
        int forecastYears = 5;

        double futureValue = FinancialForecast.calculateFutureValue(initialInvestment, annualGrowthRate, forecastYears);
        System.out.printf("Future Value after %d years: %.2f%n", forecastYears, futureValue);
    }
}
