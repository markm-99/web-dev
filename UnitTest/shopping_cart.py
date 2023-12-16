from typing import List

class ShoppingCart:
    def __init__(self, max_size: int = 10):
        # keep list of strings representing items in cart
        self.items: List[str] = []
        self.max_size = max_size

    def add_item(self, item: str):
        if self.size() >= self.max_size:
            raise OverflowError("Cart is full")
        #  add new item to end of list
        self.items.append(item)

    def remove_item(self, item: str):
        # remove item from list
        self.items.remove(item)

    def show_items(self):
        print("Items in the cart:")
        for item in self.items:
            print(f"* {item}")

    def size(self):
        # return number of items in cart
        return len(self.items)
    
    def get_items(self) -> List[str]:
        # return list of items in cart
        return self.items
    
    def get_total_price(self, price_map):
        # return total price of items in cart
        return 0

    def checkout(self):
        print("Checking out...")
        print("Your items:")
        self.show_items()
        print("Thanks for shopping with us!")
        self.items = []