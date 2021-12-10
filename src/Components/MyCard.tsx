import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { styles } from "../Style/styles";
import { useReviewContext } from "./ReviewContext";
import { IReview } from "../Interfaces/IReview";
const MyCard = () => {
    const [count, setCount] = useState<Number>(0);
    const { review } = useReviewContext();

    useEffect(() => {
        let i = 0;
        review.map((item: IReview, index: (React.Key | null | undefined) & Number) => {
            if (item.id === "jobchae") {
                i++;
            }
        });
        setCount(i);
    }, [review]);
    
    return (    
        <View style={styles.cardBox}>
            <View style={styles.cardHeaderBox}>
                <Text style={styles.cardHeader}>🔨</Text>
            </View>
            <View style={styles.cardTextBox}>
                <Text style={[styles.cardText, { fontSize: 13, color: '#545454' }]}>jobchae님의{'\n'}
                    <Text style={[styles.cardText, { fontSize: 16 }]}>
                        총 방탈출 횟수
                        <Text style={[styles.cardText, { fontSize: 16, fontWeight: "bold", color: '#6B8FF9' }]}> {count}회</Text>
                    </Text>
                </Text>
            </View>
        </View>
    );
};

export default MyCard;