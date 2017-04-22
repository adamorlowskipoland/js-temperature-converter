const model = {
    "celsius" : document.getElementById('celsius'),
    "celsiusValue" : document.getElementById('celsiusValue'),

    "fahrenheit" : document.getElementById('fahrenheitValue'),
    "kalvin" : document.getElementById('kalvinValue'),
}

const operator = {
    "upDateTempValues" : function(val) {
        model.celsiusValue.textContent = val;
    },

    "convert" : function(val) {
        model.celsiusValue.textContent = val;
        model.fahrenheit.textContent = parseInt(val) + 32;;
        model.kalvin.textContent = parseInt(val) + 273;;
    },
    "eventListeners" : function() {
        const celsiusRange = document.getElementById('celsius');
        celsiusRange.addEventListener('mousemove', function() {
            operator.convert(this.value);
        });
        const btns = Array.from(document.getElementsByClassName('btn'));
        btns.forEach(btn => btn.addEventListener('click', function() {
            btns.forEach(btn => btn.classList.remove('btn-active'));
            btn.classList.add('btn-active');
        }));
    }
}

const view = {
    "initDisplay" : function() {
        operator.eventListeners();
        operator.convert(0);
    }
}

view.initDisplay();