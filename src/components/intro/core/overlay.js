class Overlay {
    constructor(config) {
        this.config = config
    }
    attachNode() {
        if(!this.node) {
            let overlay = document.createElement('div')
            overlay.setAttribute('id', 'SsIntroOverlay')
            document.body.appendChild(overlay)
            this.node = overlay
        }
    }
    highlight(element) {
        this.show()
        this.highlightElment = element
        this.highlightElment.onHighlighted()
    }
    show() {
        this.attachNode()
        if(this.node && this.node.style.opacity == 0.8) {
            return ;
        }
        window.setTimeout(() => {
            this.node.style.position = 'fixed'
            this.node.style.top = '0'
            this.node.style.right = '0'
            this.node.style.bottom = '0'
            this.node.style.left = '0'
            this.node.style.background = '#000'
            this.node.style.opacity = '0.8'
        })
    }
    clear() {
        this.highlightElment && this.highlightElment.onDeselected()
        this.highlightElment = null
        if(!this.node) {
            return ;
        }
        this.removeNode()
    }
    removeNode() {
        if(this.node && this.node.parentElement) {
            this.node.parentElement.removeChild(this.node)
        }
    }
}

export default Overlay