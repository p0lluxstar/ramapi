import styles from '../styles/detailsCharacter/DetailsCharacter.module.css';
import lightStyles from '../styles/detailsCharacter/LightDetailsCharacter.module.css';
import darkStyles from '../styles/detailsCharacter/DarkDetailsCharacter.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { IDetailsCharacter, IStoreReducer } from '../types/interfaces';
import Image from 'next/image';
import Blackout from './Blackout';
import { useSelector } from 'react-redux';

interface IProps {
  detailsCharacter: IDetailsCharacter;
  onClose: () => void;
}

const isEmpty = (obj: object): boolean => {
  return Object.keys(obj).length === 0;
};

export default function DetailsCharacter({
  detailsCharacter,
  onClose,
}: IProps): JSX.Element | null {
  const themeContext = useContext(ThemeContext);
  const themeStyles = themeContext.theme === 'light' ? lightStyles : darkStyles;
  const visibleBlackout = useSelector(
    (state: IStoreReducer) => state.visibleBlackoutSlice.visibleBlackout
  );

  if (detailsCharacter.error === 'Character not found') {
    return (
      <div
        className={`${styles.detailsCharacter} ${themeStyles.detailsCharacter}`}
        data-testid="CharacterDetails"
      >
        <button onClick={onClose}>×</button>
        <p>There is no data on the character.</p>
      </div>
    );
  }

  if (isEmpty(detailsCharacter)) {
    return null;
  }

  return (
    <>
      {visibleBlackout && (
        <div
          className={`${styles.detailsCharacter} ${themeStyles.detailsCharacter}`}
          data-testid="CharacterDetails"
        >
          <button onClick={onClose}>×</button>
          <h2>{detailsCharacter.name}</h2>
          <div className={styles.detailsSubdescription}>
            {detailsCharacter.image && detailsCharacter.name && (
              <Image
                src={detailsCharacter.image}
                alt={detailsCharacter.name}
                width={200}
                height={200}
              />
            )}
            <div>
              <p>Status: {detailsCharacter.status}</p>
              <p>Species: {detailsCharacter.species}</p>
              <p>Gender: {detailsCharacter.gender}</p>
            </div>
          </div>
        </div>
      )}

      <Blackout />
    </>
  );
}
