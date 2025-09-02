import { Observable } from "rxjs"
import { IPersona } from "./persona"

export interface IPersonaProvider {
    getAll(): Observable<IPersona[]>
    personas$: Observable<IPersona[]>
}