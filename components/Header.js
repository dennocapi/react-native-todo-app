import React from "react";

// styled components
import {
  HeaderView,
  HeaderTitle,
  HeaderButton,
  ClearAllText,
  HeaderButtonText,
  HeaderButtonContainer,
  colors,
} from "./../styles/appStyles";

import { Entypo } from "@expo/vector-icons";

const Header = ({ handleClearTodos }) => {
  return (
    <HeaderView>
      <HeaderTitle>Todos</HeaderTitle>
      <HeaderButtonContainer>
        <HeaderButton onPress={handleClearTodos}>
          <Entypo name="trash" size={25} color={colors.tertiary} />
        </HeaderButton>
        <HeaderButtonText>Clear all</HeaderButtonText>
      </HeaderButtonContainer>
    </HeaderView>
  );
};
export default Header;
