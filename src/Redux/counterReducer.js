const initialState = {
  c: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return {
        c: state.c + 1
      };
    }
    case "DECREMENT": {
      return {
        c: state.c - 1
      };
    }
    case "INCREMENTWITHPAYLOAD": {
      return {
        c: state.c + action.payload
      };
    }
    case "RESET": {
      return {
        c: 0
      };
    }
    default:
      return state;
  }
};

export default counterReducer;
