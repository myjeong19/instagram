import { Dimensions } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const { width, height } = Dimensions.get('window');

const isSmall = width < 375;

const guidelineBaseWidth = () => {
  if (isSmall) {
    return 330;
  }

  return 350;
};

export const horizontalScale = (size: number): number => (width / guidelineBaseWidth()) * size;

const guidelineBaseHight = () => {
  if (isSmall) {
    return 550;
  } else if (width > 410) {
    return 620;
  }
  return 680;
};

export const verticalScale = (size: number): number => (height / guidelineBaseHight()) * size;

const guidelineBaseFonts = () => {
  if (width > 410) {
    return 430;
  }
  return 400;
};

export const scaleFontSize = (size: number): number => Math.round((width / guidelineBaseFonts()) * size);
