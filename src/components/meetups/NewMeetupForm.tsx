import React, {FormEvent, FormEventHandler, RefObject, useRef} from 'react';
import Card from "../ui/Card";
import classes from './NewMeetupForm.module.css'

const NewMeetupForm = (props: any) => {

    const titleRef: any = useRef()
    const imageRef: any = useRef()
    const addressRef: any = useRef()
    const descriptionRef: any = useRef()

    const submitHandler = (event: FormEvent) => {
        event.preventDefault()

        const title = titleRef.current.value
        const image = imageRef.current.value
        const address = addressRef.current.value
        const description = descriptionRef.current.value

        const meetupData = {
            title,
            image,
            address,
            description
        }

        props.onAddMeetup(meetupData)
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Title</label>
                    <input type='text' required id='title' ref={titleRef}/>
                </div><div className={classes.control}>
                    <label htmlFor='image'>Image</label>
                    <input type='url' required id='title' ref={imageRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Address</label>
                    <input type='text' required id='address' ref={addressRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea id='description' required rows={5} ref={descriptionRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>

            </form>
        </Card>
    );
}

export default NewMeetupForm;