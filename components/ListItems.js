import React, { useState } from "react";

//styled components

import {
  ListView,
  ListViewHidden,
  TodoText,
  TodoDate,
  HiddenButton,
  SwipedTodoText,
  colors,
  CompleteTaskButton
} from "../styles/appStyles";

import { SwipeListView } from "react-native-swipe-list-view";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";


// async storage
import AsyncStorage from "@react-native-async-storage/async-storage";

const ListItems = ({ todos, setTodos, handleTriggerEdit }) => {
  //For styling currently swipped todo row
  const [swipedRow, setSwipedRow] = useState(null);

  const handleDeleteTodo = (rowMap, rowKey) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex((todo) => todo.key === rowKey);
    newTodos.splice(todoIndex, 1);
    AsyncStorage.setItem("storedTodos", JSON.stringify(newTodos))
      .then(() => {
        setTodos(newTodos);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {todos.length == 0 ? <TodoText>You have no todos today</TodoText> : null}
      {todos.length != 0 ? (
        <SwipeListView
          data={todos}
          renderItem={(data,RowMap) => {
            console.log('------------------------------',data)
            const RowText =
              data.item.key == swipedRow ? SwipedTodoText : TodoText;
            return (
              <ListView
                underlayColor={colors.primary}
                onPress={() => {
                  handleTriggerEdit(data.item);
                }}
              >
                <>
                  {/* <CompleteTaskButton>
                    <AntDesign
                      name="checksquareo"
                      size={28}
                      color={colors.tertiary}
                    />
                  </CompleteTaskButton> */}
                  <RowText>{data.item.title}</RowText>
                  <TodoDate>
                    {data.item.location.coords.latitude +
                      ", " +
                      data.item.location.coords.longitude}
                  </TodoDate>
                  <TodoDate>{data.item.date}</TodoDate>
                </>
              </ListView>
            );
          }}
          renderHiddenItem={(data, rowMap) => {
            return (
              <ListViewHidden>
                <HiddenButton
                  onPress={() => handleDeleteTodo(rowMap, data.item.key)}
                >
                  <Entypo name="trash" size={25} color={colors.secondary} />
                </HiddenButton>
              </ListViewHidden>
            );
          }}
          leftOpenValue={80}
          previewRowKey={"1"}
          previewOpenValue={80}
          previewOpenDelay={3000}
          disableLeftSwipe={true}
          showsVerticalScrollIndicator={false}
          style={{
            flex: 1,
            paddingBottom: 30,
            marginBottom: 40,
          }}
          onRowOpen={(rowKey) => {
            setSwipedRow(rowKey);
          }}
          onRowClose={() => {
            setSwipedRow(null);
          }}
        />
      ) : null}
    </>
  );
};

export default ListItems;
