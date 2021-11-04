const $ = (selector) => {
  return new Elem(selector);
};

function Elem(selector) {
  if (!selector) {
    return this;
  }

  Object.assign(this, document.querySelectorAll(selector));
  this.length = document.querySelectorAll(selector).length;
  return this;
}

$.prototype = Elem.prototype;

window.$ = $;

export default $;
