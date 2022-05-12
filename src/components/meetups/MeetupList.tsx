import React from 'react';
import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

const MeetupList = (props: any) => {
    return (
        <ul className={classes.list}>
            {
                props.meetups.map((meetup: any) => <MeetupItem key={meetup.id} meetup={meetup}/>)
            }
        </ul>
    );
}

export default MeetupList;