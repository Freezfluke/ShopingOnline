import {Dimensions} from 'react-native';

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const {width, height} = Dimensions.get('window');

interface SizeProps {
  size: number;
  factor?: number;
}

const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size;
const scale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (props: SizeProps) =>
  (height / guidelineBaseHeight) * props.size;
const normalize = (props: SizeProps) =>
  props.size + (scale(props.size) - props.size) * 0.5;

const moderateScale = (props: SizeProps) =>
  props.size + (horizontalScale(props.size) - props.size) * 0.5;
export {scale, verticalScale, horizontalScale, moderateScale, normalize};
