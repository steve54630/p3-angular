import { inject } from "@angular/core";
import { IPersona } from "../interfaces/persona";
import { ResolveFn } from "@angular/router";
import { FavorisStore } from "../services/favoris-store";
import { PersonaStore } from "../services/persona-store";

export const personasResolver : ResolveFn<IPersona[]> = (route) => {
   
    const personaStore = inject(PersonaStore);
    const favorisStore = inject(FavorisStore);

    switch (route.routeConfig?.path) {
        case 'favorites':
            return favorisStore.getAll();
        case 'personas':
            return personaStore.loadAll();
        default:
            return [];
    }
};