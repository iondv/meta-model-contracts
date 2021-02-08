'use strict';

class KeyProvider {
  /**
   * @param {ClassMeta} cm
   * @param {{}} data
   * @returns {String}
   */
  formKey(cm, data) {
    return this._formKey(cm, data);
  }

  /**
   * @param {ClassMeta} cm
   * @param {String} id
   * @returns {{}}
   */
  keyToData(cm, id) {
    return this._keyToData(cm, id);
  }

  /**
   * @param {ClassMeta} cm
   * @param {{}} data
   * @returns {{} | null}
   */
  keyData(cm, data) {
    return this._keyData(cm, data);
  }
}

module.exports = KeyProvider;
