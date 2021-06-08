import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  ToastAndroid,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Metrics from '../../config/Metrics';
import Config from '../../config/index';
import Swiper from 'react-native-deck-swiper';
import Utils from '../../utils/index';
import * as authActions from '../../store/actions/auth';

import {useDispatch} from 'react-redux';

const DashboardScreen = props => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [timeout, setTimeouts] = useState([]);

  let t1;

  const [cards, setCards] = useState([
    require('../../../assets/one.png'),
    require('../../../assets/two.png'),
    require('../../../assets/three.png'),
    require('../../../assets/four.png'),
    require('../../../assets/five.png'),
  ]);
  const [cardIndex, setCardIndex] = useState(0);

  useEffect(() => {
    _getUSerData();
  }, []);

  _getUSerData = async () => {
    const userName = await Utils.MethodUtils.Storage.getData(
      Config.String.USER_NAME,
    );
    console.log('userName == > ' + userName);
    setName(userName);
  };

  const logoutHandler = async () => {
    await Utils.MethodUtils.Storage.removeData(Config.String.IS_LOGIN);
    dispatch(authActions.setUserSesson(false));
  };

  const renderCard = (card, index) => {
    return (
      <View style={styles.card}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image
            resizeMode="contain"
            style={{width: 280, height: 280}}
            source={card}
          />
        </View>
        <Text style={styles.text}>{index + 1}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Welcome {name}</Text>

      <View style={styles.lessonBody}>
        <Swiper
          onSwipedLeft={() => {
            ToastAndroid.showWithGravity(
              `${name} , you have rejected image`,
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
            );
          }}
          onSwipedRight={() => {
            ToastAndroid.showWithGravity(
              `${name} , you have selected image`,
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
            );
          }}
          onSwipedTop={() => onSwiped('top')}
          onSwipedBottom={() => onSwiped('bottom')}
          cards={cards}
          cardIndex={cardIndex}
          onSwiped={cardIndex => {
            setCardIndex(cardIndex);
          }}
          cardVerticalMargin={8}
          renderCard={renderCard}
          stackSize={3}
          stackSeparation={15}
          verticalSwipe={false}
          onTapCardDeadZone={5}
          dragEnd={() => {
            if (cardIndex == 3) {
              Alert.alert(
                Config.String.APP_NAME,
                'You have rated all the images. Thank You!',
                [
                  {
                    text: 'Ok',
                  },
                ],
              );
            } else if (cardIndex == 1) {
              var timeouts = [];

              timeouts.push(
                setTimeout(function () {
                  Alert.alert(
                    Config.String.APP_NAME,
                    'You have not active from last 5 seconds',
                    [
                      {
                        text: 'Ok',
                      },
                    ],
                  );
                }, 5000),
              );

              //clearTimeout(timeouts[0]);

              setTimeouts([...timeout, timeouts]);
            }
          }}
          dragStart={() => {
            for (var i = 0; i < timeout.length; i++) {
              clearTimeout(timeout[i]);
            }
            //setTimeouts([]);
          }}
          overlayLabels={{
            bottom: {
              title: 'BLEAH',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              },
            },
            left: {
              title: 'NOPE',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: -30,
                },
              },
            },
            right: {
              title: 'LIKE',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: 30,
                },
              },
            },
            top: {
              title: 'SUPER LIKE',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              },
            },
          }}
          animateOverlayLabelsOpacity
          animateCardOpacity
          swipeBackCard></Swiper>
      </View>
      <View style={{width: '100%'}}>
        <TouchableOpacity style={styles.loginBtn} onPress={logoutHandler}>
          <Text style={styles.loginText}>LOGOUT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: (Metrics.screenWidth * 25) / 375,
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontFamily: Config.Theme.LARSSEIT_BOLD,
    fontSize: 25,
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  lessonBody: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  card: {
    height: '70%',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent',
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent',
  },
  loginBtn: {
    width: '70%',
    backgroundColor: Config.Theme.COLOR_ACCENT,
    fontFamily: Config.Theme.LARSSEIT,
    borderRadius: 25,
    height: 50,
    marginLeft: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
});

export default DashboardScreen;
