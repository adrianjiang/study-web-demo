import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { MenuItemType } from '../types/layout';
import styles from './index.module.scss';
// import {} from 'aaa/'

// import {} from '@/common'

interface PropsType {
  // menuView: React.ReactNode;
  menus: MenuItemType[];
  children: React.ReactNode;
};



function PageLayout(props: PropsType) {
  const router = useRouter()
  return (
    <div className={styles['page-menu-layout']}>
      <div className={styles['menu-block']}>
        {
          props.menus.map((menu, index) => {
            return <div key={menu.path} className={styles['menu-item']} onClick={() => {
              router.push(menu.path)
            }}>{menu.title}</div>
          })
        }
      </div>
      <div className={styles['page-block']}>
        {props.children}
      </div>
    </div>
  );
}
export default PageLayout