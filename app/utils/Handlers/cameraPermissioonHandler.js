import { PermissionsAndroid } from 'react-native';

export default async function cameraPermissionHandler() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.warn(err);
  }
}

// {
//   title: 'Allow Camera Access',
//   message: 'App wants you acces your Camera',
//   buttonNeutral: 'Ask Me Later',
//   buttonNegative: 'Cancel',
//   buttonPositive: 'OK'
// }
