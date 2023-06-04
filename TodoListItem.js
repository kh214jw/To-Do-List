import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

//화면 지율 맞추기
const { width } = Dimensions.get("window");

const TodoListItem = ({textValue, id, Check, Remove, Onoff}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={Onoff(id)}>
                {/* 체크 시 동그라미 아이콘을*/}
                {Check ? (
                    //true일때 출력
                    <View style={styles.completeCircle}>
                        <Icon name="circledowno" size={30} color="#3867d6" />
                    </View>
                ) : (
                    //false일때 출력
                    <View style={styles.circle} />
                )}
            </TouchableOpacity>
            <Text style={[styles.text, 
                //체크시 텍스트를
                Check? styles.strikeText : styles.unstrikeText,]}>
                {textValue}
            </Text>
            <TouchableOpacity style={styles.buttonContainer}>
                {/* 클릭시 Remove에 id값 반환 */}
                <Text onPress={Remove(id)}>
                ❌
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: width - 70,
        flex: 1,
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        flex: 5,
        fontWeight: '500',
        fontSize: 18,
        marginVertical: 20,
        width: 100,
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: '#3867d6',
        borderWidth: 2,
        marginRight: 20,
        marginLeft: 20,
    },
    completeCircle: {
        marginRight: 20,
        marginLeft: 20,
    },
    strikeText: {
        color: '#bbb',
        textDecorationLine: 'line-through',
    },
    unstrikeText: {
        color: '#29323c',
    },
    buttonContainer: {
        marginVertical: 10,
        marginHorizontal: 10,
    },
});

export default TodoListItem;