import React, { useEffect, useState } from 'react';
import { registerUtilsLayout } from './_layout';

interface PropsType {

};

function ThisComponent(props: PropsType) {
  return (
    <div>
      page2
    </div>
  );
}
registerUtilsLayout(ThisComponent);

export default ThisComponent