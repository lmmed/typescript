import { Family } from "./model/family";
import { Catalog } from "./service/catalog";

const catalog = new Catalog();
const family = new Family('Family 1');
const family2 = new Family('Family 2');
catalog.addProduct('ref1', 100, family);
catalog.addProduct('ref2', 200, family);

catalog.addProduct('ref3', 300, family2);


catalog.changeProductPriceByRef('ref2', 150);


//catalog.findProductByFamily('Family 1');
//catalog.findProductByRef('ref3');

function add (a:number,b:number) {
    return a+b;
}

test('test', () => {
    expect(add(1,1)).toBe(2);
} );