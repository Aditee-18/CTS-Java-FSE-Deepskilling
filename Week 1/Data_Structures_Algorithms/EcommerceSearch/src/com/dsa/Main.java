package com.dsa;

import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product(103, "Laptop", "Electronics"),
            new Product(101, "Phone", "Electronics"),
            new Product(105, "Headphones", "Audio"),
            new Product(102, "Desk", "Furniture"),
            new Product(104, "Chair", "Furniture")
        };

        Product result1 = SearchAlgorithms.linearSearch(products, 105);
        System.out.println("Linear Search Result: " + result1);

        Arrays.sort(products);

        Product result2 = SearchAlgorithms.binarySearch(products, 105);
        System.out.println("Binary Search Result: " + result2);
    }
}
