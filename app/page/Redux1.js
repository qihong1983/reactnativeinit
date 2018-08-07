import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';

import {
    connect
} from 'react-redux';
import {
    actionGetWeather
} from '../actions/GetWeatherAction';

class Redux1 extends Component {
    // static navigationOptions = ({
    //     navigation,
    //     screenProps
    // }) => ({
    //     header: null,
    // })

    static navigationOptions = ({
        navigation,
        screenProps
    }) => {

        return {
            title: '例子',
            mode: 'card',
            headerMode: 'screen',
            headerStyle: {
                backgroundColor: '#e56045',
                borderBottom: 0
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }
    }

    constructor(props) {
        super(props);
        //设置状态
        this.state = {

        }
    }

    quit = () => {
        console.log(this);
        this.props.navigation.goBack();
    }

    stateRedux = () => {
        let s = '123456';
        this.props.dispatch(actionGetWeather(s));
    }

    render() {
        return (
            <View style = {styles.bgView}>
                 <TouchableHighlight style = {styles.touchableView} underlayColor={"#f4f4f4"} onPress={() => this.stateRedux()}>
                    <View style = {styles.buttonView}>
                        <Text style = {{ fontSize : 16,color : "#FFFFFF" }}>
                            { '发送' }
                        </Text>
                    </View>
                </TouchableHighlight>
 
                <Text style = {{color:"#000000",fontSize : 14}}>
                    {
                        this.props.GetWeatherReducer == null ? 
                        "" 
                        : 
                        this.props.GetWeatherReducer.status
                    }
                </Text>
 
                <TouchableHighlight style = {styles.touchableView} underlayColor={"#f4f4f4"} onPress={() => this.quit()}>
                    <View style = {styles.buttonView}>
                        <Text style = {{ fontSize : 16,color : "#FFFFFF" }}>
                            { 'quit' }
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bgView: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    touchableView: {
        margin: 6,
    },
    buttonView: {
        width: 100,
        height: 40,
        backgroundColor: "#0000FF",
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

function select(store) {
    return {
        GetWeatherReducer: store.getWeather,
    }
}

export default connect(select)(Redux1);