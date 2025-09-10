'use client';

import styles from '../styles/Blackout.module.css';
import { useSelector } from 'react-redux';
import { IStoreReducer } from '@/types/interfaces';

export default function Blackout(): JSX.Element {
  const visibleBlackout = useSelector(
    (state: IStoreReducer) => state.visibleBlackoutSlice.visibleBlackout
  );

  return <>{visibleBlackout && <div className={styles.blackout}></div>}</>;
}
