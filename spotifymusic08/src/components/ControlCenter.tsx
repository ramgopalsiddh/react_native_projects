import React from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { playbackService } from '../../musicPlayerServices'

const ControlCenter = () => {

    const playbackState = usePlaybackState() // Renamed for clarity

    // Next button
    const skipToNext = async () => {
        await TrackPlayer.skipToNext()
    }

    // Previous button
    const skipToPrevious = async () => {
        await TrackPlayer.skipToPrevious()
    }

    // Play/pause toggle button
    const togglePlayback = async (playback?: State) => {
        const currentTrack = await TrackPlayer.getCurrentTrack()

        if (currentTrack !== null && playback !== undefined) {
            if (playback === State.Paused || playback === State.Ready) {
                await TrackPlayer.play()
            } else {
                await TrackPlayer.pause()
            }
        }
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={skipToPrevious}>
                <Icon style={styles.icon} name="skip-previous" size={40} />
            </Pressable>
            <Pressable onPress={() => {
                if (playbackState.state !== undefined) {
                    togglePlayback(playbackState.state)
                }
            }}>
                <Icon
                    style={styles.icon}
                    name={playbackState.state === State.Playing ? "pause" : "play-arrow"}
                    size={75}
                />
            </Pressable>
            <Pressable onPress={skipToNext}>
                <Icon style={styles.icon} name="skip-next" size={40} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 56,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        color: '#FFFFFF',
    },
    playButton: {
        marginHorizontal: 24,
    },
})

export default ControlCenter
