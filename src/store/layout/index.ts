import createNamespace from "../createNamespace";
import { createStandardAction, ActionType, getType } from "typesafe-actions";
import { Reducer } from "redux";
import { ThemeOptions } from "../../theme";

const ns = createNamespace("layout");

export type DrawerStateOptions = "open" | "closed";

export interface LayoutState {
  themeType: ThemeOptions;
  drawerState: DrawerStateOptions;
}

export const defaultState: LayoutState = {
  themeType: "light",
  drawerState: "closed"
}

export const LayoutActions = {
  setThemeType: createStandardAction(ns`set_theme`)<ThemeOptions>(),
  setDrawerState: createStandardAction(ns`set_drawer_state`)<DrawerStateOptions>()
};

export type LayoutActionsType = ActionType<typeof LayoutActions>;

export const reducer: Reducer<LayoutState> = (state = defaultState, action: LayoutActionsType) => {
  switch (action.type) {

    case getType(LayoutActions.setThemeType):
      return { ...state, themeType: action.payload as ThemeOptions };

    case getType(LayoutActions.setDrawerState):
      return { ...state, drawerState: action.payload as DrawerStateOptions };

    default:
      return state;
  }
}

export default reducer;

export * from "./saga";