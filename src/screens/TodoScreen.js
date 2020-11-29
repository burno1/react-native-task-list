import React ,{useState } from "react";
import { FlatList, StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import Task from "../components/Task";

const data = [
    { id:1, title: 'Teste 1', feito: false},
    { id:2, title: 'Teste 2', feito: false},
    { id:3, title: 'Teste 3', feito: false},
  ]

const TodoScreen  = () => {
    const [tasks,setTasks] = useState(data);
    const [newTask, setNewTask] = useState('');


    const onSubmit = () => {
        addTask(newTask);
        setNewTask('');
    }

    const addTask = (task) =>{
        let newTaskTemp = {id: Math.random(),"title": task, feito: false};
        let indexToAdd = tasks.findIndex(element => element.feito == true);
        indexToAdd != -1 ? tasks.splice(indexToAdd, 0 ,newTaskTemp) : tasks.push(newTaskTemp);
        setTasks([...tasks]);
    }

    const onPress = (item) => {
        item.feito = !item.feito;

        if(item.feito){
            tasks.push(tasks.splice(tasks.findIndex(element => element.id == item.id), 1)[0]);
        } else {
            tasks.splice(tasks.findIndex(element => element.id == item.id), 1)
            tasks.unshift(item);
        }
        setTasks([...tasks]);
    };

    return (
        <View>
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Digite nome da tarefa"
                value={newTask}
                style={styles.textInput} 
                onChangeText={(t) => setNewTask(t)}
                onSubmitEditing ={() => onSubmit()}
            />
            <FlatList
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.title}
                data={tasks}
                renderItem={({ item }) =>
                <TouchableOpacity
                 style={item.feito ? styles.tarefaFeita: styles.tarefaNaoFeita}
                 onPress= {()=> {
                     onPress(item)
                 }}>
                    <Task
                        title={item.title}
                        content={item.content} 
                        />
                </TouchableOpacity>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textInput:{
        borderWidth: 1,
        borderColor: 'black',
        margin: 10,
        padding: 5,
        borderRadius: 10
      },
    tarefaFeita:{
        backgroundColor: "grey",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textDecorationLine: 'line-through', 
        textDecorationStyle: 'solid'
    },
    tarefaNaoFeita:{
        backgroundColor: "pink",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
    
});

export default TodoScreen;