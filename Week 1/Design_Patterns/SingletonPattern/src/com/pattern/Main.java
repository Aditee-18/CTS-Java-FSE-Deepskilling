package com.pattern;

public class Main {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        logger1.log("Testing logger instance 1");
        logger2.log("Testing logger instance 2");

        System.out.println("Same instance: " + (logger1 == logger2));
    }
}
