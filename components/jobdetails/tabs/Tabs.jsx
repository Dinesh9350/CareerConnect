import React from 'react'
import {View, Text, FlatList, TouchableOpacity} from 'react-native'

import styles from './tabs.style'
import {SIZES} from "../../../constants";
import Specifics from "../specifics/Specifics";
import {JobAbout} from "../../index";


const TabButton = ({name, activeTab, onHandleSearchType}) => (
    <TouchableOpacity style={styles.btn(name, activeTab)} onPress={onHandleSearchType}>
        <Text style={styles.btnText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
)

const DisplayTabContent = () => {
    switch (activeTab) {
        case 'About':
            return <JobAbout info={data[0].job_description ?? "No Data Provided"} />
        case 'Qualifications':
            return <Specifics
                title={'Qualifications'}
                points={data[0].job_highlights?.Qualifications ?? ['N/A']}
            />
        case 'Responsibilities':
            return <Specifics
                title={'Responsibilities'}
                points={data[0].job_highlights?.Responsibilities ?? ['N/A']}
            />
        default:
            break;
    }
}
const Tabs = ({tabs, activeTab, setActiveTab}) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={tabs}
                renderItem={({item}) => (
                    <TabButton
                        name={item}
                        activeTab={activeTab}
                        onHandleSearchType={() => setActiveTab(item)}

                    />

                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item}
                contentContainerStyle={{columnGap: SIZES.small/2}}
            />
        </View>
    )
}

export default Tabs