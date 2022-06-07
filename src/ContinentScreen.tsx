import React from 'react';
import {FlatList} from 'react-native';
import {Navigation} from 'react-native-navigation';
import styled from 'styled-components/native';
import Colors from './constants/Colors';
import Language from './constants/Language';
import Screens from './constants/Screens';
import Container from './style/Container';

const ContinentScreen = (props: any) => {
  const dataContinent = props.continent;

  const dataCountry = props.country;

  const renderItem = (item: any) => {
    return (
      <ViewList>
        <TextContinent
          onPress={() => {
            Navigation.push(props.componentId, {
              component: {
                name: Screens.HomeScreen,
                passProps: {
                  continent: dataContinent,
                  country: dataCountry,
                },
              },
            });
          }}>{`${item.name}`}</TextContinent>
      </ViewList>
    );
  };

  return (
    <Container>
      <Title>{dataContinent?.name}</Title>

      <RowItem>
        <TextLeft>{Language.CODE}</TextLeft>
        <TextRight>{dataContinent?.code}</TextRight>
      </RowItem>

      <ViewFlex1>
        <RowItem>
          <TextLeft>{Language.COUNTRIES}</TextLeft>
          <ViewFlex1>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={dataContinent?.countries}
              renderItem={({item}) => renderItem(item)}
              keyExtractor={(item: object, index: number) => index.toString()}
            />
          </ViewFlex1>
        </RowItem>
      </ViewFlex1>
    </Container>
  );
};

const Title = styled.Text(() => ({
  fontSize: 24,
  textAlign: 'center',
  fontWeight: 'bold',
  color: Colors.PINK,
  marginTop: 20,
  marginBottom: 20,
}));

const TextLeft = styled.Text(() => ({
  flex: 1,
  fontSize: 15,
}));

const TextRight = styled.Text(() => ({
  fontSize: 15,
}));

const TextContinent = styled.Text(() => ({
  textAlign: 'right',
  marginTop: 10,
  color: Colors.PINK,
  textDecorationLine: 'underline',
}));

const RowItem = styled.View(() => ({
  flexDirection: 'row',
  marginBottom: 10,
}));

const ViewList = styled.View(() => ({}));

const ViewFlex1 = styled.View(() => ({
  flex: 1,
}));

export default ContinentScreen;
