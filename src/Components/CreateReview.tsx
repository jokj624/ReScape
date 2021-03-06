import React, { useState, useCallback } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { ICreate, IReview } from "../Interfaces/IReview";
import { styles } from "../Style/styles";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from "react-native-gesture-handler";
import { useStarArray } from "../Hook/useStarArray";
import { useDifficultyArray } from "../Hook/useDifficultyArray";
import { useReviewContext } from "./ReviewContext";

const CreateReview : React.FC<ICreate> = () => {
    const [starColor, changeStarColor] = useStarArray();
    const [difficultyColor, changeDifficultyColor] = useDifficultyArray();
    const [starCount, setStarCount] = useState<number>(0);
    const [difficultyNum, setDifficultyNum] = useState<number>(0);
    const [newReview, updateNewReview] = useState<IReview>({
        id: 'jobchae', name: '', location: '', star: 0, reviewContent: '', difficulty: 0, like: false,
    });
    const { setReview } = useReviewContext();
    const {  name, location, reviewContent } : IReview = newReview;

    const stars = starColor.map((item, index) => {
        return (
            <TouchableOpacity key={index} onPress={() => { setStarCount(index); changeStarColor(index); }}>
                <Icon name="star" color={item} size={40}/>
            </TouchableOpacity>
        );
    });

    const difficulties = difficultyColor.map((item, index) => {
        return (
            <TouchableOpacity key={index} onPress={() => { setDifficultyNum(index); changeDifficultyColor(index); }}>
                <Icon name="circle" color={item} size={60} />
            </TouchableOpacity>
        )
    });

    const onChange = (name: string, value: any) => {
        const nextInputs = {
            ...newReview,
            [name]: value,
        }
        updateNewReview(nextInputs);
    };

    const onReset = () => {
        const resetInputs = {
            id: 'jobchae', 
            name: '', 
            location: '', 
            star: 0, 
            reviewContent: '', 
            difficulty: 0, 
            like: false,
        };
        updateNewReview(resetInputs);
        changeStarColor(0);
        changeDifficultyColor(0);
    };

    const pressInput = useCallback(() => {
        if (newReview.name != '' && newReview.location != '' && newReview.reviewContent != '') {
            newReview.difficulty = difficultyNum;
            newReview.star = starCount;
            setReview(newReview);
            return onReset();
        }
        return Alert.alert("?????? ??????", "?????? ?????? ??????????????????!");

    }, [newReview, difficultyNum, starCount]);

    Icon.loadFont();
    
    return (
        <View style={styles.view}>
            <ScrollView horizontal={false}>
                <View style={styles.outView}>
                    <View style={styles.marginView} />
                    <Text style={styles.titleText}>????????? ????????? ???????????????</Text>
                </View>
                <View style={styles.outView}>
                    <Text style={styles.questionBox}>?????? ???????????? ?????????????</Text>
                    <TextInput 
                        value={name} 
                        onChangeText={value => onChange("name", value)}
                        placeholder="ex. ????????????" 
                        style={styles.inputBox} 
                    />
                </View>
                <View style={styles.outView}>
                    <Text style={styles.questionBox}>????????? ??????????????????</Text>
                    <TextInput 
                        placeholder="ex. ??????????????????"
                        onChangeText={value => onChange("location", value)}
                        value={location}
                        style={styles.inputBox} 
                    />
                </View>
                <View style={styles.outView}>
                    <Text style={styles.questionBox}>????????? ???????????????</Text>
                    <View style={styles.star}>
                        {stars}
                    </View>
                </View>
                <View style={styles.outView}>
                    <Text style={styles.questionBox}>???????????? ???????????????</Text>
                    <TextInput 
                        value={reviewContent}
                        onChangeText={value => onChange("reviewContent", value)}
                        placeholder="" 
                        style={styles.inputBox} 
                    />
                </View>
                <View style={styles.outView}>
                    <Text style={styles.questionBox}>???????????? ?????????????</Text>
                    <View style={styles.difficulty}>
                        {difficulties}
                    </View>
                    <View style={styles.difficultyText}>
                        <Text>?????? ??????</Text>
                        <Text>?????? ?????????</Text>
                    </View>
                </View>
                <View style={styles.outView}>
                    <TouchableOpacity style={styles.button} onPress={pressInput}>
                        <Text style={styles.buttonText}>?????? ??????</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};



export default CreateReview;