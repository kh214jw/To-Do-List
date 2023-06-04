import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import TodoListItem from './TodoListItem'

const DoList = ({TodoList, Remove, Onoff}) => {
    return (
        <ScrollView contentContainerStyle={styles.listContainer}>
            {/* TodoList의 map */}
            {TodoList.map(Todo => (
                <TodoListItem 
                    key={Todo.id}   //할일을 검색할 아이디 값
                    {...Todo}       //입력된 할 일
                    Remove={Remove} //"TodoListItem"에서 반환한 삭제 텍스트 
                    Onoff={Onoff}   //"TodoListItem"에서 반환한 체크 아이콘

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