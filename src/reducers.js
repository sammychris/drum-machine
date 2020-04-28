const initialValues = {
  soundName: "",
  switched: false,
  power: true,
};

export const reducers = (state = initialValues, action = {}) => {
  switch (action.type) {
    case "DRUM_SOUNDNAME":
      return { ...state, soundName: action.payload };
    case "DRUM_SWITCHED":
      return { ...state, switched: action.payload };
    case "DRUM_POWER":
      return { ...state, power: action.payload };
    default:
      return state;
  }
};
