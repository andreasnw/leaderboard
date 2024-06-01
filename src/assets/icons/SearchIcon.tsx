import icon from '@src/styles/icons';
import Svg, {Circle, Path, SvgProps} from 'react-native-svg';

const SearchIcon = (props: SvgProps) => {
  return (
    <Svg
      width={props.width ?? icon.size.medium}
      height={props.height ?? icon.size.medium}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Circle
        cx={9.7659}
        cy={9.7659}
        r={8.98856}
        stroke={props.stroke ?? icon.color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.018 16.484L19.542 20"
        stroke={props.stroke ?? icon.color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default SearchIcon;
