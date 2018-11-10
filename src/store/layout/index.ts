import createNamespace from "../createNamespace";
import { createStandardAction, ActionType, getType } from "typesafe-actions";
import { Reducer } from "redux";
import { ThemeOptions } from "../../theme";

const ns = createNamespace("layout");

export type DrawerStateOptions = "open" | "closed";

export interface LayoutState {
  themeType: ThemeOptions;
  drawerState: DrawerStateOptions;
  title: string;
  subtitle: string;
}

export const defaultState: LayoutState = {
  themeType: "light",
  drawerState: "closed",
  title: process.env.REACT_APP_TITLE || "TITLE",
  subtitle: process.env.REACT_APP_SUBTITLE || ""
};

export interface SetTitlePayload {
  title?: string;
  subtitle?: string;
}

export const LayoutActions = {
  setThemeType: createStandardAction(ns`set_theme`)<ThemeOptions>(),
  setDrawerState: createStandardAction(ns`set_drawer_state`)<DrawerStateOptions>(),
  setTitle: createStandardAction(ns`set_title`)<SetTitlePayload>()
};

export type LayoutActionsType = ActionType<typeof LayoutActions>;

export const reducer: Reducer<LayoutState> = (state = defaultState, action: LayoutActionsType) => {
  switch (action.type) {

    case getType(LayoutActions.setThemeType):
      return { ...state, themeType: action.payload as ThemeOptions };

    case getType(LayoutActions.setDrawerState):
      return { ...state, drawerState: action.payload as DrawerStateOptions };

    case getType(LayoutActions.setTitle): {
      let payload = <SetTitlePayload>action.payload;
      let { title = state.title, subtitle = state.subtitle } = payload;
      return { ...state, title, subtitle };
    }

    default:
      return state;
  }
}

export default reducer;

export * from "./saga";