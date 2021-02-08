'use strict';

class ClassMeta {
  getVersion() { return this._getVersion(); }

  getName() { return this._getName(); }
  
  getCaption() { return this._getCaption(); }
  
  getNamespace() { return this._getNamespace(); }
  
  getCanonicalName() {
      return this.getName() + (this.getNamespace() ? '@' + this.getNamespace() : '');
  }
  
  getSemantics(item) { return this._getSemantics(item); }
  
  isSemanticCached() { return this._isSemanticsCached(); }
  
  getCacheDependencies() { return this._getCachedDependencies(); }
  
  getSemanticAttrs() { return this._getSemanticAttrs(); }
  
  getForcedEnrichment() { return this._getForcedEnrichment(); }
  
  getKeyProperties() { return this._getKeyProperties(); }
  
  getContainerReference() { return this._getContainerRefrence(); }
  
  getCreationTracker() { return this._getCreationTracker(); }
  
  getChangeTracker() { return this._getChangeTracker(); }
  
  getAncestor() { return this.getAncestor(); }
  
  checkAncestor(name) { return this._checkAncestor(name); }
  
  getDescendants() { return this._getDescendants(); }
  
  getPropertyMeta(name) { return this._getPropertyMeta(name); }
  
  getPropertyMetas() { return this._getPropertyMetas(); }
  
  isJournaling() { return this._isJournaling(); }
  
  getCreatorTracker() { return this._getCreatorTracker(); }
  
  getEditorTracker() { return this._getEditorTracker(); }
  
  isAbstract() { return this._isAbstract(); }  
}

module.exports = ClassMeta;
