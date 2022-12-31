import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export namespace Routes {
  export type LoggedOut = {
    signUp: undefined;
  };

  export type Logged = {};

  export type App = Logged & LoggedOut;
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<Routes.App>;
