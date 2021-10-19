import { createContext, useContext } from 'react';
import { TEST_STATES } from './Constants';

export type TestStateContextType = {
  testState: TEST_STATES,
  setTestState: (state: TEST_STATES) => void
};

export const testStateContext = createContext<TestStateContextType>({
  testState: TEST_STATES.INACTIVE,
  setTestState: () => {},
});

export const useTestStateContext = () => useContext(testStateContext);
