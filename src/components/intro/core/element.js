import Popover from './popover'
class Element {
    constructor(options) {
        this.node = options.node
        this.overlay = options.overlay
        this.stepIndex = options.stepIndex
        this.popover = new Popover({
            options: options.popover,
            buttons: options.buttons,
            node: this.node
        })
        this.options = {
            onHighlighted: options.onHighlighted,
            onDeselected: options.onDeselected,
            customClass: options.customClass,
            useClone: options.useClone
        }
    }
    scrollManually() {
        const elementRect = this.node.getBoundingClientRect()
        const absoluteElementTop = elementRect.top + window.pageYOffset
        const middle = absoluteElementTop - ( window.innerHeight / 2 )

        window.scrollTo(0, middle)
    }
    bringInView() {
        if(!this.node.scrollIntoView) {
            this.scrollManually()
            return ;
        }
        try {
            this.node.scrollIntoView({
                behavior: 'instant',
                block: 'center'
            })
        } catch (error) {
            this.scrollManually()
        }
    }
    addCloneNodeStyle() {
        const getNodeStyles = (node) => {
            let computedStyle = window.getComputedStyle(node, null)
            let styles = computedStyle.cssText
            if(!styles) {
                for(let key in computedStyle) {
                    if(!isNaN(+key)) {
                        continue
                    }
                    let value = computedStyle.getPropertyValue(key)
                    if(value) {
                        styles += `${key}: ${value};`
                    }
                }
            }
            return styles
        }
        let { x, y, width, height, top,left} = this.node.getBoundingClientRect()
        let originStyle = getNodeStyles(this.node)
        let styleDom = document.createElement('style')
        let seed = 0
        let styleInnerText = `.ss-clone-temp-css {${originStyle}}`
        const documentHead = document.head
        const setCloneChildNodeStyle = (nodes) => {

            nodes = [...nodes]
            for(let i = 0; i < nodes.length; i++) {
                let node = nodes[i]
                if(node.nodeType != 1 && node.nodeType != 9) {
                    continue
                }
                if(node.hasChildNodes()) {
                    setCloneChildNodeStyle(node.childNodes)
                    continue
                }
                let styles = getNodeStyles(node)
                styleInnerText += `${styleInnerText} .ss-clone-child-temp-${seed}{${styles}}`
                node.classList.add(`ss-clone-child-temp-${seed}`)
                seed++
            }
        }
        if(originStyle && originStyle[originStyle.length - 1] !== ';') {
            originStyle += ';'
        }
        if(this.cloneNode.hasChildNodes()) {
            setCloneChildNodeStyle(this.cloneNode.childNodes)
        }
        console.log(styleInnerText)
        styleDom.innerText = styleInnerText
        this.cloneUseStyleNode = styleDom
        documentHead.insertBefore(this.cloneUseStyleNode, documentHead.querySelector('style'))
        this.cloneNode.classList.add('ss-clone-temp-css')
        this.cloneNode.style.cssText = `
            position: fixed;
            width: ${width}px;
            height: ${height}px;
            left: ${x || left}px;
            top: ${y || top}px;
        `
    }
    onHighlighted() {
        this.bringInView()
        this.addHighlightClasses()
        if(this.options.useClone) {
            this.cloneNode = this.node.cloneNode(true)
            document.body.appendChild(this.cloneNode)
            this.addCloneNodeStyle()
        }else {
            this.fixStackingContext(this.node)
        }
        this.popover.show()
        if(typeof this.options.onHighlighted === 'function') {
            this.options.onHighlighted()
        }
    }
    addHighlightClasses(node = this.node) {
        node.classList.add('ss-intro-highlight__element')
        if(this.options.customClass) {
            node.classList.add(this.options.customClass)
        }
        if(this.canSetPosition(node)) {
            node.classList.add('ss-relative')
        }
    }
    removeHighlightClasses() {
        this.node.classList.remove('ss-intro-highlight__element')
        if(this.options.customClass) {
            this.node.classList.remove(this.options.customClass)
        }
        if(this.node.classList.contains('ss-relative')) {
            this.node.classList.remove('ss-relative')
        }
        let stackingDom =  document.querySelectorAll('.ss-fix-stacking-context')

        for(let i = 0; i < stackingDom.length; i++) {
            stackingDom[i].classList.remove('ss-fix-stacking-context')
        }
    }
    fixStackingContext(node) {
        let parent = node.parentNode
        while(parent) {
            if(!parent.tagName || parent.tagName.toLowerCase() === 'body') {
                break;
            }
            const {
                zIndex,
                transform,
                perspective,
                transformStyle,
                transformBox,
                filter,
                opacity
            } = getComputedStyle(node)
            if(
                /\[0-9]+/.test(zIndex) || 
                opacity < 1 || 
                transform !== 'none' || 
                transformBox !== 'border-box' || 
                transformStyle !== 'flat' || 
                perspective !== 'none' || 
                filter !== 'none'
            ) {
                parent.classList.add('ss-fix-stacking-context')
            }
            parent = parent.parentNode

        }
    }
    canSetPosition(node) {
        if(this.options.useClone) {
            return false
        }
        let position = node.style.position
        return ['relative', 'absolute', 'fixed'].indexOf(position) === -1
    }
    onDeselected() {
        this.popover.hide()
        this.removeHighlightClasses()
        if(this.options.useClone) {
            document.body.removeChild(this.cloneNode)
            document.head.removeChild(this.cloneUseStyleNode)
        }
        if(typeof this.options.onDeselected === 'function') {
            this.options.onDeselected()
        }
    }
}

export default Element