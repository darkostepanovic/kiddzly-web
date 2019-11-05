import { AsyncStorage } from 'react-native';
import authActions from '../actions';
import globalActions from '../../global/actions';
import ApiService from '../../../api';

const refreshToken = () => async dispatch => {
  try {
    const res = await ApiService.refreshToken();
    dispatch(authActions.auth.setToken(res.access));
  } catch (e) {
    throw e;
  }
};

const login = userData => async dispatch => {
  try {
    const res = await ApiService.userLogin(userData);
    await AsyncStorage.setItem('refreshToken', res.refresh);
    dispatch(authActions.auth.setToken(res.access));
  } catch (e) {
    throw e;
  }
};

const facebookLogin = fbClientId => async dispatch => {
  try {
    const fbResponse = await ApiService.facebookLogin('572283846513645');
    console.log('fbRes: ', fbResponse);
    const res = await ApiService.getFacebookToken(fbResponse.token);
    await AsyncStorage.setItem('refreshToken', res.data.refresh);
    dispatch(authActions.auth.setToken(res.data.access));
  } catch (e) {
    throw e;
  }
};

const googleLogin = (androidClientId, iosClientId) => async dispatch => {
  try {
    console.log('ovde');
    const googleResponse = await ApiService.googleLogin(
      '301805666429-d0jm1e1n7bv411obnkfsdam6l8td2p1p.apps.googleusercontent.com',
      '301805666429-q9br1bjj957qjr52ld3nd48sflv4d7im.apps.googleusercontent.com',
    );
    console.log('google res: ', googleResponse.accessToken);
    const res = await ApiService.getGoogleToken(googleResponse.accessToken);
    await AsyncStorage.setItem('refreshToken', res.data.refresh);
    dispatch(authActions.auth.setToken(res.data.access));
  } catch (e) {
    throw e;
  }
};

const verifyEmail = hash => async dispatch => {
  try {
    dispatch(authActions.auth.logout());
    const authToken = await ApiService.verifyEmail(hash);
    await AsyncStorage.setItem('refreshToken', authToken.refresh);
    dispatch(authActions.auth.setToken(authToken.access));
  } catch (e) {
    dispatch(globalActions.app.loading(false));
    console.log('verify error: ', e.response);
  }
};

const resetPassword = (password, hash) => async dispatch => {
  try {
    console.log('new password: ', password);
    const res = await ApiService.resetPassword(password, hash);
    await AsyncStorage.setItem('refreshToken', res.refresh);
    dispatch(authActions.auth.setToken(res.access));
    dispatch(authActions.auth.setResetPasswordHash(''));
  } catch (e) {
    console.log('Reset password error: ', e.response);
  }
};

export default {
  verifyEmail,
  refreshToken,
  login,
  facebookLogin,
  googleLogin,
  resetPassword,
};
