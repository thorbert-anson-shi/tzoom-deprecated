import { Component, For } from "solid-js";

interface WordPanelProps {
  words: string[];
}

const WordPanel: Component<WordPanelProps> = (props) => {
  return (
    <div class="word-panel">
      <For each={props.words}>
        {(word, index) => {
          return <span data-index={index()}>{word} </span>;
        }}
      </For>
    </div>
  );
};

export default WordPanel;
