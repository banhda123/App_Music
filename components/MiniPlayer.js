import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useMusicPlayerContext } from '../components/MusicPlayerContext';

const MiniPlayer = () => {
  const { currentSong, isPlaying, togglePlayPause } = useMusicPlayerContext();

  return (
    <View style={styles.container}>
      <Image source={{ uri: currentSong.artwork }} style={styles.artwork} />
      <View style={styles.infoContainer}>
        <Text style={styles.songTitle} numberOfLines={1}>
          {currentSong.title}
        </Text>
        <Text style={styles.artistName} numberOfLines={1}>
          {currentSong.artist}
        </Text>
      </View>
      <View style={styles.controls}>
        <TouchableOpacity onPress={togglePlayPause} style={styles.controlButton}>
          <Ionicons
            name={isPlaying ? "pause" : "play"}
            size={24}
            color="#FFF"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <Ionicons name="chevron-up" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#333',
  },
  artwork: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  songTitle: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  artistName: {
    color: '#AAA',
    fontSize: 14,
    marginTop: 2,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  controlButton: {
    marginLeft: 15,
  },
});

export default MiniPlayer;
