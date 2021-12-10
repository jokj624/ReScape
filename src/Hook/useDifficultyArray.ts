import { useState, useCallback } from "react";


export const useDifficultyArray = (initialValue: Array<string> = ["#6B8FF9", "#E9E9E9", "#E9E9E9", "#E9E9E9", "#E9E9E9"],
    deps: any[] = []): [Array<string>, (index: number) => void] => {
    const [difficultyColor, updateDifficultyColor] = useState(initialValue);
    const press = useCallback((index: number) => {
        const newStarArray: Array<string> = [];
        let i = 0;
        for (; i <= index; i++) {
            newStarArray.push("#6B8FF9");
        }
        i = index + 1;
        for (; i < 5; i++) {
            newStarArray.push("#E9E9E9");
        }
        updateDifficultyColor(newStarArray);
    }, []);
    return [difficultyColor, press];
}