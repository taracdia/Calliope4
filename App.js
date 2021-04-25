import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as MediaLibrary from "expo-media-library";
import RNMusicMetadata from "react-native-music-metadata";

export default function App() {
	// const getAudioFiles = async () => {
	// 	const permission = await MediaLibrary.requestPermissionsAsync();
	// 	if (permission.granted) {
	// 		await MediaLibrary.getAssetsAsync({ mediaType: "audio" })
	// 			.then(media => {
	// 				const urls = media.assets.map(song => song.uri);
	// 				RNMusicMetadata.getMetadata(urls)
	// 					.then(tracks => {
	// 						console.log(tracks);
	// 						tracks.forEach(track => {
	// 							console.log(
	// 								`${track.title} by ${track.artist}`
	// 							);
	// 						});
	// 					})
	// 					.catch(err => {
	// 						console.error(err);
	// 					});
	// 			})
	// 			.catch(err => console.log(err));
	// 	}
	// };

	// useEffect(() => {
	// 	getAudioFiles();
	// });

	return (
		<View style={styles.container}>
			<Text>Open up App.js to start working on your app!</Text>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
