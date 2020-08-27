// a(b(c(x))) -> compose(a, b, c)(x), where a, b, c - functions, x - value

const compose = (...funcs) => (comp) => {
    return funcs.reduceRight((prevResult, func) => func(prevResult), comp)
};

export default compose;