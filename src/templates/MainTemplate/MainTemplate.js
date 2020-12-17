import React from 'react';
import Helmet from 'react-helmet';

const MainTemplate = ({ children }) => {
  return (
    <div>
      <Helmet lang="pl" title="TechGear" />
      {children}
    </div>
  );
};

export default MainTemplate;
