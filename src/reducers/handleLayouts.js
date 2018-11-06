const handleLayouts = ( state = [], action) => {
    switch(action.type) { 
        case "ADD_FEATURE" : {
            const newState = [...state];
            newState[action.id - 1].gridLayout.layout[action.placeholder].component = parseInt(action.component);
            return newState;
        } 
        break;

        default: {
            return state;
        }
    }
}

export default handleLayouts;