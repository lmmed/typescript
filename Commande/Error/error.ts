export class ErrorProductNotFound extends Error
{
    constructor (ref: string) {
        super (`Product [${ref}] not found`)
    }
}

export class ErrorProductAlreadyExists extends Error
{
    constructor (ref: string) {
        super (`Product [${ref}] already exists`)
    }
}

export class ErrorQtyGreaterThanStock extends Error
{
    constructor (ref: string, qte: number) {
        super (`Product [${ref}] have less than ${qte} in stock`)
    }
}