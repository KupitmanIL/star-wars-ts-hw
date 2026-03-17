import Navigation from "./Navigation.tsx";
import {useContext} from "react";
import {SWContext} from "../utils/context.ts";
import {characters} from "../utils/constants.ts";




const Header = () => {
    const {hero, isHeroValid} = useContext(SWContext)

    return isHeroValid ? (
        <header className="rounded-t-3xl bg-gray">
            <Navigation/>
            <h1 className="text-center text-4xl py-6">{characters[hero as keyof typeof characters].name}</h1>
        </header>
    ) :   <header className="rounded-t-3xl bg-gray">
        <Navigation/>
        <h1 className="text-center text-4xl py-6">"O-o-ops.. something went wrong"</h1>
        </header>
}

export default Header;