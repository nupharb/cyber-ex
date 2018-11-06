import { combineReducers } from 'redux';
import handleLayouts from './handleLayouts';
//import storedData from './storedData';

export default combineReducers({
    allLayouts: handleLayouts
    //storedData: storedData
});
