import { Component, createSignal } from "solid-js";

interface TextInputProps {
  changeHandler: (s: string) => void;
}

const TextInput: Component<TextInputProps> = (props) => {
  const [currentToken, setCurrentToken] = createSignal<string>("");

  // handle inputs including spaces
  const handleInput = (s: string) => {
    setCurrentToken(s);

    // console.log(currentToken());

    // if user inputs space
    if (s.endsWith(" ")) {
      setCurrentToken("");
    }

    props.changeHandler(s);
  };

  return (
    <div style={{ margin: "2rem", "border-radius": "2rem" }}>
      <textarea
        id="input-field"
        cols="30"
        rows="1"
        placeholder="Click here"
        onInput={(e) => handleInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
          }
        }}
        value={currentToken()}
      ></textarea>
    </div>
  );
};

export default TextInput;
