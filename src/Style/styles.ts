import { Dimensions, StyleSheet, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: 'white',
    },
    outView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop: height*0.01,
        marginLeft: width*0.05,
        marginRight: width*0.05,
        marginBottom: 0,
    },
    innerView: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: Platform.select({ ios: height*0.02, android: height*0.01}),
    },
    headerView: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#ECF2FF",
        justifyContent: "center",
    },
    text: {
        fontFamily: "NotoSans-Bold",
        fontWeight: "bold",
        fontSize: 20,
        color: "#6B8FF9",
        textAlign: "center",
    },
    titleText: {
        flex: 1,
        fontSize: 20,
        fontFamily: "NotoSansKR-Bold",
    },
    smallText: {
        fontSize: 13,
        fontFamily: 'NotoSansKR-Medium'
    },
    greyText: {
        fontSize: 13,
        fontFamily: 'NotoSansKR-Medium',
        color: '#8B8B8B',
        marginTop: Platform.select({ios: 0, android: -height*0.01})
    },
    content: {
        fontSize: 15,
        width: '70%',
        fontFamily: 'NotoSansKR-Regular',
    },
    line: {
        borderBottomColor: '#E9EBED',
        borderBottomWidth: 1,
        marginTop: '5%',
    },
    questionBox: {
        fontSize: 16,
        width: '70%',
        fontFamily: 'NotoSansKR-Medium',
        marginTop: Platform.select({ ios: height*0.03, android: height*0.01 })
    },
    inputBox: {
        width: '100%',
        height: height*0.05,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#CACDD1',
        paddingHorizontal: 10,
        marginTop: height*0.03,
    },
    star: {
        flex: 1,
        flexDirection: 'row',
        marginTop: height*0.03,
    },
    difficulty: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: height*0.03,
    },
    difficultyText: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: height * 0.01,
    },
    marginView: {
        marginTop: width*0.05,
    },
    rowFlexStart: {
        flex: 1,
        flexDirection: 'row',
    },
    button: {
        backgroundColor: '#FF855F',
        borderRadius: 10,
        width: '100%',
        height: height*0.07,
        marginTop: height*0.01,
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'NotoSansKR-Bold',
    },
    cardBox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: height*0.1,
        borderRadius: 10,
        backgroundColor: 'white',
        marginTop: 10,
        ...Platform.select({
            ios: {
                shadowColor: '#8b8b8b',
                shadowOpacity: 0.5,
                shadowRadius: 3,
                shadowOffset: {
                    height: 3,
                    width: 3,
                },
            },
            android: {
                elevation: 8,
            },
        })
    },
    cardHeaderBox: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e5e5e5',
        width: width * 0.12,
        height: width * 0.12,
        borderRadius: 50,
    },
    cardHeader: {
        fontFamily: 'NotoSansKR-Bold'
    },
    cardTextBox: {
        flex: 0.7
    },
    cardText: {
        fontFamily: 'NotoSansKR-Medium',
    }
});