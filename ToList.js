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
    //로그인 정보를 받아옴
    const {params} = props.route
    const userEmail = params? params.email:null;
    
    //파이어베이스 DB읽기
    const readfromDBUser = async() => {
        //DB읽기 성공시 실행
        try {
            const data = await getDocs(collection(db, "users"))
            let selectedUser = {}
            //받아온 값과 일치하는 유저 정보를 불러옴
            data.docs.map((doc) =>{
                if(doc.data().email === userEmail ){
                    selectedUser = { ...doc.data(), id: doc.id }
                    setUsers(selectedUser)
                }
            })
            //DB읽기 실패 시 실행
        } catch (error) {
            console.log(error.message)
        }
    }

    const [Todos, setTodos] = useState([]);

    //할일을 추가함
    const addTodo = text => {
        setTodos([...Todos,
        {id: uuid(), textValue: text, Check: false},
        ]);
    };

    //할일을 삭제함
    const remove = id => e => {
        setTodos(Todos.filter(Todo => Todo.id !== id));
    };

    //할일을 온오프로 체크함
    const onOff = id => e => {
        setTodos(
        Todos.map(Todo =>
            Todo.id === id ? {...Todo, Check: !Todo.Check} : Todo,
        ),
        );
    };

    //페이지가 시작되면 DB 정보를 읽어옴
    useEffect(()=>{ readfromDBUser() }, [] )

    return(
        <View style = {styles.container}>
            {users? 
                //유저 인터 페이스 출력
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
                    <DoList TodoList={Todos} Remove={remove} Onoff={onOff} />
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