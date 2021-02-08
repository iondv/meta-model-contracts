'use strict';

class ListPreprocessor {
  /**
   * @param {String} className
   * @param {{}} options
   * @returns {Promise}
   */
  applicable(className, options) {
    return this._applicable(className, options);
  }

  /**
   * @param {Item[]} list
   * @param {{}} options
   * @returns {Promise}
   */
  process(list, options) {
    return this._process(list, options);
  }
}

module.exports = ListPreprocessor;
