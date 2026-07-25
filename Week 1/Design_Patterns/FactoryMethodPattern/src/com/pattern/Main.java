package com.pattern;

public class Main {
    public static void main(String[] args) {
        DocumentFactory wordFactory = new WordFactory();
        wordFactory.processDocument();

        DocumentFactory pdfFactory = new PdfFactory();
        pdfFactory.processDocument();

        DocumentFactory excelFactory = new ExcelFactory();
        excelFactory.processDocument();
    }
}
