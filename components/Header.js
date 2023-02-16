import React from "react";
import { View } from "react-native";

// styled components
import {
  HeaderView,
  HeaderTitle,
  HeaderButton,
  colors,
} from "./../styles/appStyles";

import { Entypo } from "@expo/vector-icons";

const Header = ({ handleClearTodos }) => {
  return (
    <>
      <HeaderView>
        <HeaderTitle>Todos</HeaderTitle>
        <HeaderButton onPress={handleClearTodos}>
          <Entypo name="trash" size={25} color={colors.tertiary} />
        </HeaderButton>
      </HeaderView>
      <View
        style={{
          borderBottomColor: colors.tertiary,
          borderBottomWidth: 1,
        }}
      />
    </>
  );
};

export default Header;
