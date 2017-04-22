const model = {
    "celsius" : document.getElementById('celsius'),
    "fahrenheit" : document.getElementById('fahrenheit'),
}

const operator = {

    "convert" : function() {
        var celsiusValue = model.celsius.value;
        var fahrenheitValue = celsiusValue + 32;
        model.fahrenheit.value = fahrenheitValue;
        console.log(celsiusValue, fahrenheitValue);
    },
    "eventListeners" : function() {
        const form = document.getElementById('form');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            operator.convert()
        });
    }
}

const view = {
    "initDisplay" : function() {
        operator.eventListeners();
    }
}

view.initDisplay();