import React, { useState } from "react";

import { Text } from "react-native";

//components
import Header from "./Header";
import ListItems from "./ListItems";
import InputModal from "./InputModal";

const Home = () => {
  // initial todos
  const initialTodos = [
    {
      title: "Get some snacks",
      date: Date.now(),
      key: "1",
    },
    {
      title: "Go shopping",
      date: Date.now(),
      key: "2",
    },
    {
      title: "Watch football",
      date: Date.now(),
      key: "3",
    },
  ];

  const [todos, setTodos] = useState(initialTodos);

  //clear all todos
  const handleClearTodos = () => {
    setTodos([]);
  };

  // Modal visibility & input value
  const [modalVisible, setModalVisible] = useState(false);
  const [todoInputValue, setTodoInputValue] = useState();

  // function to add todo
  const handleAddTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    setModalVisible(false);
  };

  // Editing
  const [todoToBeEdited, setTodoToBeEdited] = useState(null);
  const handleTriggerEdit = (item) => {
    setTodoToBeEdited(item);
    setModalVisible(true);
    setTodoInputValue(item.title);
  };

  const handleEditTodo = (editedTodo) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex((todo) => todo.key === editedTodo.key);
    newTodos.splice(todoIndex, 1, editedTodo);
    setTodos(newTodos);
    setTodoToBeEdited(null);
    setModalVisible(false);
  };

  return (
    <>
      <Header handleClearTodos={handleClearTodos} />;
      <ListItems
        todos={todos}
        setTodos={setTodos}
        handleTriggerEdit={handleTriggerEdit}
      />
      <InputModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        todoInputValue={todoInputValue}
        setTodoInputValue={setTodoInputValue}
        handleAddTodo={handleAddTodo}
        todoToBeEdited={todoToBeEdited}
        setTodoToBeEdited={setTodoToBeEdited}
        handleEditTodo={handleEditTodo}
        todos={todos}
      />
    </>
  );
};

export default Home;
