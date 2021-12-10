import React, { useCallback } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { styles } from "../Style/styles";
import MyCard from "./MyCard";
import { useReviewContext } from "./ReviewContext";
import { IReview } from "../Interfaces/IReview";
import ShowReview from "./ShowReview";

const MyReview = () => {
    const { review } = useReviewContext();
    
    const showMyReview = review.map(((item: IReview, index: (React.Key | null | undefined) & Number) => {
        if (item.id === "jobchae") {
            return <ShowReview key={index} review={item} />
        }
    }));

    return (
        <View style={styles.view}>  
            <ScrollView horizontal={false}>
                <View style={styles.outView}>
                    <MyCard />
                </View>
                {showMyReview}
            </ScrollView>
        </View>
    );
};



export default MyReview;