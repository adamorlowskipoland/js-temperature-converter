const model = {
    "celsius" : document.getElementById('celsius'),
    "celsiusValue" : document.getElementById('celsiusValue'),

    "fahrenheit" : document.getElementById('fahrenheit'),
    "kalvin" : document.getElementById('kalvin'),
}

const operator = {
    "upDateCelsiusValue" : function(val) {
        model.celsiusValue.value = val;
    },

    "convert" : function() {
        var celsiusValue = model.celsius.value;
        var fahrenheitValue = parseInt(celsiusValue) + 32;
        var kalvinValue = parseInt(celsiusValue) + 273;

        model.fahrenheit.value = fahrenheitValue;
        model.kalvin.value = kalvinValue;
        console.log(celsiusValue, fahrenheitValue, kalvinValue);
    },
    "eventListeners" : function() {
        const form = document.getElementById('form');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            operator.convert()
        });
        const celsiusRange = document.getElementById('celsius');
        celsiusRange.addEventListener('mousemove', function() {
            operator.upDateCelsiusValue(this.value);
            console.log(this.value);
        });
    }
}

const view = {
    "initDisplay" : function() {
        operator.eventListeners();
    }
}

view.initDisplay();