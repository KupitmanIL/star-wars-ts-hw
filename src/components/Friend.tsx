import {characters, defaultHero} from "../utils/constants.ts";
import {NavLink, useParams} from "react-router";
import {useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";
import ErrorPage from "./ErrorPage.tsx";

interface Props {
    friend: string;
    pos: number;
}

const Friend = ({friend, pos}: Props) => {
    const {changeHero} = useContext(SWContext)
    const {heroId = defaultHero} = useParams()

    useEffect(() => {
        if (!(heroId in characters)) {
            return;
        }
        changeHero(heroId);
    }, [heroId]);

    let styles = "w-full";
    if (pos === 9) {
        styles += " rounded-br-3xl";
    }
    if (pos === 7) {
        styles += " rounded-bl-3xl";
    }
    return  (heroId in characters) ? (
    <NavLink to={`/home/${friend}`}>
        <img className={styles} src={characters[friend].img} alt={characters[friend].name}/>
    </NavLink>
    ) : <ErrorPage/>
}

export default Friend;