import React, { useState, createContext } from 'react';

export const GuideContext = createContext(null);

const GuideContextProvider = ({ children }) => {
  const [guideOpen, setGuideOpen] = useState(false);
  const [guideProgress, setGuideProgress] = useState(0);

  return (
    <GuideContext.Provider
      value={{
        guideOpen,
        setGuideOpen,
        guideProgress,
        setGuideProgress,
      }}>
      {children}
    </GuideContext.Provider>
  );
};

export default GuideContextProvider;
