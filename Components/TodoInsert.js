import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

const TodoInsert = ({onAddTodo}) => {
    const [NewTodoItem, setNewTodoItem] = useState('');
    const todoInputControler = newTodo => {
        //새로 입력된 할일을 설정함
        setNewTodoItem(newTodo);
    };
    const addTodoControler = () => {
        //추가할 할일의 Value 선언
        onAddTodo(NewTodoItem);
        setNewTodoItem('');
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.input}
                placeholder="Please Enter A To-Do!! ✏️"
                placeholderTextColor={'#999'}
                //입력 값을 "todoInputControler"로 전달
                onChangeText={todoInputControler}
                value={NewTodoItem}
                autoCorrect={false}
            />
            <View style={styles.button}>
                {/* 클릭시 addTodoControler 실행 */}
                <Button color= '#FFBD6D' title={'ADD'} onPress={addTodoControler} />
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        padding: 20,
        borderBottomColor: '#bbb',
        borderBottomWidth: 1,
        fontSize: 24,
        marginLeft: 20,
    },
    button: {
        marginRight: 10,
    },
});

export default TodoInsert;