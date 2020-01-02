// BUDGET CONTROLLER
var budgetController = (function () {

    // Some code

})();



// UI CONTROLLER
var UIController = (function () {

    // Some code

})();



// GLOBAL APPLICATION CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

    var ctrlAddItem = function () {

        //TODO: 1. Get field input data

        //TODO: 2. Add the item to the budget controller

        //TODO: 3. Add the item to the user interface

        //TODO: 4. Calculate the budget

        //TODO: 5. Display the budget on the user interface

    }

    // Add button event listener
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    // Enter key event listener
    document.addEventListener('keypress', function (event) {

        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }

    });

})(budgetController, UIController);