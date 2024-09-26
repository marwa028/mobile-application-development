// Shopping Cart Class
class ShoppingCart {
    constructor() {
        this.cart = []; // Initialize an empty cart
    }

    // 1. Add Items to the Cart
    addItem = (productId, productName, quantity, price) => {
        const product = { productId, productName, quantity, price };
        this.cart.push(product); // Add product to the cart
    };

    // 2. Remove Items from the Cart
    removeItem = (productId) => {
        this.cart = this.cart.filter(item => item.productId !== productId); // Filter out the item
    };

    // Update quantity of an item
    updateItemQuantity = (productId, newQuantity) => {
        const item = this.cart.find(item => item.productId === productId);
        if (item) {
            item.quantity = newQuantity; // Update the quantity
        }
    };

    // 3. Calculate Total Cost
    calculateTotal = () => {
        return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0); // Calculate total
    };

    // 4. Display Cart Summary
    displayCartSummary = () => {
        return this.cart.map(item => ({
            productName: item.productName,
            quantity: item.quantity,
            totalPrice: item.price * item.quantity // Calculate total price for each product
        }));
    };

    // Filter out items with zero quantity
    filterOutZeroQuantity = () => {
        this.cart = this.cart.filter(item => item.quantity > 0); // Keep only items with quantity > 0
    };

    // Bonus: Apply Discount Code
    applyDiscount = (code) => {
        const discountCodes = { 'SAVE10': 0.10, 'SAVE20': 0.20 }; // Example discount codes
        const discount = discountCodes[code] || 0; // Get discount if valid
        const total = this.calculateTotal();
        return total - (total * discount); // Apply discount
    };
}

// Example usage:
const cart = new ShoppingCart();
cart.addItem(1, 'Apple', 3, 0.5); // Add an item
cart.addItem(3, 'pineapple', 3, 0.9); // Add an item
cart.addItem(2, 'Banana', 2, 0.3); // Add another item
console.log(cart.displayCartSummary()); // Display cart summary
console.log('Total:', cart.calculateTotal()); // Calculate total cost
cart.updateItemQuantity(1, 5); // Update quantity of Apple
console.log(cart.displayCartSummary()); // Display updated cart summary
cart.removeItem(2); // Remove Banana from cart
console.log('Total after removing Banana:', cart.calculateTotal()); // Total after removal
cart.filterOutZeroQuantity(); // Filter out items with zero quantity
console.log('Total with discount SAVE10:', cart.applyDiscount('SAVE10')); // Apply discount




