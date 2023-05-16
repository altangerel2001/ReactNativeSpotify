import React, { useRef } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
	Image,
	Animated
} from 'react-native';

import {
	Header,
	LearnMoreLinks,
	Colors,
	DebugInstructions,
	ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const BANNER_H = 460;

const PremiumScreen = () => {
	const scrollA = useRef(new Animated.Value(0)).current;
	return (
		<SafeAreaView>
      
			<StatusBar barStyle="dark-content" />
			<Animated.ScrollView
			showsVerticalScrollIndicator={false}
				// onScroll={e => console.log(e.nativeEvent.contentOffset.y)}
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { y: scrollA } } }],
					{ useNativeDriver: true }
				)}
				style={styles.scrollView}
			>
				<View style={styles.container}>
					<Animated.Image
						style={styles.banner(scrollA)}
						width="100"
						height={BANNER_H}
						source={require("../albumcover2/1.jpg")}
					/>
					<View>
         
					</View>
				</View>
			</Animated.ScrollView>
   
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: '#fff',
		flex: 1,
	},
	title: {
		color: '#000',
		fontSize: 24,
		fontWeight: '600',
		lineHeight: 26,
		padding: 20,
		paddingBottom: 0,

	},
	TextView: {
		justifyContent: 'center',
		backgroundColor: '#fff',
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		top: -30,

	},
	banner: scrollA => ({
		height: BANNER_H,
		width: "300%",
		transform: [{
			translateY: scrollA,
		},
		{
			scale: scrollA.interpolate({
				inputRange: [-BANNER_H, 5, BANNER_H, BANNER_H + 2],
				outputRange: [3, 1, 1.5, 3]
			})
		}
		]
	}),
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
		color: Colors.black,
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400',
		color: Colors.dark,
	},
	highlight: {
		fontWeight: '700',
	},
	footer: {
		color: '#000',
		fontSize: 16,
		fontWeight: '400',
		lineHeight: 24,
		padding: 20,
		marginBottom: 100,

	},
});

export default PremiumScreen;