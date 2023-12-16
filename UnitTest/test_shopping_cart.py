from shopping_cart import ShoppingCart
import pytest
# mock: fake behavior of a function or class w/o actually calling it
@pytest.fixture
def cart():
    # setup cart
    return ShoppingCart(5)


def test_add_item(cart):
    cart.add_item("apple")
    assert cart.size() == 1

def when_item_added_then_cart_contains_item(cart):
    cart.add_item("apple")
    assert "apple" in cart.get_items()

def test_when_add_more_than_max_items_should_fail(cart):
    for i in range(5):
        cart.add_item("apple")
    
    with pytest.raises(OverflowError):
        cart.add_item("apple")
    
def test_can_get_total_price(cart):
    print("Testing can get price")
    cart.add_item("apple")
    cart.add_item("orange")
    item_database = ItemDatabase()
    assert cart.get_total_price(item_database) == 3.0
    
    def mock_get_item(item: str):
        if item == "apple":
            return 1.0
        elif item == "orange":
            return 2.0

    item_database.get = Mock(side_effect=mock_get_item)
    assert cart.get_total_price(item_database) == 3.0
    
    price_map = {
        "apple": 1.0, "orange": 2.0
    }
    assert cart.get_total_price(price_map) == 3.0

def get_total_price(self, price_map):
    total_price = 0
    for item in self.items:
        total_price += price_map.get(item)
    return total_price
    assert cart.get_total_price(price_map) == 3.0

# fixtures allow us to call each function as an argument in our unit test