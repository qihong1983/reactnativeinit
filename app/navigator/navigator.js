import React from 'react'
import {
	StackNavigator
} from 'react-navigation'

import Main from '../page/Main';
import Redux1 from '../page/Redux1';

export const AppNavigator = StackNavigator({
	Main: {
		screen: Main
	},
	Redux1: {
		screen: Redux1
	},
});