import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Button from "../Button";

function formatTime(time){
    let minutes = Math.floor(time/60);
    time -= minutes * 60;
    let seconds = parseInt(time % 60, 10);
    return `${minutes < 10 ? `0${minutes}`:minutes}:${seconds < 10 ? `0${seconds}`:seconds}`;
}


class Timer extends Component{
    
    // componentWillReceiveProps: Everytime we will get props
    componentWillReceiveProps(nextProps){
        const currentProps = this.props;
        //console.log(`The current isplaying is: ${currentProps.isPlaying} and the new isPlaying are ${nextProps.isPlaying}`);
        if(!currentProps.isPlaying && nextProps.isPlaying){
            // start the interval
            //console.log('should start')
            const timerInterval = setInterval(() => {
                currentProps.addSecond();
            }, 1000);

            this.setState({
                timerInterval
            });

        } else if(currentProps.isPlaying && !nextProps.isPlaying){
            // Stop the interval
            //console.log('should stop')
            clearInterval(this.state.timerInterval);
        }

        if(!currentProps.isPlayingDryer && nextProps.isPlayingDryer){
            
            const timerIntervalDryer = setInterval( () => {
                currentProps.addSecondDryer();
            }, 1000);

            this.setState({
                timerIntervalDryer
            });

        } else if(currentProps.isPlayingDryer && !nextProps.isPlayingDryer){
            clearInterval(this.state.timerIntervalDryer);
        }
    }
    
    render(){
        console.log(this.props);
        const { 
            isPlaying,
            elapsedTime,
            timerDuration,
            startTimer, 
            restartTimer,
            addSecond,
            isPlayingDryer,
            elapsedTimeDryer,
            timerDurationDryer,
            startTimerDryer,
            restartTimerDryer,
            addSecondDryer 
        } = this.props;
        return(
            <View style={styles.container}>
                <StatusBar barStyle={"light-content"} />
                <View style={styles.upper}>
                    <Text style={styles.time}>
                        {formatTime(timerDuration - elapsedTime)}
                    </Text>
                </View>
                <View style={styles.lower}>
                    {!isPlaying && (
                        <Button iconName="play-circle" onPress={startTimer}/>
                    )}
                    {isPlaying && (
                        <Button iconName="stop-circle" onPress={restartTimer}/>
                    )}
                </View>

                <View style={styles.upper}>
                    <Text style={styles.time}>
                        {formatTime(timerDurationDryer - elapsedTimeDryer)}
                    </Text>
                </View>
                <View style={styles.lower}>
                    {!isPlayingDryer && (
                        <Button iconName="play-circle" onPress={startTimerDryer}/>
                    )}
                    {isPlayingDryer && (
                        <Button iconName="stop-circle" onPress={restartTimerDryer}/>
                    )}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#CE0B24"
    },
    upper: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    lower: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    time: {
        color: "white",
        fontSize: 120,
        fontWeight: "300"
    }
});

export default Timer;
