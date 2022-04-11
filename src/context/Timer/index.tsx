import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import * as A from '../../store/reducers';

type TTimerContext = {
  timer: number;
  resetTimer: () => void;
};

export const TimerContext = createContext({} as TTimerContext);

type TTimerProvider = {
  children: ReactNode | ReactNode[];
};

export const TimerProvider: FC<TTimerProvider> = ({ children }) => {
  const [timer, setTimer] = useState<number>(5);
  const [intervalID, setIntervalID] = useState<number>();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const { isSelectedAnswer } = useAppSelector(state => state.game);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isSelectedAnswer && intervalID && isPlaying) {
      clearInterval(intervalID);
      setIntervalID(undefined);
      setIsPlaying(false);
    }
  }, [intervalID, isSelectedAnswer, isPlaying]);

  useEffect(() => {
    if (isPlaying && !timer) {
      setIsPlaying(false);
      clearInterval(intervalID);
      dispatch(A.actionSetIsSelectedAnswer());
    }
  }, [dispatch, intervalID, isPlaying, timer]);

  useEffect(() => {
    if (isPlaying) {
      const ID = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      if (typeof ID === 'number') setIntervalID(ID);
    }
  }, [isPlaying]);

  const resetTimer = useCallback(() => {
    setTimer(30);
    setIsPlaying(true);
  }, []);

  const timerMemo = useMemo(
    () => ({
      timer,
      resetTimer,
    }),
    [resetTimer, timer],
  );

  return <TimerContext.Provider value={timerMemo}>{children}</TimerContext.Provider>;
};
