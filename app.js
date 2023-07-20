// Function to capture and return selected options for input elements of type checkbox or radio
function getSelectedOptions(inputName) {
    let selectedElements = document.querySelectorAll(`input[name="${inputName}"]:checked`);
    let selectedOptions = Array.from(selectedElements).map(el => el.value);
    return selectedOptions;
}

// Pizza Class
class Pizza {
    constructor(size, crust, extra, sauce, toppings, delivery) {
        this.size = size;
        this.crust = crust;
        this.extra = extra;
        this.sauce = sauce;
        this.toppings = toppings;
        this.delivery = delivery;
    }

    describe() {
        return `You've ordered a ${this.size} size, ${this.crust} crust pizza with ${this.sauce} sauce and the following toppings: ${this.toppings.join(', ')}.\nExtra: ${this.extra.join(', ')}.\nDelivery Option: ${this.delivery}.`;
    }
}

// Event listener for the form submission
document.getElementById('pizzaOrderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let size = document.getElementById('size').value;
    let crust = document.getElementById('crust').value;
    let extra = getSelectedOptions("extra");
    let sauce = getSelectedOptions("sauce")[0];  // only one sauce can be selected
    let toppings = getSelectedOptions("toppings");
    let delivery = getSelectedOptions("delivery")[0];  // only one delivery option can be selected

    let pizza = new Pizza(size, crust, extra, sauce, toppings, delivery);
    
    // Output the pizza description
    let output = document.getElementById('output');
    output.innerText = pizza.describe();
});

// Add your student id and name on the page
document.getElementById('studentInfo').innerText = "Student ID: 200499973, Name: Mansi Patel";
