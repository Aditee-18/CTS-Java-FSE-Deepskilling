def calculate_future_value(present_value, growth_rate, periods):
    if periods == 0:
        return present_value
    return calculate_future_value(present_value * (1 + growth_rate), growth_rate, periods - 1)

if __name__ == "__main__":
    initial_value = 1000.0
    rate = 0.05
    years = 10
    
    future_value = calculate_future_value(initial_value, rate, years)
    print(f"Initial Value: {initial_value}")
    print(f"Growth Rate: {rate * 100}%")
    print(f"Periods (Years): {years}")
    print(f"Predicted Future Value: {future_value:.2f}")
