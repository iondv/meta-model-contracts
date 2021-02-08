'use strict';

class InsertPreprocessor {
  /**
   * @param {String} classname
   * @param {{}} data
   * @returns {Promise}
   */
  preProcess(classname, data, namespace) {
    return this._preProcess(classname, data, namespace);
  }
}

module.exports = InsertPreprocessor;
