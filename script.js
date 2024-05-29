export function setValue() {
    const valueBox = document.querySelector('.value-box');
    //const progressCircle = document.querySelector('.progress-circle')
    //progressCircle.style.display = 'none';
    /*setTimeout(() => {
        progressCircle.style.display = 'block'
    }, 50)*/
    if (valueBox) {
        const handleInput = function (e) {
            let value = e.target.value;

            if (value.startsWith('0')) {
                value = value.replace(/^0+/, '');
            }

            if (value === '') {
                value = 0;
            } else if (!Number.isInteger(parseInt(value))) {
                value = '';
            } else if (value > 100) {
                value = 100;
            }

            /*if (value === 0) {
                value = '';
            }*/

            e.target.value = value;
            document.documentElement.style.setProperty('--value', value);
            document.documentElement.style.setProperty('--progress-value', value);
            document.documentElement.offsetHeight;

        };

        valueBox.addEventListener('input', handleInput);
        //progressCircle.style.display = 'block'

        //const progressCircle = document.querySelector('.progress-circle')
        /*progressCircle.style.display='none';
        let redrawFix = progressCircle.offsetHeight;
        progressCircle.style.display='block';*/
        //console.log('want to hide')


        if (valueBox.value) {
            handleInput({target: valueBox});
        }
    }
}


export function hideBlock() {
    //console.log('hide')
    const hideCheckbox = document.querySelector('.switch.hide input');
    if (hideCheckbox) {
        const progressCircle = document.querySelector('.progress-circle');
        const controls = document.querySelector('.controls');

        const handleChange = function (e) {
            if (e.target.checked) {
                progressCircle.style.display = 'none';
                disableElement('.switch.animate input')
                disableElement('.value-box')
                disableElement('text#value')
                disableElement('text#animate')
                controls.classList.add('hide');
            } else {
                progressCircle.style.display = 'block';
                enableElement('.switch.animate input')
                enableElement('.value-box')
                enableElement('text#value')
                enableElement('text#animate')
                controls.classList.remove('hide');
            }
        };

        hideCheckbox.addEventListener('change', handleChange);

        if (hideCheckbox.checked) {
            handleChange({target: hideCheckbox});
        }
    }
}


export function animateBlock() {
    const animateCheckbox = document.querySelector('.switch.animate input');
    if (animateCheckbox) {
        const progressCircle = document.querySelector('.progress-circle');

        const handleChange = function (e) {
            if (e.target.checked) {
                progressCircle.classList.add('animate');
            } else {
                progressCircle.classList.remove('animate');
            }
        };

        animateCheckbox.addEventListener('change', handleChange);

        if (animateCheckbox.checked) {
            handleChange({target: animateCheckbox});
        }
    }
}


function disableElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.disabled = true;

        element.style.opacity = '0.5';
        element.style.pointerEvents = 'none';
    }
}

function enableElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.disabled = false;

        element.style.opacity = '';
        element.style.pointerEvents = '';
    }
}


