import numpy as np


def estimate_probability_ce(b, pilot_samples_size, final_samples_size):
    def indicator_function(val_x, val_y, val_z):
        return (np.minimum(val_x + val_y, val_y + 2 * val_z + 1) >= b).astype(float)

    pilot_x = np.random.randn(pilot_samples_size)
    pilot_y = np.random.randn(pilot_samples_size)
    pilot_z = np.random.randn(pilot_samples_size)

    # Calculate pilot indicator values
    pilot_indicators = indicator_function(pilot_x, pilot_y, pilot_z)

    # Estimate the tilting parameters
    est_x = np.average(pilot_x, weights=pilot_indicators)
    est_y = np.average(pilot_y, weights=pilot_indicators)
    est_z = np.average(pilot_z, weights=pilot_indicators)

    # Generate new samples
    samples_x = est_x + np.random.randn(final_samples_size)
    samples_y = est_y + np.random.randn(final_samples_size)
    samples_z = est_z + np.random.randn(final_samples_size)

    # Calculate the density ratio
    weights_x = np.exp(-0.5 * (samples_x**2 - (samples_x - est_x) ** 2))
    weights_y = np.exp(-0.5 * (samples_y**2 - (samples_y - est_y) ** 2))
    weights_z = np.exp(-0.5 * (samples_z**2 - (samples_z - est_z) ** 2))
    combined_weights = weights_x * weights_y * weights_z

    # Compute H values
    h_vals = indicator_function(samples_x, samples_y, samples_z) * combined_weights
    est_prob = h_vals.mean()
    est_se = h_vals.std() / np.sqrt(final_samples_size)

    # Print results
    print(f"b={b}: CE Prob. Estimate = {est_prob:.4f}, SE = {est_se:.4e}")
    return est_prob, est_se


def estimate_probability_mc(b, samples_size):
    def indicator_function(val_x, val_y, val_z):
        return (np.minimum(val_x + val_y, val_y + 2 * val_z + 1) >= b).astype(float)

    # Generate samples
    samples_x = np.random.randn(samples_size)
    samples_y = np.random.randn(samples_size)
    samples_z = np.random.randn(samples_size)

    # Calculate indicators
    mc_indicators = indicator_function(samples_x, samples_y, samples_z)
    est_prob = mc_indicators.mean()
    est_se = mc_indicators.std() / np.sqrt(samples_size)

    # Print results
    print(f"b={b}: MC Prob. Estimate = {est_prob:.4f}, SE = {est_se:.4e}")
    return est_prob, est_se


prob_thresholds = [1, 2, 3, 5]
results_ce = []
results_mc = []

for b_val in prob_thresholds:
    ce_prob, ce_se = estimate_probability_ce(b_val, 2000, 10000)
    mc_prob, mc_se = estimate_probability_mc(b_val, 10000)
    results_ce.append((ce_prob, ce_se))
    results_mc.append((mc_prob, mc_se))
