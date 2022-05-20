import React from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './components/contents/Content';
import Header from './components/contents/Header';
import Menus from './components/contents/Menu';
import Article from './components/article';

const ContentData = {
  header: "Random Paragraph",
  content: "She asked the question even though she didn't really want to hear the answer. It was a no-win situation since she already knew. If he told the truth, she'd get confirmation of her worst fears. If he lied, she'd know that he wasn't who she thought he was which would be almost as bad. Yet she asked the question anyway and waited for his answer."
}

const Data = ["Home", "Politics", "Economics", "Laws", "Sprots", "Arts", "Cultures",
"Food", "Contact", "About"];

const articles = [
  {
  title: "Taliban order female TV presenters to cover faces",
  data: "Media outlets were told of the decree on Wednesday, a religious police spokesman told BBC Pashto.",
  imgUrl: require('./components/images/img01.jpg')
  },

  {
    title: "Taliban order female TV presenters to cover faces",
    data: "Media outlets were told of the decree on Wednesday, a religious police spokesman told BBC Pashto.",
    imgUrl: require('./components/images/img02.jpg')
  },

  {
    title: "Taliban order female TV presenters to cover faces",
    data: "Media outlets were told of the decree on Wednesday, a religious police spokesman told BBC Pashto.",
    imgUrl: require('./components/images/img03.jpg')
  },

  {
    title: "Taliban order female TV presenters to cover faces",
    data: "Media outlets were told of the decree on Wednesday, a religious police spokesman told BBC Pashto.",
    imgUrl: require('./components/images/img04.jpg')
  }
]

function App() {
  return (
    <>
    <Article articles={articles}/>
    </>
  ); 
}

export default App;
