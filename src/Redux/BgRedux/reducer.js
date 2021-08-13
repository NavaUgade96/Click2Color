

export const BG_KEY = "bgStore";

let initialState = {
  color: "",
};

let bgReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'BACKCOLOR': 
    console.log(state,action);
    return {
      ...state,
      color: action.payload

    };
    
   
    
    default:
      return state;
  }
};
export { bgReducer };
