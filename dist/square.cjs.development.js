'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var schema = require('@apimatic/schema');
var axios = _interopDefault(require('axios'));
var isNode = _interopDefault(require('detect-node'));
var FormData = _interopDefault(require('form-data'));
var warning = _interopDefault(require('tiny-warning'));
var flatMap = _interopDefault(require('lodash.flatmap'));

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var runtime_1 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   module.exports 
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
});

var registerDomainRequestSchema = /*#__PURE__*/schema.object({
  domainName: ['domain_name', /*#__PURE__*/schema.string()]
});

var errorSchema = /*#__PURE__*/schema.object({
  category: ['category', /*#__PURE__*/schema.string()],
  code: ['code', /*#__PURE__*/schema.string()],
  detail: ['detail', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  field: ['field', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var registerDomainResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  status: ['status', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

/** Base class for all controllers */
var BaseApi = function BaseApi(client) {
  this.createRequest = client.getRequestBuilderFactory();
};

var ApplePayApi = /*#__PURE__*/function (_BaseApi) {
  _inheritsLoose(ApplePayApi, _BaseApi);

  function ApplePayApi() {
    return _BaseApi.apply(this, arguments) || this;
  }

  var _proto = ApplePayApi.prototype;

  /**
   * Activates a domain for use with Web Apple Pay and Square. A validation
   * will be performed on this domain by Apple to ensure is it properly set up as
   * an Apple Pay enabled domain.
   *
   * This endpoint provides an easy way for platform developers to bulk activate
   * Web Apple Pay with Square for merchants using their platform.
   *
   * To learn more about Apple Pay on Web see the Apple Pay section in the
   * [Square Payment Form Walkthrough](https://developer.squareup.com/docs/payment-form/payment-form-
   * walkthrough).
   *
   * @param body An object containing the fields to POST for the request.  See the
   *                                             corresponding object definition for field details.
   * @return Response from the API call
   */
  _proto.registerDomain =
  /*#__PURE__*/
  function () {
    var _registerDomain = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = this.createRequest('POST', '/v2/apple-pay/domains');
              mapped = req.prepareArgs({
                body: [body, registerDomainRequestSchema]
              });
              req.json(mapped.body);
              return _context.abrupt("return", req.callAsJson(registerDomainResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function registerDomain(_x, _x2) {
      return _registerDomain.apply(this, arguments);
    }

    return registerDomain;
  }();

  return ApplePayApi;
}(BaseApi);

var bankAccountSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.string()],
  accountNumberSuffix: ['account_number_suffix', /*#__PURE__*/schema.string()],
  country: ['country', /*#__PURE__*/schema.string()],
  currency: ['currency', /*#__PURE__*/schema.string()],
  accountType: ['account_type', /*#__PURE__*/schema.string()],
  holderName: ['holder_name', /*#__PURE__*/schema.string()],
  primaryBankIdentificationNumber: ['primary_bank_identification_number', /*#__PURE__*/schema.string()],
  secondaryBankIdentificationNumber: ['secondary_bank_identification_number', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  debitMandateReferenceId: ['debit_mandate_reference_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  referenceId: ['reference_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  locationId: ['location_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  status: ['status', /*#__PURE__*/schema.string()],
  creditable: ['creditable', /*#__PURE__*/schema.boolean()],
  debitable: ['debitable', /*#__PURE__*/schema.boolean()],
  fingerprint: ['fingerprint', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  version: ['version', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  bankName: ['bank_name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var getBankAccountByV1IdResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  bankAccount: ['bank_account', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return bankAccountSchema;
  }))]
});

var getBankAccountResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  bankAccount: ['bank_account', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return bankAccountSchema;
  }))]
});

var listBankAccountsResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  bankAccounts: ['bank_accounts', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return bankAccountSchema;
  })))],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["/v2/bank-accounts/", ""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["/v2/bank-accounts/by-v1-id/", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var BankAccountsApi = /*#__PURE__*/function (_BaseApi) {
  _inheritsLoose(BankAccountsApi, _BaseApi);

  function BankAccountsApi() {
    return _BaseApi.apply(this, arguments) || this;
  }

  var _proto = BankAccountsApi.prototype;

  /**
   * Returns a list of [BankAccount](#type-bankaccount) objects linked to a Square account.
   *
   * @param cursor      The pagination cursor returned by a previous call to this endpoint. Use it in the
   *                              next `ListBankAccounts` request to retrieve the next set  of results.  See the
   *                              [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide
   *                              for more information.
   * @param limit       Upper limit on the number of bank accounts to return in the response.  Currently,
   *                              1000 is the largest supported limit. You can specify a limit  of up to 1000 bank
   *                              accounts. This is also the default limit.
   * @param locationId  Location ID. You can specify this optional filter  to retrieve only the linked bank
   *                              accounts belonging to a specific location.
   * @return Response from the API call
   */
  _proto.listBankAccounts =
  /*#__PURE__*/
  function () {
    var _listBankAccounts = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(cursor, limit, locationId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = this.createRequest('GET', '/v2/bank-accounts');
              mapped = req.prepareArgs({
                cursor: [cursor, schema.optional(schema.string())],
                limit: [limit, schema.optional(schema.number())],
                locationId: [locationId, schema.optional(schema.string())]
              });
              req.query('cursor', mapped.cursor);
              req.query('limit', mapped.limit);
              req.query('location_id', mapped.locationId);
              return _context.abrupt("return", req.callAsJson(listBankAccountsResponseSchema, requestOptions));

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function listBankAccounts(_x, _x2, _x3, _x4) {
      return _listBankAccounts.apply(this, arguments);
    }

    return listBankAccounts;
  }()
  /**
   * Returns details of a [BankAccount](#type-bankaccount) identified by V1 bank account ID.
   *
   * @param v1BankAccountId    Connect V1 ID of the desired `BankAccount`. For more information, see
   *                                     [Retrieve a bank account by using an ID issued by V1 Bank Accounts API](https:
   *                                     //developer.squareup.com/docs/bank-accounts-api#retrieve-a-bank-account-by-
   *                                     using-an-id-issued-by-v1-bank-accounts-api).
   * @return Response from the API call
   */
  ;

  _proto.getBankAccountByV1Id =
  /*#__PURE__*/
  function () {
    var _getBankAccountByV1Id = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(v1BankAccountId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                v1BankAccountId: [v1BankAccountId, schema.string()]
              });
              req.appendTemplatePath(_templateObject(), mapped.v1BankAccountId);
              return _context2.abrupt("return", req.callAsJson(getBankAccountByV1IdResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function getBankAccountByV1Id(_x5, _x6) {
      return _getBankAccountByV1Id.apply(this, arguments);
    }

    return getBankAccountByV1Id;
  }()
  /**
   * Returns details of a [BankAccount](#type-bankaccount)
   * linked to a Square account.
   *
   * @param bankAccountId   Square-issued ID of the desired `BankAccount`.
   * @return Response from the API call
   */
  ;

  _proto.getBankAccount =
  /*#__PURE__*/
  function () {
    var _getBankAccount = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(bankAccountId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                bankAccountId: [bankAccountId, schema.string()]
              });
              req.appendTemplatePath(_templateObject2(), mapped.bankAccountId);
              return _context3.abrupt("return", req.callAsJson(getBankAccountResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function getBankAccount(_x7, _x8) {
      return _getBankAccount.apply(this, arguments);
    }

    return getBankAccount;
  }();

  return BankAccountsApi;
}(BaseApi);

var appointmentSegmentSchema = /*#__PURE__*/schema.object({
  durationMinutes: ['duration_minutes', /*#__PURE__*/schema.number()],
  serviceVariationId: ['service_variation_id', /*#__PURE__*/schema.string()],
  teamMemberId: ['team_member_id', /*#__PURE__*/schema.string()],
  serviceVariationVersion: ['service_variation_version', /*#__PURE__*/schema.number()]
});

var bookingSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  version: ['version', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  status: ['status', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  createdAt: ['created_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  updatedAt: ['updated_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  startAt: ['start_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  locationId: ['location_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  customerId: ['customer_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  customerNote: ['customer_note', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  sellerNote: ['seller_note', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  appointmentSegments: ['appointment_segments', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return appointmentSegmentSchema;
  })))]
});

var createBookingRequestSchema = /*#__PURE__*/schema.object({
  idempotencyKey: ['idempotency_key', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  booking: ['booking', /*#__PURE__*/schema.lazy(function () {
    return bookingSchema;
  })]
});

var createBookingResponseSchema = /*#__PURE__*/schema.object({
  booking: ['booking', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return bookingSchema;
  }))],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var teamMemberBookingProfileSchema = /*#__PURE__*/schema.object({
  teamMemberId: ['team_member_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  description: ['description', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  displayName: ['display_name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  isBookable: ['is_bookable', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  profileImageUrl: ['profile_image_url', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var listTeamMemberBookingProfilesResponseSchema = /*#__PURE__*/schema.object({
  teamMemberBookingProfiles: ['team_member_booking_profiles', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return teamMemberBookingProfileSchema;
  })))],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var retrieveBookingResponseSchema = /*#__PURE__*/schema.object({
  booking: ['booking', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return bookingSchema;
  }))],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var moneySchema = /*#__PURE__*/schema.object({
  amount: ['amount', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  currency: ['currency', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var businessAppointmentSettingsSchema = /*#__PURE__*/schema.object({
  locationTypes: ['location_types', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  alignmentTime: ['alignment_time', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  minBookingLeadTimeSeconds: ['min_booking_lead_time_seconds', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  maxBookingLeadTimeSeconds: ['max_booking_lead_time_seconds', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  anyTeamMemberBookingEnabled: ['any_team_member_booking_enabled', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  multipleServiceBookingEnabled: ['multiple_service_booking_enabled', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  maxAppointmentsPerDayLimitType: ['max_appointments_per_day_limit_type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  maxAppointmentsPerDayLimit: ['max_appointments_per_day_limit', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  cancellationWindowSeconds: ['cancellation_window_seconds', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  cancellationFeeMoney: ['cancellation_fee_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  cancellationPolicy: ['cancellation_policy', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  cancellationPolicyText: ['cancellation_policy_text', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  skipBookingFlowStaffSelection: ['skip_booking_flow_staff_selection', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())]
});

var businessBookingProfileSchema = /*#__PURE__*/schema.object({
  sellerId: ['seller_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  createdAt: ['created_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  bookingEnabled: ['booking_enabled', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  customerTimezoneChoice: ['customer_timezone_choice', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  bookingPolicy: ['booking_policy', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  allowUserCancel: ['allow_user_cancel', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  businessAppointmentSettings: ['business_appointment_settings', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return businessAppointmentSettingsSchema;
  }))]
});

var retrieveBusinessBookingProfileResponseSchema = /*#__PURE__*/schema.object({
  businessBookingProfile: ['business_booking_profile', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return businessBookingProfileSchema;
  }))],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var retrieveTeamMemberBookingProfileResponseSchema = /*#__PURE__*/schema.object({
  teamMemberBookingProfile: ['team_member_booking_profile', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return teamMemberBookingProfileSchema;
  }))],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var filterValueSchema = /*#__PURE__*/schema.object({
  all: ['all', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  any: ['any', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  none: ['none', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))]
});

var segmentFilterSchema = /*#__PURE__*/schema.object({
  serviceVariationId: ['service_variation_id', /*#__PURE__*/schema.string()],
  teamMemberIdFilter: ['team_member_id_filter', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return filterValueSchema;
  }))]
});

var timeRangeSchema = /*#__PURE__*/schema.object({
  startAt: ['start_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  endAt: ['end_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var searchAvailabilityFilterSchema = /*#__PURE__*/schema.object({
  startAtRange: ['start_at_range', /*#__PURE__*/schema.lazy(function () {
    return timeRangeSchema;
  })],
  locationId: ['location_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  segmentFilters: ['segment_filters', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return segmentFilterSchema;
  })))],
  bookingId: ['booking_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var searchAvailabilityQuerySchema = /*#__PURE__*/schema.object({
  filter: ['filter', /*#__PURE__*/schema.lazy(function () {
    return searchAvailabilityFilterSchema;
  })]
});

var searchAvailabilityRequestSchema = /*#__PURE__*/schema.object({
  query: ['query', /*#__PURE__*/schema.lazy(function () {
    return searchAvailabilityQuerySchema;
  })]
});

var availabilitySchema = /*#__PURE__*/schema.object({
  startAt: ['start_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  locationId: ['location_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  appointmentSegments: ['appointment_segments', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return appointmentSegmentSchema;
  })))]
});

var searchAvailabilityResponseSchema = /*#__PURE__*/schema.object({
  availabilities: ['availabilities', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return availabilitySchema;
  })))],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var updateBookingRequestSchema = /*#__PURE__*/schema.object({
  idempotencyKey: ['idempotency_key', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  booking: ['booking', /*#__PURE__*/schema.lazy(function () {
    return bookingSchema;
  })]
});

var updateBookingResponseSchema = /*#__PURE__*/schema.object({
  booking: ['booking', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return bookingSchema;
  }))],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["/v2/bookings/", ""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = _taggedTemplateLiteralLoose(["/v2/bookings/", ""]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose(["/v2/bookings/team-member-booking-profiles/", ""]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var BookingsApi = /*#__PURE__*/function (_BaseApi) {
  _inheritsLoose(BookingsApi, _BaseApi);

  function BookingsApi() {
    return _BaseApi.apply(this, arguments) || this;
  }

  var _proto = BookingsApi.prototype;

  /**
   * Creates a booking.
   *
   * @param body An object containing the fields to POST for the request.  See the
   *                                            corresponding object definition for field details.
   * @return Response from the API call
   */
  _proto.createBooking =
  /*#__PURE__*/
  function () {
    var _createBooking = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = this.createRequest('POST', '/v2/bookings');
              mapped = req.prepareArgs({
                body: [body, createBookingRequestSchema]
              });
              req.json(mapped.body);
              return _context.abrupt("return", req.callAsJson(createBookingResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function createBooking(_x, _x2) {
      return _createBooking.apply(this, arguments);
    }

    return createBooking;
  }()
  /**
   * Searches for availabilities for booking.
   *
   * @param body An object containing the fields to POST for the request.  See the
   *                                                 corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.searchAvailability =
  /*#__PURE__*/
  function () {
    var _searchAvailability = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req = this.createRequest('POST', '/v2/bookings/availability/search');
              mapped = req.prepareArgs({
                body: [body, searchAvailabilityRequestSchema]
              });
              req.json(mapped.body);
              return _context2.abrupt("return", req.callAsJson(searchAvailabilityResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function searchAvailability(_x3, _x4) {
      return _searchAvailability.apply(this, arguments);
    }

    return searchAvailability;
  }()
  /**
   * Retrieves a seller's booking profile.
   *
   * @return Response from the API call
   */
  ;

  _proto.retrieveBusinessBookingProfile =
  /*#__PURE__*/
  function () {
    var _retrieveBusinessBookingProfile = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(requestOptions) {
      var req;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              req = this.createRequest('GET', '/v2/bookings/business-booking-profile');
              return _context3.abrupt("return", req.callAsJson(retrieveBusinessBookingProfileResponseSchema, requestOptions));

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function retrieveBusinessBookingProfile(_x5) {
      return _retrieveBusinessBookingProfile.apply(this, arguments);
    }

    return retrieveBusinessBookingProfile;
  }()
  /**
   * Lists booking profiles for team members.
   *
   * @param bookableOnly  Indicates whether to include only bookable team members in the returned result
   *                                 (`true`) or not (`false`).
   * @param limit         The maximum number of results to return.
   * @param cursor        The cursor for paginating through the results.
   * @param locationId    Indicates whether to include only team members enabled at the given location in
   *                                 the returned result.
   * @return Response from the API call
   */
  ;

  _proto.listTeamMemberBookingProfiles =
  /*#__PURE__*/
  function () {
    var _listTeamMemberBookingProfiles = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(bookableOnly, limit, cursor, locationId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              req = this.createRequest('GET', '/v2/bookings/team-member-booking-profiles');
              mapped = req.prepareArgs({
                bookableOnly: [bookableOnly, schema.optional(schema.boolean())],
                limit: [limit, schema.optional(schema.number())],
                cursor: [cursor, schema.optional(schema.string())],
                locationId: [locationId, schema.optional(schema.string())]
              });
              req.query('bookable_only', mapped.bookableOnly);
              req.query('limit', mapped.limit);
              req.query('cursor', mapped.cursor);
              req.query('location_id', mapped.locationId);
              return _context4.abrupt("return", req.callAsJson(listTeamMemberBookingProfilesResponseSchema, requestOptions));

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function listTeamMemberBookingProfiles(_x6, _x7, _x8, _x9, _x10) {
      return _listTeamMemberBookingProfiles.apply(this, arguments);
    }

    return listTeamMemberBookingProfiles;
  }()
  /**
   * Retrieves a team member's booking profile.
   *
   * @param teamMemberId   The ID of the team member to retrieve.
   * @return Response from the API call
   */
  ;

  _proto.retrieveTeamMemberBookingProfile =
  /*#__PURE__*/
  function () {
    var _retrieveTeamMemberBookingProfile = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5(teamMemberId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                teamMemberId: [teamMemberId, schema.string()]
              });
              req.appendTemplatePath(_templateObject$1(), mapped.teamMemberId);
              return _context5.abrupt("return", req.callAsJson(retrieveTeamMemberBookingProfileResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function retrieveTeamMemberBookingProfile(_x11, _x12) {
      return _retrieveTeamMemberBookingProfile.apply(this, arguments);
    }

    return retrieveTeamMemberBookingProfile;
  }()
  /**
   * Retrieves a booking.
   *
   * @param bookingId  The ID of the [Booking](#type-booking) object representing the to-be-retrieved
   *                             booking.
   * @return Response from the API call
   */
  ;

  _proto.retrieveBooking =
  /*#__PURE__*/
  function () {
    var _retrieveBooking = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee6(bookingId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                bookingId: [bookingId, schema.string()]
              });
              req.appendTemplatePath(_templateObject2$1(), mapped.bookingId);
              return _context6.abrupt("return", req.callAsJson(retrieveBookingResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function retrieveBooking(_x13, _x14) {
      return _retrieveBooking.apply(this, arguments);
    }

    return retrieveBooking;
  }()
  /**
   * Updates a booking.
   *
   * @param bookingId  The ID of the [Booking](#type-booking) object representing the
   *                                                  to-be-updated booking.
   * @param body       An object containing the fields to POST for the request.  See
   *                                                  the corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.updateBooking =
  /*#__PURE__*/
  function () {
    var _updateBooking = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee7(bookingId, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              req = this.createRequest('PUT');
              mapped = req.prepareArgs({
                bookingId: [bookingId, schema.string()],
                body: [body, updateBookingRequestSchema]
              });
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject3(), mapped.bookingId);
              return _context7.abrupt("return", req.callAsJson(updateBookingResponseSchema, requestOptions));

            case 5:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function updateBooking(_x15, _x16, _x17) {
      return _updateBooking.apply(this, arguments);
    }

    return updateBooking;
  }();

  return BookingsApi;
}(BaseApi);

var cashDrawerShiftEventSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  employeeId: ['employee_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  eventType: ['event_type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  eventMoney: ['event_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  createdAt: ['created_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  description: ['description', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var listCashDrawerShiftEventsResponseSchema = /*#__PURE__*/schema.object({
  events: ['events', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return cashDrawerShiftEventSchema;
  })))],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var cashDrawerShiftSummarySchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  state: ['state', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  openedAt: ['opened_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  endedAt: ['ended_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  closedAt: ['closed_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  description: ['description', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  openedCashMoney: ['opened_cash_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  expectedCashMoney: ['expected_cash_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  closedCashMoney: ['closed_cash_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))]
});

var listCashDrawerShiftsResponseSchema = /*#__PURE__*/schema.object({
  items: ['items', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return cashDrawerShiftSummarySchema;
  })))],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var cashDrawerDeviceSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var cashDrawerShiftSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  state: ['state', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  openedAt: ['opened_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  endedAt: ['ended_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  closedAt: ['closed_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  employeeIds: ['employee_ids', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  openingEmployeeId: ['opening_employee_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  endingEmployeeId: ['ending_employee_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  closingEmployeeId: ['closing_employee_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  description: ['description', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  openedCashMoney: ['opened_cash_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  cashPaymentMoney: ['cash_payment_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  cashRefundsMoney: ['cash_refunds_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  cashPaidInMoney: ['cash_paid_in_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  cashPaidOutMoney: ['cash_paid_out_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  expectedCashMoney: ['expected_cash_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  closedCashMoney: ['closed_cash_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  device: ['device', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return cashDrawerDeviceSchema;
  }))]
});

var retrieveCashDrawerShiftResponseSchema = /*#__PURE__*/schema.object({
  cashDrawerShift: ['cash_drawer_shift', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return cashDrawerShiftSchema;
  }))],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

function _templateObject2$2() {
  var data = _taggedTemplateLiteralLoose(["/v2/cash-drawers/shifts/", "/events"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteralLoose(["/v2/cash-drawers/shifts/", ""]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var CashDrawersApi = /*#__PURE__*/function (_BaseApi) {
  _inheritsLoose(CashDrawersApi, _BaseApi);

  function CashDrawersApi() {
    return _BaseApi.apply(this, arguments) || this;
  }

  var _proto = CashDrawersApi.prototype;

  /**
   * Provides the details for all of the cash drawer shifts for a location
   * in a date range.
   *
   * @param locationId  The ID of the location to query for a list of cash drawer shifts.
   * @param sortOrder   The order in which cash drawer shifts are listed in the response, based on their
   *                              opened_at field. Default value: ASC
   * @param beginTime   The inclusive start time of the query on opened_at, in ISO 8601 format.
   * @param endTime     The exclusive end date of the query on opened_at, in ISO 8601 format.
   * @param limit       Number of cash drawer shift events in a page of results (200 by default, 1000 max).
   * @param cursor      Opaque cursor for fetching the next page of results.
   * @return Response from the API call
   */
  _proto.listCashDrawerShifts =
  /*#__PURE__*/
  function () {
    var _listCashDrawerShifts = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(locationId, sortOrder, beginTime, endTime, limit, cursor, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = this.createRequest('GET', '/v2/cash-drawers/shifts');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                sortOrder: [sortOrder, schema.optional(schema.string())],
                beginTime: [beginTime, schema.optional(schema.string())],
                endTime: [endTime, schema.optional(schema.string())],
                limit: [limit, schema.optional(schema.number())],
                cursor: [cursor, schema.optional(schema.string())]
              });
              req.query('location_id', mapped.locationId);
              req.query('sort_order', mapped.sortOrder);
              req.query('begin_time', mapped.beginTime);
              req.query('end_time', mapped.endTime);
              req.query('limit', mapped.limit);
              req.query('cursor', mapped.cursor);
              return _context.abrupt("return", req.callAsJson(listCashDrawerShiftsResponseSchema, requestOptions));

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function listCashDrawerShifts(_x, _x2, _x3, _x4, _x5, _x6, _x7) {
      return _listCashDrawerShifts.apply(this, arguments);
    }

    return listCashDrawerShifts;
  }()
  /**
   * Provides the summary details for a single cash drawer shift. See
   * [ListCashDrawerShiftEvents](#endpoint-CashDrawers-ListCashDrawerShiftEvents) for a list of cash
   * drawer shift events.
   *
   * @param locationId  The ID of the location to retrieve cash drawer shifts from.
   * @param shiftId     The shift ID.
   * @return Response from the API call
   */
  ;

  _proto.retrieveCashDrawerShift =
  /*#__PURE__*/
  function () {
    var _retrieveCashDrawerShift = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(locationId, shiftId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                shiftId: [shiftId, schema.string()]
              });
              req.query('location_id', mapped.locationId);
              req.appendTemplatePath(_templateObject$2(), mapped.shiftId);
              return _context2.abrupt("return", req.callAsJson(retrieveCashDrawerShiftResponseSchema, requestOptions));

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function retrieveCashDrawerShift(_x8, _x9, _x10) {
      return _retrieveCashDrawerShift.apply(this, arguments);
    }

    return retrieveCashDrawerShift;
  }()
  /**
   * Provides a paginated list of events for a single cash drawer shift.
   *
   * @param locationId  The ID of the location to list cash drawer shifts for.
   * @param shiftId     The shift ID.
   * @param limit       Number of resources to be returned in a page of results (200 by default, 1000 max).
   * @param cursor      Opaque cursor for fetching the next page of results.
   * @return Response from the API call
   */
  ;

  _proto.listCashDrawerShiftEvents =
  /*#__PURE__*/
  function () {
    var _listCashDrawerShiftEvents = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(locationId, shiftId, limit, cursor, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                shiftId: [shiftId, schema.string()],
                limit: [limit, schema.optional(schema.number())],
                cursor: [cursor, schema.optional(schema.string())]
              });
              req.query('location_id', mapped.locationId);
              req.query('limit', mapped.limit);
              req.query('cursor', mapped.cursor);
              req.appendTemplatePath(_templateObject2$2(), mapped.shiftId);
              return _context3.abrupt("return", req.callAsJson(listCashDrawerShiftEventsResponseSchema, requestOptions));

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function listCashDrawerShiftEvents(_x11, _x12, _x13, _x14, _x15) {
      return _listCashDrawerShiftEvents.apply(this, arguments);
    }

    return listCashDrawerShiftEvents;
  }();

  return CashDrawersApi;
}(BaseApi);

var batchDeleteCatalogObjectsRequestSchema = /*#__PURE__*/schema.object({
  objectIds: ['object_ids', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))]
});

var batchDeleteCatalogObjectsResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  deletedObjectIds: ['deleted_object_ids', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  deletedAt: ['deleted_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var batchRetrieveCatalogObjectsRequestSchema = /*#__PURE__*/schema.object({
  objectIds: ['object_ids', /*#__PURE__*/schema.array( /*#__PURE__*/schema.string())],
  includeRelatedObjects: ['include_related_objects', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())]
});

var catalogCategorySchema = /*#__PURE__*/schema.object({
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var catalogCustomAttributeDefinitionNumberConfigSchema = /*#__PURE__*/schema.object({
  precision: ['precision', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())]
});

var catalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelectionSchema = /*#__PURE__*/schema.object({
  uid: ['uid', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  name: ['name', /*#__PURE__*/schema.string()]
});

var catalogCustomAttributeDefinitionSelectionConfigSchema = /*#__PURE__*/schema.object({
  maxAllowedSelections: ['max_allowed_selections', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  allowedSelections: ['allowed_selections', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return catalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelectionSchema;
  })))]
});

var catalogCustomAttributeDefinitionStringConfigSchema = /*#__PURE__*/schema.object({
  enforceUniqueness: ['enforce_uniqueness', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())]
});

var sourceApplicationSchema = /*#__PURE__*/schema.object({
  product: ['product', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  applicationId: ['application_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var catalogCustomAttributeDefinitionSchema = /*#__PURE__*/schema.object({
  type: ['type', /*#__PURE__*/schema.string()],
  name: ['name', /*#__PURE__*/schema.string()],
  description: ['description', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  sourceApplication: ['source_application', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return sourceApplicationSchema;
  }))],
  allowedObjectTypes: ['allowed_object_types', /*#__PURE__*/schema.array( /*#__PURE__*/schema.string())],
  sellerVisibility: ['seller_visibility', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  appVisibility: ['app_visibility', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  stringConfig: ['string_config', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return catalogCustomAttributeDefinitionStringConfigSchema;
  }))],
  numberConfig: ['number_config', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return catalogCustomAttributeDefinitionNumberConfigSchema;
  }))],
  selectionConfig: ['selection_config', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return catalogCustomAttributeDefinitionSelectionConfigSchema;
  }))],
  customAttributeUsageCount: ['custom_attribute_usage_count', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  key: ['key', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var catalogCustomAttributeValueSchema = /*#__PURE__*/schema.object({
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  stringValue: ['string_value', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  customAttributeDefinitionId: ['custom_attribute_definition_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  type: ['type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  numberValue: ['number_value', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  booleanValue: ['boolean_value', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  selectionUidValues: ['selection_uid_values', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  key: ['key', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var catalogDiscountSchema = /*#__PURE__*/schema.object({
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  discountType: ['discount_type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  percentage: ['percentage', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  amountMoney: ['amount_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  pinRequired: ['pin_required', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  labelColor: ['label_color', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  modifyTaxBasis: ['modify_tax_basis', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var catalogImageSchema = /*#__PURE__*/schema.object({
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  url: ['url', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  caption: ['caption', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var catalogModifierOverrideSchema = /*#__PURE__*/schema.object({
  modifierId: ['modifier_id', /*#__PURE__*/schema.string()],
  onByDefault: ['on_by_default', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())]
});

var catalogItemModifierListInfoSchema = /*#__PURE__*/schema.object({
  modifierListId: ['modifier_list_id', /*#__PURE__*/schema.string()],
  modifierOverrides: ['modifier_overrides', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return catalogModifierOverrideSchema;
  })))],
  minSelectedModifiers: ['min_selected_modifiers', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  maxSelectedModifiers: ['max_selected_modifiers', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  enabled: ['enabled', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())]
});

var catalogItemOptionForItemSchema = /*#__PURE__*/schema.object({
  itemOptionId: ['item_option_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var catalogItemSchema = /*#__PURE__*/schema.object({
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  description: ['description', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  abbreviation: ['abbreviation', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  labelColor: ['label_color', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  availableOnline: ['available_online', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  availableForPickup: ['available_for_pickup', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  availableElectronically: ['available_electronically', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  categoryId: ['category_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  taxIds: ['tax_ids', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  modifierListInfo: ['modifier_list_info', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return catalogItemModifierListInfoSchema;
  })))],
  variations: ['variations', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return catalogObjectSchema;
  })))],
  productType: ['product_type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  skipModifierScreen: ['skip_modifier_screen', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  itemOptions: ['item_options', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return catalogItemOptionForItemSchema;
  })))]
});

var catalogItemOptionSchema = /*#__PURE__*/schema.object({
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  displayName: ['display_name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  description: ['description', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  showColors: ['show_colors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  values: ['values', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return catalogObjectSchema;
  })))]
});

var catalogItemOptionValueSchema = /*#__PURE__*/schema.object({
  itemOptionId: ['item_option_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  description: ['description', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  color: ['color', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  ordinal: ['ordinal', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())]
});

var catalogItemOptionValueForItemVariationSchema = /*#__PURE__*/schema.object({
  itemOptionId: ['item_option_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  itemOptionValueId: ['item_option_value_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var itemVariationLocationOverridesSchema = /*#__PURE__*/schema.object({
  locationId: ['location_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  priceMoney: ['price_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  pricingType: ['pricing_type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  trackInventory: ['track_inventory', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  inventoryAlertType: ['inventory_alert_type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  inventoryAlertThreshold: ['inventory_alert_threshold', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())]
});

var catalogItemVariationSchema = /*#__PURE__*/schema.object({
  itemId: ['item_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  sku: ['sku', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  upc: ['upc', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  ordinal: ['ordinal', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  pricingType: ['pricing_type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  priceMoney: ['price_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  locationOverrides: ['location_overrides', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return itemVariationLocationOverridesSchema;
  })))],
  trackInventory: ['track_inventory', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  inventoryAlertType: ['inventory_alert_type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  inventoryAlertThreshold: ['inventory_alert_threshold', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  userData: ['user_data', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  serviceDuration: ['service_duration', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  availableForBooking: ['available_for_booking', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  itemOptionValues: ['item_option_values', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return catalogItemOptionValueForItemVariationSchema;
  })))],
  measurementUnitId: ['measurement_unit_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  teamMemberIds: ['team_member_ids', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))]
});

var measurementUnitCustomSchema = /*#__PURE__*/schema.object({
  name: ['name', /*#__PURE__*/schema.string()],
  abbreviation: ['abbreviation', /*#__PURE__*/schema.string()]
});

var measurementUnitSchema = /*#__PURE__*/schema.object({
  customUnit: ['custom_unit', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return measurementUnitCustomSchema;
  }))],
  areaUnit: ['area_unit', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  lengthUnit: ['length_unit', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  volumeUnit: ['volume_unit', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  weightUnit: ['weight_unit', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  genericUnit: ['generic_unit', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  timeUnit: ['time_unit', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  type: ['type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var catalogMeasurementUnitSchema = /*#__PURE__*/schema.object({
  measurementUnit: ['measurement_unit', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return measurementUnitSchema;
  }))],
  precision: ['precision', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())]
});

var catalogModifierSchema = /*#__PURE__*/schema.object({
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  priceMoney: ['price_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  ordinal: ['ordinal', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  modifierListId: ['modifier_list_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var catalogModifierListSchema = /*#__PURE__*/schema.object({
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  ordinal: ['ordinal', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  selectionType: ['selection_type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  modifiers: ['modifiers', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return catalogObjectSchema;
  })))]
});

var catalogPricingRuleSchema = /*#__PURE__*/schema.object({
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  timePeriodIds: ['time_period_ids', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  discountId: ['discount_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  matchProductsId: ['match_products_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  applyProductsId: ['apply_products_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  excludeProductsId: ['exclude_products_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  validFromDate: ['valid_from_date', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  validFromLocalTime: ['valid_from_local_time', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  validUntilDate: ['valid_until_date', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  validUntilLocalTime: ['valid_until_local_time', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  excludeStrategy: ['exclude_strategy', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var catalogProductSetSchema = /*#__PURE__*/schema.object({
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  productIdsAny: ['product_ids_any', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  productIdsAll: ['product_ids_all', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  quantityExact: ['quantity_exact', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  quantityMin: ['quantity_min', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  quantityMax: ['quantity_max', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  allProducts: ['all_products', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())]
});

var catalogQuickAmountSchema = /*#__PURE__*/schema.object({
  type: ['type', /*#__PURE__*/schema.string()],
  amount: ['amount', /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  })],
  score: ['score', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  ordinal: ['ordinal', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())]
});

var catalogQuickAmountsSettingsSchema = /*#__PURE__*/schema.object({
  option: ['option', /*#__PURE__*/schema.string()],
  eligibleForAutoAmounts: ['eligible_for_auto_amounts', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  amounts: ['amounts', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return catalogQuickAmountSchema;
  })))]
});

var subscriptionPhaseSchema = /*#__PURE__*/schema.object({
  uid: ['uid', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  cadence: ['cadence', /*#__PURE__*/schema.string()],
  periods: ['periods', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  recurringPriceMoney: ['recurring_price_money', /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  })],
  ordinal: ['ordinal', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())]
});

var catalogSubscriptionPlanSchema = /*#__PURE__*/schema.object({
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  phases: ['phases', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return subscriptionPhaseSchema;
  })))]
});

var catalogTaxSchema = /*#__PURE__*/schema.object({
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  calculationPhase: ['calculation_phase', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  inclusionType: ['inclusion_type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  percentage: ['percentage', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  appliesToCustomAmounts: ['applies_to_custom_amounts', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  enabled: ['enabled', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())]
});

var catalogTimePeriodSchema = /*#__PURE__*/schema.object({
  event: ['event', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var catalogV1IdSchema = /*#__PURE__*/schema.object({
  catalogV1Id: ['catalog_v1_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  locationId: ['location_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var catalogObjectSchema = /*#__PURE__*/schema.object({
  type: ['type', /*#__PURE__*/schema.string()],
  id: ['id', /*#__PURE__*/schema.string()],
  updatedAt: ['updated_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  version: ['version', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  isDeleted: ['is_deleted', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  customAttributeValues: ['custom_attribute_values', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.dict( /*#__PURE__*/schema.lazy(function () {
    return catalogCustomAttributeValueSchema;
  })))],
  catalogV1Ids: ['catalog_v1_ids', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return catalogV1IdSchema;
  })))],
  presentAtAllLocations: ['present_at_all_locations', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  presentAtLocationIds: ['present_at_location_ids', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  absentAtLocationIds: ['absent_at_location_ids', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  imageId: ['image_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  itemData: ['item_data', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return catalogItemSchema;
  }))],
  categoryData: ['category_data', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return catalogCategorySchema;
  }))],
  itemVariationData: ['item_variation_data', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return catalogItemVariationSchema;
  }))],
  taxData: ['tax_data', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return catalogTaxSchema;
  }))],
  discountData: ['discount_data', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return catalogDiscountSchema;
  }))],
  modifierListData: ['modifier_list_data', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return catalogModifierListSchema;
  }))],
  modifierData: ['modifier_data', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return catalogModifierSchema;
  }))],
  timePeriodData: ['time_period_data', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return catalogTimePeriodSchema;
  }))],
  productSetData: ['product_set_data', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return catalogProductSetSchema;
  }))],
  pricingRuleData: ['pricing_rule_data', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return catalogPricingRuleSchema;
  }))],
  imageData: ['image_data', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return catalogImageSchema;
  }))],
  measurementUnitData: ['measurement_unit_data', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return catalogMeasurementUnitSchema;
  }))],
  subscriptionPlanData: ['subscription_plan_data', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return catalogSubscriptionPlanSchema;
  }))],
  itemOptionData: ['item_option_data', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return catalogItemOptionSchema;
  }))],
  itemOptionValueData: ['item_option_value_data', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return catalogItemOptionValueSchema;
  }))],
  customAttributeDefinitionData: ['custom_attribute_definition_data', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return catalogCustomAttributeDefinitionSchema;
  }))],
  quickAmountsSettingsData: ['quick_amounts_settings_data', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return catalogQuickAmountsSettingsSchema;
  }))]
});

var batchRetrieveCatalogObjectsResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  objects: ['objects', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return catalogObjectSchema;
  })))],
  relatedObjects: ['related_objects', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return catalogObjectSchema;
  })))]
});

var catalogObjectBatchSchema = /*#__PURE__*/schema.object({
  objects: ['objects', /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return catalogObjectSchema;
  }))]
});

var batchUpsertCatalogObjectsRequestSchema = /*#__PURE__*/schema.object({
  idempotencyKey: ['idempotency_key', /*#__PURE__*/schema.string()],
  batches: ['batches', /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return catalogObjectBatchSchema;
  }))]
});

var catalogIdMappingSchema = /*#__PURE__*/schema.object({
  clientObjectId: ['client_object_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  objectId: ['object_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var batchUpsertCatalogObjectsResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  objects: ['objects', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return catalogObjectSchema;
  })))],
  updatedAt: ['updated_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  idMappings: ['id_mappings', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return catalogIdMappingSchema;
  })))]
});

var catalogInfoResponseLimitsSchema = /*#__PURE__*/schema.object({
  batchUpsertMaxObjectsPerBatch: ['batch_upsert_max_objects_per_batch', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  batchUpsertMaxTotalObjects: ['batch_upsert_max_total_objects', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  batchRetrieveMaxObjectIds: ['batch_retrieve_max_object_ids', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  searchMaxPageLimit: ['search_max_page_limit', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  batchDeleteMaxObjectIds: ['batch_delete_max_object_ids', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  updateItemTaxesMaxItemIds: ['update_item_taxes_max_item_ids', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  updateItemTaxesMaxTaxesToEnable: ['update_item_taxes_max_taxes_to_enable', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  updateItemTaxesMaxTaxesToDisable: ['update_item_taxes_max_taxes_to_disable', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  updateItemModifierListsMaxItemIds: ['update_item_modifier_lists_max_item_ids', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  updateItemModifierListsMaxModifierListsToEnable: ['update_item_modifier_lists_max_modifier_lists_to_enable', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  updateItemModifierListsMaxModifierListsToDisable: ['update_item_modifier_lists_max_modifier_lists_to_disable', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())]
});

var standardUnitDescriptionSchema = /*#__PURE__*/schema.object({
  unit: ['unit', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return measurementUnitSchema;
  }))],
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  abbreviation: ['abbreviation', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var standardUnitDescriptionGroupSchema = /*#__PURE__*/schema.object({
  standardUnitDescriptions: ['standard_unit_descriptions', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return standardUnitDescriptionSchema;
  })))],
  languageCode: ['language_code', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var catalogInfoResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  limits: ['limits', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return catalogInfoResponseLimitsSchema;
  }))],
  standardUnitDescriptionGroup: ['standard_unit_description_group', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return standardUnitDescriptionGroupSchema;
  }))]
});

var createCatalogImageRequestSchema = /*#__PURE__*/schema.object({
  idempotencyKey: ['idempotency_key', /*#__PURE__*/schema.string()],
  objectId: ['object_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  image: ['image', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return catalogObjectSchema;
  }))]
});

var createCatalogImageResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  image: ['image', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return catalogObjectSchema;
  }))]
});

var deleteCatalogObjectResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  deletedObjectIds: ['deleted_object_ids', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  deletedAt: ['deleted_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var listCatalogResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  objects: ['objects', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return catalogObjectSchema;
  })))]
});

var retrieveCatalogObjectResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  object: ['object', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return catalogObjectSchema;
  }))],
  relatedObjects: ['related_objects', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return catalogObjectSchema;
  })))]
});

var rangeSchema = /*#__PURE__*/schema.object({
  min: ['min', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  max: ['max', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var customAttributeFilterSchema = /*#__PURE__*/schema.object({
  customAttributeDefinitionId: ['custom_attribute_definition_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  key: ['key', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  stringFilter: ['string_filter', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  numberFilter: ['number_filter', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return rangeSchema;
  }))],
  selectionUidsFilter: ['selection_uids_filter', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  boolFilter: ['bool_filter', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())]
});

var searchCatalogItemsRequestSchema = /*#__PURE__*/schema.object({
  textFilter: ['text_filter', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  categoryIds: ['category_ids', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  stockLevels: ['stock_levels', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  enabledLocationIds: ['enabled_location_ids', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  limit: ['limit', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  sortOrder: ['sort_order', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  productTypes: ['product_types', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  customAttributeFilters: ['custom_attribute_filters', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return customAttributeFilterSchema;
  })))]
});

var searchCatalogItemsResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  items: ['items', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return catalogObjectSchema;
  })))],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  matchedVariationIds: ['matched_variation_ids', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))]
});

var catalogQueryExactSchema = /*#__PURE__*/schema.object({
  attributeName: ['attribute_name', /*#__PURE__*/schema.string()],
  attributeValue: ['attribute_value', /*#__PURE__*/schema.string()]
});

var catalogQueryItemsForItemOptionsSchema = /*#__PURE__*/schema.object({
  itemOptionIds: ['item_option_ids', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))]
});

var catalogQueryItemsForModifierListSchema = /*#__PURE__*/schema.object({
  modifierListIds: ['modifier_list_ids', /*#__PURE__*/schema.array( /*#__PURE__*/schema.string())]
});

var catalogQueryItemsForTaxSchema = /*#__PURE__*/schema.object({
  taxIds: ['tax_ids', /*#__PURE__*/schema.array( /*#__PURE__*/schema.string())]
});

var catalogQueryItemVariationsForItemOptionValuesSchema = /*#__PURE__*/schema.object({
  itemOptionValueIds: ['item_option_value_ids', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))]
});

var catalogQueryPrefixSchema = /*#__PURE__*/schema.object({
  attributeName: ['attribute_name', /*#__PURE__*/schema.string()],
  attributePrefix: ['attribute_prefix', /*#__PURE__*/schema.string()]
});

var catalogQueryRangeSchema = /*#__PURE__*/schema.object({
  attributeName: ['attribute_name', /*#__PURE__*/schema.string()],
  attributeMinValue: ['attribute_min_value', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  attributeMaxValue: ['attribute_max_value', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())]
});

var catalogQuerySetSchema = /*#__PURE__*/schema.object({
  attributeName: ['attribute_name', /*#__PURE__*/schema.string()],
  attributeValues: ['attribute_values', /*#__PURE__*/schema.array( /*#__PURE__*/schema.string())]
});

var catalogQuerySortedAttributeSchema = /*#__PURE__*/schema.object({
  attributeName: ['attribute_name', /*#__PURE__*/schema.string()],
  initialAttributeValue: ['initial_attribute_value', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  sortOrder: ['sort_order', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var catalogQueryTextSchema = /*#__PURE__*/schema.object({
  keywords: ['keywords', /*#__PURE__*/schema.array( /*#__PURE__*/schema.string())]
});

var catalogQuerySchema = /*#__PURE__*/schema.object({
  sortedAttributeQuery: ['sorted_attribute_query', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return catalogQuerySortedAttributeSchema;
  }))],
  exactQuery: ['exact_query', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return catalogQueryExactSchema;
  }))],
  setQuery: ['set_query', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return catalogQuerySetSchema;
  }))],
  prefixQuery: ['prefix_query', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return catalogQueryPrefixSchema;
  }))],
  rangeQuery: ['range_query', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return catalogQueryRangeSchema;
  }))],
  textQuery: ['text_query', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return catalogQueryTextSchema;
  }))],
  itemsForTaxQuery: ['items_for_tax_query', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return catalogQueryItemsForTaxSchema;
  }))],
  itemsForModifierListQuery: ['items_for_modifier_list_query', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return catalogQueryItemsForModifierListSchema;
  }))],
  itemsForItemOptionsQuery: ['items_for_item_options_query', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return catalogQueryItemsForItemOptionsSchema;
  }))],
  itemVariationsForItemOptionValuesQuery: ['item_variations_for_item_option_values_query', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return catalogQueryItemVariationsForItemOptionValuesSchema;
  }))]
});

var searchCatalogObjectsRequestSchema = /*#__PURE__*/schema.object({
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  objectTypes: ['object_types', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  includeDeletedObjects: ['include_deleted_objects', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  includeRelatedObjects: ['include_related_objects', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  beginTime: ['begin_time', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  query: ['query', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return catalogQuerySchema;
  }))],
  limit: ['limit', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())]
});

var searchCatalogObjectsResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  objects: ['objects', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return catalogObjectSchema;
  })))],
  relatedObjects: ['related_objects', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return catalogObjectSchema;
  })))],
  latestTime: ['latest_time', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var updateItemModifierListsRequestSchema = /*#__PURE__*/schema.object({
  itemIds: ['item_ids', /*#__PURE__*/schema.array( /*#__PURE__*/schema.string())],
  modifierListsToEnable: ['modifier_lists_to_enable', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  modifierListsToDisable: ['modifier_lists_to_disable', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))]
});

var updateItemModifierListsResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  updatedAt: ['updated_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var updateItemTaxesRequestSchema = /*#__PURE__*/schema.object({
  itemIds: ['item_ids', /*#__PURE__*/schema.array( /*#__PURE__*/schema.string())],
  taxesToEnable: ['taxes_to_enable', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  taxesToDisable: ['taxes_to_disable', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))]
});

var updateItemTaxesResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  updatedAt: ['updated_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var upsertCatalogObjectRequestSchema = /*#__PURE__*/schema.object({
  idempotencyKey: ['idempotency_key', /*#__PURE__*/schema.string()],
  object: ['object', /*#__PURE__*/schema.lazy(function () {
    return catalogObjectSchema;
  })]
});

var upsertCatalogObjectResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  catalogObject: ['catalog_object', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return catalogObjectSchema;
  }))],
  idMappings: ['id_mappings', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return catalogIdMappingSchema;
  })))]
});

function _templateObject2$3() {
  var data = _taggedTemplateLiteralLoose(["/v2/catalog/object/", ""]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$3() {
  var data = _taggedTemplateLiteralLoose(["/v2/catalog/object/", ""]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var CatalogApi = /*#__PURE__*/function (_BaseApi) {
  _inheritsLoose(CatalogApi, _BaseApi);

  function CatalogApi() {
    return _BaseApi.apply(this, arguments) || this;
  }

  var _proto = CatalogApi.prototype;

  /**
   * Deletes a set of [CatalogItem](#type-catalogitem)s based on the
   * provided list of target IDs and returns a set of successfully deleted IDs in
   * the response. Deletion is a cascading event such that all children of the
   * targeted object are also deleted. For example, deleting a CatalogItem will
   * also delete all of its [CatalogItemVariation](#type-catalogitemvariation)
   * children.
   *
   * `BatchDeleteCatalogObjects` succeeds even if only a portion of the targeted
   * IDs can be deleted. The response will only include IDs that were
   * actually deleted.
   *
   * @param body An object containing the fields to POST for the request.
   *                                                        See the corresponding object definition for field details.
   * @return Response from the API call
   */
  _proto.batchDeleteCatalogObjects =
  /*#__PURE__*/
  function () {
    var _batchDeleteCatalogObjects = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = this.createRequest('POST', '/v2/catalog/batch-delete');
              mapped = req.prepareArgs({
                body: [body, batchDeleteCatalogObjectsRequestSchema]
              });
              req.json(mapped.body);
              return _context.abrupt("return", req.callAsJson(batchDeleteCatalogObjectsResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function batchDeleteCatalogObjects(_x, _x2) {
      return _batchDeleteCatalogObjects.apply(this, arguments);
    }

    return batchDeleteCatalogObjects;
  }()
  /**
   * Returns a set of objects based on the provided ID.
   * Each [CatalogItem](#type-catalogitem) returned in the set includes all of its
   * child information including: all of its
   * [CatalogItemVariation](#type-catalogitemvariation) objects, references to
   * its [CatalogModifierList](#type-catalogmodifierlist) objects, and the ids of
   * any [CatalogTax](#type-catalogtax) objects that apply to it.
   *
   * @param body An object containing the fields to POST for the request.
   *                                                          See the corresponding object definition for field
   *                                                          details.
   * @return Response from the API call
   */
  ;

  _proto.batchRetrieveCatalogObjects =
  /*#__PURE__*/
  function () {
    var _batchRetrieveCatalogObjects = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req = this.createRequest('POST', '/v2/catalog/batch-retrieve');
              mapped = req.prepareArgs({
                body: [body, batchRetrieveCatalogObjectsRequestSchema]
              });
              req.json(mapped.body);
              return _context2.abrupt("return", req.callAsJson(batchRetrieveCatalogObjectsResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function batchRetrieveCatalogObjects(_x3, _x4) {
      return _batchRetrieveCatalogObjects.apply(this, arguments);
    }

    return batchRetrieveCatalogObjects;
  }()
  /**
   * Creates or updates up to 10,000 target objects based on the provided
   * list of objects. The target objects are grouped into batches and each batch is
   * inserted/updated in an all-or-nothing manner. If an object within a batch is
   * malformed in some way, or violates a database constraint, the entire batch
   * containing that item will be disregarded. However, other batches in the same
   * request may still succeed. Each batch may contain up to 1,000 objects, and
   * batches will be processed in order as long as the total object count for the
   * request (items, variations, modifier lists, discounts, and taxes) is no more
   * than 10,000.
   *
   * @param body An object containing the fields to POST for the request.
   *                                                        See the corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.batchUpsertCatalogObjects =
  /*#__PURE__*/
  function () {
    var _batchUpsertCatalogObjects = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              req = this.createRequest('POST', '/v2/catalog/batch-upsert');
              mapped = req.prepareArgs({
                body: [body, batchUpsertCatalogObjectsRequestSchema]
              });
              req.json(mapped.body);
              return _context3.abrupt("return", req.callAsJson(batchUpsertCatalogObjectsResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function batchUpsertCatalogObjects(_x5, _x6) {
      return _batchUpsertCatalogObjects.apply(this, arguments);
    }

    return batchUpsertCatalogObjects;
  }()
  /**
   * Uploads an image file to be represented by a [CatalogImage](#type-catalogimage) object linked to an
   * existing
   * [CatalogObject](#type-catalogobject) instance. A call to this endpoint can upload an image, link an
   * image to
   * a catalog object, or do both.
   *
   * This `CreateCatalogImage` endpoint accepts HTTP multipart/form-data requests with a JSON part and an
   * image file part in
   * JPEG, PJPEG, PNG, or GIF format. The maximum file size is 15MB.
   *
   * @param request
   * @param imageFile
   * @return Response from the API call
   */
  ;

  _proto.createCatalogImage =
  /*#__PURE__*/
  function () {
    var _createCatalogImage = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(request, imageFile, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              req = this.createRequest('POST', '/v2/catalog/images');
              mapped = req.prepareArgs({
                request: [request, schema.optional(createCatalogImageRequestSchema)]
              });
              req.formData({
                request: JSON.stringify(mapped.request),
                image_file: imageFile
              });
              return _context4.abrupt("return", req.callAsJson(createCatalogImageResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function createCatalogImage(_x7, _x8, _x9) {
      return _createCatalogImage.apply(this, arguments);
    }

    return createCatalogImage;
  }()
  /**
   * Retrieves information about the Square Catalog API, such as batch size
   * limits that can be used by the `BatchUpsertCatalogObjects` endpoint.
   *
   * @return Response from the API call
   */
  ;

  _proto.catalogInfo =
  /*#__PURE__*/
  function () {
    var _catalogInfo = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5(requestOptions) {
      var req;
      return runtime_1.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              req = this.createRequest('GET', '/v2/catalog/info');
              return _context5.abrupt("return", req.callAsJson(catalogInfoResponseSchema, requestOptions));

            case 2:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function catalogInfo(_x10) {
      return _catalogInfo.apply(this, arguments);
    }

    return catalogInfo;
  }()
  /**
   * Returns a list of [CatalogObject](#type-catalogobject)s that includes
   * all objects of a set of desired types (for example, all [CatalogItem](#type-catalogitem)
   * and [CatalogTax](#type-catalogtax) objects) in the catalog. The `types` parameter
   * is specified as a comma-separated list of valid [CatalogObject](#type-catalogobject) types:
   * `ITEM`, `ITEM_VARIATION`, `MODIFIER`, `MODIFIER_LIST`, `CATEGORY`, `DISCOUNT`, `TAX`, `IMAGE`.
   *
   * __Important:__ ListCatalog does not return deleted catalog items. To retrieve
   * deleted catalog items, use [SearchCatalogObjects](#endpoint-Catalog-SearchCatalogObjects)
   * and set the `include_deleted_objects` attribute value to `true`.
   *
   * @param cursor The pagination cursor returned in the previous response. Leave unset for an initial
   *                         request. See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination)
   *                         for more information.
   * @param types  An optional case-insensitive, comma-separated list of object types to retrieve, for
   *                         example `ITEM,ITEM_VARIATION,CATEGORY,IMAGE`.  The legal values are taken from the
   *                         CatalogObjectType enum: `ITEM`, `ITEM_VARIATION`, `CATEGORY`, `DISCOUNT`, `TAX`,
   *                         `MODIFIER`, `MODIFIER_LIST`, or `IMAGE`.
   * @return Response from the API call
   */
  ;

  _proto.listCatalog =
  /*#__PURE__*/
  function () {
    var _listCatalog = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee6(cursor, types, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              req = this.createRequest('GET', '/v2/catalog/list');
              mapped = req.prepareArgs({
                cursor: [cursor, schema.optional(schema.string())],
                types: [types, schema.optional(schema.string())]
              });
              req.query('cursor', mapped.cursor);
              req.query('types', mapped.types);
              return _context6.abrupt("return", req.callAsJson(listCatalogResponseSchema, requestOptions));

            case 5:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function listCatalog(_x11, _x12, _x13) {
      return _listCatalog.apply(this, arguments);
    }

    return listCatalog;
  }()
  /**
   * Creates or updates the target [CatalogObject](#type-catalogobject).
   *
   * @param body An object containing the fields to POST for the request.  See
   *                                                  the corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.upsertCatalogObject =
  /*#__PURE__*/
  function () {
    var _upsertCatalogObject = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee7(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              req = this.createRequest('POST', '/v2/catalog/object');
              mapped = req.prepareArgs({
                body: [body, upsertCatalogObjectRequestSchema]
              });
              req.json(mapped.body);
              return _context7.abrupt("return", req.callAsJson(upsertCatalogObjectResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function upsertCatalogObject(_x14, _x15) {
      return _upsertCatalogObject.apply(this, arguments);
    }

    return upsertCatalogObject;
  }()
  /**
   * Deletes a single [CatalogObject](#type-catalogobject) based on the
   * provided ID and returns the set of successfully deleted IDs in the response.
   * Deletion is a cascading event such that all children of the targeted object
   * are also deleted. For example, deleting a [CatalogItem](#type-catalogitem)
   * will also delete all of its
   * [CatalogItemVariation](#type-catalogitemvariation) children.
   *
   * @param objectId  The ID of the catalog object to be deleted. When an object is deleted, other objects
   *                            in the graph that depend on that object will be deleted as well (for example, deleting
   *                            a catalog item will delete its catalog item variations).
   * @return Response from the API call
   */
  ;

  _proto.deleteCatalogObject =
  /*#__PURE__*/
  function () {
    var _deleteCatalogObject = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee8(objectId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              req = this.createRequest('DELETE');
              mapped = req.prepareArgs({
                objectId: [objectId, schema.string()]
              });
              req.appendTemplatePath(_templateObject$3(), mapped.objectId);
              return _context8.abrupt("return", req.callAsJson(deleteCatalogObjectResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function deleteCatalogObject(_x16, _x17) {
      return _deleteCatalogObject.apply(this, arguments);
    }

    return deleteCatalogObject;
  }()
  /**
   * Returns a single [CatalogItem](#type-catalogitem) as a
   * [CatalogObject](#type-catalogobject) based on the provided ID. The returned
   * object includes all of the relevant [CatalogItem](#type-catalogitem)
   * information including: [CatalogItemVariation](#type-catalogitemvariation)
   * children, references to its
   * [CatalogModifierList](#type-catalogmodifierlist) objects, and the ids of
   * any [CatalogTax](#type-catalogtax) objects that apply to it.
   *
   * @param objectId                The object ID of any type of catalog objects to be retrieved.
   * @param includeRelatedObjects   If `true`, the response will include additional objects that are
   *                                           related to the requested object, as follows:  If the `object` field of
   *                                           the response contains a `CatalogItem`, its associated `CatalogCategory`,
   *                                           `CatalogTax`, `CatalogImage` and `CatalogModifierList` objects will be
   *                                           returned in the `related_objects` field of the response. If the `object`
   *                                           field of the response contains a `CatalogItemVariation`, its parent
   *                                           `CatalogItem` will be returned in the `related_objects` field of the
   *                                           response.  Default value: `false`
   * @return Response from the API call
   */
  ;

  _proto.retrieveCatalogObject =
  /*#__PURE__*/
  function () {
    var _retrieveCatalogObject = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee9(objectId, includeRelatedObjects, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                objectId: [objectId, schema.string()],
                includeRelatedObjects: [includeRelatedObjects, schema.optional(schema.boolean())]
              });
              req.query('include_related_objects', mapped.includeRelatedObjects);
              req.appendTemplatePath(_templateObject2$3(), mapped.objectId);
              return _context9.abrupt("return", req.callAsJson(retrieveCatalogObjectResponseSchema, requestOptions));

            case 5:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this);
    }));

    function retrieveCatalogObject(_x18, _x19, _x20) {
      return _retrieveCatalogObject.apply(this, arguments);
    }

    return retrieveCatalogObject;
  }()
  /**
   * Searches for [CatalogObject](#type-CatalogObject) of any types against supported search attribute
   * values,
   * excluding custom attribute values on items or item variations, against one or more of the specified
   * query expressions,
   *
   * This (`SearchCatalogObjects`) endpoint differs from the [SearchCatalogItems](#endpoint-Catalog-
   * SearchCatalogItems)
   * endpoint in the following aspects:
   *
   * - `SearchCatalogItems` can only search for items or item variations, whereas `SearchCatalogObjects`
   * can search for any type of catalog objects.
   * - `SearchCatalogItems` supports the custom attribute query filters to return items or item
   * variations that contain custom attribute values, where `SearchCatalogObjects` does not.
   * - `SearchCatalogItems` does not support the `include_deleted_objects` filter to search for deleted
   * items or item variations, whereas `SearchCatalogObjects` does.
   * - The both endpoints have different call conventions, including the query filter formats.
   *
   * @param body An object containing the fields to POST for the request.  See
   *                                                   the corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.searchCatalogObjects =
  /*#__PURE__*/
  function () {
    var _searchCatalogObjects = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee10(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              req = this.createRequest('POST', '/v2/catalog/search');
              mapped = req.prepareArgs({
                body: [body, searchCatalogObjectsRequestSchema]
              });
              req.json(mapped.body);
              return _context10.abrupt("return", req.callAsJson(searchCatalogObjectsResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, this);
    }));

    function searchCatalogObjects(_x21, _x22) {
      return _searchCatalogObjects.apply(this, arguments);
    }

    return searchCatalogObjects;
  }()
  /**
   * Searches for catalog items or item variations by matching supported search attribute values,
   * including
   * custom attribute values, against one or more of the specified query expressions,
   *
   * This (`SearchCatalogItems`) endpoint differs from the [SearchCatalogObjects](#endpoint-Catalog-
   * SearchCatalogObjects)
   * endpoint in the following aspects:
   *
   * - `SearchCatalogItems` can only search for items or item variations, whereas `SearchCatalogObjects`
   * can search for any type of catalog objects.
   * - `SearchCatalogItems` supports the custom attribute query filters to return items or item
   * variations that contain custom attribute values, where `SearchCatalogObjects` does not.
   * - `SearchCatalogItems` does not support the `include_deleted_objects` filter to search for deleted
   * items or item variations, whereas `SearchCatalogObjects` does.
   * - The both endpoints use different call conventions, including the query filter formats.
   *
   * @param body An object containing the fields to POST for the request.  See the
   *                                                 corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.searchCatalogItems =
  /*#__PURE__*/
  function () {
    var _searchCatalogItems = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee11(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              req = this.createRequest('POST', '/v2/catalog/search-catalog-items');
              mapped = req.prepareArgs({
                body: [body, searchCatalogItemsRequestSchema]
              });
              req.json(mapped.body);
              return _context11.abrupt("return", req.callAsJson(searchCatalogItemsResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, this);
    }));

    function searchCatalogItems(_x23, _x24) {
      return _searchCatalogItems.apply(this, arguments);
    }

    return searchCatalogItems;
  }()
  /**
   * Updates the [CatalogModifierList](#type-catalogmodifierlist) objects
   * that apply to the targeted [CatalogItem](#type-catalogitem) without having
   * to perform an upsert on the entire item.
   *
   * @param body An object containing the fields to POST for the request.
   *                                                      See the corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.updateItemModifierLists =
  /*#__PURE__*/
  function () {
    var _updateItemModifierLists = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee12(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              req = this.createRequest('POST', '/v2/catalog/update-item-modifier-lists');
              mapped = req.prepareArgs({
                body: [body, updateItemModifierListsRequestSchema]
              });
              req.json(mapped.body);
              return _context12.abrupt("return", req.callAsJson(updateItemModifierListsResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, this);
    }));

    function updateItemModifierLists(_x25, _x26) {
      return _updateItemModifierLists.apply(this, arguments);
    }

    return updateItemModifierLists;
  }()
  /**
   * Updates the [CatalogTax](#type-catalogtax) objects that apply to the
   * targeted [CatalogItem](#type-catalogitem) without having to perform an
   * upsert on the entire item.
   *
   * @param body An object containing the fields to POST for the request.  See the
   *                                              corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.updateItemTaxes =
  /*#__PURE__*/
  function () {
    var _updateItemTaxes = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee13(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              req = this.createRequest('POST', '/v2/catalog/update-item-taxes');
              mapped = req.prepareArgs({
                body: [body, updateItemTaxesRequestSchema]
              });
              req.json(mapped.body);
              return _context13.abrupt("return", req.callAsJson(updateItemTaxesResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13, this);
    }));

    function updateItemTaxes(_x27, _x28) {
      return _updateItemTaxes.apply(this, arguments);
    }

    return updateItemTaxes;
  }();

  return CatalogApi;
}(BaseApi);

var addressSchema = /*#__PURE__*/schema.object({
  addressLine1: ['address_line_1', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  addressLine2: ['address_line_2', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  addressLine3: ['address_line_3', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  locality: ['locality', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  sublocality: ['sublocality', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  sublocality2: ['sublocality_2', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  sublocality3: ['sublocality_3', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  administrativeDistrictLevel1: ['administrative_district_level_1', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  administrativeDistrictLevel2: ['administrative_district_level_2', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  administrativeDistrictLevel3: ['administrative_district_level_3', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  postalCode: ['postal_code', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  country: ['country', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  firstName: ['first_name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  lastName: ['last_name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  organization: ['organization', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var chargeRequestAdditionalRecipientSchema = /*#__PURE__*/schema.object({
  locationId: ['location_id', /*#__PURE__*/schema.string()],
  description: ['description', /*#__PURE__*/schema.string()],
  amountMoney: ['amount_money', /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  })]
});

var orderFulfillmentPickupDetailsCurbsidePickupDetailsSchema = /*#__PURE__*/schema.object({
  curbsideDetails: ['curbside_details', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  buyerArrivedAt: ['buyer_arrived_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var orderFulfillmentRecipientSchema = /*#__PURE__*/schema.object({
  customerId: ['customer_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  displayName: ['display_name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  emailAddress: ['email_address', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  phoneNumber: ['phone_number', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  address: ['address', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return addressSchema;
  }))]
});

var orderFulfillmentPickupDetailsSchema = /*#__PURE__*/schema.object({
  recipient: ['recipient', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return orderFulfillmentRecipientSchema;
  }))],
  expiresAt: ['expires_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  autoCompleteDuration: ['auto_complete_duration', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  scheduleType: ['schedule_type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  pickupAt: ['pickup_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  pickupWindowDuration: ['pickup_window_duration', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  prepTimeDuration: ['prep_time_duration', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  note: ['note', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  placedAt: ['placed_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  acceptedAt: ['accepted_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  rejectedAt: ['rejected_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  readyAt: ['ready_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  expiredAt: ['expired_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  pickedUpAt: ['picked_up_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  canceledAt: ['canceled_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  cancelReason: ['cancel_reason', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  isCurbsidePickup: ['is_curbside_pickup', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  curbsidePickupDetails: ['curbside_pickup_details', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return orderFulfillmentPickupDetailsCurbsidePickupDetailsSchema;
  }))]
});

var orderFulfillmentShipmentDetailsSchema = /*#__PURE__*/schema.object({
  recipient: ['recipient', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return orderFulfillmentRecipientSchema;
  }))],
  carrier: ['carrier', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  shippingNote: ['shipping_note', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  shippingType: ['shipping_type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  trackingNumber: ['tracking_number', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  trackingUrl: ['tracking_url', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  placedAt: ['placed_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  inProgressAt: ['in_progress_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  packagedAt: ['packaged_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  expectedShippedAt: ['expected_shipped_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  shippedAt: ['shipped_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  canceledAt: ['canceled_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  cancelReason: ['cancel_reason', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  failedAt: ['failed_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  failureReason: ['failure_reason', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var orderFulfillmentSchema = /*#__PURE__*/schema.object({
  uid: ['uid', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  type: ['type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  state: ['state', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  metadata: ['metadata', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.dict( /*#__PURE__*/schema.string()))],
  pickupDetails: ['pickup_details', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return orderFulfillmentPickupDetailsSchema;
  }))],
  shipmentDetails: ['shipment_details', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return orderFulfillmentShipmentDetailsSchema;
  }))]
});

var orderLineItemAppliedDiscountSchema = /*#__PURE__*/schema.object({
  uid: ['uid', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  discountUid: ['discount_uid', /*#__PURE__*/schema.string()],
  appliedMoney: ['applied_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))]
});

var orderLineItemAppliedTaxSchema = /*#__PURE__*/schema.object({
  uid: ['uid', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  taxUid: ['tax_uid', /*#__PURE__*/schema.string()],
  appliedMoney: ['applied_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))]
});

var orderLineItemModifierSchema = /*#__PURE__*/schema.object({
  uid: ['uid', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  catalogObjectId: ['catalog_object_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  basePriceMoney: ['base_price_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  totalPriceMoney: ['total_price_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))]
});

var orderQuantityUnitSchema = /*#__PURE__*/schema.object({
  measurementUnit: ['measurement_unit', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return measurementUnitSchema;
  }))],
  precision: ['precision', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())]
});

var orderLineItemSchema = /*#__PURE__*/schema.object({
  uid: ['uid', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  quantity: ['quantity', /*#__PURE__*/schema.string()],
  quantityUnit: ['quantity_unit', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return orderQuantityUnitSchema;
  }))],
  note: ['note', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  catalogObjectId: ['catalog_object_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  variationName: ['variation_name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  metadata: ['metadata', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.dict( /*#__PURE__*/schema.string()))],
  modifiers: ['modifiers', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return orderLineItemModifierSchema;
  })))],
  appliedTaxes: ['applied_taxes', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return orderLineItemAppliedTaxSchema;
  })))],
  appliedDiscounts: ['applied_discounts', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return orderLineItemAppliedDiscountSchema;
  })))],
  basePriceMoney: ['base_price_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  variationTotalPriceMoney: ['variation_total_price_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  grossSalesMoney: ['gross_sales_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  totalTaxMoney: ['total_tax_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  totalDiscountMoney: ['total_discount_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  totalMoney: ['total_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))]
});

var orderLineItemDiscountSchema = /*#__PURE__*/schema.object({
  uid: ['uid', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  catalogObjectId: ['catalog_object_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  type: ['type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  percentage: ['percentage', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  amountMoney: ['amount_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  appliedMoney: ['applied_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  metadata: ['metadata', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.dict( /*#__PURE__*/schema.string()))],
  scope: ['scope', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  rewardIds: ['reward_ids', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  pricingRuleId: ['pricing_rule_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var orderLineItemTaxSchema = /*#__PURE__*/schema.object({
  uid: ['uid', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  catalogObjectId: ['catalog_object_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  type: ['type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  percentage: ['percentage', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  metadata: ['metadata', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.dict( /*#__PURE__*/schema.string()))],
  appliedMoney: ['applied_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  scope: ['scope', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var orderMoneyAmountsSchema = /*#__PURE__*/schema.object({
  totalMoney: ['total_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  taxMoney: ['tax_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  discountMoney: ['discount_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  tipMoney: ['tip_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  serviceChargeMoney: ['service_charge_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))]
});

var orderPricingOptionsSchema = /*#__PURE__*/schema.object({
  autoApplyDiscounts: ['auto_apply_discounts', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())]
});

var orderReturnDiscountSchema = /*#__PURE__*/schema.object({
  uid: ['uid', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  sourceDiscountUid: ['source_discount_uid', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  catalogObjectId: ['catalog_object_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  type: ['type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  percentage: ['percentage', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  amountMoney: ['amount_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  appliedMoney: ['applied_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  scope: ['scope', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var orderReturnLineItemModifierSchema = /*#__PURE__*/schema.object({
  uid: ['uid', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  sourceModifierUid: ['source_modifier_uid', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  catalogObjectId: ['catalog_object_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  basePriceMoney: ['base_price_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  totalPriceMoney: ['total_price_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))]
});

var orderReturnLineItemSchema = /*#__PURE__*/schema.object({
  uid: ['uid', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  sourceLineItemUid: ['source_line_item_uid', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  quantity: ['quantity', /*#__PURE__*/schema.string()],
  quantityUnit: ['quantity_unit', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return orderQuantityUnitSchema;
  }))],
  note: ['note', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  catalogObjectId: ['catalog_object_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  variationName: ['variation_name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  returnModifiers: ['return_modifiers', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return orderReturnLineItemModifierSchema;
  })))],
  appliedTaxes: ['applied_taxes', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return orderLineItemAppliedTaxSchema;
  })))],
  appliedDiscounts: ['applied_discounts', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return orderLineItemAppliedDiscountSchema;
  })))],
  basePriceMoney: ['base_price_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  variationTotalPriceMoney: ['variation_total_price_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  grossReturnMoney: ['gross_return_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  totalTaxMoney: ['total_tax_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  totalDiscountMoney: ['total_discount_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  totalMoney: ['total_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))]
});

var orderReturnServiceChargeSchema = /*#__PURE__*/schema.object({
  uid: ['uid', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  sourceServiceChargeUid: ['source_service_charge_uid', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  catalogObjectId: ['catalog_object_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  percentage: ['percentage', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  amountMoney: ['amount_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  appliedMoney: ['applied_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  totalMoney: ['total_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  totalTaxMoney: ['total_tax_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  calculationPhase: ['calculation_phase', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  taxable: ['taxable', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  appliedTaxes: ['applied_taxes', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return orderLineItemAppliedTaxSchema;
  })))]
});

var orderReturnTaxSchema = /*#__PURE__*/schema.object({
  uid: ['uid', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  sourceTaxUid: ['source_tax_uid', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  catalogObjectId: ['catalog_object_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  type: ['type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  percentage: ['percentage', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  appliedMoney: ['applied_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  scope: ['scope', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var orderRoundingAdjustmentSchema = /*#__PURE__*/schema.object({
  uid: ['uid', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  amountMoney: ['amount_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))]
});

var orderReturnSchema = /*#__PURE__*/schema.object({
  uid: ['uid', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  sourceOrderId: ['source_order_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  returnLineItems: ['return_line_items', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return orderReturnLineItemSchema;
  })))],
  returnServiceCharges: ['return_service_charges', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return orderReturnServiceChargeSchema;
  })))],
  returnTaxes: ['return_taxes', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return orderReturnTaxSchema;
  })))],
  returnDiscounts: ['return_discounts', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return orderReturnDiscountSchema;
  })))],
  roundingAdjustment: ['rounding_adjustment', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return orderRoundingAdjustmentSchema;
  }))],
  returnAmounts: ['return_amounts', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return orderMoneyAmountsSchema;
  }))]
});

var orderRewardSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.string()],
  rewardTierId: ['reward_tier_id', /*#__PURE__*/schema.string()]
});

var orderServiceChargeSchema = /*#__PURE__*/schema.object({
  uid: ['uid', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  catalogObjectId: ['catalog_object_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  percentage: ['percentage', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  amountMoney: ['amount_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  appliedMoney: ['applied_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  totalMoney: ['total_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  totalTaxMoney: ['total_tax_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  calculationPhase: ['calculation_phase', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  taxable: ['taxable', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  appliedTaxes: ['applied_taxes', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return orderLineItemAppliedTaxSchema;
  })))],
  metadata: ['metadata', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.dict( /*#__PURE__*/schema.string()))]
});

var orderSourceSchema = /*#__PURE__*/schema.object({
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var additionalRecipientSchema = /*#__PURE__*/schema.object({
  locationId: ['location_id', /*#__PURE__*/schema.string()],
  description: ['description', /*#__PURE__*/schema.string()],
  amountMoney: ['amount_money', /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  })],
  receivableId: ['receivable_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var refundSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.string()],
  locationId: ['location_id', /*#__PURE__*/schema.string()],
  transactionId: ['transaction_id', /*#__PURE__*/schema.string()],
  tenderId: ['tender_id', /*#__PURE__*/schema.string()],
  createdAt: ['created_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  reason: ['reason', /*#__PURE__*/schema.string()],
  amountMoney: ['amount_money', /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  })],
  status: ['status', /*#__PURE__*/schema.string()],
  processingFeeMoney: ['processing_fee_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  additionalRecipients: ['additional_recipients', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return additionalRecipientSchema;
  })))]
});

var cardSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  cardBrand: ['card_brand', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  last4: ['last_4', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  expMonth: ['exp_month', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  expYear: ['exp_year', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  cardholderName: ['cardholder_name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  billingAddress: ['billing_address', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return addressSchema;
  }))],
  fingerprint: ['fingerprint', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  cardType: ['card_type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  prepaidType: ['prepaid_type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  bin: ['bin', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var tenderCardDetailsSchema = /*#__PURE__*/schema.object({
  status: ['status', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  card: ['card', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return cardSchema;
  }))],
  entryMethod: ['entry_method', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var tenderCashDetailsSchema = /*#__PURE__*/schema.object({
  buyerTenderedMoney: ['buyer_tendered_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  changeBackMoney: ['change_back_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))]
});

var tenderSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  locationId: ['location_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  transactionId: ['transaction_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  createdAt: ['created_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  note: ['note', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  amountMoney: ['amount_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  tipMoney: ['tip_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  processingFeeMoney: ['processing_fee_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  customerId: ['customer_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  type: ['type', /*#__PURE__*/schema.string()],
  cardDetails: ['card_details', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return tenderCardDetailsSchema;
  }))],
  cashDetails: ['cash_details', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return tenderCashDetailsSchema;
  }))],
  additionalRecipients: ['additional_recipients', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return additionalRecipientSchema;
  })))],
  paymentId: ['payment_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var orderSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  locationId: ['location_id', /*#__PURE__*/schema.string()],
  referenceId: ['reference_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  source: ['source', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return orderSourceSchema;
  }))],
  customerId: ['customer_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  lineItems: ['line_items', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return orderLineItemSchema;
  })))],
  taxes: ['taxes', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return orderLineItemTaxSchema;
  })))],
  discounts: ['discounts', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return orderLineItemDiscountSchema;
  })))],
  serviceCharges: ['service_charges', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return orderServiceChargeSchema;
  })))],
  fulfillments: ['fulfillments', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return orderFulfillmentSchema;
  })))],
  returns: ['returns', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return orderReturnSchema;
  })))],
  returnAmounts: ['return_amounts', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return orderMoneyAmountsSchema;
  }))],
  netAmounts: ['net_amounts', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return orderMoneyAmountsSchema;
  }))],
  roundingAdjustment: ['rounding_adjustment', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return orderRoundingAdjustmentSchema;
  }))],
  tenders: ['tenders', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return tenderSchema;
  })))],
  refunds: ['refunds', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return refundSchema;
  })))],
  metadata: ['metadata', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.dict( /*#__PURE__*/schema.string()))],
  createdAt: ['created_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  updatedAt: ['updated_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  closedAt: ['closed_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  state: ['state', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  version: ['version', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  totalMoney: ['total_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  totalTaxMoney: ['total_tax_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  totalDiscountMoney: ['total_discount_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  totalTipMoney: ['total_tip_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  totalServiceChargeMoney: ['total_service_charge_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  pricingOptions: ['pricing_options', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return orderPricingOptionsSchema;
  }))],
  rewards: ['rewards', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return orderRewardSchema;
  })))]
});

var createOrderRequestSchema = /*#__PURE__*/schema.object({
  order: ['order', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return orderSchema;
  }))],
  locationId: ['location_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  idempotencyKey: ['idempotency_key', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var createCheckoutRequestSchema = /*#__PURE__*/schema.object({
  idempotencyKey: ['idempotency_key', /*#__PURE__*/schema.string()],
  order: ['order', /*#__PURE__*/schema.lazy(function () {
    return createOrderRequestSchema;
  })],
  askForShippingAddress: ['ask_for_shipping_address', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  merchantSupportEmail: ['merchant_support_email', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  prePopulateBuyerEmail: ['pre_populate_buyer_email', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  prePopulateShippingAddress: ['pre_populate_shipping_address', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return addressSchema;
  }))],
  redirectUrl: ['redirect_url', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  additionalRecipients: ['additional_recipients', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return chargeRequestAdditionalRecipientSchema;
  })))],
  note: ['note', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var checkoutSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  checkoutPageUrl: ['checkout_page_url', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  askForShippingAddress: ['ask_for_shipping_address', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  merchantSupportEmail: ['merchant_support_email', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  prePopulateBuyerEmail: ['pre_populate_buyer_email', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  prePopulateShippingAddress: ['pre_populate_shipping_address', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return addressSchema;
  }))],
  redirectUrl: ['redirect_url', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  order: ['order', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return orderSchema;
  }))],
  createdAt: ['created_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  additionalRecipients: ['additional_recipients', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return additionalRecipientSchema;
  })))]
});

var createCheckoutResponseSchema = /*#__PURE__*/schema.object({
  checkout: ['checkout', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return checkoutSchema;
  }))],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

function _templateObject$4() {
  var data = _taggedTemplateLiteralLoose(["/v2/locations/", "/checkouts"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var CheckoutApi = /*#__PURE__*/function (_BaseApi) {
  _inheritsLoose(CheckoutApi, _BaseApi);

  function CheckoutApi() {
    return _BaseApi.apply(this, arguments) || this;
  }

  var _proto = CheckoutApi.prototype;

  /**
   * Links a `checkoutId` to a `checkout_page_url` that customers will
   * be directed to in order to provide their payment information using a
   * payment processing workflow hosted on connect.squareup.com.
   *
   * @param locationId  The ID of the business location to associate the checkout with.
   * @param body        An object containing the fields to POST for the request.  See
   *                                                    the corresponding object definition for field details.
   * @return Response from the API call
   */
  _proto.createCheckout =
  /*#__PURE__*/
  function () {
    var _createCheckout = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(locationId, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = this.createRequest('POST');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                body: [body, createCheckoutRequestSchema]
              });
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject$4(), mapped.locationId);
              return _context.abrupt("return", req.callAsJson(createCheckoutResponseSchema, requestOptions));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function createCheckout(_x, _x2, _x3) {
      return _createCheckout.apply(this, arguments);
    }

    return createCheckout;
  }();

  return CheckoutApi;
}(BaseApi);

var customerGroupSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  name: ['name', /*#__PURE__*/schema.string()],
  createdAt: ['created_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  updatedAt: ['updated_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var createCustomerGroupRequestSchema = /*#__PURE__*/schema.object({
  idempotencyKey: ['idempotency_key', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  group: ['group', /*#__PURE__*/schema.lazy(function () {
    return customerGroupSchema;
  })]
});

var createCustomerGroupResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  group: ['group', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return customerGroupSchema;
  }))]
});

var deleteCustomerGroupResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var listCustomerGroupsResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  groups: ['groups', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return customerGroupSchema;
  })))],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var retrieveCustomerGroupResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  group: ['group', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return customerGroupSchema;
  }))]
});

var updateCustomerGroupRequestSchema = /*#__PURE__*/schema.object({
  group: ['group', /*#__PURE__*/schema.lazy(function () {
    return customerGroupSchema;
  })]
});

var updateCustomerGroupResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  group: ['group', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return customerGroupSchema;
  }))]
});

function _templateObject3$1() {
  var data = _taggedTemplateLiteralLoose(["/v2/customers/groups/", ""]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$4() {
  var data = _taggedTemplateLiteralLoose(["/v2/customers/groups/", ""]);

  _templateObject2$4 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$5() {
  var data = _taggedTemplateLiteralLoose(["/v2/customers/groups/", ""]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var CustomerGroupsApi = /*#__PURE__*/function (_BaseApi) {
  _inheritsLoose(CustomerGroupsApi, _BaseApi);

  function CustomerGroupsApi() {
    return _BaseApi.apply(this, arguments) || this;
  }

  var _proto = CustomerGroupsApi.prototype;

  /**
   * Retrieves the list of customer groups of a business.
   *
   * @param cursor A pagination cursor returned by a previous call to this endpoint. Provide this to
   *                         retrieve the next set of results for your original query.  See the [Pagination
   *                         guide](https://developer.squareup.com/docs/working-with-apis/pagination) for more
   *                         information.
   * @return Response from the API call
   */
  _proto.listCustomerGroups =
  /*#__PURE__*/
  function () {
    var _listCustomerGroups = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(cursor, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = this.createRequest('GET', '/v2/customers/groups');
              mapped = req.prepareArgs({
                cursor: [cursor, schema.optional(schema.string())]
              });
              req.query('cursor', mapped.cursor);
              return _context.abrupt("return", req.callAsJson(listCustomerGroupsResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function listCustomerGroups(_x, _x2) {
      return _listCustomerGroups.apply(this, arguments);
    }

    return listCustomerGroups;
  }()
  /**
   * Creates a new customer group for a business.
   *
   * The request must include the `name` value of the group.
   *
   * @param body An object containing the fields to POST for the request.  See
   *                                                  the corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.createCustomerGroup =
  /*#__PURE__*/
  function () {
    var _createCustomerGroup = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req = this.createRequest('POST', '/v2/customers/groups');
              mapped = req.prepareArgs({
                body: [body, createCustomerGroupRequestSchema]
              });
              req.json(mapped.body);
              return _context2.abrupt("return", req.callAsJson(createCustomerGroupResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function createCustomerGroup(_x3, _x4) {
      return _createCustomerGroup.apply(this, arguments);
    }

    return createCustomerGroup;
  }()
  /**
   * Deletes a customer group as identified by the `group_id` value.
   *
   * @param groupId  The ID of the customer group to delete.
   * @return Response from the API call
   */
  ;

  _proto.deleteCustomerGroup =
  /*#__PURE__*/
  function () {
    var _deleteCustomerGroup = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(groupId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              req = this.createRequest('DELETE');
              mapped = req.prepareArgs({
                groupId: [groupId, schema.string()]
              });
              req.appendTemplatePath(_templateObject$5(), mapped.groupId);
              return _context3.abrupt("return", req.callAsJson(deleteCustomerGroupResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function deleteCustomerGroup(_x5, _x6) {
      return _deleteCustomerGroup.apply(this, arguments);
    }

    return deleteCustomerGroup;
  }()
  /**
   * Retrieves a specific customer group as identified by the `group_id` value.
   *
   * @param groupId  The ID of the customer group to retrieve.
   * @return Response from the API call
   */
  ;

  _proto.retrieveCustomerGroup =
  /*#__PURE__*/
  function () {
    var _retrieveCustomerGroup = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(groupId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                groupId: [groupId, schema.string()]
              });
              req.appendTemplatePath(_templateObject2$4(), mapped.groupId);
              return _context4.abrupt("return", req.callAsJson(retrieveCustomerGroupResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function retrieveCustomerGroup(_x7, _x8) {
      return _retrieveCustomerGroup.apply(this, arguments);
    }

    return retrieveCustomerGroup;
  }()
  /**
   * Updates a customer group as identified by the `group_id` value.
   *
   * @param groupId  The ID of the customer group to update.
   * @param body     An object containing the fields to POST for the request.
   *                                                      See the corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.updateCustomerGroup =
  /*#__PURE__*/
  function () {
    var _updateCustomerGroup = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5(groupId, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              req = this.createRequest('PUT');
              mapped = req.prepareArgs({
                groupId: [groupId, schema.string()],
                body: [body, updateCustomerGroupRequestSchema]
              });
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject3$1(), mapped.groupId);
              return _context5.abrupt("return", req.callAsJson(updateCustomerGroupResponseSchema, requestOptions));

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function updateCustomerGroup(_x9, _x10, _x11) {
      return _updateCustomerGroup.apply(this, arguments);
    }

    return updateCustomerGroup;
  }();

  return CustomerGroupsApi;
}(BaseApi);

var addGroupToCustomerResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var createCustomerCardRequestSchema = /*#__PURE__*/schema.object({
  cardNonce: ['card_nonce', /*#__PURE__*/schema.string()],
  billingAddress: ['billing_address', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return addressSchema;
  }))],
  cardholderName: ['cardholder_name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  verificationToken: ['verification_token', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var createCustomerCardResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  card: ['card', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return cardSchema;
  }))]
});

var createCustomerRequestSchema = /*#__PURE__*/schema.object({
  idempotencyKey: ['idempotency_key', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  givenName: ['given_name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  familyName: ['family_name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  companyName: ['company_name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  nickname: ['nickname', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  emailAddress: ['email_address', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  address: ['address', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return addressSchema;
  }))],
  phoneNumber: ['phone_number', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  referenceId: ['reference_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  note: ['note', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  birthday: ['birthday', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var customerGroupInfoSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.string()],
  name: ['name', /*#__PURE__*/schema.string()]
});

var customerPreferencesSchema = /*#__PURE__*/schema.object({
  emailUnsubscribed: ['email_unsubscribed', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())]
});

var customerSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  createdAt: ['created_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  updatedAt: ['updated_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  cards: ['cards', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return cardSchema;
  })))],
  givenName: ['given_name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  familyName: ['family_name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  nickname: ['nickname', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  companyName: ['company_name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  emailAddress: ['email_address', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  address: ['address', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return addressSchema;
  }))],
  phoneNumber: ['phone_number', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  birthday: ['birthday', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  referenceId: ['reference_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  note: ['note', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  preferences: ['preferences', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return customerPreferencesSchema;
  }))],
  groups: ['groups', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return customerGroupInfoSchema;
  })))],
  creationSource: ['creation_source', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  groupIds: ['group_ids', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  segmentIds: ['segment_ids', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))]
});

var createCustomerResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  customer: ['customer', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return customerSchema;
  }))]
});

var deleteCustomerCardResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var deleteCustomerResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var listCustomersResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  customers: ['customers', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return customerSchema;
  })))],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var removeGroupFromCustomerResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var retrieveCustomerResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  customer: ['customer', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return customerSchema;
  }))]
});

var customerCreationSourceFilterSchema = /*#__PURE__*/schema.object({
  values: ['values', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  rule: ['rule', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var customerTextFilterSchema = /*#__PURE__*/schema.object({
  exact: ['exact', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  fuzzy: ['fuzzy', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var customerFilterSchema = /*#__PURE__*/schema.object({
  creationSource: ['creation_source', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return customerCreationSourceFilterSchema;
  }))],
  createdAt: ['created_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return timeRangeSchema;
  }))],
  updatedAt: ['updated_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return timeRangeSchema;
  }))],
  emailAddress: ['email_address', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return customerTextFilterSchema;
  }))],
  phoneNumber: ['phone_number', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return customerTextFilterSchema;
  }))],
  referenceId: ['reference_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return customerTextFilterSchema;
  }))],
  groupIds: ['group_ids', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return filterValueSchema;
  }))]
});

var customerSortSchema = /*#__PURE__*/schema.object({
  field: ['field', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  order: ['order', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var customerQuerySchema = /*#__PURE__*/schema.object({
  filter: ['filter', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return customerFilterSchema;
  }))],
  sort: ['sort', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return customerSortSchema;
  }))]
});

var searchCustomersRequestSchema = /*#__PURE__*/schema.object({
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  limit: ['limit', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  query: ['query', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return customerQuerySchema;
  }))]
});

var searchCustomersResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  customers: ['customers', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return customerSchema;
  })))],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var updateCustomerRequestSchema = /*#__PURE__*/schema.object({
  givenName: ['given_name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  familyName: ['family_name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  companyName: ['company_name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  nickname: ['nickname', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  emailAddress: ['email_address', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  address: ['address', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return addressSchema;
  }))],
  phoneNumber: ['phone_number', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  referenceId: ['reference_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  note: ['note', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  birthday: ['birthday', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var updateCustomerResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  customer: ['customer', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return customerSchema;
  }))]
});

function _templateObject7() {
  var data = _taggedTemplateLiteralLoose(["/v2/customers/", "/groups/", ""]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteralLoose(["/v2/customers/", "/groups/", ""]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["/v2/customers/", "/cards/", ""]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["/v2/customers/", "/cards"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$2() {
  var data = _taggedTemplateLiteralLoose(["/v2/customers/", ""]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$5() {
  var data = _taggedTemplateLiteralLoose(["/v2/customers/", ""]);

  _templateObject2$5 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$6() {
  var data = _taggedTemplateLiteralLoose(["/v2/customers/", ""]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var CustomersApi = /*#__PURE__*/function (_BaseApi) {
  _inheritsLoose(CustomersApi, _BaseApi);

  function CustomersApi() {
    return _BaseApi.apply(this, arguments) || this;
  }

  var _proto = CustomersApi.prototype;

  /**
   * Lists customer profiles associated with a Square account.
   *
   * Under normal operating conditions, newly created or updated customer profiles become available
   * for the listing operation in well under 30 seconds. Occasionally, propagation of the new or updated
   * profiles can take closer to one minute or longer, especially during network incidents and outages.
   *
   * @param cursor     A pagination cursor returned by a previous call to this endpoint. Provide this to
   *                             retrieve the next set of results for your original query.  See the [Pagination
   *                             guide](https://developer.squareup.com/docs/working-with-apis/pagination) for more
   *                             information.
   * @param sortField  Indicates how Customers should be sorted.  Default: `DEFAULT`.
   * @param sortOrder  Indicates whether Customers should be sorted in ascending (`ASC`) or descending
   *                             (`DESC`) order.  Default: `ASC`.
   * @return Response from the API call
   */
  _proto.listCustomers =
  /*#__PURE__*/
  function () {
    var _listCustomers = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(cursor, sortField, sortOrder, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = this.createRequest('GET', '/v2/customers');
              mapped = req.prepareArgs({
                cursor: [cursor, schema.optional(schema.string())],
                sortField: [sortField, schema.optional(schema.string())],
                sortOrder: [sortOrder, schema.optional(schema.string())]
              });
              req.query('cursor', mapped.cursor);
              req.query('sort_field', mapped.sortField);
              req.query('sort_order', mapped.sortOrder);
              return _context.abrupt("return", req.callAsJson(listCustomersResponseSchema, requestOptions));

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function listCustomers(_x, _x2, _x3, _x4) {
      return _listCustomers.apply(this, arguments);
    }

    return listCustomers;
  }()
  /**
   * Creates a new customer for a business, which can have associated cards on file.
   *
   * You must provide __at least one__ of the following values in your request to this
   * endpoint:
   *
   * - `given_name`
   * - `family_name`
   * - `company_name`
   * - `email_address`
   * - `phone_number`
   *
   * @param body An object containing the fields to POST for the request.  See the
   *                                             corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.createCustomer =
  /*#__PURE__*/
  function () {
    var _createCustomer = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req = this.createRequest('POST', '/v2/customers');
              mapped = req.prepareArgs({
                body: [body, createCustomerRequestSchema]
              });
              req.json(mapped.body);
              return _context2.abrupt("return", req.callAsJson(createCustomerResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function createCustomer(_x5, _x6) {
      return _createCustomer.apply(this, arguments);
    }

    return createCustomer;
  }()
  /**
   * Searches the customer profiles associated with a Square account using a supported query filter.
   *
   * Calling `SearchCustomers` without any explicit query filter returns all
   * customer profiles ordered alphabetically based on `given_name` and
   * `family_name`.
   *
   * Under normal operating conditions, newly created or updated customer profiles become available
   * for the search operation in well under 30 seconds. Occasionally, propagation of the new or updated
   * profiles can take closer to one minute or longer, especially during network incidents and outages.
   *
   * @param body An object containing the fields to POST for the request.  See the
   *                                              corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.searchCustomers =
  /*#__PURE__*/
  function () {
    var _searchCustomers = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              req = this.createRequest('POST', '/v2/customers/search');
              mapped = req.prepareArgs({
                body: [body, searchCustomersRequestSchema]
              });
              req.json(mapped.body);
              return _context3.abrupt("return", req.callAsJson(searchCustomersResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function searchCustomers(_x7, _x8) {
      return _searchCustomers.apply(this, arguments);
    }

    return searchCustomers;
  }()
  /**
   * Deletes a customer from a business, along with any linked cards on file. When two profiles
   * are merged into a single profile, that profile is assigned a new `customer_id`. You must use the
   * new `customer_id` to delete merged profiles.
   *
   * @param customerId  The ID of the customer to delete.
   * @return Response from the API call
   */
  ;

  _proto.deleteCustomer =
  /*#__PURE__*/
  function () {
    var _deleteCustomer = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(customerId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              req = this.createRequest('DELETE');
              mapped = req.prepareArgs({
                customerId: [customerId, schema.string()]
              });
              req.appendTemplatePath(_templateObject$6(), mapped.customerId);
              return _context4.abrupt("return", req.callAsJson(deleteCustomerResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function deleteCustomer(_x9, _x10) {
      return _deleteCustomer.apply(this, arguments);
    }

    return deleteCustomer;
  }()
  /**
   * Returns details for a single customer.
   *
   * @param customerId  The ID of the customer to retrieve.
   * @return Response from the API call
   */
  ;

  _proto.retrieveCustomer =
  /*#__PURE__*/
  function () {
    var _retrieveCustomer = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5(customerId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                customerId: [customerId, schema.string()]
              });
              req.appendTemplatePath(_templateObject2$5(), mapped.customerId);
              return _context5.abrupt("return", req.callAsJson(retrieveCustomerResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function retrieveCustomer(_x11, _x12) {
      return _retrieveCustomer.apply(this, arguments);
    }

    return retrieveCustomer;
  }()
  /**
   * Updates the details of an existing customer. When two profiles are merged
   * into a single profile, that profile is assigned a new `customer_id`. You must use
   * the new `customer_id` to update merged profiles.
   *
   * You cannot edit a customer's cards on file with this endpoint. To make changes
   * to a card on file, you must delete the existing card on file with the
   * [DeleteCustomerCard](#endpoint-Customers-deletecustomercard) endpoint, then create a new one with
   * the
   * [CreateCustomerCard](#endpoint-Customers-createcustomercard) endpoint.
   *
   * @param customerId  The ID of the customer to update.
   * @param body        An object containing the fields to POST for the request.  See
   *                                                    the corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.updateCustomer =
  /*#__PURE__*/
  function () {
    var _updateCustomer = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee6(customerId, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              req = this.createRequest('PUT');
              mapped = req.prepareArgs({
                customerId: [customerId, schema.string()],
                body: [body, updateCustomerRequestSchema]
              });
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject3$2(), mapped.customerId);
              return _context6.abrupt("return", req.callAsJson(updateCustomerResponseSchema, requestOptions));

            case 5:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function updateCustomer(_x13, _x14, _x15) {
      return _updateCustomer.apply(this, arguments);
    }

    return updateCustomer;
  }()
  /**
   * Adds a card on file to an existing customer.
   *
   * As with charges, calls to `CreateCustomerCard` are idempotent. Multiple
   * calls with the same card nonce return the same card record that was created
   * with the provided nonce during the _first_ call.
   *
   * @param customerId  The Square ID of the customer profile the card is linked
   *                                                        to.
   * @param body        An object containing the fields to POST for the request.
   *                                                        See the corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.createCustomerCard =
  /*#__PURE__*/
  function () {
    var _createCustomerCard = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee7(customerId, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              req = this.createRequest('POST');
              mapped = req.prepareArgs({
                customerId: [customerId, schema.string()],
                body: [body, createCustomerCardRequestSchema]
              });
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject4(), mapped.customerId);
              return _context7.abrupt("return", req.callAsJson(createCustomerCardResponseSchema, requestOptions));

            case 5:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function createCustomerCard(_x16, _x17, _x18) {
      return _createCustomerCard.apply(this, arguments);
    }

    return createCustomerCard;
  }()
  /**
   * Removes a card on file from a customer.
   *
   * @param customerId  The ID of the customer that the card on file belongs to.
   * @param cardId      The ID of the card on file to delete.
   * @return Response from the API call
   */
  ;

  _proto.deleteCustomerCard =
  /*#__PURE__*/
  function () {
    var _deleteCustomerCard = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee8(customerId, cardId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              req = this.createRequest('DELETE');
              mapped = req.prepareArgs({
                customerId: [customerId, schema.string()],
                cardId: [cardId, schema.string()]
              });
              req.appendTemplatePath(_templateObject5(), mapped.customerId, mapped.cardId);
              return _context8.abrupt("return", req.callAsJson(deleteCustomerCardResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function deleteCustomerCard(_x19, _x20, _x21) {
      return _deleteCustomerCard.apply(this, arguments);
    }

    return deleteCustomerCard;
  }()
  /**
   * Removes a group membership from a customer.
   *
   * The customer is identified by the `customer_id` value
   * and the customer group is identified by the `group_id` value.
   *
   * @param customerId  The ID of the customer to remove from the group.
   * @param groupId     The ID of the customer group to remove the customer from.
   * @return Response from the API call
   */
  ;

  _proto.removeGroupFromCustomer =
  /*#__PURE__*/
  function () {
    var _removeGroupFromCustomer = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee9(customerId, groupId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              req = this.createRequest('DELETE');
              mapped = req.prepareArgs({
                customerId: [customerId, schema.string()],
                groupId: [groupId, schema.string()]
              });
              req.appendTemplatePath(_templateObject6(), mapped.customerId, mapped.groupId);
              return _context9.abrupt("return", req.callAsJson(removeGroupFromCustomerResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this);
    }));

    function removeGroupFromCustomer(_x22, _x23, _x24) {
      return _removeGroupFromCustomer.apply(this, arguments);
    }

    return removeGroupFromCustomer;
  }()
  /**
   * Adds a group membership to a customer.
   *
   * The customer is identified by the `customer_id` value
   * and the customer group is identified by the `group_id` value.
   *
   * @param customerId  The ID of the customer to add to a group.
   * @param groupId     The ID of the customer group to add the customer to.
   * @return Response from the API call
   */
  ;

  _proto.addGroupToCustomer =
  /*#__PURE__*/
  function () {
    var _addGroupToCustomer = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee10(customerId, groupId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              req = this.createRequest('PUT');
              mapped = req.prepareArgs({
                customerId: [customerId, schema.string()],
                groupId: [groupId, schema.string()]
              });
              req.appendTemplatePath(_templateObject7(), mapped.customerId, mapped.groupId);
              return _context10.abrupt("return", req.callAsJson(addGroupToCustomerResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, this);
    }));

    function addGroupToCustomer(_x25, _x26, _x27) {
      return _addGroupToCustomer.apply(this, arguments);
    }

    return addGroupToCustomer;
  }();

  return CustomersApi;
}(BaseApi);

var customerSegmentSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  name: ['name', /*#__PURE__*/schema.string()],
  createdAt: ['created_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  updatedAt: ['updated_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var listCustomerSegmentsResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  segments: ['segments', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return customerSegmentSchema;
  })))],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var retrieveCustomerSegmentResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  segment: ['segment', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return customerSegmentSchema;
  }))]
});

function _templateObject$7() {
  var data = _taggedTemplateLiteralLoose(["/v2/customers/segments/", ""]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var CustomerSegmentsApi = /*#__PURE__*/function (_BaseApi) {
  _inheritsLoose(CustomerSegmentsApi, _BaseApi);

  function CustomerSegmentsApi() {
    return _BaseApi.apply(this, arguments) || this;
  }

  var _proto = CustomerSegmentsApi.prototype;

  /**
   * Retrieves the list of customer segments of a business.
   *
   * @param cursor A pagination cursor returned by previous calls to __ListCustomerSegments__. Used to
   *                         retrieve the next set of query results.  See the [Pagination guide](https://developer.
   *                         squareup.com/docs/working-with-apis/pagination) for more information.
   * @return Response from the API call
   */
  _proto.listCustomerSegments =
  /*#__PURE__*/
  function () {
    var _listCustomerSegments = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(cursor, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = this.createRequest('GET', '/v2/customers/segments');
              mapped = req.prepareArgs({
                cursor: [cursor, schema.optional(schema.string())]
              });
              req.query('cursor', mapped.cursor);
              return _context.abrupt("return", req.callAsJson(listCustomerSegmentsResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function listCustomerSegments(_x, _x2) {
      return _listCustomerSegments.apply(this, arguments);
    }

    return listCustomerSegments;
  }()
  /**
   * Retrieves a specific customer segment as identified by the `segment_id` value.
   *
   * @param segmentId  The Square-issued ID of the customer segment.
   * @return Response from the API call
   */
  ;

  _proto.retrieveCustomerSegment =
  /*#__PURE__*/
  function () {
    var _retrieveCustomerSegment = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(segmentId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                segmentId: [segmentId, schema.string()]
              });
              req.appendTemplatePath(_templateObject$7(), mapped.segmentId);
              return _context2.abrupt("return", req.callAsJson(retrieveCustomerSegmentResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function retrieveCustomerSegment(_x3, _x4) {
      return _retrieveCustomerSegment.apply(this, arguments);
    }

    return retrieveCustomerSegment;
  }();

  return CustomerSegmentsApi;
}(BaseApi);

var deviceCodeSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  code: ['code', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  deviceId: ['device_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  productType: ['product_type', /*#__PURE__*/schema.string()],
  locationId: ['location_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  status: ['status', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  pairBy: ['pair_by', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  createdAt: ['created_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  statusChangedAt: ['status_changed_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  pairedAt: ['paired_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var createDeviceCodeRequestSchema = /*#__PURE__*/schema.object({
  idempotencyKey: ['idempotency_key', /*#__PURE__*/schema.string()],
  deviceCode: ['device_code', /*#__PURE__*/schema.lazy(function () {
    return deviceCodeSchema;
  })]
});

var createDeviceCodeResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  deviceCode: ['device_code', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return deviceCodeSchema;
  }))]
});

var getDeviceCodeResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  deviceCode: ['device_code', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return deviceCodeSchema;
  }))]
});

var listDeviceCodesResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  deviceCodes: ['device_codes', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return deviceCodeSchema;
  })))],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

function _templateObject$8() {
  var data = _taggedTemplateLiteralLoose(["/v2/devices/codes/", ""]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
var DevicesApi = /*#__PURE__*/function (_BaseApi) {
  _inheritsLoose(DevicesApi, _BaseApi);

  function DevicesApi() {
    return _BaseApi.apply(this, arguments) || this;
  }

  var _proto = DevicesApi.prototype;

  /**
   * Lists all DeviceCodes associated with the merchant.
   *
   * @param cursor       A pagination cursor returned by a previous call to this endpoint. Provide this to
   *                               retrieve the next set of results for your original query.  See [Paginating
   *                               results](#paginatingresults) for more information.
   * @param locationId   If specified, only returns DeviceCodes of the specified location. Returns
   *                               DeviceCodes of all locations if empty.
   * @param productType  If specified, only returns DeviceCodes targeting the specified product type.
   *                               Returns DeviceCodes of all product types if empty.
   * @param status       If specified, returns DeviceCodes with the specified statuses. Returns DeviceCodes
   *                               of status `PAIRED` and `UNPAIRED` if empty.
   * @return Response from the API call
   */
  _proto.listDeviceCodes =
  /*#__PURE__*/
  function () {
    var _listDeviceCodes = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(cursor, locationId, productType, status, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = this.createRequest('GET', '/v2/devices/codes');
              mapped = req.prepareArgs({
                cursor: [cursor, schema.optional(schema.string())],
                locationId: [locationId, schema.optional(schema.string())],
                productType: [productType, schema.optional(schema.string())],
                status: [status, schema.optional(schema.string())]
              });
              req.query('cursor', mapped.cursor);
              req.query('location_id', mapped.locationId);
              req.query('product_type', mapped.productType);
              req.query('status', mapped.status);
              return _context.abrupt("return", req.callAsJson(listDeviceCodesResponseSchema, requestOptions));

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function listDeviceCodes(_x, _x2, _x3, _x4, _x5) {
      return _listDeviceCodes.apply(this, arguments);
    }

    return listDeviceCodes;
  }()
  /**
   * Creates a DeviceCode that can be used to login to a Square Terminal device to enter the connected
   * terminal mode.
   *
   * @param body An object containing the fields to POST for the request.  See the
   *                                               corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.createDeviceCode =
  /*#__PURE__*/
  function () {
    var _createDeviceCode = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req = this.createRequest('POST', '/v2/devices/codes');
              mapped = req.prepareArgs({
                body: [body, createDeviceCodeRequestSchema]
              });
              req.json(mapped.body);
              return _context2.abrupt("return", req.callAsJson(createDeviceCodeResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function createDeviceCode(_x6, _x7) {
      return _createDeviceCode.apply(this, arguments);
    }

    return createDeviceCode;
  }()
  /**
   * Retrieves DeviceCode with the associated ID.
   *
   * @param id The unique identifier for the device code.
   * @return Response from the API call
   */
  ;

  _proto.getDeviceCode =
  /*#__PURE__*/
  function () {
    var _getDeviceCode = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(id, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                id: [id, schema.string()]
              });
              req.appendTemplatePath(_templateObject$8(), mapped.id);
              return _context3.abrupt("return", req.callAsJson(getDeviceCodeResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function getDeviceCode(_x8, _x9) {
      return _getDeviceCode.apply(this, arguments);
    }

    return getDeviceCode;
  }();

  return DevicesApi;
}(BaseApi);

var disputedPaymentSchema = /*#__PURE__*/schema.object({
  paymentId: ['payment_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var disputeSchema = /*#__PURE__*/schema.object({
  disputeId: ['dispute_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  amountMoney: ['amount_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  reason: ['reason', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  state: ['state', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  dueAt: ['due_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  disputedPayment: ['disputed_payment', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return disputedPaymentSchema;
  }))],
  evidenceIds: ['evidence_ids', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  cardBrand: ['card_brand', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  createdAt: ['created_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  updatedAt: ['updated_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  brandDisputeId: ['brand_dispute_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  reportedDate: ['reported_date', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  version: ['version', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  locationId: ['location_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var acceptDisputeResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  dispute: ['dispute', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return disputeSchema;
  }))]
});

var createDisputeEvidenceFileRequestSchema = /*#__PURE__*/schema.object({
  idempotencyKey: ['idempotency_key', /*#__PURE__*/schema.string()],
  evidenceType: ['evidence_type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  contentType: ['content_type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var disputeEvidenceSchema = /*#__PURE__*/schema.object({
  evidenceId: ['evidence_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  disputeId: ['dispute_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  uploadedAt: ['uploaded_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  evidenceType: ['evidence_type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var createDisputeEvidenceFileResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  evidence: ['evidence', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return disputeEvidenceSchema;
  }))]
});

var createDisputeEvidenceTextRequestSchema = /*#__PURE__*/schema.object({
  idempotencyKey: ['idempotency_key', /*#__PURE__*/schema.string()],
  evidenceType: ['evidence_type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  evidenceText: ['evidence_text', /*#__PURE__*/schema.string()]
});

var createDisputeEvidenceTextResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  evidence: ['evidence', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return disputeEvidenceSchema;
  }))]
});

var listDisputeEvidenceResponseSchema = /*#__PURE__*/schema.object({
  evidence: ['evidence', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return disputeEvidenceSchema;
  })))],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var listDisputesResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  disputes: ['disputes', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return disputeSchema;
  })))],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var removeDisputeEvidenceResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var retrieveDisputeEvidenceResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  evidence: ['evidence', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return disputeEvidenceSchema;
  }))]
});

var retrieveDisputeResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  dispute: ['dispute', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return disputeSchema;
  }))]
});

var submitEvidenceResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  dispute: ['dispute', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return disputeSchema;
  }))]
});

function _templateObject8() {
  var data = _taggedTemplateLiteralLoose(["/v2/disputes/", "/submit-evidence"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$1() {
  var data = _taggedTemplateLiteralLoose(["/v2/disputes/", "/evidence_text"]);

  _templateObject7$1 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$1() {
  var data = _taggedTemplateLiteralLoose(["/v2/disputes/", "/evidence_file"]);

  _templateObject6$1 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$1() {
  var data = _taggedTemplateLiteralLoose(["/v2/disputes/", "/evidence/", ""]);

  _templateObject5$1 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$1() {
  var data = _taggedTemplateLiteralLoose(["/v2/disputes/", "/evidence/", ""]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$3() {
  var data = _taggedTemplateLiteralLoose(["/v2/disputes/", "/evidence"]);

  _templateObject3$3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$6() {
  var data = _taggedTemplateLiteralLoose(["/v2/disputes/", "/accept"]);

  _templateObject2$6 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$9() {
  var data = _taggedTemplateLiteralLoose(["/v2/disputes/", ""]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}
var DisputesApi = /*#__PURE__*/function (_BaseApi) {
  _inheritsLoose(DisputesApi, _BaseApi);

  function DisputesApi() {
    return _BaseApi.apply(this, arguments) || this;
  }

  var _proto = DisputesApi.prototype;

  /**
   * Returns a list of disputes associated
   * with a particular account.
   *
   * @param cursor      A pagination cursor returned by a previous call to this endpoint. Provide this to
   *                              retrieve the next set of results for the original query. For more information, see
   *                              [Paginating](https://developer.squareup.com/docs/basics/api101/pagination).
   * @param states      The dispute states to filter the result. If not specified, the endpoint returns all
   *                              open disputes (dispute status is not `INQUIRY_CLOSED`, `WON`, or `LOST`).
   * @param locationId  The ID of the location for which to return  a list of disputes. If not specified,
   *                              the endpoint returns all open disputes (dispute status is not `INQUIRY_CLOSED`, `WON`,
   *                              or  `LOST`) associated with all locations.
   * @return Response from the API call
   */
  _proto.listDisputes =
  /*#__PURE__*/
  function () {
    var _listDisputes = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(cursor, states, locationId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = this.createRequest('GET', '/v2/disputes');
              mapped = req.prepareArgs({
                cursor: [cursor, schema.optional(schema.string())],
                states: [states, schema.optional(schema.string())],
                locationId: [locationId, schema.optional(schema.string())]
              });
              req.query('cursor', mapped.cursor);
              req.query('states', mapped.states);
              req.query('location_id', mapped.locationId);
              return _context.abrupt("return", req.callAsJson(listDisputesResponseSchema, requestOptions));

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function listDisputes(_x, _x2, _x3, _x4) {
      return _listDisputes.apply(this, arguments);
    }

    return listDisputes;
  }()
  /**
   * Returns details of a specific dispute.
   *
   * @param disputeId  The ID of the dispute you want more details about.
   * @return Response from the API call
   */
  ;

  _proto.retrieveDispute =
  /*#__PURE__*/
  function () {
    var _retrieveDispute = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(disputeId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                disputeId: [disputeId, schema.string()]
              });
              req.appendTemplatePath(_templateObject$9(), mapped.disputeId);
              return _context2.abrupt("return", req.callAsJson(retrieveDisputeResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function retrieveDispute(_x5, _x6) {
      return _retrieveDispute.apply(this, arguments);
    }

    return retrieveDispute;
  }()
  /**
   * Accepts loss on a dispute. Square returns
   * the disputed amount to the cardholder and updates the
   * dispute state to ACCEPTED.
   *
   * Square debits the disputed amount from the seller’s Square
   * account. If the Square account balance does not have
   * sufficient funds, Square debits the associated bank account.
   *
   * @param disputeId  ID of the dispute you want to accept.
   * @return Response from the API call
   */
  ;

  _proto.acceptDispute =
  /*#__PURE__*/
  function () {
    var _acceptDispute = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(disputeId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              req = this.createRequest('POST');
              mapped = req.prepareArgs({
                disputeId: [disputeId, schema.string()]
              });
              req.appendTemplatePath(_templateObject2$6(), mapped.disputeId);
              return _context3.abrupt("return", req.callAsJson(acceptDisputeResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function acceptDispute(_x7, _x8) {
      return _acceptDispute.apply(this, arguments);
    }

    return acceptDispute;
  }()
  /**
   * Returns a list of evidence associated with a dispute.
   *
   * @param disputeId  The ID of the dispute.
   * @return Response from the API call
   */
  ;

  _proto.listDisputeEvidence =
  /*#__PURE__*/
  function () {
    var _listDisputeEvidence = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(disputeId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                disputeId: [disputeId, schema.string()]
              });
              req.appendTemplatePath(_templateObject3$3(), mapped.disputeId);
              return _context4.abrupt("return", req.callAsJson(listDisputeEvidenceResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function listDisputeEvidence(_x9, _x10) {
      return _listDisputeEvidence.apply(this, arguments);
    }

    return listDisputeEvidence;
  }()
  /**
   * Removes specified evidence from a dispute.
   *
   * Square does not send the bank any evidence that
   * is removed. Also, you cannot remove evidence after
   * submitting it to the bank using [SubmitEvidence](https://developer.squareup.
   * com/docs/reference/square/disputes-api/submit-evidence).
   *
   * @param disputeId   The ID of the dispute you want to remove evidence from.
   * @param evidenceId  The ID of the evidence you want to remove.
   * @return Response from the API call
   */
  ;

  _proto.removeDisputeEvidence =
  /*#__PURE__*/
  function () {
    var _removeDisputeEvidence = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5(disputeId, evidenceId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              req = this.createRequest('DELETE');
              mapped = req.prepareArgs({
                disputeId: [disputeId, schema.string()],
                evidenceId: [evidenceId, schema.string()]
              });
              req.appendTemplatePath(_templateObject4$1(), mapped.disputeId, mapped.evidenceId);
              return _context5.abrupt("return", req.callAsJson(removeDisputeEvidenceResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function removeDisputeEvidence(_x11, _x12, _x13) {
      return _removeDisputeEvidence.apply(this, arguments);
    }

    return removeDisputeEvidence;
  }()
  /**
   * Returns the specific evidence metadata associated with a specific dispute.
   *
   * You must maintain a copy of the evidence you upload if you want to
   * reference it later. You cannot download the evidence
   * after you upload it.
   *
   * @param disputeId   The ID of the dispute that you want to retrieve evidence from.
   * @param evidenceId  The ID of the evidence to retrieve.
   * @return Response from the API call
   */
  ;

  _proto.retrieveDisputeEvidence =
  /*#__PURE__*/
  function () {
    var _retrieveDisputeEvidence = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee6(disputeId, evidenceId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                disputeId: [disputeId, schema.string()],
                evidenceId: [evidenceId, schema.string()]
              });
              req.appendTemplatePath(_templateObject5$1(), mapped.disputeId, mapped.evidenceId);
              return _context6.abrupt("return", req.callAsJson(retrieveDisputeEvidenceResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function retrieveDisputeEvidence(_x14, _x15, _x16) {
      return _retrieveDisputeEvidence.apply(this, arguments);
    }

    return retrieveDisputeEvidence;
  }()
  /**
   * Uploads a file to use as evidence in a dispute challenge. The endpoint accepts
   * HTTP multipart/form-data file uploads in HEIC, HEIF, JPEG, PDF, PNG,
   * and TIFF formats.
   *
   * @param disputeId  ID of the dispute you want to upload evidence for.
   * @param request    Defines parameters for a CreateDisputeEvidenceFile
   *                                                              request.
   * @param imageFile
   * @return Response from the API call
   */
  ;

  _proto.createDisputeEvidenceFile =
  /*#__PURE__*/
  function () {
    var _createDisputeEvidenceFile = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee7(disputeId, request, imageFile, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              req = this.createRequest('POST');
              mapped = req.prepareArgs({
                disputeId: [disputeId, schema.string()],
                request: [request, schema.optional(createDisputeEvidenceFileRequestSchema)]
              });
              req.formData({
                request: JSON.stringify(mapped.request),
                image_file: imageFile
              });
              req.appendTemplatePath(_templateObject6$1(), mapped.disputeId);
              return _context7.abrupt("return", req.callAsJson(createDisputeEvidenceFileResponseSchema, requestOptions));

            case 5:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function createDisputeEvidenceFile(_x17, _x18, _x19, _x20) {
      return _createDisputeEvidenceFile.apply(this, arguments);
    }

    return createDisputeEvidenceFile;
  }()
  /**
   * Uploads text to use as evidence for a dispute challenge.
   *
   * @param disputeId  The ID of the dispute you want to upload evidence
   *                                                              for.
   * @param body       An object containing the fields to POST for the
   *                                                              request.  See the corresponding object definition for
   *                                                              field details.
   * @return Response from the API call
   */
  ;

  _proto.createDisputeEvidenceText =
  /*#__PURE__*/
  function () {
    var _createDisputeEvidenceText = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee8(disputeId, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              req = this.createRequest('POST');
              mapped = req.prepareArgs({
                disputeId: [disputeId, schema.string()],
                body: [body, createDisputeEvidenceTextRequestSchema]
              });
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject7$1(), mapped.disputeId);
              return _context8.abrupt("return", req.callAsJson(createDisputeEvidenceTextResponseSchema, requestOptions));

            case 5:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function createDisputeEvidenceText(_x21, _x22, _x23) {
      return _createDisputeEvidenceText.apply(this, arguments);
    }

    return createDisputeEvidenceText;
  }()
  /**
   * Submits evidence to the cardholder's bank.
   *
   * Before submitting evidence, Square compiles all available evidence. This includes
   * evidence uploaded using the
   * [CreateDisputeEvidenceFile](https://developer.squareup.com/docs/reference/square/disputes-api/create-
   * dispute-evidence-file) and
   * [CreateDisputeEvidenceText](https://developer.squareup.com/docs/reference/square/disputes-api/create-
   * dispute-evidence-text) endpoints,
   * and evidence automatically provided by Square, when
   * available.
   *
   * @param disputeId  The ID of the dispute you want to submit evidence for.
   * @return Response from the API call
   */
  ;

  _proto.submitEvidence =
  /*#__PURE__*/
  function () {
    var _submitEvidence = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee9(disputeId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              req = this.createRequest('POST');
              mapped = req.prepareArgs({
                disputeId: [disputeId, schema.string()]
              });
              req.appendTemplatePath(_templateObject8(), mapped.disputeId);
              return _context9.abrupt("return", req.callAsJson(submitEvidenceResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this);
    }));

    function submitEvidence(_x24, _x25) {
      return _submitEvidence.apply(this, arguments);
    }

    return submitEvidence;
  }();

  return DisputesApi;
}(BaseApi);

var employeeSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  firstName: ['first_name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  lastName: ['last_name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  email: ['email', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  phoneNumber: ['phone_number', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  locationIds: ['location_ids', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  status: ['status', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  isOwner: ['is_owner', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  createdAt: ['created_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  updatedAt: ['updated_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var listEmployeesResponseSchema = /*#__PURE__*/schema.object({
  employees: ['employees', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return employeeSchema;
  })))],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var retrieveEmployeeResponseSchema = /*#__PURE__*/schema.object({
  employee: ['employee', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return employeeSchema;
  }))],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

function _templateObject$a() {
  var data = _taggedTemplateLiteralLoose(["/v2/employees/", ""]);

  _templateObject$a = function _templateObject() {
    return data;
  };

  return data;
}
var EmployeesApi = /*#__PURE__*/function (_BaseApi) {
  _inheritsLoose(EmployeesApi, _BaseApi);

  function EmployeesApi() {
    return _BaseApi.apply(this, arguments) || this;
  }

  var _proto = EmployeesApi.prototype;

  /**
   * ListEmployees
   *
   * @param locationId
   * @param status      Specifies the EmployeeStatus to filter the employee by.
   * @param limit       The number of employees to be returned on each page.
   * @param cursor      The token required to retrieve the specified page of results.
   * @return Response from the API call
   * @deprecated
   */
  _proto.listEmployees =
  /*#__PURE__*/
  function () {
    var _listEmployees = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(locationId, status, limit, cursor, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = this.createRequest('GET', '/v2/employees');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.optional(schema.string())],
                status: [status, schema.optional(schema.string())],
                limit: [limit, schema.optional(schema.number())],
                cursor: [cursor, schema.optional(schema.string())]
              });
              req.query('location_id', mapped.locationId);
              req.query('status', mapped.status);
              req.query('limit', mapped.limit);
              req.query('cursor', mapped.cursor);
              req.deprecated('EmployeesApi.listEmployees');
              return _context.abrupt("return", req.callAsJson(listEmployeesResponseSchema, requestOptions));

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function listEmployees(_x, _x2, _x3, _x4, _x5) {
      return _listEmployees.apply(this, arguments);
    }

    return listEmployees;
  }()
  /**
   * RetrieveEmployee
   *
   * @param id UUID for the employee that was requested.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.retrieveEmployee =
  /*#__PURE__*/
  function () {
    var _retrieveEmployee = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(id, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                id: [id, schema.string()]
              });
              req.appendTemplatePath(_templateObject$a(), mapped.id);
              req.deprecated('EmployeesApi.retrieveEmployee');
              return _context2.abrupt("return", req.callAsJson(retrieveEmployeeResponseSchema, requestOptions));

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function retrieveEmployee(_x6, _x7) {
      return _retrieveEmployee.apply(this, arguments);
    }

    return retrieveEmployee;
  }();

  return EmployeesApi;
}(BaseApi);

var inventoryAdjustmentSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  referenceId: ['reference_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  fromState: ['from_state', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  toState: ['to_state', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  locationId: ['location_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  catalogObjectId: ['catalog_object_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  catalogObjectType: ['catalog_object_type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  quantity: ['quantity', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  totalPriceMoney: ['total_price_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  occurredAt: ['occurred_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  createdAt: ['created_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  source: ['source', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return sourceApplicationSchema;
  }))],
  employeeId: ['employee_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  transactionId: ['transaction_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  refundId: ['refund_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  purchaseOrderId: ['purchase_order_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  goodsReceiptId: ['goods_receipt_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var inventoryPhysicalCountSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  referenceId: ['reference_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  catalogObjectId: ['catalog_object_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  catalogObjectType: ['catalog_object_type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  state: ['state', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  locationId: ['location_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  quantity: ['quantity', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  source: ['source', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return sourceApplicationSchema;
  }))],
  employeeId: ['employee_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  occurredAt: ['occurred_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  createdAt: ['created_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var inventoryTransferSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  referenceId: ['reference_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  state: ['state', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  fromLocationId: ['from_location_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  toLocationId: ['to_location_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  catalogObjectId: ['catalog_object_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  catalogObjectType: ['catalog_object_type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  quantity: ['quantity', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  occurredAt: ['occurred_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  createdAt: ['created_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  source: ['source', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return sourceApplicationSchema;
  }))],
  employeeId: ['employee_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var inventoryChangeSchema = /*#__PURE__*/schema.object({
  type: ['type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  physicalCount: ['physical_count', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return inventoryPhysicalCountSchema;
  }))],
  adjustment: ['adjustment', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return inventoryAdjustmentSchema;
  }))],
  transfer: ['transfer', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return inventoryTransferSchema;
  }))]
});

var batchChangeInventoryRequestSchema = /*#__PURE__*/schema.object({
  idempotencyKey: ['idempotency_key', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  changes: ['changes', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return inventoryChangeSchema;
  })))],
  ignoreUnchangedCounts: ['ignore_unchanged_counts', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())]
});

var inventoryCountSchema = /*#__PURE__*/schema.object({
  catalogObjectId: ['catalog_object_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  catalogObjectType: ['catalog_object_type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  state: ['state', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  locationId: ['location_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  quantity: ['quantity', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  calculatedAt: ['calculated_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var batchChangeInventoryResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  counts: ['counts', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return inventoryCountSchema;
  })))]
});

var batchRetrieveInventoryChangesRequestSchema = /*#__PURE__*/schema.object({
  catalogObjectIds: ['catalog_object_ids', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  locationIds: ['location_ids', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  types: ['types', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  states: ['states', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  updatedAfter: ['updated_after', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  updatedBefore: ['updated_before', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var batchRetrieveInventoryChangesResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  changes: ['changes', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return inventoryChangeSchema;
  })))],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var batchRetrieveInventoryCountsRequestSchema = /*#__PURE__*/schema.object({
  catalogObjectIds: ['catalog_object_ids', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  locationIds: ['location_ids', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  updatedAfter: ['updated_after', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  states: ['states', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))]
});

var batchRetrieveInventoryCountsResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  counts: ['counts', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return inventoryCountSchema;
  })))],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var retrieveInventoryAdjustmentResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  adjustment: ['adjustment', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return inventoryAdjustmentSchema;
  }))]
});

var retrieveInventoryChangesResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  changes: ['changes', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return inventoryChangeSchema;
  })))],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var retrieveInventoryCountResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  counts: ['counts', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return inventoryCountSchema;
  })))],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var retrieveInventoryPhysicalCountResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  count: ['count', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return inventoryPhysicalCountSchema;
  }))]
});

function _templateObject4$2() {
  var data = _taggedTemplateLiteralLoose(["/v2/inventory/", "/changes"]);

  _templateObject4$2 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$4() {
  var data = _taggedTemplateLiteralLoose(["/v2/inventory/", ""]);

  _templateObject3$4 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$7() {
  var data = _taggedTemplateLiteralLoose(["/v2/inventory/physical-count/", ""]);

  _templateObject2$7 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$b() {
  var data = _taggedTemplateLiteralLoose(["/v2/inventory/adjustment/", ""]);

  _templateObject$b = function _templateObject() {
    return data;
  };

  return data;
}
var InventoryApi = /*#__PURE__*/function (_BaseApi) {
  _inheritsLoose(InventoryApi, _BaseApi);

  function InventoryApi() {
    return _BaseApi.apply(this, arguments) || this;
  }

  var _proto = InventoryApi.prototype;

  /**
   * Returns the [InventoryAdjustment](#type-inventoryadjustment) object
   * with the provided `adjustment_id`.
   *
   * @param adjustmentId  ID of the [InventoryAdjustment](#type-inventoryadjustment) to retrieve.
   * @return Response from the API call
   */
  _proto.retrieveInventoryAdjustment =
  /*#__PURE__*/
  function () {
    var _retrieveInventoryAdjustment = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(adjustmentId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                adjustmentId: [adjustmentId, schema.string()]
              });
              req.appendTemplatePath(_templateObject$b(), mapped.adjustmentId);
              return _context.abrupt("return", req.callAsJson(retrieveInventoryAdjustmentResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function retrieveInventoryAdjustment(_x, _x2) {
      return _retrieveInventoryAdjustment.apply(this, arguments);
    }

    return retrieveInventoryAdjustment;
  }()
  /**
   * Applies adjustments and counts to the provided item quantities.
   *
   * On success: returns the current calculated counts for all objects
   * referenced in the request.
   * On failure: returns a list of related errors.
   *
   * @param body An object containing the fields to POST for the request.  See
   *                                                   the corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.batchChangeInventory =
  /*#__PURE__*/
  function () {
    var _batchChangeInventory = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req = this.createRequest('POST', '/v2/inventory/batch-change');
              mapped = req.prepareArgs({
                body: [body, batchChangeInventoryRequestSchema]
              });
              req.json(mapped.body);
              return _context2.abrupt("return", req.callAsJson(batchChangeInventoryResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function batchChangeInventory(_x3, _x4) {
      return _batchChangeInventory.apply(this, arguments);
    }

    return batchChangeInventory;
  }()
  /**
   * Returns historical physical counts and adjustments based on the
   * provided filter criteria.
   *
   * Results are paginated and sorted in ascending order according their
   * `occurred_at` timestamp (oldest first).
   *
   * BatchRetrieveInventoryChanges is a catch-all query endpoint for queries
   * that cannot be handled by other, simpler endpoints.
   *
   * @param body An object containing the fields to POST for the
   *                                                            request.  See the corresponding object definition for
   *                                                            field details.
   * @return Response from the API call
   */
  ;

  _proto.batchRetrieveInventoryChanges =
  /*#__PURE__*/
  function () {
    var _batchRetrieveInventoryChanges = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              req = this.createRequest('POST', '/v2/inventory/batch-retrieve-changes');
              mapped = req.prepareArgs({
                body: [body, batchRetrieveInventoryChangesRequestSchema]
              });
              req.json(mapped.body);
              return _context3.abrupt("return", req.callAsJson(batchRetrieveInventoryChangesResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function batchRetrieveInventoryChanges(_x5, _x6) {
      return _batchRetrieveInventoryChanges.apply(this, arguments);
    }

    return batchRetrieveInventoryChanges;
  }()
  /**
   * Returns current counts for the provided
   * [CatalogObject](#type-catalogobject)s at the requested
   * [Location](#type-location)s.
   *
   * Results are paginated and sorted in descending order according to their
   * `calculated_at` timestamp (newest first).
   *
   * When `updated_after` is specified, only counts that have changed since that
   * time (based on the server timestamp for the most recent change) are
   * returned. This allows clients to perform a "sync" operation, for example
   * in response to receiving a Webhook notification.
   *
   * @param body An object containing the fields to POST for the request.
   *                                                           See the corresponding object definition for field
   *                                                           details.
   * @return Response from the API call
   */
  ;

  _proto.batchRetrieveInventoryCounts =
  /*#__PURE__*/
  function () {
    var _batchRetrieveInventoryCounts = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              req = this.createRequest('POST', '/v2/inventory/batch-retrieve-counts');
              mapped = req.prepareArgs({
                body: [body, batchRetrieveInventoryCountsRequestSchema]
              });
              req.json(mapped.body);
              return _context4.abrupt("return", req.callAsJson(batchRetrieveInventoryCountsResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function batchRetrieveInventoryCounts(_x7, _x8) {
      return _batchRetrieveInventoryCounts.apply(this, arguments);
    }

    return batchRetrieveInventoryCounts;
  }()
  /**
   * Returns the [InventoryPhysicalCount](#type-inventoryphysicalcount)
   * object with the provided `physical_count_id`.
   *
   * @param physicalCountId   ID of the [InventoryPhysicalCount](#type-inventoryphysicalcount) to retrieve.
   * @return Response from the API call
   */
  ;

  _proto.retrieveInventoryPhysicalCount =
  /*#__PURE__*/
  function () {
    var _retrieveInventoryPhysicalCount = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5(physicalCountId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                physicalCountId: [physicalCountId, schema.string()]
              });
              req.appendTemplatePath(_templateObject2$7(), mapped.physicalCountId);
              return _context5.abrupt("return", req.callAsJson(retrieveInventoryPhysicalCountResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function retrieveInventoryPhysicalCount(_x9, _x10) {
      return _retrieveInventoryPhysicalCount.apply(this, arguments);
    }

    return retrieveInventoryPhysicalCount;
  }()
  /**
   * Retrieves the current calculated stock count for a given
   * [CatalogObject](#type-catalogobject) at a given set of
   * [Location](#type-location)s. Responses are paginated and unsorted.
   * For more sophisticated queries, use a batch endpoint.
   *
   * @param catalogObjectId   ID of the [CatalogObject](#type-catalogobject) to retrieve.
   * @param locationIds       The [Location](#type-location) IDs to look up as a comma-separated list. An
   *                                    empty list queries all locations.
   * @param cursor            A pagination cursor returned by a previous call to this endpoint. Provide this
   *                                    to retrieve the next set of results for the original query.  See the
   *                                    [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination)
   *                                    guide for more information.
   * @return Response from the API call
   */
  ;

  _proto.retrieveInventoryCount =
  /*#__PURE__*/
  function () {
    var _retrieveInventoryCount = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee6(catalogObjectId, locationIds, cursor, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                catalogObjectId: [catalogObjectId, schema.string()],
                locationIds: [locationIds, schema.optional(schema.string())],
                cursor: [cursor, schema.optional(schema.string())]
              });
              req.query('location_ids', mapped.locationIds);
              req.query('cursor', mapped.cursor);
              req.appendTemplatePath(_templateObject3$4(), mapped.catalogObjectId);
              return _context6.abrupt("return", req.callAsJson(retrieveInventoryCountResponseSchema, requestOptions));

            case 6:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function retrieveInventoryCount(_x11, _x12, _x13, _x14) {
      return _retrieveInventoryCount.apply(this, arguments);
    }

    return retrieveInventoryCount;
  }()
  /**
   * Returns a set of physical counts and inventory adjustments for the
   * provided [CatalogObject](#type-catalogobject) at the requested
   * [Location](#type-location)s.
   *
   * Results are paginated and sorted in descending order according to their
   * `occurred_at` timestamp (newest first).
   *
   * There are no limits on how far back the caller can page. This endpoint can be
   * used to display recent changes for a specific item. For more
   * sophisticated queries, use a batch endpoint.
   *
   * @param catalogObjectId   ID of the [CatalogObject](#type-catalogobject) to retrieve.
   * @param locationIds       The [Location](#type-location) IDs to look up as a comma-separated list. An
   *                                    empty list queries all locations.
   * @param cursor            A pagination cursor returned by a previous call to this endpoint. Provide this
   *                                    to retrieve the next set of results for the original query.  See the
   *                                    [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination)
   *                                    guide for more information.
   * @return Response from the API call
   */
  ;

  _proto.retrieveInventoryChanges =
  /*#__PURE__*/
  function () {
    var _retrieveInventoryChanges = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee7(catalogObjectId, locationIds, cursor, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                catalogObjectId: [catalogObjectId, schema.string()],
                locationIds: [locationIds, schema.optional(schema.string())],
                cursor: [cursor, schema.optional(schema.string())]
              });
              req.query('location_ids', mapped.locationIds);
              req.query('cursor', mapped.cursor);
              req.appendTemplatePath(_templateObject4$2(), mapped.catalogObjectId);
              return _context7.abrupt("return", req.callAsJson(retrieveInventoryChangesResponseSchema, requestOptions));

            case 6:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function retrieveInventoryChanges(_x15, _x16, _x17, _x18) {
      return _retrieveInventoryChanges.apply(this, arguments);
    }

    return retrieveInventoryChanges;
  }();

  return InventoryApi;
}(BaseApi);

var cancelInvoiceRequestSchema = /*#__PURE__*/schema.object({
  version: ['version', /*#__PURE__*/schema.number()]
});

var invoicePaymentReminderSchema = /*#__PURE__*/schema.object({
  uid: ['uid', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  relativeScheduledDays: ['relative_scheduled_days', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  message: ['message', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  status: ['status', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  sentAt: ['sent_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var invoicePaymentRequestSchema = /*#__PURE__*/schema.object({
  uid: ['uid', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  requestMethod: ['request_method', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  requestType: ['request_type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  dueDate: ['due_date', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  fixedAmountRequestedMoney: ['fixed_amount_requested_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  percentageRequested: ['percentage_requested', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  tippingEnabled: ['tipping_enabled', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  cardId: ['card_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  reminders: ['reminders', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return invoicePaymentReminderSchema;
  })))],
  computedAmountMoney: ['computed_amount_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  totalCompletedAmountMoney: ['total_completed_amount_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  roundingAdjustmentIncludedMoney: ['rounding_adjustment_included_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))]
});

var invoiceRecipientSchema = /*#__PURE__*/schema.object({
  customerId: ['customer_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  givenName: ['given_name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  familyName: ['family_name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  emailAddress: ['email_address', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  address: ['address', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return addressSchema;
  }))],
  phoneNumber: ['phone_number', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  companyName: ['company_name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var invoiceSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  version: ['version', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  locationId: ['location_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  orderId: ['order_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  primaryRecipient: ['primary_recipient', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return invoiceRecipientSchema;
  }))],
  paymentRequests: ['payment_requests', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return invoicePaymentRequestSchema;
  })))],
  invoiceNumber: ['invoice_number', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  title: ['title', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  description: ['description', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  scheduledAt: ['scheduled_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  publicUrl: ['public_url', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  nextPaymentAmountMoney: ['next_payment_amount_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  status: ['status', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  timezone: ['timezone', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  createdAt: ['created_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  updatedAt: ['updated_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var cancelInvoiceResponseSchema = /*#__PURE__*/schema.object({
  invoice: ['invoice', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return invoiceSchema;
  }))],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var createInvoiceRequestSchema = /*#__PURE__*/schema.object({
  invoice: ['invoice', /*#__PURE__*/schema.lazy(function () {
    return invoiceSchema;
  })],
  idempotencyKey: ['idempotency_key', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var createInvoiceResponseSchema = /*#__PURE__*/schema.object({
  invoice: ['invoice', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return invoiceSchema;
  }))],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var deleteInvoiceResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var getInvoiceResponseSchema = /*#__PURE__*/schema.object({
  invoice: ['invoice', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return invoiceSchema;
  }))],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var listInvoicesResponseSchema = /*#__PURE__*/schema.object({
  invoices: ['invoices', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return invoiceSchema;
  })))],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var publishInvoiceRequestSchema = /*#__PURE__*/schema.object({
  version: ['version', /*#__PURE__*/schema.number()],
  idempotencyKey: ['idempotency_key', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var publishInvoiceResponseSchema = /*#__PURE__*/schema.object({
  invoice: ['invoice', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return invoiceSchema;
  }))],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var invoiceFilterSchema = /*#__PURE__*/schema.object({
  locationIds: ['location_ids', /*#__PURE__*/schema.array( /*#__PURE__*/schema.string())],
  customerIds: ['customer_ids', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))]
});

var invoiceSortSchema = /*#__PURE__*/schema.object({
  field: ['field', /*#__PURE__*/schema.string()],
  order: ['order', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var invoiceQuerySchema = /*#__PURE__*/schema.object({
  filter: ['filter', /*#__PURE__*/schema.lazy(function () {
    return invoiceFilterSchema;
  })],
  sort: ['sort', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return invoiceSortSchema;
  }))]
});

var searchInvoicesRequestSchema = /*#__PURE__*/schema.object({
  query: ['query', /*#__PURE__*/schema.lazy(function () {
    return invoiceQuerySchema;
  })],
  limit: ['limit', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var searchInvoicesResponseSchema = /*#__PURE__*/schema.object({
  invoices: ['invoices', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return invoiceSchema;
  })))],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var updateInvoiceRequestSchema = /*#__PURE__*/schema.object({
  invoice: ['invoice', /*#__PURE__*/schema.lazy(function () {
    return invoiceSchema;
  })],
  idempotencyKey: ['idempotency_key', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  fieldsToClear: ['fields_to_clear', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))]
});

var updateInvoiceResponseSchema = /*#__PURE__*/schema.object({
  invoice: ['invoice', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return invoiceSchema;
  }))],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

function _templateObject5$2() {
  var data = _taggedTemplateLiteralLoose(["/v2/invoices/", "/publish"]);

  _templateObject5$2 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$3() {
  var data = _taggedTemplateLiteralLoose(["/v2/invoices/", "/cancel"]);

  _templateObject4$3 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$5() {
  var data = _taggedTemplateLiteralLoose(["/v2/invoices/", ""]);

  _templateObject3$5 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$8() {
  var data = _taggedTemplateLiteralLoose(["/v2/invoices/", ""]);

  _templateObject2$8 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$c() {
  var data = _taggedTemplateLiteralLoose(["/v2/invoices/", ""]);

  _templateObject$c = function _templateObject() {
    return data;
  };

  return data;
}
var InvoicesApi = /*#__PURE__*/function (_BaseApi) {
  _inheritsLoose(InvoicesApi, _BaseApi);

  function InvoicesApi() {
    return _BaseApi.apply(this, arguments) || this;
  }

  var _proto = InvoicesApi.prototype;

  /**
   * Returns a list of invoices for a given location. The response
   * is paginated. If truncated, the response includes a `cursor` that you
   * use in a subsequent request to fetch the next set of invoices.
   *
   * @param locationId  The ID of the location for which to list invoices.
   * @param cursor      A pagination cursor returned by a previous call to this endpoint.  Provide this
   *                              cursor to retrieve the next set of results for your original query.  For more
   *                              information, see [Pagination](https://developer.squareup.com/docs/working-with-
   *                              apis/pagination).
   * @param limit       The maximum number of invoices to return (200 is the maximum `limit`).  If not
   *                              provided, the server  uses a default limit of 100 invoices.
   * @return Response from the API call
   */
  _proto.listInvoices =
  /*#__PURE__*/
  function () {
    var _listInvoices = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(locationId, cursor, limit, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = this.createRequest('GET', '/v2/invoices');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                cursor: [cursor, schema.optional(schema.string())],
                limit: [limit, schema.optional(schema.number())]
              });
              req.query('location_id', mapped.locationId);
              req.query('cursor', mapped.cursor);
              req.query('limit', mapped.limit);
              return _context.abrupt("return", req.callAsJson(listInvoicesResponseSchema, requestOptions));

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function listInvoices(_x, _x2, _x3, _x4) {
      return _listInvoices.apply(this, arguments);
    }

    return listInvoices;
  }()
  /**
   * Creates a draft [invoice](#type-invoice)
   * for an order created using the Orders API.
   *
   * A draft invoice remains in your account and no action is taken.
   * You must publish the invoice before Square can process it (send it to the customer's email address
   * or charge the customer’s card on file).
   *
   * @param body An object containing the fields to POST for the request.  See the
   *                                            corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.createInvoice =
  /*#__PURE__*/
  function () {
    var _createInvoice = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req = this.createRequest('POST', '/v2/invoices');
              mapped = req.prepareArgs({
                body: [body, createInvoiceRequestSchema]
              });
              req.json(mapped.body);
              return _context2.abrupt("return", req.callAsJson(createInvoiceResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function createInvoice(_x5, _x6) {
      return _createInvoice.apply(this, arguments);
    }

    return createInvoice;
  }()
  /**
   * Searches for invoices from a location specified in
   * the filter. You can optionally specify customers in the filter for whom to
   * retrieve invoices. In the current implementation, you can only specify one location and
   * optionally one customer.
   *
   * The response is paginated. If truncated, the response includes a `cursor`
   * that you use in a subsequent request to fetch the next set of invoices.
   *
   * @param body An object containing the fields to POST for the request.  See the
   *                                             corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.searchInvoices =
  /*#__PURE__*/
  function () {
    var _searchInvoices = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              req = this.createRequest('POST', '/v2/invoices/search');
              mapped = req.prepareArgs({
                body: [body, searchInvoicesRequestSchema]
              });
              req.json(mapped.body);
              return _context3.abrupt("return", req.callAsJson(searchInvoicesResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function searchInvoices(_x7, _x8) {
      return _searchInvoices.apply(this, arguments);
    }

    return searchInvoices;
  }()
  /**
   * Deletes the specified invoice. When an invoice is deleted, the
   * associated Order status changes to CANCELED. You can only delete a draft
   * invoice (you cannot delete an invoice scheduled for publication, or a
   * published invoice).
   *
   * @param invoiceId  The ID of the invoice to delete.
   * @param version    The version of the [invoice](#type-invoice) to delete. If you do not know the version,
   *                             you can call [GetInvoice](#endpoint-Invoices-GetInvoice) or  [ListInvoices](#endpoint-
   *                             Invoices-ListInvoices).
   * @return Response from the API call
   */
  ;

  _proto.deleteInvoice =
  /*#__PURE__*/
  function () {
    var _deleteInvoice = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(invoiceId, version, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              req = this.createRequest('DELETE');
              mapped = req.prepareArgs({
                invoiceId: [invoiceId, schema.string()],
                version: [version, schema.optional(schema.number())]
              });
              req.query('version', mapped.version);
              req.appendTemplatePath(_templateObject$c(), mapped.invoiceId);
              return _context4.abrupt("return", req.callAsJson(deleteInvoiceResponseSchema, requestOptions));

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function deleteInvoice(_x9, _x10, _x11) {
      return _deleteInvoice.apply(this, arguments);
    }

    return deleteInvoice;
  }()
  /**
   * Retrieves an invoice by invoice ID.
   *
   * @param invoiceId  The id of the invoice to retrieve.
   * @return Response from the API call
   */
  ;

  _proto.getInvoice =
  /*#__PURE__*/
  function () {
    var _getInvoice = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5(invoiceId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                invoiceId: [invoiceId, schema.string()]
              });
              req.appendTemplatePath(_templateObject2$8(), mapped.invoiceId);
              return _context5.abrupt("return", req.callAsJson(getInvoiceResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function getInvoice(_x12, _x13) {
      return _getInvoice.apply(this, arguments);
    }

    return getInvoice;
  }()
  /**
   * Updates an invoice by modifying field values, clearing field values, or both
   * as specified in the request.
   * There are no restrictions to updating an invoice in a draft state.
   * However, there are guidelines for updating a published invoice.
   *
   * @param invoiceId  The id of the invoice to update.
   * @param body       An object containing the fields to POST for the request.  See
   *                                                  the corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.updateInvoice =
  /*#__PURE__*/
  function () {
    var _updateInvoice = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee6(invoiceId, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              req = this.createRequest('PUT');
              mapped = req.prepareArgs({
                invoiceId: [invoiceId, schema.string()],
                body: [body, updateInvoiceRequestSchema]
              });
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject3$5(), mapped.invoiceId);
              return _context6.abrupt("return", req.callAsJson(updateInvoiceResponseSchema, requestOptions));

            case 5:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function updateInvoice(_x14, _x15, _x16) {
      return _updateInvoice.apply(this, arguments);
    }

    return updateInvoice;
  }()
  /**
   * Cancels an invoice. The seller cannot collect payments for
   * the canceled invoice.
   *
   * You cannot cancel an invoice in a terminal state: `PAID`, `REFUNDED`, `CANCELED`, or `FAILED`.
   *
   * @param invoiceId  The ID of the [invoice](#type-invoice) to cancel.
   * @param body       An object containing the fields to POST for the request.  See
   *                                                  the corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.cancelInvoice =
  /*#__PURE__*/
  function () {
    var _cancelInvoice = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee7(invoiceId, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              req = this.createRequest('POST');
              mapped = req.prepareArgs({
                invoiceId: [invoiceId, schema.string()],
                body: [body, cancelInvoiceRequestSchema]
              });
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject4$3(), mapped.invoiceId);
              return _context7.abrupt("return", req.callAsJson(cancelInvoiceResponseSchema, requestOptions));

            case 5:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function cancelInvoice(_x17, _x18, _x19) {
      return _cancelInvoice.apply(this, arguments);
    }

    return cancelInvoice;
  }()
  /**
   * Publishes the specified draft invoice.
   *
   * After an invoice is published, Square
   * follows up based on the invoice configuration. For example, Square
   * sends the invoice to the customer's email address, charges the customer's card on file, or does
   * nothing. Square also makes the invoice available on a Square-hosted invoice page.
   *
   * The invoice `status` also changes from `DRAFT` to a status
   * based on the invoice configuration. For example, the status changes to `UNPAID` if
   * Square emails the invoice or `PARTIALLY_PAID` if Square charge a card on file for a portion of the
   * invoice amount).
   *
   * @param invoiceId  The id of the invoice to publish.
   * @param body       An object containing the fields to POST for the request.  See
   *                                                   the corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.publishInvoice =
  /*#__PURE__*/
  function () {
    var _publishInvoice = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee8(invoiceId, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              req = this.createRequest('POST');
              mapped = req.prepareArgs({
                invoiceId: [invoiceId, schema.string()],
                body: [body, publishInvoiceRequestSchema]
              });
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject5$2(), mapped.invoiceId);
              return _context8.abrupt("return", req.callAsJson(publishInvoiceResponseSchema, requestOptions));

            case 5:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function publishInvoice(_x20, _x21, _x22) {
      return _publishInvoice.apply(this, arguments);
    }

    return publishInvoice;
  }();

  return InvoicesApi;
}(BaseApi);

var breakTypeSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  locationId: ['location_id', /*#__PURE__*/schema.string()],
  breakName: ['break_name', /*#__PURE__*/schema.string()],
  expectedDuration: ['expected_duration', /*#__PURE__*/schema.string()],
  isPaid: ['is_paid', /*#__PURE__*/schema.boolean()],
  version: ['version', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  createdAt: ['created_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  updatedAt: ['updated_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var createBreakTypeRequestSchema = /*#__PURE__*/schema.object({
  idempotencyKey: ['idempotency_key', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  breakType: ['break_type', /*#__PURE__*/schema.lazy(function () {
    return breakTypeSchema;
  })]
});

var createBreakTypeResponseSchema = /*#__PURE__*/schema.object({
  breakType: ['break_type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return breakTypeSchema;
  }))],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var breakSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  startAt: ['start_at', /*#__PURE__*/schema.string()],
  endAt: ['end_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  breakTypeId: ['break_type_id', /*#__PURE__*/schema.string()],
  name: ['name', /*#__PURE__*/schema.string()],
  expectedDuration: ['expected_duration', /*#__PURE__*/schema.string()],
  isPaid: ['is_paid', /*#__PURE__*/schema.boolean()]
});

var shiftWageSchema = /*#__PURE__*/schema.object({
  title: ['title', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  hourlyRate: ['hourly_rate', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))]
});

var shiftSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  employeeId: ['employee_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  locationId: ['location_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  timezone: ['timezone', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  startAt: ['start_at', /*#__PURE__*/schema.string()],
  endAt: ['end_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  wage: ['wage', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return shiftWageSchema;
  }))],
  breaks: ['breaks', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return breakSchema;
  })))],
  status: ['status', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  version: ['version', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  createdAt: ['created_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  updatedAt: ['updated_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  teamMemberId: ['team_member_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var createShiftRequestSchema = /*#__PURE__*/schema.object({
  idempotencyKey: ['idempotency_key', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  shift: ['shift', /*#__PURE__*/schema.lazy(function () {
    return shiftSchema;
  })]
});

var createShiftResponseSchema = /*#__PURE__*/schema.object({
  shift: ['shift', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return shiftSchema;
  }))],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var deleteBreakTypeResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var deleteShiftResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var getBreakTypeResponseSchema = /*#__PURE__*/schema.object({
  breakType: ['break_type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return breakTypeSchema;
  }))],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var employeeWageSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  employeeId: ['employee_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  title: ['title', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  hourlyRate: ['hourly_rate', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))]
});

var getEmployeeWageResponseSchema = /*#__PURE__*/schema.object({
  employeeWage: ['employee_wage', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return employeeWageSchema;
  }))],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var getShiftResponseSchema = /*#__PURE__*/schema.object({
  shift: ['shift', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return shiftSchema;
  }))],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var teamMemberWageSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  teamMemberId: ['team_member_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  title: ['title', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  hourlyRate: ['hourly_rate', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))]
});

var getTeamMemberWageResponseSchema = /*#__PURE__*/schema.object({
  teamMemberWage: ['team_member_wage', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return teamMemberWageSchema;
  }))],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var listBreakTypesResponseSchema = /*#__PURE__*/schema.object({
  breakTypes: ['break_types', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return breakTypeSchema;
  })))],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var listEmployeeWagesResponseSchema = /*#__PURE__*/schema.object({
  employeeWages: ['employee_wages', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return employeeWageSchema;
  })))],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var listTeamMemberWagesResponseSchema = /*#__PURE__*/schema.object({
  teamMemberWages: ['team_member_wages', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return teamMemberWageSchema;
  })))],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var workweekConfigSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  startOfWeek: ['start_of_week', /*#__PURE__*/schema.string()],
  startOfDayLocalTime: ['start_of_day_local_time', /*#__PURE__*/schema.string()],
  version: ['version', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  createdAt: ['created_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  updatedAt: ['updated_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var listWorkweekConfigsResponseSchema = /*#__PURE__*/schema.object({
  workweekConfigs: ['workweek_configs', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return workweekConfigSchema;
  })))],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var dateRangeSchema = /*#__PURE__*/schema.object({
  startDate: ['start_date', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  endDate: ['end_date', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var shiftWorkdaySchema = /*#__PURE__*/schema.object({
  dateRange: ['date_range', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return dateRangeSchema;
  }))],
  matchShiftsBy: ['match_shifts_by', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  defaultTimezone: ['default_timezone', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var shiftFilterSchema = /*#__PURE__*/schema.object({
  locationIds: ['location_ids', /*#__PURE__*/schema.array( /*#__PURE__*/schema.string())],
  employeeIds: ['employee_ids', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  status: ['status', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  start: ['start', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return timeRangeSchema;
  }))],
  end: ['end', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return timeRangeSchema;
  }))],
  workday: ['workday', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return shiftWorkdaySchema;
  }))],
  teamMemberIds: ['team_member_ids', /*#__PURE__*/schema.array( /*#__PURE__*/schema.string())]
});

var shiftSortSchema = /*#__PURE__*/schema.object({
  field: ['field', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  order: ['order', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var shiftQuerySchema = /*#__PURE__*/schema.object({
  filter: ['filter', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return shiftFilterSchema;
  }))],
  sort: ['sort', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return shiftSortSchema;
  }))]
});

var searchShiftsRequestSchema = /*#__PURE__*/schema.object({
  query: ['query', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return shiftQuerySchema;
  }))],
  limit: ['limit', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var searchShiftsResponseSchema = /*#__PURE__*/schema.object({
  shifts: ['shifts', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return shiftSchema;
  })))],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var updateBreakTypeRequestSchema = /*#__PURE__*/schema.object({
  breakType: ['break_type', /*#__PURE__*/schema.lazy(function () {
    return breakTypeSchema;
  })]
});

var updateBreakTypeResponseSchema = /*#__PURE__*/schema.object({
  breakType: ['break_type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return breakTypeSchema;
  }))],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var updateShiftRequestSchema = /*#__PURE__*/schema.object({
  shift: ['shift', /*#__PURE__*/schema.lazy(function () {
    return shiftSchema;
  })]
});

var updateShiftResponseSchema = /*#__PURE__*/schema.object({
  shift: ['shift', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return shiftSchema;
  }))],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var updateWorkweekConfigRequestSchema = /*#__PURE__*/schema.object({
  workweekConfig: ['workweek_config', /*#__PURE__*/schema.lazy(function () {
    return workweekConfigSchema;
  })]
});

var updateWorkweekConfigResponseSchema = /*#__PURE__*/schema.object({
  workweekConfig: ['workweek_config', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return workweekConfigSchema;
  }))],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

function _templateObject9() {
  var data = _taggedTemplateLiteralLoose(["/v2/labor/workweek-configs/", ""]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8$1() {
  var data = _taggedTemplateLiteralLoose(["/v2/labor/team-member-wages/", ""]);

  _templateObject8$1 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$2() {
  var data = _taggedTemplateLiteralLoose(["/v2/labor/shifts/", ""]);

  _templateObject7$2 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$2() {
  var data = _taggedTemplateLiteralLoose(["/v2/labor/shifts/", ""]);

  _templateObject6$2 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$3() {
  var data = _taggedTemplateLiteralLoose(["/v2/labor/shifts/", ""]);

  _templateObject5$3 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$4() {
  var data = _taggedTemplateLiteralLoose(["/v2/labor/employee-wages/", ""]);

  _templateObject4$4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$6() {
  var data = _taggedTemplateLiteralLoose(["/v2/labor/break-types/", ""]);

  _templateObject3$6 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$9() {
  var data = _taggedTemplateLiteralLoose(["/v2/labor/break-types/", ""]);

  _templateObject2$9 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$d() {
  var data = _taggedTemplateLiteralLoose(["/v2/labor/break-types/", ""]);

  _templateObject$d = function _templateObject() {
    return data;
  };

  return data;
}
var LaborApi = /*#__PURE__*/function (_BaseApi) {
  _inheritsLoose(LaborApi, _BaseApi);

  function LaborApi() {
    return _BaseApi.apply(this, arguments) || this;
  }

  var _proto = LaborApi.prototype;

  /**
   * Returns a paginated list of `BreakType` instances for a business.
   *
   * @param locationId  Filter Break Types returned to only those that are associated with the specified
   *                              location.
   * @param limit       Maximum number of Break Types to return per page. Can range between 1 and 200. The
   *                              default is the maximum at 200.
   * @param cursor      Pointer to the next page of Break Type results to fetch.
   * @return Response from the API call
   */
  _proto.listBreakTypes =
  /*#__PURE__*/
  function () {
    var _listBreakTypes = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(locationId, limit, cursor, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = this.createRequest('GET', '/v2/labor/break-types');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.optional(schema.string())],
                limit: [limit, schema.optional(schema.number())],
                cursor: [cursor, schema.optional(schema.string())]
              });
              req.query('location_id', mapped.locationId);
              req.query('limit', mapped.limit);
              req.query('cursor', mapped.cursor);
              return _context.abrupt("return", req.callAsJson(listBreakTypesResponseSchema, requestOptions));

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function listBreakTypes(_x, _x2, _x3, _x4) {
      return _listBreakTypes.apply(this, arguments);
    }

    return listBreakTypes;
  }()
  /**
   * Creates a new `BreakType`.
   *
   * A `BreakType` is a template for creating `Break` objects.
   * You must provide the following values in your request to this
   * endpoint:
   *
   * - `location_id`
   * - `break_name`
   * - `expected_duration`
   * - `is_paid`
   *
   * You can only have 3 `BreakType` instances per location. If you attempt to add a 4th
   * `BreakType` for a location, an `INVALID_REQUEST_ERROR` "Exceeded limit of 3 breaks per location."
   * is returned.
   *
   * @param body An object containing the fields to POST for the request.  See the
   *                                              corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.createBreakType =
  /*#__PURE__*/
  function () {
    var _createBreakType = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req = this.createRequest('POST', '/v2/labor/break-types');
              mapped = req.prepareArgs({
                body: [body, createBreakTypeRequestSchema]
              });
              req.json(mapped.body);
              return _context2.abrupt("return", req.callAsJson(createBreakTypeResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function createBreakType(_x5, _x6) {
      return _createBreakType.apply(this, arguments);
    }

    return createBreakType;
  }()
  /**
   * Deletes an existing `BreakType`.
   *
   * A `BreakType` can be deleted even if it is referenced from a `Shift`.
   *
   * @param id UUID for the `BreakType` being deleted.
   * @return Response from the API call
   */
  ;

  _proto.deleteBreakType =
  /*#__PURE__*/
  function () {
    var _deleteBreakType = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(id, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              req = this.createRequest('DELETE');
              mapped = req.prepareArgs({
                id: [id, schema.string()]
              });
              req.appendTemplatePath(_templateObject$d(), mapped.id);
              return _context3.abrupt("return", req.callAsJson(deleteBreakTypeResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function deleteBreakType(_x7, _x8) {
      return _deleteBreakType.apply(this, arguments);
    }

    return deleteBreakType;
  }()
  /**
   * Returns a single `BreakType` specified by id.
   *
   * @param id UUID for the `BreakType` being retrieved.
   * @return Response from the API call
   */
  ;

  _proto.getBreakType =
  /*#__PURE__*/
  function () {
    var _getBreakType = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(id, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                id: [id, schema.string()]
              });
              req.appendTemplatePath(_templateObject2$9(), mapped.id);
              return _context4.abrupt("return", req.callAsJson(getBreakTypeResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function getBreakType(_x9, _x10) {
      return _getBreakType.apply(this, arguments);
    }

    return getBreakType;
  }()
  /**
   * Updates an existing `BreakType`.
   *
   * @param id   UUID for the `BreakType` being updated.
   * @param body An object containing the fields to POST for the request.  See the
   *                                              corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.updateBreakType =
  /*#__PURE__*/
  function () {
    var _updateBreakType = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5(id, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              req = this.createRequest('PUT');
              mapped = req.prepareArgs({
                id: [id, schema.string()],
                body: [body, updateBreakTypeRequestSchema]
              });
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject3$6(), mapped.id);
              return _context5.abrupt("return", req.callAsJson(updateBreakTypeResponseSchema, requestOptions));

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function updateBreakType(_x11, _x12, _x13) {
      return _updateBreakType.apply(this, arguments);
    }

    return updateBreakType;
  }()
  /**
   * Returns a paginated list of `EmployeeWage` instances for a business.
   *
   * @param employeeId  Filter wages returned to only those that are associated with the specified employee.
   * @param limit       Maximum number of Employee Wages to return per page. Can range between 1 and 200.
   *                              The default is the maximum at 200.
   * @param cursor      Pointer to the next page of Employee Wage results to fetch.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.listEmployeeWages =
  /*#__PURE__*/
  function () {
    var _listEmployeeWages = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee6(employeeId, limit, cursor, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              req = this.createRequest('GET', '/v2/labor/employee-wages');
              mapped = req.prepareArgs({
                employeeId: [employeeId, schema.optional(schema.string())],
                limit: [limit, schema.optional(schema.number())],
                cursor: [cursor, schema.optional(schema.string())]
              });
              req.query('employee_id', mapped.employeeId);
              req.query('limit', mapped.limit);
              req.query('cursor', mapped.cursor);
              req.deprecated('LaborApi.listEmployeeWages');
              return _context6.abrupt("return", req.callAsJson(listEmployeeWagesResponseSchema, requestOptions));

            case 7:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function listEmployeeWages(_x14, _x15, _x16, _x17) {
      return _listEmployeeWages.apply(this, arguments);
    }

    return listEmployeeWages;
  }()
  /**
   * Returns a single `EmployeeWage` specified by id.
   *
   * @param id UUID for the `EmployeeWage` being retrieved.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.getEmployeeWage =
  /*#__PURE__*/
  function () {
    var _getEmployeeWage = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee7(id, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                id: [id, schema.string()]
              });
              req.appendTemplatePath(_templateObject4$4(), mapped.id);
              req.deprecated('LaborApi.getEmployeeWage');
              return _context7.abrupt("return", req.callAsJson(getEmployeeWageResponseSchema, requestOptions));

            case 5:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function getEmployeeWage(_x18, _x19) {
      return _getEmployeeWage.apply(this, arguments);
    }

    return getEmployeeWage;
  }()
  /**
   * Creates a new `Shift`.
   *
   * A `Shift` represents a complete work day for a single employee.
   * You must provide the following values in your request to this
   * endpoint:
   *
   * - `location_id`
   * - `employee_id`
   * - `start_at`
   *
   * An attempt to create a new `Shift` can result in a `BAD_REQUEST` error when:
   * - The `status` of the new `Shift` is `OPEN` and the employee has another
   * shift with an `OPEN` status.
   * - The `start_at` date is in the future
   * - the `start_at` or `end_at` overlaps another shift for the same employee
   * - If `Break`s are set in the request, a break `start_at`
   * must not be before the `Shift.start_at`. A break `end_at` must not be after
   * the `Shift.end_at`
   *
   * @param body An object containing the fields to POST for the request.  See the
   *                                          corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.createShift =
  /*#__PURE__*/
  function () {
    var _createShift = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee8(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              req = this.createRequest('POST', '/v2/labor/shifts');
              mapped = req.prepareArgs({
                body: [body, createShiftRequestSchema]
              });
              req.json(mapped.body);
              return _context8.abrupt("return", req.callAsJson(createShiftResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function createShift(_x20, _x21) {
      return _createShift.apply(this, arguments);
    }

    return createShift;
  }()
  /**
   * Returns a paginated list of `Shift` records for a business.
   * The list to be returned can be filtered by:
   * - Location IDs **and**
   * - employee IDs **and**
   * - shift status (`OPEN`, `CLOSED`) **and**
   * - shift start **and**
   * - shift end **and**
   * - work day details
   *
   * The list can be sorted by:
   * - `start_at`
   * - `end_at`
   * - `created_at`
   * - `updated_at`
   *
   * @param body An object containing the fields to POST for the request.  See the
   *                                           corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.searchShifts =
  /*#__PURE__*/
  function () {
    var _searchShifts = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee9(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              req = this.createRequest('POST', '/v2/labor/shifts/search');
              mapped = req.prepareArgs({
                body: [body, searchShiftsRequestSchema]
              });
              req.json(mapped.body);
              return _context9.abrupt("return", req.callAsJson(searchShiftsResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this);
    }));

    function searchShifts(_x22, _x23) {
      return _searchShifts.apply(this, arguments);
    }

    return searchShifts;
  }()
  /**
   * Deletes a `Shift`.
   *
   * @param id UUID for the `Shift` being deleted.
   * @return Response from the API call
   */
  ;

  _proto.deleteShift =
  /*#__PURE__*/
  function () {
    var _deleteShift = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee10(id, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              req = this.createRequest('DELETE');
              mapped = req.prepareArgs({
                id: [id, schema.string()]
              });
              req.appendTemplatePath(_templateObject5$3(), mapped.id);
              return _context10.abrupt("return", req.callAsJson(deleteShiftResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, this);
    }));

    function deleteShift(_x24, _x25) {
      return _deleteShift.apply(this, arguments);
    }

    return deleteShift;
  }()
  /**
   * Returns a single `Shift` specified by id.
   *
   * @param id UUID for the `Shift` being retrieved.
   * @return Response from the API call
   */
  ;

  _proto.getShift =
  /*#__PURE__*/
  function () {
    var _getShift = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee11(id, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                id: [id, schema.string()]
              });
              req.appendTemplatePath(_templateObject6$2(), mapped.id);
              return _context11.abrupt("return", req.callAsJson(getShiftResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, this);
    }));

    function getShift(_x26, _x27) {
      return _getShift.apply(this, arguments);
    }

    return getShift;
  }()
  /**
   * Updates an existing `Shift`.
   *
   * When adding a `Break` to a `Shift`, any earlier `Breaks` in the `Shift` have
   * the `end_at` property set to a valid RFC-3339 datetime string.
   *
   * When closing a `Shift`, all `Break` instances in the shift must be complete with `end_at`
   * set on each `Break`.
   *
   * @param id   ID of the object being updated.
   * @param body An object containing the fields to POST for the request.  See the
   *                                          corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.updateShift =
  /*#__PURE__*/
  function () {
    var _updateShift = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee12(id, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              req = this.createRequest('PUT');
              mapped = req.prepareArgs({
                id: [id, schema.string()],
                body: [body, updateShiftRequestSchema]
              });
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject7$2(), mapped.id);
              return _context12.abrupt("return", req.callAsJson(updateShiftResponseSchema, requestOptions));

            case 5:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, this);
    }));

    function updateShift(_x28, _x29, _x30) {
      return _updateShift.apply(this, arguments);
    }

    return updateShift;
  }()
  /**
   * Returns a paginated list of `TeamMemberWage` instances for a business.
   *
   * @param teamMemberId   Filter wages returned to only those that are associated with the specified team
   *                                 member.
   * @param limit          Maximum number of Team Member Wages to return per page. Can range between 1 and
   *                                 200. The default is the maximum at 200.
   * @param cursor         Pointer to the next page of Employee Wage results to fetch.
   * @return Response from the API call
   */
  ;

  _proto.listTeamMemberWages =
  /*#__PURE__*/
  function () {
    var _listTeamMemberWages = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee13(teamMemberId, limit, cursor, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              req = this.createRequest('GET', '/v2/labor/team-member-wages');
              mapped = req.prepareArgs({
                teamMemberId: [teamMemberId, schema.optional(schema.string())],
                limit: [limit, schema.optional(schema.number())],
                cursor: [cursor, schema.optional(schema.string())]
              });
              req.query('team_member_id', mapped.teamMemberId);
              req.query('limit', mapped.limit);
              req.query('cursor', mapped.cursor);
              return _context13.abrupt("return", req.callAsJson(listTeamMemberWagesResponseSchema, requestOptions));

            case 6:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13, this);
    }));

    function listTeamMemberWages(_x31, _x32, _x33, _x34) {
      return _listTeamMemberWages.apply(this, arguments);
    }

    return listTeamMemberWages;
  }()
  /**
   * Returns a single `TeamMemberWage` specified by id.
   *
   * @param id UUID for the `TeamMemberWage` being retrieved.
   * @return Response from the API call
   */
  ;

  _proto.getTeamMemberWage =
  /*#__PURE__*/
  function () {
    var _getTeamMemberWage = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee14(id, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                id: [id, schema.string()]
              });
              req.appendTemplatePath(_templateObject8$1(), mapped.id);
              return _context14.abrupt("return", req.callAsJson(getTeamMemberWageResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14, this);
    }));

    function getTeamMemberWage(_x35, _x36) {
      return _getTeamMemberWage.apply(this, arguments);
    }

    return getTeamMemberWage;
  }()
  /**
   * Returns a list of `WorkweekConfig` instances for a business.
   *
   * @param limit  Maximum number of Workweek Configs to return per page.
   * @param cursor Pointer to the next page of Workweek Config results to fetch.
   * @return Response from the API call
   */
  ;

  _proto.listWorkweekConfigs =
  /*#__PURE__*/
  function () {
    var _listWorkweekConfigs = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee15(limit, cursor, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              req = this.createRequest('GET', '/v2/labor/workweek-configs');
              mapped = req.prepareArgs({
                limit: [limit, schema.optional(schema.number())],
                cursor: [cursor, schema.optional(schema.string())]
              });
              req.query('limit', mapped.limit);
              req.query('cursor', mapped.cursor);
              return _context15.abrupt("return", req.callAsJson(listWorkweekConfigsResponseSchema, requestOptions));

            case 5:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15, this);
    }));

    function listWorkweekConfigs(_x37, _x38, _x39) {
      return _listWorkweekConfigs.apply(this, arguments);
    }

    return listWorkweekConfigs;
  }()
  /**
   * Updates a `WorkweekConfig`.
   *
   * @param id   UUID for the `WorkweekConfig` object being updated.
   * @param body An object containing the fields to POST for the request.  See
   *                                                   the corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.updateWorkweekConfig =
  /*#__PURE__*/
  function () {
    var _updateWorkweekConfig = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee16(id, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              req = this.createRequest('PUT');
              mapped = req.prepareArgs({
                id: [id, schema.string()],
                body: [body, updateWorkweekConfigRequestSchema]
              });
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject9(), mapped.id);
              return _context16.abrupt("return", req.callAsJson(updateWorkweekConfigResponseSchema, requestOptions));

            case 5:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16, this);
    }));

    function updateWorkweekConfig(_x40, _x41, _x42) {
      return _updateWorkweekConfig.apply(this, arguments);
    }

    return updateWorkweekConfig;
  }();

  return LaborApi;
}(BaseApi);

var businessHoursPeriodSchema = /*#__PURE__*/schema.object({
  dayOfWeek: ['day_of_week', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  startLocalTime: ['start_local_time', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  endLocalTime: ['end_local_time', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var businessHoursSchema = /*#__PURE__*/schema.object({
  periods: ['periods', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return businessHoursPeriodSchema;
  })))]
});

var coordinatesSchema = /*#__PURE__*/schema.object({
  latitude: ['latitude', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  longitude: ['longitude', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())]
});

var locationSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  address: ['address', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return addressSchema;
  }))],
  timezone: ['timezone', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  capabilities: ['capabilities', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  status: ['status', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  createdAt: ['created_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  merchantId: ['merchant_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  country: ['country', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  languageCode: ['language_code', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  currency: ['currency', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  phoneNumber: ['phone_number', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  businessName: ['business_name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  type: ['type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  websiteUrl: ['website_url', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  businessHours: ['business_hours', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return businessHoursSchema;
  }))],
  businessEmail: ['business_email', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  description: ['description', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  twitterUsername: ['twitter_username', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  instagramUsername: ['instagram_username', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  facebookUrl: ['facebook_url', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  coordinates: ['coordinates', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return coordinatesSchema;
  }))],
  logoUrl: ['logo_url', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  posBackgroundUrl: ['pos_background_url', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  mcc: ['mcc', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  fullFormatLogoUrl: ['full_format_logo_url', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var createLocationRequestSchema = /*#__PURE__*/schema.object({
  location: ['location', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return locationSchema;
  }))]
});

var createLocationResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  location: ['location', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return locationSchema;
  }))]
});

var listLocationsResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  locations: ['locations', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return locationSchema;
  })))]
});

var retrieveLocationResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  location: ['location', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return locationSchema;
  }))]
});

var updateLocationRequestSchema = /*#__PURE__*/schema.object({
  location: ['location', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return locationSchema;
  }))]
});

var updateLocationResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  location: ['location', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return locationSchema;
  }))]
});

function _templateObject2$a() {
  var data = _taggedTemplateLiteralLoose(["/v2/locations/", ""]);

  _templateObject2$a = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$e() {
  var data = _taggedTemplateLiteralLoose(["/v2/locations/", ""]);

  _templateObject$e = function _templateObject() {
    return data;
  };

  return data;
}
var LocationsApi = /*#__PURE__*/function (_BaseApi) {
  _inheritsLoose(LocationsApi, _BaseApi);

  function LocationsApi() {
    return _BaseApi.apply(this, arguments) || this;
  }

  var _proto = LocationsApi.prototype;

  /**
   * Provides information of all locations of a business.
   *
   * Many Square API endpoints require a `location_id` parameter.
   * The `id` field of the [`Location`](#type-location) objects returned by this
   * endpoint correspond to that `location_id` parameter.
   *
   * @return Response from the API call
   */
  _proto.listLocations =
  /*#__PURE__*/
  function () {
    var _listLocations = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(requestOptions) {
      var req;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = this.createRequest('GET', '/v2/locations');
              return _context.abrupt("return", req.callAsJson(listLocationsResponseSchema, requestOptions));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function listLocations(_x) {
      return _listLocations.apply(this, arguments);
    }

    return listLocations;
  }()
  /**
   * Creates a location.
   *
   * @param body An object containing the fields to POST for the request.  See the
   *                                             corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.createLocation =
  /*#__PURE__*/
  function () {
    var _createLocation = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req = this.createRequest('POST', '/v2/locations');
              mapped = req.prepareArgs({
                body: [body, createLocationRequestSchema]
              });
              req.json(mapped.body);
              return _context2.abrupt("return", req.callAsJson(createLocationResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function createLocation(_x2, _x3) {
      return _createLocation.apply(this, arguments);
    }

    return createLocation;
  }()
  /**
   * Retrieves details of a location. You can specify "main"
   * as the location ID to retrieve details of the
   * main location.
   *
   * @param locationId  The ID of the location to retrieve. If you specify the string "main", then the
   *                              endpoint returns the main location.
   * @return Response from the API call
   */
  ;

  _proto.retrieveLocation =
  /*#__PURE__*/
  function () {
    var _retrieveLocation = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(locationId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()]
              });
              req.appendTemplatePath(_templateObject$e(), mapped.locationId);
              return _context3.abrupt("return", req.callAsJson(retrieveLocationResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function retrieveLocation(_x4, _x5) {
      return _retrieveLocation.apply(this, arguments);
    }

    return retrieveLocation;
  }()
  /**
   * Updates a location.
   *
   * @param locationId  The ID of the location to update.
   * @param body        An object containing the fields to POST for the request.  See
   *                                                    the corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.updateLocation =
  /*#__PURE__*/
  function () {
    var _updateLocation = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(locationId, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              req = this.createRequest('PUT');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                body: [body, updateLocationRequestSchema]
              });
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject2$a(), mapped.locationId);
              return _context4.abrupt("return", req.callAsJson(updateLocationResponseSchema, requestOptions));

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function updateLocation(_x6, _x7, _x8) {
      return _updateLocation.apply(this, arguments);
    }

    return updateLocation;
  }();

  return LocationsApi;
}(BaseApi);

var loyaltyEventAccumulatePointsSchema = /*#__PURE__*/schema.object({
  loyaltyProgramId: ['loyalty_program_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  points: ['points', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  orderId: ['order_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var accumulateLoyaltyPointsRequestSchema = /*#__PURE__*/schema.object({
  accumulatePoints: ['accumulate_points', /*#__PURE__*/schema.lazy(function () {
    return loyaltyEventAccumulatePointsSchema;
  })],
  idempotencyKey: ['idempotency_key', /*#__PURE__*/schema.string()],
  locationId: ['location_id', /*#__PURE__*/schema.string()]
});

var loyaltyEventAdjustPointsSchema = /*#__PURE__*/schema.object({
  loyaltyProgramId: ['loyalty_program_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  points: ['points', /*#__PURE__*/schema.number()],
  reason: ['reason', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var loyaltyEventCreateRewardSchema = /*#__PURE__*/schema.object({
  loyaltyProgramId: ['loyalty_program_id', /*#__PURE__*/schema.string()],
  rewardId: ['reward_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  points: ['points', /*#__PURE__*/schema.number()]
});

var loyaltyEventDeleteRewardSchema = /*#__PURE__*/schema.object({
  loyaltyProgramId: ['loyalty_program_id', /*#__PURE__*/schema.string()],
  rewardId: ['reward_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  points: ['points', /*#__PURE__*/schema.number()]
});

var loyaltyEventExpirePointsSchema = /*#__PURE__*/schema.object({
  loyaltyProgramId: ['loyalty_program_id', /*#__PURE__*/schema.string()],
  points: ['points', /*#__PURE__*/schema.number()]
});

var loyaltyEventOtherSchema = /*#__PURE__*/schema.object({
  loyaltyProgramId: ['loyalty_program_id', /*#__PURE__*/schema.string()],
  points: ['points', /*#__PURE__*/schema.number()]
});

var loyaltyEventRedeemRewardSchema = /*#__PURE__*/schema.object({
  loyaltyProgramId: ['loyalty_program_id', /*#__PURE__*/schema.string()],
  rewardId: ['reward_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  orderId: ['order_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var loyaltyEventSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.string()],
  type: ['type', /*#__PURE__*/schema.string()],
  createdAt: ['created_at', /*#__PURE__*/schema.string()],
  accumulatePoints: ['accumulate_points', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return loyaltyEventAccumulatePointsSchema;
  }))],
  createReward: ['create_reward', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return loyaltyEventCreateRewardSchema;
  }))],
  redeemReward: ['redeem_reward', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return loyaltyEventRedeemRewardSchema;
  }))],
  deleteReward: ['delete_reward', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return loyaltyEventDeleteRewardSchema;
  }))],
  adjustPoints: ['adjust_points', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return loyaltyEventAdjustPointsSchema;
  }))],
  loyaltyAccountId: ['loyalty_account_id', /*#__PURE__*/schema.string()],
  locationId: ['location_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  source: ['source', /*#__PURE__*/schema.string()],
  expirePoints: ['expire_points', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return loyaltyEventExpirePointsSchema;
  }))],
  otherEvent: ['other_event', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return loyaltyEventOtherSchema;
  }))]
});

var accumulateLoyaltyPointsResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  event: ['event', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return loyaltyEventSchema;
  }))]
});

var adjustLoyaltyPointsRequestSchema = /*#__PURE__*/schema.object({
  idempotencyKey: ['idempotency_key', /*#__PURE__*/schema.string()],
  adjustPoints: ['adjust_points', /*#__PURE__*/schema.lazy(function () {
    return loyaltyEventAdjustPointsSchema;
  })]
});

var adjustLoyaltyPointsResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  event: ['event', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return loyaltyEventSchema;
  }))]
});

var calculateLoyaltyPointsRequestSchema = /*#__PURE__*/schema.object({
  orderId: ['order_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  transactionAmountMoney: ['transaction_amount_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))]
});

var calculateLoyaltyPointsResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  points: ['points', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())]
});

var loyaltyAccountMappingSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  type: ['type', /*#__PURE__*/schema.string()],
  value: ['value', /*#__PURE__*/schema.string()],
  createdAt: ['created_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var loyaltyAccountSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  mappings: ['mappings', /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return loyaltyAccountMappingSchema;
  }))],
  programId: ['program_id', /*#__PURE__*/schema.string()],
  balance: ['balance', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  lifetimePoints: ['lifetime_points', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  customerId: ['customer_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  enrolledAt: ['enrolled_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  createdAt: ['created_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  updatedAt: ['updated_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var createLoyaltyAccountRequestSchema = /*#__PURE__*/schema.object({
  loyaltyAccount: ['loyalty_account', /*#__PURE__*/schema.lazy(function () {
    return loyaltyAccountSchema;
  })],
  idempotencyKey: ['idempotency_key', /*#__PURE__*/schema.string()]
});

var createLoyaltyAccountResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  loyaltyAccount: ['loyalty_account', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return loyaltyAccountSchema;
  }))]
});

var loyaltyRewardSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  status: ['status', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  loyaltyAccountId: ['loyalty_account_id', /*#__PURE__*/schema.string()],
  rewardTierId: ['reward_tier_id', /*#__PURE__*/schema.string()],
  points: ['points', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  orderId: ['order_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  createdAt: ['created_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  updatedAt: ['updated_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  redeemedAt: ['redeemed_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var createLoyaltyRewardRequestSchema = /*#__PURE__*/schema.object({
  reward: ['reward', /*#__PURE__*/schema.lazy(function () {
    return loyaltyRewardSchema;
  })],
  idempotencyKey: ['idempotency_key', /*#__PURE__*/schema.string()]
});

var createLoyaltyRewardResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  reward: ['reward', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return loyaltyRewardSchema;
  }))]
});

var deleteLoyaltyRewardResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var loyaltyProgramAccrualRuleSchema = /*#__PURE__*/schema.object({
  accrualType: ['accrual_type', /*#__PURE__*/schema.string()],
  points: ['points', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  visitMinimumAmountMoney: ['visit_minimum_amount_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  spendAmountMoney: ['spend_amount_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  catalogObjectId: ['catalog_object_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var loyaltyProgramExpirationPolicySchema = /*#__PURE__*/schema.object({
  expirationDuration: ['expiration_duration', /*#__PURE__*/schema.string()]
});

var loyaltyProgramRewardDefinitionSchema = /*#__PURE__*/schema.object({
  scope: ['scope', /*#__PURE__*/schema.string()],
  discountType: ['discount_type', /*#__PURE__*/schema.string()],
  percentageDiscount: ['percentage_discount', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  catalogObjectIds: ['catalog_object_ids', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  fixedDiscountMoney: ['fixed_discount_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  maxDiscountMoney: ['max_discount_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))]
});

var loyaltyProgramRewardTierSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.string()],
  points: ['points', /*#__PURE__*/schema.number()],
  name: ['name', /*#__PURE__*/schema.string()],
  definition: ['definition', /*#__PURE__*/schema.lazy(function () {
    return loyaltyProgramRewardDefinitionSchema;
  })],
  createdAt: ['created_at', /*#__PURE__*/schema.string()]
});

var loyaltyProgramTerminologySchema = /*#__PURE__*/schema.object({
  one: ['one', /*#__PURE__*/schema.string()],
  other: ['other', /*#__PURE__*/schema.string()]
});

var loyaltyProgramSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.string()],
  status: ['status', /*#__PURE__*/schema.string()],
  rewardTiers: ['reward_tiers', /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return loyaltyProgramRewardTierSchema;
  }))],
  expirationPolicy: ['expiration_policy', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return loyaltyProgramExpirationPolicySchema;
  }))],
  terminology: ['terminology', /*#__PURE__*/schema.lazy(function () {
    return loyaltyProgramTerminologySchema;
  })],
  locationIds: ['location_ids', /*#__PURE__*/schema.array( /*#__PURE__*/schema.string())],
  createdAt: ['created_at', /*#__PURE__*/schema.string()],
  updatedAt: ['updated_at', /*#__PURE__*/schema.string()],
  accrualRules: ['accrual_rules', /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return loyaltyProgramAccrualRuleSchema;
  }))]
});

var listLoyaltyProgramsResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  programs: ['programs', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return loyaltyProgramSchema;
  })))]
});

var redeemLoyaltyRewardRequestSchema = /*#__PURE__*/schema.object({
  idempotencyKey: ['idempotency_key', /*#__PURE__*/schema.string()],
  locationId: ['location_id', /*#__PURE__*/schema.string()]
});

var redeemLoyaltyRewardResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  event: ['event', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return loyaltyEventSchema;
  }))]
});

var retrieveLoyaltyAccountResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  loyaltyAccount: ['loyalty_account', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return loyaltyAccountSchema;
  }))]
});

var retrieveLoyaltyRewardResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  reward: ['reward', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return loyaltyRewardSchema;
  }))]
});

var searchLoyaltyAccountsRequestLoyaltyAccountQuerySchema = /*#__PURE__*/schema.object({
  mappings: ['mappings', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return loyaltyAccountMappingSchema;
  })))],
  customerIds: ['customer_ids', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))]
});

var searchLoyaltyAccountsRequestSchema = /*#__PURE__*/schema.object({
  query: ['query', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return searchLoyaltyAccountsRequestLoyaltyAccountQuerySchema;
  }))],
  limit: ['limit', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var searchLoyaltyAccountsResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  loyaltyAccounts: ['loyalty_accounts', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return loyaltyAccountSchema;
  })))],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var loyaltyEventDateTimeFilterSchema = /*#__PURE__*/schema.object({
  createdAt: ['created_at', /*#__PURE__*/schema.lazy(function () {
    return timeRangeSchema;
  })]
});

var loyaltyEventLocationFilterSchema = /*#__PURE__*/schema.object({
  locationIds: ['location_ids', /*#__PURE__*/schema.array( /*#__PURE__*/schema.string())]
});

var loyaltyEventLoyaltyAccountFilterSchema = /*#__PURE__*/schema.object({
  loyaltyAccountId: ['loyalty_account_id', /*#__PURE__*/schema.string()]
});

var loyaltyEventOrderFilterSchema = /*#__PURE__*/schema.object({
  orderId: ['order_id', /*#__PURE__*/schema.string()]
});

var loyaltyEventTypeFilterSchema = /*#__PURE__*/schema.object({
  types: ['types', /*#__PURE__*/schema.array( /*#__PURE__*/schema.string())]
});

var loyaltyEventFilterSchema = /*#__PURE__*/schema.object({
  loyaltyAccountFilter: ['loyalty_account_filter', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return loyaltyEventLoyaltyAccountFilterSchema;
  }))],
  typeFilter: ['type_filter', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return loyaltyEventTypeFilterSchema;
  }))],
  dateTimeFilter: ['date_time_filter', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return loyaltyEventDateTimeFilterSchema;
  }))],
  locationFilter: ['location_filter', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return loyaltyEventLocationFilterSchema;
  }))],
  orderFilter: ['order_filter', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return loyaltyEventOrderFilterSchema;
  }))]
});

var loyaltyEventQuerySchema = /*#__PURE__*/schema.object({
  filter: ['filter', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return loyaltyEventFilterSchema;
  }))]
});

var searchLoyaltyEventsRequestSchema = /*#__PURE__*/schema.object({
  query: ['query', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return loyaltyEventQuerySchema;
  }))],
  limit: ['limit', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var searchLoyaltyEventsResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  events: ['events', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return loyaltyEventSchema;
  })))],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var searchLoyaltyRewardsRequestLoyaltyRewardQuerySchema = /*#__PURE__*/schema.object({
  loyaltyAccountId: ['loyalty_account_id', /*#__PURE__*/schema.string()],
  status: ['status', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var searchLoyaltyRewardsRequestSchema = /*#__PURE__*/schema.object({
  query: ['query', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return searchLoyaltyRewardsRequestLoyaltyRewardQuerySchema;
  }))],
  limit: ['limit', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var searchLoyaltyRewardsResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  rewards: ['rewards', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return loyaltyRewardSchema;
  })))],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

function _templateObject7$3() {
  var data = _taggedTemplateLiteralLoose(["/v2/loyalty/rewards/", "/redeem"]);

  _templateObject7$3 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$3() {
  var data = _taggedTemplateLiteralLoose(["/v2/loyalty/rewards/", ""]);

  _templateObject6$3 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$4() {
  var data = _taggedTemplateLiteralLoose(["/v2/loyalty/rewards/", ""]);

  _templateObject5$4 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$5() {
  var data = _taggedTemplateLiteralLoose(["/v2/loyalty/programs/", "/calculate"]);

  _templateObject4$5 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$7() {
  var data = _taggedTemplateLiteralLoose(["/v2/loyalty/accounts/", "/adjust"]);

  _templateObject3$7 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$b() {
  var data = _taggedTemplateLiteralLoose(["/v2/loyalty/accounts/", "/accumulate"]);

  _templateObject2$b = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$f() {
  var data = _taggedTemplateLiteralLoose(["/v2/loyalty/accounts/", ""]);

  _templateObject$f = function _templateObject() {
    return data;
  };

  return data;
}
var LoyaltyApi = /*#__PURE__*/function (_BaseApi) {
  _inheritsLoose(LoyaltyApi, _BaseApi);

  function LoyaltyApi() {
    return _BaseApi.apply(this, arguments) || this;
  }

  var _proto = LoyaltyApi.prototype;

  /**
   * Creates a loyalty account.
   *
   * @param body An object containing the fields to POST for the request.  See
   *                                                   the corresponding object definition for field details.
   * @return Response from the API call
   */
  _proto.createLoyaltyAccount =
  /*#__PURE__*/
  function () {
    var _createLoyaltyAccount = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = this.createRequest('POST', '/v2/loyalty/accounts');
              mapped = req.prepareArgs({
                body: [body, createLoyaltyAccountRequestSchema]
              });
              req.json(mapped.body);
              return _context.abrupt("return", req.callAsJson(createLoyaltyAccountResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function createLoyaltyAccount(_x, _x2) {
      return _createLoyaltyAccount.apply(this, arguments);
    }

    return createLoyaltyAccount;
  }()
  /**
   * Searches for loyalty accounts in a loyalty program.
   *
   * You can search for a loyalty account using the phone number or customer ID associated with the
   * account. To return all loyalty accounts, specify an empty `query` object or omit it entirely.
   *
   * Search results are sorted by `created_at` in ascending order.
   *
   * @param body An object containing the fields to POST for the request.  See
   *                                                    the corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.searchLoyaltyAccounts =
  /*#__PURE__*/
  function () {
    var _searchLoyaltyAccounts = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req = this.createRequest('POST', '/v2/loyalty/accounts/search');
              mapped = req.prepareArgs({
                body: [body, searchLoyaltyAccountsRequestSchema]
              });
              req.json(mapped.body);
              return _context2.abrupt("return", req.callAsJson(searchLoyaltyAccountsResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function searchLoyaltyAccounts(_x3, _x4) {
      return _searchLoyaltyAccounts.apply(this, arguments);
    }

    return searchLoyaltyAccounts;
  }()
  /**
   * Retrieves a loyalty account.
   *
   * @param accountId  The ID of the [loyalty account](#type-LoyaltyAccount) to retrieve.
   * @return Response from the API call
   */
  ;

  _proto.retrieveLoyaltyAccount =
  /*#__PURE__*/
  function () {
    var _retrieveLoyaltyAccount = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(accountId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                accountId: [accountId, schema.string()]
              });
              req.appendTemplatePath(_templateObject$f(), mapped.accountId);
              return _context3.abrupt("return", req.callAsJson(retrieveLoyaltyAccountResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function retrieveLoyaltyAccount(_x5, _x6) {
      return _retrieveLoyaltyAccount.apply(this, arguments);
    }

    return retrieveLoyaltyAccount;
  }()
  /**
   * Adds points to a loyalty account.
   *
   * - If you are using the Orders API to manage orders, you only provide the `order_id`.
   * The endpoint reads the order to compute points to add to the buyer's account.
   * - If you are not using the Orders API to manage orders,
   * you first perform a client-side computation to compute the points.
   * For spend-based and visit-based programs, you can call
   * [CalculateLoyaltyPoints](#endpoint-Loyalty-CalculateLoyaltyPoints) to compute the points. For more
   * information,
   * see [Loyalty Program Overview](https://developer.squareup.com/docs/loyalty/overview).
   * You then provide the points in a request to this endpoint.
   *
   * @param accountId  The [loyalty account](#type-LoyaltyAccount) ID to
   *                                                            which to add the points.
   * @param body       An object containing the fields to POST for the
   *                                                            request.  See the corresponding object definition for
   *                                                            field details.
   * @return Response from the API call
   */
  ;

  _proto.accumulateLoyaltyPoints =
  /*#__PURE__*/
  function () {
    var _accumulateLoyaltyPoints = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(accountId, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              req = this.createRequest('POST');
              mapped = req.prepareArgs({
                accountId: [accountId, schema.string()],
                body: [body, accumulateLoyaltyPointsRequestSchema]
              });
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject2$b(), mapped.accountId);
              return _context4.abrupt("return", req.callAsJson(accumulateLoyaltyPointsResponseSchema, requestOptions));

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function accumulateLoyaltyPoints(_x7, _x8, _x9) {
      return _accumulateLoyaltyPoints.apply(this, arguments);
    }

    return accumulateLoyaltyPoints;
  }()
  /**
   * Adds points to or subtracts points from a buyer's account.
   *
   * Use this endpoint only when you need to manually adjust points. Otherwise, in your application flow,
   * you call
   * [AccumulateLoyaltyPoints](#endpoint-Loyalty-AccumulateLoyaltyPoints)
   * to add points when a buyer pays for the purchase.
   *
   * @param accountId  The ID of the [loyalty account](#type-LoyaltyAccount) in
   *                                                        which to adjust the points.
   * @param body       An object containing the fields to POST for the request.
   *                                                        See the corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.adjustLoyaltyPoints =
  /*#__PURE__*/
  function () {
    var _adjustLoyaltyPoints = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5(accountId, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              req = this.createRequest('POST');
              mapped = req.prepareArgs({
                accountId: [accountId, schema.string()],
                body: [body, adjustLoyaltyPointsRequestSchema]
              });
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject3$7(), mapped.accountId);
              return _context5.abrupt("return", req.callAsJson(adjustLoyaltyPointsResponseSchema, requestOptions));

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function adjustLoyaltyPoints(_x10, _x11, _x12) {
      return _adjustLoyaltyPoints.apply(this, arguments);
    }

    return adjustLoyaltyPoints;
  }()
  /**
   * Searches for loyalty events.
   *
   * A Square loyalty program maintains a ledger of events that occur during the lifetime of a
   * buyer's loyalty account. Each change in the point balance
   * (for example, points earned, points redeemed, and points expired) is
   * recorded in the ledger. Using this endpoint, you can search the ledger for events.
   *
   * @param body An object containing the fields to POST for the request.  See
   *                                                  the corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.searchLoyaltyEvents =
  /*#__PURE__*/
  function () {
    var _searchLoyaltyEvents = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee6(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              req = this.createRequest('POST', '/v2/loyalty/events/search');
              mapped = req.prepareArgs({
                body: [body, searchLoyaltyEventsRequestSchema]
              });
              req.json(mapped.body);
              return _context6.abrupt("return", req.callAsJson(searchLoyaltyEventsResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function searchLoyaltyEvents(_x13, _x14) {
      return _searchLoyaltyEvents.apply(this, arguments);
    }

    return searchLoyaltyEvents;
  }()
  /**
   * Returns a list of loyalty programs in the seller's account.
   * Currently, a seller can only have one loyalty program.
   *
   * @return Response from the API call
   */
  ;

  _proto.listLoyaltyPrograms =
  /*#__PURE__*/
  function () {
    var _listLoyaltyPrograms = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee7(requestOptions) {
      var req;
      return runtime_1.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              req = this.createRequest('GET', '/v2/loyalty/programs');
              return _context7.abrupt("return", req.callAsJson(listLoyaltyProgramsResponseSchema, requestOptions));

            case 2:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function listLoyaltyPrograms(_x15) {
      return _listLoyaltyPrograms.apply(this, arguments);
    }

    return listLoyaltyPrograms;
  }()
  /**
   * Calculates the points a purchase earns.
   *
   * - If you are using the Orders API to manage orders, you provide `order_id` in the request. The
   * endpoint calculates the points by reading the order.
   * - If you are not using the Orders API to manage orders, you provide the purchase amount in
   * the request for the endpoint to calculate the points.
   *
   * An application might call this endpoint to show the points that a buyer can earn with the
   * specific purchase.
   *
   * @param programId  The [loyalty program](#type-LoyaltyProgram) ID, which
   *                                                           defines the rules for accruing points.
   * @param body       An object containing the fields to POST for the request.
   *                                                           See the corresponding object definition for field
   *                                                           details.
   * @return Response from the API call
   */
  ;

  _proto.calculateLoyaltyPoints =
  /*#__PURE__*/
  function () {
    var _calculateLoyaltyPoints = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee8(programId, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              req = this.createRequest('POST');
              mapped = req.prepareArgs({
                programId: [programId, schema.string()],
                body: [body, calculateLoyaltyPointsRequestSchema]
              });
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject4$5(), mapped.programId);
              return _context8.abrupt("return", req.callAsJson(calculateLoyaltyPointsResponseSchema, requestOptions));

            case 5:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function calculateLoyaltyPoints(_x16, _x17, _x18) {
      return _calculateLoyaltyPoints.apply(this, arguments);
    }

    return calculateLoyaltyPoints;
  }()
  /**
   * Creates a loyalty reward. In the process, the endpoint does following:
   *
   * - Uses the `reward_tier_id` in the request to determine the number of points
   * to lock for this reward.
   * - If the request includes `order_id`, it adds the reward and related discount to the order.
   *
   * After a reward is created, the points are locked and
   * not available for the buyer to redeem another reward.
   *
   * @param body An object containing the fields to POST for the request.  See
   *                                                  the corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.createLoyaltyReward =
  /*#__PURE__*/
  function () {
    var _createLoyaltyReward = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee9(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              req = this.createRequest('POST', '/v2/loyalty/rewards');
              mapped = req.prepareArgs({
                body: [body, createLoyaltyRewardRequestSchema]
              });
              req.json(mapped.body);
              return _context9.abrupt("return", req.callAsJson(createLoyaltyRewardResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this);
    }));

    function createLoyaltyReward(_x19, _x20) {
      return _createLoyaltyReward.apply(this, arguments);
    }

    return createLoyaltyReward;
  }()
  /**
   * Searches for loyalty rewards in a loyalty account.
   *
   * In the current implementation, the endpoint supports search by the reward `status`.
   *
   * If you know a reward ID, use the
   * [RetrieveLoyaltyReward](#endpoint-Loyalty-RetrieveLoyaltyReward) endpoint.
   *
   * @param body An object containing the fields to POST for the request.  See
   *                                                   the corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.searchLoyaltyRewards =
  /*#__PURE__*/
  function () {
    var _searchLoyaltyRewards = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee10(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              req = this.createRequest('POST', '/v2/loyalty/rewards/search');
              mapped = req.prepareArgs({
                body: [body, searchLoyaltyRewardsRequestSchema]
              });
              req.json(mapped.body);
              return _context10.abrupt("return", req.callAsJson(searchLoyaltyRewardsResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, this);
    }));

    function searchLoyaltyRewards(_x21, _x22) {
      return _searchLoyaltyRewards.apply(this, arguments);
    }

    return searchLoyaltyRewards;
  }()
  /**
   * Deletes a loyalty reward by doing the following:
   *
   * - Returns the loyalty points back to the loyalty account.
   * - If an order ID was specified when the reward was created
   * (see [CreateLoyaltyReward](#endpoint-Loyalty-CreateLoyaltyReward)),
   * it updates the order by removing the reward and related
   * discounts.
   *
   * You cannot delete a reward that has reached the terminal state (REDEEMED).
   *
   * @param rewardId  The ID of the [loyalty reward](#type-LoyaltyReward) to delete.
   * @return Response from the API call
   */
  ;

  _proto.deleteLoyaltyReward =
  /*#__PURE__*/
  function () {
    var _deleteLoyaltyReward = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee11(rewardId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              req = this.createRequest('DELETE');
              mapped = req.prepareArgs({
                rewardId: [rewardId, schema.string()]
              });
              req.appendTemplatePath(_templateObject5$4(), mapped.rewardId);
              return _context11.abrupt("return", req.callAsJson(deleteLoyaltyRewardResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, this);
    }));

    function deleteLoyaltyReward(_x23, _x24) {
      return _deleteLoyaltyReward.apply(this, arguments);
    }

    return deleteLoyaltyReward;
  }()
  /**
   * Retrieves a loyalty reward.
   *
   * @param rewardId  The ID of the [loyalty reward](#type-LoyaltyReward) to retrieve.
   * @return Response from the API call
   */
  ;

  _proto.retrieveLoyaltyReward =
  /*#__PURE__*/
  function () {
    var _retrieveLoyaltyReward = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee12(rewardId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                rewardId: [rewardId, schema.string()]
              });
              req.appendTemplatePath(_templateObject6$3(), mapped.rewardId);
              return _context12.abrupt("return", req.callAsJson(retrieveLoyaltyRewardResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, this);
    }));

    function retrieveLoyaltyReward(_x25, _x26) {
      return _retrieveLoyaltyReward.apply(this, arguments);
    }

    return retrieveLoyaltyReward;
  }()
  /**
   * Redeems a loyalty reward.
   *
   * The endpoint sets the reward to the `REDEEMED` terminal state.
   *
   * If you are using your own order processing system (not using the
   * Orders API), you call this endpoint after the buyer paid for the
   * purchase.
   *
   * After the reward reaches the terminal state, it cannot be deleted.
   * In other words, points used for the reward cannot be returned
   * to the account.
   *
   * @param rewardId  The ID of the [loyalty reward](#type-LoyaltyReward) to
   *                                                       redeem.
   * @param body      An object containing the fields to POST for the request.
   *                                                       See the corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.redeemLoyaltyReward =
  /*#__PURE__*/
  function () {
    var _redeemLoyaltyReward = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee13(rewardId, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              req = this.createRequest('POST');
              mapped = req.prepareArgs({
                rewardId: [rewardId, schema.string()],
                body: [body, redeemLoyaltyRewardRequestSchema]
              });
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject7$3(), mapped.rewardId);
              return _context13.abrupt("return", req.callAsJson(redeemLoyaltyRewardResponseSchema, requestOptions));

            case 5:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13, this);
    }));

    function redeemLoyaltyReward(_x27, _x28, _x29) {
      return _redeemLoyaltyReward.apply(this, arguments);
    }

    return redeemLoyaltyReward;
  }();

  return LoyaltyApi;
}(BaseApi);

var GiftCardTypeEnum;

(function (GiftCardTypeEnum) {
  GiftCardTypeEnum["DIGITAL"] = "DIGITAL";
  GiftCardTypeEnum["PHYSICAL"] = "PHYSICAL";
})(GiftCardTypeEnum || (GiftCardTypeEnum = {}));

var GiftCardGANSourceEnum;

(function (GiftCardGANSourceEnum) {
  GiftCardGANSourceEnum["SQUARE"] = "SQUARE";
  GiftCardGANSourceEnum["OTHER"] = "OTHER";
})(GiftCardGANSourceEnum || (GiftCardGANSourceEnum = {}));

var GiftCardStateEnum;

(function (GiftCardStateEnum) {
  GiftCardStateEnum["NOT_ACTIVATED"] = "NOT_ACTIVATED";
  GiftCardStateEnum["ACTIVATED"] = "ACTIVATED";
  GiftCardStateEnum["DISABLED"] = "DISABLED";
})(GiftCardStateEnum || (GiftCardStateEnum = {}));

var GiftCardDeactivateReasonEnum;

(function (GiftCardDeactivateReasonEnum) {
  GiftCardDeactivateReasonEnum["SUSPICIOUS_ACTIVITY"] = "SUSPICIOUS_ACTIVITY";
})(GiftCardDeactivateReasonEnum || (GiftCardDeactivateReasonEnum = {}));

var GiftCardAdjustDecrementReasonEnum;

(function (GiftCardAdjustDecrementReasonEnum) {
  GiftCardAdjustDecrementReasonEnum["SUSPICIOUS_ACTIVITY"] = "SUSPICIOUS_ACTIVITY";
  GiftCardAdjustDecrementReasonEnum["BALANCE_ACCIDENTALLY_INCREASED"] = "BALANCE_ACCIDENTALLY_INCREASED";
  GiftCardAdjustDecrementReasonEnum["SUPPORT_ISSUE"] = "SUPPORT_ISSUE";
})(GiftCardAdjustDecrementReasonEnum || (GiftCardAdjustDecrementReasonEnum = {}));

var GiftCardAdjustIncrementReasonEnum;

(function (GiftCardAdjustIncrementReasonEnum) {
  GiftCardAdjustIncrementReasonEnum["COMPLIMENTARY"] = "COMPLIMENTARY";
  GiftCardAdjustIncrementReasonEnum["SUPPORT_ISSUE"] = "SUPPORT_ISSUE";
  GiftCardAdjustIncrementReasonEnum["REFUND_ISSUED"] = "REFUND_ISSUED";
  GiftCardAdjustIncrementReasonEnum["TRANSACTION_VOIDED"] = "TRANSACTION_VOIDED";
})(GiftCardAdjustIncrementReasonEnum || (GiftCardAdjustIncrementReasonEnum = {}));

var GiftCardClearBalanceReasonEnum;

(function (GiftCardClearBalanceReasonEnum) {
  GiftCardClearBalanceReasonEnum["SUSPICIOUS_ACTIVITY"] = "SUSPICIOUS_ACTIVITY";
  GiftCardClearBalanceReasonEnum["REUSE_GIFTCARD"] = "REUSE_GIFTCARD";
})(GiftCardClearBalanceReasonEnum || (GiftCardClearBalanceReasonEnum = {}));

var giftCardSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  gan: ['gan', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  type: ['type', /*#__PURE__*/schema.stringEnum(GiftCardTypeEnum)],
  state: ['state', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  ganSource: ['gan_source', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.stringEnum(GiftCardGANSourceEnum))],
  balanceMoney: ['balance_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))]
});

var createGiftCardRequestSchema = /*#__PURE__*/schema.object({
  giftCard: ['giftcard', /*#__PURE__*/schema.lazy(function () {
    return giftCardSchema;
  })],
  locationId: ['location_id', /*#__PURE__*/schema.string()],
  idempotencyKey: ['idempotency_key', /*#__PURE__*/schema.string()]
});

var createGiftCardResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  giftCard: ['giftcard', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return giftCardSchema;
  }))]
});

var retrieveGiftCardResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  giftCard: ['giftcard', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return giftCardSchema;
  }))]
});

var retrieveGiftCardFromGanResponseSchema = createGiftCardResponseSchema;

var retrieveGiftCardFromGanRequestSchema = /*#__PURE__*/schema.object({
  gan: ['gan', /*#__PURE__*/schema.string()]
});

var retrieveGiftCardFromNonceRequestSchema = /*#__PURE__*/schema.object({
  idempotencyKey: ['idempotency_key', /*#__PURE__*/schema.string()],
  nonce: ['nonce', /*#__PURE__*/schema.string()]
});

var retrieveGiftCardFromNonceResponseSchema = createGiftCardResponseSchema;

var giftCardActivateActivityDetails = /*#__PURE__*/schema.object({
  amountMoney: ['amount_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  orderId: ['order_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  lineItemId: ['line_item_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  referenceId: ['reference_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  buyerPaymentInstrumentIds: ['buyer_payment_instrument_ids', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))]
});
var giftCardLoadActivityDetails = /*#__PURE__*/schema.object({
  amountMoney: ['amount_money', /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  })],
  orderId: ['order_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  lineItemId: ['line_item_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});
var giftCardClearBalanceActivityDetails = /*#__PURE__*/schema.object({
  reason: ['reason', /*#__PURE__*/schema.string()]
});
var giftCardDeactivateActivityDetails = /*#__PURE__*/schema.object({
  reason: ['reason', /*#__PURE__*/schema.string()]
});
var giftCardRedeemActivityDetails = /*#__PURE__*/schema.object({
  amountMoney: ['amount_money', /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  })],
  referenceId: ['reference_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  paymentId: ['payment_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});
var giftCardRefundActivityDetails = /*#__PURE__*/schema.object({
  amountMoney: ['amount_money', /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  })],
  redeemActivityId: ['redeem_activity_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  referenceId: ['reference_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  paymentId: ['payment_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});
var giftCardAdjustIncrementActivityDetails = /*#__PURE__*/schema.object({
  amountMoney: ['amount_money', /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  })],
  reason: ['reason', /*#__PURE__*/schema.string()]
});
var giftCardAdjustDecrementActivityDetails = /*#__PURE__*/schema.object({
  amountMoney: ['amount_money', /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  })],
  reason: ['reason', /*#__PURE__*/schema.string()]
});
var giftCardUnlinkedActivityDetails = /*#__PURE__*/schema.object({
  amountMoney: ['amount_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  paymentId: ['payment_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  referenceId: ['reference_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});
var giftCardBlockActivityDetails = /*#__PURE__*/schema.object({
  reason: ['reason', /*#__PURE__*/schema.string()]
});
var giftCardUnblockActivityDetails = /*#__PURE__*/schema.object({
  reason: ['reason', /*#__PURE__*/schema.string()]
});
var giftCardImportActivityDetails = /*#__PURE__*/schema.object({
  amountMoney: ['money', /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  })]
});
var giftCardOtherActivityDetails = /*#__PURE__*/schema.object({
  amountMoney: ['money', /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  })]
});

var GiftCardActivityTypeEnum;

(function (GiftCardActivityTypeEnum) {
  GiftCardActivityTypeEnum["ACTIVATE"] = "ACTIVATE";
  GiftCardActivityTypeEnum["LOAD"] = "LOAD";
  GiftCardActivityTypeEnum["REDEEM"] = "REDEEM";
  GiftCardActivityTypeEnum["CLEAR_BALANCE"] = "CLEAR_BALANCE";
  GiftCardActivityTypeEnum["DEACTIVATE"] = "DEACTIVATE";
  GiftCardActivityTypeEnum["ADJUST_INCREMENT"] = "ADJUST_INCREMENT";
  GiftCardActivityTypeEnum["ADJUST_DECREMENT"] = "ADJUST_DECREMENT";
})(GiftCardActivityTypeEnum || (GiftCardActivityTypeEnum = {}));

var giftCardActivitySchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  type: ['type', /*#__PURE__*/schema.string()],
  giftCardId: ['giftcard_id', /*#__PURE__*/schema.string()],
  giftCardGan: ['giftcard_gan', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  locationId: ['location_id', /*#__PURE__*/schema.string()],
  giftcardBalanceMoney: ['giftcard_balance_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  activateActivityDetails: ['activate_activity_details', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return giftCardActivateActivityDetails;
  }))],
  loadActivityDetails: ['load_activity_details', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return giftCardLoadActivityDetails;
  }))],
  clearBalanceActivityDetails: ['clear_balance_activity_details', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return giftCardClearBalanceActivityDetails;
  }))],
  deactivateActivityDetails: ['deactivate_activity_details', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return giftCardDeactivateActivityDetails;
  }))],
  redeemActivityDetails: ['redeem_activity_details', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return giftCardRedeemActivityDetails;
  }))],
  refundActivityDetails: ['refund_activity_details', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return giftCardRefundActivityDetails;
  }))],
  unlinkedActivityDetails: ['unlinked_activity_details', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return giftCardUnlinkedActivityDetails;
  }))],
  adjustIncrementActivityDetails: ['adjust_increment_activity_details', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return giftCardAdjustIncrementActivityDetails;
  }))],
  adjustDecrementActivityDetails: ['adjust_decrement_activity_details', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return giftCardAdjustDecrementActivityDetails;
  }))],
  blockActivityDetails: ['block_activity_details', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return giftCardBlockActivityDetails;
  }))],
  unblockActivityDetails: ['unblock_activity_details', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return giftCardUnblockActivityDetails;
  }))],
  importActivityDetails: ['import_activity_details', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return giftCardImportActivityDetails;
  }))],
  otherActivityDetails: ['other_activity_details', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return giftCardOtherActivityDetails;
  }))],
  createdAt: ['created_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var listGiftCardActivityResponseSchema = /*#__PURE__*/schema.object({
  giftcardActivities: ['giftcard_activities', /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return giftCardActivitySchema;
  }))]
});

var giftCardActivityRequestSchema = /*#__PURE__*/schema.object({
  idempotencyKey: ['idempotency_key', /*#__PURE__*/schema.string()],
  giftcardActivity: ['giftcard_activity', /*#__PURE__*/schema.lazy(function () {
    return giftCardActivitySchema;
  })]
});

var giftCardActivityResponseSchema = /*#__PURE__*/schema.object({
  giftCardActivity: ['giftcard_activity', /*#__PURE__*/schema.lazy(function () {
    return giftCardActivitySchema;
  })]
});

function _templateObject$g() {
  var data = _taggedTemplateLiteralLoose(["/v2/giftcards/", ""]);

  _templateObject$g = function _templateObject() {
    return data;
  };

  return data;
}
var GiftCardsApi = /*#__PURE__*/function (_BaseApi) {
  _inheritsLoose(GiftCardsApi, _BaseApi);

  function GiftCardsApi() {
    return _BaseApi.apply(this, arguments) || this;
  }

  var _proto = GiftCardsApi.prototype;

  _proto.createGiftCard = function createGiftCard(body, requestOptions) {
    var req = this.createRequest('POST', '/v2/giftcards');
    var mapped = req.prepareArgs({
      body: [body, createGiftCardRequestSchema]
    });
    req.json(mapped.body);
    return req.callAsJson(createGiftCardResponseSchema, requestOptions);
  };

  _proto.activateGiftCard = function activateGiftCard(body, requestOptions) {
    return this.giftCardActivityRequest(body, requestOptions);
  };

  _proto.deactivateGiftCard = function deactivateGiftCard(body, requestOptions) {
    return this.giftCardActivityRequest(body, requestOptions);
  };

  _proto.clearGiftCardBalance = function clearGiftCardBalance(body, requestOptions) {
    return this.giftCardActivityRequest(body, requestOptions);
  };

  _proto.adjustGiftCardBalance = function adjustGiftCardBalance(body, requestOptions) {
    return this.giftCardActivityRequest(body, requestOptions);
  };

  _proto.retrieveGiftCard = function retrieveGiftCard(id, requestOptions) {
    var req = this.createRequest('GET');
    var mapped = req.prepareArgs({
      id: [id, schema.string()]
    });
    req.appendTemplatePath(_templateObject$g(), mapped.id);
    return req.callAsJson(retrieveGiftCardResponseSchema, requestOptions);
  };

  _proto.retrieveGiftCardFromGan = function retrieveGiftCardFromGan(body, requestOptions) {
    var req = this.createRequest('POST', '/v2/giftcards/from_gan');
    var mapped = req.prepareArgs({
      body: [body, retrieveGiftCardFromGanRequestSchema]
    });
    req.json(mapped.body);
    return req.callAsJson(retrieveGiftCardFromGanResponseSchema, requestOptions);
  };

  _proto.retrieveGiftCardFromNonce = function retrieveGiftCardFromNonce(body, requestOptions) {
    var req = this.createRequest('POST', '/v2/giftcards/from_nonce');
    var mapped = req.prepareArgs({
      body: [body, retrieveGiftCardFromNonceRequestSchema]
    });
    req.json(mapped.body);
    return req.callAsJson(retrieveGiftCardFromNonceResponseSchema, requestOptions);
  };

  _proto.listGiftCardActivities = function listGiftCardActivities(body, requestOptions) {
    var req = this.createRequest('GET', '/v2/giftcards/activities');
    var mapped = req.prepareArgs({
      giftCardId: [body.giftCardId, schema.string()],
      type: [body.type, schema.optional(schema.string())],
      locationId: [body.type, schema.optional(schema.string())],
      beginTime: [body.beginTime, schema.optional(schema.string())],
      endTime: [body.endTime, schema.optional(schema.string())],
      cursor: [body.cursor, schema.optional(schema.string())],
      sortOrder: [body.sortOrder, schema.optional(schema.string())]
    });
    req.query('giftcard_id', mapped.giftCardId);
    req.query('type', mapped.type);
    req.query('location_id', mapped.locationId);
    req.query('begin_time', mapped.beginTime);
    req.query('end_time', mapped.endTime);
    req.query('cursor', mapped.cursor);
    req.query('sort_order', mapped.sortOrder || 'ASC');
    return req.callAsJson(listGiftCardActivityResponseSchema, requestOptions);
  };

  _proto.giftCardActivityRequest = function giftCardActivityRequest(body, requestOptions) {
    var req = this.createRequest('POST', '/v2/giftcards/activity');
    var mapped = req.prepareArgs({
      body: [body, giftCardActivityRequestSchema]
    });
    req.json(mapped.body);
    return req.callAsJson(giftCardActivityResponseSchema, requestOptions);
  };

  return GiftCardsApi;
}(BaseApi);

var merchantSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  businessName: ['business_name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  country: ['country', /*#__PURE__*/schema.string()],
  languageCode: ['language_code', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  currency: ['currency', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  status: ['status', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  mainLocationId: ['main_location_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var listMerchantsResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  merchant: ['merchant', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return merchantSchema;
  })))],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())]
});

var retrieveMerchantResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  merchant: ['merchant', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return merchantSchema;
  }))]
});

function _templateObject$h() {
  var data = _taggedTemplateLiteralLoose(["/v2/merchants/", ""]);

  _templateObject$h = function _templateObject() {
    return data;
  };

  return data;
}
var MerchantsApi = /*#__PURE__*/function (_BaseApi) {
  _inheritsLoose(MerchantsApi, _BaseApi);

  function MerchantsApi() {
    return _BaseApi.apply(this, arguments) || this;
  }

  var _proto = MerchantsApi.prototype;

  /**
   * Returns `Merchant` information for a given access token.
   *
   * If you don't know a `Merchant` ID, you can use this endpoint to retrieve the merchant ID for an
   * access token.
   * You can specify your personal access token to get your own merchant information or specify an OAuth
   * token
   * to get the information for the  merchant that granted you access.
   *
   * If you know the merchant ID, you can also use the [RetrieveMerchant](#endpoint-merchants-
   * retrievemerchant)
   * endpoint to get the merchant information.
   *
   * @param cursor The cursor generated by the previous response.
   * @return Response from the API call
   */
  _proto.listMerchants =
  /*#__PURE__*/
  function () {
    var _listMerchants = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(cursor, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = this.createRequest('GET', '/v2/merchants');
              mapped = req.prepareArgs({
                cursor: [cursor, schema.optional(schema.number())]
              });
              req.query('cursor', mapped.cursor);
              return _context.abrupt("return", req.callAsJson(listMerchantsResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function listMerchants(_x, _x2) {
      return _listMerchants.apply(this, arguments);
    }

    return listMerchants;
  }()
  /**
   * Retrieve a `Merchant` object for the given `merchant_id`.
   *
   * @param merchantId  The ID of the merchant to retrieve. If the string "me" is supplied as the ID, then
   *                              retrieve the merchant that is currently accessible to this call.
   * @return Response from the API call
   */
  ;

  _proto.retrieveMerchant =
  /*#__PURE__*/
  function () {
    var _retrieveMerchant = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(merchantId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                merchantId: [merchantId, schema.string()]
              });
              req.appendTemplatePath(_templateObject$h(), mapped.merchantId);
              return _context2.abrupt("return", req.callAsJson(retrieveMerchantResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function retrieveMerchant(_x3, _x4) {
      return _retrieveMerchant.apply(this, arguments);
    }

    return retrieveMerchant;
  }();

  return MerchantsApi;
}(BaseApi);

var createMobileAuthorizationCodeRequestSchema = /*#__PURE__*/schema.object({
  locationId: ['location_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var createMobileAuthorizationCodeResponseSchema = /*#__PURE__*/schema.object({
  authorizationCode: ['authorization_code', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  expiresAt: ['expires_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  error: ['error', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  }))]
});

var MobileAuthorizationApi = /*#__PURE__*/function (_BaseApi) {
  _inheritsLoose(MobileAuthorizationApi, _BaseApi);

  function MobileAuthorizationApi() {
    return _BaseApi.apply(this, arguments) || this;
  }

  var _proto = MobileAuthorizationApi.prototype;

  /**
   * Generates code to authorize a mobile application to connect to a Square card reader
   *
   * Authorization codes are one-time-use and expire __60 minutes__ after being issued.
   *
   * __Important:__ The `Authorization` header you provide to this endpoint must have the following
   * format:
   *
   * ```
   * Authorization: Bearer ACCESS_TOKEN
   * ```
   *
   * Replace `ACCESS_TOKEN` with a
   * [valid production authorization credential](https://developer.squareup.com/docs/build-basics/access-
   * tokens).
   *
   * @param body An object containing the fields to POST for the
   *                                                            request.  See the corresponding object definition for
   *                                                            field details.
   * @return Response from the API call
   */
  _proto.createMobileAuthorizationCode =
  /*#__PURE__*/
  function () {
    var _createMobileAuthorizationCode = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = this.createRequest('POST', '/mobile/authorization-code');
              mapped = req.prepareArgs({
                body: [body, createMobileAuthorizationCodeRequestSchema]
              });
              req.json(mapped.body);
              return _context.abrupt("return", req.callAsJson(createMobileAuthorizationCodeResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function createMobileAuthorizationCode(_x, _x2) {
      return _createMobileAuthorizationCode.apply(this, arguments);
    }

    return createMobileAuthorizationCode;
  }();

  return MobileAuthorizationApi;
}(BaseApi);

var obtainTokenRequestSchema = /*#__PURE__*/schema.object({
  clientId: ['client_id', /*#__PURE__*/schema.string()],
  clientSecret: ['client_secret', /*#__PURE__*/schema.string()],
  code: ['code', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  redirectUri: ['redirect_uri', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  grantType: ['grant_type', /*#__PURE__*/schema.string()],
  refreshToken: ['refresh_token', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  migrationToken: ['migration_token', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  scopes: ['scopes', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  shortLived: ['short_lived', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())]
});

var obtainTokenResponseSchema = /*#__PURE__*/schema.object({
  accessToken: ['access_token', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  tokenType: ['token_type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  expiresAt: ['expires_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  merchantId: ['merchant_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  subscriptionId: ['subscription_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  planId: ['plan_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  idToken: ['id_token', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  refreshToken: ['refresh_token', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  shortLived: ['short_lived', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())]
});

var renewTokenRequestSchema = /*#__PURE__*/schema.object({
  accessToken: ['access_token', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var renewTokenResponseSchema = /*#__PURE__*/schema.object({
  accessToken: ['access_token', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  tokenType: ['token_type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  expiresAt: ['expires_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  merchantId: ['merchant_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  subscriptionId: ['subscription_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  planId: ['plan_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var revokeTokenRequestSchema = /*#__PURE__*/schema.object({
  clientId: ['client_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  accessToken: ['access_token', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  merchantId: ['merchant_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  revokeOnlyAccessToken: ['revoke_only_access_token', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())]
});

var revokeTokenResponseSchema = /*#__PURE__*/schema.object({
  success: ['success', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())]
});

function _templateObject$i() {
  var data = _taggedTemplateLiteralLoose(["/oauth2/clients/", "/access-token/renew"]);

  _templateObject$i = function _templateObject() {
    return data;
  };

  return data;
}
var OAuthApi = /*#__PURE__*/function (_BaseApi) {
  _inheritsLoose(OAuthApi, _BaseApi);

  function OAuthApi() {
    return _BaseApi.apply(this, arguments) || this;
  }

  var _proto = OAuthApi.prototype;

  /**
   * `RenewToken` is deprecated. For information about refreshing OAuth access tokens, see
   * [Renew OAuth Token](https://developer.squareup.com/docs/oauth-api/cookbook/renew-oauth-tokens).
   *
   *
   * Renews an OAuth access token before it expires.
   *
   * OAuth access tokens besides your application's personal access token expire after __30 days__.
   * You can also renew expired tokens within __15 days__ of their expiration.
   * You cannot renew an access token that has been expired for more than 15 days.
   * Instead, the associated user must re-complete the OAuth flow from the beginning.
   *
   * __Important:__ The `Authorization` header for this endpoint must have the
   * following format:
   *
   * ```
   * Authorization: Client APPLICATION_SECRET
   * ```
   *
   * Replace `APPLICATION_SECRET` with the application secret on the Credentials
   * page in the [application dashboard](https://connect.squareup.com/apps).
   *
   * @param clientId      Your application ID, available from the [application
   *                                                  dashboard](https://connect.squareup.com/apps).
   * @param body          An object containing the fields to POST for the request.  See
   *                                                  the corresponding object definition for field details.
   * @param authorization Client APPLICATION_SECRET
   * @return Response from the API call
   * @deprecated
   */
  _proto.renewToken =
  /*#__PURE__*/
  function () {
    var _renewToken = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(clientId, body, authorization, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = this.createRequest('POST');
              mapped = req.prepareArgs({
                clientId: [clientId, schema.string()],
                body: [body, renewTokenRequestSchema],
                authorization: [authorization, schema.string()]
              });
              req.header('Authorization', mapped.authorization);
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject$i(), mapped.clientId);
              req.deprecated('OAuthApi.renewToken');
              req.authenticate(false);
              return _context.abrupt("return", req.callAsJson(renewTokenResponseSchema, requestOptions));

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function renewToken(_x, _x2, _x3, _x4) {
      return _renewToken.apply(this, arguments);
    }

    return renewToken;
  }()
  /**
   * Revokes an access token generated with the OAuth flow.
   *
   * If an account has more than one OAuth access token for your application, this
   * endpoint revokes all of them, regardless of which token you specify. When an
   * OAuth access token is revoked, all of the active subscriptions associated
   * with that OAuth token are canceled immediately.
   *
   * __Important:__ The `Authorization` header for this endpoint must have the
   * following format:
   *
   * ```
   * Authorization: Client APPLICATION_SECRET
   * ```
   *
   * Replace `APPLICATION_SECRET` with the application secret on the Credentials
   * page in the [Developer Dashboard](https://developer.squareup.com/apps).
   *
   * @param body          An object containing the fields to POST for the request.  See
   *                                                   the corresponding object definition for field details.
   * @param authorization Client APPLICATION_SECRET
   * @return Response from the API call
   */
  ;

  _proto.revokeToken =
  /*#__PURE__*/
  function () {
    var _revokeToken = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(body, authorization, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req = this.createRequest('POST', '/oauth2/revoke');
              mapped = req.prepareArgs({
                body: [body, revokeTokenRequestSchema],
                authorization: [authorization, schema.string()]
              });
              req.header('Authorization', mapped.authorization);
              req.json(mapped.body);
              req.authenticate(false);
              return _context2.abrupt("return", req.callAsJson(revokeTokenResponseSchema, requestOptions));

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function revokeToken(_x5, _x6, _x7) {
      return _revokeToken.apply(this, arguments);
    }

    return revokeToken;
  }()
  /**
   * Returns an OAuth access token.
   *
   * The endpoint supports distinct methods of obtaining OAuth access tokens.
   * Applications specify a method by adding the `grant_type` parameter
   * in the request and also provide relevant information.
   *
   * __Note:__ Regardless of the method application specified,
   * the endpoint always returns two items; an OAuth access token and
   * a refresh token in the response.
   *
   * __OAuth tokens should only live on secure servers. Application clients
   * should never interact directly with OAuth tokens__.
   *
   * @param body An object containing the fields to POST for the request.  See the
   *                                          corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.obtainToken =
  /*#__PURE__*/
  function () {
    var _obtainToken = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              req = this.createRequest('POST', '/oauth2/token');
              mapped = req.prepareArgs({
                body: [body, obtainTokenRequestSchema]
              });
              req.json(mapped.body);
              req.authenticate(false);
              return _context3.abrupt("return", req.callAsJson(obtainTokenResponseSchema, requestOptions));

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function obtainToken(_x8, _x9) {
      return _obtainToken.apply(this, arguments);
    }

    return obtainToken;
  }();

  return OAuthApi;
}(BaseApi);

var batchRetrieveOrdersRequestSchema = /*#__PURE__*/schema.object({
  locationId: ['location_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  orderIds: ['order_ids', /*#__PURE__*/schema.array( /*#__PURE__*/schema.string())]
});

var batchRetrieveOrdersResponseSchema = /*#__PURE__*/schema.object({
  orders: ['orders', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return orderSchema;
  })))],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var calculateOrderRequestSchema = /*#__PURE__*/schema.object({
  order: ['order', /*#__PURE__*/schema.lazy(function () {
    return orderSchema;
  })],
  proposedRewards: ['proposed_rewards', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return orderRewardSchema;
  })))]
});

var calculateOrderResponseSchema = /*#__PURE__*/schema.object({
  order: ['order', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return orderSchema;
  }))],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var createOrderResponseSchema = /*#__PURE__*/schema.object({
  order: ['order', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return orderSchema;
  }))],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var payOrderRequestSchema = /*#__PURE__*/schema.object({
  idempotencyKey: ['idempotency_key', /*#__PURE__*/schema.string()],
  orderVersion: ['order_version', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  paymentIds: ['payment_ids', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))]
});

var payOrderResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  order: ['order', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return orderSchema;
  }))]
});

var retrieveOrderResponseSchema = /*#__PURE__*/schema.object({
  order: ['order', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return orderSchema;
  }))],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var searchOrdersCustomerFilterSchema = /*#__PURE__*/schema.object({
  customerIds: ['customer_ids', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))]
});

var searchOrdersDateTimeFilterSchema = /*#__PURE__*/schema.object({
  createdAt: ['created_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return timeRangeSchema;
  }))],
  updatedAt: ['updated_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return timeRangeSchema;
  }))],
  closedAt: ['closed_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return timeRangeSchema;
  }))]
});

var searchOrdersFulfillmentFilterSchema = /*#__PURE__*/schema.object({
  fulfillmentTypes: ['fulfillment_types', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  fulfillmentStates: ['fulfillment_states', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))]
});

var searchOrdersSourceFilterSchema = /*#__PURE__*/schema.object({
  sourceNames: ['source_names', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))]
});

var searchOrdersStateFilterSchema = /*#__PURE__*/schema.object({
  states: ['states', /*#__PURE__*/schema.array( /*#__PURE__*/schema.string())]
});

var searchOrdersFilterSchema = /*#__PURE__*/schema.object({
  stateFilter: ['state_filter', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return searchOrdersStateFilterSchema;
  }))],
  dateTimeFilter: ['date_time_filter', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return searchOrdersDateTimeFilterSchema;
  }))],
  fulfillmentFilter: ['fulfillment_filter', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return searchOrdersFulfillmentFilterSchema;
  }))],
  sourceFilter: ['source_filter', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return searchOrdersSourceFilterSchema;
  }))],
  customerFilter: ['customer_filter', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return searchOrdersCustomerFilterSchema;
  }))]
});

var searchOrdersSortSchema = /*#__PURE__*/schema.object({
  sortField: ['sort_field', /*#__PURE__*/schema.string()],
  sortOrder: ['sort_order', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var searchOrdersQuerySchema = /*#__PURE__*/schema.object({
  filter: ['filter', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return searchOrdersFilterSchema;
  }))],
  sort: ['sort', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return searchOrdersSortSchema;
  }))]
});

var searchOrdersRequestSchema = /*#__PURE__*/schema.object({
  locationIds: ['location_ids', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  query: ['query', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return searchOrdersQuerySchema;
  }))],
  limit: ['limit', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  returnEntries: ['return_entries', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())]
});

var orderEntrySchema = /*#__PURE__*/schema.object({
  orderId: ['order_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  version: ['version', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  locationId: ['location_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var searchOrdersResponseSchema = /*#__PURE__*/schema.object({
  orderEntries: ['order_entries', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return orderEntrySchema;
  })))],
  orders: ['orders', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return orderSchema;
  })))],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var updateOrderRequestSchema = /*#__PURE__*/schema.object({
  order: ['order', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return orderSchema;
  }))],
  fieldsToClear: ['fields_to_clear', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  idempotencyKey: ['idempotency_key', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var updateOrderResponseSchema = /*#__PURE__*/schema.object({
  order: ['order', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return orderSchema;
  }))],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

function _templateObject3$8() {
  var data = _taggedTemplateLiteralLoose(["/v2/orders/", "/pay"]);

  _templateObject3$8 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$c() {
  var data = _taggedTemplateLiteralLoose(["/v2/orders/", ""]);

  _templateObject2$c = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$j() {
  var data = _taggedTemplateLiteralLoose(["/v2/orders/", ""]);

  _templateObject$j = function _templateObject() {
    return data;
  };

  return data;
}
var OrdersApi = /*#__PURE__*/function (_BaseApi) {
  _inheritsLoose(OrdersApi, _BaseApi);

  function OrdersApi() {
    return _BaseApi.apply(this, arguments) || this;
  }

  var _proto = OrdersApi.prototype;

  /**
   * Creates a new [Order](#type-order) which can include information on products for
   * purchase and settings to apply to the purchase.
   *
   * To pay for a created order, please refer to the [Pay for Orders](https://developer.squareup.
   * com/docs/orders-api/pay-for-orders)
   * guide.
   *
   * You can modify open orders using the [UpdateOrder](#endpoint-orders-updateorder) endpoint.
   *
   * @param body An object containing the fields to POST for the request.  See the
   *                                          corresponding object definition for field details.
   * @return Response from the API call
   */
  _proto.createOrder =
  /*#__PURE__*/
  function () {
    var _createOrder = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = this.createRequest('POST', '/v2/orders');
              mapped = req.prepareArgs({
                body: [body, createOrderRequestSchema]
              });
              req.json(mapped.body);
              return _context.abrupt("return", req.callAsJson(createOrderResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function createOrder(_x, _x2) {
      return _createOrder.apply(this, arguments);
    }

    return createOrder;
  }()
  /**
   * Retrieves a set of [Order](#type-order)s by their IDs.
   *
   * If a given Order ID does not exist, the ID is ignored instead of generating an error.
   *
   * @param body An object containing the fields to POST for the request.  See
   *                                                  the corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.batchRetrieveOrders =
  /*#__PURE__*/
  function () {
    var _batchRetrieveOrders = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req = this.createRequest('POST', '/v2/orders/batch-retrieve');
              mapped = req.prepareArgs({
                body: [body, batchRetrieveOrdersRequestSchema]
              });
              req.json(mapped.body);
              return _context2.abrupt("return", req.callAsJson(batchRetrieveOrdersResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function batchRetrieveOrders(_x3, _x4) {
      return _batchRetrieveOrders.apply(this, arguments);
    }

    return batchRetrieveOrders;
  }()
  /**
   * Calculates an [Order](#type-order).
   *
   * @param body An object containing the fields to POST for the request.  See the
   *                                             corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.calculateOrder =
  /*#__PURE__*/
  function () {
    var _calculateOrder = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              req = this.createRequest('POST', '/v2/orders/calculate');
              mapped = req.prepareArgs({
                body: [body, calculateOrderRequestSchema]
              });
              req.json(mapped.body);
              return _context3.abrupt("return", req.callAsJson(calculateOrderResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function calculateOrder(_x5, _x6) {
      return _calculateOrder.apply(this, arguments);
    }

    return calculateOrder;
  }()
  /**
   * Search all orders for one or more locations. Orders include all sales,
   * returns, and exchanges regardless of how or when they entered the Square
   * Ecosystem (e.g. Point of Sale, Invoices, Connect APIs, etc).
   *
   * SearchOrders requests need to specify which locations to search and define a
   * [`SearchOrdersQuery`](#type-searchordersquery) object which controls
   * how to sort or filter the results. Your SearchOrdersQuery can:
   *
   * Set filter criteria.
   * Set sort order.
   * Determine whether to return results as complete Order objects, or as
   * [OrderEntry](#type-orderentry) objects.
   *
   * Note that details for orders processed with Square Point of Sale while in
   * offline mode may not be transmitted to Square for up to 72 hours. Offline
   * orders have a `created_at` value that reflects the time the order was created,
   * not the time it was subsequently transmitted to Square.
   *
   * @param body An object containing the fields to POST for the request.  See the
   *                                           corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.searchOrders =
  /*#__PURE__*/
  function () {
    var _searchOrders = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              req = this.createRequest('POST', '/v2/orders/search');
              mapped = req.prepareArgs({
                body: [body, searchOrdersRequestSchema]
              });
              req.json(mapped.body);
              return _context4.abrupt("return", req.callAsJson(searchOrdersResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function searchOrders(_x7, _x8) {
      return _searchOrders.apply(this, arguments);
    }

    return searchOrders;
  }()
  /**
   * Retrieves an [Order](#type-order) by ID.
   *
   * @param orderId  The ID of the order to retrieve.
   * @return Response from the API call
   */
  ;

  _proto.retrieveOrder =
  /*#__PURE__*/
  function () {
    var _retrieveOrder = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5(orderId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                orderId: [orderId, schema.string()]
              });
              req.appendTemplatePath(_templateObject$j(), mapped.orderId);
              return _context5.abrupt("return", req.callAsJson(retrieveOrderResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function retrieveOrder(_x9, _x10) {
      return _retrieveOrder.apply(this, arguments);
    }

    return retrieveOrder;
  }()
  /**
   * Updates an open [Order](#type-order) by adding, replacing, or deleting
   * fields. Orders with a `COMPLETED` or `CANCELED` state cannot be updated.
   *
   * An UpdateOrder request requires the following:
   *
   * - The `order_id` in the endpoint path, identifying the order to update.
   * - The latest `version` of the order to update.
   * - The [sparse order](https://developer.squareup.com/docs/orders-api/manage-orders#sparse-order-
   * objects)
   * containing only the fields to update and the version the update is
   * being applied to.
   * - If deleting fields, the [dot notation paths](https://developer.squareup.com/docs/orders-api/manage-
   * orders#on-dot-notation)
   * identifying fields to clear.
   *
   * To pay for an order, please refer to the [Pay for Orders](https://developer.squareup.com/docs/orders-
   * api/pay-for-orders) guide.
   *
   * @param orderId  The ID of the order to update.
   * @param body     An object containing the fields to POST for the request.  See the
   *                                              corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.updateOrder =
  /*#__PURE__*/
  function () {
    var _updateOrder = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee6(orderId, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              req = this.createRequest('PUT');
              mapped = req.prepareArgs({
                orderId: [orderId, schema.string()],
                body: [body, updateOrderRequestSchema]
              });
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject2$c(), mapped.orderId);
              return _context6.abrupt("return", req.callAsJson(updateOrderResponseSchema, requestOptions));

            case 5:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function updateOrder(_x11, _x12, _x13) {
      return _updateOrder.apply(this, arguments);
    }

    return updateOrder;
  }()
  /**
   * Pay for an [order](#type-order) using one or more approved [payments](#type-payment),
   * or settle an order with a total of `0`.
   *
   * The total of the `payment_ids` listed in the request must be equal to the order
   * total. Orders with a total amount of `0` can be marked as paid by specifying an empty
   * array of `payment_ids` in the request.
   *
   * To be used with PayOrder, a payment must:
   *
   * - Reference the order by specifying the `order_id` when [creating the payment](#endpoint-payments-
   * createpayment).
   * Any approved payments that reference the same `order_id` not specified in the
   * `payment_ids` will be canceled.
   * - Be approved with [delayed capture](https://developer.squareup.com/docs/payments-api/take-
   * payments#delayed-capture).
   * Using a delayed capture payment with PayOrder will complete the approved payment.
   *
   * @param orderId  The ID of the order being paid.
   * @param body     An object containing the fields to POST for the request.  See the
   *                                           corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.payOrder =
  /*#__PURE__*/
  function () {
    var _payOrder = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee7(orderId, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              req = this.createRequest('POST');
              mapped = req.prepareArgs({
                orderId: [orderId, schema.string()],
                body: [body, payOrderRequestSchema]
              });
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject3$8(), mapped.orderId);
              return _context7.abrupt("return", req.callAsJson(payOrderResponseSchema, requestOptions));

            case 5:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function payOrder(_x14, _x15, _x16) {
      return _payOrder.apply(this, arguments);
    }

    return payOrder;
  }();

  return OrdersApi;
}(BaseApi);

var cancelPaymentByIdempotencyKeyRequestSchema = /*#__PURE__*/schema.object({
  idempotencyKey: ['idempotency_key', /*#__PURE__*/schema.string()]
});

var cancelPaymentByIdempotencyKeyResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var deviceDetailsSchema = /*#__PURE__*/schema.object({
  deviceId: ['device_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  deviceInstallationId: ['device_installation_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  deviceName: ['device_name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var cardPaymentDetailsSchema = /*#__PURE__*/schema.object({
  status: ['status', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  card: ['card', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return cardSchema;
  }))],
  entryMethod: ['entry_method', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  cvvStatus: ['cvv_status', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  avsStatus: ['avs_status', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  authResultCode: ['auth_result_code', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  applicationIdentifier: ['application_identifier', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  applicationName: ['application_name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  applicationCryptogram: ['application_cryptogram', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  verificationMethod: ['verification_method', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  verificationResults: ['verification_results', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  statementDescription: ['statement_description', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  deviceDetails: ['device_details', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return deviceDetailsSchema;
  }))],
  refundRequiresCardPresence: ['refund_requires_card_presence', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var processingFeeSchema = /*#__PURE__*/schema.object({
  effectiveAt: ['effective_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  type: ['type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  amountMoney: ['amount_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))]
});

var riskEvaluationSchema = /*#__PURE__*/schema.object({
  createdAt: ['created_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  riskLevel: ['risk_level', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var paymentSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  createdAt: ['created_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  updatedAt: ['updated_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  amountMoney: ['amount_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  tipMoney: ['tip_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  totalMoney: ['total_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  appFeeMoney: ['app_fee_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  processingFee: ['processing_fee', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return processingFeeSchema;
  })))],
  refundedMoney: ['refunded_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  status: ['status', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  delayDuration: ['delay_duration', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  delayAction: ['delay_action', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  delayedUntil: ['delayed_until', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  sourceType: ['source_type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  cardDetails: ['card_details', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return cardPaymentDetailsSchema;
  }))],
  locationId: ['location_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  orderId: ['order_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  referenceId: ['reference_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  customerId: ['customer_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  employeeId: ['employee_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  refundIds: ['refund_ids', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  riskEvaluation: ['risk_evaluation', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return riskEvaluationSchema;
  }))],
  buyerEmailAddress: ['buyer_email_address', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  billingAddress: ['billing_address', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return addressSchema;
  }))],
  shippingAddress: ['shipping_address', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return addressSchema;
  }))],
  note: ['note', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  statementDescriptionIdentifier: ['statement_description_identifier', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  receiptNumber: ['receipt_number', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  receiptUrl: ['receipt_url', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var cancelPaymentResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  payment: ['payment', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return paymentSchema;
  }))]
});

var completePaymentResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  payment: ['payment', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return paymentSchema;
  }))]
});

var createPaymentRequestSchema = /*#__PURE__*/schema.object({
  sourceId: ['source_id', /*#__PURE__*/schema.string()],
  idempotencyKey: ['idempotency_key', /*#__PURE__*/schema.string()],
  amountMoney: ['amount_money', /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  })],
  tipMoney: ['tip_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  appFeeMoney: ['app_fee_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  delayDuration: ['delay_duration', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  autocomplete: ['autocomplete', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  orderId: ['order_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  customerId: ['customer_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  locationId: ['location_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  referenceId: ['reference_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  verificationToken: ['verification_token', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  acceptPartialAuthorization: ['accept_partial_authorization', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  buyerEmailAddress: ['buyer_email_address', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  billingAddress: ['billing_address', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return addressSchema;
  }))],
  shippingAddress: ['shipping_address', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return addressSchema;
  }))],
  note: ['note', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  statementDescriptionIdentifier: ['statement_description_identifier', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var createPaymentResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  payment: ['payment', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return paymentSchema;
  }))]
});

var getPaymentResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  payment: ['payment', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return paymentSchema;
  }))]
});

var listPaymentsResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  payments: ['payments', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return paymentSchema;
  })))],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

function _templateObject3$9() {
  var data = _taggedTemplateLiteralLoose(["/v2/payments/", "/complete"]);

  _templateObject3$9 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$d() {
  var data = _taggedTemplateLiteralLoose(["/v2/payments/", "/cancel"]);

  _templateObject2$d = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$k() {
  var data = _taggedTemplateLiteralLoose(["/v2/payments/", ""]);

  _templateObject$k = function _templateObject() {
    return data;
  };

  return data;
}
var PaymentsApi = /*#__PURE__*/function (_BaseApi) {
  _inheritsLoose(PaymentsApi, _BaseApi);

  function PaymentsApi() {
    return _BaseApi.apply(this, arguments) || this;
  }

  var _proto = PaymentsApi.prototype;

  /**
   * Retrieves a list of payments taken by the account making the request.
   *
   * The maximum results per page is 100.
   *
   * @param beginTime   The timestamp for the beginning of the reporting period, in RFC 3339 format.
   *                              Inclusive. Default: The current time minus one year.
   * @param endTime     The timestamp for the end of the reporting period, in RFC 3339 format.  Default: The
   *                              current time.
   * @param sortOrder   The order in which results are listed: - `ASC` - Oldest to newest. - `DESC` - Newest
   *                              to oldest (default).
   * @param cursor      A pagination cursor returned by a previous call to this endpoint. Provide this
   *                              cursor to retrieve the next set of results for the original query.  For more
   *                              information, see [Pagination](https://developer.squareup.
   *                              com/docs/basics/api101/pagination).
   * @param locationId  Limit results to the location supplied. By default, results are returned for the
   *                              default (main) location associated with the seller.
   * @param total       The exact amount in the `total_money` for a payment.
   * @param last4       The last four digits of a payment card.
   * @param cardBrand   The brand of the payment card (for example, VISA).
   * @param limit       The maximum number of results to be returned in a single page. It is possible to
   *                              receive fewer results than the specified limit on a given page.  The default value of
   *                              100 is also the maximum allowed value. If the provided value is  greater than 100, it
   *                              is ignored and the default value is used instead.  Default: `100`
   * @return Response from the API call
   */
  _proto.listPayments =
  /*#__PURE__*/
  function () {
    var _listPayments = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(beginTime, endTime, sortOrder, cursor, locationId, total, last4, cardBrand, limit, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = this.createRequest('GET', '/v2/payments');
              mapped = req.prepareArgs({
                beginTime: [beginTime, schema.optional(schema.string())],
                endTime: [endTime, schema.optional(schema.string())],
                sortOrder: [sortOrder, schema.optional(schema.string())],
                cursor: [cursor, schema.optional(schema.string())],
                locationId: [locationId, schema.optional(schema.string())],
                total: [total, schema.optional(schema.number())],
                last4: [last4, schema.optional(schema.string())],
                cardBrand: [cardBrand, schema.optional(schema.string())],
                limit: [limit, schema.optional(schema.number())]
              });
              req.query('begin_time', mapped.beginTime);
              req.query('end_time', mapped.endTime);
              req.query('sort_order', mapped.sortOrder);
              req.query('cursor', mapped.cursor);
              req.query('location_id', mapped.locationId);
              req.query('total', mapped.total);
              req.query('last_4', mapped.last4);
              req.query('card_brand', mapped.cardBrand);
              req.query('limit', mapped.limit);
              return _context.abrupt("return", req.callAsJson(listPaymentsResponseSchema, requestOptions));

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function listPayments(_x, _x2, _x3, _x4, _x5, _x6, _x7, _x8, _x9, _x10) {
      return _listPayments.apply(this, arguments);
    }

    return listPayments;
  }()
  /**
   * Charges a payment source (for example, a card
   * represented by customer's card on file or a card nonce). In addition
   * to the payment source, the request must include the
   * amount to accept for the payment.
   *
   * There are several optional parameters that you can include in the request
   * (for example, tip money, whether to autocomplete the payment, or a reference ID
   * to correlate this payment with another system).
   *
   * The `PAYMENTS_WRITE_ADDITIONAL_RECIPIENTS` OAuth permission is required
   * to enable application fees.
   *
   * @param body An object containing the fields to POST for the request.  See the
   *                                            corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.createPayment =
  /*#__PURE__*/
  function () {
    var _createPayment = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req = this.createRequest('POST', '/v2/payments');
              mapped = req.prepareArgs({
                body: [body, createPaymentRequestSchema]
              });
              req.json(mapped.body);
              return _context2.abrupt("return", req.callAsJson(createPaymentResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function createPayment(_x11, _x12) {
      return _createPayment.apply(this, arguments);
    }

    return createPayment;
  }()
  /**
   * Cancels (voids) a payment identified by the idempotency key that is specified in the
   * request.
   *
   * Use this method when the status of a `CreatePayment` request is unknown (for example, after you send
   * a
   * `CreatePayment` request, a network error occurs and you do not get a response). In this case, you
   * can
   * direct Square to cancel the payment using this endpoint. In the request, you provide the same
   * idempotency key that you provided in your `CreatePayment` request that you want to cancel. After
   * canceling the payment, you can submit your `CreatePayment` request again.
   *
   * Note that if no payment with the specified idempotency key is found, no action is taken and the
   * endpoint
   * returns successfully.
   *
   * @param body An object containing the fields to POST for the
   *                                                            request.  See the corresponding object definition for
   *                                                            field details.
   * @return Response from the API call
   */
  ;

  _proto.cancelPaymentByIdempotencyKey =
  /*#__PURE__*/
  function () {
    var _cancelPaymentByIdempotencyKey = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              req = this.createRequest('POST', '/v2/payments/cancel');
              mapped = req.prepareArgs({
                body: [body, cancelPaymentByIdempotencyKeyRequestSchema]
              });
              req.json(mapped.body);
              return _context3.abrupt("return", req.callAsJson(cancelPaymentByIdempotencyKeyResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function cancelPaymentByIdempotencyKey(_x13, _x14) {
      return _cancelPaymentByIdempotencyKey.apply(this, arguments);
    }

    return cancelPaymentByIdempotencyKey;
  }()
  /**
   * Retrieves details for a specific payment.
   *
   * @param paymentId  A unique ID for the desired payment.
   * @return Response from the API call
   */
  ;

  _proto.getPayment =
  /*#__PURE__*/
  function () {
    var _getPayment = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(paymentId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                paymentId: [paymentId, schema.string()]
              });
              req.appendTemplatePath(_templateObject$k(), mapped.paymentId);
              return _context4.abrupt("return", req.callAsJson(getPaymentResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function getPayment(_x15, _x16) {
      return _getPayment.apply(this, arguments);
    }

    return getPayment;
  }()
  /**
   * Cancels (voids) a payment. If you set `autocomplete` to `false` when creating a payment,
   * you can cancel the payment using this endpoint.
   *
   * @param paymentId  The `payment_id` identifying the payment to be canceled.
   * @return Response from the API call
   */
  ;

  _proto.cancelPayment =
  /*#__PURE__*/
  function () {
    var _cancelPayment = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5(paymentId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              req = this.createRequest('POST');
              mapped = req.prepareArgs({
                paymentId: [paymentId, schema.string()]
              });
              req.appendTemplatePath(_templateObject2$d(), mapped.paymentId);
              return _context5.abrupt("return", req.callAsJson(cancelPaymentResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function cancelPayment(_x17, _x18) {
      return _cancelPayment.apply(this, arguments);
    }

    return cancelPayment;
  }()
  /**
   * Completes (captures) a payment.
   *
   * By default, payments are set to complete immediately after they are created.
   * If you set `autocomplete` to `false` when creating a payment, you can complete (capture)
   * the payment using this endpoint.
   *
   * @param paymentId  The unique ID identifying the payment to be completed.
   * @return Response from the API call
   */
  ;

  _proto.completePayment =
  /*#__PURE__*/
  function () {
    var _completePayment = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee6(paymentId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              req = this.createRequest('POST');
              mapped = req.prepareArgs({
                paymentId: [paymentId, schema.string()]
              });
              req.appendTemplatePath(_templateObject3$9(), mapped.paymentId);
              return _context6.abrupt("return", req.callAsJson(completePaymentResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function completePayment(_x19, _x20) {
      return _completePayment.apply(this, arguments);
    }

    return completePayment;
  }();

  return PaymentsApi;
}(BaseApi);

var paymentRefundSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.string()],
  status: ['status', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  locationId: ['location_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  amountMoney: ['amount_money', /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  })],
  appFeeMoney: ['app_fee_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  processingFee: ['processing_fee', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return processingFeeSchema;
  })))],
  paymentId: ['payment_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  orderId: ['order_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  reason: ['reason', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  createdAt: ['created_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  updatedAt: ['updated_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var getPaymentRefundResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  refund: ['refund', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return paymentRefundSchema;
  }))]
});

var listPaymentRefundsResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  refunds: ['refunds', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return paymentRefundSchema;
  })))],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var refundPaymentRequestSchema = /*#__PURE__*/schema.object({
  idempotencyKey: ['idempotency_key', /*#__PURE__*/schema.string()],
  amountMoney: ['amount_money', /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  })],
  appFeeMoney: ['app_fee_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  paymentId: ['payment_id', /*#__PURE__*/schema.string()],
  reason: ['reason', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var refundPaymentResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  refund: ['refund', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return paymentRefundSchema;
  }))]
});

function _templateObject$l() {
  var data = _taggedTemplateLiteralLoose(["/v2/refunds/", ""]);

  _templateObject$l = function _templateObject() {
    return data;
  };

  return data;
}
var RefundsApi = /*#__PURE__*/function (_BaseApi) {
  _inheritsLoose(RefundsApi, _BaseApi);

  function RefundsApi() {
    return _BaseApi.apply(this, arguments) || this;
  }

  var _proto = RefundsApi.prototype;

  /**
   * Retrieves a list of refunds for the account making the request.
   *
   * The maximum results per page is 100.
   *
   * @param beginTime   The timestamp for the beginning of the requested reporting period, in RFC 3339
   *                              format.  Default: The current time minus one year.
   * @param endTime     The timestamp for the end of the requested reporting period, in RFC 3339 format.
   *                              Default: The current time.
   * @param sortOrder   The order in which results are listed: - `ASC` - Oldest to newest. - `DESC` - Newest
   *                              to oldest (default).
   * @param cursor      A pagination cursor returned by a previous call to this endpoint. Provide this
   *                              cursor to retrieve the next set of results for the original query.  For more
   *                              information, see [Pagination](https://developer.squareup.
   *                              com/docs/basics/api101/pagination).
   * @param locationId  Limit results to the location supplied. By default, results are returned for all
   *                              locations associated with the seller.
   * @param status      If provided, only refunds with the given status are returned. For a list of refund
   *                              status values, see [PaymentRefund](#type-paymentrefund).  Default: If omitted,
   *                              refunds are returned regardless of their status.
   * @param sourceType  If provided, only refunds with the given source type are returned. - `CARD` - List
   *                              refunds only for payments where `CARD` was specified as the payment source.  Default:
   *                              If omitted, refunds are returned regardless of the source type.
   * @param limit       The maximum number of results to be returned in a single page.  It is possible to
   *                              receive fewer results than the specified limit on a given page.  If the supplied
   *                              value is greater than 100, no more than 100 results are returned.  Default: 100
   * @return Response from the API call
   */
  _proto.listPaymentRefunds =
  /*#__PURE__*/
  function () {
    var _listPaymentRefunds = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(beginTime, endTime, sortOrder, cursor, locationId, status, sourceType, limit, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = this.createRequest('GET', '/v2/refunds');
              mapped = req.prepareArgs({
                beginTime: [beginTime, schema.optional(schema.string())],
                endTime: [endTime, schema.optional(schema.string())],
                sortOrder: [sortOrder, schema.optional(schema.string())],
                cursor: [cursor, schema.optional(schema.string())],
                locationId: [locationId, schema.optional(schema.string())],
                status: [status, schema.optional(schema.string())],
                sourceType: [sourceType, schema.optional(schema.string())],
                limit: [limit, schema.optional(schema.number())]
              });
              req.query('begin_time', mapped.beginTime);
              req.query('end_time', mapped.endTime);
              req.query('sort_order', mapped.sortOrder);
              req.query('cursor', mapped.cursor);
              req.query('location_id', mapped.locationId);
              req.query('status', mapped.status);
              req.query('source_type', mapped.sourceType);
              req.query('limit', mapped.limit);
              return _context.abrupt("return", req.callAsJson(listPaymentRefundsResponseSchema, requestOptions));

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function listPaymentRefunds(_x, _x2, _x3, _x4, _x5, _x6, _x7, _x8, _x9) {
      return _listPaymentRefunds.apply(this, arguments);
    }

    return listPaymentRefunds;
  }()
  /**
   * Refunds a payment. You can refund the entire payment amount or a
   * portion of it.
   *
   * @param body An object containing the fields to POST for the request.  See the
   *                                            corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.refundPayment =
  /*#__PURE__*/
  function () {
    var _refundPayment = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req = this.createRequest('POST', '/v2/refunds');
              mapped = req.prepareArgs({
                body: [body, refundPaymentRequestSchema]
              });
              req.json(mapped.body);
              return _context2.abrupt("return", req.callAsJson(refundPaymentResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function refundPayment(_x10, _x11) {
      return _refundPayment.apply(this, arguments);
    }

    return refundPayment;
  }()
  /**
   * Retrieves a specific refund using the `refund_id`.
   *
   * @param refundId  The unique ID for the desired `PaymentRefund`.
   * @return Response from the API call
   */
  ;

  _proto.getPaymentRefund =
  /*#__PURE__*/
  function () {
    var _getPaymentRefund = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(refundId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                refundId: [refundId, schema.string()]
              });
              req.appendTemplatePath(_templateObject$l(), mapped.refundId);
              return _context3.abrupt("return", req.callAsJson(getPaymentRefundResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function getPaymentRefund(_x12, _x13) {
      return _getPaymentRefund.apply(this, arguments);
    }

    return getPaymentRefund;
  }();

  return RefundsApi;
}(BaseApi);

var subscriptionSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  locationId: ['location_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  planId: ['plan_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  customerId: ['customer_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  startDate: ['start_date', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  canceledDate: ['canceled_date', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  status: ['status', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  taxPercentage: ['tax_percentage', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  invoiceIds: ['invoice_ids', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  priceOverrideMoney: ['price_override_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  version: ['version', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  createdAt: ['created_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  cardId: ['card_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  paidUntilDate: ['paid_until_date', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  timezone: ['timezone', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var cancelSubscriptionResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  subscription: ['subscription', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return subscriptionSchema;
  }))]
});

var createSubscriptionRequestSchema = /*#__PURE__*/schema.object({
  idempotencyKey: ['idempotency_key', /*#__PURE__*/schema.string()],
  locationId: ['location_id', /*#__PURE__*/schema.string()],
  planId: ['plan_id', /*#__PURE__*/schema.string()],
  customerId: ['customer_id', /*#__PURE__*/schema.string()],
  startDate: ['start_date', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  canceledDate: ['canceled_date', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  taxPercentage: ['tax_percentage', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  priceOverrideMoney: ['price_override_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  cardId: ['card_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  timezone: ['timezone', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var createSubscriptionResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  subscription: ['subscription', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return subscriptionSchema;
  }))]
});

var subscriptionEventSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.string()],
  subscriptionEventType: ['subscription_event_type', /*#__PURE__*/schema.string()],
  effectiveDate: ['effective_date', /*#__PURE__*/schema.string()],
  planId: ['plan_id', /*#__PURE__*/schema.string()]
});

var listSubscriptionEventsResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  subscriptionEvents: ['subscription_events', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return subscriptionEventSchema;
  })))],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var retrieveSubscriptionResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  subscription: ['subscription', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return subscriptionSchema;
  }))]
});

var searchSubscriptionsFilterSchema = /*#__PURE__*/schema.object({
  customerIds: ['customer_ids', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  locationIds: ['location_ids', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))]
});

var searchSubscriptionsQuerySchema = /*#__PURE__*/schema.object({
  filter: ['filter', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return searchSubscriptionsFilterSchema;
  }))]
});

var searchSubscriptionsRequestSchema = /*#__PURE__*/schema.object({
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  limit: ['limit', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  query: ['query', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return searchSubscriptionsQuerySchema;
  }))]
});

var searchSubscriptionsResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  subscriptions: ['subscriptions', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return subscriptionSchema;
  })))],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var updateSubscriptionRequestSchema = /*#__PURE__*/schema.object({
  subscription: ['subscription', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return subscriptionSchema;
  }))]
});

var updateSubscriptionResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  subscription: ['subscription', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return subscriptionSchema;
  }))]
});

function _templateObject4$6() {
  var data = _taggedTemplateLiteralLoose(["/v2/subscriptions/", "/events"]);

  _templateObject4$6 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$a() {
  var data = _taggedTemplateLiteralLoose(["/v2/subscriptions/", "/cancel"]);

  _templateObject3$a = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$e() {
  var data = _taggedTemplateLiteralLoose(["/v2/subscriptions/", ""]);

  _templateObject2$e = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$m() {
  var data = _taggedTemplateLiteralLoose(["/v2/subscriptions/", ""]);

  _templateObject$m = function _templateObject() {
    return data;
  };

  return data;
}
var SubscriptionsApi = /*#__PURE__*/function (_BaseApi) {
  _inheritsLoose(SubscriptionsApi, _BaseApi);

  function SubscriptionsApi() {
    return _BaseApi.apply(this, arguments) || this;
  }

  var _proto = SubscriptionsApi.prototype;

  /**
   * Creates a subscription for a customer to a subscription plan.
   *
   * If you provide a card on file in the request, Square charges the card for
   * the subscription. Otherwise, Square bills an invoice to the customer's email
   * address. The subscription starts immediately, unless the request includes
   * the optional `start_date`. Each individual subscription is associated with a particular location.
   *
   * @param body An object containing the fields to POST for the request.  See the
   *                                                 corresponding object definition for field details.
   * @return Response from the API call
   */
  _proto.createSubscription =
  /*#__PURE__*/
  function () {
    var _createSubscription = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = this.createRequest('POST', '/v2/subscriptions');
              mapped = req.prepareArgs({
                body: [body, createSubscriptionRequestSchema]
              });
              req.json(mapped.body);
              return _context.abrupt("return", req.callAsJson(createSubscriptionResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function createSubscription(_x, _x2) {
      return _createSubscription.apply(this, arguments);
    }

    return createSubscription;
  }()
  /**
   * Searches for subscriptions.
   * Results are ordered chronologically by subscription creation date. If
   * the request specifies more than one location ID,
   * the endpoint orders the result
   * by location ID, and then by creation date within each location. If no locations are given
   * in the query, all locations are searched.
   *
   * You can also optionally specify `customer_ids` to search by customer.
   * If left unset, all customers
   * associated with the specified locations are returned.
   * If the request specifies customer IDs, the endpoint orders results
   * first by location, within location by customer ID, and within
   * customer by subscription creation date.
   *
   * For more information, see
   * [Retrieve subscriptions](https://developer.squareup.com/docs/subscriptions-api/overview#retrieve-
   * subscriptions).
   *
   * @param body An object containing the fields to POST for the request.  See
   *                                                  the corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.searchSubscriptions =
  /*#__PURE__*/
  function () {
    var _searchSubscriptions = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req = this.createRequest('POST', '/v2/subscriptions/search');
              mapped = req.prepareArgs({
                body: [body, searchSubscriptionsRequestSchema]
              });
              req.json(mapped.body);
              return _context2.abrupt("return", req.callAsJson(searchSubscriptionsResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function searchSubscriptions(_x3, _x4) {
      return _searchSubscriptions.apply(this, arguments);
    }

    return searchSubscriptions;
  }()
  /**
   * Retrieves a subscription.
   *
   * @param subscriptionId  The ID of the subscription to retrieve.
   * @return Response from the API call
   */
  ;

  _proto.retrieveSubscription =
  /*#__PURE__*/
  function () {
    var _retrieveSubscription = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(subscriptionId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                subscriptionId: [subscriptionId, schema.string()]
              });
              req.appendTemplatePath(_templateObject$m(), mapped.subscriptionId);
              return _context3.abrupt("return", req.callAsJson(retrieveSubscriptionResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function retrieveSubscription(_x5, _x6) {
      return _retrieveSubscription.apply(this, arguments);
    }

    return retrieveSubscription;
  }()
  /**
   * Updates a subscription. You can set, modify, and clear the
   * `subscription` field values.
   *
   * @param subscriptionId  The ID for the subscription to update.
   * @param body            An object containing the fields to POST for the
   *                                                            request.  See the corresponding object definition for
   *                                                            field details.
   * @return Response from the API call
   */
  ;

  _proto.updateSubscription =
  /*#__PURE__*/
  function () {
    var _updateSubscription = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(subscriptionId, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              req = this.createRequest('PUT');
              mapped = req.prepareArgs({
                subscriptionId: [subscriptionId, schema.string()],
                body: [body, updateSubscriptionRequestSchema]
              });
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject2$e(), mapped.subscriptionId);
              return _context4.abrupt("return", req.callAsJson(updateSubscriptionResponseSchema, requestOptions));

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function updateSubscription(_x7, _x8, _x9) {
      return _updateSubscription.apply(this, arguments);
    }

    return updateSubscription;
  }()
  /**
   * Sets the `canceled_date` field to the end of the active billing period.
   * After this date, the status changes from ACTIVE to CANCELED.
   *
   * @param subscriptionId  The ID of the subscription to cancel.
   * @return Response from the API call
   */
  ;

  _proto.cancelSubscription =
  /*#__PURE__*/
  function () {
    var _cancelSubscription = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5(subscriptionId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              req = this.createRequest('POST');
              mapped = req.prepareArgs({
                subscriptionId: [subscriptionId, schema.string()]
              });
              req.appendTemplatePath(_templateObject3$a(), mapped.subscriptionId);
              return _context5.abrupt("return", req.callAsJson(cancelSubscriptionResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function cancelSubscription(_x10, _x11) {
      return _cancelSubscription.apply(this, arguments);
    }

    return cancelSubscription;
  }()
  /**
   * Lists all events for a specific subscription.
   * In the current implementation, only `START_SUBSCRIPTION` and `STOP_SUBSCRIPTION` (when the
   * subscription was canceled) events are returned.
   *
   * @param subscriptionId  The ID of the subscription to retrieve the events for.
   * @param cursor          A pagination cursor returned by a previous call to this endpoint. Provide this
   *                                  to retrieve the next set of results for the original query.  For more information,
   *                                  see [Pagination](https://developer.squareup.com/docs/working-with-
   *                                  apis/pagination).
   * @param limit           The upper limit on the number of subscription events to return  in the response.
   *                                  Default: `200`
   * @return Response from the API call
   */
  ;

  _proto.listSubscriptionEvents =
  /*#__PURE__*/
  function () {
    var _listSubscriptionEvents = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee6(subscriptionId, cursor, limit, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                subscriptionId: [subscriptionId, schema.string()],
                cursor: [cursor, schema.optional(schema.string())],
                limit: [limit, schema.optional(schema.number())]
              });
              req.query('cursor', mapped.cursor);
              req.query('limit', mapped.limit);
              req.appendTemplatePath(_templateObject4$6(), mapped.subscriptionId);
              return _context6.abrupt("return", req.callAsJson(listSubscriptionEventsResponseSchema, requestOptions));

            case 6:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function listSubscriptionEvents(_x12, _x13, _x14, _x15) {
      return _listSubscriptionEvents.apply(this, arguments);
    }

    return listSubscriptionEvents;
  }();

  return SubscriptionsApi;
}(BaseApi);

var teamMemberAssignedLocationsSchema = /*#__PURE__*/schema.object({
  assignmentType: ['assignment_type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  locationIds: ['location_ids', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))]
});

var teamMemberSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  referenceId: ['reference_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  isOwner: ['is_owner', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  status: ['status', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  givenName: ['given_name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  familyName: ['family_name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  emailAddress: ['email_address', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  phoneNumber: ['phone_number', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  createdAt: ['created_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  updatedAt: ['updated_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  assignedLocations: ['assigned_locations', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return teamMemberAssignedLocationsSchema;
  }))]
});

var createTeamMemberRequestSchema = /*#__PURE__*/schema.object({
  idempotencyKey: ['idempotency_key', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  teamMember: ['team_member', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return teamMemberSchema;
  }))]
});

var bulkCreateTeamMembersRequestSchema = /*#__PURE__*/schema.object({
  teamMembers: ['team_members', /*#__PURE__*/schema.dict( /*#__PURE__*/schema.lazy(function () {
    return createTeamMemberRequestSchema;
  }))]
});

var createTeamMemberResponseSchema = /*#__PURE__*/schema.object({
  teamMember: ['team_member', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return teamMemberSchema;
  }))],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var bulkCreateTeamMembersResponseSchema = /*#__PURE__*/schema.object({
  teamMembers: ['team_members', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.dict( /*#__PURE__*/schema.lazy(function () {
    return createTeamMemberResponseSchema;
  })))],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var updateTeamMemberRequestSchema = /*#__PURE__*/schema.object({
  teamMember: ['team_member', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return teamMemberSchema;
  }))]
});

var bulkUpdateTeamMembersRequestSchema = /*#__PURE__*/schema.object({
  teamMembers: ['team_members', /*#__PURE__*/schema.dict( /*#__PURE__*/schema.lazy(function () {
    return updateTeamMemberRequestSchema;
  }))]
});

var updateTeamMemberResponseSchema = /*#__PURE__*/schema.object({
  teamMember: ['team_member', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return teamMemberSchema;
  }))],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var bulkUpdateTeamMembersResponseSchema = /*#__PURE__*/schema.object({
  teamMembers: ['team_members', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.dict( /*#__PURE__*/schema.lazy(function () {
    return updateTeamMemberResponseSchema;
  })))],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var retrieveTeamMemberResponseSchema = /*#__PURE__*/schema.object({
  teamMember: ['team_member', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return teamMemberSchema;
  }))],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var jobAssignmentSchema = /*#__PURE__*/schema.object({
  jobTitle: ['job_title', /*#__PURE__*/schema.string()],
  payType: ['pay_type', /*#__PURE__*/schema.string()],
  hourlyRate: ['hourly_rate', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  annualRate: ['annual_rate', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  }))],
  weeklyHours: ['weekly_hours', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())]
});

var wageSettingSchema = /*#__PURE__*/schema.object({
  teamMemberId: ['team_member_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  jobAssignments: ['job_assignments', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return jobAssignmentSchema;
  })))],
  isOvertimeExempt: ['is_overtime_exempt', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  version: ['version', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  createdAt: ['created_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  updatedAt: ['updated_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var retrieveWageSettingResponseSchema = /*#__PURE__*/schema.object({
  wageSetting: ['wage_setting', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return wageSettingSchema;
  }))],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var searchTeamMembersFilterSchema = /*#__PURE__*/schema.object({
  locationIds: ['location_ids', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  status: ['status', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var searchTeamMembersQuerySchema = /*#__PURE__*/schema.object({
  filter: ['filter', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return searchTeamMembersFilterSchema;
  }))]
});

var searchTeamMembersRequestSchema = /*#__PURE__*/schema.object({
  query: ['query', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return searchTeamMembersQuerySchema;
  }))],
  limit: ['limit', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var searchTeamMembersResponseSchema = /*#__PURE__*/schema.object({
  teamMembers: ['team_members', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return teamMemberSchema;
  })))],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var updateWageSettingRequestSchema = /*#__PURE__*/schema.object({
  wageSetting: ['wage_setting', /*#__PURE__*/schema.lazy(function () {
    return wageSettingSchema;
  })]
});

var updateWageSettingResponseSchema = /*#__PURE__*/schema.object({
  wageSetting: ['wage_setting', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return wageSettingSchema;
  }))],
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

function _templateObject4$7() {
  var data = _taggedTemplateLiteralLoose(["/v2/team-members/", "/wage-setting"]);

  _templateObject4$7 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$b() {
  var data = _taggedTemplateLiteralLoose(["/v2/team-members/", "/wage-setting"]);

  _templateObject3$b = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$f() {
  var data = _taggedTemplateLiteralLoose(["/v2/team-members/", ""]);

  _templateObject2$f = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$n() {
  var data = _taggedTemplateLiteralLoose(["/v2/team-members/", ""]);

  _templateObject$n = function _templateObject() {
    return data;
  };

  return data;
}
var TeamApi = /*#__PURE__*/function (_BaseApi) {
  _inheritsLoose(TeamApi, _BaseApi);

  function TeamApi() {
    return _BaseApi.apply(this, arguments) || this;
  }

  var _proto = TeamApi.prototype;

  /**
   * Creates a single `TeamMember` object. The `TeamMember` will be returned on successful creates.
   * You must provide the following values in your request to this endpoint:
   * - `given_name`
   * - `family_name`
   *
   * Learn about [Troubleshooting the Teams API](https://developer.squareup.
   * com/docs/team/troubleshooting#createteammember).
   *
   * @param body An object containing the fields to POST for the request.  See the
   *                                               corresponding object definition for field details.
   * @return Response from the API call
   */
  _proto.createTeamMember =
  /*#__PURE__*/
  function () {
    var _createTeamMember = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = this.createRequest('POST', '/v2/team-members');
              mapped = req.prepareArgs({
                body: [body, createTeamMemberRequestSchema]
              });
              req.json(mapped.body);
              return _context.abrupt("return", req.callAsJson(createTeamMemberResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function createTeamMember(_x, _x2) {
      return _createTeamMember.apply(this, arguments);
    }

    return createTeamMember;
  }()
  /**
   * Creates multiple `TeamMember` objects. The created `TeamMember` objects will be returned on
   * successful creates.
   * This process is non-transactional and will process as much of the request as is possible. If one of
   * the creates in
   * the request cannot be successfully processed, the request will NOT be marked as failed, but the body
   * of the response
   * will contain explicit error information for this particular create.
   *
   * Learn about [Troubleshooting the Teams API](https://developer.squareup.
   * com/docs/team/troubleshooting#bulkcreateteammembers).
   *
   * @param body An object containing the fields to POST for the request.  See
   *                                                    the corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.bulkCreateTeamMembers =
  /*#__PURE__*/
  function () {
    var _bulkCreateTeamMembers = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req = this.createRequest('POST', '/v2/team-members/bulk-create');
              mapped = req.prepareArgs({
                body: [body, bulkCreateTeamMembersRequestSchema]
              });
              req.json(mapped.body);
              return _context2.abrupt("return", req.callAsJson(bulkCreateTeamMembersResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function bulkCreateTeamMembers(_x3, _x4) {
      return _bulkCreateTeamMembers.apply(this, arguments);
    }

    return bulkCreateTeamMembers;
  }()
  /**
   * Updates multiple `TeamMember` objects. The updated `TeamMember` objects will be returned on
   * successful updates.
   * This process is non-transactional and will process as much of the request as is possible. If one of
   * the updates in
   * the request cannot be successfully processed, the request will NOT be marked as failed, but the body
   * of the response
   * will contain explicit error information for this particular update.
   * Learn about [Troubleshooting the Teams API](https://developer.squareup.
   * com/docs/team/troubleshooting#bulkupdateteammembers).
   *
   * @param body An object containing the fields to POST for the request.  See
   *                                                    the corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.bulkUpdateTeamMembers =
  /*#__PURE__*/
  function () {
    var _bulkUpdateTeamMembers = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              req = this.createRequest('POST', '/v2/team-members/bulk-update');
              mapped = req.prepareArgs({
                body: [body, bulkUpdateTeamMembersRequestSchema]
              });
              req.json(mapped.body);
              return _context3.abrupt("return", req.callAsJson(bulkUpdateTeamMembersResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function bulkUpdateTeamMembers(_x5, _x6) {
      return _bulkUpdateTeamMembers.apply(this, arguments);
    }

    return bulkUpdateTeamMembers;
  }()
  /**
   * Returns a paginated list of `TeamMember` objects for a business.
   * The list to be returned can be filtered by:
   * - location IDs **and**
   * - `status`
   *
   * @param body An object containing the fields to POST for the request.  See the
   *                                                corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.searchTeamMembers =
  /*#__PURE__*/
  function () {
    var _searchTeamMembers = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              req = this.createRequest('POST', '/v2/team-members/search');
              mapped = req.prepareArgs({
                body: [body, searchTeamMembersRequestSchema]
              });
              req.json(mapped.body);
              return _context4.abrupt("return", req.callAsJson(searchTeamMembersResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function searchTeamMembers(_x7, _x8) {
      return _searchTeamMembers.apply(this, arguments);
    }

    return searchTeamMembers;
  }()
  /**
   * Retrieve a `TeamMember` object for the given `TeamMember.id`.
   * Learn about [Troubleshooting the Teams API](https://developer.squareup.
   * com/docs/team/troubleshooting#retrieveteammember).
   *
   * @param teamMemberId   The ID of the team member to retrieve.
   * @return Response from the API call
   */
  ;

  _proto.retrieveTeamMember =
  /*#__PURE__*/
  function () {
    var _retrieveTeamMember = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5(teamMemberId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                teamMemberId: [teamMemberId, schema.string()]
              });
              req.appendTemplatePath(_templateObject$n(), mapped.teamMemberId);
              return _context5.abrupt("return", req.callAsJson(retrieveTeamMemberResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function retrieveTeamMember(_x9, _x10) {
      return _retrieveTeamMember.apply(this, arguments);
    }

    return retrieveTeamMember;
  }()
  /**
   * Updates a single `TeamMember` object. The `TeamMember` will be returned on successful updates.
   * Learn about [Troubleshooting the Teams API](https://developer.squareup.
   * com/docs/team/troubleshooting#updateteammember).
   *
   * @param teamMemberId   The ID of the team member to update.
   * @param body           An object containing the fields to POST for the request.
   *                                                         See the corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.updateTeamMember =
  /*#__PURE__*/
  function () {
    var _updateTeamMember = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee6(teamMemberId, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              req = this.createRequest('PUT');
              mapped = req.prepareArgs({
                teamMemberId: [teamMemberId, schema.string()],
                body: [body, updateTeamMemberRequestSchema]
              });
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject2$f(), mapped.teamMemberId);
              return _context6.abrupt("return", req.callAsJson(updateTeamMemberResponseSchema, requestOptions));

            case 5:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function updateTeamMember(_x11, _x12, _x13) {
      return _updateTeamMember.apply(this, arguments);
    }

    return updateTeamMember;
  }()
  /**
   * Retrieve a `WageSetting` object for a team member specified
   * by `TeamMember.id`.
   * Learn about [Troubleshooting the Teams API](https://developer.squareup.
   * com/docs/team/troubleshooting#retrievewagesetting).
   *
   * @param teamMemberId   The ID of the team member to retrieve wage setting for
   * @return Response from the API call
   */
  ;

  _proto.retrieveWageSetting =
  /*#__PURE__*/
  function () {
    var _retrieveWageSetting = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee7(teamMemberId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                teamMemberId: [teamMemberId, schema.string()]
              });
              req.appendTemplatePath(_templateObject3$b(), mapped.teamMemberId);
              return _context7.abrupt("return", req.callAsJson(retrieveWageSettingResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function retrieveWageSetting(_x14, _x15) {
      return _retrieveWageSetting.apply(this, arguments);
    }

    return retrieveWageSetting;
  }()
  /**
   * Creates or updates a `WageSetting` object. The object is created if a
   * `WageSetting` with the specified `team_member_id` does not exist. Otherwise,
   * it fully replaces the `WageSetting` object for the team member.
   * The `WageSetting` will be returned upon successful update.
   * Learn about [Troubleshooting the Teams API](https://developer.squareup.
   * com/docs/team/troubleshooting#updatewagesetting).
   *
   * @param teamMemberId   The ID of the team member to update the `WageSetting`
   *                                                          object for.
   * @param body           An object containing the fields to POST for the request.
   *                                                          See the corresponding object definition for field
   *                                                          details.
   * @return Response from the API call
   */
  ;

  _proto.updateWageSetting =
  /*#__PURE__*/
  function () {
    var _updateWageSetting = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee8(teamMemberId, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              req = this.createRequest('PUT');
              mapped = req.prepareArgs({
                teamMemberId: [teamMemberId, schema.string()],
                body: [body, updateWageSettingRequestSchema]
              });
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject4$7(), mapped.teamMemberId);
              return _context8.abrupt("return", req.callAsJson(updateWageSettingResponseSchema, requestOptions));

            case 5:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function updateWageSetting(_x16, _x17, _x18) {
      return _updateWageSetting.apply(this, arguments);
    }

    return updateWageSetting;
  }();

  return TeamApi;
}(BaseApi);

var tipSettingsSchema = /*#__PURE__*/schema.object({
  allowTipping: ['allow_tipping', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  separateTipScreen: ['separate_tip_screen', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  customTipField: ['custom_tip_field', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  tipPercentages: ['tip_percentages', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.number()))],
  smartTipping: ['smart_tipping', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())]
});

var deviceCheckoutOptionsSchema = /*#__PURE__*/schema.object({
  deviceId: ['device_id', /*#__PURE__*/schema.string()],
  skipReceiptScreen: ['skip_receipt_screen', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  tipSettings: ['tip_settings', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return tipSettingsSchema;
  }))]
});

var terminalCheckoutSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  amountMoney: ['amount_money', /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  })],
  referenceId: ['reference_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  note: ['note', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  deviceOptions: ['device_options', /*#__PURE__*/schema.lazy(function () {
    return deviceCheckoutOptionsSchema;
  })],
  deadlineDuration: ['deadline_duration', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  status: ['status', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  cancelReason: ['cancel_reason', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  paymentIds: ['payment_ids', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  createdAt: ['created_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  updatedAt: ['updated_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var cancelTerminalCheckoutResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  checkout: ['checkout', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return terminalCheckoutSchema;
  }))]
});

var terminalRefundSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  refundId: ['refund_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  paymentId: ['payment_id', /*#__PURE__*/schema.string()],
  orderId: ['order_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  amountMoney: ['amount_money', /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  })],
  reason: ['reason', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  deviceId: ['device_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  deadlineDuration: ['deadline_duration', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  status: ['status', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  cancelReason: ['cancel_reason', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  createdAt: ['created_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  updatedAt: ['updated_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var cancelTerminalRefundResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  refund: ['refund', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return terminalRefundSchema;
  }))]
});

var createTerminalCheckoutRequestSchema = /*#__PURE__*/schema.object({
  idempotencyKey: ['idempotency_key', /*#__PURE__*/schema.string()],
  checkout: ['checkout', /*#__PURE__*/schema.lazy(function () {
    return terminalCheckoutSchema;
  })]
});

var createTerminalCheckoutResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  checkout: ['checkout', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return terminalCheckoutSchema;
  }))]
});

var createTerminalRefundRequestSchema = /*#__PURE__*/schema.object({
  idempotencyKey: ['idempotency_key', /*#__PURE__*/schema.string()],
  refund: ['refund', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return terminalRefundSchema;
  }))]
});

var createTerminalRefundResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  refund: ['refund', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return terminalRefundSchema;
  }))]
});

var getTerminalCheckoutResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  checkout: ['checkout', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return terminalCheckoutSchema;
  }))]
});

var getTerminalRefundResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  refund: ['refund', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return terminalRefundSchema;
  }))]
});

var terminalCheckoutQueryFilterSchema = /*#__PURE__*/schema.object({
  deviceId: ['device_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  createdAt: ['created_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return timeRangeSchema;
  }))],
  status: ['status', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var terminalCheckoutQuerySortSchema = /*#__PURE__*/schema.object({
  sortOrder: ['sort_order', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var terminalCheckoutQuerySchema = /*#__PURE__*/schema.object({
  filter: ['filter', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return terminalCheckoutQueryFilterSchema;
  }))],
  sort: ['sort', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return terminalCheckoutQuerySortSchema;
  }))]
});

var searchTerminalCheckoutsRequestSchema = /*#__PURE__*/schema.object({
  query: ['query', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return terminalCheckoutQuerySchema;
  }))],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  limit: ['limit', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())]
});

var searchTerminalCheckoutsResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  checkouts: ['checkouts', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return terminalCheckoutSchema;
  })))],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var terminalRefundQueryFilterSchema = /*#__PURE__*/schema.object({
  deviceId: ['device_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  createdAt: ['created_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return timeRangeSchema;
  }))],
  status: ['status', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var terminalRefundQuerySortSchema = /*#__PURE__*/schema.object({
  sortOrder: ['sort_order', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var terminalRefundQuerySchema = /*#__PURE__*/schema.object({
  filter: ['filter', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return terminalRefundQueryFilterSchema;
  }))],
  sort: ['sort', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return terminalRefundQuerySortSchema;
  }))]
});

var searchTerminalRefundsRequestSchema = /*#__PURE__*/schema.object({
  query: ['query', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return terminalRefundQuerySchema;
  }))],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  limit: ['limit', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())]
});

var searchTerminalRefundsResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  refunds: ['refunds', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return terminalRefundSchema;
  })))],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

function _templateObject4$8() {
  var data = _taggedTemplateLiteralLoose(["/v2/terminals/refunds/", "/cancel"]);

  _templateObject4$8 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$c() {
  var data = _taggedTemplateLiteralLoose(["/v2/terminals/refunds/", ""]);

  _templateObject3$c = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$g() {
  var data = _taggedTemplateLiteralLoose(["/v2/terminals/checkouts/", "/cancel"]);

  _templateObject2$g = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$o() {
  var data = _taggedTemplateLiteralLoose(["/v2/terminals/checkouts/", ""]);

  _templateObject$o = function _templateObject() {
    return data;
  };

  return data;
}
var TerminalApi = /*#__PURE__*/function (_BaseApi) {
  _inheritsLoose(TerminalApi, _BaseApi);

  function TerminalApi() {
    return _BaseApi.apply(this, arguments) || this;
  }

  var _proto = TerminalApi.prototype;

  /**
   * Creates a new Terminal checkout request and sends it to the specified device to take a payment for
   * the requested amount.
   *
   * @param body An object containing the fields to POST for the request.  See
   *                                                     the corresponding object definition for field details.
   * @return Response from the API call
   */
  _proto.createTerminalCheckout =
  /*#__PURE__*/
  function () {
    var _createTerminalCheckout = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = this.createRequest('POST', '/v2/terminals/checkouts');
              mapped = req.prepareArgs({
                body: [body, createTerminalCheckoutRequestSchema]
              });
              req.json(mapped.body);
              return _context.abrupt("return", req.callAsJson(createTerminalCheckoutResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function createTerminalCheckout(_x, _x2) {
      return _createTerminalCheckout.apply(this, arguments);
    }

    return createTerminalCheckout;
  }()
  /**
   * Retrieves a filtered list of Terminal checkout requests created by the account making the request.
   *
   * @param body An object containing the fields to POST for the request.
   *                                                      See the corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.searchTerminalCheckouts =
  /*#__PURE__*/
  function () {
    var _searchTerminalCheckouts = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req = this.createRequest('POST', '/v2/terminals/checkouts/search');
              mapped = req.prepareArgs({
                body: [body, searchTerminalCheckoutsRequestSchema]
              });
              req.json(mapped.body);
              return _context2.abrupt("return", req.callAsJson(searchTerminalCheckoutsResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function searchTerminalCheckouts(_x3, _x4) {
      return _searchTerminalCheckouts.apply(this, arguments);
    }

    return searchTerminalCheckouts;
  }()
  /**
   * Retrieves a Terminal checkout request by checkout_id.
   *
   * @param checkoutId  Unique ID for the desired `TerminalCheckout`
   * @return Response from the API call
   */
  ;

  _proto.getTerminalCheckout =
  /*#__PURE__*/
  function () {
    var _getTerminalCheckout = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(checkoutId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                checkoutId: [checkoutId, schema.string()]
              });
              req.appendTemplatePath(_templateObject$o(), mapped.checkoutId);
              return _context3.abrupt("return", req.callAsJson(getTerminalCheckoutResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function getTerminalCheckout(_x5, _x6) {
      return _getTerminalCheckout.apply(this, arguments);
    }

    return getTerminalCheckout;
  }()
  /**
   * Cancels a Terminal checkout request if the status of the request permits it.
   *
   * @param checkoutId  Unique ID for the desired `TerminalCheckout`
   * @return Response from the API call
   */
  ;

  _proto.cancelTerminalCheckout =
  /*#__PURE__*/
  function () {
    var _cancelTerminalCheckout = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(checkoutId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              req = this.createRequest('POST');
              mapped = req.prepareArgs({
                checkoutId: [checkoutId, schema.string()]
              });
              req.appendTemplatePath(_templateObject2$g(), mapped.checkoutId);
              return _context4.abrupt("return", req.callAsJson(cancelTerminalCheckoutResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function cancelTerminalCheckout(_x7, _x8) {
      return _cancelTerminalCheckout.apply(this, arguments);
    }

    return cancelTerminalCheckout;
  }()
  /**
   * Creates a request to refund an Interac payment completed on a Square Terminal.
   *
   * @param body An object containing the fields to POST for the request.  See
   *                                                   the corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.createTerminalRefund =
  /*#__PURE__*/
  function () {
    var _createTerminalRefund = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              req = this.createRequest('POST', '/v2/terminals/refunds');
              mapped = req.prepareArgs({
                body: [body, createTerminalRefundRequestSchema]
              });
              req.json(mapped.body);
              return _context5.abrupt("return", req.callAsJson(createTerminalRefundResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function createTerminalRefund(_x9, _x10) {
      return _createTerminalRefund.apply(this, arguments);
    }

    return createTerminalRefund;
  }()
  /**
   * Retrieves a filtered list of Terminal Interac refund requests created by the seller making the
   * request.
   *
   * @param body An object containing the fields to POST for the request.  See
   *                                                    the corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.searchTerminalRefunds =
  /*#__PURE__*/
  function () {
    var _searchTerminalRefunds = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee6(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              req = this.createRequest('POST', '/v2/terminals/refunds/search');
              mapped = req.prepareArgs({
                body: [body, searchTerminalRefundsRequestSchema]
              });
              req.json(mapped.body);
              return _context6.abrupt("return", req.callAsJson(searchTerminalRefundsResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function searchTerminalRefunds(_x11, _x12) {
      return _searchTerminalRefunds.apply(this, arguments);
    }

    return searchTerminalRefunds;
  }()
  /**
   * Retrieves an Interac terminal refund object by ID.
   *
   * @param terminalRefundId   Unique ID for the desired `TerminalRefund`
   * @return Response from the API call
   */
  ;

  _proto.getTerminalRefund =
  /*#__PURE__*/
  function () {
    var _getTerminalRefund = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee7(terminalRefundId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                terminalRefundId: [terminalRefundId, schema.string()]
              });
              req.appendTemplatePath(_templateObject3$c(), mapped.terminalRefundId);
              return _context7.abrupt("return", req.callAsJson(getTerminalRefundResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function getTerminalRefund(_x13, _x14) {
      return _getTerminalRefund.apply(this, arguments);
    }

    return getTerminalRefund;
  }()
  /**
   * Cancels an Interac terminal refund request by refund request ID if the status of the request permits
   * it.
   *
   * @param terminalRefundId   Unique ID for the desired `TerminalRefund`
   * @return Response from the API call
   */
  ;

  _proto.cancelTerminalRefund =
  /*#__PURE__*/
  function () {
    var _cancelTerminalRefund = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee8(terminalRefundId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              req = this.createRequest('POST');
              mapped = req.prepareArgs({
                terminalRefundId: [terminalRefundId, schema.string()]
              });
              req.appendTemplatePath(_templateObject4$8(), mapped.terminalRefundId);
              return _context8.abrupt("return", req.callAsJson(cancelTerminalRefundResponseSchema, requestOptions));

            case 4:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function cancelTerminalRefund(_x15, _x16) {
      return _cancelTerminalRefund.apply(this, arguments);
    }

    return cancelTerminalRefund;
  }();

  return TerminalApi;
}(BaseApi);

var captureTransactionResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

var chargeRequestSchema = /*#__PURE__*/schema.object({
  idempotencyKey: ['idempotency_key', /*#__PURE__*/schema.string()],
  amountMoney: ['amount_money', /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  })],
  cardNonce: ['card_nonce', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  customerCardId: ['customer_card_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  delayCapture: ['delay_capture', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  referenceId: ['reference_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  note: ['note', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  customerId: ['customer_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  billingAddress: ['billing_address', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return addressSchema;
  }))],
  shippingAddress: ['shipping_address', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return addressSchema;
  }))],
  buyerEmailAddress: ['buyer_email_address', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  orderId: ['order_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  additionalRecipients: ['additional_recipients', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return chargeRequestAdditionalRecipientSchema;
  })))],
  verificationToken: ['verification_token', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var transactionSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  locationId: ['location_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  createdAt: ['created_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  tenders: ['tenders', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return tenderSchema;
  })))],
  refunds: ['refunds', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return refundSchema;
  })))],
  referenceId: ['reference_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  product: ['product', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  clientId: ['client_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  shippingAddress: ['shipping_address', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return addressSchema;
  }))],
  orderId: ['order_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var chargeResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  transaction: ['transaction', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return transactionSchema;
  }))]
});

var createRefundRequestSchema = /*#__PURE__*/schema.object({
  idempotencyKey: ['idempotency_key', /*#__PURE__*/schema.string()],
  tenderId: ['tender_id', /*#__PURE__*/schema.string()],
  reason: ['reason', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  amountMoney: ['amount_money', /*#__PURE__*/schema.lazy(function () {
    return moneySchema;
  })]
});

var createRefundResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  refund: ['refund', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return refundSchema;
  }))]
});

var listRefundsResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  refunds: ['refunds', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return refundSchema;
  })))],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var listTransactionsResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  transactions: ['transactions', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return transactionSchema;
  })))],
  cursor: ['cursor', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var retrieveTransactionResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  transaction: ['transaction', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return transactionSchema;
  }))]
});

var voidTransactionResponseSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))]
});

function _templateObject7$4() {
  var data = _taggedTemplateLiteralLoose(["/v2/locations/", "/transactions/", "/void"]);

  _templateObject7$4 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$4() {
  var data = _taggedTemplateLiteralLoose(["/v2/locations/", "/transactions/", "/refund"]);

  _templateObject6$4 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$5() {
  var data = _taggedTemplateLiteralLoose(["/v2/locations/", "/transactions/", "/capture"]);

  _templateObject5$5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$9() {
  var data = _taggedTemplateLiteralLoose(["/v2/locations/", "/transactions/", ""]);

  _templateObject4$9 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$d() {
  var data = _taggedTemplateLiteralLoose(["/v2/locations/", "/transactions"]);

  _templateObject3$d = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$h() {
  var data = _taggedTemplateLiteralLoose(["/v2/locations/", "/transactions"]);

  _templateObject2$h = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$p() {
  var data = _taggedTemplateLiteralLoose(["/v2/locations/", "/refunds"]);

  _templateObject$p = function _templateObject() {
    return data;
  };

  return data;
}
var TransactionsApi = /*#__PURE__*/function (_BaseApi) {
  _inheritsLoose(TransactionsApi, _BaseApi);

  function TransactionsApi() {
    return _BaseApi.apply(this, arguments) || this;
  }

  var _proto = TransactionsApi.prototype;

  /**
   * Lists refunds for one of a business's locations.
   *
   * In addition to full or partial tender refunds processed through Square APIs,
   * refunds may result from itemized returns or exchanges through Square's
   * Point of Sale applications.
   *
   * Refunds with a `status` of `PENDING` are not currently included in this
   * endpoint's response.
   *
   * Max results per [page](#paginatingresults): 50
   *
   * @param locationId  The ID of the location to list refunds for.
   * @param beginTime   The beginning of the requested reporting period, in RFC 3339 format.  See [Date
   *                              ranges](#dateranges) for details on date inclusivity/exclusivity.  Default value: The
   *                              current time minus one year.
   * @param endTime     The end of the requested reporting period, in RFC 3339 format.  See [Date
   *                              ranges](#dateranges) for details on date inclusivity/exclusivity.  Default value: The
   *                              current time.
   * @param sortOrder   The order in which results are listed in the response (`ASC` for oldest first,
   *                              `DESC` for newest first).  Default value: `DESC`
   * @param cursor      A pagination cursor returned by a previous call to this endpoint. Provide this to
   *                              retrieve the next set of results for your original query.  See [Paginating
   *                              results](#paginatingresults) for more information.
   * @return Response from the API call
   * @deprecated
   */
  _proto.listRefunds =
  /*#__PURE__*/
  function () {
    var _listRefunds = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(locationId, beginTime, endTime, sortOrder, cursor, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                beginTime: [beginTime, schema.optional(schema.string())],
                endTime: [endTime, schema.optional(schema.string())],
                sortOrder: [sortOrder, schema.optional(schema.string())],
                cursor: [cursor, schema.optional(schema.string())]
              });
              req.query('begin_time', mapped.beginTime);
              req.query('end_time', mapped.endTime);
              req.query('sort_order', mapped.sortOrder);
              req.query('cursor', mapped.cursor);
              req.appendTemplatePath(_templateObject$p(), mapped.locationId);
              req.deprecated('TransactionsApi.listRefunds');
              return _context.abrupt("return", req.callAsJson(listRefundsResponseSchema, requestOptions));

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function listRefunds(_x, _x2, _x3, _x4, _x5, _x6) {
      return _listRefunds.apply(this, arguments);
    }

    return listRefunds;
  }()
  /**
   * Lists transactions for a particular location.
   *
   * Transactions include payment information from sales and exchanges and refund
   * information from returns and exchanges.
   *
   * Max results per [page](#paginatingresults): 50
   *
   * @param locationId  The ID of the location to list transactions for.
   * @param beginTime   The beginning of the requested reporting period, in RFC 3339 format.  See [Date
   *                              ranges](#dateranges) for details on date inclusivity/exclusivity.  Default value: The
   *                              current time minus one year.
   * @param endTime     The end of the requested reporting period, in RFC 3339 format.  See [Date
   *                              ranges](#dateranges) for details on date inclusivity/exclusivity.  Default value: The
   *                              current time.
   * @param sortOrder   The order in which results are listed in the response (`ASC` for oldest first,
   *                              `DESC` for newest first).  Default value: `DESC`
   * @param cursor      A pagination cursor returned by a previous call to this endpoint. Provide this to
   *                              retrieve the next set of results for your original query.  See [Paginating
   *                              results](#paginatingresults) for more information.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.listTransactions =
  /*#__PURE__*/
  function () {
    var _listTransactions = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(locationId, beginTime, endTime, sortOrder, cursor, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                beginTime: [beginTime, schema.optional(schema.string())],
                endTime: [endTime, schema.optional(schema.string())],
                sortOrder: [sortOrder, schema.optional(schema.string())],
                cursor: [cursor, schema.optional(schema.string())]
              });
              req.query('begin_time', mapped.beginTime);
              req.query('end_time', mapped.endTime);
              req.query('sort_order', mapped.sortOrder);
              req.query('cursor', mapped.cursor);
              req.appendTemplatePath(_templateObject2$h(), mapped.locationId);
              req.deprecated('TransactionsApi.listTransactions');
              return _context2.abrupt("return", req.callAsJson(listTransactionsResponseSchema, requestOptions));

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function listTransactions(_x7, _x8, _x9, _x10, _x11, _x12) {
      return _listTransactions.apply(this, arguments);
    }

    return listTransactions;
  }()
  /**
   * Charges a card represented by a card nonce or a customer's card on file.
   *
   * Your request to this endpoint must include _either_:
   *
   * - A value for the `card_nonce` parameter (to charge a card nonce generated
   * with the `SqPaymentForm`)
   * - Values for the `customer_card_id` and `customer_id` parameters (to charge
   * a customer's card on file)
   *
   * In order for an eCommerce payment to potentially qualify for
   * [Square chargeback protection](https://squareup.com/help/article/5394), you
   * _must_ provide values for the following parameters in your request:
   *
   * - `buyer_email_address`
   * - At least one of `billing_address` or `shipping_address`
   *
   * When this response is returned, the amount of Square's processing fee might not yet be
   * calculated. To obtain the processing fee, wait about ten seconds and call
   * [RetrieveTransaction](#endpoint-retrievetransaction). See the `processing_fee_money`
   * field of each [Tender included](#type-tender) in the transaction.
   *
   * @param locationId  The ID of the location to associate the created transaction with.
   * @param body        An object containing the fields to POST for the request.  See the
   *                                            corresponding object definition for field details.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.charge =
  /*#__PURE__*/
  function () {
    var _charge = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(locationId, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              req = this.createRequest('POST');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                body: [body, chargeRequestSchema]
              });
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject3$d(), mapped.locationId);
              req.deprecated('TransactionsApi.charge');
              return _context3.abrupt("return", req.callAsJson(chargeResponseSchema, requestOptions));

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function charge(_x13, _x14, _x15) {
      return _charge.apply(this, arguments);
    }

    return charge;
  }()
  /**
   * Retrieves details for a single transaction.
   *
   * @param locationId     The ID of the transaction's associated location.
   * @param transactionId  The ID of the transaction to retrieve.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.retrieveTransaction =
  /*#__PURE__*/
  function () {
    var _retrieveTransaction = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(locationId, transactionId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                transactionId: [transactionId, schema.string()]
              });
              req.appendTemplatePath(_templateObject4$9(), mapped.locationId, mapped.transactionId);
              req.deprecated('TransactionsApi.retrieveTransaction');
              return _context4.abrupt("return", req.callAsJson(retrieveTransactionResponseSchema, requestOptions));

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function retrieveTransaction(_x16, _x17, _x18) {
      return _retrieveTransaction.apply(this, arguments);
    }

    return retrieveTransaction;
  }()
  /**
   * Captures a transaction that was created with the [Charge](#endpoint-charge)
   * endpoint with a `delay_capture` value of `true`.
   *
   *
   * See [Delayed capture transactions](https://developer.squareup.
   * com/docs/payments/transactions/overview#delayed-capture)
   * for more information.
   *
   * @param locationId
   * @param transactionId
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.captureTransaction =
  /*#__PURE__*/
  function () {
    var _captureTransaction = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5(locationId, transactionId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              req = this.createRequest('POST');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                transactionId: [transactionId, schema.string()]
              });
              req.appendTemplatePath(_templateObject5$5(), mapped.locationId, mapped.transactionId);
              req.deprecated('TransactionsApi.captureTransaction');
              return _context5.abrupt("return", req.callAsJson(captureTransactionResponseSchema, requestOptions));

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function captureTransaction(_x19, _x20, _x21) {
      return _captureTransaction.apply(this, arguments);
    }

    return captureTransaction;
  }()
  /**
   * Initiates a refund for a previously charged tender.
   *
   * You must issue a refund within 120 days of the associated payment. See
   * [this article](https://squareup.com/help/us/en/article/5060) for more information
   * on refund behavior.
   *
   * NOTE: Card-present transactions with Interac credit cards **cannot be
   * refunded using the Connect API**. Interac transactions must refunded
   * in-person (e.g., dipping the card using POS app).
   *
   * @param locationId     The ID of the original transaction's associated location.
   * @param transactionId  The ID of the original transaction that includes the tender
   *                                                     to refund.
   * @param body           An object containing the fields to POST for the request.  See
   *                                                     the corresponding object definition for field details.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.createRefund =
  /*#__PURE__*/
  function () {
    var _createRefund = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee6(locationId, transactionId, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              req = this.createRequest('POST');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                transactionId: [transactionId, schema.string()],
                body: [body, createRefundRequestSchema]
              });
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject6$4(), mapped.locationId, mapped.transactionId);
              req.deprecated('TransactionsApi.createRefund');
              return _context6.abrupt("return", req.callAsJson(createRefundResponseSchema, requestOptions));

            case 6:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function createRefund(_x22, _x23, _x24, _x25) {
      return _createRefund.apply(this, arguments);
    }

    return createRefund;
  }()
  /**
   * Cancels a transaction that was created with the [Charge](#endpoint-charge)
   * endpoint with a `delay_capture` value of `true`.
   *
   *
   * See [Delayed capture transactions](https://developer.squareup.
   * com/docs/payments/transactions/overview#delayed-capture)
   * for more information.
   *
   * @param locationId
   * @param transactionId
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.voidTransaction =
  /*#__PURE__*/
  function () {
    var _voidTransaction = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee7(locationId, transactionId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              req = this.createRequest('POST');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                transactionId: [transactionId, schema.string()]
              });
              req.appendTemplatePath(_templateObject7$4(), mapped.locationId, mapped.transactionId);
              req.deprecated('TransactionsApi.voidTransaction');
              return _context7.abrupt("return", req.callAsJson(voidTransactionResponseSchema, requestOptions));

            case 5:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function voidTransaction(_x26, _x27, _x28) {
      return _voidTransaction.apply(this, arguments);
    }

    return voidTransaction;
  }();

  return TransactionsApi;
}(BaseApi);

var deviceSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var v1MoneySchema = /*#__PURE__*/schema.object({
  amount: ['amount', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  currencyCode: ['currency_code', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var v1CashDrawerEventSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  employeeId: ['employee_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  eventType: ['event_type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  eventMoney: ['event_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  createdAt: ['created_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  description: ['description', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var v1CashDrawerShiftSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  eventType: ['event_type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  openedAt: ['opened_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  endedAt: ['ended_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  closedAt: ['closed_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  employeeIds: ['employee_ids', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  openingEmployeeId: ['opening_employee_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  endingEmployeeId: ['ending_employee_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  closingEmployeeId: ['closing_employee_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  description: ['description', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  startingCashMoney: ['starting_cash_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  cashPaymentMoney: ['cash_payment_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  cashRefundsMoney: ['cash_refunds_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  cashPaidInMoney: ['cash_paid_in_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  cashPaidOutMoney: ['cash_paid_out_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  expectedCashMoney: ['expected_cash_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  closedCashMoney: ['closed_cash_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  device: ['device', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return deviceSchema;
  }))],
  events: ['events', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return v1CashDrawerEventSchema;
  })))]
});

var v1EmployeeSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  firstName: ['first_name', /*#__PURE__*/schema.string()],
  lastName: ['last_name', /*#__PURE__*/schema.string()],
  roleIds: ['role_ids', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  authorizedLocationIds: ['authorized_location_ids', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  email: ['email', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  status: ['status', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  externalId: ['external_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  createdAt: ['created_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  updatedAt: ['updated_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var v1EmployeeRoleSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  name: ['name', /*#__PURE__*/schema.string()],
  permissions: ['permissions', /*#__PURE__*/schema.array( /*#__PURE__*/schema.string())],
  isOwner: ['is_owner', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  createdAt: ['created_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  updatedAt: ['updated_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var v1TimecardSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  employeeId: ['employee_id', /*#__PURE__*/schema.string()],
  deleted: ['deleted', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  clockinTime: ['clockin_time', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  clockoutTime: ['clockout_time', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  clockinLocationId: ['clockin_location_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  clockoutLocationId: ['clockout_location_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  createdAt: ['created_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  updatedAt: ['updated_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  regularSecondsWorked: ['regular_seconds_worked', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  overtimeSecondsWorked: ['overtime_seconds_worked', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  doubletimeSecondsWorked: ['doubletime_seconds_worked', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())]
});

var v1TimecardEventSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  eventType: ['event_type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  clockinTime: ['clockin_time', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  clockoutTime: ['clockout_time', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  createdAt: ['created_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

function _templateObject10() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/cash-drawer-shifts/", ""]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9$1() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/cash-drawer-shifts"]);

  _templateObject9$1 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8$2() {
  var data = _taggedTemplateLiteralLoose(["/v1/me/timecards/", "/events"]);

  _templateObject8$2 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$5() {
  var data = _taggedTemplateLiteralLoose(["/v1/me/timecards/", ""]);

  _templateObject7$5 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$5() {
  var data = _taggedTemplateLiteralLoose(["/v1/me/timecards/", ""]);

  _templateObject6$5 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$6() {
  var data = _taggedTemplateLiteralLoose(["/v1/me/timecards/", ""]);

  _templateObject5$6 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$a() {
  var data = _taggedTemplateLiteralLoose(["/v1/me/roles/", ""]);

  _templateObject4$a = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$e() {
  var data = _taggedTemplateLiteralLoose(["/v1/me/roles/", ""]);

  _templateObject3$e = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$i() {
  var data = _taggedTemplateLiteralLoose(["/v1/me/employees/", ""]);

  _templateObject2$i = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$q() {
  var data = _taggedTemplateLiteralLoose(["/v1/me/employees/", ""]);

  _templateObject$q = function _templateObject() {
    return data;
  };

  return data;
}
var V1EmployeesApi = /*#__PURE__*/function (_BaseApi) {
  _inheritsLoose(V1EmployeesApi, _BaseApi);

  function V1EmployeesApi() {
    return _BaseApi.apply(this, arguments) || this;
  }

  var _proto = V1EmployeesApi.prototype;

  /**
   * Provides summary information for all of a business's employees.
   *
   * @param order            The order in which employees are listed in the response, based on their
   *                                   created_at field.      Default value: ASC
   * @param beginUpdatedAt   If filtering results by their updated_at field, the beginning of the requested
   *                                   reporting period, in ISO 8601 format
   * @param endUpdatedAt     If filtering results by there updated_at field, the end of the requested
   *                                   reporting period, in ISO 8601 format.
   * @param beginCreatedAt   If filtering results by their created_at field, the beginning of the requested
   *                                   reporting period, in ISO 8601 format.
   * @param endCreatedAt     If filtering results by their created_at field, the end of the requested
   *                                   reporting period, in ISO 8601 format.
   * @param status           If provided, the endpoint returns only employee entities with the specified
   *                                   status (ACTIVE or INACTIVE).
   * @param externalId       If provided, the endpoint returns only employee entities with the specified
   *                                   external_id.
   * @param limit            The maximum integer number of employee entities to return in a single response.
   *                                   Default 100, maximum 200.
   * @param batchToken       A pagination cursor to retrieve the next set of results for your original query
   *                                   to the endpoint.
   * @return Response from the API call
   */
  _proto.listEmployees =
  /*#__PURE__*/
  function () {
    var _listEmployees = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(order, beginUpdatedAt, endUpdatedAt, beginCreatedAt, endCreatedAt, status, externalId, limit, batchToken, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = this.createRequest('GET', '/v1/me/employees');
              mapped = req.prepareArgs({
                order: [order, schema.optional(schema.string())],
                beginUpdatedAt: [beginUpdatedAt, schema.optional(schema.string())],
                endUpdatedAt: [endUpdatedAt, schema.optional(schema.string())],
                beginCreatedAt: [beginCreatedAt, schema.optional(schema.string())],
                endCreatedAt: [endCreatedAt, schema.optional(schema.string())],
                status: [status, schema.optional(schema.string())],
                externalId: [externalId, schema.optional(schema.string())],
                limit: [limit, schema.optional(schema.number())],
                batchToken: [batchToken, schema.optional(schema.string())]
              });
              req.query('order', mapped.order);
              req.query('begin_updated_at', mapped.beginUpdatedAt);
              req.query('end_updated_at', mapped.endUpdatedAt);
              req.query('begin_created_at', mapped.beginCreatedAt);
              req.query('end_created_at', mapped.endCreatedAt);
              req.query('status', mapped.status);
              req.query('external_id', mapped.externalId);
              req.query('limit', mapped.limit);
              req.query('batch_token', mapped.batchToken);
              return _context.abrupt("return", req.callAsJson(schema.array(v1EmployeeSchema), requestOptions));

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function listEmployees(_x, _x2, _x3, _x4, _x5, _x6, _x7, _x8, _x9, _x10) {
      return _listEmployees.apply(this, arguments);
    }

    return listEmployees;
  }()
  /**
   * Use the CreateEmployee endpoint to add an employee to a Square
   * account. Employees created with the Connect API have an initial status
   * of `INACTIVE`. Inactive employees cannot sign in to Square Point of Sale
   * until they are activated from the Square Dashboard. Employee status
   * cannot be changed with the Connect API.
   *
   * <aside class="important">
   * Employee entities cannot be deleted. To disable employee profiles,
   * set the employee's status to <code>INACTIVE</code>
   * </aside>
   *
   * @param body An object containing the fields to POST for the request.  See the corresponding
   *                                  object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.createEmployee =
  /*#__PURE__*/
  function () {
    var _createEmployee = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req = this.createRequest('POST', '/v1/me/employees');
              mapped = req.prepareArgs({
                body: [body, v1EmployeeSchema]
              });
              req.json(mapped.body);
              return _context2.abrupt("return", req.callAsJson(v1EmployeeSchema, requestOptions));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function createEmployee(_x11, _x12) {
      return _createEmployee.apply(this, arguments);
    }

    return createEmployee;
  }()
  /**
   * Provides the details for a single employee.
   *
   * @param employeeId  The employee's ID.
   * @return Response from the API call
   */
  ;

  _proto.retrieveEmployee =
  /*#__PURE__*/
  function () {
    var _retrieveEmployee = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(employeeId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                employeeId: [employeeId, schema.string()]
              });
              req.appendTemplatePath(_templateObject$q(), mapped.employeeId);
              return _context3.abrupt("return", req.callAsJson(v1EmployeeSchema, requestOptions));

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function retrieveEmployee(_x13, _x14) {
      return _retrieveEmployee.apply(this, arguments);
    }

    return retrieveEmployee;
  }()
  /**
   * UpdateEmployee
   *
   * @param employeeId  The ID of the role to modify.
   * @param body        An object containing the fields to POST for the request.  See the
   *                                         corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.updateEmployee =
  /*#__PURE__*/
  function () {
    var _updateEmployee = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(employeeId, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              req = this.createRequest('PUT');
              mapped = req.prepareArgs({
                employeeId: [employeeId, schema.string()],
                body: [body, v1EmployeeSchema]
              });
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject2$i(), mapped.employeeId);
              return _context4.abrupt("return", req.callAsJson(v1EmployeeSchema, requestOptions));

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function updateEmployee(_x15, _x16, _x17) {
      return _updateEmployee.apply(this, arguments);
    }

    return updateEmployee;
  }()
  /**
   * Provides summary information for all of a business's employee roles.
   *
   * @param order       The order in which employees are listed in the response, based on their created_at
   *                              field.Default value: ASC
   * @param limit       The maximum integer number of employee entities to return in a single response.
   *                              Default 100, maximum 200.
   * @param batchToken  A pagination cursor to retrieve the next set of results for your original query to
   *                              the endpoint.
   * @return Response from the API call
   */
  ;

  _proto.listEmployeeRoles =
  /*#__PURE__*/
  function () {
    var _listEmployeeRoles = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5(order, limit, batchToken, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              req = this.createRequest('GET', '/v1/me/roles');
              mapped = req.prepareArgs({
                order: [order, schema.optional(schema.string())],
                limit: [limit, schema.optional(schema.number())],
                batchToken: [batchToken, schema.optional(schema.string())]
              });
              req.query('order', mapped.order);
              req.query('limit', mapped.limit);
              req.query('batch_token', mapped.batchToken);
              return _context5.abrupt("return", req.callAsJson(schema.array(v1EmployeeRoleSchema), requestOptions));

            case 6:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function listEmployeeRoles(_x18, _x19, _x20, _x21) {
      return _listEmployeeRoles.apply(this, arguments);
    }

    return listEmployeeRoles;
  }()
  /**
   * Creates an employee role you can then assign to employees.
   *
   * Square accounts can include any number of roles that can be assigned to
   * employees. These roles define the actions and permissions granted to an
   * employee with that role. For example, an employee with a "Shift Manager"
   * role might be able to issue refunds in Square Point of Sale, whereas an
   * employee with a "Clerk" role might not.
   *
   * Roles are assigned with the [V1UpdateEmployee](#endpoint-v1updateemployee)
   * endpoint. An employee can have only one role at a time.
   *
   * If an employee has no role, they have none of the permissions associated
   * with roles. All employees can accept payments with Square Point of Sale.
   *
   * @param body An EmployeeRole object with a name and permissions, and an optional owner
   *                                      flag.
   * @return Response from the API call
   */
  ;

  _proto.createEmployeeRole =
  /*#__PURE__*/
  function () {
    var _createEmployeeRole = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee6(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              req = this.createRequest('POST', '/v1/me/roles');
              mapped = req.prepareArgs({
                body: [body, v1EmployeeRoleSchema]
              });
              req.json(mapped.body);
              return _context6.abrupt("return", req.callAsJson(v1EmployeeRoleSchema, requestOptions));

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function createEmployeeRole(_x22, _x23) {
      return _createEmployeeRole.apply(this, arguments);
    }

    return createEmployeeRole;
  }()
  /**
   * Provides the details for a single employee role.
   *
   * @param roleId  The role's ID.
   * @return Response from the API call
   */
  ;

  _proto.retrieveEmployeeRole =
  /*#__PURE__*/
  function () {
    var _retrieveEmployeeRole = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee7(roleId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                roleId: [roleId, schema.string()]
              });
              req.appendTemplatePath(_templateObject3$e(), mapped.roleId);
              return _context7.abrupt("return", req.callAsJson(v1EmployeeRoleSchema, requestOptions));

            case 4:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function retrieveEmployeeRole(_x24, _x25) {
      return _retrieveEmployeeRole.apply(this, arguments);
    }

    return retrieveEmployeeRole;
  }()
  /**
   * Modifies the details of an employee role.
   *
   * @param roleId  The ID of the role to modify.
   * @param body    An object containing the fields to POST for the request.  See the
   *                                         corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.updateEmployeeRole =
  /*#__PURE__*/
  function () {
    var _updateEmployeeRole = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee8(roleId, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              req = this.createRequest('PUT');
              mapped = req.prepareArgs({
                roleId: [roleId, schema.string()],
                body: [body, v1EmployeeRoleSchema]
              });
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject4$a(), mapped.roleId);
              return _context8.abrupt("return", req.callAsJson(v1EmployeeRoleSchema, requestOptions));

            case 5:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function updateEmployeeRole(_x26, _x27, _x28) {
      return _updateEmployeeRole.apply(this, arguments);
    }

    return updateEmployeeRole;
  }()
  /**
   * Provides summary information for all of a business's employee timecards.
   *
   * @param order               The order in which timecards are listed in the response, based on their
   *                                       created_at field.
   * @param employeeId          If provided, the endpoint returns only timecards for the employee with the
   *                                       specified ID.
   * @param beginClockinTime    If filtering results by their clockin_time field, the beginning of the
   *                                       requested reporting period, in ISO 8601 format.
   * @param endClockinTime      If filtering results by their clockin_time field, the end of the requested
   *                                       reporting period, in ISO 8601 format.
   * @param beginClockoutTime   If filtering results by their clockout_time field, the beginning of the
   *                                       requested reporting period, in ISO 8601 format.
   * @param endClockoutTime     If filtering results by their clockout_time field, the end of the requested
   *                                       reporting period, in ISO 8601 format.
   * @param beginUpdatedAt      If filtering results by their updated_at field, the beginning of the
   *                                       requested reporting period, in ISO 8601 format.
   * @param endUpdatedAt        If filtering results by their updated_at field, the end of the requested
   *                                       reporting period, in ISO 8601 format.
   * @param deleted             If true, only deleted timecards are returned. If false, only valid
   *                                       timecards are returned.If you don't provide this parameter, both valid and
   *                                       deleted timecards are returned.
   * @param limit               The maximum integer number of employee entities to return in a single
   *                                       response. Default 100, maximum 200.
   * @param batchToken          A pagination cursor to retrieve the next set of results for your original
   *                                       query to the endpoint.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.listTimecards =
  /*#__PURE__*/
  function () {
    var _listTimecards = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee9(order, employeeId, beginClockinTime, endClockinTime, beginClockoutTime, endClockoutTime, beginUpdatedAt, endUpdatedAt, deleted, limit, batchToken, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              req = this.createRequest('GET', '/v1/me/timecards');
              mapped = req.prepareArgs({
                order: [order, schema.optional(schema.string())],
                employeeId: [employeeId, schema.optional(schema.string())],
                beginClockinTime: [beginClockinTime, schema.optional(schema.string())],
                endClockinTime: [endClockinTime, schema.optional(schema.string())],
                beginClockoutTime: [beginClockoutTime, schema.optional(schema.string())],
                endClockoutTime: [endClockoutTime, schema.optional(schema.string())],
                beginUpdatedAt: [beginUpdatedAt, schema.optional(schema.string())],
                endUpdatedAt: [endUpdatedAt, schema.optional(schema.string())],
                deleted: [deleted, schema.optional(schema.boolean())],
                limit: [limit, schema.optional(schema.number())],
                batchToken: [batchToken, schema.optional(schema.string())]
              });
              req.query('order', mapped.order);
              req.query('employee_id', mapped.employeeId);
              req.query('begin_clockin_time', mapped.beginClockinTime);
              req.query('end_clockin_time', mapped.endClockinTime);
              req.query('begin_clockout_time', mapped.beginClockoutTime);
              req.query('end_clockout_time', mapped.endClockoutTime);
              req.query('begin_updated_at', mapped.beginUpdatedAt);
              req.query('end_updated_at', mapped.endUpdatedAt);
              req.query('deleted', mapped.deleted);
              req.query('limit', mapped.limit);
              req.query('batch_token', mapped.batchToken);
              req.deprecated('V1EmployeesApi.listTimecards');
              return _context9.abrupt("return", req.callAsJson(schema.array(v1TimecardSchema), requestOptions));

            case 15:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this);
    }));

    function listTimecards(_x29, _x30, _x31, _x32, _x33, _x34, _x35, _x36, _x37, _x38, _x39, _x40) {
      return _listTimecards.apply(this, arguments);
    }

    return listTimecards;
  }()
  /**
   * Creates a timecard for an employee and clocks them in with an
   * `API_CREATE` event and a `clockin_time` set to the current time unless
   * the request provides a different value.
   *
   * To import timecards from another
   * system (rather than clocking someone in). Specify the `clockin_time`
   * and* `clockout_time` in the request.
   *
   * Timecards correspond to exactly one shift for a given employee, bounded
   * by the `clockin_time` and `clockout_time` fields. An employee is
   * considered clocked in if they have a timecard that doesn't have a
   * `clockout_time` set. An employee that is currently clocked in cannot
   * be clocked in a second time.
   *
   * @param body An object containing the fields to POST for the request.  See the corresponding
   *                                  object definition for field details.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.createTimecard =
  /*#__PURE__*/
  function () {
    var _createTimecard = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee10(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              req = this.createRequest('POST', '/v1/me/timecards');
              mapped = req.prepareArgs({
                body: [body, v1TimecardSchema]
              });
              req.json(mapped.body);
              req.deprecated('V1EmployeesApi.createTimecard');
              return _context10.abrupt("return", req.callAsJson(v1TimecardSchema, requestOptions));

            case 5:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, this);
    }));

    function createTimecard(_x41, _x42) {
      return _createTimecard.apply(this, arguments);
    }

    return createTimecard;
  }()
  /**
   * Deletes a timecard. Timecards can also be deleted through the
   * Square Dashboard. Deleted timecards are still accessible through
   * Connect API endpoints, but cannot be modified. The `deleted` field of
   * the `Timecard` object indicates whether the timecard has been deleted.
   *
   *
   * __Note__: By default, deleted timecards appear alongside valid timecards in
   * results returned by the [ListTimecards](#endpoint-v1employees-listtimecards)
   * endpoint. To filter deleted timecards, include the `deleted` query
   * parameter in the list request.
   *
   * Only approved accounts can manage their employees with Square.
   * Unapproved accounts cannot use employee management features with the
   * API.
   *
   * @param timecardId  The ID of the timecard to delete.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.deleteTimecard =
  /*#__PURE__*/
  function () {
    var _deleteTimecard = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee11(timecardId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              req = this.createRequest('DELETE');
              mapped = req.prepareArgs({
                timecardId: [timecardId, schema.string()]
              });
              req.appendTemplatePath(_templateObject5$6(), mapped.timecardId);
              req.deprecated('V1EmployeesApi.deleteTimecard');
              return _context11.abrupt("return", req.callAsJson(schema.unknown(), requestOptions));

            case 5:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, this);
    }));

    function deleteTimecard(_x43, _x44) {
      return _deleteTimecard.apply(this, arguments);
    }

    return deleteTimecard;
  }()
  /**
   * Provides the details for a single timecard.
   *
   *
   * <aside>
   * Only approved accounts can manage their employees with Square.
   * Unapproved accounts cannot use employee management features with the
   * API.
   * </aside>
   *
   * @param timecardId  The timecard's ID.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.retrieveTimecard =
  /*#__PURE__*/
  function () {
    var _retrieveTimecard = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee12(timecardId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                timecardId: [timecardId, schema.string()]
              });
              req.appendTemplatePath(_templateObject6$5(), mapped.timecardId);
              req.deprecated('V1EmployeesApi.retrieveTimecard');
              return _context12.abrupt("return", req.callAsJson(v1TimecardSchema, requestOptions));

            case 5:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, this);
    }));

    function retrieveTimecard(_x45, _x46) {
      return _retrieveTimecard.apply(this, arguments);
    }

    return retrieveTimecard;
  }()
  /**
   * Modifies the details of a timecard with an `API_EDIT` event for
   * the timecard. Updating an active timecard with a `clockout_time`
   * clocks the employee out.
   *
   * @param timecardId  TThe ID of the timecard to modify.
   * @param body        An object containing the fields to POST for the request. See the
   *                                         corresponding object definition for field details.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.updateTimecard =
  /*#__PURE__*/
  function () {
    var _updateTimecard = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee13(timecardId, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              req = this.createRequest('PUT');
              mapped = req.prepareArgs({
                timecardId: [timecardId, schema.string()],
                body: [body, v1TimecardSchema]
              });
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject7$5(), mapped.timecardId);
              req.deprecated('V1EmployeesApi.updateTimecard');
              return _context13.abrupt("return", req.callAsJson(v1TimecardSchema, requestOptions));

            case 6:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13, this);
    }));

    function updateTimecard(_x47, _x48, _x49) {
      return _updateTimecard.apply(this, arguments);
    }

    return updateTimecard;
  }()
  /**
   * Provides summary information for all events associated with a
   * particular timecard.
   *
   *
   * <aside>
   * Only approved accounts can manage their employees with Square.
   * Unapproved accounts cannot use employee management features with the
   * API.
   * </aside>
   *
   * @param timecardId  The ID of the timecard to list events for.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.listTimecardEvents =
  /*#__PURE__*/
  function () {
    var _listTimecardEvents = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee14(timecardId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                timecardId: [timecardId, schema.string()]
              });
              req.appendTemplatePath(_templateObject8$2(), mapped.timecardId);
              req.deprecated('V1EmployeesApi.listTimecardEvents');
              return _context14.abrupt("return", req.callAsJson(schema.array(v1TimecardEventSchema), requestOptions));

            case 5:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14, this);
    }));

    function listTimecardEvents(_x50, _x51) {
      return _listTimecardEvents.apply(this, arguments);
    }

    return listTimecardEvents;
  }()
  /**
   * Provides the details for all of a location's cash drawer shifts during a date range. The date range
   * you specify cannot exceed 90 days.
   *
   * @param locationId  The ID of the location to list cash drawer shifts for.
   * @param order       The order in which cash drawer shifts are listed in the response, based on their
   *                              created_at field. Default value: ASC
   * @param beginTime   The beginning of the requested reporting period, in ISO 8601 format. Default value:
   *                              The current time minus 90 days.
   * @param endTime     The beginning of the requested reporting period, in ISO 8601 format. Default value:
   *                              The current time.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.listCashDrawerShifts =
  /*#__PURE__*/
  function () {
    var _listCashDrawerShifts = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee15(locationId, order, beginTime, endTime, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                order: [order, schema.optional(schema.string())],
                beginTime: [beginTime, schema.optional(schema.string())],
                endTime: [endTime, schema.optional(schema.string())]
              });
              req.query('order', mapped.order);
              req.query('begin_time', mapped.beginTime);
              req.query('end_time', mapped.endTime);
              req.appendTemplatePath(_templateObject9$1(), mapped.locationId);
              req.deprecated('V1EmployeesApi.listCashDrawerShifts');
              return _context15.abrupt("return", req.callAsJson(schema.array(v1CashDrawerShiftSchema), requestOptions));

            case 8:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15, this);
    }));

    function listCashDrawerShifts(_x52, _x53, _x54, _x55, _x56) {
      return _listCashDrawerShifts.apply(this, arguments);
    }

    return listCashDrawerShifts;
  }()
  /**
   * Provides the details for a single cash drawer shift, including all events that occurred during the
   * shift.
   *
   * @param locationId  The ID of the location to list cash drawer shifts for.
   * @param shiftId     The shift's ID.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.retrieveCashDrawerShift =
  /*#__PURE__*/
  function () {
    var _retrieveCashDrawerShift = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee16(locationId, shiftId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                shiftId: [shiftId, schema.string()]
              });
              req.appendTemplatePath(_templateObject10(), mapped.locationId, mapped.shiftId);
              req.deprecated('V1EmployeesApi.retrieveCashDrawerShift');
              return _context16.abrupt("return", req.callAsJson(v1CashDrawerShiftSchema, requestOptions));

            case 5:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16, this);
    }));

    function retrieveCashDrawerShift(_x57, _x58, _x59) {
      return _retrieveCashDrawerShift.apply(this, arguments);
    }

    return retrieveCashDrawerShift;
  }();

  return V1EmployeesApi;
}(BaseApi);

var v1AdjustInventoryRequestSchema = /*#__PURE__*/schema.object({
  quantityDelta: ['quantity_delta', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  adjustmentType: ['adjustment_type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  memo: ['memo', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var v1CategorySchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  v2Id: ['v2_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var v1DiscountSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  rate: ['rate', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  amountMoney: ['amount_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  discountType: ['discount_type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  pinRequired: ['pin_required', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  color: ['color', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  v2Id: ['v2_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var v1FeeSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  rate: ['rate', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  calculationPhase: ['calculation_phase', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  adjustmentType: ['adjustment_type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  appliesToCustomAmounts: ['applies_to_custom_amounts', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  enabled: ['enabled', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  inclusionType: ['inclusion_type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  type: ['type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  v2Id: ['v2_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var v1InventoryEntrySchema = /*#__PURE__*/schema.object({
  variationId: ['variation_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  quantityOnHand: ['quantity_on_hand', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())]
});

var v1ItemImageSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  url: ['url', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var v1ModifierOptionSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  priceMoney: ['price_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  onByDefault: ['on_by_default', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  ordinal: ['ordinal', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  modifierListId: ['modifier_list_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  v2Id: ['v2_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var v1ModifierListSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  selectionType: ['selection_type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  modifierOptions: ['modifier_options', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return v1ModifierOptionSchema;
  })))],
  v2Id: ['v2_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var v1VariationSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  itemId: ['item_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  ordinal: ['ordinal', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  pricingType: ['pricing_type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  priceMoney: ['price_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  sku: ['sku', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  trackInventory: ['track_inventory', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  inventoryAlertType: ['inventory_alert_type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  inventoryAlertThreshold: ['inventory_alert_threshold', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  userData: ['user_data', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  v2Id: ['v2_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var v1ItemSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  description: ['description', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  type: ['type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  color: ['color', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  abbreviation: ['abbreviation', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  visibility: ['visibility', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  availableOnline: ['available_online', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  masterImage: ['master_image', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1ItemImageSchema;
  }))],
  category: ['category', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1CategorySchema;
  }))],
  variations: ['variations', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return v1VariationSchema;
  })))],
  modifierLists: ['modifier_lists', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return v1ModifierListSchema;
  })))],
  fees: ['fees', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return v1FeeSchema;
  })))],
  taxable: ['taxable', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  categoryId: ['category_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  availableForPickup: ['available_for_pickup', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  v2Id: ['v2_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var v1PageCellSchema = /*#__PURE__*/schema.object({
  pageId: ['page_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  row: ['row', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  column: ['column', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  objectType: ['object_type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  objectId: ['object_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  placeholderType: ['placeholder_type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var v1PageSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  pageIndex: ['page_index', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  cells: ['cells', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return v1PageCellSchema;
  })))]
});

var v1UpdateModifierListRequestSchema = /*#__PURE__*/schema.object({
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  selectionType: ['selection_type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

function _templateObject40() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/pages/", "/cells"]);

  _templateObject40 = function _templateObject40() {
    return data;
  };

  return data;
}

function _templateObject39() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/pages/", "/cells"]);

  _templateObject39 = function _templateObject39() {
    return data;
  };

  return data;
}

function _templateObject38() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/pages/", ""]);

  _templateObject38 = function _templateObject38() {
    return data;
  };

  return data;
}

function _templateObject37() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/pages/", ""]);

  _templateObject37 = function _templateObject37() {
    return data;
  };

  return data;
}

function _templateObject36() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/pages"]);

  _templateObject36 = function _templateObject36() {
    return data;
  };

  return data;
}

function _templateObject35() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/pages"]);

  _templateObject35 = function _templateObject35() {
    return data;
  };

  return data;
}

function _templateObject34() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/modifier-lists/", "/modifier-options/", ""]);

  _templateObject34 = function _templateObject34() {
    return data;
  };

  return data;
}

function _templateObject33() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/modifier-lists/", "/modifier-options/", ""]);

  _templateObject33 = function _templateObject33() {
    return data;
  };

  return data;
}

function _templateObject32() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/modifier-lists/", "/modifier-options"]);

  _templateObject32 = function _templateObject32() {
    return data;
  };

  return data;
}

function _templateObject31() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/modifier-lists/", ""]);

  _templateObject31 = function _templateObject31() {
    return data;
  };

  return data;
}

function _templateObject30() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/modifier-lists/", ""]);

  _templateObject30 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/modifier-lists/", ""]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/modifier-lists"]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/modifier-lists"]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/items/", "/variations/", ""]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/items/", "/variations/", ""]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/items/", "/variations"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/items/", "/modifier-lists/", ""]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/items/", "/modifier-lists/", ""]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/items/", "/fees/", ""]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/items/", "/fees/", ""]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/items/", ""]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/items/", ""]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/items/", ""]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/items"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/items"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/inventory/", ""]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/inventory"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/fees/", ""]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/fees/", ""]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10$1() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/fees"]);

  _templateObject10$1 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9$2() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/fees"]);

  _templateObject9$2 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8$3() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/discounts/", ""]);

  _templateObject8$3 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$6() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/discounts/", ""]);

  _templateObject7$6 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$6() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/discounts"]);

  _templateObject6$6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$7() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/discounts"]);

  _templateObject5$7 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$b() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/categories/", ""]);

  _templateObject4$b = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$f() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/categories/", ""]);

  _templateObject3$f = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$j() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/categories"]);

  _templateObject2$j = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$r() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/categories"]);

  _templateObject$r = function _templateObject() {
    return data;
  };

  return data;
}
var V1ItemsApi = /*#__PURE__*/function (_BaseApi) {
  _inheritsLoose(V1ItemsApi, _BaseApi);

  function V1ItemsApi() {
    return _BaseApi.apply(this, arguments) || this;
  }

  var _proto = V1ItemsApi.prototype;

  /**
   * Lists all the item categories for a given location.
   *
   * @param locationId  The ID of the location to list categories for.
   * @return Response from the API call
   * @deprecated
   */
  _proto.listCategories =
  /*#__PURE__*/
  function () {
    var _listCategories = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(locationId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()]
              });
              req.appendTemplatePath(_templateObject$r(), mapped.locationId);
              req.deprecated('V1ItemsApi.listCategories');
              return _context.abrupt("return", req.callAsJson(schema.array(v1CategorySchema), requestOptions));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function listCategories(_x, _x2) {
      return _listCategories.apply(this, arguments);
    }

    return listCategories;
  }()
  /**
   * Creates an item category.
   *
   * @param locationId  The ID of the location to create an item for.
   * @param body        An object containing the fields to POST for the request.  See the
   *                                         corresponding object definition for field details.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.createCategory =
  /*#__PURE__*/
  function () {
    var _createCategory = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(locationId, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req = this.createRequest('POST');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                body: [body, v1CategorySchema]
              });
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject2$j(), mapped.locationId);
              req.deprecated('V1ItemsApi.createCategory');
              return _context2.abrupt("return", req.callAsJson(v1CategorySchema, requestOptions));

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function createCategory(_x3, _x4, _x5) {
      return _createCategory.apply(this, arguments);
    }

    return createCategory;
  }()
  /**
   * Deletes an existing item category.
   *
   *
   * __DeleteCategory__ returns nothing on success but Connect SDKs
   * map the empty response to an empty `V1DeleteCategoryRequest` object
   * as documented below.
   *
   * @param locationId  The ID of the item's associated location.
   * @param categoryId  The ID of the category to delete.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.deleteCategory =
  /*#__PURE__*/
  function () {
    var _deleteCategory = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(locationId, categoryId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              req = this.createRequest('DELETE');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                categoryId: [categoryId, schema.string()]
              });
              req.appendTemplatePath(_templateObject3$f(), mapped.locationId, mapped.categoryId);
              req.deprecated('V1ItemsApi.deleteCategory');
              return _context3.abrupt("return", req.callAsJson(v1CategorySchema, requestOptions));

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function deleteCategory(_x6, _x7, _x8) {
      return _deleteCategory.apply(this, arguments);
    }

    return deleteCategory;
  }()
  /**
   * Modifies the details of an existing item category.
   *
   * @param locationId  The ID of the category's associated location.
   * @param categoryId  The ID of the category to edit.
   * @param body        An object containing the fields to POST for the request.  See the
   *                                         corresponding object definition for field details.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.updateCategory =
  /*#__PURE__*/
  function () {
    var _updateCategory = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(locationId, categoryId, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              req = this.createRequest('PUT');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                categoryId: [categoryId, schema.string()],
                body: [body, v1CategorySchema]
              });
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject4$b(), mapped.locationId, mapped.categoryId);
              req.deprecated('V1ItemsApi.updateCategory');
              return _context4.abrupt("return", req.callAsJson(v1CategorySchema, requestOptions));

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function updateCategory(_x9, _x10, _x11, _x12) {
      return _updateCategory.apply(this, arguments);
    }

    return updateCategory;
  }()
  /**
   * Lists all the discounts for a given location.
   *
   * @param locationId  The ID of the location to list categories for.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.listDiscounts =
  /*#__PURE__*/
  function () {
    var _listDiscounts = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5(locationId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()]
              });
              req.appendTemplatePath(_templateObject5$7(), mapped.locationId);
              req.deprecated('V1ItemsApi.listDiscounts');
              return _context5.abrupt("return", req.callAsJson(schema.array(v1DiscountSchema), requestOptions));

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function listDiscounts(_x13, _x14) {
      return _listDiscounts.apply(this, arguments);
    }

    return listDiscounts;
  }()
  /**
   * Creates a discount.
   *
   * @param locationId  The ID of the location to create an item for.
   * @param body        An object containing the fields to POST for the request.  See the
   *                                         corresponding object definition for field details.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.createDiscount =
  /*#__PURE__*/
  function () {
    var _createDiscount = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee6(locationId, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              req = this.createRequest('POST');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                body: [body, v1DiscountSchema]
              });
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject6$6(), mapped.locationId);
              req.deprecated('V1ItemsApi.createDiscount');
              return _context6.abrupt("return", req.callAsJson(v1DiscountSchema, requestOptions));

            case 6:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function createDiscount(_x15, _x16, _x17) {
      return _createDiscount.apply(this, arguments);
    }

    return createDiscount;
  }()
  /**
   * Deletes an existing discount.
   *
   *
   * __DeleteDiscount__ returns nothing on success but Connect SDKs
   * map the empty response to an empty `V1DeleteDiscountRequest` object
   * as documented below.
   *
   * @param locationId  The ID of the item's associated location.
   * @param discountId  The ID of the discount to delete.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.deleteDiscount =
  /*#__PURE__*/
  function () {
    var _deleteDiscount = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee7(locationId, discountId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              req = this.createRequest('DELETE');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                discountId: [discountId, schema.string()]
              });
              req.appendTemplatePath(_templateObject7$6(), mapped.locationId, mapped.discountId);
              req.deprecated('V1ItemsApi.deleteDiscount');
              return _context7.abrupt("return", req.callAsJson(v1DiscountSchema, requestOptions));

            case 5:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function deleteDiscount(_x18, _x19, _x20) {
      return _deleteDiscount.apply(this, arguments);
    }

    return deleteDiscount;
  }()
  /**
   * Modifies the details of an existing discount.
   *
   * @param locationId  The ID of the category's associated location.
   * @param discountId  The ID of the discount to edit.
   * @param body        An object containing the fields to POST for the request.  See the
   *                                         corresponding object definition for field details.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.updateDiscount =
  /*#__PURE__*/
  function () {
    var _updateDiscount = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee8(locationId, discountId, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              req = this.createRequest('PUT');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                discountId: [discountId, schema.string()],
                body: [body, v1DiscountSchema]
              });
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject8$3(), mapped.locationId, mapped.discountId);
              req.deprecated('V1ItemsApi.updateDiscount');
              return _context8.abrupt("return", req.callAsJson(v1DiscountSchema, requestOptions));

            case 6:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function updateDiscount(_x21, _x22, _x23, _x24) {
      return _updateDiscount.apply(this, arguments);
    }

    return updateDiscount;
  }()
  /**
   * Lists all the fees (taxes) for a given location.
   *
   * @param locationId  The ID of the location to list fees for.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.listFees =
  /*#__PURE__*/
  function () {
    var _listFees = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee9(locationId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()]
              });
              req.appendTemplatePath(_templateObject9$2(), mapped.locationId);
              req.deprecated('V1ItemsApi.listFees');
              return _context9.abrupt("return", req.callAsJson(schema.array(v1FeeSchema), requestOptions));

            case 5:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this);
    }));

    function listFees(_x25, _x26) {
      return _listFees.apply(this, arguments);
    }

    return listFees;
  }()
  /**
   * Creates a fee (tax).
   *
   * @param locationId  The ID of the location to create a fee for.
   * @param body        An object containing the fields to POST for the request.  See the
   *                                    corresponding object definition for field details.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.createFee =
  /*#__PURE__*/
  function () {
    var _createFee = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee10(locationId, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              req = this.createRequest('POST');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                body: [body, v1FeeSchema]
              });
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject10$1(), mapped.locationId);
              req.deprecated('V1ItemsApi.createFee');
              return _context10.abrupt("return", req.callAsJson(v1FeeSchema, requestOptions));

            case 6:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, this);
    }));

    function createFee(_x27, _x28, _x29) {
      return _createFee.apply(this, arguments);
    }

    return createFee;
  }()
  /**
   * Deletes an existing fee (tax).
   *
   *
   * __DeleteFee__ returns nothing on success but Connect SDKs
   * map the empty response to an empty `V1DeleteFeeRequest` object
   * as documented below.
   *
   * @param locationId  The ID of the fee's associated location.
   * @param feeId       The ID of the fee to delete.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.deleteFee =
  /*#__PURE__*/
  function () {
    var _deleteFee = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee11(locationId, feeId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              req = this.createRequest('DELETE');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                feeId: [feeId, schema.string()]
              });
              req.appendTemplatePath(_templateObject11(), mapped.locationId, mapped.feeId);
              req.deprecated('V1ItemsApi.deleteFee');
              return _context11.abrupt("return", req.callAsJson(v1FeeSchema, requestOptions));

            case 5:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, this);
    }));

    function deleteFee(_x30, _x31, _x32) {
      return _deleteFee.apply(this, arguments);
    }

    return deleteFee;
  }()
  /**
   * Modifies the details of an existing fee (tax).
   *
   * @param locationId  The ID of the fee's associated location.
   * @param feeId       The ID of the fee to edit.
   * @param body        An object containing the fields to POST for the request.  See the
   *                                    corresponding object definition for field details.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.updateFee =
  /*#__PURE__*/
  function () {
    var _updateFee = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee12(locationId, feeId, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              req = this.createRequest('PUT');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                feeId: [feeId, schema.string()],
                body: [body, v1FeeSchema]
              });
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject12(), mapped.locationId, mapped.feeId);
              req.deprecated('V1ItemsApi.updateFee');
              return _context12.abrupt("return", req.callAsJson(v1FeeSchema, requestOptions));

            case 6:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, this);
    }));

    function updateFee(_x33, _x34, _x35, _x36) {
      return _updateFee.apply(this, arguments);
    }

    return updateFee;
  }()
  /**
   * Provides inventory information for all inventory-enabled item
   * variations.
   *
   * @param locationId  The ID of the item's associated location.
   * @param limit       The maximum number of inventory entries to return in a single response. This value
   *                              cannot exceed 1000.
   * @param batchToken  A pagination cursor to retrieve the next set of results for your original query to
   *                              the endpoint.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.listInventory =
  /*#__PURE__*/
  function () {
    var _listInventory = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee13(locationId, limit, batchToken, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                limit: [limit, schema.optional(schema.number())],
                batchToken: [batchToken, schema.optional(schema.string())]
              });
              req.query('limit', mapped.limit);
              req.query('batch_token', mapped.batchToken);
              req.appendTemplatePath(_templateObject13(), mapped.locationId);
              req.deprecated('V1ItemsApi.listInventory');
              return _context13.abrupt("return", req.callAsJson(schema.array(v1InventoryEntrySchema), requestOptions));

            case 7:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13, this);
    }));

    function listInventory(_x37, _x38, _x39, _x40) {
      return _listInventory.apply(this, arguments);
    }

    return listInventory;
  }()
  /**
   * Adjusts the current available inventory of an item variation.
   *
   * @param locationId   The ID of the item's associated location.
   * @param variationId  The ID of the variation to adjust inventory information
   *                                                        for.
   * @param body         An object containing the fields to POST for the request.
   *                                                        See the corresponding object definition for field details.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.adjustInventory =
  /*#__PURE__*/
  function () {
    var _adjustInventory = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee14(locationId, variationId, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              req = this.createRequest('POST');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                variationId: [variationId, schema.string()],
                body: [body, v1AdjustInventoryRequestSchema]
              });
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject14(), mapped.locationId, mapped.variationId);
              req.deprecated('V1ItemsApi.adjustInventory');
              return _context14.abrupt("return", req.callAsJson(v1InventoryEntrySchema, requestOptions));

            case 6:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14, this);
    }));

    function adjustInventory(_x41, _x42, _x43, _x44) {
      return _adjustInventory.apply(this, arguments);
    }

    return adjustInventory;
  }()
  /**
   * Provides summary information of all items for a given location.
   *
   * @param locationId  The ID of the location to list items for.
   * @param batchToken  A pagination cursor to retrieve the next set of results for your original query to
   *                              the endpoint.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.listItems =
  /*#__PURE__*/
  function () {
    var _listItems = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee15(locationId, batchToken, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                batchToken: [batchToken, schema.optional(schema.string())]
              });
              req.query('batch_token', mapped.batchToken);
              req.appendTemplatePath(_templateObject15(), mapped.locationId);
              req.deprecated('V1ItemsApi.listItems');
              return _context15.abrupt("return", req.callAsJson(schema.array(v1ItemSchema), requestOptions));

            case 6:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15, this);
    }));

    function listItems(_x45, _x46, _x47) {
      return _listItems.apply(this, arguments);
    }

    return listItems;
  }()
  /**
   * Creates an item and at least one variation for it.
   *
   *
   *
   * Item-related entities include fields you can use to associate them with
   * entities in a non-Square system.
   *
   * When you create an item-related entity, you can optionally specify `id`.
   * This value must be unique among all IDs ever specified for the account,
   * including those specified by other applications. You can never reuse an
   * entity ID. If you do not specify an ID, Square generates one for the entity.
   *
   * Item variations have a `user_data` string that lets you associate arbitrary
   * metadata with the variation. The string cannot exceed 255 characters.
   *
   * @param locationId  The ID of the location to create an item for.
   * @param body        An object containing the fields to POST for the request.  See the
   *                                     corresponding object definition for field details.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.createItem =
  /*#__PURE__*/
  function () {
    var _createItem = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee16(locationId, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              req = this.createRequest('POST');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                body: [body, v1ItemSchema]
              });
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject16(), mapped.locationId);
              req.deprecated('V1ItemsApi.createItem');
              return _context16.abrupt("return", req.callAsJson(v1ItemSchema, requestOptions));

            case 6:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16, this);
    }));

    function createItem(_x48, _x49, _x50) {
      return _createItem.apply(this, arguments);
    }

    return createItem;
  }()
  /**
   * Deletes an existing item and all item variations associated with it.
   *
   *
   * __DeleteItem__ returns nothing on success but Connect SDKs
   * map the empty response to an empty `V1DeleteItemRequest` object
   * as documented below.
   *
   * @param locationId  The ID of the item's associated location.
   * @param itemId      The ID of the item to modify.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.deleteItem =
  /*#__PURE__*/
  function () {
    var _deleteItem = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee17(locationId, itemId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              req = this.createRequest('DELETE');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                itemId: [itemId, schema.string()]
              });
              req.appendTemplatePath(_templateObject17(), mapped.locationId, mapped.itemId);
              req.deprecated('V1ItemsApi.deleteItem');
              return _context17.abrupt("return", req.callAsJson(v1ItemSchema, requestOptions));

            case 5:
            case "end":
              return _context17.stop();
          }
        }
      }, _callee17, this);
    }));

    function deleteItem(_x51, _x52, _x53) {
      return _deleteItem.apply(this, arguments);
    }

    return deleteItem;
  }()
  /**
   * Provides the details for a single item, including associated modifier
   * lists and fees.
   *
   * @param locationId  The ID of the item's associated location.
   * @param itemId      The item's ID.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.retrieveItem =
  /*#__PURE__*/
  function () {
    var _retrieveItem = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee18(locationId, itemId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee18$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                itemId: [itemId, schema.string()]
              });
              req.appendTemplatePath(_templateObject18(), mapped.locationId, mapped.itemId);
              req.deprecated('V1ItemsApi.retrieveItem');
              return _context18.abrupt("return", req.callAsJson(v1ItemSchema, requestOptions));

            case 5:
            case "end":
              return _context18.stop();
          }
        }
      }, _callee18, this);
    }));

    function retrieveItem(_x54, _x55, _x56) {
      return _retrieveItem.apply(this, arguments);
    }

    return retrieveItem;
  }()
  /**
   * Modifies the core details of an existing item.
   *
   * @param locationId  The ID of the item's associated location.
   * @param itemId      The ID of the item to modify.
   * @param body        An object containing the fields to POST for the request.  See the
   *                                     corresponding object definition for field details.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.updateItem =
  /*#__PURE__*/
  function () {
    var _updateItem = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee19(locationId, itemId, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee19$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              req = this.createRequest('PUT');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                itemId: [itemId, schema.string()],
                body: [body, v1ItemSchema]
              });
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject19(), mapped.locationId, mapped.itemId);
              req.deprecated('V1ItemsApi.updateItem');
              return _context19.abrupt("return", req.callAsJson(v1ItemSchema, requestOptions));

            case 6:
            case "end":
              return _context19.stop();
          }
        }
      }, _callee19, this);
    }));

    function updateItem(_x57, _x58, _x59, _x60) {
      return _updateItem.apply(this, arguments);
    }

    return updateItem;
  }()
  /**
   * Removes a fee assocation from an item so the fee is no longer
   * automatically applied to the item in Square Point of Sale.
   *
   * @param locationId  The ID of the fee's associated location.
   * @param itemId      The ID of the item to add the fee to.
   * @param feeId       The ID of the fee to apply.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.removeFee =
  /*#__PURE__*/
  function () {
    var _removeFee = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee20(locationId, itemId, feeId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee20$(_context20) {
        while (1) {
          switch (_context20.prev = _context20.next) {
            case 0:
              req = this.createRequest('DELETE');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                itemId: [itemId, schema.string()],
                feeId: [feeId, schema.string()]
              });
              req.appendTemplatePath(_templateObject20(), mapped.locationId, mapped.itemId, mapped.feeId);
              req.deprecated('V1ItemsApi.removeFee');
              return _context20.abrupt("return", req.callAsJson(v1ItemSchema, requestOptions));

            case 5:
            case "end":
              return _context20.stop();
          }
        }
      }, _callee20, this);
    }));

    function removeFee(_x61, _x62, _x63, _x64) {
      return _removeFee.apply(this, arguments);
    }

    return removeFee;
  }()
  /**
   * Associates a fee with an item so the fee is automatically applied to
   * the item in Square Point of Sale.
   *
   * @param locationId  The ID of the fee's associated location.
   * @param itemId      The ID of the item to add the fee to.
   * @param feeId       The ID of the fee to apply.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.applyFee =
  /*#__PURE__*/
  function () {
    var _applyFee = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee21(locationId, itemId, feeId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee21$(_context21) {
        while (1) {
          switch (_context21.prev = _context21.next) {
            case 0:
              req = this.createRequest('PUT');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                itemId: [itemId, schema.string()],
                feeId: [feeId, schema.string()]
              });
              req.appendTemplatePath(_templateObject21(), mapped.locationId, mapped.itemId, mapped.feeId);
              req.deprecated('V1ItemsApi.applyFee');
              return _context21.abrupt("return", req.callAsJson(v1ItemSchema, requestOptions));

            case 5:
            case "end":
              return _context21.stop();
          }
        }
      }, _callee21, this);
    }));

    function applyFee(_x65, _x66, _x67, _x68) {
      return _applyFee.apply(this, arguments);
    }

    return applyFee;
  }()
  /**
   * Removes a modifier list association from an item so the modifier
   * options from the list can no longer be applied to the item.
   *
   * @param locationId       The ID of the item's associated location.
   * @param modifierListId   The ID of the modifier list to remove.
   * @param itemId           The ID of the item to remove the modifier list from.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.removeModifierList =
  /*#__PURE__*/
  function () {
    var _removeModifierList = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee22(locationId, modifierListId, itemId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee22$(_context22) {
        while (1) {
          switch (_context22.prev = _context22.next) {
            case 0:
              req = this.createRequest('DELETE');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                modifierListId: [modifierListId, schema.string()],
                itemId: [itemId, schema.string()]
              });
              req.appendTemplatePath(_templateObject22(), mapped.locationId, mapped.modifierListId, mapped.itemId);
              req.deprecated('V1ItemsApi.removeModifierList');
              return _context22.abrupt("return", req.callAsJson(v1ItemSchema, requestOptions));

            case 5:
            case "end":
              return _context22.stop();
          }
        }
      }, _callee22, this);
    }));

    function removeModifierList(_x69, _x70, _x71, _x72) {
      return _removeModifierList.apply(this, arguments);
    }

    return removeModifierList;
  }()
  /**
   * Associates a modifier list with an item so the associated modifier
   * options can be applied to the item.
   *
   * @param locationId       The ID of the item's associated location.
   * @param modifierListId   The ID of the modifier list to apply.
   * @param itemId           The ID of the item to add the modifier list to.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.applyModifierList =
  /*#__PURE__*/
  function () {
    var _applyModifierList = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee23(locationId, modifierListId, itemId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee23$(_context23) {
        while (1) {
          switch (_context23.prev = _context23.next) {
            case 0:
              req = this.createRequest('PUT');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                modifierListId: [modifierListId, schema.string()],
                itemId: [itemId, schema.string()]
              });
              req.appendTemplatePath(_templateObject23(), mapped.locationId, mapped.modifierListId, mapped.itemId);
              req.deprecated('V1ItemsApi.applyModifierList');
              return _context23.abrupt("return", req.callAsJson(v1ItemSchema, requestOptions));

            case 5:
            case "end":
              return _context23.stop();
          }
        }
      }, _callee23, this);
    }));

    function applyModifierList(_x73, _x74, _x75, _x76) {
      return _applyModifierList.apply(this, arguments);
    }

    return applyModifierList;
  }()
  /**
   * Creates an item variation for an existing item.
   *
   * @param locationId  The ID of the item's associated location.
   * @param itemId      The item's ID.
   * @param body        An object containing the fields to POST for the request.  See the
   *                                          corresponding object definition for field details.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.createVariation =
  /*#__PURE__*/
  function () {
    var _createVariation = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee24(locationId, itemId, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee24$(_context24) {
        while (1) {
          switch (_context24.prev = _context24.next) {
            case 0:
              req = this.createRequest('POST');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                itemId: [itemId, schema.string()],
                body: [body, v1VariationSchema]
              });
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject24(), mapped.locationId, mapped.itemId);
              req.deprecated('V1ItemsApi.createVariation');
              return _context24.abrupt("return", req.callAsJson(v1VariationSchema, requestOptions));

            case 6:
            case "end":
              return _context24.stop();
          }
        }
      }, _callee24, this);
    }));

    function createVariation(_x77, _x78, _x79, _x80) {
      return _createVariation.apply(this, arguments);
    }

    return createVariation;
  }()
  /**
   * Deletes an existing item variation from an item.
   *
   *
   * __DeleteVariation__ returns nothing on success but Connect SDKs
   * map the empty response to an empty `V1DeleteVariationRequest` object
   * as documented below.
   *
   * @param locationId   The ID of the item's associated location.
   * @param itemId       The ID of the item to delete.
   * @param variationId  The ID of the variation to delete.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.deleteVariation =
  /*#__PURE__*/
  function () {
    var _deleteVariation = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee25(locationId, itemId, variationId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee25$(_context25) {
        while (1) {
          switch (_context25.prev = _context25.next) {
            case 0:
              req = this.createRequest('DELETE');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                itemId: [itemId, schema.string()],
                variationId: [variationId, schema.string()]
              });
              req.appendTemplatePath(_templateObject25(), mapped.locationId, mapped.itemId, mapped.variationId);
              req.deprecated('V1ItemsApi.deleteVariation');
              return _context25.abrupt("return", req.callAsJson(v1VariationSchema, requestOptions));

            case 5:
            case "end":
              return _context25.stop();
          }
        }
      }, _callee25, this);
    }));

    function deleteVariation(_x81, _x82, _x83, _x84) {
      return _deleteVariation.apply(this, arguments);
    }

    return deleteVariation;
  }()
  /**
   * Modifies the details of an existing item variation.
   *
   * @param locationId   The ID of the item's associated location.
   * @param itemId       The ID of the item to modify.
   * @param variationId  The ID of the variation to modify.
   * @param body         An object containing the fields to POST for the request.  See the
   *                                           corresponding object definition for field details.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.updateVariation =
  /*#__PURE__*/
  function () {
    var _updateVariation = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee26(locationId, itemId, variationId, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee26$(_context26) {
        while (1) {
          switch (_context26.prev = _context26.next) {
            case 0:
              req = this.createRequest('PUT');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                itemId: [itemId, schema.string()],
                variationId: [variationId, schema.string()],
                body: [body, v1VariationSchema]
              });
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject26(), mapped.locationId, mapped.itemId, mapped.variationId);
              req.deprecated('V1ItemsApi.updateVariation');
              return _context26.abrupt("return", req.callAsJson(v1VariationSchema, requestOptions));

            case 6:
            case "end":
              return _context26.stop();
          }
        }
      }, _callee26, this);
    }));

    function updateVariation(_x85, _x86, _x87, _x88, _x89) {
      return _updateVariation.apply(this, arguments);
    }

    return updateVariation;
  }()
  /**
   * Lists all the modifier lists for a given location.
   *
   * @param locationId  The ID of the location to list modifier lists for.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.listModifierLists =
  /*#__PURE__*/
  function () {
    var _listModifierLists = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee27(locationId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee27$(_context27) {
        while (1) {
          switch (_context27.prev = _context27.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()]
              });
              req.appendTemplatePath(_templateObject27(), mapped.locationId);
              req.deprecated('V1ItemsApi.listModifierLists');
              return _context27.abrupt("return", req.callAsJson(schema.array(v1ModifierListSchema), requestOptions));

            case 5:
            case "end":
              return _context27.stop();
          }
        }
      }, _callee27, this);
    }));

    function listModifierLists(_x90, _x91) {
      return _listModifierLists.apply(this, arguments);
    }

    return listModifierLists;
  }()
  /**
   * Creates an item modifier list and at least 1 modifier option for it.
   *
   * @param locationId  The ID of the location to create a modifier list for.
   * @param body        An object containing the fields to POST for the request.  See the
   *                                             corresponding object definition for field details.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.createModifierList =
  /*#__PURE__*/
  function () {
    var _createModifierList = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee28(locationId, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee28$(_context28) {
        while (1) {
          switch (_context28.prev = _context28.next) {
            case 0:
              req = this.createRequest('POST');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                body: [body, v1ModifierListSchema]
              });
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject28(), mapped.locationId);
              req.deprecated('V1ItemsApi.createModifierList');
              return _context28.abrupt("return", req.callAsJson(v1ModifierListSchema, requestOptions));

            case 6:
            case "end":
              return _context28.stop();
          }
        }
      }, _callee28, this);
    }));

    function createModifierList(_x92, _x93, _x94) {
      return _createModifierList.apply(this, arguments);
    }

    return createModifierList;
  }()
  /**
   * Deletes an existing item modifier list and all modifier options
   * associated with it.
   *
   *
   * __DeleteModifierList__ returns nothing on success but Connect SDKs
   * map the empty response to an empty `V1DeleteModifierListRequest` object
   * as documented below.
   *
   * @param locationId       The ID of the item's associated location.
   * @param modifierListId   The ID of the modifier list to delete.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.deleteModifierList =
  /*#__PURE__*/
  function () {
    var _deleteModifierList = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee29(locationId, modifierListId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee29$(_context29) {
        while (1) {
          switch (_context29.prev = _context29.next) {
            case 0:
              req = this.createRequest('DELETE');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                modifierListId: [modifierListId, schema.string()]
              });
              req.appendTemplatePath(_templateObject29(), mapped.locationId, mapped.modifierListId);
              req.deprecated('V1ItemsApi.deleteModifierList');
              return _context29.abrupt("return", req.callAsJson(v1ModifierListSchema, requestOptions));

            case 5:
            case "end":
              return _context29.stop();
          }
        }
      }, _callee29, this);
    }));

    function deleteModifierList(_x95, _x96, _x97) {
      return _deleteModifierList.apply(this, arguments);
    }

    return deleteModifierList;
  }()
  /**
   * Provides the details for a single modifier list.
   *
   * @param locationId       The ID of the item's associated location.
   * @param modifierListId   The modifier list's ID.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.retrieveModifierList =
  /*#__PURE__*/
  function () {
    var _retrieveModifierList = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee30(locationId, modifierListId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee30$(_context30) {
        while (1) {
          switch (_context30.prev = _context30.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                modifierListId: [modifierListId, schema.string()]
              });
              req.appendTemplatePath(_templateObject30(), mapped.locationId, mapped.modifierListId);
              req.deprecated('V1ItemsApi.retrieveModifierList');
              return _context30.abrupt("return", req.callAsJson(v1ModifierListSchema, requestOptions));

            case 5:
            case "end":
              return _context30.stop();
          }
        }
      }, _callee30, this);
    }));

    function retrieveModifierList(_x98, _x99, _x100) {
      return _retrieveModifierList.apply(this, arguments);
    }

    return retrieveModifierList;
  }()
  /**
   * Modifies the details of an existing item modifier list.
   *
   * @param locationId       The ID of the item's associated location.
   * @param modifierListId   The ID of the modifier list to edit.
   * @param body             An object containing the fields to POST for the
   *                                                               request.  See the corresponding object definition
   *                                                               for field details.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.updateModifierList =
  /*#__PURE__*/
  function () {
    var _updateModifierList = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee31(locationId, modifierListId, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee31$(_context31) {
        while (1) {
          switch (_context31.prev = _context31.next) {
            case 0:
              req = this.createRequest('PUT');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                modifierListId: [modifierListId, schema.string()],
                body: [body, v1UpdateModifierListRequestSchema]
              });
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject31(), mapped.locationId, mapped.modifierListId);
              req.deprecated('V1ItemsApi.updateModifierList');
              return _context31.abrupt("return", req.callAsJson(v1ModifierListSchema, requestOptions));

            case 6:
            case "end":
              return _context31.stop();
          }
        }
      }, _callee31, this);
    }));

    function updateModifierList(_x101, _x102, _x103, _x104) {
      return _updateModifierList.apply(this, arguments);
    }

    return updateModifierList;
  }()
  /**
   * Creates an item modifier option and adds it to a modifier list.
   *
   * @param locationId       The ID of the item's associated location.
   * @param modifierListId   The ID of the modifier list to edit.
   * @param body             An object containing the fields to POST for the request.  See
   *                                                    the corresponding object definition for field details.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.createModifierOption =
  /*#__PURE__*/
  function () {
    var _createModifierOption = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee32(locationId, modifierListId, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee32$(_context32) {
        while (1) {
          switch (_context32.prev = _context32.next) {
            case 0:
              req = this.createRequest('POST');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                modifierListId: [modifierListId, schema.string()],
                body: [body, v1ModifierOptionSchema]
              });
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject32(), mapped.locationId, mapped.modifierListId);
              req.deprecated('V1ItemsApi.createModifierOption');
              return _context32.abrupt("return", req.callAsJson(v1ModifierOptionSchema, requestOptions));

            case 6:
            case "end":
              return _context32.stop();
          }
        }
      }, _callee32, this);
    }));

    function createModifierOption(_x105, _x106, _x107, _x108) {
      return _createModifierOption.apply(this, arguments);
    }

    return createModifierOption;
  }()
  /**
   * Deletes an existing item modifier option from a modifier list.
   *
   *
   * __DeleteModifierOption__ returns nothing on success but Connect
   * SDKs map the empty response to an empty `V1DeleteModifierOptionRequest`
   * object.
   *
   * @param locationId         The ID of the item's associated location.
   * @param modifierListId     The ID of the modifier list to delete.
   * @param modifierOptionId   The ID of the modifier list to edit.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.deleteModifierOption =
  /*#__PURE__*/
  function () {
    var _deleteModifierOption = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee33(locationId, modifierListId, modifierOptionId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee33$(_context33) {
        while (1) {
          switch (_context33.prev = _context33.next) {
            case 0:
              req = this.createRequest('DELETE');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                modifierListId: [modifierListId, schema.string()],
                modifierOptionId: [modifierOptionId, schema.string()]
              });
              req.appendTemplatePath(_templateObject33(), mapped.locationId, mapped.modifierListId, mapped.modifierOptionId);
              req.deprecated('V1ItemsApi.deleteModifierOption');
              return _context33.abrupt("return", req.callAsJson(v1ModifierOptionSchema, requestOptions));

            case 5:
            case "end":
              return _context33.stop();
          }
        }
      }, _callee33, this);
    }));

    function deleteModifierOption(_x109, _x110, _x111, _x112) {
      return _deleteModifierOption.apply(this, arguments);
    }

    return deleteModifierOption;
  }()
  /**
   * Modifies the details of an existing item modifier option.
   *
   * @param locationId         The ID of the item's associated location.
   * @param modifierListId     The ID of the modifier list to edit.
   * @param modifierOptionId   The ID of the modifier list to edit.
   * @param body               An object containing the fields to POST for the request.
   *                                                      See the corresponding object definition for field details.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.updateModifierOption =
  /*#__PURE__*/
  function () {
    var _updateModifierOption = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee34(locationId, modifierListId, modifierOptionId, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee34$(_context34) {
        while (1) {
          switch (_context34.prev = _context34.next) {
            case 0:
              req = this.createRequest('PUT');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                modifierListId: [modifierListId, schema.string()],
                modifierOptionId: [modifierOptionId, schema.string()],
                body: [body, v1ModifierOptionSchema]
              });
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject34(), mapped.locationId, mapped.modifierListId, mapped.modifierOptionId);
              req.deprecated('V1ItemsApi.updateModifierOption');
              return _context34.abrupt("return", req.callAsJson(v1ModifierOptionSchema, requestOptions));

            case 6:
            case "end":
              return _context34.stop();
          }
        }
      }, _callee34, this);
    }));

    function updateModifierOption(_x113, _x114, _x115, _x116, _x117) {
      return _updateModifierOption.apply(this, arguments);
    }

    return updateModifierOption;
  }()
  /**
   * Lists all Favorites pages (in Square Point of Sale) for a given
   * location.
   *
   * @param locationId  The ID of the location to list Favorites pages for.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.listPages =
  /*#__PURE__*/
  function () {
    var _listPages = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee35(locationId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee35$(_context35) {
        while (1) {
          switch (_context35.prev = _context35.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()]
              });
              req.appendTemplatePath(_templateObject35(), mapped.locationId);
              req.deprecated('V1ItemsApi.listPages');
              return _context35.abrupt("return", req.callAsJson(schema.array(v1PageSchema), requestOptions));

            case 5:
            case "end":
              return _context35.stop();
          }
        }
      }, _callee35, this);
    }));

    function listPages(_x118, _x119) {
      return _listPages.apply(this, arguments);
    }

    return listPages;
  }()
  /**
   * Creates a Favorites page in Square Point of Sale.
   *
   * @param locationId  The ID of the location to create an item for.
   * @param body        An object containing the fields to POST for the request.  See the
   *                                     corresponding object definition for field details.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.createPage =
  /*#__PURE__*/
  function () {
    var _createPage = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee36(locationId, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee36$(_context36) {
        while (1) {
          switch (_context36.prev = _context36.next) {
            case 0:
              req = this.createRequest('POST');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                body: [body, v1PageSchema]
              });
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject36(), mapped.locationId);
              req.deprecated('V1ItemsApi.createPage');
              return _context36.abrupt("return", req.callAsJson(v1PageSchema, requestOptions));

            case 6:
            case "end":
              return _context36.stop();
          }
        }
      }, _callee36, this);
    }));

    function createPage(_x120, _x121, _x122) {
      return _createPage.apply(this, arguments);
    }

    return createPage;
  }()
  /**
   * Deletes an existing Favorites page and all of its cells.
   *
   *
   * __DeletePage__ returns nothing on success but Connect SDKs
   * map the empty response to an empty `V1DeletePageRequest` object.
   *
   * @param locationId  The ID of the Favorites page's associated location.
   * @param pageId      The ID of the page to delete.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.deletePage =
  /*#__PURE__*/
  function () {
    var _deletePage = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee37(locationId, pageId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee37$(_context37) {
        while (1) {
          switch (_context37.prev = _context37.next) {
            case 0:
              req = this.createRequest('DELETE');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                pageId: [pageId, schema.string()]
              });
              req.appendTemplatePath(_templateObject37(), mapped.locationId, mapped.pageId);
              req.deprecated('V1ItemsApi.deletePage');
              return _context37.abrupt("return", req.callAsJson(v1PageSchema, requestOptions));

            case 5:
            case "end":
              return _context37.stop();
          }
        }
      }, _callee37, this);
    }));

    function deletePage(_x123, _x124, _x125) {
      return _deletePage.apply(this, arguments);
    }

    return deletePage;
  }()
  /**
   * Modifies the details of a Favorites page in Square Point of Sale.
   *
   * @param locationId  The ID of the Favorites page's associated location
   * @param pageId      The ID of the page to modify.
   * @param body        An object containing the fields to POST for the request.  See the
   *                                     corresponding object definition for field details.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.updatePage =
  /*#__PURE__*/
  function () {
    var _updatePage = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee38(locationId, pageId, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee38$(_context38) {
        while (1) {
          switch (_context38.prev = _context38.next) {
            case 0:
              req = this.createRequest('PUT');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                pageId: [pageId, schema.string()],
                body: [body, v1PageSchema]
              });
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject38(), mapped.locationId, mapped.pageId);
              req.deprecated('V1ItemsApi.updatePage');
              return _context38.abrupt("return", req.callAsJson(v1PageSchema, requestOptions));

            case 6:
            case "end":
              return _context38.stop();
          }
        }
      }, _callee38, this);
    }));

    function updatePage(_x126, _x127, _x128, _x129) {
      return _updatePage.apply(this, arguments);
    }

    return updatePage;
  }()
  /**
   * Deletes a cell from a Favorites page in Square Point of Sale.
   *
   *
   * __DeletePageCell__ returns nothing on success but Connect SDKs
   * map the empty response to an empty `V1DeletePageCellRequest` object
   * as documented below.
   *
   * @param locationId  The ID of the Favorites page's associated location.
   * @param pageId      The ID of the page to delete.
   * @param row         The row of the cell to clear. Always an integer between 0 and 4, inclusive. Row 0 is
   *                              the top row.
   * @param column      The column of the cell to clear. Always an integer between 0 and 4, inclusive.
   *                              Column 0 is the leftmost column.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.deletePageCell =
  /*#__PURE__*/
  function () {
    var _deletePageCell = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee39(locationId, pageId, row, column, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee39$(_context39) {
        while (1) {
          switch (_context39.prev = _context39.next) {
            case 0:
              req = this.createRequest('DELETE');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                pageId: [pageId, schema.string()],
                row: [row, schema.optional(schema.string())],
                column: [column, schema.optional(schema.string())]
              });
              req.query('row', mapped.row);
              req.query('column', mapped.column);
              req.appendTemplatePath(_templateObject39(), mapped.locationId, mapped.pageId);
              req.deprecated('V1ItemsApi.deletePageCell');
              return _context39.abrupt("return", req.callAsJson(v1PageSchema, requestOptions));

            case 7:
            case "end":
              return _context39.stop();
          }
        }
      }, _callee39, this);
    }));

    function deletePageCell(_x130, _x131, _x132, _x133, _x134) {
      return _deletePageCell.apply(this, arguments);
    }

    return deletePageCell;
  }()
  /**
   * Modifies a cell of a Favorites page in Square Point of Sale.
   *
   * @param locationId  The ID of the Favorites page's associated location.
   * @param pageId      The ID of the page the cell belongs to.
   * @param body        An object containing the fields to POST for the request.  See the
   *                                         corresponding object definition for field details.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.updatePageCell =
  /*#__PURE__*/
  function () {
    var _updatePageCell = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee40(locationId, pageId, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee40$(_context40) {
        while (1) {
          switch (_context40.prev = _context40.next) {
            case 0:
              req = this.createRequest('PUT');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                pageId: [pageId, schema.string()],
                body: [body, v1PageCellSchema]
              });
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject40(), mapped.locationId, mapped.pageId);
              req.deprecated('V1ItemsApi.updatePageCell');
              return _context40.abrupt("return", req.callAsJson(v1PageSchema, requestOptions));

            case 6:
            case "end":
              return _context40.stop();
          }
        }
      }, _callee40, this);
    }));

    function updatePageCell(_x135, _x136, _x137, _x138) {
      return _updatePageCell.apply(this, arguments);
    }

    return updatePageCell;
  }();

  return V1ItemsApi;
}(BaseApi);

var v1MerchantLocationDetailsSchema = /*#__PURE__*/schema.object({
  nickname: ['nickname', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var v1PhoneNumberSchema = /*#__PURE__*/schema.object({
  callingCode: ['calling_code', /*#__PURE__*/schema.string()],
  number: ['number', /*#__PURE__*/schema.string()]
});

var v1MerchantSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  email: ['email', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  accountType: ['account_type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  accountCapabilities: ['account_capabilities', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.string()))],
  countryCode: ['country_code', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  languageCode: ['language_code', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  currencyCode: ['currency_code', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  businessName: ['business_name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  businessAddress: ['business_address', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return addressSchema;
  }))],
  businessPhone: ['business_phone', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1PhoneNumberSchema;
  }))],
  businessType: ['business_type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  shippingAddress: ['shipping_address', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return addressSchema;
  }))],
  locationDetails: ['location_details', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MerchantLocationDetailsSchema;
  }))],
  marketUrl: ['market_url', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var V1LocationsApi = /*#__PURE__*/function (_BaseApi) {
  _inheritsLoose(V1LocationsApi, _BaseApi);

  function V1LocationsApi() {
    return _BaseApi.apply(this, arguments) || this;
  }

  var _proto = V1LocationsApi.prototype;

  /**
   * Get the general information for a business.
   *
   * @return Response from the API call
   * @deprecated
   */
  _proto.retrieveBusiness =
  /*#__PURE__*/
  function () {
    var _retrieveBusiness = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(requestOptions) {
      var req;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = this.createRequest('GET', '/v1/me');
              req.deprecated('V1LocationsApi.retrieveBusiness');
              return _context.abrupt("return", req.callAsJson(v1MerchantSchema, requestOptions));

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function retrieveBusiness(_x) {
      return _retrieveBusiness.apply(this, arguments);
    }

    return retrieveBusiness;
  }()
  /**
   * Provides details for all business locations associated with a Square
   * account, including the Square-assigned object ID for the location.
   *
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.listLocations =
  /*#__PURE__*/
  function () {
    var _listLocations = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(requestOptions) {
      var req;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req = this.createRequest('GET', '/v1/me/locations');
              req.deprecated('V1LocationsApi.listLocations');
              return _context2.abrupt("return", req.callAsJson(schema.array(v1MerchantSchema), requestOptions));

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function listLocations(_x2) {
      return _listLocations.apply(this, arguments);
    }

    return listLocations;
  }();

  return V1LocationsApi;
}(BaseApi);

var v1BankAccountSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  merchantId: ['merchant_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  bankName: ['bank_name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  routingNumber: ['routing_number', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  accountNumberSuffix: ['account_number_suffix', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  currencyCode: ['currency_code', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  type: ['type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var v1CreateRefundRequestSchema = /*#__PURE__*/schema.object({
  paymentId: ['payment_id', /*#__PURE__*/schema.string()],
  type: ['type', /*#__PURE__*/schema.string()],
  reason: ['reason', /*#__PURE__*/schema.string()],
  refundedMoney: ['refunded_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  requestIdempotenceKey: ['request_idempotence_key', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var v1OrderHistoryEntrySchema = /*#__PURE__*/schema.object({
  action: ['action', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  createdAt: ['created_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var v1TenderSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  type: ['type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  employeeId: ['employee_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  receiptUrl: ['receipt_url', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  cardBrand: ['card_brand', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  panSuffix: ['pan_suffix', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  entryMethod: ['entry_method', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  paymentNote: ['payment_note', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  totalMoney: ['total_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  tenderedMoney: ['tendered_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  tenderedAt: ['tendered_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  settledAt: ['settled_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  changeBackMoney: ['change_back_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  refundedMoney: ['refunded_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  isExchange: ['is_exchange', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())]
});

var v1OrderSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  buyerEmail: ['buyer_email', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  recipientName: ['recipient_name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  recipientPhoneNumber: ['recipient_phone_number', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  state: ['state', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  shippingAddress: ['shipping_address', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return addressSchema;
  }))],
  subtotalMoney: ['subtotal_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  totalShippingMoney: ['total_shipping_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  totalTaxMoney: ['total_tax_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  totalPriceMoney: ['total_price_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  totalDiscountMoney: ['total_discount_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  createdAt: ['created_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  updatedAt: ['updated_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  expiresAt: ['expires_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  paymentId: ['payment_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  buyerNote: ['buyer_note', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  completedNote: ['completed_note', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  refundedNote: ['refunded_note', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  canceledNote: ['canceled_note', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  tender: ['tender', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1TenderSchema;
  }))],
  orderHistory: ['order_history', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return v1OrderHistoryEntrySchema;
  })))],
  promoCode: ['promo_code', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  btcReceiveAddress: ['btc_receive_address', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  btcPriceSatoshi: ['btc_price_satoshi', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())]
});

var v1PaymentDiscountSchema = /*#__PURE__*/schema.object({
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  appliedMoney: ['applied_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  discountId: ['discount_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var v1PaymentItemDetailSchema = /*#__PURE__*/schema.object({
  categoryName: ['category_name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  sku: ['sku', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  itemId: ['item_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  itemVariationId: ['item_variation_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var v1PaymentModifierSchema = /*#__PURE__*/schema.object({
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  appliedMoney: ['applied_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  modifierOptionId: ['modifier_option_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var v1PaymentTaxSchema = /*#__PURE__*/schema.object({
  errors: ['errors', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return errorSchema;
  })))],
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  appliedMoney: ['applied_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  rate: ['rate', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  inclusionType: ['inclusion_type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  feeId: ['fee_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var v1PaymentItemizationSchema = /*#__PURE__*/schema.object({
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  quantity: ['quantity', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.number())],
  itemizationType: ['itemization_type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  itemDetail: ['item_detail', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1PaymentItemDetailSchema;
  }))],
  notes: ['notes', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  itemVariationName: ['item_variation_name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  totalMoney: ['total_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  singleQuantityMoney: ['single_quantity_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  grossSalesMoney: ['gross_sales_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  discountMoney: ['discount_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  netSalesMoney: ['net_sales_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  taxes: ['taxes', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return v1PaymentTaxSchema;
  })))],
  discounts: ['discounts', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return v1PaymentDiscountSchema;
  })))],
  modifiers: ['modifiers', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return v1PaymentModifierSchema;
  })))]
});

var v1PaymentSurchargeSchema = /*#__PURE__*/schema.object({
  name: ['name', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  appliedMoney: ['applied_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  rate: ['rate', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  amountMoney: ['amount_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  type: ['type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  taxable: ['taxable', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())],
  taxes: ['taxes', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return v1PaymentTaxSchema;
  })))],
  surchargeId: ['surcharge_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

var v1RefundSchema = /*#__PURE__*/schema.object({
  type: ['type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  reason: ['reason', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  refundedMoney: ['refunded_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  refundedProcessingFeeMoney: ['refunded_processing_fee_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  refundedTaxMoney: ['refunded_tax_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  refundedAdditiveTaxMoney: ['refunded_additive_tax_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  refundedAdditiveTax: ['refunded_additive_tax', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return v1PaymentTaxSchema;
  })))],
  refundedInclusiveTaxMoney: ['refunded_inclusive_tax_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  refundedInclusiveTax: ['refunded_inclusive_tax', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return v1PaymentTaxSchema;
  })))],
  refundedTipMoney: ['refunded_tip_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  refundedDiscountMoney: ['refunded_discount_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  refundedSurchargeMoney: ['refunded_surcharge_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  refundedSurcharges: ['refunded_surcharges', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return v1PaymentSurchargeSchema;
  })))],
  createdAt: ['created_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  processedAt: ['processed_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  paymentId: ['payment_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  merchantId: ['merchant_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  isExchange: ['is_exchange', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())]
});

var v1PaymentSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  merchantId: ['merchant_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  createdAt: ['created_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  creatorId: ['creator_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  device: ['device', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return deviceSchema;
  }))],
  paymentUrl: ['payment_url', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  receiptUrl: ['receipt_url', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  inclusiveTaxMoney: ['inclusive_tax_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  additiveTaxMoney: ['additive_tax_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  taxMoney: ['tax_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  tipMoney: ['tip_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  discountMoney: ['discount_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  totalCollectedMoney: ['total_collected_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  processingFeeMoney: ['processing_fee_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  netTotalMoney: ['net_total_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  refundedMoney: ['refunded_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  swedishRoundingMoney: ['swedish_rounding_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  grossSalesMoney: ['gross_sales_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  netSalesMoney: ['net_sales_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  inclusiveTax: ['inclusive_tax', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return v1PaymentTaxSchema;
  })))],
  additiveTax: ['additive_tax', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return v1PaymentTaxSchema;
  })))],
  tender: ['tender', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return v1TenderSchema;
  })))],
  refunds: ['refunds', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return v1RefundSchema;
  })))],
  itemizations: ['itemizations', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return v1PaymentItemizationSchema;
  })))],
  surchargeMoney: ['surcharge_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  surcharges: ['surcharges', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return v1PaymentSurchargeSchema;
  })))],
  isPartial: ['is_partial', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.boolean())]
});

var v1SettlementEntrySchema = /*#__PURE__*/schema.object({
  paymentId: ['payment_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  type: ['type', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  amountMoney: ['amount_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  feeMoney: ['fee_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))]
});

var v1SettlementSchema = /*#__PURE__*/schema.object({
  id: ['id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  status: ['status', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  totalMoney: ['total_money', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.lazy(function () {
    return v1MoneySchema;
  }))],
  initiatedAt: ['initiated_at', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  bankAccountId: ['bank_account_id', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  entries: ['entries', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.array( /*#__PURE__*/schema.lazy(function () {
    return v1SettlementEntrySchema;
  })))]
});

var v1UpdateOrderRequestSchema = /*#__PURE__*/schema.object({
  action: ['action', /*#__PURE__*/schema.string()],
  shippedTrackingNumber: ['shipped_tracking_number', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  completedNote: ['completed_note', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  refundedNote: ['refunded_note', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())],
  canceledNote: ['canceled_note', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.string())]
});

function _templateObject11$1() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/settlements/", ""]);

  _templateObject11$1 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10$2() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/settlements"]);

  _templateObject10$2 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9$3() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/refunds"]);

  _templateObject9$3 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8$4() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/refunds"]);

  _templateObject8$4 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$7() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/payments/", ""]);

  _templateObject7$7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$7() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/payments"]);

  _templateObject6$7 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$8() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/orders/", ""]);

  _templateObject5$8 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$c() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/orders/", ""]);

  _templateObject4$c = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$g() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/orders"]);

  _templateObject3$g = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$k() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/bank-accounts/", ""]);

  _templateObject2$k = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$s() {
  var data = _taggedTemplateLiteralLoose(["/v1/", "/bank-accounts"]);

  _templateObject$s = function _templateObject() {
    return data;
  };

  return data;
}
var V1TransactionsApi = /*#__PURE__*/function (_BaseApi) {
  _inheritsLoose(V1TransactionsApi, _BaseApi);

  function V1TransactionsApi() {
    return _BaseApi.apply(this, arguments) || this;
  }

  var _proto = V1TransactionsApi.prototype;

  /**
   * Provides non-confidential details for all of a location's associated bank accounts. This endpoint
   * does not provide full bank account numbers, and there is no way to obtain a full bank account number
   * with the Connect API.
   *
   * @param locationId  The ID of the location to list bank accounts for.
   * @return Response from the API call
   * @deprecated
   */
  _proto.listBankAccounts =
  /*#__PURE__*/
  function () {
    var _listBankAccounts = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(locationId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()]
              });
              req.appendTemplatePath(_templateObject$s(), mapped.locationId);
              req.deprecated('V1TransactionsApi.listBankAccounts');
              return _context.abrupt("return", req.callAsJson(schema.array(v1BankAccountSchema), requestOptions));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function listBankAccounts(_x, _x2) {
      return _listBankAccounts.apply(this, arguments);
    }

    return listBankAccounts;
  }()
  /**
   * Provides non-confidential details for a merchant's associated bank account. This endpoint does not
   * provide full bank account numbers, and there is no way to obtain a full bank account number with the
   * Connect API.
   *
   * @param locationId      The ID of the bank account's associated location.
   * @param bankAccountId   The bank account's Square-issued ID. You obtain this value from Settlement
   *                                  objects returned.
   * @return Response from the API call
   * @deprecated
   */
  ;

  _proto.retrieveBankAccount =
  /*#__PURE__*/
  function () {
    var _retrieveBankAccount = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(locationId, bankAccountId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                bankAccountId: [bankAccountId, schema.string()]
              });
              req.appendTemplatePath(_templateObject2$k(), mapped.locationId, mapped.bankAccountId);
              req.deprecated('V1TransactionsApi.retrieveBankAccount');
              return _context2.abrupt("return", req.callAsJson(v1BankAccountSchema, requestOptions));

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function retrieveBankAccount(_x3, _x4, _x5) {
      return _retrieveBankAccount.apply(this, arguments);
    }

    return retrieveBankAccount;
  }()
  /**
   * Provides summary information for a merchant's online store orders.
   *
   * @param locationId  The ID of the location to list online store orders for.
   * @param order       TThe order in which payments are listed in the response.
   * @param limit       The maximum number of payments to return in a single response. This value cannot
   *                              exceed 200.
   * @param batchToken  A pagination cursor to retrieve the next set of results for your original query to
   *                              the endpoint.
   * @return Response from the API call
   */
  ;

  _proto.listOrders =
  /*#__PURE__*/
  function () {
    var _listOrders = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(locationId, order, limit, batchToken, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                order: [order, schema.optional(schema.string())],
                limit: [limit, schema.optional(schema.number())],
                batchToken: [batchToken, schema.optional(schema.string())]
              });
              req.query('order', mapped.order);
              req.query('limit', mapped.limit);
              req.query('batch_token', mapped.batchToken);
              req.appendTemplatePath(_templateObject3$g(), mapped.locationId);
              return _context3.abrupt("return", req.callAsJson(schema.array(v1OrderSchema), requestOptions));

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function listOrders(_x6, _x7, _x8, _x9, _x10) {
      return _listOrders.apply(this, arguments);
    }

    return listOrders;
  }()
  /**
   * Provides comprehensive information for a single online store order, including the order's history.
   *
   * @param locationId  The ID of the order's associated location.
   * @param orderId     The order's Square-issued ID. You obtain this value from Order objects returned by
   *                              the List Orders endpoint
   * @return Response from the API call
   */
  ;

  _proto.retrieveOrder =
  /*#__PURE__*/
  function () {
    var _retrieveOrder = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(locationId, orderId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                orderId: [orderId, schema.string()]
              });
              req.appendTemplatePath(_templateObject4$c(), mapped.locationId, mapped.orderId);
              return _context4.abrupt("return", req.callAsJson(v1OrderSchema, requestOptions));

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function retrieveOrder(_x11, _x12, _x13) {
      return _retrieveOrder.apply(this, arguments);
    }

    return retrieveOrder;
  }()
  /**
   * Updates the details of an online store order. Every update you perform on an order corresponds to
   * one of three actions:
   *
   * @param locationId  The ID of the order's associated location.
   * @param orderId     The order's Square-issued ID. You obtain this value from Order
   *                                                   objects returned by the List Orders endpoint
   * @param body        An object containing the fields to POST for the request.  See
   *                                                   the corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.updateOrder =
  /*#__PURE__*/
  function () {
    var _updateOrder = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5(locationId, orderId, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              req = this.createRequest('PUT');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                orderId: [orderId, schema.string()],
                body: [body, v1UpdateOrderRequestSchema]
              });
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject5$8(), mapped.locationId, mapped.orderId);
              return _context5.abrupt("return", req.callAsJson(v1OrderSchema, requestOptions));

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function updateOrder(_x14, _x15, _x16, _x17) {
      return _updateOrder.apply(this, arguments);
    }

    return updateOrder;
  }()
  /**
   * Provides summary information for all payments taken for a given
   * Square account during a date range. Date ranges cannot exceed 1 year in
   * length. See Date ranges for details of inclusive and exclusive dates.
   *
   * *Note**: Details for payments processed with Square Point of Sale while
   * in offline mode may not be transmitted to Square for up to 72 hours.
   * Offline payments have a `created_at` value that reflects the time the
   * payment was originally processed, not the time it was subsequently
   * transmitted to Square. Consequently, the ListPayments endpoint might
   * list an offline payment chronologically between online payments that
   * were seen in a previous request.
   *
   * @param locationId      The ID of the location to list payments for. If you specify me, this endpoint
   *                                   returns payments aggregated from all of the business's locations.
   * @param order           The order in which payments are listed in the response.
   * @param beginTime       The beginning of the requested reporting period, in ISO 8601 format. If this
   *                                   value is before January 1, 2013 (2013-01-01T00:00:00Z), this endpoint returns an
   *                                   error. Default value: The current time minus one year.
   * @param endTime         The end of the requested reporting period, in ISO 8601 format. If this value is
   *                                   more than one year greater than begin_time, this endpoint returns an error.
   *                                   Default value: The current time.
   * @param limit           The maximum number of payments to return in a single response. This value
   *                                   cannot exceed 200.
   * @param batchToken      A pagination cursor to retrieve the next set of results for your original query
   *                                   to the endpoint.
   * @param includePartial  Indicates whether or not to include partial payments in the response. Partial
   *                                   payments will have the tenders collected so far, but the itemizations will be
   *                                   empty until the payment is completed.
   * @return Response from the API call
   */
  ;

  _proto.listPayments =
  /*#__PURE__*/
  function () {
    var _listPayments = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee6(locationId, order, beginTime, endTime, limit, batchToken, includePartial, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                order: [order, schema.optional(schema.string())],
                beginTime: [beginTime, schema.optional(schema.string())],
                endTime: [endTime, schema.optional(schema.string())],
                limit: [limit, schema.optional(schema.number())],
                batchToken: [batchToken, schema.optional(schema.string())],
                includePartial: [includePartial, schema.optional(schema.boolean())]
              });
              req.query('order', mapped.order);
              req.query('begin_time', mapped.beginTime);
              req.query('end_time', mapped.endTime);
              req.query('limit', mapped.limit);
              req.query('batch_token', mapped.batchToken);
              req.query('include_partial', mapped.includePartial);
              req.appendTemplatePath(_templateObject6$7(), mapped.locationId);
              return _context6.abrupt("return", req.callAsJson(schema.array(v1PaymentSchema), requestOptions));

            case 10:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function listPayments(_x18, _x19, _x20, _x21, _x22, _x23, _x24, _x25) {
      return _listPayments.apply(this, arguments);
    }

    return listPayments;
  }()
  /**
   * Provides comprehensive information for a single payment.
   *
   * @param locationId  The ID of the payment's associated location.
   * @param paymentId   The Square-issued payment ID. payment_id comes from Payment objects returned by the
   *                              List Payments endpoint, Settlement objects returned by the List Settlements endpoint,
   *                              or Refund objects returned by the List Refunds endpoint.
   * @return Response from the API call
   */
  ;

  _proto.retrievePayment =
  /*#__PURE__*/
  function () {
    var _retrievePayment = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee7(locationId, paymentId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                paymentId: [paymentId, schema.string()]
              });
              req.appendTemplatePath(_templateObject7$7(), mapped.locationId, mapped.paymentId);
              return _context7.abrupt("return", req.callAsJson(v1PaymentSchema, requestOptions));

            case 4:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function retrievePayment(_x26, _x27, _x28) {
      return _retrievePayment.apply(this, arguments);
    }

    return retrievePayment;
  }()
  /**
   * Provides the details for all refunds initiated by a merchant or any of the merchant's mobile staff
   * during a date range. Date ranges cannot exceed one year in length.
   *
   * @param locationId  The ID of the location to list refunds for.
   * @param order       TThe order in which payments are listed in the response.
   * @param beginTime   The beginning of the requested reporting period, in ISO 8601 format. If this value
   *                              is before January 1, 2013 (2013-01-01T00:00:00Z), this endpoint returns an error.
   *                              Default value: The current time minus one year.
   * @param endTime     The end of the requested reporting period, in ISO 8601 format. If this value is more
   *                              than one year greater than begin_time, this endpoint returns an error. Default value:
   *                              The current time.
   * @param limit       The approximate number of refunds to return in a single response. Default: 100. Max:
   *                              200. Response may contain more results than the prescribed limit when refunds are
   *                              made simultaneously to multiple tenders in a payment or when refunds are generated in
   *                              an exchange to account for the value of returned goods.
   * @param batchToken  A pagination cursor to retrieve the next set of results for your original query to
   *                              the endpoint.
   * @return Response from the API call
   */
  ;

  _proto.listRefunds =
  /*#__PURE__*/
  function () {
    var _listRefunds = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee8(locationId, order, beginTime, endTime, limit, batchToken, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                order: [order, schema.optional(schema.string())],
                beginTime: [beginTime, schema.optional(schema.string())],
                endTime: [endTime, schema.optional(schema.string())],
                limit: [limit, schema.optional(schema.number())],
                batchToken: [batchToken, schema.optional(schema.string())]
              });
              req.query('order', mapped.order);
              req.query('begin_time', mapped.beginTime);
              req.query('end_time', mapped.endTime);
              req.query('limit', mapped.limit);
              req.query('batch_token', mapped.batchToken);
              req.appendTemplatePath(_templateObject8$4(), mapped.locationId);
              return _context8.abrupt("return", req.callAsJson(schema.array(v1RefundSchema), requestOptions));

            case 9:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function listRefunds(_x29, _x30, _x31, _x32, _x33, _x34, _x35) {
      return _listRefunds.apply(this, arguments);
    }

    return listRefunds;
  }()
  /**
   * Issues a refund for a previously processed payment. You must issue
   * a refund within 60 days of the associated payment.
   *
   * You cannot issue a partial refund for a split tender payment. You must
   * instead issue a full or partial refund for a particular tender, by
   * providing the applicable tender id to the V1CreateRefund endpoint.
   * Issuing a full refund for a split tender payment refunds all tenders
   * associated with the payment.
   *
   * Issuing a refund for a card payment is not reversible. For development
   * purposes, you can create fake cash payments in Square Point of Sale and
   * refund them.
   *
   * @param locationId  The ID of the original payment's associated location.
   * @param body        An object containing the fields to POST for the request.  See
   *                                                    the corresponding object definition for field details.
   * @return Response from the API call
   */
  ;

  _proto.createRefund =
  /*#__PURE__*/
  function () {
    var _createRefund = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee9(locationId, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              req = this.createRequest('POST');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                body: [body, v1CreateRefundRequestSchema]
              });
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject9$3(), mapped.locationId);
              return _context9.abrupt("return", req.callAsJson(v1RefundSchema, requestOptions));

            case 5:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this);
    }));

    function createRefund(_x36, _x37, _x38) {
      return _createRefund.apply(this, arguments);
    }

    return createRefund;
  }()
  /**
   * Provides summary information for all deposits and withdrawals
   * initiated by Square to a linked bank account during a date range. Date
   * ranges cannot exceed one year in length.
   *
   * *Note**: the ListSettlements endpoint does not provide entry
   * information.
   *
   * @param locationId  The ID of the location to list settlements for. If you specify me, this endpoint
   *                              returns settlements aggregated from all of the business's locations.
   * @param order       The order in which settlements are listed in the response.
   * @param beginTime   The beginning of the requested reporting period, in ISO 8601 format. If this value
   *                              is before January 1, 2013 (2013-01-01T00:00:00Z), this endpoint returns an error.
   *                              Default value: The current time minus one year.
   * @param endTime     The end of the requested reporting period, in ISO 8601 format. If this value is more
   *                              than one year greater than begin_time, this endpoint returns an error. Default value:
   *                              The current time.
   * @param limit       The maximum number of settlements to return in a single response. This value cannot
   *                              exceed 200.
   * @param status      Provide this parameter to retrieve only settlements with a particular status (SENT
   *                              or FAILED).
   * @param batchToken  A pagination cursor to retrieve the next set of results for your original query to
   *                              the endpoint.
   * @return Response from the API call
   */
  ;

  _proto.listSettlements =
  /*#__PURE__*/
  function () {
    var _listSettlements = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee10(locationId, order, beginTime, endTime, limit, status, batchToken, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                order: [order, schema.optional(schema.string())],
                beginTime: [beginTime, schema.optional(schema.string())],
                endTime: [endTime, schema.optional(schema.string())],
                limit: [limit, schema.optional(schema.number())],
                status: [status, schema.optional(schema.string())],
                batchToken: [batchToken, schema.optional(schema.string())]
              });
              req.query('order', mapped.order);
              req.query('begin_time', mapped.beginTime);
              req.query('end_time', mapped.endTime);
              req.query('limit', mapped.limit);
              req.query('status', mapped.status);
              req.query('batch_token', mapped.batchToken);
              req.appendTemplatePath(_templateObject10$2(), mapped.locationId);
              return _context10.abrupt("return", req.callAsJson(schema.array(v1SettlementSchema), requestOptions));

            case 10:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, this);
    }));

    function listSettlements(_x39, _x40, _x41, _x42, _x43, _x44, _x45, _x46) {
      return _listSettlements.apply(this, arguments);
    }

    return listSettlements;
  }()
  /**
   * Provides comprehensive information for a single settlement.
   *
   * The returned `Settlement` objects include an `entries` field that lists
   * the transactions that contribute to the settlement total. Most
   * settlement entries correspond to a payment payout, but settlement
   * entries are also generated for less common events, like refunds, manual
   * adjustments, or chargeback holds.
   *
   * Square initiates its regular deposits as indicated in the
   * [Deposit Options with Square](https://squareup.com/help/us/en/article/3807)
   * help article. Details for a regular deposit are usually not available
   * from Connect API endpoints before 10 p.m. PST the same day.
   *
   * Square does not know when an initiated settlement **completes**, only
   * whether it has failed. A completed settlement is typically reflected in
   * a bank account within 3 business days, but in exceptional cases it may
   * take longer.
   *
   * @param locationId    The ID of the settlements's associated location.
   * @param settlementId  The settlement's Square-issued ID. You obtain this value from Settlement objects
   *                                returned by the List Settlements endpoint.
   * @return Response from the API call
   */
  ;

  _proto.retrieveSettlement =
  /*#__PURE__*/
  function () {
    var _retrieveSettlement = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee11(locationId, settlementId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                locationId: [locationId, schema.string()],
                settlementId: [settlementId, schema.string()]
              });
              req.appendTemplatePath(_templateObject11$1(), mapped.locationId, mapped.settlementId);
              return _context11.abrupt("return", req.callAsJson(v1SettlementSchema, requestOptions));

            case 4:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, this);
    }));

    function retrieveSettlement(_x47, _x48, _x49) {
      return _retrieveSettlement.apply(this, arguments);
    }

    return retrieveSettlement;
  }();

  return V1TransactionsApi;
}(BaseApi);

/**
 * Set a header in the headers map.
 *
 * This method performs case-insensitive handling of header names.
 *
 * @param headers Map of headers
 * @param name Header name
 * @param value Header value
 */
function setHeader(headers, name, value) {
  var realHeaderName = lookupCaseInsensitive(headers, name);
  setHeaderInternal(headers, realHeaderName, name, value);
}

function setHeaderInternal(headers, realHeaderName, name, value) {
  if (realHeaderName) {
    delete headers[realHeaderName];
  }

  if (value) {
    headers[name] = value;
  }
}
/**
 * Set a header in the headers map if it is not already set.
 *
 * This method performs case-insensitive handling of header names.
 *
 * @param headers Map of headers
 * @param name Header name
 * @param value Header value
 */


function setHeaderIfNotSet(headers, name, value) {
  var realHeaderName = lookupCaseInsensitive(headers, name);

  if (!realHeaderName) {
    setHeaderInternal(headers, realHeaderName, name, value);
  }
}
/**
 * Looks up and returns the matching property name from the object.
 *
 * This method returns the matching property name in the object which might or might
 * not have the same case as the prop argument.
 *
 * @param obj Object with string property names
 * @param prop Property to lookup
 */

function lookupCaseInsensitive(obj, prop) {
  prop = prop.toLowerCase();

  for (var p in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, p) && prop === p.toLowerCase()) {
      return p;
    }
  }

  return null;
}
/**
 * Merge headers
 *
 * Header names are compared using case-insensitive comparison. This method
 * preserves the original header name. If the headersToMerge overrides an existing
 * header, then the new header name (with its casing) is used.
 *
 * @param headers Headers to merge into
 * @param headersToMerge Headers to set
 */

function mergeHeaders(headers, headersToMerge) {
  var headerKeys = {}; // Create a map of lower-cased-header-name to original-header-names

  for (var _iterator = _createForOfIteratorHelperLoose(Object.getOwnPropertyNames(headers)), _step; !(_step = _iterator()).done;) {
    var headerName = _step.value;
    headerKeys[headerName.toLowerCase()] = headerName;
  } // Override headers with new values


  for (var _iterator2 = _createForOfIteratorHelperLoose(Object.getOwnPropertyNames(headersToMerge)), _step2; !(_step2 = _iterator2()).done;) {
    var _headerName = _step2.value;

    var lowerCasedName = _headerName.toLowerCase();

    if (headerKeys[lowerCasedName]) {
      delete headers[headerKeys[lowerCasedName]];
    }

    headerKeys[lowerCasedName] = _headerName;
    headers[_headerName] = headersToMerge[_headerName];
  }
}
/**
 * Assert headers object is valid
 */

function assertHeaders(headers) {
  if (headers === null || typeof headers !== 'object') {
    throw new TypeError('Headers must be an object.');
  }

  for (var _iterator3 = _createForOfIteratorHelperLoose(Object.getOwnPropertyNames(headers)), _step3; !(_step3 = _iterator3()).done;) {
    var headerName = _step3.value;

    if (!isValidHeaderName(headerName)) {
      throw new Error("\"" + headerName + "\" is not a valid header name.");
    }

    var headerValue = headers[headerName];

    if (typeof headerValue !== 'string') {
      throw new TypeError("Header value must be string but " + typeof headerValue + " provided.");
    }
  }
}
/**
 * Return true if header name is valid
 * @param headerName Header name
 */

function isValidHeaderName(headerName) {
  return /^[\w!#$%&'*+.^`|~-]+$/.test(headerName);
}
var CONTENT_TYPE_HEADER = 'content-type';
var ACCEPT_HEADER = 'accept';
var CONTENT_LENGTH_HEADER = 'content-length';
var AUTHORIZATION_HEADER = 'authorization';
var FORM_URLENCODED_CONTENT_TYPE = 'application/x-www-form-urlencoded';
var JSON_CONTENT_TYPE = 'application/json';
var TEXT_CONTENT_TYPE = 'text/plain; charset=utf-8';
var XML_CONTENT_TYPE = 'application/xml';

/**
 * Calls HTTP interceptor chain
 *
 * @param interceptors HTTP interceptor chain
 * @param client Terminating HTTP handler
 */
function callHttpInterceptors(interceptors, client) {
  var next = client;

  var _loop = function _loop(index) {
    var current = interceptors[index];
    var last = next;

    next = function next(request, options) {
      return current(request, options, last);
    };
  };

  for (var index = interceptors.length - 1; index >= 0; index--) {
    _loop(index);
  }

  return next;
}
/** Pass-through HTTP interceptor. */

function passThroughInterceptor(request, requestOptions, next) {
  return next(request, requestOptions);
}

var accessTokenAuthenticationProvider = function accessTokenAuthenticationProvider(_ref) {
  var accessToken = _ref.accessToken;
  return function (requiresAuth) {
    if (!requiresAuth) {
      return passThroughInterceptor;
    }

    return function (request, options, next) {
      var _request$headers;

      request.headers = (_request$headers = request.headers) != null ? _request$headers : {};
      setHeader(request.headers, AUTHORIZATION_HEADER, "Bearer " + accessToken);
      return next(request, options);
    };
  };
};

/** Environments available for API */

(function (Environment) {
  Environment["Production"] = "production";
  Environment["Sandbox"] = "sandbox";
})(exports.Environment || (exports.Environment = {}));

/** Default values for the configuration parameters of the client. */

var DEFAULT_CONFIGURATION = {
  timeout: 60000,
  additionalHeaders: {},
  environment: exports.Environment.Production,
  accessToken: 'TODO access token'
};

/**
 * Thrown when the HTTP status code is not okay.
 *
 * The ApiError extends the ApiResponse interface, so all ApiResponse
 * properties are available.
 */
var ApiError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(ApiError, _Error);

  function ApiError(context, message) {
    var _this;

    _this = _Error.call(this, message) || this;
    var request = context.request,
        response = context.response;
    _this.request = request;
    _this.statusCode = response.statusCode;
    _this.headers = response.headers;
    _this.body = response.body;

    if (typeof response.body === 'string' && response.body !== '') {
      try {
        _this.result = JSON.parse(response.body);

        if (typeof _this.result === 'object') {
          var result = _this.result;

          if ('errors' in result) {
            _this.errors = result['errors'];
          } else {
            var _result$type;

            _this.errors = [{
              category: 'V1_ERROR',
              code: (_result$type = result['type']) != null ? _result$type : 'Unknown',
              detail: result['message'],
              field: result['field']
            }];
          }
        }
      } catch (error) {
        {
          if (console) {
            console.warn("Unexpected error: Could not parse HTTP response body as JSON. " + error.message);
          }
        }
      }
    }

    return _this;
  }

  return ApiError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

/**
 * Validates the protocol and removes duplicate forward slashes
 *
 * @param url URL to clean
 * @returns Sanitized URL
 */

function sanitizeUrl(url) {
  // ensure that the urls are absolute
  var protocolRegex = /^https?:\/\/[^/]+/;
  var match = url.match(protocolRegex);

  if (match === null) {
    throw new Error("Invalid URL format: " + url);
  } // remove redundant double-forward slashes


  var protocol = match[0];
  var queryUrl = url.substring(protocol.length).replace(/\/\/+/g, '/');
  return protocol + queryUrl;
}
/**
 * Check whether value is an instance of Blob
 *
 * @remark
 * Reference: https://github.com/sindresorhus/is-blob/blob/master/index.js
 *
 * @param value Value to check
 * @returns True if the value is a Blob instance
 */

function isBlob(value) {
  if (typeof Blob === 'undefined') {
    return false;
  }

  return value instanceof Blob || Object.prototype.toString.call(value) === '[object Blob]';
} // This is used by deprecated() to keep track of "hits".

var deprecatedHits = {};
/**
 * Create warning for deprecated method usage.
 *
 * This is called once per deprecated method. If this method is called again
 * with the same arguments, no warning is generated.
 *
 * @param methodName Method name for deprecated method
 * @param notice Optional message for deprecation
 */

function deprecated(methodName, notice) {
  var message = "Method " + methodName + " is deprecated.";

  if (notice) {
    message += " " + notice;
  }

  if (deprecatedHits[message]) {
    return;
  }

  deprecatedHits[message] = true;
   warning(false, message) ;
}

/**
 * Thrown when the API call is aborted by the caller.
 *
 * Note that when an AbortError is thrown, it is not a guarantee that the API call
 * did not go through.
 */
var AbortError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(AbortError, _Error);

  function AbortError() {
    return _Error.apply(this, arguments) || this;
  }

  return AbortError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

/**
 * Wraps file with mime-type and filename to be sent as part of an HTTP request.
 */
var FileWrapper = function FileWrapper(file, options) {
  this.file = file;
  this.options = options;
  this.file = file;
};
/** Returns true if value is a FileWrapper */

function isFileWrapper(value) {
  return value instanceof FileWrapper;
}
/**
 * Returns a deep clone of the FileWrapper instance
 *
 * @param fileWrapper FileWrapper instance to copy
 */

function cloneFileWrapper(fileWrapper) {
  var options;

  if (fileWrapper.options) {
    options = cloneFileWrapperOptions(fileWrapper.options);
  }

  return new FileWrapper(fileWrapper.file, options);
}

function cloneFileWrapperOptions(fileWrapperOptions) {
  var clone = _extends({}, fileWrapperOptions);

  if (fileWrapperOptions.headers) {
    clone.headers = _extends({}, fileWrapperOptions.headers);
  }

  return clone;
}

/**
 * Array prefix format: item[1]=1&item[2]=2
 */

var indexedPrefix = function indexedPrefix(prefix, key) {
  return prefix + "[" + key + "]";
};
/**
 * Converts an object to a list of key-value pairs for form-urlencoded serialization.
 *
 * @param obj The object to serialize
 * @param prefixFormat Formatting function to create key for nested arrays
 * @return Result of serialization
 */

function formDataEncodeObject(obj, prefixFormat) {
  if (prefixFormat === void 0) {
    prefixFormat = indexedPrefix;
  }

  var result = [];

  for (var _i = 0, _Object$keys = Object.keys(obj); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];
    var value = obj[key];

    if (value === null || value === undefined) {
      continue;
    } else if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean' || typeof value === 'bigint') {
      result.push({
        key: key,
        value: value.toString()
      });
    } else if (isFileWrapper(value)) {
      result.push({
        key: key,
        value: cloneFileWrapper(value)
      });
    } else if (Array.isArray(value)) {
      for (var iter = 0; iter < value.length; iter += 1) {
        var _formDataEncodeObject;

        result.push.apply(result, formDataEncodeObject((_formDataEncodeObject = {}, _formDataEncodeObject[prefixFormat(key, iter)] = value[iter], _formDataEncodeObject)));
      }
    } else if (typeof value === 'object') {
      for (var objectKey in value) {
        if (Object.prototype.hasOwnProperty.call(value, objectKey)) {
          var _formDataEncodeObject2;

          var element = value[objectKey];
          result.push.apply(result, formDataEncodeObject((_formDataEncodeObject2 = {}, _formDataEncodeObject2[indexedPrefix(key, objectKey)] = element, _formDataEncodeObject2)));
        }
      }
    }
  }

  return result;
}
/**
 * Return a new list with all key-value pairs, which have a FileWrapper as value, removed
 *
 * @param params List of key-value pairs
 */

function filterFileWrapperFromKeyValuePairs(params) {
  return params.filter(function (p) {
    return !isFileWrapper(p.value);
  });
}
/**
 * Serializes an object for a form-urlencoded request.
 *
 * Nested and complex types in values will be flattened using {@link formDataEncodeObject() function} method.
 *
 * @param  obj The object to be serialized
 * @return The result of serialization
 */

function urlEncodeObject(obj) {
  var params = formDataEncodeObject(obj);
  return urlEncodeKeyValuePairs(params);
}
/**
 * Serializes a list of key-value pairs for a form-urlencoded request.
 *
 * @param params List of key-value pairs to serialize
 * @return The result of serialization
 */

function urlEncodeKeyValuePairs(params) {
  var encode = encodeURIComponent;
  return (params || []).map(function (p) {
    return encode(p.key) + "=" + encode(p.value.toString());
  }).join('&');
}

var DEFAULT_AXIOS_CONFIG_OVERRIDES = {
  transformResponse: []
};
var DEFAULT_TIMEOUT = 30 * 1000;
/**
 * HTTP client implementation.
 *
 * This implementation is a wrapper over the Axios client.
 */

var HttpClient = /*#__PURE__*/function () {
  function HttpClient(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        clientConfigOverrides = _ref.clientConfigOverrides,
        _ref$timeout = _ref.timeout,
        timeout = _ref$timeout === void 0 ? DEFAULT_TIMEOUT : _ref$timeout;

    this._timeout = timeout;
    this._axiosInstance = axios.create(_extends({}, DEFAULT_AXIOS_CONFIG_OVERRIDES, clientConfigOverrides));
  }
  /** Converts an HttpRequest object to an Axios request. */


  var _proto = HttpClient.prototype;

  _proto.convertHttpRequest = function convertHttpRequest(req) {
    var newRequest = {
      method: req.method,
      url: req.url,
      responseType: 'text',
      headers: _extends({}, req.headers)
    };

    if (req.auth) {
      // Set basic auth credentials if provided
      newRequest.auth = {
        username: req.auth.username,
        password: req.auth.password || ''
      };
    }

    var requestBody = req.body;

    if ((requestBody == null ? void 0 : requestBody.type) === 'text') {
      newRequest.data = requestBody.content;
    } else if ((requestBody == null ? void 0 : requestBody.type) === 'form-data' && requestBody.content.some(function (item) {
      return isFileWrapper(item.value);
    })) {
      // Create multipart request if a file is present
      var form = new FormData();

      for (var _iterator = _createForOfIteratorHelperLoose(requestBody.content), _step; !(_step = _iterator()).done;) {
        var iter = _step.value;

        if (isFileWrapper(iter.value)) {
          var _iter$value$options;

          var fileData = iter.value.file; // Make sure Blob has the correct content type if provided

          if (isBlob(fileData) && ((_iter$value$options = iter.value.options) == null ? void 0 : _iter$value$options.contentType)) {
            fileData = new Blob([fileData], {
              type: iter.value.options.contentType
            });
          }

          form.append(iter.key, fileData, iter.value.options);
        } else {
          form.append(iter.key, iter.value);
        }
      }

      newRequest.data = form;
      mergeHeaders(newRequest.headers, form.getHeaders());
    } else if ((requestBody == null ? void 0 : requestBody.type) === 'form-data' || (requestBody == null ? void 0 : requestBody.type) === 'form') {
      // Create form-urlencoded request
      setHeader(newRequest.headers, CONTENT_TYPE_HEADER, FORM_URLENCODED_CONTENT_TYPE);
      newRequest.data = urlEncodeKeyValuePairs(requestBody.content);
    } else if ((requestBody == null ? void 0 : requestBody.type) === 'stream') {
      var _requestBody$content$;

      var contentType = 'application/octet-stream';

      if (isBlob(requestBody.content.file) && requestBody.content.file.type) {
        // Set Blob mime type as the content-type header if present
        contentType = requestBody.content.file.type;
      } else if ((_requestBody$content$ = requestBody.content.options) == null ? void 0 : _requestBody$content$.contentType) {
        // Otherwise, use the content type if available.
        contentType = requestBody.content.options.contentType;
      }

      setHeaderIfNotSet(newRequest.headers, CONTENT_TYPE_HEADER, contentType);
      newRequest.data = requestBody.content.file;
    } else if ((requestBody == null ? void 0 : requestBody.type) !== undefined) {
      throw new Error("HTTP client encountered unknown body type '" + (requestBody == null ? void 0 : requestBody.type) + "'. Could not execute HTTP request.");
    }

    if (req.responseType === 'stream') {
      newRequest.responseType = isNode ? 'stream' : 'blob';
    } // Prevent superagent from converting any status code to error


    newRequest.validateStatus = function () {
      return true;
    }; // Set 30 seconds timeout


    newRequest.timeout = this._timeout;
    return newRequest;
  }
  /** Converts an Axios response to an HttpResponse object. */
  ;

  _proto.convertHttpResponse = function convertHttpResponse(resp) {
    return {
      body: resp.data,
      headers: resp.headers,
      statusCode: resp.status
    };
  }
  /**
   * Executes the HttpRequest with the given options and returns the HttpResponse
   * or throws an error.
   */
  ;

  _proto.executeRequest =
  /*#__PURE__*/
  function () {
    var _executeRequest = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(request, requestOptions) {
      var axiosRequest, cancelToken;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              axiosRequest = this.convertHttpRequest(request);

              if (!(requestOptions == null ? void 0 : requestOptions.abortSignal)) {
                _context.next = 7;
                break;
              }

              if (!requestOptions.abortSignal.aborted) {
                _context.next = 4;
                break;
              }

              throw this.abortError();

            case 4:
              cancelToken = axios.CancelToken.source();
              axiosRequest.cancelToken = cancelToken.token; // attach abort event handler

              requestOptions.abortSignal.addEventListener('abort', function () {
                cancelToken.cancel();
              });

            case 7:
              _context.prev = 7;
              _context.t0 = this;
              _context.next = 11;
              return this._axiosInstance(axiosRequest);

            case 11:
              _context.t1 = _context.sent;
              return _context.abrupt("return", _context.t0.convertHttpResponse.call(_context.t0, _context.t1));

            case 15:
              _context.prev = 15;
              _context.t2 = _context["catch"](7);

              if (!axios.isCancel(_context.t2)) {
                _context.next = 19;
                break;
              }

              throw this.abortError();

            case 19:
              throw _context.t2;

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[7, 15]]);
    }));

    function executeRequest(_x, _x2) {
      return _executeRequest.apply(this, arguments);
    }

    return executeRequest;
  }();

  _proto.abortError = function abortError() {
    return new AbortError('The HTTP call was aborted.');
  };

  return HttpClient;
}();

/**
 * Thrown when one or more arguments passed to a method fail validation.
 */
var ArgumentsValidationError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(ArgumentsValidationError, _Error);

  function ArgumentsValidationError(errors) {
    var _this;

    var errorKeys = Object.keys(errors);
    var message;

    if (errorKeys.length === 0) {
      message = 'One or more arguments failed validation.';
    } else if (errorKeys.length === 1 && errors[errorKeys[0]].length === 1) {
      message = "Argument for '" + errorKeys[0] + "' failed validation.\n\n" + errors[errorKeys[0]][0].message;
    } else {
      message = "The following arguments failed validation: " + errorKeys.join(', ') + ".\n\n";
      var msgList = [];

      for (var _iterator = _createForOfIteratorHelperLoose(errorKeys), _step; !(_step = _iterator()).done;) {
        var param = _step.value;
        msgList.push("> For argument '" + param + "':");

        if (errors[param].length === 1) {
          msgList.push(errors[param][0].message);
        } else {
          for (var index = 0; index < errors[param].length; index++) {
            var error = errors[param][index];
            msgList.push(">> Issue #" + (index + 1) + "\n\n" + error.message);
          }
        }
      }

      message += msgList.join('\n\n');
    }

    _this = _Error.call(this, message) || this;
    _this.errors = errors;
    return _this;
  }

  return ArgumentsValidationError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

/**
 * Thrown when the API response does not match the schema.
 */
var ResponseValidationError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(ResponseValidationError, _Error);

  function ResponseValidationError(apiResponse, errors) {
    var _this;

    var message = 'The response did not match the response schema.';

    if (errors.length === 1) {
      message += "\n\n" + errors[0].message;
    } else {
      message += errors.map(function (e, i) {
        return "\n\n> Issue #" + (i + 1) + "\n\n" + e.message;
      }).join('');
    }

    _this = _Error.call(this, message) || this;
    _this.request = apiResponse.request;
    _this.statusCode = apiResponse.statusCode;
    _this.headers = apiResponse.headers;
    _this.body = apiResponse.body;
    _this.errors = errors;
    return _this;
  }

  return ResponseValidationError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

/** Marker for skipping URL-encoding when used with Path templating */

var SkipEncode = function SkipEncode(value) {
  this.value = value;
};
/**
 * URL path templating method.
 *
 * Template arguments of array type are imploded using the path separator and
 * individual elements are URL-encoded.
 *
 * Template arguments are URL-encoded unless wrapped in a SkipEncode instance.
 */

function pathTemplate(strings) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var values = flatMap(interweaveArrays(strings.map(function (s) {
    return new SkipEncode(s);
  }), args), encodePathTemplateSegment);
  var pathSegment = values.join('');
  return pathSegment;
}

function encodePathTemplateSegment(value) {
  var skipEncode = false;

  var encode = function encode(m) {
    return skipEncode ? m.toString() : encodeURIComponent(m);
  };

  if (value instanceof SkipEncode) {
    value = value.value;
    skipEncode = true;
  }

  return Array.isArray(value) ? value.map(encode).join('/') : [encode(value)];
}

function interweaveArrays(a, b) {
  var min = Math.min(a.length, b.length);
  return Array.apply(null, new Array(min)).reduce(function (result, _, index) {
    result.push(a[index], b[index]);
    return result;
  }, []).concat((a.length > min ? a : b).slice(min));
}

/**
 * Prepares arguments for being sent in the API request.
 *
 * Each argument is validated and converted to a JSON-serialization ready value.
 *
 * If one or more arguments fail validation, an ArgumentsValidationError is
 * thrown, which contains the validation details for all arguments that failed
 * validation.
 *
 * @param params Map of arguments with values and schema
 * @returns Map of serialization-ready argument values
 *
 * @throws ArgumentsValidationError
 */

function prepareArgs(params) {
  var validationErrors = {};
  var result = {};

  for (var paramName in params) {
    if (Object.prototype.hasOwnProperty.call(params, paramName)) {
      var paramInfo = params[paramName];
      var validationResult = schema.validateAndUnmap(paramInfo[0], paramInfo[1]);

      if (validationResult.errors) {
        validationErrors[paramName] = validationResult.errors;
      } else {
        result[paramName] = validationResult.result;
      }
    }
  }

  if (Object.keys(validationErrors).length > 0) {
    throw new ArgumentsValidationError(validationErrors);
  }

  return result;
}

function xmlSerialize(_rootName, _value) {
  throw new Error('XML serialization is not available.');
}
function xmlDeserialize(_x, _x2) {
  return _xmlDeserialize.apply(this, arguments);
}

function _xmlDeserialize() {
  _xmlDeserialize = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(_rootName, _xmlString) {
    return runtime_1.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            throw new Error('XML deserialization is not available.');

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _xmlDeserialize.apply(this, arguments);
}

var DefaultRequestBuilder = /*#__PURE__*/function () {
  function DefaultRequestBuilder(_httpClient, _baseUrlProvider, _apiErrorFactory, _authenticationProvider, _httpMethod, _path) {
    this._httpClient = _httpClient;
    this._baseUrlProvider = _baseUrlProvider;
    this._apiErrorFactory = _apiErrorFactory;
    this._authenticationProvider = _authenticationProvider;
    this._httpMethod = _httpMethod;
    this._path = _path;
    this._headers = {};
    this._query = [];
    this._interceptors = [];
    this._validateResponse = true;

    this._addResponseValidator();

    this._addAuthentication();

    this.prepareArgs = prepareArgs.bind(this);
  }

  var _proto = DefaultRequestBuilder.prototype;

  _proto.authenticate = function authenticate(params) {
    this._authParams = params;
  };

  _proto.deprecated = function deprecated$1(methodName, message) {
    deprecated(methodName, message);
  };

  _proto.appendTemplatePath = function appendTemplatePath(strings) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var pathSegment = pathTemplate.apply(void 0, [strings].concat(args));
    this.appendPath(pathSegment);
  };

  _proto.method = function method(httpMethodName) {
    this._httpMethod = httpMethodName;
  };

  _proto.baseUrl = function baseUrl(arg) {
    this._baseUrlArg = arg;
  };

  _proto.appendPath = function appendPath(path) {
    this._path = this._path ? mergePath(this._path, path) : path;
  };

  _proto.acceptJson = function acceptJson() {
    this._accept = JSON_CONTENT_TYPE;
  };

  _proto.accept = function accept(acceptHeaderValue) {
    this._accept = acceptHeaderValue;
  };

  _proto.contentType = function contentType(contentTypeHeaderValue) {
    this._contentType = contentTypeHeaderValue;
  };

  _proto.header = function header(name, value) {
    if (value === undefined) {
      return;
    }

    setHeader(this._headers, name, value.toString());
  };

  _proto.headers = function headers(headersToMerge) {
    mergeHeaders(this._headers, headersToMerge);
  };

  _proto.query = function query(nameOrParameters, value) {
    var _urlEncodeObject;

    if (nameOrParameters === null || nameOrParameters === undefined) return;
    var queryString = typeof nameOrParameters === 'string' ? urlEncodeObject((_urlEncodeObject = {}, _urlEncodeObject[nameOrParameters] = value, _urlEncodeObject)) : urlEncodeObject(nameOrParameters);

    if (queryString) {
      this._query.push(queryString);
    }
  };

  _proto.text = function text(body) {
    this._body = body;

    this._setContentTypeIfNotSet(TEXT_CONTENT_TYPE);
  };

  _proto.json = function json(data) {
    console.dir(data, {
      depth: undefined
    });
    this._body = JSON.stringify(data);

    this._setContentTypeIfNotSet(JSON_CONTENT_TYPE);
  };

  _proto.xml = function xml(argName, data, rootName, schema$1) {
    var mappingResult = schema.validateAndUnmapXml(data, schema$1);

    if (mappingResult.errors) {
      var _ArgumentsValidationE;

      throw new ArgumentsValidationError((_ArgumentsValidationE = {}, _ArgumentsValidationE[argName] = mappingResult.errors, _ArgumentsValidationE));
    }

    this._body = xmlSerialize();

    this._setContentTypeIfNotSet(XML_CONTENT_TYPE);
  };

  _proto.stream = function stream(file) {
    this._stream = file;
  };

  _proto.form = function form(parameters) {
    this._form = filterFileWrapperFromKeyValuePairs(formDataEncodeObject(parameters));
  };

  _proto.formData = function formData(parameters) {
    this._formData = formDataEncodeObject(parameters);
  };

  _proto.toRequest = function toRequest() {
    var request = {
      method: this._httpMethod,
      url: mergePath(this._baseUrlProvider(this._baseUrlArg), this._path)
    };

    if (this._query.length > 0) {
      var queryString = this._query.join('&');

      request.url += (request.url.indexOf('?') === -1 ? '?' : '&') + queryString;
    }

    request.url = sanitizeUrl(request.url); // defensively copy headers

    var headers = _extends({}, this._headers);

    if (this._accept) {
      setHeader(headers, ACCEPT_HEADER, this._accept);
    }

    if (this._contentType) {
      setHeader(headers, CONTENT_TYPE_HEADER, this._contentType);
    }

    setHeader(headers, CONTENT_LENGTH_HEADER);
    request.headers = headers;

    if (this._body !== undefined) {
      request.body = {
        type: 'text',
        content: this._body
      };
    } else if (this._form !== undefined) {
      request.body = {
        type: 'form',
        content: this._form
      };
    } else if (this._formData !== undefined) {
      request.body = {
        type: 'form-data',
        content: this._formData
      };
    } else if (this._stream !== undefined) {
      request.body = {
        type: 'stream',
        content: this._stream
      };
    }

    return request;
  };

  _proto.intercept = function intercept(interceptor) {
    this._interceptors.push(interceptor);
  };

  _proto.interceptRequest = function interceptRequest(interceptor) {
    this.intercept(function (req, opt, next) {
      return next(interceptor(req), opt);
    });
  };

  _proto.interceptResponse = function interceptResponse(interceptor) {
    this.intercept( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(req, opt, next) {
        return runtime_1.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = interceptor;
                _context.next = 3;
                return next(req, opt);

              case 3:
                _context.t1 = _context.sent;
                return _context.abrupt("return", (0, _context.t0)(_context.t1));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }());
  };

  _proto.defaultToError = function defaultToError(apiErrorCtor) {
    this._apiErrorFactory = apiErrorCtor;
  };

  _proto.validateResponse = function validateResponse(validate) {
    this._validateResponse = validate;
  };

  _proto.throwOn = function throwOn(statusCode, errorConstructor) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }

    this.interceptResponse(function (context) {
      var response = context.response;

      if (typeof statusCode === 'number' && response.statusCode === statusCode || typeof statusCode !== 'number' && response.statusCode >= statusCode[0] && response.statusCode <= statusCode[1]) {
        throw _construct(errorConstructor, [context].concat(args));
      }

      return context;
    });
  };

  _proto.call = /*#__PURE__*/function () {
    var _call = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(requestOptions) {
      var _this = this;

      var pipeline, _yield$pipeline, request, response;

      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              // Prepare the HTTP pipeline
              pipeline = callHttpInterceptors(this._interceptors, /*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(request, opt) {
                  var response;
                  return runtime_1.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return _this._httpClient(request, opt);

                        case 2:
                          response = _context2.sent;
                          return _context2.abrupt("return", {
                            request: request,
                            response: response
                          });

                        case 4:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));

                return function (_x5, _x6) {
                  return _ref2.apply(this, arguments);
                };
              }()); // Execute HTTP pipeline

              _context3.next = 3;
              return pipeline(this.toRequest(), requestOptions);

            case 3:
              _yield$pipeline = _context3.sent;
              request = _yield$pipeline.request;
              response = _yield$pipeline.response;
              return _context3.abrupt("return", _extends({}, response, {
                request: request,
                result: undefined
              }));

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function call(_x4) {
      return _call.apply(this, arguments);
    }

    return call;
  }();

  _proto.callAsText = /*#__PURE__*/function () {
    var _callAsText = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(requestOptions) {
      var result;
      return runtime_1.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.call(requestOptions);

            case 2:
              result = _context4.sent;

              if (!(typeof result.body !== 'string')) {
                _context4.next = 5;
                break;
              }

              throw new Error('Could not parse body as string.');

            case 5:
              return _context4.abrupt("return", _extends({}, result, {
                result: result.body
              }));

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function callAsText(_x7) {
      return _callAsText.apply(this, arguments);
    }

    return callAsText;
  }();

  _proto.callAsOptionalText = /*#__PURE__*/function () {
    var _callAsOptionalText = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5(requestOptions) {
      var result;
      return runtime_1.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.call(requestOptions);

            case 2:
              result = _context5.sent;

              if (!(typeof result.body !== 'string')) {
                _context5.next = 5;
                break;
              }

              return _context5.abrupt("return", _extends({}, result, {
                result: undefined
              }));

            case 5:
              return _context5.abrupt("return", _extends({}, result, {
                result: result.body
              }));

            case 6:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function callAsOptionalText(_x8) {
      return _callAsOptionalText.apply(this, arguments);
    }

    return callAsOptionalText;
  }();

  _proto.callAsStream = /*#__PURE__*/function () {
    var _callAsStream = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee6(requestOptions) {
      var result;
      return runtime_1.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              this.interceptRequest(function (req) {
                return _extends({}, req, {
                  responseType: 'stream'
                });
              });
              _context6.next = 3;
              return this.call(requestOptions);

            case 3:
              result = _context6.sent;
              return _context6.abrupt("return", _extends({}, result, {
                result: convertToStream(result.body)
              }));

            case 5:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function callAsStream(_x9) {
      return _callAsStream.apply(this, arguments);
    }

    return callAsStream;
  }();

  _proto.callAsJson = /*#__PURE__*/function () {
    var _callAsJson = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee7(schema$1, requestOptions) {
      var result, parsed, mappingResult;
      return runtime_1.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              this.interceptRequest(function (request) {
                var headers = _extends({}, request.headers);

                setHeaderIfNotSet(headers, ACCEPT_HEADER, JSON_CONTENT_TYPE);
                return _extends({}, request, {
                  headers: headers
                });
              });
              _context7.next = 3;
              return this.call(requestOptions);

            case 3:
              result = _context7.sent;
              console.dir(result.body, {
                depth: undefined
              });

              if (!(result.body === '')) {
                _context7.next = 7;
                break;
              }

              throw new Error('Could not parse body as JSON. The response body is empty.');

            case 7:
              if (!(typeof result.body !== 'string')) {
                _context7.next = 9;
                break;
              }

              throw new Error('Could not parse body as JSON. The response body is not a string.');

            case 9:
              _context7.prev = 9;
              parsed = JSON.parse(result.body);
              _context7.next = 16;
              break;

            case 13:
              _context7.prev = 13;
              _context7.t0 = _context7["catch"](9);
              throw new Error("Could not parse body as JSON.\n\n" + _context7.t0.message);

            case 16:
              mappingResult = schema.validateAndMap(parsed, schema$1);

              if (!mappingResult.errors) {
                _context7.next = 19;
                break;
              }

              throw new ResponseValidationError(result, mappingResult.errors);

            case 19:
              return _context7.abrupt("return", _extends({}, result, {
                result: mappingResult.result
              }));

            case 20:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this, [[9, 13]]);
    }));

    function callAsJson(_x10, _x11) {
      return _callAsJson.apply(this, arguments);
    }

    return callAsJson;
  }();

  _proto.callAsXml = /*#__PURE__*/function () {
    var _callAsXml = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee8(rootName, schema$1, requestOptions) {
      var result, xmlObject, mappingResult;
      return runtime_1.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              this.interceptRequest(function (request) {
                var headers = _extends({}, request.headers);

                setHeaderIfNotSet(headers, ACCEPT_HEADER, XML_CONTENT_TYPE);
                return _extends({}, request, {
                  headers: headers
                });
              });
              _context8.next = 3;
              return this.call(requestOptions);

            case 3:
              result = _context8.sent;

              if (!(result.body === '')) {
                _context8.next = 6;
                break;
              }

              throw new Error('Could not parse body as XML. The response body is empty.');

            case 6:
              if (!(typeof result.body !== 'string')) {
                _context8.next = 8;
                break;
              }

              throw new Error('Could not parse body as XML. The response body is not a string.');

            case 8:
              _context8.prev = 8;
              _context8.next = 11;
              return xmlDeserialize(rootName, result.body);

            case 11:
              xmlObject = _context8.sent;
              _context8.next = 17;
              break;

            case 14:
              _context8.prev = 14;
              _context8.t0 = _context8["catch"](8);
              throw new Error("Could not parse body as XML.\n\n" + _context8.t0.message);

            case 17:
              mappingResult = schema.validateAndMapXml(xmlObject, schema$1);

              if (!mappingResult.errors) {
                _context8.next = 20;
                break;
              }

              throw new ResponseValidationError(result, mappingResult.errors);

            case 20:
              return _context8.abrupt("return", _extends({}, result, {
                result: mappingResult.result
              }));

            case 21:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this, [[8, 14]]);
    }));

    function callAsXml(_x12, _x13, _x14) {
      return _callAsXml.apply(this, arguments);
    }

    return callAsXml;
  }();

  _proto._setContentTypeIfNotSet = function _setContentTypeIfNotSet(contentType) {
    if (!this._contentType) {
      setHeaderIfNotSet(this._headers, CONTENT_TYPE_HEADER, contentType);
    }
  };

  _proto._addResponseValidator = function _addResponseValidator() {
    var _this2 = this;

    this.interceptResponse(function (context) {
      var response = context.response;

      if (_this2._validateResponse && (response.statusCode < 200 || response.statusCode >= 300)) {
        throw new _this2._apiErrorFactory(context, "Response status code was not ok: " + response.statusCode + ".");
      }

      return context;
    });
  };

  _proto._addAuthentication = function _addAuthentication() {
    var _this3 = this;

    this.intercept(function () {
      var handler = _this3._authenticationProvider(_this3._authParams);

      return handler.apply(void 0, arguments);
    });
  };

  return DefaultRequestBuilder;
}();
function createRequestBuilderFactory(httpClient, baseUrlProvider, apiErrorFactory, authenticationProvider) {
  return function (httpMethod, path) {
    return new DefaultRequestBuilder(httpClient, baseUrlProvider, apiErrorFactory, authenticationProvider, httpMethod, path);
  };
}

function mergePath(left, right) {
  if (!right || right === '') {
    return left;
  }

  if (left[left.length - 1] === '/' && right[0] === '/') {
    return left + right.substr(1);
  } else if (left[left.length - 1] === '/' || right[0] === '/') {
    return left + right;
  } else {
    return left + "/" + right;
  }
}

function convertToStream(content) {
  if (typeof content !== 'string') {
    return content;
  }

  if (isNode) {
    // ref: https://stackoverflow.com/a/22085851
    var rs = new (require('stream').Readable)();

    rs._read = function () {};

    rs.push(content);
    rs.push(null);
    return rs;
  }

  return new Blob([content]);
}

/** Current SDK version */

var SDK_VERSION = '7.0.0';
var USER_AGENT = 'Square-TypeScript-SDK/7.0.0';
var Client = /*#__PURE__*/function () {
  function Client(config) {
    var _this = this;

    this._config = _extends({}, DEFAULT_CONFIGURATION, config);
    this._requestBuilderFactory = createRequestHandlerFactory(function (server) {
      return getBaseUri(server, _this._config);
    }, accessTokenAuthenticationProvider(this._config), new HttpClient({
      timeout: this._config.timeout,
      clientConfigOverrides: this._config.unstable_httpClientOptions
    }), [withErrorHandlers, withUserAgent, withAdditionalHeaders(this._config), withAuthenticationByDefault]);
    this.applePayApi = new ApplePayApi(this);
    this.bankAccountsApi = new BankAccountsApi(this);
    this.bookingsApi = new BookingsApi(this);
    this.cashDrawersApi = new CashDrawersApi(this);
    this.catalogApi = new CatalogApi(this);
    this.checkoutApi = new CheckoutApi(this);
    this.customerGroupsApi = new CustomerGroupsApi(this);
    this.customersApi = new CustomersApi(this);
    this.customerSegmentsApi = new CustomerSegmentsApi(this);
    this.devicesApi = new DevicesApi(this);
    this.disputesApi = new DisputesApi(this);
    this.employeesApi = new EmployeesApi(this);
    this.inventoryApi = new InventoryApi(this);
    this.invoicesApi = new InvoicesApi(this);
    this.laborApi = new LaborApi(this);
    this.locationsApi = new LocationsApi(this);
    this.loyaltyApi = new LoyaltyApi(this);
    this.giftcardsApi = new GiftCardsApi(this);
    this.merchantsApi = new MerchantsApi(this);
    this.mobileAuthorizationApi = new MobileAuthorizationApi(this);
    this.oAuthApi = new OAuthApi(this);
    this.ordersApi = new OrdersApi(this);
    this.paymentsApi = new PaymentsApi(this);
    this.refundsApi = new RefundsApi(this);
    this.subscriptionsApi = new SubscriptionsApi(this);
    this.teamApi = new TeamApi(this);
    this.terminalApi = new TerminalApi(this);
    this.transactionsApi = new TransactionsApi(this);
    this.v1EmployeesApi = new V1EmployeesApi(this);
    this.v1ItemsApi = new V1ItemsApi(this);
    this.v1LocationsApi = new V1LocationsApi(this);
    this.v1TransactionsApi = new V1TransactionsApi(this);
  }

  var _proto = Client.prototype;

  _proto.getRequestBuilderFactory = function getRequestBuilderFactory() {
    return this._requestBuilderFactory;
  }
  /**
   * Clone this client and override given configuration options
   */
  ;

  _proto.withConfiguration = function withConfiguration(config) {
    return new Client(_extends({}, this._config, config));
  };

  return Client;
}();

function createHttpClientAdapter(client) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(request, requestOptions) {
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return client.executeRequest(request, requestOptions);

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
}

function getBaseUri(server, config) {
  if (server === void 0) {
    server = 'default';
  }

  if (config.environment === exports.Environment.Production) {
    if (server === 'default') {
      return 'https://connect.squareup.com';
    }
  }

  if (config.environment === exports.Environment.Sandbox) {
    if (server === 'default') {
      return 'https://connect.squareupsandbox.com';
    }
  }

  throw new Error('Could not get Base URL. Invalid environment or server.');
}

function createRequestHandlerFactory(baseUrlProvider, authProvider, httpClient, addons) {
  var requestBuilderFactory = createRequestBuilderFactory(createHttpClientAdapter(httpClient), baseUrlProvider, ApiError, authProvider);
  return tap.apply(void 0, [requestBuilderFactory].concat(addons));
}

function tap(requestBuilderFactory) {
  for (var _len = arguments.length, callback = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    callback[_key - 1] = arguments[_key];
  }

  return function () {
    var requestBuilder = requestBuilderFactory.apply(void 0, arguments);
    callback.forEach(function (c) {
      return c(requestBuilder);
    });
    return requestBuilder;
  };
}

function withErrorHandlers(rb) {
  rb.defaultToError(ApiError);
}

function withAdditionalHeaders(_ref2) {
  var additionalHeaders = _ref2.additionalHeaders;

  var clone = _extends({}, additionalHeaders);

  assertHeaders(clone);
  return function (rb) {
    rb.interceptRequest(function (request) {
      var _request$headers;

      var headers = (_request$headers = request.headers) != null ? _request$headers : {};
      mergeHeaders(headers, clone);
      return _extends({}, request, {
        headers: headers
      });
    });
  };
}

function withUserAgent(rb) {
  rb.header('user-agent', USER_AGENT);
}

function withAuthenticationByDefault(rb) {
  rb.authenticate(true);
}

exports.AbortError = AbortError;
exports.ApiError = ApiError;
exports.ApplePayApi = ApplePayApi;
exports.ArgumentsValidationError = ArgumentsValidationError;
exports.BankAccountsApi = BankAccountsApi;
exports.BookingsApi = BookingsApi;
exports.CashDrawersApi = CashDrawersApi;
exports.CatalogApi = CatalogApi;
exports.CheckoutApi = CheckoutApi;
exports.Client = Client;
exports.CustomerGroupsApi = CustomerGroupsApi;
exports.CustomerSegmentsApi = CustomerSegmentsApi;
exports.CustomersApi = CustomersApi;
exports.DEFAULT_CONFIGURATION = DEFAULT_CONFIGURATION;
exports.DevicesApi = DevicesApi;
exports.DisputesApi = DisputesApi;
exports.EmployeesApi = EmployeesApi;
exports.FileWrapper = FileWrapper;
exports.GiftCardsApi = GiftCardsApi;
exports.InventoryApi = InventoryApi;
exports.InvoicesApi = InvoicesApi;
exports.LaborApi = LaborApi;
exports.LocationsApi = LocationsApi;
exports.LoyaltyApi = LoyaltyApi;
exports.MerchantsApi = MerchantsApi;
exports.MobileAuthorizationApi = MobileAuthorizationApi;
exports.OAuthApi = OAuthApi;
exports.OrdersApi = OrdersApi;
exports.PaymentsApi = PaymentsApi;
exports.RefundsApi = RefundsApi;
exports.ResponseValidationError = ResponseValidationError;
exports.SDK_VERSION = SDK_VERSION;
exports.SubscriptionsApi = SubscriptionsApi;
exports.TeamApi = TeamApi;
exports.TerminalApi = TerminalApi;
exports.TransactionsApi = TransactionsApi;
exports.V1EmployeesApi = V1EmployeesApi;
exports.V1ItemsApi = V1ItemsApi;
exports.V1LocationsApi = V1LocationsApi;
exports.V1TransactionsApi = V1TransactionsApi;
exports.cloneFileWrapper = cloneFileWrapper;
exports.isFileWrapper = isFileWrapper;
//# sourceMappingURL=square.cjs.development.js.map
