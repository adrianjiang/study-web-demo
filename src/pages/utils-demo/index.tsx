import React, { useEffect, useState } from 'react';
import UtilsPageLayout, { registerUtilsLayout } from './_layout';

interface PropsType {

};

function UtilsPage(props: PropsType) {
  return (
    <div>
      main
    </div>
  );
}

registerUtilsLayout(UtilsPage);

export default UtilsPage