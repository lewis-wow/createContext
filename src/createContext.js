const createContext = (obj) => function (fn, ...args) {
    return new Function(...Object.keys(obj), `"use strict"; return(${fn.toString()});`).bind(this)(...Object.values(obj))(...args);
}
