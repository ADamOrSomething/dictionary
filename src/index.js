import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Dictionary = ({ words }) => (
  <div>
    <Title />
    <Subtitle />
    <Table words={words} />
  </div>
);

const Title = () => (
  <h1>Dictionary</h1>
);

const Subtitle = () => (
  <h2>Written by me, researched by me, published by me.</h2>
);

const Table = ({ words }) => (
  <table>
    <tr>
      <th>Word</th>
      <th>Part of Speech</th>
      <th>Definition</th>
    </tr>
    {words.map(word => {
      return <Word word={word} />
    })}
  </table>
);

const Word = ({ word }) => (
  <tr>
    <td>{word.word}</td>
    <td>{word.partOfSpeech}</td>
    <td>{word.definition}</td>
  </tr>
);

const PARTS_OF_SPEECH = {
  ADJECTIVE: 'adjective',
  PREFIX: 'prefix',
  NOUN: 'noun'
};

const words = [
  {
    word: 'veldt-y',
    partOfSpeech: PARTS_OF_SPEECH.ADJECTIVE,
    definition: 'Exhibiting properties of a veldt.'
  },
  {
    word: 'col-',
    partOfSpeech: PARTS_OF_SPEECH.PREFIX,
    definition: 'The opposite of row.'
  },
  {
    word: 'burriwich',
    partOfSpeech: PARTS_OF_SPEECH.NOUN,
    definition: 'A sandwich made with tortilla instead of bread.'
  }
];

ReactDOM.render(
  <Dictionary words={words} />,
  document.querySelector('#root')
);
