import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

const TodoInsert = ({onAddTodo}) => {
    const [NewTodoItem, setNewTodoItem] = useState('');
    const todoInputControler = newTodo => {
        setNewTodoItem(newTodo);
    };
    const addTodoControler = () => {
        onAddTodo(NewTodoItem);
        setNewTodoItem('');
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.input}
                placeholder="Please Enter A To-Do!! ✏️"
                placeholderTextColor={'#999'}
                onChangeText={todoInputControler}
                value={NewTodoItem}
                autoCorrect={false}
            />
            <View style={styles.button}>
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