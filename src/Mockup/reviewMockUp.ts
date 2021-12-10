import { IReview } from "../Interfaces/IReview";

const reviews : Array<IReview> = [
    {
        id: "jobchae",
        name: "화생설화",
        location: "홍대 비트포비아 던전 101",
        star: 3,
        reviewContent: "영업용으로 강추하는 방탈출, 장치 스케일이 크고, 생긴지 얼마 안된 방탈출이라 장치 오류도 적습니다.",
        difficulty: 2,
        like: false
    },
    {
        id: "지니",
        name: "Nerd",
        location: "강남 키이스케이프 더오름",
        star: 3,
        reviewContent: "왜 예약이 어려운지 알 것 같은 방탈출. 특정 구간 연출이 정말 잘 되어있습니다.",
        difficulty: 3,
        like: true,
    },
    {
        id: "혀니",
        name: "US",
        location: "키이스케이프 우즈라이크",
        star: 4,
        reviewContent: "믿고 가는 키이스케이프 신테마. 장치도 많고 스토리도 감동적이다. 숙련자 추천",
        difficulty: 4,
        like: false
    },
    {
        id: "부니채",
        name: "하이팜",
        location: "싸인이스케이프",
        star: 3,
        reviewContent: "잠시나마 귀농하고 싶은 마음이 생기는 방탈출. 소소한 디테일들이 살아있다. 초보자들도 가능",
        difficulty: 2,
        like: false
    }
];

export default reviews;