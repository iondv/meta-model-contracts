'use strict';

class Property {

  getName() {
    return this._getName();
  }

  getType() {
    return this._getType();
  }

  getCaption() {
    return this._getCaption();
  }

  isReadOnly() {
    return this._isReadOnly();
  }

  isIndexed() {
    return this._isIndexed();
  }

  isUnique() {
    return this._isUnique();
  }

  isNullable() {
    return this._isNullable();
  }

  eagerLoading() {
    return this._eagerLoading();
  }

  hint() {
    return this._hint();
  }

  getValue() {
    return this._getValue();
  }

  selectionKeyMatch(key) {
    return this._selectionKeyMatch(key);
  }

  getDisplayValue(dateCallback) {
    return this._getDisplayValue(dateCallback);
  }

  evaluate() {
    return this._evaluate();
  }

  getSelection() {
    return getSelection();
  }

  setValue(value) {
    this._setValue(value);
  }
}

module.exports = Property;
