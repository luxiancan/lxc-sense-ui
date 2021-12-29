import './animation.css';
class  $JQuery{
    constructor(selector) {
         let domList = document.querySelectorAll(selector);
        for( let i=0; i<domList.length; i++ ){
            this[i] = domList[i];
        }
        this.length = domList.length;       
        this.selector = selector;
    }
    get(index){
       return this[index];
    }
    each(fn){
        for( let i=0; i<this.length; i++ ){
            const elm = this[i];
            fn(elm)
        }      
    }
    on( type,selector,fn ){     
        if( fn == null ){
            fn = selector;
            selector = null
        }
        return this.each((elm)=>{
            elm.addEventListener(type,(event)=>{
                event = event || window.event;
                let target = event.target
               
                if( selector ){
                    if( target.matches(selector) ){
                        
                        fn.call(target,event)
                    }
                }else{
                    fn.call(target,event)
                }
            })  
      })     
    }
    hasClass(className){
        return this.length === 1 ? (this['0'].className ? this['0'].className.indexOf(className) > 0 : false ) : false;
    }
    val(value){      
        if(value == undefined){
            return this.length === 1 ? (this['0'].value ? this['0'].value : null) : null;   
        }else{
            if(this.length === 1){
                this['0'].value = value;
            }
             
        }                
    }
    addClass(className){
        this.each((elm)=>{
            elm.classList.add(className)
        })
        return this;
    }
    removeClass(className){
        this.each((elm)=>{
            elm.classList.remove(className)
        })
    }
    show(){
        this.each((elm)=>{
            elm.style.display = 'block';
            elm.style.opacity = '1';
            elm.style.height = 'auto';
        })
        return this;
    }
    hide(){
        this.each((elm)=>{
            elm.style.display = 'none'
        })
        return this;
    }
    css(className,val){
        if( val == null && className instanceof Object && className.constructor === Object){
            for(let key in className){
                this.each((elm)=>{
                    elm.style[key] = className[key];
                })
            }
        }else{
            this.each((elm)=>{
                elm.style[className] = val;
            })
        }
        
        return this;
    }
    fadeIn(){
        this.each((elm)=>{
            elm.classList.add("fade");
            setTimeout(function () {
                elm.classList.add("fadein");
            }, 100);
            
        })
        return this;
    }
    fadeOut(){
        this.each((elm)=>{
            elm.classList.add("fade");
        })
        return this;
    }
    html(dom){
        this.each((elm)=>{
            elm.innerHTML = dom;
        })
        return this;
    }
    append(htmlStr){
        this.each((elm)=>{
            elm.appendChild(htmlStr);
        })
        return this;
    }
    prepend(htmlStr){
        this.each((elm)=>{
            elm.insertBefore(htmlStr);
        })
        return this;
    }
    data(attr){
        return this.each((elm)=>{
            elm.getAttribute(attr.split('data-')[1]);
        })
    }
    parents(){
        return this.each((elm)=>{
            return elm.offsetParent;
        })
    }
    attr(attr,value){
        if( value ){
            return this.each((elm)=>{
                return elm.setAttribute(attr,value);
            })
        }else{  
            return this.each((elm)=>{
                return elm.getAttribute(attr);
            })
        }
        
    }
}

export function $JQ(selector){
    return new $JQuery(selector);
}


export default  $JQ;

