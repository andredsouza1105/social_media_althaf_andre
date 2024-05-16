import React from 'react';
import './css/newPost.css';

function newPost() {
  return <div class="container">
    <input type="text" class="titleTF"></input> <br/>
    <textarea class="postBody"></textarea> <br/>
    <button class="postButton">Post</button>
  </div>;
}

export default newPost;