export interface SWContextValue {
    hero: string;
    changeHero: (hero: string) => void;
    isHeroValid: boolean;
    setIsHeroValid: (value: boolean) => void;
}

export interface Hero {
    name: string;
    img: string;
    url: string;
}

// export interface Characters { [key: string]: Hero }
// export type Characters = Record<string, Hero>;