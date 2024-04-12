import { Component, createEffect, createSignal } from "solid-js";

interface TimerProps {
  ongoing: boolean;
  seconds: number;
  completionHandler: () => void;
}

const Timer: Component<TimerProps> = (props) => {
  const [remaining, setRemaining] = createSignal<number>(props.seconds);

  createEffect(() => {
    if (props.ongoing == true) {
      let intervalID: number = setInterval(() => {
        setRemaining((prev) => prev - 1);

        if (remaining() == 0) {
          clearInterval(intervalID);
          props.completionHandler();
        }
      }, 1000);
    }
  });

  return <div>{remaining()}</div>;
};

export default Timer;
