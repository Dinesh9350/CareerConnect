import React from 'react'
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native'

import styles from './welcome.style'
import {SIZES, icons} from "../../../constants";
import {useRouter} from "expo-router";

const Welcome = () => {
  const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
          <Text style={styles.userName}>Welcome</Text>
          <Text style={styles.welcomeMessage}>Find you perfect job</Text>
      </View>
        <View style={styles.searchContainer}>
            <View style={styles.searchWrapper}>
                <TextInput
                    style={styles.searchInput}
                    value={''}
                    onChange={()=>{}}
                    placeholder={'What are you looking for ?'}
                />
                <TouchableOpacity style={styles.searchBtn} onPress={()=>{}}>
                    <Image
                        source={icons.search}
                        resizeMode={'contain'}
                        style={styles.searchBtnImage}
                    />
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default Welcome