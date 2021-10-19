import { createContext, useContext } from 'react';

export interface TestVariablesInterface {
  answersHistory: Array<boolean>,
  cardsArray: Array<number>,
  currentCardIndex: number
}

export type TestVariablesType = {
  testVariables: TestVariablesInterface,
  setTestVariables: (variables: TestVariablesInterface) => void
};

export const testVariablesContext = createContext<TestVariablesType>({
  testVariables: {
    answersHistory: [],
    cardsArray: [0, 1, 2, 3, 4, 5, 6, 7],
    currentCardIndex: 0,
  },
  setTestVariables: () => { },
});

export const useTestVariables = () => useContext(testVariablesContext);
