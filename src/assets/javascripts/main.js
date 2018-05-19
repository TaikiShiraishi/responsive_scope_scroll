import ScopedScroll from './ScopedScroll';
import ResizeWatcher from './ResizeWatcher'

const init = () => {
  document.addEventListener('DOMContentLoaded', init)
  console.log('main.js loaded');
  const element = document.getElementById('js_scopedScroll');
  const scopedScroll = new ScopedScroll(element);
  const hoge = (rect) => {
    if(rect.width <= 640) {
      scopedScroll.enable();
    } else {
      scopedScroll.disable();
    }
  }
  const resizeWather = new ResizeWatcher(window, hoge)
  resizeWather.start()
}

document.addEventListener('DOMContentLoaded', init);