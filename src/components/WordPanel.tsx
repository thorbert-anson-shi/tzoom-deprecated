import {
  Component,
  For,
  Setter,
  Suspense,
  createEffect,
  createSignal,
  onMount,
} from "solid-js";

interface WordPanelProps {
  wordSetter: Setter<string[]>;
  currentIndex: number;
}

const WordPanel: Component<WordPanelProps> = (props) => {
  const [words, setWords] = createSignal([]);

  onMount(async () => {
    let words = await getWords(200);
    setWords(words);
    props.wordSetter(words);
  });

  return (
    <div id="word-panel">
      <Suspense fallback={<span>here's some placeholder text</span>}>
        <For each={words()}>
          {(word, index) => {
            return (
              <span
                data-index={index()}
                classList={{
                  highlighted: props.currentIndex == index(),
                }}
              >
                {word}
              </span>
            );
          }}
        </For>
      </Suspense>
    </div>
  );
};

const getWords = async (word_num: number) => {
  let res;
  try {
    res = await fetch(
      "https://random-word-api.herokuapp.com/word?number=" + word_num
    );
  } catch (error) {
    console.error("Error caught: " + error);
  }

  if (res?.ok) {
    return res.json();
  }
};

export default WordPanel;
