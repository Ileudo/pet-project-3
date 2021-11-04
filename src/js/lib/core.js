function $(selector) {
  return new Elem(selector);
}

function Elem(selector) {
  if (!selector) {
    return this;
  }

  // Проверяем, не получили ли мы в качестве селектора html-узел.
  if (selector.tagName) {
    this[0] = selector;
    this.length = 1;
    return this;
  }

  Object.assign(this, document.querySelectorAll(selector));
  this.length = document.querySelectorAll(selector).length;
  return this;
}

$.prototype = Elem.prototype;

window.$ = $;

export { Elem, $ };
