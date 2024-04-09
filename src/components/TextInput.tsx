import { Component, createSignal } from "solid-js";

interface TextInputProps {
  changeHandler: (s: string) => void;
}

const TextInput: Component<TextInputProps> = (props) => {
  const [currentToken, setCurrentToken] = createSignal<string>("");

  const handleInput = (s: string) => {
    setCurrentToken(s);

    if (s.charAt(s.length - 1) === " ") {
      setCurrentToken("");
      console.log(currentToken());
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
        value={currentToken()}
      ></textarea>
    </div>
  );
};

export default TextInput;
