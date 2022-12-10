import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { db } from '../firebaseConfig';
import { getDocs, collection } from "firebase/firestore";
import uuid from 'react-uuid';
import TodoInsert from './TodoInsert';
import DoList from './DoList';

//화면 맞추기
const { width } = Dimensions.get("window");

function ToList(props) {
    const [users, setUsers] = useState();

    const {params} = props.route
    const userEmail = params? params.email:null;
    
    const readfromDBUser = async() => {
        try {
            const data = await getDocs(collection(db, "users"))
            let selectedUser = {}
            data.docs.map((doc) =>{
                if(doc.data().email === userEmail ){
                    selectedUser = { ...doc.data(), id: doc.id }
                    setUsers(selectedUser)
                }
            })
            
        } catch (error) {
            console.log(error.message)
        }
    }

    const [Todos, setTodos] = useState([]);

    const addTodo = text => {
        setTodos([...Todos,
        {id: uuid(), textValue: text, Check: false},
        ]);
    };

    const remove = id => e => {
        setTodos(Todos.filter(Todo => Todo.id !== id));
    };

    const onOff = id => e => {
        setTodos(
        Todos.map(Todo =>
            Todo.id === id ? {...Todo, Check: !Todo.Check} : Todo,
        ),
        );
    };

    useEffect(()=>{ readfromDBUser() }, [] )

    return(
        <View style = {styles.container}>
            {users? 
                <View style = {styles.bodyContainer}>
                    <Text style = {styles.info}>※ User Information ※</Text>
                    <Text style = {styles.info}>My Name : {users.name}</Text>
                    <Text style = {styles.info}>My E-Mail : {users.email}</Text>
                </View>:null}
                <View>
                <Text style={styles.title}>Today's To-do!🐥</Text>
                </View>
                <View style={styles.card}>
                    <TodoInsert onAddTodo={addTodo} />
                    <DoList TodoList={TodoList} Remove={remove} Onoff={onOff} />
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFEAD0",
      padding: 20,
      alignItems: "center"
    },
    bodyContainer: {
        backgroundColor: '#FDF5DC',
        marginBottom: 10,
        paddingHorizontal: 20,
        marginVertical: 20,
      },
    info: {
        color: "brown",
        fontSize: 15,
        marginTop: 10,
        marginBottom: 10,
        textAlign: "left"
    },
    title: {
      color: "brown",
      fontSize: 30,
      marginTop: 10,
      marginBottom: 30,
      textAlign: "center",
    },
    card: {
      backgroundColor: "white",
      flex: 1,
      width: width - 35,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 0,
    },
  });
  

export default ToList;