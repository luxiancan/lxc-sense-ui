import Intro from '../../../src/components/intro'

Intro.install = function(Vue) {
    Vue.prototype.$Intro = Intro
}

export default Intro