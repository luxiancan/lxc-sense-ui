import Vue from 'vue'
import SsPopover from '../../popover'
Vue.use(SsPopover)

class Popover {
    constructor({options, node, buttons}) {
        this.ElementPopover = Vue.extend(SsPopover)
        this.popoverOptions = options
        this.popoverDom = null
        this.node = node
        this.buttons = buttons
    }
    show() {
        let component = new this.ElementPopover({
            propsData: {
                ...this.popoverOptions,
                trigger: 'manual',
                value: true,
            }
        })
        component.$refs['reference'] = this.node
        component.reference = this.node
        component.$mount()
        component.$el.children[0].classList.add('ss-new-popover')
        this.popoverDom = component.$el
        document.body.appendChild(this.popoverDom)
        this.prepareShowFromElement()
    }
    hide() {
        if(this.popoverDom) {
            document.body.removeChild(this.popoverDom)
            this.popoverDom = null
        }
    }
    prepareShowFromElement() {
        let buttonGroup = this.getButtonsDom()
        let { placement = 'bottom', className, style } = this.popoverOptions
        let popoverMainDom = this.popoverDom.firstChild
        this.popoverDom.classList.add('ss-intro-popover__container', placement)
        popoverMainDom.appendChild(buttonGroup)
        if(className) {
            if(typeof className === 'string') {
                className = className.split(' ')
            }
            popoverMainDom.classList.add(...className)
        }
        if(style) {
            if(typeof style === 'object') {
                let cssText = ''
                Object.entries(style).forEach(([key, val]) => {
                    cssText += `${key}: ${val};`
                })
                popoverMainDom.style.cssText = cssText
            }else if(typeof style === 'string') {
                popoverMainDom.style.cssText = style
            }else {
                throw new Error('style is not object or string!')
            }
        }
        this.setPopoverOffset(placement)
    }
    getButtonsDom() {
        let div = document.createElement('div')
        let buttons = this.buttons
        div.classList.add('ss-intro-flex', 'ss-intro-flex--end')
        div.style.marginTop = '10px'
        for(let i = 0; i < buttons.length; i++) {
            let buttonOpt = buttons[i]
            let button = document.createElement('button')
            button.setAttribute('type', 'button')
            button.classList.add('ss-intro-btn', buttonOpt.className)
            button.innerText = buttonOpt.text
            button.onclick = function(event) {
                event.stopPropagation()
                event.preventDefault()
                buttonOpt.handle(event)
            }
            div.appendChild(button)
        }
        return div
    }
    setPopoverOffset(placement) {
        let popoverContainer = this.popoverDom[this.popoverDom.firstChild ? 'firstChild' : 'firstElementChild']
        let [direction, horizontal] = placement.split('-')

        let baseMargin = 20
        let { x, y, left, top, width, height } = this.node.getBoundingClientRect()
        if(!x || !y){
            x = left;
            y = top;
        }
        if(direction === 'bottom') {
            if(!horizontal || horizontal === 'start') {
                this.popoverDom.style.left = `${x}px`
            }
            if(horizontal === 'end') {
                this.popoverDom.style.left = `${Math.floor(x + width)}px`
            }
            this.popoverDom.style.top = `${Math.floor(y + height)}px`
            popoverContainer.style.transform = `translateY(${baseMargin}px)`
        }

        if(direction === 'right') {
            let left = Math.floor(x + width)
            let transform = `translateX(calc(100% + ${baseMargin}px))`
            if(!horizontal || horizontal === 'start') {
                this.popoverDom.style.top = `${y}px`
            }
            if(horizontal === 'end') {
                let top = Math.floor(y)
                this.popoverDom.style.top = `${top}px`
                transform += ` translateY(${height}px)`
            }

            this.popoverDom.style.left = `${left}px`
            popoverContainer.style.transform = transform
        }

        if(direction === 'left') {
            if(!horizontal || horizontal === 'start') {
                this.popoverDom.style.top = `${y}px`
            }
            if(horizontal === 'end') {

            }
            this.popoverDom.style.left = `${x}px`
            popoverContainer.style.transform = `translateX(calc(-100% - ${baseMargin}px))`
        }
    }
}

export default Popover
