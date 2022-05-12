import React, {useContext} from 'react';
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../store/FavoritesContext";

const Favorites = () => {
    const favoriteContext = useContext(FavoritesContext)

    let content
    if (favoriteContext.totalFavorites === 0)
        content = <p>You have no favorites</p>
    else
        content = <MeetupList meetups={favoriteContext.favorites}/>

    return (
        <section>
            <h1>My Favorites Meetups</h1>
            {content}
        </section>
    );
}

export default Favorites;