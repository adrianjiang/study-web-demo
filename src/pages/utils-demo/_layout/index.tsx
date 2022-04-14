// import MenuLayout from '@/layouts/MenuLayout';
// import MenuLayout from '../../../layouts/MenuLayout';

import React, { useEffect, useState } from 'react';
import MenuLayout from '@/layouts/MenuLayout'


const menus = [
  { path: '/utils-demo/page1', title: 'Hello World' },
  { path: '/utils-demo/page2', title: 'Hello World2' },
]

function UtilsPageLayout(props: { children: React.ReactNode }) {
  return (
    <MenuLayout
      menus={menus}
    >
      {props.children}
    </MenuLayout>
  );
}

export function registerUtilsLayout(component: React.FC<any>) {
  // @ts-ignore
  component.getLayout = function (page: React.ReactNode) {
    return (
      <UtilsPageLayout>
        {page}
      </UtilsPageLayout>
    )
  }
}
export default UtilsPageLayout