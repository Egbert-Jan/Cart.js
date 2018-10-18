# cart.js

Cart.js is an easy to use shopping-cart system made in JavaScript (Jquery) only.

# Using cart.js
There are a couple of steps you need to take before you can use cart.js. See this example below.

<br>

## Add the scripts:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>
<script src="{paht-to-your-file}/Cart.js"></script>
```

<br>


## This is how your buttons should look for cart.js to work. Of Course you can add your own classes as well

### In your shop file:

#### The add button

```php
<div class="in-shopping-cart" data-product-id="<?= $product["productId"]; ?>">In Cart</div>
```

### In your cart file:

```php
$productObject = new Product();
$cart = json_decode($_COOKIE["cart"]);

foreach ($cart as $cartItem){
  $product = $productObject->getProductByID($cartItem->productId);

```

#### The remove button:
```php
  <div class="out-of-shopping-cart" data-product-id="<?= $product["productId"]; ?>">Remove</div>
```

#### The update inputField:
```php
  <input type="number" value="<?= $cartItem->amount ?>" onchange="updateCart(<?= $cartItem->productId ?>, this.value)">
```

<br>

In this example we use php. You can use any language you want as long as you
* give "data-product-id={id}" the id of the product

* add the classes from this example

* have a method that can get a product by id: $productObject->getProductByID({id})



