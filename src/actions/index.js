export const addFeature = (id, placeholder, component) => ({
    type: 'ADD_FEATURE',
    id,
    placeholder,
    component
});

// id - the id of the placeholder 
// component - which component should be added to the placeholder

export const dataToStore = (data) => ({
    type: 'DATA_TO_STORE',
    data
});