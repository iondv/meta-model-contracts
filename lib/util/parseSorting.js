const SortingModes = require('../SortingModes');

module.exports = function (sorting) {
  if (!sorting) {
    return {};
  }
  let sort = typeof sorting === 'string' ? JSON.parse(sorting) : sorting;
  let result = {};
  for (let i = 0; i < sort.length; i++) {
    result[sort[i].property] = parseInt(sort[i].mode) === SortingModes.DESC ? -1 : 1;
  }
  return result;
};
