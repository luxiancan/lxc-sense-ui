import Overlay from './core/overlay'
import Element from './core/element'
import { isDomElement } from './tools'
import './style/_index.scss'
class Intro {
    constructor(config = {}) {
        this.steps = []
        this.currentStepIndex = 0
        this.overlay = new Overlay(config)
        this.onStart = config.onStart
        this.onEnd = config.onEnd
    }
    defineSteps(steps) {
        this.steps = []
        for(let i = 0; i < steps.length; i++) {
            const element = this.prepareElementFromStep(steps[i], steps, i)
            if(!element) {
                continue ;
            }
            this.steps.push(element)
        }
    }
    start(index = 0) {
        this.currentStepIndex = index
        this.overlay.highlight(this.steps[index])
        if(typeof this.onStart === 'function') {
            this.onStart()
        }
    }
    prepareElementFromStep(step, steps, index) {
        if(!step.element) {
            throw new Error(`element is required in step ${index} !`)
        }
        let querySelector = null
        if(isDomElement(step.element)) {
            querySelector = step.element
        }else {
            querySelector = document.querySelector(step.element)
        }
        if(!querySelector) {
            throw new Error('element is not found !')
        }
        let elementOptions = {
            node: querySelector,
            overlay: this.overlay,
            popover: step.popover,
            stepIndex: index,
            onHighlighted: step.onHighlighted,
            onDeselected: step.onDeselected,
            customClass: step.customClass || '',
            useClone: step.useClone || false
        }
        let stepLen = steps.length
        let buttons = []
        if((index === 0 && stepLen === 1) || index + 1 === stepLen) {
            buttons.push({
                text: '知道了',
                className: 'ss-intro-btn--primary',
                handle: this.handleSkip.bind(this)
            })
        }else if((index === 0 && stepLen > 1) || (index > 0 && index !== stepLen)) {
            let arr = [
                {
                    text: '跳过',
                    className: 'ss-intro-btn--plain',
                    handle: this.handleSkip.bind(this)
                }, 
                {
                    text: '下一步',
                    className: 'ss-intro-btn--primary',
                    handle: this.handleNext.bind(this)
                }
            ]
            buttons = buttons.concat(arr)
        }
        elementOptions.buttons = buttons
        return new Element(elementOptions)
    }
    handleNext() {
        // 隐藏当前显示的popover
        this.steps[this.currentStepIndex].onDeselected()
        this.currentStepIndex++
        let step = this.steps[this.currentStepIndex]
        if(!step) {
            this.overlay.clear()
            this.currentStepIndex = 0
            return ;
        }
        this.overlay.highlight(step)
    }
    handlePrev() {
        // 隐藏当前显示的popover
        this.steps[this.currentStepIndex].onDeselected()
        this.currentStepIndex--
        let step = this.steps[this.currentStepIndex]
        if(!step) {
            this.overlay.clear()
            this.currentStepIndex = 0
            return ;
        }
        this.overlay.highlight(step)
    }
    handleSkip() {
        this.overlay.clear()
        if(typeof this.onEnd === 'function') {
            this.onEnd()
        }
    }
}

export default Intro