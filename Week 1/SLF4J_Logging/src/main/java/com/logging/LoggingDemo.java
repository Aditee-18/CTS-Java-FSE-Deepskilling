package com.logging;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingDemo {
    private static final Logger logger = LoggerFactory.getLogger(LoggingDemo.class);

    public static void main(String[] args) {
        logger.info("Application starting...");
        logger.debug("Debug log message");
        logger.warn("Warning log message");
        try {
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            logger.error("An error occurred: {}", e.getMessage(), e);
        }
        logger.info("Application completed.");
    }
}
