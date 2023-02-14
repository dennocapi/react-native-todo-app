import react from "react";

// stylrd components
import {
  HeaderView,
  HeaderTitle,
  HeaderButton,
  colors,
} from "./../styles/appStyles";

import { Entypo } from "@expo/vector-icons";

const Header = () => {
  return (
    <HeaderView>
      <HeaderTitle>Todos</HeaderTitle>
      <HeaderButton>
        <Entypo  name='trash' size={25} color={colors.tertiary}/>
      </HeaderButton>
    </HeaderView>
  );
};

export default Header;
