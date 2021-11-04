import { Elem } from '../core';

Elem.prototype.addClass = function (...classNames) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) return this;
    this[i].classList.add(...classNames);
  }

  return this;
};

Elem.prototype.removeClass = function (...classNames) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) return this;
    this[i].classList.remove(...classNames);
  }
  return this;
};

Elem.prototype.toggleClass = function (className) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) return this;
    this[i].classList.toggle(className);
  }

  return this;
};
