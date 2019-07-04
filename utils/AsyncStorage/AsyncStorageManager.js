import {AsyncStorage} from 'react-native';


export const _storeData = async () => {
    try {
      await AsyncStorage.setItem('Party', 'break it');
    } catch (error) {
      // Error saving data
    }
  };

export const _retrieveData = async () => {

    try {
      const value = await AsyncStorage.getItem('Party');
      if (value !== null) {
        // We have data!!
        alert(value);
      }

    } catch (error) {
      alert("django");
    }
  };




