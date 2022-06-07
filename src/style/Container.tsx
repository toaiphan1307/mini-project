import React from 'react';
import styled from 'styled-components/native';

type Props = {
  children: any;
};

const Container = (props: Props) => {
  const {children} = props;
  return (
    <Parent>
      <Children>{children}</Children>
    </Parent>
  );
};

const Parent = styled.SafeAreaView(() => ({
  flex: 1,
  marginHorizontal: 20,
}));

const Children = styled.SafeAreaView(() => ({
  flex: 1,
}));

export default Container;
