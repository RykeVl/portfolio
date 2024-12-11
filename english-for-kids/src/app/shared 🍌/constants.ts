export enum NAVIGATION {
  HOME,
  ANIMALS,
  ACTIONS,
  CLOTHES,
  MOOD,
  FURNITURE,
  GADGETS,
  COLORS,
  WEATHER,
  STATISTICS,
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const enum TEST_STATES {
  INACTIVE,
  START,
  IN_PROCESS,
  SUCCESSFUL,
  FAILURE,
}

export interface NavigationProp {
  setNavigation: (navigation: NAVIGATION) => void;
}
