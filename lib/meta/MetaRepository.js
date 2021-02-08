'use strict';

/**
 * @constructor
 */
class MetaRepository {

  // MetaRepository

  /**
   *
   * @param {String} name
   * @param {String} [version]
   * @param {String} [namespace]
   * @returns {ClassMeta}
   */
  getMeta(name, version, namespace) {
    return this._getMeta(name, version, namespace);
  }

  /**
   *
   * @param {String} [ancestor]
   * @param {String} [version]
   * @param {Boolean} [direct]
   * @param {String} [namespace]
   * @returns {ClassMeta[]}
   */
  listMeta(ancestor, version, direct, namespace) {
    return this._listMeta(ancestor, version, direct, namespace);
  }

  /**
   * @param {String} classname
   * @param {String} [version]
   * @param {String} [namespace]
   * @returns {ClassMeta}
   */
  ancestor(classname, version, namespace) {
    return this._ancestor(classname, version, namespace);
  }

  /**
   * @param {String} classname
   * @param {String} [version]
   * @param {String} [namespace]
   * @returns {Object[]}
   */
  propertyMetas(classname, version, namespace) {
    return this._propertyMetas(classname, version, namespace);
  }

  // NavigationRepository

  /**
   * @param {String} [namespace]
   * @returns {Object[]}
   */
  getNavigationSections(namespace) {
    return this._getNavigationSections(namespace);
  }

  /**
   * @param {String} code
   * @param {String} [namespace]
   * @returns {Object | null}
   */
  getNavigationSection(code, namespace) {
    return this._getNavigationSection(code, namespace);
  }

  /**
   * @param {String} code
   * @param {String} [namespace]
   * @returns {Object | null}
   */
  getNode(code, namespace) {
    return this._getNode(code, namespace);
  }

  /**
   * @param {String} sections
   * @param {String} [parent]
   * @param {String} [namespace]
   * @returns {Object[]}
   */
  getNodes(sections, parent, namespace) {
    return this._getNodes(sections, parent, namespace);
  }

  /**
   * @param {String} className
   * @param {String} [namespace]
   * @returns {Object | null}
   */
  getNodeForClassname(className, namespace) {
    return this._getNodeForClassname(className, namespace);
  }

  // ViewModelRepository

  /**
   * @param {String} className
   * @param {String} node
   * @param {String} [namespace]
   * @param {String} [version]
   * @returns {Object | null}
   */
  getListViewModel(className, node, namespace, version) {
    return this._getListViewModel(className, node, namespace, version);
  }

  /**
   * @param {String} className
   * @param {String} collection
   * @param {String} node
   * @param {String} [namespace]
   * @param {String} [version]
   * @returns {Object | null}
   */
  getCollectionViewModel(className, collection, node, namespace, version) {
    return this._getCollectionViewModel(className, collection, node, namespace, version);
  }

  /**
   * @param {String} className
   * @param {String} node
   * @param {String} [namespace]
   * @param {String} [version]
   * @returns {Object | null}
   */
  getItemViewModel(className, node, namespace, version) {
    return this._getItemViewModel(className, node, namespace, version);
  }

  /**
   * @param {String} className
   * @param {String} node
   * @param {String} [namespace]
   * @param {String} [version]
   * @returns {Object | null}
   */
  getCreationViewModel(className, node, namespace, version) {
    return this._getCreationViewModel(className, node, namespace, version);
  }

  /**
   * @param {String} className
   * @param {String} node
   * @param {String} [namespace]
   * @param {String} [version]
   * @returns {Object | null}
   */
  getDetailViewModel(className, node, namespace, version) {
    return this._getDetailViewModel(className, node, namespace, version);
  }

  /**
   * @param {String} className
   * @param {String} [namespace]
   * @param {String} [version]
   * @returns {Object[] | null}
   */
  getWorkflows(className, namespace, version) {
    return this._getWorkflows(className, namespace, version);
  }

  /**
   * @param {String} className
   * @param {String} workflow
   * @param {String} state
   * @param {String} [namespace]
   * @param {String} [version]
   * @returns {Object[] | null}
   */
  getWorkflowView(className, workflow, state, namespace, version) {
    return this._getWorkflowView(className, workflow, state, namespace, version);
  }

  /**
   * @param {String} className
   * @param {String} name
   * @param {String} [namespace]
   * @param {String} [version]
   * @returns {Object[] | null}
   */
  getWorkflow(className, name, namespace, version) {
    return this._getWorkflow(className, name, namespace, version);
  }

  /**
   * @param {String} name
   * @returns {Object | null}
   */
  getMask(name) {
    return this._getMask(name);
  }

  /**
   * @returns {Object[]}
   */
  getValidators() {
    return this._getValidators();
  }

  /**
   * @param {DbSync} sync
   * @returns {Promise}
   */
  init(sync) {
    return this._init(sync);
  }
}

module.exports = MetaRepository;
