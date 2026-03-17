import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { defaultHero, characters } from "./utils/constants.ts";
import { SWContext } from "./utils/context.ts";

function App() {
    const [hero, setHero] = useState(defaultHero);
    const [isHeroValid, setIsHeroValid] = useState(true);

    const location = useLocation();

    useEffect(() => {
        const pathParts = location.pathname.split("/").filter(Boolean);
        const heroIdFromUrl = pathParts[pathParts.length - 1];

        if (!heroIdFromUrl) {
            setHero(defaultHero);
            setIsHeroValid(true);
            return;
        }

        if (heroIdFromUrl in characters) {
            setHero(heroIdFromUrl);
            setIsHeroValid(true);
        } else {
            setIsHeroValid(false);
        }
    }, [location.pathname]);

    return (
        <div className="mx-2">
            <SWContext.Provider
                value={{
                    hero,
                    changeHero: setHero,
                    isHeroValid,
                    setIsHeroValid
                }}
            >
                <Header />
                <Main />
                <Footer />
            </SWContext.Provider>
        </div>
    );
}

export default App;