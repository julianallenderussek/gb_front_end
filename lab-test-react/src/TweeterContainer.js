import React, {useState} from 'react'
import { CommentContainer } from './CommentContainer'
import uuid from 'react-uuid';
import Card from 'react-bootstrap/Card';

export const TweeterContainer = (props) => {
    
    const [tweet, setTweet] = useState(props.tweet);

    const handleLike = (id) => {
        console.log(id);
        let newTweet = {
            ...tweet
        }

        for (let i = 0; i < newTweet.comments.length; i++) {
            if (newTweet.comments[i].id === id) {
                console.log("we got a match sr")
                newTweet.comments[i].likes += 1;
            }
        }
        setTweet(newTweet)
    }

    const addComment = (event) => {
        event.preventDefault();
        console.log(tweet)
        const input = document.getElementById(`comment-input-${tweet.id}`)
        const timeElapsed = Date.now();
        const rightNow = new Date(timeElapsed);
        
        const newComment = { 
            id: uuid(),
            content: input.value,
            created_at: rightNow,
            likes: 0
          }
        let newTweet = {
            ...tweet
        }
        newTweet.comments.unshift(newComment)
        setTweet(newTweet)
    }

    return (
    <Card className="mt-5 p-4">
        <h2>{tweet.title}</h2>
        <form className='d-flex justify-content-center' style={{height: '35px'}}  onSubmit={(event) => addComment(event)}>
            <input className='input-group w-75' id={`comment-input-${tweet.id}`}/>
            <button type='submit'>Post</button> 
        </form>
        
        {   
            tweet.comments.map((comment) => {
                return <CommentContainer 
                    comment={comment} 
                    handleLike={handleLike}
                />
            })
        }

    </Card>
  )
}
