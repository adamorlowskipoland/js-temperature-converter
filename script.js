const model = {
    "range" : document.getElementById('range'),
    "startingValue" : document.getElementById('startingValue'),

    "startingValueName" : document.getElementById('startingValueName'),
    "output1Name" : document.getElementById('output1Name'),
    "output2Name" : document.getElementById('output2Name'),
    "output1" : document.getElementById('output1'),
    "output2" : document.getElementById('output2'),
}

const operator = {
    "setUpForCelsius" : function(val) {
        const range = document.getElementById('range');
        range.addEventListener('mousemove', function() {
            operator.convertFromCelsius(this.value);
        });

        model.range.min = "-100";
        model.range.max = "100";
        model.range.value = val;
        model.startingValueName.textContent = "Celsius";
        model.output1Name.textContent = "Fahrenheit";
        model.output2Name.textContent = "Kalvin";
        this.convertFromCelsius(val);
    },    
    "setUpForFahrenheit" : function(val) {
        const range = document.getElementById('range');
        range.addEventListener('mousemove', function() {
            operator.convertFromFahrenheit(this.value);
        });

        model.range.min = "-148";
        model.range.max = "212";
        model.range.value = val;
        model.startingValueName.textContent = "Fahrenheit";
        model.output1Name.textContent = "Celsius";
        model.output2Name.textContent = "Kalvin";
        this.convertFromFahrenheit(val);
    },
    "setUpForKalvin" : function(val) {
        const range = document.getElementById('range');
        range.addEventListener('mousemove', function() {
            operator.convertFromKalvin(this.value);
        });

        model.range.min = "173";
        model.range.max = "373";
        model.range.value = val;
        model.startingValueName.textContent = "Kalvin";
        model.output1Name.textContent = "Fahrenheit";
        model.output2Name.textContent = "Celsius";
        this.convertFromKalvin(val);
    },
    "convertFromCelsius" : function(val) {
        model.startingValue.textContent = val;
        var farVal = Math.round(9/5 * parseInt(val) + 32);
        model.output1.textContent = farVal;
        model.output2.textContent = parseInt(val) + 273;
    },
    "convertFromFahrenheit" : function(val) {
        model.startingValue.textContent = val;
        var celVal = Math.round((5/9) * (parseInt(val) -32));
        var kalVal = Math.round(((5/9) * (parseInt(val) -32) + 273));
        model.output1.textContent = celVal;
        model.output2.textContent = kalVal;
    },
    "convertFromKalvin" : function(val) {
        model.startingValue.textContent = val;
        var farVal = Math.round(9/5 * (parseInt(val) - 273) + 32);
        model.output1.textContent = farVal;
        model.output2.textContent = parseInt(val) - 273;
    },
    "removeActiveClass" : function(arr) {
        const btns = Array.from(document.getElementsByClassName('btn'));
        btns.forEach(btn => btn.classList.remove('btn-active'));
    },
    "eventListeners" : function() {
        const celsiusBtn = document.getElementById('celsiusBtn');
        celsiusBtn.addEventListener('click', function() {
            operator.removeActiveClass();
            this.classList.add('btn-active');
            operator.setUpForCelsius(0);
        });
        const fahrenheitBtn = document.getElementById('fahrenheitBtn');
        fahrenheitBtn.addEventListener('click', function() {
            operator.removeActiveClass();
            this.classList.add('btn-active');
            operator.setUpForFahrenheit(32);
        });
        const kalvinBtn = document.getElementById('kalvinBtn');
        kalvinBtn.addEventListener('click', function() {
            operator.removeActiveClass();
            this.classList.add('btn-active');
            operator.setUpForKalvin(273);          
        });
    }
}

const view = {
    "initDisplay" : function() {
        operator.setUpForCelsius(0);
        operator.convertFromCelsius(0);
        operator.eventListeners();
    }
}

view.initDisplay();