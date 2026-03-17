import {createContext} from "react";
import {defaultHero} from "./constants.ts";
import type {SWContextValue} from "./types";


export const SWContext = createContext<SWContextValue>({
    hero: defaultHero,
    changeHero: (hero: string): void => console.log(hero),
    isHeroValid: true,
    setIsHeroValid: (value: boolean): void => console.log(value)
});