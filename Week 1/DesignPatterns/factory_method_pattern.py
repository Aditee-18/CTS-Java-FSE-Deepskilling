from abc import ABC, abstractmethod

class Document(ABC):
    @abstractmethod
    def open(self):
        pass

class WordDocument(Document):
    def open(self):
        return "Opening Word document"

class PdfDocument(Document):
    def open(self):
        return "Opening PDF document"

class ExcelDocument(Document):
    def open(self):
        return "Opening Excel document"

class DocumentFactory(ABC):
    @abstractmethod
    def create_document(self) -> Document:
        pass

class WordDocumentFactory(DocumentFactory):
    def create_document(self) -> Document:
        return WordDocument()

class PdfDocumentFactory(DocumentFactory):
    def create_document(self) -> Document:
        return PdfDocument()

class ExcelDocumentFactory(DocumentFactory):
    def create_document(self) -> Document:
        return ExcelDocument()

if __name__ == "__main__":
    factories = [WordDocumentFactory(), PdfDocumentFactory(), ExcelDocumentFactory()]
    for factory in factories:
        doc = factory.create_document()
        print(doc.open())
