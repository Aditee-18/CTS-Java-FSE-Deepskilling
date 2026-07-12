class Product:
    def __init__(self, product_id, product_name, category):
        self.product_id = product_id
        self.product_name = product_name
        self.category = category

    def __repr__(self):
        return f"Product({self.product_id}, '{self.product_name}', '{self.category}')"

def linear_search(products, target_name):
    for product in products:
        if product.product_name == target_name:
            return product
    return None

def binary_search(products, target_name):
    low = 0
    high = len(products) - 1
    while low <= high:
        mid = (low + high) // 2
        mid_product = products[mid]
        if mid_product.product_name == target_name:
            return mid_product
        elif mid_product.product_name < target_name:
            low = mid + 1
        else:
            high = mid - 1
    return None

if __name__ == "__main__":
    products = [
        Product(101, "Laptop", "Electronics"),
        Product(102, "Smartphone", "Electronics"),
        Product(103, "Headphones", "Accessories"),
        Product(104, "Keyboard", "Accessories"),
        Product(105, "Monitor", "Electronics")
    ]
    
    sorted_products = sorted(products, key=lambda x: x.product_name)
    
    res1 = linear_search(products, "Keyboard")
    res2 = binary_search(sorted_products, "Keyboard")
    
    print("Linear Search:", res1)
    print("Binary Search:", res2)
