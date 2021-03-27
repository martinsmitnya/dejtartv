import './PostFeed.css'
import React, { useEffect, useState } from 'react';


function PostFeed() {
  const [error, setError] = useState('');
  const [content, setContent] = useState([
    {
      type: 'video',
      title: 'Ben Award Dogehouse log',
      data: 'https://www.youtube.com/embed/ZLH1_C-UNHw',
      description: 'Video description'
    },
    {
      type: 'text',
      title: 'Text',
      data: 'This is a text based content',
      description: ''
    },
    {
      type: 'photo',
      title: 'Photo of a raven',
      data: 'https://blog.cwf-fcf.org/wp-content/uploads/2018/10/raven-flying.jpg',
      description: 'This is a raven'
    }
  ]);

  // fetch('/posts').then(response => response.json())
  // .then(data => setContent(data))
  // .catch(error => setError(error))

  if (error !== '') {
    return (<div className='postFeedWrapper'>
      <div className='postFeedErrorMessage'>{error}</div>
    </div>)
  } else {
    return (<div className='postFeedWrapper'>
      {
        content.map((element) => {
          if (element.type === 'text') {
            return (
              <div>
                <h1 className='contentTitle'>{element.title}</h1>
                <div className='contentData'>
                  <p>{element.data}</p>
                </div>
                {element.description !=='' && <p className='contentDescription'> {element.description} </p>}
              </div>
            )
          }else if (element.type === 'video') {
            return (
              <div>
                <h1 className='contentTitle'>{element.title}</h1>
                <div className='contentData'>
                  <iframe width="100%" height="100%" src={element.data} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>
                </div>
                {element.description !=='' && <p className='contentDescription'> {element.description} </p>}
              </div>
            )
          }else if (element.type === 'photo') {
            return (
              <div>
                <h1 className='contentTitle'>{element.title}</h1>
                <div className='contentData'>
                  <img width="100%" height="100%" src={element.data}></img>
                </div>
                {element.description !=='' && <p className='contentDescription'> {element.description} </p>}
              </div>
            )
          }
        })
      }
    </div>)

  }
}

export default PostFeed
