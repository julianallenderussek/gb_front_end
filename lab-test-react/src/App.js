import { TweeterContainer } from "./TweeterContainer";
import React from 'react';
import uuid from 'react-uuid';

function App() {
  
  const formattedDate = (time) => {
    const timeElapsed = time;
    const rightNow = new Date(timeElapsed);
    return rightNow
  }

  let tweets = [
    { id: uuid(),
      title: "Stop COVID-19, Take-out only",
      comments: [
        { 
          id: uuid(),
          content: "Newest Comment",
          created_at: formattedDate(Date.now()),
          likes: 2
        },
        { 
          id: uuid(),
          content: "Older Comment",
          created_at: formattedDate(Date.now() - 5000000),
          likes: 2
        }
      ]
    },
    { 
      id: uuid(),
      title: "At home, binge watching Breaking Bad for second time",
      comments: []
    },
    { 
      id: uuid(),
      title: "When is the beach opening up? Can't wait...",
      comments: []
    }
  ]
  
  return (
    <div className="App mt-5 w-100% d-flex flex-column justify-content-center align-items-center" style={{}}>
      <div className="d-flex flex-column" style={{width: "750px"}}>
      <p class="h1">My Tweeter App</p>
        {
          tweets.map((tweet) => {
            return <TweeterContainer tweet={tweet} />
          })
        }
      </div>
    </div>
  );
}

export default App;
