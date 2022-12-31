/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from "react";

import { observer } from "mobx-react-lite";

import { Button, Text } from "react-native";

import { Container } from "./styles";

import { SigUpViewModel } from "./viewmodel";

import { IoC } from "@infrastructure/ioc";
import { Inject } from "@infrastructure/ioc/types";

import { SafeArea } from "@presentation/themes/styles";

import { SignUpParamsDto } from "@data/dtos/sign-up.params.dto";

function SignUpScreen() {
  const ioc = new IoC();

  const viewModel = useMemo(
    () =>
      ioc.container.get<SigUpViewModel>(
        Inject.SignUpTypes.SignUpViewModel
      ),
    []
  );

  async function signUp() {
    await viewModel.signUp(
      {
        name: "name",
        email: "email@email.com",
        password: "password"
      } as SignUpParamsDto
    );
  }

  return (
    <SafeArea>
      <Container>
        {viewModel.loading ?? <Text>Loading</Text>}

        <Text>Success {viewModel.success.access_token}</Text>
        <Text>Failure {viewModel.failure.message}</Text>
        <Button title="SignUp" onPress={signUp} />
      </Container>
    </SafeArea>
  );
}

export default observer(SignUpScreen);
