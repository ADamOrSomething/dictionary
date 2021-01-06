import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Dictionary = ({ words }) => (
  <div>
    <Title />
    <Subtitle />
    <Table words={words} />
  </div>
);

const Title = () => <h1>Dictionary</h1>;

const Subtitle = () => (
  <h2>Written by me, researched by me, published by me.</h2>
);

const Table = ({ words }) => (
  <table>
    <tr>
      <th>Word</th>
      <th>Part of Speech</th>
      <th>Definition</th>
      <th>Usage Example</th>
      <th>Coined By</th>
    </tr>
    {words.map((word) => {
      return <Word word={word} />;
    })}
  </table>
);

const Word = ({ word }) => (
  <tr>
    <td>{word.word}</td>
    <td>{word.partOfSpeech}</td>
    <td>{word.definition}</td>
    <td>{word.usage}</td>
    <td>{word.coined ? word.coined : "Me"}</td>
  </tr>
);

const PARTS_OF_SPEECH = {
  ADJECTIVE: "adjective",
  PREFIX: "prefix",
  NOUN: "noun",
};

const words = [
  {
    word: "veldt-y",
    partOfSpeech: PARTS_OF_SPEECH.ADJECTIVE,
    definition: "Exhibiting properties of a veldt.",
    usage: "The safari was very veldt-y.",
  },
  {
    word: "burriwich",
    partOfSpeech: PARTS_OF_SPEECH.NOUN,
    definition: "A sandwich made with tortilla instead of bread.",
    usage: "I ate a burriwich for lunch."
  },
  {
    word: "adamword",
    partOfSpeech: PARTS_OF_SPEECH.NOUN,
    definition: "A word found in this dictionary.",
    usage: "Adamword is an adamword."
  },
  {
    word: "hyperadam",
    partOfSpeech: PARTS_OF_SPEECH.NOUN,
    definition:
      "When you have a blast of hyper thoughts that only Adam can have.",
    usage: "This dictionary is a hyperadam.",
    coined: "Reja"
  },
  {
    word: "adanxiety",
    partOfSpeech: PARTS_OF_SPEECH.NOUN,
    definition: "The level of anxiety you can only experience from stressing or raging the way Adam does.",
    usage: "When I was in English class I experienced adanxiety.",
    coined: "Briana & Reja"
  },
  {
    word: "loneliness",
    partOfSpeech: PARTS_OF_SPEECH.NOUN,
    definition: "Me",
    usage: "I'm the definition of loneliness."
  },
  {
    word: "adanventure",
    partOfSpeech: PARTS_OF_SPEECH.NOUN,
    definition: "An adventure that's super boring. - Courtesy of 8th grade English.",
    usage: "Adding this word was an adanventure.",
    coined: "Reja"
  },
  {
    word: "dailiversery",
    partOfSpeech: PARTS_OF_SPEECH.NOUN,
    definition: "The daily recurrence of a date marking a notable event.",
    usage: "Today was our dailiversery, as is every day."
  }
];

ReactDOM.render(<Dictionary words={words} />, document.querySelector("#root"));
