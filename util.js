const Util = {};

function log(...args){
    let n = 0;
    console.group('=====log=====');
    args.forEach((arg) => console.log(`${++n}:  `, arg));
    console.groupEnd();
}

let [proto_obj, win, doc] = [Object.prototype, window, window.document];

let judges = {
    isNull: function (a) {
        return a === null;
    },
    isUndefined: function (a) {
        return a === undefined;
    },
    isNumber: function (a) {
        return typeof a === 'number';
    },
    isString: function (a) {
        return typeof a === 'string';
    },
    isBoolean: function (a) {
        return typeof a === 'boolean';
    },
    isPrimitive: function (b) {
        let a = typeof b;
        return b === undefined || b === null || a == 'boolean' || a == 'number' || a == 'string';
    },
    isArray: function (a) {
        return proto_obj.toString.call(a) === '[object Array]';
    },
    isFunction: function (a) {
        return proto_obj.toString.call(a) === '[object Function]';
    },
    isPlainObject: function (o) {
        if (!o || o === win || o === doc || o === doc.body) {
            return false;
        }
        return 'isPrototypeOf' in o && proto_obj.toString.call(o) === '[object Object]';
    },
    isWindow: function (o) {
        return o && typeof o === 'object' && 'setInterval' in o;
    },
    isEmptyObject: function (o) {
        for (let a in o) {
            return false;
        }
        return true;
    }
};

Object.assign(Util, judges);

export {Util, log};