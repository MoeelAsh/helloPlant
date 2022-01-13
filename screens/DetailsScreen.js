import React from 'react';
import {View, SafeAreaView, Image, Text, StyleSheet, ScrollView,TouchableOpacity} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';





const DetailsScreen = ({navigation, route}) => {
  const plant = route.params;
  const [toggle, settoggle] = React.useState(0);

  React.useEffect(() => {
    console.log("pressed")
  }, [toggle])


  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <View style={style.header}>
        <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
        <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: plant.like
                  ? 'rgba(245, 42, 42,0.2)'
                  : 'rgba(0,0,0,0.2) ',
              }}>
              <TouchableOpacity
                onPress={() => { plant.like = !plant.like;settoggle(!toggle)}}
              >
                <Icon
                  name="favorite"
                  size={18}
                  color={plant.like ? COLORS.red : COLORS.black}
                />
              </TouchableOpacity>
            </View>
      </View>
      <View style={style.imageContainer}>
        <Image source={plant.img} style={{resizeMode: 'contain', flex: 1}} />
      </View>
      <View style={style.detailsContainer}>
              <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>

          <Text style={{fontSize: 32, fontWeight: 'bold',color:'green'}}>Poppy</Text>
        </View>
        <View
          style={{
            marginLeft: 20,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>Papaver spp.</Text>
        </View>


        <View style={style.IconStyle}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={style.borderBtn}>
                <Text style={style.borderBtnText}><Icon name='wb-sunny' size={28} /></Text>
              </View>
              <Text style={style.myText}>
                Sun
              </Text>
            </View>
          </View>

          <View style={style.IconStyle}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={style.borderBtn}>
                <Text style={style.borderBtnText}><Icon name='local-florist' size={28} /></Text>
              </View>
              <Text style={style.myText}>
                Perennial
              </Text>
            </View>
          </View>

          <View style={style.IconStyle}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={style.borderBtn}>
                <Text style={style.borderBtnText}><Icon name='height' size={28} /></Text>
              </View>
              <Text style={style.myText}>
                6-12 inches, 1-3 feet
              </Text>
            </View>
          </View>

          <View style={style.IconStyle}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={style.borderBtn}>
                <Text style={style.borderBtnText}><Icon name='swap-horiz' size={28} /></Text>
              </View>
              <Text style={style.myText}>
                4-36 inches
              </Text>
            </View>
          </View>

          <View style={style.IconStyle}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={style.borderBtn}>
                <Text style={style.borderBtnText}><Icon name='color-lens' size={28} /></Text>
              </View>
              <Text style={style.myText}>
                Blue, Red, Orange, Pink
              </Text>
            </View>
          </View>

          <View style={style.IconStyle}>
            <View 
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={style.borderBtn}>
                <Text style={style.borderBtnText}><Icon name='access-time' size={28} /></Text>
              </View>
              <Text style={style.myText}>
                Spring Bloom, Summer Bloom
              </Text>
            </View>
          </View>

                    <View style={style.IconStyle}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={style.borderBtn}>
                <Text style={style.borderBtnText}><Icon name='device-thermostat' size={28} /></Text>
              </View>
              <Text style={style.myText}>
                2, 3, 4, 5, 6, 7, 8
              </Text>
            </View>
          </View>




        <View style={{paddingHorizontal: 20, marginTop: 50}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Special Features</Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 16,
              lineHeight: 22,
              marginTop: 10,
              marginBottom: 10,
            }}>
            {plant.about}
            

          </Text>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Plant Care</Text>
          <Text 
            style={{
              color: 'grey',
              fontSize: 16,
              lineHeight: 22,
              marginBottom: 10,
            }}>
            {plant.about}
            

          </Text>
        </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 0.40,
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: COLORS.light,
    marginHorizontal: 7,
    marginBottom: -25,
    borderRadius: 20,
    marginTop: 10,
    paddingTop: 25,
    paddingBottom: 10,
  },
  IconStyle: {
    marginTop: 20,
    marginLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  myText: {
    fontSize: 20,
    marginHorizontal: 50,
    fontWeight: 'bold',
  },

  borderBtn: {
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width:45,
    height: 45,
  },
  borderBtnText: {fontWeight: 'bold', fontSize: 28},
  buyBtn: {
    width: 130,
    height: 50,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },


});

export default DetailsScreen;
