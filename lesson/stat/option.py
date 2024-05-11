import numpy as np


def simulate_stock_prices(
    initial_price, annual_return, vol, drift, time_horizon, steps, num_paths
):
    dt = time_horizon / steps
    stock_paths = np.zeros((steps + 1, num_paths))
    stock_paths[0] = initial_price

    for step in range(1, steps + 1):
        dW = np.random.normal(0, np.sqrt(dt), num_paths)
        stock_paths[step] = (
            stock_paths[step - 1] * (1 + annual_return * dt)
            + np.sqrt(vol**2 + drift**2 * stock_paths[step - 1] ** 2) * dW
        )
    return stock_paths


def plain_monte_carlo(stock_paths, strike_price, annual_return, time_horizon):
    payoffs = np.maximum(stock_paths[-1] - strike_price, 0)
    estimate = np.exp(-annual_return * time_horizon) * np.mean(payoffs)
    std_error = np.std(payoffs) / np.sqrt(len(payoffs))
    return estimate, std_error


def control_variate_method(
    stock_paths, strike_price, initial_price, annual_return, time_horizon
):
    payoffs = np.maximum(stock_paths[-1] - strike_price, 0)
    expected_final_price = initial_price * np.exp(annual_return * time_horizon)
    adjustments = stock_paths[-1] - expected_final_price
    correlation_factor = np.corrcoef(payoffs, adjustments)[0, 1]
    adjusted_payoffs = payoffs - correlation_factor * adjustments

    estimate = np.exp(-annual_return * time_horizon) * np.mean(adjusted_payoffs)
    std_error = np.std(adjusted_payoffs) / np.sqrt(len(adjusted_payoffs))
    return estimate, std_error


# Parameters for the simulation
initial_price = 50
annual_return = 0.03
strike_price = 50
time_horizon = 1
num_steps = 30
volatility = 2
drift_coeff = 0.2
num_paths = 10000

# Generate stock price paths
paths = simulate_stock_prices(
    initial_price,
    annual_return,
    volatility,
    drift_coeff,
    time_horizon,
    num_steps,
    num_paths,
)

# Perform estimates using both methods
plain_mc_estimate, plain_mc_std_error = plain_monte_carlo(
    paths, strike_price, annual_return, time_horizon
)
control_variate_estimate, control_variate_std_error = control_variate_method(
    paths, strike_price, initial_price, annual_return, time_horizon
)

# Output the results
print(
    f"Plain Monte Carlo Estimate: {plain_mc_estimate}, Standard Error: {plain_mc_std_error}"
)
print(
    f"Control Variate Estimate: {control_variate_estimate}, Standard Error: {control_variate_std_error}"
)
import numpy as np


def calculate_option_delta(
    initial_price,
    risk_free_rate,
    mu,
    volatility,
    maturity,
    strike_price,
    num_intervals,
    num_simulations,
):
    time_step = maturity / num_intervals
    payoff = np.zeros(num_simulations)

    for simulation in range(num_simulations):
        stock_price = initial_price
        delta = 1
        brownian_motion = np.random.randn(num_intervals)

        for time_interval in range(num_intervals):
            dW = brownian_motion[time_interval]

            # Adjusting delta for each time step
            delta += (
                delta * risk_free_rate * time_step
                + (mu**2)
                * stock_price
                / np.sqrt(volatility**2 + (mu**2) * (stock_price**2))
                * delta
                * np.sqrt(time_step)
                * dW
                + 0.5 * (mu**2) * delta * time_step * (dW**2 - 1)
            )

            # Simulating stock price movement
            stock_price += (
                stock_price * risk_free_rate * time_step
                + np.sqrt(volatility**2 + (mu**2) * (stock_price**2))
                * np.sqrt(time_step)
                * dW
                + 0.5 * (mu**2) * stock_price * time_step * (dW**2 - 1)
            )

        # Calculating the option payoff considering the strike price
        payoff[simulation] = (
            np.exp(-risk_free_rate * maturity) * delta * (stock_price >= strike_price)
        )

    # Calculate expected payoff and standard error
    expected_value = np.mean(payoff)
    standard_error = np.sqrt(np.var(payoff, ddof=1) / num_simulations)

    print(
        "\nExpected Payoff: {:8.4e}, Standard Error: {:8.4e}".format(
            expected_value, standard_error
        )
    )
    return expected_value, standard_error


# Parameters
initial_price = 50
risk_free_rate = 0.03
mu = 0.2
volatility = 2
maturity = 1
strike_price = 50
num_intervals = 30
num_simulations = 10000

# Calculate Delta using the refactored function
calculate_option_delta(
    initial_price,
    risk_free_rate,
    mu,
    volatility,
    maturity,
    strike_price,
    num_intervals,
    num_simulations,
)
