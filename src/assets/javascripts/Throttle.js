class Throttle {
  constructor() {
    this.timer = 0
    this.delayTime = 250
  }

  start(callback) {
    const isTimer = Boolean(this.timer)
    if(isTimer) {
      clearTimeout(this.timer)
    }
    this.timer = setTimeout(() => {
      callback()
    }, this.delayTime)
  }
}

export default Throttle