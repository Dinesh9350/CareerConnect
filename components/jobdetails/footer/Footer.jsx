import React from 'react'
import {View, Text, TouchableOpacity, Image, Linking} from 'react-native'
import { COLORS, icons, SIZES } from "../../../constants";
import styles from './footer.style'

const JobFooter = ({url}) => {
  return (
    <View style={styles.container}>

        <TouchableOpacity style={styles.likeBtn}>
            <Image source={icons.heartOutline} resizeMode={'contain'} style={styles.likeBtnImage} />

        </TouchableOpacity>
        <TouchableOpacity style={styles.applyBtn}>
            <Text
                style={styles.applyBtnText}
                onPress={()=> Linking.openURL(url)}
            >
                Apply for job
            </Text>

        </TouchableOpacity>
    </View>
  )
}

export default JobFooter