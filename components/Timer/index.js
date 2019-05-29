import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreator as Actions } from '../../reducer';
import Timer from './presenter';

function mapStateToProps(state) {
    const { isPlaying, 
        elapsedTime, 
        timerDuration, 
        isPlayingDryer, 
        timerDurationDryer, 
        elapsedTimeDryer 
    } = state;
    return {
        isPlaying,
        elapsedTime,
        timerDuration,
        isPlayingDryer,
        elapsedTimeDryer,
        timerDurationDryer
    }
}


// Dispatch: A function which sends action to reducer
function mapDispatchToProps(dispatch){
    return {
        startTimer: bindActionCreators(Actions.startTimer, dispatch),
        restartTimer: bindActionCreators(Actions.restartTimer, dispatch),
        addSecond: bindActionCreators(Actions.addSecond, dispatch),
        startTimerDryer: bindActionCreators(Actions.startTimerDryer, dispatch),
        restartTimerDryer: bindActionCreators(Actions.restartTimerDryer, dispatch),
        addSecondDryer: bindActionCreators(Actions.addSecondDryer, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);