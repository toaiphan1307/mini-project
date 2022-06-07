import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList, Platform, Text, View} from 'react-native';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
import styled from 'styled-components/native';
import Loading from './component/Loading';
import API, {GET_LIST_DATA_COUNTRY} from './constants/API';
import Colors from './constants/Colors';
import Language from './constants/Language';
import Screens from './constants/Screens';
import {getScreenStyle} from './misc/getScreenStyle';
import Container from './style/Container';

export const HomeScreen: NavigationFunctionComponent<Props> = props => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const res = await axios.post(API.GET_COUNTRY, {
      query: GET_LIST_DATA_COUNTRY,
    });
    setData(res.data.data.continents);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = (item: any) => {
    const listCountry = item?.countries.map(i => {
      return (
        <Card
          onPress={() => {
            Navigation.push(props.componentId, {
              component: {
                name: Screens.DetailCoutryScreen,
                passProps: {
                  continent: item,
                  country: i,
                },
              },
            });
          }}>
          <RowItem>
            <CloumnItem>
              <Emoji>{i.emoji}</Emoji>
            </CloumnItem>

            <CloumnItemName>
              <Name>{i.name}</Name>
              <Text>{i.capital}</Text>
            </CloumnItemName>
          </RowItem>
        </Card>
      );
    });

    return <View>{listCountry}</View>;
  };

  return (
    <Container>
      {isLoading && <Loading />}

      <Title>{Language.LIST_OF_COUNTRY}</Title>

      <FlatList
        data={data}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={(item, index) => index.toString()}
      />
    </Container>
  );
};

type Props = {};

const Card = styled.TouchableOpacity(() => ({
  alignSelf: 'stretch',
  backgroundColor: Colors.WHITE,
  borderColor: Colors.BORDER_SHADOW,
  borderRadius: 10,
  borderWidth: Platform.OS === 'android' ? 1 : 0,
  shadowColor: Colors.SHADOW,
  shadowOffset: {
    width: 0,
    height: 7,
  },
  shadowOpacity: 0.1,
  shadowRadius: 10,
  marginBottom: 10,
  paddingHorizontal: 10,
}));

const RowItem = styled.View(() => ({
  flexDirection: 'row',
}));

const CloumnItem = styled.View(() => ({
  flexDirection: 'column',
}));

const CloumnItemName = styled.View(() => ({
  flexDirection: 'column',
  justifyContent: 'center',
  marginLeft: 10,
}));

const Emoji = styled.Text(() => ({
  fontSize: 50,
}));

const Name = styled.Text(() => ({
  width: 300,
}));

const Title = styled.Text(() => ({
  alignSelf: 'center',
  fontSize: 20,
  marginBottom: 10,
  marginTop: 10,
}));

HomeScreen.options = getScreenStyle();
