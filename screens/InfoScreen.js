import React, { useState, useEffect } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import plants from '../consts/plants';
const width = Dimensions.get('window').width / 2 - 30;


const InfoScreen = ({ navigation }) => {
  
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
        }}>
        <View style={style.header}>
          <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
        </View>
        {/* <View style={style.imageContainer}>
          <Image source={plant.img} style={{resizeMode: 'contain', flex: 1}} />
        </View> */}
        <View style={style.detailsContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              marginLeft: 20,
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}>
  
            <Text style={{fontSize: 32, fontWeight: 'bold',color:'green'}}>Information tab</Text>
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
            <Text style={{fontSize: 22, fontWeight: 'bold'}}>Index for icons</Text>
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
                  Sun Exposure
                </Text>
              </View>
                  <Text style={style.textStyle}>
                  The sun provides us with the energy we need to power our homes, fuel our crops, and still have more than enough left over for everyone else. But what happens when we remove things that used to absorb the sun (i.e., plants and trees) for the built environment? All the energy that once went into trees and native grasses now cooks our roads and heats our cities.
                </Text>
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
                  Plant Type
                </Text>
              </View>
                <Text style={style.textStyle}>
                With a world of plants to choose from for your garden, where do you begin? Here our aim is to make it as easy as possible to decide by browsing the different plant types available. If you want a tree, then find out how they can still be a gorgeous addition to even a small garden. Or, for the home, find out what houseplants are the easiest to grow. It's time to explore and we'll offer lots of practical advice for your garden along the way.
                </Text>
            </View>


            <View style={style.IconStyle}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={style.borderBtn}>
                <Text style={style.borderBtnText}><Icon name='filter-alt' size={28} /></Text>
              </View>
              <Text style={style.myText}>
              Soil PH
              </Text>
            </View>
                <Text style={style.textStyle}>
                A pH of 6.5 is just about right for most home gardens, since most plants thrive in the 6.0 to 7.0 (slightly acidic to neutral) range. Some plants (blueberries, azaleas) prefer more acidic soil, while a few (ferns, asparagus) do best in soil that is neutral to slightly alkaline.
                </Text>
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
                  Plant Height
                </Text>
              </View>
                <Text style={style.textStyle}>
                Theoretically, plant height is defined as the shortest distance between the upper boundary (the highest point) of the main photosynthetic tissues (excluding inflorescences) and the ground level
                </Text>
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
                  Plant Width
                </Text>
              </View>
              <Text style={style.textStyle}>
                  Also known as Plant spread is the maximum width of the plant as measured at its widest part from leaf tip to leaf tip at maturity.
                </Text>
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
                  Color
                </Text>
              </View>
              <Text style={style.textStyle}>
              The color that you see in flowers is actually the result of reflected light from various chemical compounds called “plant pigments.”   Before humans were interested in these for the aesthetics they impart—flower, leaf, and fruit colors—they used pigments for dyes such as indigo, and herbal medicines.  There is still some use of these for dyes in crafts and natural art, but also in dietary supplements.  Pigments more recently are being studied for their antioxidant health-promoting properties.  Some may inhibit bad cholesterol, prevent blood from clotting, and help to prevent cancer in cells.
                </Text>
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
                  Bloom Time
                </Text>
              </View>
              <Text style={style.textStyle}>
              If you want your flower garden to be colorful from early spring through fall, you need plants that bloom at different times during the growing season. Each type of plant has its own bloom time. Combining a few plants from each season -- spring, early summer, midsummer, late summer and fall -- will ensure your garden always has flowers in bloom. To see our infographic on the bloom times for spring-flowering bulbs
                </Text>
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
                  Hardiness Zones
                </Text>
              </View>
              <Text style={style.textStyle}>
              The USDA plant hardiness map is created and updated every few years by the U.S. Department of Agriculture. It divides North America into eleven zones by minimum average annual temperatures. The lower the number is, the lower the temperatures in that zone. Each zone represents ten degrees of temperature difference. Each zone is also divided into “a” and “b” segments. These represent five degrees of temperature difference. For example, zone 4 represents minimum temperatures between -30 to -20 degrees F. (-34 to -29 C.). The a and b subdivisions represent -30 to -25 degrees F. (-34 to -32 C.) and -25 to -20 degrees F. (-32 to -29 C.). Hardiness refers to how well a plant will survive cold temperatures. Where the USDA zones fall short; however, is that they don’t account for other factors. These include freeze dates, freeze-thaw cycles, the effects of snow cover, precipitation, and elevation.
Read more at Gardening Know How: USDA Zone Explanation
                </Text>
            </View>
  
  
  
  
          <View style={{paddingHorizontal: 20, marginTop: 50}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Special Features</Text>
            <Text style={style.textStyle}>
            The diversity in size, shape, and growth requirements of different plants produces an astonishing array of features to see — from hairs, thorns, and waxes to tilting responses towards sunlight (phototaxis) and rapid responses to touch (sensitive plants). Widely differing growth forms also occur, including life styles associated with photosynthesis, parasitism, and carnivory, as well as the mining and galling effects of insects. This chapter describes a few of the many intriguing features of plants, including descriptions of the above characteristics as well as lenticels, plant patches, variegated leaves, and poison plants.
              
  
            </Text>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Plant Care</Text>
            <Text style={style.textStyle}>
            Different species, varieties and cultivars can have different requirements for care. Differentiating varieties and cultivars can be tricky and are two terms that should be used correctly, especially in the horticulture industry. A variety is a plant that will have the same characteristics as the parent plant, such as flower or leaf color. Varieties often occur naturally and will normally reproduce true from seed, meaning they look like their parents. On the other hand, most cultivars require human intervention to maintain specific traits and characteristics.
            </Text>
          </View>

          <View
            style={{
              marginLeft: 20,
              flexDirection: 'row',
              alignItems: 'flex-end',
              
            }}>
  
          <Text style={{fontSize: 32, fontWeight: 'bold',color:'green', marginTop:100}}>Hello Plant!</Text>
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

            
            <Text style={{fontSize: 22, fontWeight: 'bold'}}>FCCU Spring 2022 FYP</Text>


          </View>
            <View>
                <Text style={style.textStyle } style={{marginHorizontal: 20, fontWeight: 'bold'}} >
                Group Members
                </Text>
                </View>
                <View>
                <Text style={style.textStyle } style={{marginHorizontal: 80}}>
                'Moeel Ashraf - 21-11396 {"\n"}
                Osama Nadeem - 21-11379 {"\n"}
                Saad Khan - 21-11272{"\n"}
                </Text>

                <Text style={style.textStyle } style={{marginHorizontal: 20, fontWeight: 'bold'}} >
                Project Advisors
                </Text>
                </View>
                <View>
                <Text style={style.textStyle } style={{marginHorizontal: 80}}>
                'Maria Taimur - Primary Advisor {"\n"}
                Fakhir Shaheen- Secondary Advisor {"\n"}
                </Text>

                <Text style={style.textStyle } style={{marginHorizontal: 20, fontWeight: 'bold'}} >
                Introduction
                </Text>
                </View>
                <View>
                <Text style={style.textStyle } style={{marginHorizontal: 20}}>
                When starting a hoppy of gardening people can be easily overwhelmed by the numerous amounts of different and unique flowers. Apart from that they might not even know the name of the flower or know any details regarding the growing or maintenance of that flower. This is where our app will help make the gardening life easier, our app will allow the user to easily capture a photo of the flower and get the species name and all the accompanying information in a clean user interface. Users will also be able to favorite flowers, so that they can make a list of the flowers in their garden so they can have an easy access of information for all the plants they have.
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
      marginBottom: -500,
      borderRadius: 20,
      marginTop: 10,
      paddingTop: 25,
      paddingBottom: 10,
    },
    IconStyle: {
      marginTop: 20,
      marginLeft: 20,
      flexDirection: 'column',
      justifyContent: 'space-between',
      // alignItems: "center",
    },

    textStyle: {
      color: 'grey',
      fontSize: 16,
      lineHeight: 22,
      marginBottom: 10,
      marginTop: 10,
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

export default InfoScreen;
