/**
 * Created by kras on 12.09.16.
 */
'use strict';

class Preprocessor {
  /**
   * @param {Item} item
   * @param {{}} [options]
   * @returns {Promise}
   */
  applicable(item, options) {
    return this._applicable(item, options);
  };
  /**
   * @param {Item} item
   * @param {{}} options
   * @returns {Promise}
   */
  process(item, options) {
    return this._process(item, options);
  };
}

module.exports = Preprocessor;
