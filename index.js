let inputSystemSelector = document.getElementById('inputSystemSelector');

let outputSystemSelector = document.getElementById('outputSystemSelector');

let inputSystem = document.getElementById('inputSystem');

let outputSystem = document.getElementById('outputSystem');

let errMsg = document.getElementById('errMsg');
errMsg.style.display = 'none';

let deciOut = 0;
let binOut = "";
let octOut = "";
let hexOut = "";
function Convert() {
    if (inputSystemSelector.value != outputSystemSelector.value) {
        errMsg.style.display = 'none';
        if (inputSystemSelector.value == 'binary' && /^[01]+$/.test(inputSystem.value)) {
            let binIn = inputSystem.value.split('').reverse().join('');
            if (outputSystemSelector.value == 'decimal') {
                //console.log("binary true");
                Array.from(binIn).forEach((val, index) => {
                    deciOut += parseInt(val) * Math.pow(2, index);

                });
                outputSystem.value = deciOut;
            }
            else if (outputSystemSelector.value == 'octal') {
                octOut = parseInt(binIn, 2).toString(8);
                outputSystem.value = octOut;
            }
            else if (outputSystemSelector.value == 'hex') {
                hexOut = parseInt(binIn, 2).toString(16);
                outputSystem.value = hexOut;
            }

        }


        else if (inputSystemSelector.value == 'decimal' && /^\d*\.?\d*$/.test(inputSystem.value)) {
            let deciIn = parseInt(inputSystem.value);
            if (outputSystemSelector.value == 'binary') {
                //console.log("decimal true");
                //console.log(typeof(deciIn))
                while (deciIn > 0) {
                    binOut += deciIn % 2;
                    deciIn = Math.floor(deciIn / 2);
                }

                binOut = binOut.split('').reverse().join('');
                outputSystem.value = binOut;
            }
            else if (outputSystemSelector.value == 'octal') {
                while (deciIn > 0) {
                    octOut += deciIn % 8;
                    deciIn = Math.floor(deciIn / 8);
                }

                octOut = octOut.split('').reverse().join('');
                outputSystem.value = octOut;
            }
            else if (outputSystemSelector.value == 'hex') {
                while (deciIn > 0) {
                    if ((deciIn % 16) > 9) {
                        hexOut += String.fromCharCode((deciIn % 16) - 10 + 65);
                    }
                    else {
                        hexOut += deciIn % 16;
                    }
                    deciIn = Math.floor(deciIn / 16);
                }

                hexOut = hexOut.split('').reverse().join('');
                outputSystem.value = hexOut;
            }
        }


        else if (inputSystemSelector.value == 'octal' && /^[0-7]+$/.test(inputSystem.value)) {
            let octIn = inputSystem.value;
            //console.log("octal true");
            if (outputSystemSelector.value == 'binary') {
                binOut = parseInt(octIn, 8).toString(2);
                outputSystem.value = binOut;
            }

            else if (outputSystemSelector.value == 'decimal') {
                deciOut = parseInt(octIn, 8).toString(10);
                outputSystem.value = deciOut;
            }
            else if (outputSystemSelector.value == 'hex') {
                hexOut = parseInt(octIn, 8).toString(16);
                outputSystem.value = hexOut.toUpperCase();
            }
        }


        else if (inputSystemSelector.value == 'hex' && /^[0-9A-F]+$/.test(inputSystem.value.toUpperCase())) {
            let hexIn = inputSystem.value;
            //console.log("hex true");
            if (outputSystemSelector.value == 'binary') {
                binOut = parseInt(hexIn, 16).toString(2);
                outputSystem.value = binOut;
            }
            else if (outputSystemSelector.value == 'octal') {
                octOut = parseInt(hexIn, 16).toString(8);
                outputSystem.value = octOut;
            }
            else if (outputSystemSelector.value == 'decimal') {
                deciOut = parseInt(hexIn, 16).toString(10);
                outputSystem.value = deciOut;
            }
        }

        else {
            errMsg.innerHTML = '<strong>You enter wrong number</strong>';
            errMsg.style.display = 'block';
        }

    }
    else {
        errMsg.innerHTML = '<strong>Please select different Number systems.</strong>';
        errMsg.style.display = 'block';
    }
    deciOut = 0;
    binOut = "";
    octOut = "";
    hexOut = "";
}