import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../Style/styles';

const Header = () => {
    return (
        <View style={styles.headerView}>
            <Text style={styles.text}>ReScape🔨</Text>
        </View>
    );
};

export default Header;
