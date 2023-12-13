import { IWithIdent } from "./Interface/interfaces";

export const drawIdent=(data: IWithIdent[]): string => data.map(e => e.getIdent()).join(', ')