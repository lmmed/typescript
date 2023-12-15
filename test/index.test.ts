
function add (a:number,b:number) {
    return a+b;
}

function error() {
    throw Error;
}

function promisFunction() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('toto');
        }, 1000);
    });
}

test('test', () => {
    expect(add(5.5,5.2)).toBeCloseTo(10.7);
} );

test('test error', () => {
    expect(() => {error()}).toThrow();
} );

test('test promise', () => {
   return promisFunction().then(data => {
    expect(data).toMatch('toto');
   })
} );