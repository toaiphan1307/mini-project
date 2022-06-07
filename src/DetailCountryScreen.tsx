import React from 'react';
import {Navigation} from 'react-native-navigation';
import styled from 'styled-components/native';
import Colors from './constants/Colors';
import Language from './constants/Language';
import Screens from './constants/Screens';
import Container from './style/Container';

const DetailCoutryScreen = (props: any) => {
  const dataContinent = props.continent;

  const dataCountry = props.country;

  return (
    <Container>
      <Emoji>{dataCountry?.emoji}</Emoji>

      <RowItem>
        <TextLeft>{Language.ALPHA_CODE}</TextLeft>
        <TextRight>{dataCountry?.code}</TextRight>
      </RowItem>

      <RowItem>
        <TextLeft>{Language.CALLING_CODE}</TextLeft>
        <TextRight>{`+${dataCountry?.phone}`}</TextRight>
      </RowItem>

      <RowItem>
        <TextLeft>{Language.CONTINENT}</TextLeft>
        <TextHightLight
          onPress={() => {
            Navigation.push(props.componentId, {
              component: {
                name: Screens.ContinentScreen,
                passProps: {
                  continent: dataContinent,
                  country: dataCountry,
                },
              },
            });
          }}>
          {dataContinent?.name}
        </TextHightLight>
      </RowItem>
    </Container>
  );
};

const Emoji = styled.Text(() => ({
  fontSize: 100,
  textAlign: 'center',
}));

const TextLeft = styled.Text(() => ({
  flex: 1,
  fontSize: 15,
}));

const TextRight = styled.Text(() => ({
  fontSize: 15,
}));

const TextHightLight = styled.Text(() => ({
  fontSize: 15,
  color: Colors.PINK,
  textDecorationLine: 'underline',
  fontWeight: 'bold',
}));

const RowItem = styled.View(() => ({
  flexDirection: 'row',
  marginBottom: 10,
}));

export default DetailCoutryScreen;
