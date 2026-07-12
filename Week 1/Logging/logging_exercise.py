import logging

def configure_logging():
    logger = logging.getLogger("app_logger")
    logger.setLevel(logging.DEBUG)
    
    c_handler = logging.StreamHandler()
    f_handler = logging.FileHandler("app.log", mode="w")
    
    c_handler.setLevel(logging.INFO)
    f_handler.setLevel(logging.DEBUG)
    
    formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
    c_handler.setFormatter(formatter)
    f_handler.setFormatter(formatter)
    
    logger.addHandler(c_handler)
    logger.addHandler(f_handler)
    return logger

def run_logging_demo():
    logger = configure_logging()
    
    logger.debug("Debug log: starting process")
    logger.info("Info log: normal application flow step")
    logger.warning("Warning log: resource usage approaching threshold")
    logger.error("Error log: database connection timed out")
    logger.critical("Critical log: system shutdown initiated")

if __name__ == "__main__":
    run_logging_demo()
