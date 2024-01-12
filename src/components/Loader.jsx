import React from 'react';
import * as LoaderSpinner from 'react-loader-spinner';


const Loader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <LoaderSpinner type="Puff" color="#00BFFF" height={100} width={100} />
    </div>
  );
};

export default Loader;