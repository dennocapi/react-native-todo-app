import React, { useState } from "react";

import { Text } from "react-native";

//components
import Header from "./Header";
import ListItems from "./ListItems";

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
  return (
    <>
      <Header />;
      <ListItems todos={todos} setTodos={setTodos} />
    </>
  );
};

export default Home;
