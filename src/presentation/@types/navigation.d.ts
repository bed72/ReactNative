import { Routes } from "@presentation/routes/type.routes";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends Routes.App {}
  }
}
