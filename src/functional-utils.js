//#region Utils
const pipe = (fn,...fns) => (...args) => fns.reduce((acc, fn) => fn(acc), fn(...args));
//#endregion
const compose = (...fns) => pipe(...fns.reverse());

exports.compose = compose;