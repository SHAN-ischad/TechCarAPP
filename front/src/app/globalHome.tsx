import { View } from 'react-native';
import GlobalBottom from '../components/organisms/globalBottom';
import BodyGlobalHome from '../components/screens/globalHomePages/body';
import { HeaderGlobalHome } from '../components/screens/globalHomePages/header';

export default function GlobalHome() {

    return (
        <View className="flex-1  items-center overflow-x-hidden overflow-y-scroll">
            {/* Header */}
            <HeaderGlobalHome />

            {/* body */}
            <BodyGlobalHome />

            {/* Bottom */}
            <GlobalBottom />
        </View>
    );
}