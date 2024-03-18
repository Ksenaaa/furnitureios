import { ColorValue } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

interface Props {
    name: string;
    size: number;
    color: number | ColorValue | undefined;
    disabled?: boolean;
}

export const CustomIcon = (props: Props) => {
    return <Feather {...props} />;
};
