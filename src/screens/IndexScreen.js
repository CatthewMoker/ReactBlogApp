import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons'; 
import { Directions } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons'; 
// import BlogContext from '../context/BlogContext';

const IndexScreen = ({ navigation }) => {
    const {state, deleteBlogPost } = useContext(Context)
    return (
        <View>
            <FlatList 
            data={state}
            keyExtractor={(blogPost)=>blogPost.title}
            renderItem={({ item }) => {
                return (
                <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                    <View style={styles.row}>
                        <Text style={styles.title}>{item.title} - {item.id}</Text>
                        <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                            <Feather style={styles.icon}name="trash-2" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
                );
            }}
            />
            {/* <Text>{value}</Text> */}
        </View>
    );
};

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
         headerRight: () => (
         <TouchableOpacity onPress={() => navigation.navigate('Create')}>
             <AntDesign style={{color:'purple', paddingRight: 10}} name="pluscircleo" size={30} />
             </TouchableOpacity>
             )
    };
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18,
    },
    icon: {
        fontSize: 24
    }
});

export default IndexScreen;