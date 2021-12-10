import React, { createContext, useContext } from "react";
import { IReview } from "../Interfaces/IReview";
import reviews from "../Mockup/reviewMockUp";


export type ReviewContextType = {
    review?: IReview[] | any,
    setReview: (reviewList: IReview)=> void
};

const defaultContext = {
    review: reviews,
    setReview: (reviewList: IReview) => {}
}

type ReviewContextProperties = {
    review?: IReview[] | any,
    setReview: (reviewList: IReview) => void
};

export const ReviewContext = createContext<ReviewContextType>(defaultContext);

export const ReviewProvider: React.FC<ReviewContextProperties> = ({ children, review, setReview }) => {
    return (
        <ReviewContext.Provider value={{review, setReview}}>
            {children}
        </ReviewContext.Provider>
    );
};

export const useReviewContext = () => {
    const { review, setReview } = useContext(ReviewContext);
    return { review, setReview };
}