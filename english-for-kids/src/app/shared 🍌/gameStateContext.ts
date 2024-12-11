import { createContext, useContext } from 'react';

export type GameStateContextType = {
  gameState: Boolean,
  setGameState: (state: boolean) => void
};

export const gameStateContext = createContext<GameStateContextType>({
  gameState: false,
  setGameState: () => {},
});

export const useGameStateContext = () => useContext(gameStateContext);
