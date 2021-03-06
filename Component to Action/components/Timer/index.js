import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreator as tomatoActions } from '../../reducer';
import Timer from './presenter';

function mapStateToProps(state) {
    const { isPlaying, elapsedTime, timerDuration } = state;
    return {
        isPlaying,
        elapsedTime,
        timerDuration
    }
}


// Dispatch: A function which sends action to reducer
function mapDispatchToProps(dispatch){
    return {
        startTimer: bindActionCreators(tomatoActions.startTimer, dispatch),
        restartTimer: bindActionCreators(tomatoActions.restartTimer, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);