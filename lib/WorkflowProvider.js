'use strict';

class WorkflowProvider {
  /**
   * @param {Item} item
   * @param {{uid: User, lang: String}} options
   * @returns {Promise}
   */
  getStatus(item, options) {
    return this._getStatus(item, options || {});
  }

  /**
   * @param {String} workflow
   * @param {String} status
   * @returns {Promise}
   */
  itemsInStatus(workflow, status) {
    return this._itemsInStatus(workflow, status);
  }

  /**
   * @param {Item} item
   * @param {String} workflow
   * @param {String} name
   * @param {{}} [options]
   * @param {User} [options.user]
   * @param {ChangeLogger} [options.changeLogger]
   * @returns {Promise}
   */
  performTransition(item, workflow, name, options) {
    return this._performTransition(item, workflow, name, options || {});
  }

  /**
   * @param {Item} item
   * @param {String} workflow
   * @param {String} state
   * @param {{}} [options]
   * @param {User} [options.user]
   * @param {ChangeLogger} [options.changeLogger]
   * @returns {Promise}
   */
  pushToState(item, workflow, state, options) {
    return this._pushToState(item, workflow, state, options || {});
  }
}

module.exports = WorkflowProvider;
