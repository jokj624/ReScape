import { useState, useCallback } from "react";


export const useStarArray = (initialValue: Array<string> = ["#F8E437", "#D8D7D3", "#D8D7D3", "#D8D7D3", "#D8D7D3"],
    deps: any[] = []): [Array<string>, (index: number) => void] => {
        const [starColor, updateStarColor] = useState(initialValue);
        const press = useCallback((index: number) => {
            const newStarArray: Array<string> = [];
            let i = 0;
            for (; i <= index; i++) {
                newStarArray.push("#F8E437");
            }
            for (i = index + 1; i < 5; i++) {
                newStarArray.push("#D8D7D3");
            }
            updateStarColor(newStarArray);
        }, []);
        return [starColor, press];
}