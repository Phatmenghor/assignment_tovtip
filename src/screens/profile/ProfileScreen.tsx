import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, Alert, TouchableOpacity} from 'react-native';
import {styles} from './ProfileStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DisplayGender from './compent/DisplayGender';
import Loading from '../../components/Loading';
import {getUserProfile} from '../../api/userService';
import {User} from '../../models/apiResponse';
import {clearToken} from '../../utils/tokenManager';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {colors} from '../../constants/color';
import {routeName} from '../../constants/routeName';

const ProfileScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userData, setUserData] = useState<User | null>(null);
  const navigation = useNavigation();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setIsLoading(true);
    const response = await getUserProfile();
    setUserData(response);
    setIsLoading(false);
  }

  const handleLogout = () => {
    Alert.alert(
      'Log Out',
      'Are you sure you want to log out?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: async () => {
            await clearToken();
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{name: routeName.login}],
              }),
            );
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flexCon}>
        <View style={styles.wrapBody}>
          <Text style={styles.titlePF}>Profile</Text>

          {isLoading ? (
            <Loading />
          ) : (
            <View style={styles.flexCon}>
              <View style={styles.rowName}>
                <View style={styles.viewDisPlay}>
                  <Text style={styles.txtDisplay}>{userData?.firstName}</Text>
                </View>
                <View style={styles.viewDisPlay}>
                  <Text style={styles.txtDisplay}>{userData?.lastName}</Text>
                </View>
              </View>
              <View style={styles.emailDisPlay}>
                <Icon name={'email'} size={24} color={colors.black} />
                <Text style={styles.txtDisplay}>{userData?.email}</Text>
              </View>
              <View style={styles.emailDisPlay}>
                <Icon name={'email'} size={24} color={colors.black} />
                <Text
                  style={
                    styles.txtDisplay
                  }>{`+${userData?.countryCode} ${userData?.phone}`}</Text>
              </View>
              <View style={styles.rowGen}>
                <Text style={styles.txtGen}>Gender</Text>
                <View style={styles.wrapGender}>
                  <DisplayGender gender="Male" selected={userData?.gender} />
                  <DisplayGender gender="Female" selected={userData?.gender} />
                </View>
              </View>
            </View>
          )}
        </View>
        <TouchableOpacity onPress={handleLogout} style={styles.btnLogout}>
          <Text style={styles.txtLog}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
