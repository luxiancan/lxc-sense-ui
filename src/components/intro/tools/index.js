export const isDomElement = function(obj) {
    return typeof obj === 'object' && obj instanceof HTMLElement
}

export const createDomFromString = function(str) {
    let div = document.createElement('div')
    div.innerHTML = str
    return div.firstChild
}