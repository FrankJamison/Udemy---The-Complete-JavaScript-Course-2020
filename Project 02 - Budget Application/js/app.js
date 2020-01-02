// BUDGET CONTROLLER
var budgetController = (function () {

    // Some code

})();



// UI CONTROLLER
var UIController = (function () {

    // DOM string class names
    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMStrings.inputType).value, // Will be either 'inc' or 'exp'
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            };
        },

        getDOMStrrings: function () {
            return DOMStrings;
        }
    }
})();



// GLOBAL APPLICATION CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

    var setupEventListeners = function () {

        // DOM string class names
        var DOM = UICtrl.getDOMStrrings();

        // Add button event listener
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        // Enter key event listener
        document.addEventListener('keypress', function (event) {

            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }

        });
    };

    var ctrlAddItem = function () {

        // Get field input data
        var input = UICtrl.getInput();

        //TODO: 2. Add the item to the budget controller

        //TODO: 3. Add the item to the user interface

        //TODO: 4. Calculate the budget

        //TODO: 5. Display the budget on the user interface

    };

    return {
        init: function () {
            console.log('Application has started');
            setupEventListeners();
        }
    }

})(budgetController, UIController);

controller.init();