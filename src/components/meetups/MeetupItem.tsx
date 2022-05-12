import React, {useContext} from 'react';
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import FavoritesContext from "../../store/FavoritesContext";

const MeetupItem = (props: any) => {
    const favoriteCtx = useContext(FavoritesContext)
    const toggleFavoriteStatusHandler = () => {
        favoriteCtx.itemIsFavorite(props.meetup.id) ? favoriteCtx.removeFavorite(props.meetup.id) : favoriteCtx.addFavorite(props.meetup)
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.meetup.image}/>
                </div>
                <div className={classes.content}>
                    <h3>{props.meetup.title}</h3>
                    <address>{props.meetup.address}</address>
                    <p>{props.meetup.description}</p>
                </div>
                <div className={classes.actions}>
                    <button
                        onClick={toggleFavoriteStatusHandler}>{favoriteCtx.itemIsFavorite(props.meetup.id) ? 'Remove from favorites' : 'Add to favorites'}</button>
                </div>
            </Card>
        </li>
    );
}

export default MeetupItem;