// Import

// Actions

const START_TIMER = 'START_TIMER';
const RESTART_TIMER = 'RESTART_TIMER';
const ADD_SECOND = 'ADD_SECOND';

const START_TIMER_DRYER = 'START_TIMER_DRYER';
const RESTART_TIMER_DRYER = 'RESTART_TIMER_DRYER';
const ADD_SECOND_DRYER = 'ADD_SECOND_DRYER';

// Action Creators

function startTimer(){
    return {
        type: START_TIMER
    };
}

function startTimerDryer(){
    return{
        type: START_TIMER_DRYER
    }
}

function restartTimer(){
    return {
        type: RESTART_TIMER
    };
}

function restartTimerDryer(){
    return {
        type: RESTART_TIMER_DRYER
    };
}

function addSecond() {
    return {
        type: ADD_SECOND
    };
}

function addSecondDryer() {
    return {
        type: ADD_SECOND_DRYER
    };
}

// Reducer

const TIME_DURATION = 990;
const TIME_DURATION_DRYER = 2940;

const initialState = {
    isPlaying: false,
    elapsedTime: 0,
    timerDuration: TIME_DURATION,
    isPlayingDryer: false,
    elapsedTimeDryer: 0,
    timerDurationDryer: TIME_DURATION_DRYER
}

function reducer(state = initialState, action) {
    // Type means return type: ADD_second, start_timer, etc
    switch(action.type){
        case START_TIMER:
            return applyStartTimer(state, action);
        case RESTART_TIMER:
            return applyRestartTimer(state, action);
        case ADD_SECOND:
            return applyAddSecond(state, action);
        case START_TIMER_DRYER:
            return applyStartTimerDryer(state, action);
        case RESTART_TIMER_DRYER:
            return applyRestartTimerDryer(state, action);
        case ADD_SECOND_DRYER:
            return applyAddSecondDryer(state, action);
        default:
            return state;
    }
}

// Reducer Functions

function applyStartTimer(state) {
    return {
        // Would like to have previous states
        ...state,
        isPlaying:true
    };
}

function applyStartTimerDryer(state) {
    return {
        // Would like to have previous states
        ...state,
        isPlayingDryer:true
    };
}

function applyRestartTimer(state) {
    return {
        ...state,
        isPlaying: false,
        elapsedTime: 0
    };
}

function applyRestartTimerDryer(state) {
    return {
        ...state,
        isPlayingDryer: false,
        elapsedTimeDryer: 0
    };
}

function applyAddSecond(state) {
    if(state.elapsedTime < TIME_DURATION){
        return {
            ...state,
            elapsedTime: state.elapsedTime + 1
        };
    } else {
        return {
          ...state,
          isPlaying: false  
        };
    }
}

function applyAddSecondDryer(state) {
    if(state.elapsedTimeDryer < TIME_DURATION_DRYER){
        return {
            ...state,
            elapsedTimeDryer: state.elapsedTimeDryer + 1
        };
    } else {
        return {
          ...state,
          isPlayingDryer: false  
        };
    }
}

// Export Action Creators

const actionCreator = {
    startTimer,
    restartTimer,
    addSecond,
    startTimerDryer,
    restartTimerDryer,
    addSecondDryer
}

// Export Reducer
export {actionCreator};

export default reducer;