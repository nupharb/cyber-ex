const defaultState = []

const featuredLayout = ( state = defaultState, action) => {
    switch(action.type) { 
        case "ADD_FEATURE" : {
            return state.concat(action);
        } break;

        default: {
            return state;
        }
    }
}

export default featuredLayout;