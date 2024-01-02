import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

 const Profile = () => {
  return (
    <View style={styles.container}>
      {}
      <Image
        source={{ uri: 'https://pixabay.com/id/illustrations/anime-animasi-kartun-gadis-7743409/L' }}
        style={styles.profileImage}
      />

      {}
      <View style={styles.profileInfo}>
        <Text style={styles.name}>Nama Pengguna</Text>
        <Text style={styles.bio}>Deskripsi singkat tentang diri Anda.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  profileInfo: {
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bio: {
    fontSize: 16,
    color: '#555',
  },
});

export default Profile