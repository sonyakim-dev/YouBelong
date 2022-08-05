import React from 'react';

// Firebase
import './firebase';

// Importing Root Component
import RootNavigation from "./src/navigation/RootNavigation";

export default function App() {
  console.reportErrorsAsExceptions = false;
  console.disableYellowBox = true;

  return (
    <RootNavigation />
  );
}