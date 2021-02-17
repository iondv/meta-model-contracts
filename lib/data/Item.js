/**
 * @constructor
 */
class Item {
  emptify() {
    this._emptify();
  }

  getItemId() {
    return this._getItemId();
  }

  getClassName() {
    return this._getClassName();
  }

  /**
   * @returns {ClassMeta}
   */
  getMetaClass() {
    return this._getMetaClass();
  }

  /**
   * @returns {String}
   */
  getCreator() {
    return this._getCreator();
  }

  /**
   * @returns {String}
   */
  getEditor() {
    return this._getEditor();
  }

  getLang() {
    return this._getLang();
  }

  /**
   * @param {String} name
   * @returns {Item | null}
   */
  getAggregate(name) {
    return this._getAggregate(name);
  }

  /**
   * @param {String} name
   * @returns {Array | null}
   */
  getAggregates(name) {
    return this._getAggregates(name);
  }

  get(name) {
    return this._get(name);
  }

  set(name, value) {
    this._set(name, value);
  }

  /**
   * @param {String} name
   * @returns {Property | null}
   */
  property(name) {
    return this._property(name);
  }

  /**
   * @returns {Property{}}
   */
  getProperties() {
    return this._getProperties();
  }

  /**
   * @param {{}} [needed]
   * @param {Boolean} [cached]
   * @param {Boolean} [recursive]
   * @returns {Promise}
   */
  calculateProperties(needed, cached, recursive) {
    return this._calculateProperties(needed, cached, recursive);
  }

  toString() {
    return this._toString();  
  }
}

module.exports = Item;
