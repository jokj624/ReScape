import React from "react";
import { View, ScrollView } from "react-native";
import ShowReview from "./ShowReview";
import { IReview } from "../Interfaces/IReview";
import { styles } from "../Style/styles";
import { useReviewContext } from "./ReviewContext";

const Home = () => {
    const { review } = useReviewContext();
    const showList = review.map((item: IReview, index: (React.Key | null | undefined) & Number) => {
        return <ShowReview key={index} review={item} />
    });
    return (
        <View style={styles.view}>
            <ScrollView horizontal={false}>
                {showList}
           </ScrollView>
        </View>
    );
};

export default Home;