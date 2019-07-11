//intial state

let initialState = {
    animals: ["sheep", "lion", "tiger", "bear", "oh my"]
};


export const ADD_ANIMAL = "ADD_ANIMAL";


export default function reducer(state = initialState, { type, payload }) {
    switch (type) {  //same as action.type we destructered the action option above.
    case ADD_ANIMAL:
    return { ...state, animals: [...state.animals, payload] };
    default:
    return state;
    }
}
