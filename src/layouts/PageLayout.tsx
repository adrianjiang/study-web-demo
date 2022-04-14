import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';

interface PropsType {
  children: React.ReactNode;
};

function PageLayout(props: PropsType) {
  return (
    <div className={styles['page-layout']}>
      {props.children}
    </div>
  );
}
export default PageLayout