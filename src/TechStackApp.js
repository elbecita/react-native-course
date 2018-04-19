import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './techStackApp/reducers';
import { Header } from './commonComponents';
import LibraryList from './techStackApp/components/LibraryList';

const TechStackApp = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
        <Header title="Tech Stack" />
        <LibraryList />
      </View>
    </Provider>
  );
};

export default TechStackApp;
