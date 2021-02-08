'use strict';
const Item = require('../data/Item');

function getValue(context, nm) {
  if (context instanceof Item) {
    let p = context.property(nm);
    if (p) {
      return p.getValue();
    }
  }

  if (nm.indexOf('.') > 0) {
    let v = getValue(context, nm.substring(0, nm.indexOf('.')));
    if (v && typeof v === 'object') {
      v = getValue(v, nm.substring(nm.indexOf('.') + 1));
      if (v !== null) {
        return v;
      }
    }
  }

  if (context.hasOwnProperty(nm)) {
    return context[nm];
  }

  if (context.$context instanceof Item) {
    return getValue(context.$context, nm);
  }

  return null;
}

function parametrize(formula, context) {
  if (typeof formula === 'string' && formula.length > 1 && formula[0] === ':') {
    return getValue(context, formula.substr(1));
  } else if (Array.isArray(formula)) {
    let result = [];
    formula.forEach((v) => {
      result.push(parametrize(v, context));
    });
    return result;
  } else if (formula && typeof formula === 'object') {
    let result = {};
    for (let nm in formula) {
      result[nm] = parametrize(formula[nm], context);
    }
    return result;
  }
  return formula;
}

module.exports.parametrize = parametrize;
