import "./App.css";
import WordPanel from "../components/WordPanel";
// import apiService from "../api/apiService";
import { Suspense, createEffect, createSignal } from "solid-js";
import TextInput from "../components/TextInput";
import Timer from "../components/Timer";

function App() {
  // Current index of the word; can be used for speed calculation
  const [index, setIndex] = createSignal<number>(0);

  // Word list generated by API
  const [words, setWords] = createSignal<string[]>([]);

  // Current word being evaluated against input
  const [currentWord, setCurrentWord] = createSignal<string | undefined>();

  const [start, setStart] = createSignal<boolean>(false);

  const handleTextChange = (s: string) => {
    if (!start()) {
      setStart(true);
    }
    // If current word does not start with current token, return false
    if (!currentWord()?.startsWith(s.trim())) {
      // console.log("Input is false!");
    }

    let highlighted = document.getElementsByClassName(
      "highlighted"
    )[0] as HTMLElement;

    if (s.endsWith(" ")) {
      if (s.trim() === highlighted.innerHTML) {
        // If the user input is correct

        highlighted.className = "correct";
        console.log("Nice");
      } else {
        // If the user input is incorrect

        highlighted.className = "incorrect";
        console.log("wtf");
      }

      setIndex((prev) => prev + 1);
      setCurrentWord(words()[index()]);
    }
  };

  const handleTestCompletion = () => {
    window.open("/profile", "_self");
  };

  let wordPanel: HTMLElement;

  createEffect(() => {
    // console.log(words());
    setInterval(() => {
      wordPanel.scrollBy({ top: 100 });
    });
  });

  return (
    <>
      <div class="test">
        <Timer
          ongoing={start()}
          seconds={20}
          completionHandler={handleTestCompletion}
        ></Timer>
        <Suspense fallback={<span>this a span</span>}>
          <WordPanel
            ref={wordPanel}
            currentIndex={index()}
            wordSetter={setWords}
          />
        </Suspense>
        <div>
          <TextInput changeHandler={handleTextChange}></TextInput>
          <a href="/test" target="_self">
            <button>Reset</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
