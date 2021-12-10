import { Dispatch, SetStateAction } from "react";

type IReview = {
    id: string,
    name: string,
    location: string,
    star: number,
    reviewContent: string,
    difficulty: number,
    like?: boolean

}

type ICreate = {
    review: IReview,
    setReview: Dispatch<SetStateAction<IReview[]>>
}
export type { IReview, ICreate };