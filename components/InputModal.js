import React, { useState, useEffect } from "react";
import { Modal, Alert } from "react-native";
import * as Location from "expo-location";
import Constants from "expo-constants";
import axios from "axios";

import {
  ModalButton,
  ModalContainer,
  ModalView,
  StyledInput,
  ModalAction,
  ModalActionGroup,
  ModalIcon,
  HeaderTitle,
  colors,
} from "./../styles/appStyles";
import { AntDesign } from "@expo/vector-icons";

const InputModal = ({
  modalVisible,
  setModalVisible,
  todoInputValue,
  setTodoInputValue,
  handleAddTodo,
  handleEditTodo,
  todoToBeEdited,
  setTodoToBeEdited,
  todos,
}) => {
  const [permissionStatus, setPermissionStatus] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      setPermissionStatus(status);
    })();
  }, []);

  const handleCloseModal = () => {
    setModalVisible(false);
    setTodoInputValue("");
    setTodoToBeEdited(null);
  };

  const handleSubmit = async () => {
    if (permissionStatus !== "granted") {
      Alert.alert(
        "Location permission required",
        "Please enable location permission to create a todo",
        [{ text: "OK" }]
      );
      return;
    }

    const location = await Location.getCurrentPositionAsync();

    const response = await axios.get(
      `https://nominatim.openstreetmap.org/reverse?lat=${location.coords.latitude}&lon=${location.coords.longitude}&format=jsonv2`
    );

    const { city, county, state, country } = response.data.address;
    const region = state || county; // Use county if state is not available

    const newTodo = {
      title: todoInputValue,
      date: new Date().toUTCString(),
      key: new Date(),
      location: {
        address: `${city}, ${region}, ${country}`,
        coords: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        },
      },
    };

    if (!todoToBeEdited) {
      handleAddTodo(newTodo);
    } else {
      handleEditTodo({
        title: todoInputValue,
        date: todoToBeEdited.date,
        key: todoToBeEdited.key,
        location: todoToBeEdited.key,
      });
    }

    setTodoInputValue("");
    setModalVisible(false);
  };

  return (
    <>
      <ModalButton
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <AntDesign name="plus" size={30} color={colors.secondary} />
      </ModalButton>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <ModalContainer>
          <ModalView>
            <ModalIcon>
              <HeaderTitle>Todos</HeaderTitle>
              <AntDesign name="edit" size={30} color={colors.tertiary} />
            </ModalIcon>
            <StyledInput
              placeholder="Add a todo"
              placeholderTextColor={colors.alternative}
              selectionColor={colors.secondary}
              autoFocus={true}
              onChangeText={(text) => setTodoInputValue(text)}
              value={todoInputValue}
              onSubmitEditing={handleSubmit}
            />
            <ModalActionGroup>
              <ModalAction color={colors.primary} onPress={handleCloseModal}>
                <AntDesign name="close" size={28} color={colors.tertiary} />
              </ModalAction>
              <ModalAction color={colors.tertiary} onPress={handleSubmit}>
                <AntDesign name="check" size={28} color={colors.secondary} />
              </ModalAction>
            </ModalActionGroup>
          </ModalView>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default InputModal;
