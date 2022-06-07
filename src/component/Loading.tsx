import React from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';
import Colors from '~/constants/Colors';

const Loading = () => {
  return (
    <LoadingCenter>
      <ActivityIndicator size={'large'} color={Colors.PINK} />
    </LoadingCenter>
  );
};

const LoadingCenter = styled.View(() => ({
  ...StyleSheet.absoluteFillObject,
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 5,
}));
export default Loading;
