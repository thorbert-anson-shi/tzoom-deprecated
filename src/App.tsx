import "./App.css";
import WordPanel from "./components/WordPanel";
import apiService from "./api/apiService";
import { createSignal, onMount } from "solid-js";
import TextInput from "./components/TextInput";

function App() {
  const [index, setIndex] = createSignal<number>(0);

  const [words, setWords] = createSignal<string[]>([]);

  const [currentWord, setCurrentWord] = createSignal<string | undefined>();

  const handleTextChange = (s: string) => {
    if (!currentWord()?.includes(s.trim())) {
      console.log("Input is false!");
    }
    if (s.charAt(s.length - 1) === " ") {
      setIndex((prev) => prev + 1);
      setCurrentWord(words()[index()]);
    }
  };

  onMount(() => {
    (async () => {
      setWords(await apiService.get(200));
      console.log(words());
      setCurrentWord(words()[index()]);
    })();
  });

  return (
    <>
      <div class="test">
        <WordPanel words={words()} />
        <TextInput changeHandler={handleTextChange}></TextInput>
      </div>
    </>
  );
}

export default App;
