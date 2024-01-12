
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View,StatusBar, Button, FlatList} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
export default function App() {
  const [todo,setTodo]=useState("")
  const [todos,setTodos]=useState([])
  const handlerChange=()=>{
    setTodos([...todos,{id:todos.length+1,todo}]);
    setTodo(""); 
  };
  const handleDeleteTodo=(id)=>{
    // console.log("id",id)
    setTodos(todos.filter((todo)=>todo.id !==id));
};
  const renderItems=({item})=>(
    <View style={styles.item}>
    <Text>{item.todo}</Text>
    <AntDesign name="delete" size={24} color="black"
    onPress={()=>handleDeleteTodo(item.id)}/>
</View>
);
// console.log("todo",todos)
return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo Application</Text>
      <View style={styles.textWrapper}>
        <TextInput 
        style={styles.input}
        onChangeText={(text)=>setTodo(text)}
        value={todo}
        />
        <Button title='Add' onPress={handlerChange}/>
      </View>
      <View style={styles.Wrapper}>
        <FlatList data={todos}
        renderItem={renderItems}
        keyExtractor={(todo)=>todo.id}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop:40
   },
   header:{
    fontWeight:'bold',
    fontSize:20
   },
   input:{
    borderWidth:1,
    flex:0.9
   },
   textWrapper:{
    flexDirection:'row',
    marginTop:20,
   },
   Wrapper:{
    backgroundColor:"#eee",
    width:360,
    padding:20,
    margin:20,
    borderRadius:5
   },
   item:{
    flexDirection:'row',
    justifyContent:"space-between",
    marginVertical:10
   }
});
