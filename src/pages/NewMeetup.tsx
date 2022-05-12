import React from 'react';
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import {useHistory} from "react-router-dom";

const NewMeetup = () => {
    const history = useHistory()

    const addMeetupHandler = async (meetupData: any) => {
        const requestInit: RequestInit = {
            body: JSON.stringify(meetupData),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        }
        try {
            await fetch('https://app-test-64d02-default-rtdb.europe-west1.firebasedatabase.app/meetups.json', requestInit)
            // eslint-disable-next-line react-hooks/rules-of-hooks
            history.replace('/')
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <section>
            <h1>Add new Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    );
}

export default NewMeetup;