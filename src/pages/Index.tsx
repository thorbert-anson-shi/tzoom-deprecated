import { A } from "@solidjs/router";
import { Component } from "solid-js";

interface IndexProps {}

const Index: Component<IndexProps> = (props) => {
  return (
    <div>
      <h1>TZoom</h1>
      <div>
        <A href="/login">
          <button>Log in</button>
        </A>
        <A href="/test">
          <button>Take a typing test!</button>
        </A>
      </div>
    </div>
  );
};

export default Index;
