package com.quality;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

public class CleanCodeService {

    public List<String> processUserNames(List<String> rawNames) {
        if (rawNames == null) {
            throw new IllegalArgumentException("Input names list cannot be null");
        }

        return rawNames.stream()
                .filter(Objects::nonNull)
                .map(String::trim)
                .filter(name -> !name.isEmpty())
                .map(String::toUpperCase)
                .collect(Collectors.toList());
    }

    public double calculateTotalWithTax(double amount, double taxRate) {
        if (amount < 0 || taxRate < 0) {
            throw new IllegalArgumentException("Amount and tax rate must be non-negative");
        }
        return amount + (amount * taxRate / 100.0);
    }
}
