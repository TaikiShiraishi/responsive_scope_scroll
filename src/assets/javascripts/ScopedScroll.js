class ScopedScroll {
	constructor(element) {
  	this.element = element
    this.elementHeight = this.element.clientHeight
    this.distanceHeight = this.element.scrollHeight - this.elementHeight
    this.clientY = 0
    this.disabled = true
    this.init()
  }

  enable() {
    this.disabled = false
  }

  disable() {
    this.disabled = true
  }

  onWheel(evt) {
    if (this.disabled) return
    const { scrollTop } = this.element
    const isTop = scrollTop === 0
    const isBottom = scrollTop >= this.distanceHeight
    if (isTop && evt.deltaY < 0 || isBottom && evt.deltaY > 0) {
      evt.preventDefault()
      evt.stopPropagation()
    }
  }

  onTouchStart(evt) {
    if (this.disbled) return
    if (evt.targetTouches.length === 1) {
      this.clientY = evt.targetTouches[0].clientY
    }
  }

  onTouchMove(evt) {
    if (this.disabled) return
    if (evt.targetTouches.length === 1) {
      const clientY = evt.targetTouches[0].clientY - this.clientY
      const { scrollTop } = this.element
      const isTop = scrollTop === 0
      const isBottom = scrollTop >= this.distanceHeight
      if (isTop && clientY > 0 || isBottom && clientY < 0) {
        evt.preventDefault()
      }
    }
  }

  attachHandler() {
    this.element.addEventListener('wheel', this.onWheel)
    this.element.addEventListener('touchstart', this.onTouchStart)
    this.element.addEventListener('touchmove', this.onTouchMove)
  }

  attachBind() {
    this.onWheel = this.onWheel.bind(this)
    this.onTouchStart = this.onTouchStart.bind(this)
    this.onTouchMove = this.onTouchMove.bind(this)
  }

  init() {
    this.attachBind()
    this.attachHandler()
  }
}
export default ScopedScroll