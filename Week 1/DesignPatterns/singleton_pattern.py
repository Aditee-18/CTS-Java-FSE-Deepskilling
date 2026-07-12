import threading

class Logger:
    _instance = None
    _lock = threading.Lock()

    def __new__(cls, *args, **kwargs):
        if not cls._instance:
            with cls._lock:
                if not cls._instance:
                    cls._instance = super(Logger, cls).__new__(cls)
                    cls._instance._initialized = False
        return cls._instance

    def __init__(self):
        if not self._initialized:
            self.logs = []
            self._initialized = True

    def log(self, message):
        self.logs.append(message)

    def get_logs(self):
        return self.logs

if __name__ == "__main__":
    logger1 = Logger()
    logger2 = Logger()
    
    logger1.log("First message")
    logger2.log("Second message")
    
    assert logger1 is logger2
    assert logger1.get_logs() == logger2.get_logs()
    print("Singleton check passed")
