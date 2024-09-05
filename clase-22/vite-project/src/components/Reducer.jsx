import { useReducer } from "react";

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };

    default:
      return state;
  }
};

function Reducer() {
  const [state, setState] = useReducer(counterReducer, { count: 0 });

  const increment = () => {
    setState({ type: "INCREMENT" });
  };
  return (
    <div>
      <p>Contador {state.count} </p>
      <button onClick={increment}>Increment</button>
      <button
        onClick={() => {
          setState({ type: "DECREMENT" });
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default Reducer;
