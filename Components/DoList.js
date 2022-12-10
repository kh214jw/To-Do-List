import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import TodoListItem from './TodoListItem'

const DoList = ({TodoList, Remove, Onoff}) => {
    return (
        <ScrollView contentContainerStyle={styles.listContainer}>
            {TodoList.map(Todo => (
                <TodoListItem 
                    key={Todo.id} 
                    {...Todo} 
                    Remove={Remove} 
                    Onoff={Onoff}
                />
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        alignItems: 'center',
    },
});

export default DoList;