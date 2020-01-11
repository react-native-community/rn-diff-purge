module.exports =
/******/ (function(modules, runtime) { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	__webpack_require__.ab = __dirname + "/";
/******/
/******/ 	// the startup function
/******/ 	function startup() {
/******/ 		// Load entry module and return exports
/******/ 		return __webpack_require__(977);
/******/ 	};
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ({

/***/ 194:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var function_1 = __webpack_require__(231);
function pipe(a, ab, bc, cd, de, ef, fg, gh, hi, ij) {
    switch (arguments.length) {
        case 1:
            return a;
        case 2:
            return ab(a);
        case 3:
            return bc(ab(a));
        case 4:
            return cd(bc(ab(a)));
        case 5:
            return de(cd(bc(ab(a))));
        case 6:
            return ef(de(cd(bc(ab(a)))));
        case 7:
            return fg(ef(de(cd(bc(ab(a))))));
        case 8:
            return gh(fg(ef(de(cd(bc(ab(a)))))));
        case 9:
            return hi(gh(fg(ef(de(cd(bc(ab(a))))))));
        case 10:
            return ij(hi(gh(fg(ef(de(cd(bc(ab(a)))))))));
    }
    return;
}
exports.pipe = pipe;
var isFunctor = function (I) { return typeof I.map === 'function'; };
var isContravariant = function (I) { return typeof I.contramap === 'function'; };
var isFunctorWithIndex = function (I) { return typeof I.mapWithIndex === 'function'; };
var isApply = function (I) { return typeof I.ap === 'function'; };
var isChain = function (I) { return typeof I.chain === 'function'; };
var isBifunctor = function (I) { return typeof I.bimap === 'function'; };
var isExtend = function (I) { return typeof I.extend === 'function'; };
var isFoldable = function (I) { return typeof I.reduce === 'function'; };
var isFoldableWithIndex = function (I) { return typeof I.reduceWithIndex === 'function'; };
var isAlt = function (I) { return typeof I.alt === 'function'; };
var isCompactable = function (I) { return typeof I.compact === 'function'; };
var isFilterable = function (I) { return typeof I.filter === 'function'; };
var isFilterableWithIndex = function (I) {
    return typeof I.filterWithIndex === 'function';
};
var isProfunctor = function (I) { return typeof I.promap === 'function'; };
var isSemigroupoid = function (I) { return typeof I.compose === 'function'; };
var isMonadThrow = function (I) { return typeof I.throwError === 'function'; };
function pipeable(I) {
    var r = {};
    if (isFunctor(I)) {
        var map = function (f) { return function (fa) { return I.map(fa, f); }; };
        r.map = map;
    }
    if (isContravariant(I)) {
        var contramap = function (f) { return function (fa) { return I.contramap(fa, f); }; };
        r.contramap = contramap;
    }
    if (isFunctorWithIndex(I)) {
        var mapWithIndex = function (f) { return function (fa) { return I.mapWithIndex(fa, f); }; };
        r.mapWithIndex = mapWithIndex;
    }
    if (isApply(I)) {
        var ap = function (fa) { return function (fab) { return I.ap(fab, fa); }; };
        var apFirst = function (fb) { return function (fa) {
            return I.ap(I.map(fa, function (a) { return function () { return a; }; }), fb);
        }; };
        r.ap = ap;
        r.apFirst = apFirst;
        r.apSecond = function (fb) { return function (fa) {
            return I.ap(I.map(fa, function () { return function (b) { return b; }; }), fb);
        }; };
    }
    if (isChain(I)) {
        var chain = function (f) { return function (ma) { return I.chain(ma, f); }; };
        var chainFirst = function (f) { return function (ma) { return I.chain(ma, function (a) { return I.map(f(a), function () { return a; }); }); }; };
        var flatten = function (mma) { return I.chain(mma, function_1.identity); };
        r.chain = chain;
        r.chainFirst = chainFirst;
        r.flatten = flatten;
    }
    if (isBifunctor(I)) {
        var bimap = function (f, g) { return function (fa) { return I.bimap(fa, f, g); }; };
        var mapLeft = function (f) { return function (fa) { return I.mapLeft(fa, f); }; };
        r.bimap = bimap;
        r.mapLeft = mapLeft;
    }
    if (isExtend(I)) {
        var extend = function (f) { return function (wa) { return I.extend(wa, f); }; };
        var duplicate = function (wa) { return I.extend(wa, function_1.identity); };
        r.extend = extend;
        r.duplicate = duplicate;
    }
    if (isFoldable(I)) {
        var reduce = function (b, f) { return function (fa) { return I.reduce(fa, b, f); }; };
        var foldMap = function (M) {
            var foldMapM = I.foldMap(M);
            return function (f) { return function (fa) { return foldMapM(fa, f); }; };
        };
        var reduceRight = function (b, f) { return function (fa) { return I.reduceRight(fa, b, f); }; };
        r.reduce = reduce;
        r.foldMap = foldMap;
        r.reduceRight = reduceRight;
    }
    if (isFoldableWithIndex(I)) {
        var reduceWithIndex = function (b, f) { return function (fa) {
            return I.reduceWithIndex(fa, b, f);
        }; };
        var foldMapWithIndex = function (M) {
            var foldMapM = I.foldMapWithIndex(M);
            return function (f) { return function (fa) { return foldMapM(fa, f); }; };
        };
        var reduceRightWithIndex = function (b, f) { return function (fa) {
            return I.reduceRightWithIndex(fa, b, f);
        }; };
        r.reduceWithIndex = reduceWithIndex;
        r.foldMapWithIndex = foldMapWithIndex;
        r.reduceRightWithIndex = reduceRightWithIndex;
    }
    if (isAlt(I)) {
        var alt = function (that) { return function (fa) { return I.alt(fa, that); }; };
        r.alt = alt;
    }
    if (isCompactable(I)) {
        r.compact = I.compact;
        r.separate = I.separate;
    }
    if (isFilterable(I)) {
        var filter = function (predicate) { return function (fa) {
            return I.filter(fa, predicate);
        }; };
        var filterMap = function (f) { return function (fa) { return I.filterMap(fa, f); }; };
        var partition = function (predicate) { return function (fa) {
            return I.partition(fa, predicate);
        }; };
        var partitionMap = function (f) { return function (fa) { return I.partitionMap(fa, f); }; };
        r.filter = filter;
        r.filterMap = filterMap;
        r.partition = partition;
        r.partitionMap = partitionMap;
    }
    if (isFilterableWithIndex(I)) {
        var filterWithIndex = function (predicateWithIndex) { return function (fa) { return I.filterWithIndex(fa, predicateWithIndex); }; };
        var filterMapWithIndex = function (f) { return function (fa) {
            return I.filterMapWithIndex(fa, f);
        }; };
        var partitionWithIndex = function (predicateWithIndex) { return function (fa) { return I.partitionWithIndex(fa, predicateWithIndex); }; };
        var partitionMapWithIndex = function (f) { return function (fa) {
            return I.partitionMapWithIndex(fa, f);
        }; };
        r.filterWithIndex = filterWithIndex;
        r.filterMapWithIndex = filterMapWithIndex;
        r.partitionWithIndex = partitionWithIndex;
        r.partitionMapWithIndex = partitionMapWithIndex;
    }
    if (isProfunctor(I)) {
        var promap = function (f, g) { return function (fa) { return I.promap(fa, f, g); }; };
        r.promap = promap;
    }
    if (isSemigroupoid(I)) {
        var compose = function (that) { return function (fa) { return I.compose(fa, that); }; };
        r.compose = compose;
    }
    if (isMonadThrow(I)) {
        var fromOption = function (onNone) { return function (ma) {
            return ma._tag === 'None' ? I.throwError(onNone()) : I.of(ma.value);
        }; };
        var fromEither = function (ma) {
            return ma._tag === 'Left' ? I.throwError(ma.left) : I.of(ma.right);
        };
        var fromPredicate = function (predicate, onFalse) { return function (a) { return (predicate(a) ? I.of(a) : I.throwError(onFalse(a))); }; };
        var filterOrElse = function (predicate, onFalse) { return function (ma) { return I.chain(ma, function (a) { return (predicate(a) ? I.of(a) : I.throwError(onFalse(a))); }); }; };
        r.fromOption = fromOption;
        r.fromEither = fromEither;
        r.fromPredicate = fromPredicate;
        r.filterOrElse = filterOrElse;
    }
    return r;
}
exports.pipeable = pipeable;


/***/ }),

/***/ 231:
/***/ (function(__unusedmodule, exports) {

"use strict";

/**
 * @since 2.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @since 2.0.0
 */
function identity(a) {
    return a;
}
exports.identity = identity;
/**
 * @since 2.0.0
 */
exports.unsafeCoerce = identity;
/**
 * @since 2.0.0
 */
function not(predicate) {
    return function (a) { return !predicate(a); };
}
exports.not = not;
/**
 * @since 2.0.0
 */
function constant(a) {
    return function () { return a; };
}
exports.constant = constant;
/**
 * A thunk that returns always `true`
 *
 * @since 2.0.0
 */
exports.constTrue = function () {
    return true;
};
/**
 * A thunk that returns always `false`
 *
 * @since 2.0.0
 */
exports.constFalse = function () {
    return false;
};
/**
 * A thunk that returns always `null`
 *
 * @since 2.0.0
 */
exports.constNull = function () {
    return null;
};
/**
 * A thunk that returns always `undefined`
 *
 * @since 2.0.0
 */
exports.constUndefined = function () {
    return;
};
/**
 * A thunk that returns always `void`
 *
 * @since 2.0.0
 */
exports.constVoid = function () {
    return;
};
/**
 * Flips the order of the arguments of a function of two arguments.
 *
 * @since 2.0.0
 */
function flip(f) {
    return function (b, a) { return f(a, b); };
}
exports.flip = flip;
function flow(ab, bc, cd, de, ef, fg, gh, hi, ij) {
    switch (arguments.length) {
        case 1:
            return ab;
        case 2:
            return function () {
                return bc(ab.apply(this, arguments));
            };
        case 3:
            return function () {
                return cd(bc(ab.apply(this, arguments)));
            };
        case 4:
            return function () {
                return de(cd(bc(ab.apply(this, arguments))));
            };
        case 5:
            return function () {
                return ef(de(cd(bc(ab.apply(this, arguments)))));
            };
        case 6:
            return function () {
                return fg(ef(de(cd(bc(ab.apply(this, arguments))))));
            };
        case 7:
            return function () {
                return gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))));
            };
        case 8:
            return function () {
                return hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments))))))));
            };
        case 9:
            return function () {
                return ij(hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))))));
            };
    }
    return;
}
exports.flow = flow;
/**
 * @since 2.0.0
 */
function tuple() {
    var t = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        t[_i] = arguments[_i];
    }
    return t;
}
exports.tuple = tuple;
/**
 * @since 2.0.0
 */
function increment(n) {
    return n + 1;
}
exports.increment = increment;
/**
 * @since 2.0.0
 */
function decrement(n) {
    return n - 1;
}
exports.decrement = decrement;
/**
 * @since 2.0.0
 */
function absurd(_) {
    throw new Error('Called `absurd` function which should be uncallable');
}
exports.absurd = absurd;
/**
 * Creates a tupled version of this function: instead of `n` arguments, it accepts a single tuple argument.
 *
 * @example
 * import { tupled } from 'fp-ts/lib/function'
 *
 * const add = tupled((x: number, y: number): number => x + y)
 *
 * assert.strictEqual(add([1, 2]), 3)
 *
 * @since 2.4.0
 */
function tupled(f) {
    return function (a) { return f.apply(void 0, a); };
}
exports.tupled = tupled;
/**
 * Inverse function of `tupled`
 *
 * @since 2.4.0
 */
function untupled(f) {
    return function () {
        var a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
        }
        return f(a);
    };
}
exports.untupled = untupled;


/***/ }),

/***/ 242:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const line_reader_1 = __importDefault(__webpack_require__(449));
const Option_1 = __webpack_require__(293);
const errors_1 = __webpack_require__(453);
const AppName = 'RnDiffApp';
const AppBaseBranch = 'app-base';
const ReleasesFile = 'RELEASES';
exports.newReleaseScript = (newRelease) => {
    if (missingArg(newRelease)) {
        console.log('Release argument missing.');
        process.exit(errors_1.PurgeError.ReleaseArgMissing);
    }
    if (releaseExists(newRelease)) {
        console.log(`Release ${newRelease} already exists.`);
        process.exit(errors_1.PurgeError.ReleaseExists);
    }
    console.log('diff generation');
};
// ReadmeFile=README.md
// ReadmeTable=README_TABLE.md
// ReadmeTableBig=README_TABLE_BIG.md
// NumberOfReleases=12 # the number of releases on the table
const missingArg = Option_1.getRefinement(newRelease => {
    return newRelease === undefined ? Option_1.some(newRelease) : Option_1.none;
});
const releaseExists = (newRelease) => {
    let exists = false;
    line_reader_1.default.eachLine(ReleasesFile, (line, last) => {
        console.log(`-${line}-`);
        if (line === newRelease) {
            exists = true;
            return false; // stop reading
        }
    });
    return exists;
};
// function prepare () {
//     git pull
//     yarn install
// }
// function generateNewReleaseBranch () {
//     # go to the base app branch
//     git worktree add wt-app "$AppBaseBranch"
//     cd wt-app
//     # clear any existing stuff
//     rm -rf "$AppName"
//     git pull
//     # make a new branch
//     branchName=release/"$newRelease"
//     git branch -D "$branchName" || true
//     git checkout -b "$branchName"
//     # generate app
//    npx react-native init "$AppName" --version "$newRelease"
//     # commit and push branch
//     git add "$AppName"
//     git commit -m "Release $newRelease"
//     # git push origin --delete "$branchName" || git push origin "$branchName"
//     # git push --set-upstream origin "$branchName"
//     # go back to master
//     cd ..
//     rm -rf wt-app
//     git worktree prune
// }
// function addReleaseToList () {
//     echo "$newRelease" >> "$ReleasesFile"
//     if command -v tac; then
//         #   take each line ->dedup->    sort them              -> reverse them -> save them
//         cat "$ReleasesFile" | uniq | xargs yarn --silent semver | tac           > tmpfile
//     else
//         #   take each line ->dedup->    sort them              -> reverse them -> save them
//         cat "$ReleasesFile" | uniq | xargs yarn --silent semver | tail -r       > tmpfile
//     fi
//     mv tmpfile "$ReleasesFile"
// }
// function generateDiffs () {
//     if [ ! -d wt-diffs ]; then
//         git worktree add wt-diffs diffs
//     fi
//     cd wt-diffs
//     git pull
//     cd ..
//     IFS=$'\n' GLOBIGNORE='*' command eval 'releases=($(cat "$ReleasesFile"))'
//     for existingRelease in "${releases[@]}"
//     do
//         git diff --binary origin/release/"$existingRelease"..origin/release/"$newRelease" > wt-diffs/diffs/"$existingRelease".."$newRelease".diff
//         git diff --binary origin/release/"$newRelease"..origin/release/"$existingRelease" > wt-diffs/diffs/"$newRelease".."$existingRelease".diff
//     done
//     cd wt-diffs
//     git add .
//     git commit -m "Add release $newRelease diffs"
//     git push
//     cd ..
// }
// function pushMaster () {
//     # commit and push
//     git add .
//     git commit -m "Add release $newRelease"
//     git push
// }
// function generateTable () {
//     head -n "$NumberOfReleases" "$ReleasesFile" | ./generate-table.js > "$ReadmeTable"
// }
// function generateBigTable () {
//     cat "$ReleasesFile" | ./generate-table.js --big > "$ReadmeTableBig"
// }
// ReadmeHeader=README_HEADER.md
// ReadmeFooter=README_FOOTER.md
// function breakUpReadme () {
//     perl -p0e 's/(.*## Diff table[^\n]*\n\n)(.*)/$1/smg' "$ReadmeFile" > "$ReadmeHeader"
//     perl -p0e 's/(.*)(\n## To see.*)/$2/smg' "$ReadmeFile" > "$ReadmeFooter"
// }
// function makeUpReadme () {
//     cat "$ReadmeHeader" "$ReadmeTable" "$ReadmeFooter" > "$ReadmeFile"
// }
// function generateReadme () {
//     breakUpReadme
//     makeUpReadme
// }
// function generateGHPages () {
//     cp docs/_index.html docs/index.html
//     yarn --silent markdown "$ReadmeTableBig" >> docs/index.html
// }
// function cleanUp () {
//     rm -rf "$ReadmeHeader" "$ReadmeFooter" "$ReadmeTable" "$ReadmeTableBig"
//     rm -rf wt-app
//     git worktree prune
// }
// # prepare
// # generateNewReleaseBranch
// # addReleaseToList
// # generateDiffs
// # generateTable
// # generateReadme
// # generateBigTable
// # generateGHPages
// # cleanUp
// # pushMaster


/***/ }),

/***/ 293:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var pipeable_1 = __webpack_require__(194);
/**
 * @since 2.0.0
 */
exports.URI = 'Option';
/**
 * @since 2.0.0
 */
exports.none = { _tag: 'None' };
/**
 * @since 2.0.0
 */
function some(a) {
    return { _tag: 'Some', value: a };
}
exports.some = some;
/**
 * Returns `true` if the option is an instance of `Some`, `false` otherwise
 *
 * @example
 * import { some, none, isSome } from 'fp-ts/lib/Option'
 *
 * assert.strictEqual(isSome(some(1)), true)
 * assert.strictEqual(isSome(none), false)
 *
 * @since 2.0.0
 */
function isSome(fa) {
    return fa._tag === 'Some';
}
exports.isSome = isSome;
/**
 * Returns `true` if the option is `None`, `false` otherwise
 *
 * @example
 * import { some, none, isNone } from 'fp-ts/lib/Option'
 *
 * assert.strictEqual(isNone(some(1)), false)
 * assert.strictEqual(isNone(none), true)
 *
 * @since 2.0.0
 */
function isNone(fa) {
    return fa._tag === 'None';
}
exports.isNone = isNone;
/**
 * Takes a default value, a function, and an `Option` value, if the `Option` value is `None` the default value is
 * returned, otherwise the function is applied to the value inside the `Some` and the result is returned.
 *
 * @example
 * import { some, none, fold } from 'fp-ts/lib/Option'
 * import { pipe } from 'fp-ts/lib/pipeable'
 *
 * assert.strictEqual(
 *   pipe(
 *     some(1),
 *     fold(() => 'a none', a => `a some containing ${a}`)
 *   ),
 *   'a some containing 1'
 * )
 *
 * assert.strictEqual(
 *   pipe(
 *     none,
 *     fold(() => 'a none', a => `a some containing ${a}`)
 *   ),
 *   'a none'
 * )
 *
 * @since 2.0.0
 */
function fold(onNone, onSome) {
    return function (ma) { return (isNone(ma) ? onNone() : onSome(ma.value)); };
}
exports.fold = fold;
/**
 * Constructs a new `Option` from a nullable type. If the value is `null` or `undefined`, returns `None`, otherwise
 * returns the value wrapped in a `Some`
 *
 * @example
 * import { none, some, fromNullable } from 'fp-ts/lib/Option'
 *
 * assert.deepStrictEqual(fromNullable(undefined), none)
 * assert.deepStrictEqual(fromNullable(null), none)
 * assert.deepStrictEqual(fromNullable(1), some(1))
 *
 * @since 2.0.0
 */
function fromNullable(a) {
    return a == null ? exports.none : some(a);
}
exports.fromNullable = fromNullable;
/**
 * Extracts the value out of the structure, if it exists. Otherwise returns `null`.
 *
 * @example
 * import { some, none, toNullable } from 'fp-ts/lib/Option'
 * import { pipe } from 'fp-ts/lib/pipeable'
 *
 * assert.strictEqual(
 *   pipe(
 *     some(1),
 *     toNullable
 *   ),
 *   1
 * )
 * assert.strictEqual(
 *   pipe(
 *     none,
 *     toNullable
 *   ),
 *   null
 * )
 *
 * @since 2.0.0
 */
function toNullable(ma) {
    return isNone(ma) ? null : ma.value;
}
exports.toNullable = toNullable;
/**
 * Extracts the value out of the structure, if it exists. Otherwise returns `undefined`.
 *
 * @example
 * import { some, none, toUndefined } from 'fp-ts/lib/Option'
 * import { pipe } from 'fp-ts/lib/pipeable'
 *
 * assert.strictEqual(
 *   pipe(
 *     some(1),
 *     toUndefined
 *   ),
 *   1
 * )
 * assert.strictEqual(
 *   pipe(
 *     none,
 *     toUndefined
 *   ),
 *   undefined
 * )
 *
 * @since 2.0.0
 */
function toUndefined(ma) {
    return isNone(ma) ? undefined : ma.value;
}
exports.toUndefined = toUndefined;
/**
 * Extracts the value out of the structure, if it exists. Otherwise returns the given default value
 *
 * @example
 * import { some, none, getOrElse } from 'fp-ts/lib/Option'
 * import { pipe } from 'fp-ts/lib/pipeable'
 *
 * assert.strictEqual(
 *   pipe(
 *     some(1),
 *     getOrElse(() => 0)
 *   ),
 *   1
 * )
 * assert.strictEqual(
 *   pipe(
 *     none,
 *     getOrElse(() => 0)
 *   ),
 *   0
 * )
 *
 * @since 2.0.0
 */
function getOrElse(onNone) {
    return function (ma) { return (isNone(ma) ? onNone() : ma.value); };
}
exports.getOrElse = getOrElse;
/**
 * Returns `true` if `ma` contains `a`
 *
 * @example
 * import { some, none, elem } from 'fp-ts/lib/Option'
 * import { eqNumber } from 'fp-ts/lib/Eq'
 *
 * assert.strictEqual(elem(eqNumber)(1, some(1)), true)
 * assert.strictEqual(elem(eqNumber)(2, some(1)), false)
 * assert.strictEqual(elem(eqNumber)(1, none), false)
 *
 * @since 2.0.0
 */
function elem(E) {
    return function (a, ma) { return (isNone(ma) ? false : E.equals(a, ma.value)); };
}
exports.elem = elem;
/**
 * Returns `true` if the predicate is satisfied by the wrapped value
 *
 * @example
 * import { some, none, exists } from 'fp-ts/lib/Option'
 * import { pipe } from 'fp-ts/lib/pipeable'
 *
 * assert.strictEqual(
 *   pipe(
 *     some(1),
 *     exists(n => n > 0)
 *   ),
 *   true
 * )
 * assert.strictEqual(
 *   pipe(
 *     some(1),
 *     exists(n => n > 1)
 *   ),
 *   false
 * )
 * assert.strictEqual(
 *   pipe(
 *     none,
 *     exists(n => n > 0)
 *   ),
 *   false
 * )
 *
 * @since 2.0.0
 */
function exists(predicate) {
    return function (ma) { return (isNone(ma) ? false : predicate(ma.value)); };
}
exports.exists = exists;
function fromPredicate(predicate) {
    return function (a) { return (predicate(a) ? some(a) : exports.none); };
}
exports.fromPredicate = fromPredicate;
/**
 * Transforms an exception into an `Option`. If `f` throws, returns `None`, otherwise returns the output wrapped in
 * `Some`
 *
 * @example
 * import { none, some, tryCatch } from 'fp-ts/lib/Option'
 *
 * assert.deepStrictEqual(
 *   tryCatch(() => {
 *     throw new Error()
 *   }),
 *   none
 * )
 * assert.deepStrictEqual(tryCatch(() => 1), some(1))
 *
 * @since 2.0.0
 */
function tryCatch(f) {
    try {
        return some(f());
    }
    catch (e) {
        return exports.none;
    }
}
exports.tryCatch = tryCatch;
/**
 * Returns an `E` value if possible
 *
 * @since 2.0.0
 */
function getLeft(ma) {
    return ma._tag === 'Right' ? exports.none : some(ma.left);
}
exports.getLeft = getLeft;
/**
 * Returns an `A` value if possible
 *
 * @since 2.0.0
 */
function getRight(ma) {
    return ma._tag === 'Left' ? exports.none : some(ma.right);
}
exports.getRight = getRight;
/**
 * Returns a `Refinement` (i.e. a custom type guard) from a `Option` returning function.
 * This function ensures that a custom type guard definition is type-safe.
 *
 * ```ts
 * import { some, none, getRefinement } from 'fp-ts/lib/Option'
 *
 * type A = { type: 'A' }
 * type B = { type: 'B' }
 * type C = A | B
 *
 * const isA = (c: C): c is A => c.type === 'B' // <= typo but typescript doesn't complain
 * const isA = getRefinement<C, A>(c => (c.type === 'B' ? some(c) : none)) // static error: Type '"B"' is not assignable to type '"A"'
 * ```
 *
 * @since 2.0.0
 */
function getRefinement(getOption) {
    return function (a) { return isSome(getOption(a)); };
}
exports.getRefinement = getRefinement;
/**
 * This is `chain` + `fromNullable`, useful when working with optional values
 *
 * @example
 * import { some, none, fromNullable, mapNullable } from 'fp-ts/lib/Option'
 * import { pipe } from 'fp-ts/lib/pipeable'
 *
 * interface Employee {
 *   company?: {
 *     address?: {
 *       street?: {
 *         name?: string
 *       }
 *     }
 *   }
 * }
 *
 * const employee1: Employee = { company: { address: { street: { name: 'high street' } } } }
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     fromNullable(employee1.company),
 *     mapNullable(company => company.address),
 *     mapNullable(address => address.street),
 *     mapNullable(street => street.name)
 *   ),
 *   some('high street')
 * )
 *
 * const employee2: Employee = { company: { address: { street: {} } } }
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     fromNullable(employee2.company),
 *     mapNullable(company => company.address),
 *     mapNullable(address => address.street),
 *     mapNullable(street => street.name)
 *   ),
 *   none
 * )
 *
 * @since 2.0.0
 */
function mapNullable(f) {
    return function (ma) { return (isNone(ma) ? exports.none : fromNullable(f(ma.value))); };
}
exports.mapNullable = mapNullable;
/**
 * @since 2.0.0
 */
function getShow(S) {
    return {
        show: function (ma) { return (isNone(ma) ? 'none' : "some(" + S.show(ma.value) + ")"); }
    };
}
exports.getShow = getShow;
/**
 * @example
 * import { none, some, getEq } from 'fp-ts/lib/Option'
 * import { eqNumber } from 'fp-ts/lib/Eq'
 *
 * const E = getEq(eqNumber)
 * assert.strictEqual(E.equals(none, none), true)
 * assert.strictEqual(E.equals(none, some(1)), false)
 * assert.strictEqual(E.equals(some(1), none), false)
 * assert.strictEqual(E.equals(some(1), some(2)), false)
 * assert.strictEqual(E.equals(some(1), some(1)), true)
 *
 * @since 2.0.0
 */
function getEq(E) {
    return {
        equals: function (x, y) { return x === y || (isNone(x) ? isNone(y) : isNone(y) ? false : E.equals(x.value, y.value)); }
    };
}
exports.getEq = getEq;
/**
 * The `Ord` instance allows `Option` values to be compared with
 * `compare`, whenever there is an `Ord` instance for
 * the type the `Option` contains.
 *
 * `None` is considered to be less than any `Some` value.
 *
 *
 * @example
 * import { none, some, getOrd } from 'fp-ts/lib/Option'
 * import { ordNumber } from 'fp-ts/lib/Ord'
 *
 * const O = getOrd(ordNumber)
 * assert.strictEqual(O.compare(none, none), 0)
 * assert.strictEqual(O.compare(none, some(1)), -1)
 * assert.strictEqual(O.compare(some(1), none), 1)
 * assert.strictEqual(O.compare(some(1), some(2)), -1)
 * assert.strictEqual(O.compare(some(1), some(1)), 0)
 *
 * @since 2.0.0
 */
function getOrd(O) {
    return {
        equals: getEq(O).equals,
        compare: function (x, y) { return (x === y ? 0 : isSome(x) ? (isSome(y) ? O.compare(x.value, y.value) : 1) : -1); }
    };
}
exports.getOrd = getOrd;
/**
 * `Apply` semigroup
 *
 * | x       | y       | concat(x, y)       |
 * | ------- | ------- | ------------------ |
 * | none    | none    | none               |
 * | some(a) | none    | none               |
 * | none    | some(a) | none               |
 * | some(a) | some(b) | some(concat(a, b)) |
 *
 * @example
 * import { getApplySemigroup, some, none } from 'fp-ts/lib/Option'
 * import { semigroupSum } from 'fp-ts/lib/Semigroup'
 *
 * const S = getApplySemigroup(semigroupSum)
 * assert.deepStrictEqual(S.concat(none, none), none)
 * assert.deepStrictEqual(S.concat(some(1), none), none)
 * assert.deepStrictEqual(S.concat(none, some(1)), none)
 * assert.deepStrictEqual(S.concat(some(1), some(2)), some(3))
 *
 * @since 2.0.0
 */
function getApplySemigroup(S) {
    return {
        concat: function (x, y) { return (isSome(x) && isSome(y) ? some(S.concat(x.value, y.value)) : exports.none); }
    };
}
exports.getApplySemigroup = getApplySemigroup;
/**
 * @since 2.0.0
 */
function getApplyMonoid(M) {
    return __assign(__assign({}, getApplySemigroup(M)), { empty: some(M.empty) });
}
exports.getApplyMonoid = getApplyMonoid;
/**
 * Monoid returning the left-most non-`None` value
 *
 * | x       | y       | concat(x, y) |
 * | ------- | ------- | ------------ |
 * | none    | none    | none         |
 * | some(a) | none    | some(a)      |
 * | none    | some(a) | some(a)      |
 * | some(a) | some(b) | some(a)      |
 *
 * @example
 * import { getFirstMonoid, some, none } from 'fp-ts/lib/Option'
 *
 * const M = getFirstMonoid<number>()
 * assert.deepStrictEqual(M.concat(none, none), none)
 * assert.deepStrictEqual(M.concat(some(1), none), some(1))
 * assert.deepStrictEqual(M.concat(none, some(1)), some(1))
 * assert.deepStrictEqual(M.concat(some(1), some(2)), some(1))
 *
 * @since 2.0.0
 */
function getFirstMonoid() {
    return {
        concat: function (x, y) { return (isNone(x) ? y : x); },
        empty: exports.none
    };
}
exports.getFirstMonoid = getFirstMonoid;
/**
 * Monoid returning the right-most non-`None` value
 *
 * | x       | y       | concat(x, y) |
 * | ------- | ------- | ------------ |
 * | none    | none    | none         |
 * | some(a) | none    | some(a)      |
 * | none    | some(a) | some(a)      |
 * | some(a) | some(b) | some(b)      |
 *
 * @example
 * import { getLastMonoid, some, none } from 'fp-ts/lib/Option'
 *
 * const M = getLastMonoid<number>()
 * assert.deepStrictEqual(M.concat(none, none), none)
 * assert.deepStrictEqual(M.concat(some(1), none), some(1))
 * assert.deepStrictEqual(M.concat(none, some(1)), some(1))
 * assert.deepStrictEqual(M.concat(some(1), some(2)), some(2))
 *
 * @since 2.0.0
 */
function getLastMonoid() {
    return {
        concat: function (x, y) { return (isNone(y) ? x : y); },
        empty: exports.none
    };
}
exports.getLastMonoid = getLastMonoid;
/**
 * Monoid returning the left-most non-`None` value. If both operands are `Some`s then the inner values are
 * appended using the provided `Semigroup`
 *
 * | x       | y       | concat(x, y)       |
 * | ------- | ------- | ------------------ |
 * | none    | none    | none               |
 * | some(a) | none    | some(a)            |
 * | none    | some(a) | some(a)            |
 * | some(a) | some(b) | some(concat(a, b)) |
 *
 * @example
 * import { getMonoid, some, none } from 'fp-ts/lib/Option'
 * import { semigroupSum } from 'fp-ts/lib/Semigroup'
 *
 * const M = getMonoid(semigroupSum)
 * assert.deepStrictEqual(M.concat(none, none), none)
 * assert.deepStrictEqual(M.concat(some(1), none), some(1))
 * assert.deepStrictEqual(M.concat(none, some(1)), some(1))
 * assert.deepStrictEqual(M.concat(some(1), some(2)), some(3))
 *
 * @since 2.0.0
 */
function getMonoid(S) {
    return {
        concat: function (x, y) { return (isNone(x) ? y : isNone(y) ? x : some(S.concat(x.value, y.value))); },
        empty: exports.none
    };
}
exports.getMonoid = getMonoid;
var defaultSeparate = { left: exports.none, right: exports.none };
var identity = function (a) { return a; };
/**
 * @since 2.0.0
 */
exports.option = {
    URI: exports.URI,
    map: function (ma, f) { return (isNone(ma) ? exports.none : some(f(ma.value))); },
    of: some,
    ap: function (mab, ma) { return (isNone(mab) ? exports.none : isNone(ma) ? exports.none : some(mab.value(ma.value))); },
    chain: function (ma, f) { return (isNone(ma) ? exports.none : f(ma.value)); },
    reduce: function (fa, b, f) { return (isNone(fa) ? b : f(b, fa.value)); },
    foldMap: function (M) { return function (fa, f) { return (isNone(fa) ? M.empty : f(fa.value)); }; },
    reduceRight: function (fa, b, f) { return (isNone(fa) ? b : f(fa.value, b)); },
    traverse: function (F) { return function (ta, f) {
        return isNone(ta) ? F.of(exports.none) : F.map(f(ta.value), some);
    }; },
    sequence: function (F) { return function (ta) {
        return isNone(ta) ? F.of(exports.none) : F.map(ta.value, some);
    }; },
    zero: function () { return exports.none; },
    alt: function (ma, f) { return (isNone(ma) ? f() : ma); },
    extend: function (wa, f) { return (isNone(wa) ? exports.none : some(f(wa))); },
    compact: function (ma) { return exports.option.chain(ma, identity); },
    separate: function (ma) {
        var o = exports.option.map(ma, function (e) { return ({
            left: getLeft(e),
            right: getRight(e)
        }); });
        return isNone(o) ? defaultSeparate : o.value;
    },
    filter: function (fa, predicate) {
        return isNone(fa) ? exports.none : predicate(fa.value) ? fa : exports.none;
    },
    filterMap: function (ma, f) { return (isNone(ma) ? exports.none : f(ma.value)); },
    partition: function (fa, predicate) {
        return {
            left: exports.option.filter(fa, function (a) { return !predicate(a); }),
            right: exports.option.filter(fa, predicate)
        };
    },
    partitionMap: function (fa, f) { return exports.option.separate(exports.option.map(fa, f)); },
    wither: function (F) { return function (fa, f) {
        return isNone(fa) ? F.of(exports.none) : f(fa.value);
    }; },
    wilt: function (F) { return function (fa, f) {
        var o = exports.option.map(fa, function (a) {
            return F.map(f(a), function (e) { return ({
                left: getLeft(e),
                right: getRight(e)
            }); });
        });
        return isNone(o)
            ? F.of({
                left: exports.none,
                right: exports.none
            })
            : o.value;
    }; },
    throwError: function () { return exports.none; }
};
var _a = pipeable_1.pipeable(exports.option), alt = _a.alt, ap = _a.ap, apFirst = _a.apFirst, apSecond = _a.apSecond, chain = _a.chain, chainFirst = _a.chainFirst, duplicate = _a.duplicate, extend = _a.extend, filter = _a.filter, filterMap = _a.filterMap, flatten = _a.flatten, foldMap = _a.foldMap, map = _a.map, partition = _a.partition, partitionMap = _a.partitionMap, reduce = _a.reduce, reduceRight = _a.reduceRight, compact = _a.compact, separate = _a.separate, fromEither = _a.fromEither;
exports.alt = alt;
exports.ap = ap;
exports.apFirst = apFirst;
exports.apSecond = apSecond;
exports.chain = chain;
exports.chainFirst = chainFirst;
exports.duplicate = duplicate;
exports.extend = extend;
exports.filter = filter;
exports.filterMap = filterMap;
exports.flatten = flatten;
exports.foldMap = foldMap;
exports.map = map;
exports.partition = partition;
exports.partitionMap = partitionMap;
exports.reduce = reduce;
exports.reduceRight = reduceRight;
exports.compact = compact;
exports.separate = separate;
exports.fromEither = fromEither;


/***/ }),

/***/ 304:
/***/ (function(module) {

module.exports = require("string_decoder");

/***/ }),

/***/ 449:
/***/ (function(module, __unusedexports, __webpack_require__) {

"use strict";


var fs = __webpack_require__(747),
    StringDecoder = __webpack_require__(304).StringDecoder;

function createLineReader(readStream, options, creationCb) {
  if (options instanceof Function) {
    creationCb = options;
    options = undefined;
  }
  if (!options) options = {};

  var encoding = options.encoding || 'utf8',
      separator = options.separator || /\r\n?|\n/,
      bufferSize = options.bufferSize || 1024,
      bufferStr = '',
      decoder = new StringDecoder(encoding),
      closed = false,
      eof = false,
      separatorIndex = -1,
      separatorLen,
      readDefer,
      moreToRead = false,
      findSeparator;

  if (separator instanceof RegExp) {
    findSeparator = function() {
      var result = separator.exec(bufferStr);
      if (result && (result.index + result[0].length < bufferStr.length || eof)) {
        separatorIndex = result.index;
        separatorLen = result[0].length;
      } else {
        separatorIndex = -1;
        separatorLen = 0;
      }
    };
  } else {
    separatorLen = separator.length;
    findSeparator = function() {
      separatorIndex = bufferStr.indexOf(separator);
    };
  }

  function getReadStream() {
    return readStream;
  }

  function close(cb) {
    if (!closed) {
      closed = true;
      if (typeof readStream.close == 'function') {
        readStream.close();
      }
      setImmediate(cb);
    }
  }

  function onFailure(err) {
    close(function(err2) {
      return creationCb(err || err2);
    });
  }

  function isOpen() {
    return !closed;
  }

  function isClosed() {
    return closed;
  }

  function waitForMoreToRead(cb) {
    if (moreToRead) {
      cb();
    } else {
      readDefer = cb;
    }
  }

  function resumeDeferredRead() {
    if (readDefer) {
      readDefer();
      readDefer = null;
    }
  }

  function read(cb) {
    waitForMoreToRead(function() {
      var chunk;

      try {
        chunk = readStream.read(bufferSize);
      } catch (err) {
        cb(err);
      }

      if (chunk) {
        bufferStr += decoder.write(chunk.slice(0, chunk.length));
      } else {
        moreToRead = false;
      }

      cb();
    });
  }

  function onStreamReadable() {
    moreToRead = true;
    resumeDeferredRead();
  }

  function onStreamEnd() {
    eof = true;
    resumeDeferredRead();
  }

  readStream.on('readable', onStreamReadable);
  readStream.on('end', onStreamEnd);
  readStream.on('error', onFailure);

  function shouldReadMore() {
    findSeparator();

    return separatorIndex < 0 && !eof;
  }

  function callWhile(conditionFn, bodyFn, doneCallback) {
    if (conditionFn()) {
      bodyFn(function (err) {
        if (err) {
          doneCallback(err);
        } else {
          setImmediate(callWhile, conditionFn, bodyFn, doneCallback);
        }
      });
    } else {
      doneCallback();
    }
  }

  function readToSeparator(cb) {
    callWhile(shouldReadMore, read, cb);
  }

  function hasNextLine() {
    return bufferStr.length > 0 || !eof;
  }

  function nextLine(cb) {
    if (closed) {
      return cb(new Error('LineReader has been closed'));
    }

    function getLine(err) {
      if (err) {
        return cb(err);
      }

      if (separatorIndex < 0 && eof) {
        separatorIndex = bufferStr.length;
      }
      var ret = bufferStr.substring(0, separatorIndex);

      bufferStr = bufferStr.substring(separatorIndex + separatorLen);
      separatorIndex = -1;
      cb(undefined, ret);
    }

    findSeparator();

    if (separatorIndex < 0) {
      if (eof) {
        if (hasNextLine()) {
          separatorIndex = bufferStr.length;
          getLine();
        } else {
          return cb(new Error('No more lines to read.'));
        }
      } else {
        readToSeparator(getLine);
      }
    } else {
      getLine();
    }
  }

  readToSeparator(function(err) {
    if (err) {
      onFailure(err);
    } else {
      return creationCb(undefined, {
        hasNextLine: hasNextLine,
        nextLine: nextLine,
        close: close,
        isOpen: isOpen,
        isClosed: isClosed,
        getReadStream: getReadStream
      });
    }
  });
}

function open(filenameOrStream, options, cb) {
  if (options instanceof Function) {
    cb = options;
    options = undefined;
  }

  var readStream;

  if (typeof filenameOrStream.read == 'function') {
    readStream = filenameOrStream;
  } else if (typeof filenameOrStream === 'string' || filenameOrStream instanceof String) {
    readStream = fs.createReadStream(filenameOrStream);
  } else {
    cb(new Error('Invalid file argument for LineReader.open.  Must be filename or stream.'));
    return;
  }

  readStream.pause();
  createLineReader(readStream, options, cb);
}

function eachLine(filename, options, iteratee, cb) {
  if (options instanceof Function) {
    cb = iteratee;
    iteratee = options;
    options = undefined;
  }
  var asyncIteratee = iteratee.length === 3;

  var theReader;
  var getReaderCb;

  open(filename, options, function(err, reader) {
    theReader = reader;
    if (getReaderCb) {
      getReaderCb(reader);
    }

    if (err) {
      if (cb) cb(err);
      return;
    }

    function finish(err) {
      reader.close(function(err2) {
        if (cb) cb(err || err2);
      });
    }

    function newRead() {
      if (reader.hasNextLine()) {
        setImmediate(readNext);
      } else {
        finish();
      }
    }

    function continueCb(continueReading) {
      if (continueReading !== false) {
        newRead();
      } else {
        finish();
      }
    }

    function readNext() {
      reader.nextLine(function(err, line) {
        if (err) {
          finish(err);
        }

        var last = !reader.hasNextLine();

        if (asyncIteratee) {
          iteratee(line, last, continueCb);
        } else {
          if (iteratee(line, last) !== false) {
            newRead();
          } else {
            finish();
          }
        }
      });
    }

    newRead();
  });

  // this hook is only for the sake of testing; if you choose to use it,
  // please don't file any issues (unless you can also reproduce them without
  // using this).
  return {
    getReader: function(cb) {
      if (theReader) {
        cb(theReader);
      } else {
        getReaderCb = cb;
      }
    }
  };
}

module.exports.open = open;
module.exports.eachLine = eachLine;


/***/ }),

/***/ 453:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PurgeError = {
    ReleaseExists: 2,
    ReleaseArgMissing: 3,
};


/***/ }),

/***/ 747:
/***/ (function(module) {

module.exports = require("fs");

/***/ }),

/***/ 977:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const new_release_1 = __webpack_require__(242);
console.log('aha');
new_release_1.newReleaseScript('0.59.0');


/***/ })

/******/ });