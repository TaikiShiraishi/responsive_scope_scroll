import Throttle from './Throttle'

class ResizeWatcher {
	constructor(element, callback) {
    this.element = element
    this.callback = callback
    this.throttle = new Throttle();
    this.init()
    this.timer = 0
    this.delayTime = 250
  }

  onResize() {
    this.throttle.start(this.measurements)
  }

  measurements() {
    const width = this.element.innerWidth
    const height = this.element.innerHeight
    this.callback({width, height})
  }

  start() {
    this.element.addEventListener('resize', this.onResize)
  }

  stop() {
    this.element.removeEventListener('resize', this.onResize)
  }

  attachBind() {
    this.onResize = this.onResize.bind(this)
    this.measurements = this.measurements.bind(this)
  }

  init() {
    this.attachBind()
  }
}

export default ResizeWatcher

// const resizeWatcher = new ResizeWatcher(window)
// resizeWatcher.start()