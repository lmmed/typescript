export const calcAdd=(a:number, b:number):number=>a+b;
export const calcSub=(a:number, b:number):number=>a-b;
export const calcMult=(a:number, b:number):number=>a*b;
export const calcDiv=(a:number, b:number):number=>{
    try {
        return a/b;
    } catch {
        throw new Error ("erreur division") ;
    }
}

export const calcAddList=(a:number[]):number=>a.reduce((previous, item)=> previous+item, 0)

