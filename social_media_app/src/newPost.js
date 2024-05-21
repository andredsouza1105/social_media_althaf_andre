import React from 'react';
import './css/newPost.css';

function newPost() {
  return <div class="container">
    <input type="text" class="titleTF" placeholder="Title"></input> <br/>
    <textarea class="postBody" placeholder="What's on your mind?"></textarea> <br/>
    <button class="postButton">Post</button>
  </div>;
}

export default newPost;