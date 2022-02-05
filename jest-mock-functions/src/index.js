export function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

export function funCallSomeFunction(arg1, arg2, callback) {
    callback(arg1, arg2);
}