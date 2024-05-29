import { setValue, hideBlock, animateBlock} from './script.js';
class ProgressBlock {

    constructor() {
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleAnimateToggle = this.handleAnimateToggle.bind(this);
        this.handleHideToggle = this.handleHideToggle.bind(this);
    }

    handleValueChange(event) {
        const value = event.target.value;
        setValue(value);
        const progressCircle = document.querySelector('.progress-circle')
        progressCircle.style.display = 'none';
       // progressCircle.style.display = 'block'
       setTimeout(() => {
            progressCircle.style.display = 'block'
        }, 1)
        //progressCircle.style.display = 'block'


        //document.documentElement.style.setProperty('--progress-value', value);
        //void document.documentElement.offsetWidth;
    }

    handleAnimateToggle(event) {
        const isChecked = event.target.checked;
        animateBlock(isChecked);
    }

    handleHideToggle(event) {
        const isChecked = event.target.checked;
        hideBlock(isChecked);
    }

    attachEventHandlers() {
        const valueBox = document.querySelector('.value-box');
        const animateCheckbox = document.querySelector('.animate input[type="checkbox"]');
        const hideCheckbox = document.querySelector('.hide input[type="checkbox"]');

        valueBox.addEventListener('input', this.handleValueChange);
        animateCheckbox.addEventListener('change', this.handleAnimateToggle);
        hideCheckbox.addEventListener('change', this.handleHideToggle);
    }


    render() {
        return `
            <div>
                <text class="title">Progress</text>
                <div class="progress-container">
                   <div class="progress-circle"></div>

                   <div class="controls">
                       <div class="buttons">

                            <label class="value">
                               <input type="number" class="value-box" min="0" max="100" id="value">
                            </label>


                             <label class="switch animate">
                                  <input type="checkbox" id="animate">
                                  <span class="slider round"></span>
                              </label>

                             <label class="switch hide">
                                  <input type="checkbox" id="hide">
                                 <span class="slider round"></span>
                             </label>
                       </div>

                      <div class="labels">
                         <text id="value">Value</text>
                         <text id="animate">Animate</text>
                        <text id="hide">Hide</text>
                      </div>

                  </div>
                </div>
            </div>
        `;
    }

    init() {
        document.body.innerHTML = this.render();
        this.attachEventHandlers();
    }
}

export default ProgressBlock;