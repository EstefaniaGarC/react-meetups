import React, {createContext, useState} from 'react';
/*
 THIS CONTEXT WILL BE REMOVED WHEN THE BROWSER IS RELOADED, IF WE WANT TO KEEP THE SELECTED MEETUPS
 WE NEED TO USE SOME LOCAL STORAGE (BROWSER) OR DATABASE
 */
// we create a context with the initial values
const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (meetup: any) => {},
    removeFavorite: (meetupId: string) => {},
    itemIsFavorite: (meetupId: string) : boolean => {return false}
})

// we create a react component as a provider which is going to be a wrapper for other components
export const FavoritesContextProvider = (props: any) => {
    const [userFavorites, setUserFavorites] = useState([])

    const addFavoriteHandler = (meetup: any) => {
        //we set the userFavorites using the callback function to ensure that we update the previous state
        //and prevent problems depending on how fast the state is updated
        setUserFavorites((prevUserFavorites) => prevUserFavorites.concat(meetup))
    }
    const removeFavoriteHandler = (meetupId: string) => {
        setUserFavorites((prevUserFavorites) => prevUserFavorites.filter((favoriteMeetup: any) => favoriteMeetup.id != meetupId))
    }
    const itemIsFavoriteHandler = (meetupId: string) : boolean => {
        return userFavorites.some((favoriteMeetup: any) => favoriteMeetup.id === meetupId)
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    }

    return (<FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>)
}

export default FavoritesContext