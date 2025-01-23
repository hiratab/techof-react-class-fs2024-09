import { useReducer } from "react";

function Reduce() {
  const initialState = {
    count: 0,
    name: 'Bruno'
  };

  const reducer = (previousState, action) => {
    switch (action.type) {
      case 'add':
        return {
          ...previousState,
          count: previousState.count + action.value
        }
      default:
        return {
          ...previousState
        }
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
// const [state, setState] = useState(initialState);
// setState((previousState) => { return newState })

  const decrementAction = () => {
    dispatch({
      type: 'add',
      value: -1
    });
  }

  const incrementAction = () => {
    dispatch({
      type: 'add',
      value: 1
    });
  }

  return (
    <div>
      <p>Count: {state.count}</p>
      <button
        onClick={decrementAction}
      >
        -
      </button>
      <button
        onClick={incrementAction}
      >
        +
      </button>
      <button
      
      >
        Reset
      </button>
    </div>
  )
}

export default Reduce;
