
export const add = (nb1:number, nb2:number):number => {
    return nb1 + nb2; 
}

export const divide = (nb1:number, nb2:number):number => {
    if(nb2 === 0){
      throw new Error('Division par zéro impossible')
    }

    return nb1/nb2;
}