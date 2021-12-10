import React, { useState, useCallback } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from "react-native-paper";
import { IReview } from "../Interfaces/IReview";
import difficulty from "../Mockup/difficulty";
import { styles } from "../Style/styles";
import { useStarArray } from "../Hook/useStarArray";
import { useEffect } from "react";

export type IProps = {
    review: IReview,
    key: Number
};

const ShowReview: React.FC<IProps> = ({ review }) => {
    const [starColor, changeStarColor] = useStarArray();
    const [heartImage, updateHeart] = useState<string>(!review.like ? "heart-outline" : "heart");
    Icon.loadFont();

    const modifyLike = useCallback(() => {
        if (review.like) {
            updateHeart("heart-outline");
            review.like = false;
        }
        else {
            updateHeart("heart");
            review.like = true;
        }
    }, []);

    useEffect(() => {
        changeStarColor(review.star);
    }, []);

    const stars = starColor.map((item, index) => {
        return  <Icon name="star" color={item} size={20} key={index}/>
    });

    return (
        <View style={styles.outView}>
            <View style={styles.innerView}>
                <Text style={styles.titleText}>{review.name}</Text>
                <Text style={styles.smallText}>{review.location}</Text>
            </View>
            <View style={styles.innerView}>
                <View style={styles.rowFlexStart}>
                    {stars}
                    <Text style={[styles.greyText, {marginLeft: 10}]}>{difficulty[review.difficulty]}</Text>
                </View>
                <Text style={styles.greyText}>{review.id}</Text>
            </View>
            <View style={styles.innerView}>
                <Text style={styles.content}>{review.reviewContent}</Text>
                <TouchableOpacity onPress={modifyLike}>
                    <Icon name={heartImage} size={24} color={Colors.red300} />
                </TouchableOpacity>
            </View>
            <View style={styles.line}></View>
        </View>
    );
}

export default ShowReview;
