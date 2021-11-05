function $(selector) {
  const elem = new Elem(selector);
  elem.prototype = Elem.prototype;
  return elem;
}

function Elem(selector) {
  if (!selector) {
    return this;
  }

  // Проверяем, не получили ли мы в качестве селектора html-элемент. У элемента есть свойство tagName.
  if (selector.tagName) {
    this[0] = selector;
    this.length = 1;
    return this;
  }

  Object.assign(this, document.querySelectorAll(selector));
  this.length = document.querySelectorAll(selector).length;
  return this;
}

// $.prototype = Elem.prototype;

window.$ = $;

export { Elem, $ };
