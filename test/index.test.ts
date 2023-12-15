
function add (a:number,b:number) {
    return a+b;
}

test('test', () => {
    expect(add(1,1)).toBe(2);
} );