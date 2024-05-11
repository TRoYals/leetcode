import numpy as np


def normal_pdf(x, mean, stddev):
    return (1 / (np.sqrt(2 * np.pi) * stddev)) * np.exp(
        -((x - mean) ** 2) / (2 * stddev**2)
    )


def importance_sampling(a, n, theta):
    alt_samples = theta + np.random.randn(n)
    likelihood_ratio = normal_pdf(alt_samples, 0, 1) / normal_pdf(alt_samples, theta, 1)
    h_values = np.exp(a * np.sqrt(np.maximum(alt_samples, 0))) * (alt_samples >= 0)
    estimate = np.mean(h_values * likelihood_ratio)
    se = np.std(h_values * likelihood_ratio) / np.sqrt(n)
    return estimate, se


def plain_monte_carlo(a, n):
    samples = np.random.randn(n)
    h_values = np.exp(a * np.sqrt(np.maximum(samples, 0))) * (samples >= 0)
    estimate = np.mean(h_values)
    se = np.std(h_values) / np.sqrt(n)
    return estimate, se


a = 1
n = 10000
theta = (a**2 / 4) ** (1 / 3)

is_estimate, is_se = importance_sampling(a, n, theta)
mc_estimate, mc_se = plain_monte_carlo(a, n)

print(f"Importance Sampling Estimate: {is_estimate}, SE: {is_se}")
print(f"Plain Monte Carlo Estimate: {mc_estimate}, SE: {mc_se}")
# Importance Sampling Estimate: 1.2158119755195846, SE: 0.007381955168544379
# Plain Monte Carlo Estimate: 1.2283898414563665, SE: 0.013587945443593558
