import React, {useEffect, useState} from 'react';
import MeetupList from "../components/meetups/MeetupList";

// we can't set a react function as an async function. React functions must be synchronous. So, we use then/catch
const AllMeetups = () => {
    const getAllMeetups = () => {
        setIsLoading(true)
        fetch('https://app-test-64d02-default-rtdb.europe-west1.firebasedatabase.app/meetups.json')
            .then(response => response.json())
            .then(data => {
                const allMeetups: any = []
                for (const key in data) {
                    allMeetups.push({id: key, ...data[key]})
                }
                console.log(allMeetups)
                setIsLoading(false)
                setMeetups(allMeetups)
            })
            .catch(e => console.log(e))
    }

    const [isLoading, setIsLoading] = useState(true)
    const [meetups, setMeetups] = useState([])
    //if we don't set the second parameter as [] then this useEffect would trigger everytime.
    //with the parameter as [] the effect will run just once, since it doesn't depend on any variable.
    //if we set some variables within the array of the second parameter, the effect would fire when the value
    //of the variables change.
    useEffect(getAllMeetups, [])

    if (isLoading) {
        return (<p>Loading...</p>)
    }else{
        return (
            <section>
                <h1>All Meetups</h1>
                <MeetupList meetups={meetups}/>
            </section>
        );
    }
}

export default AllMeetups;