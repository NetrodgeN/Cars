import {Automakers} from "../../types.ts";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../store/store.ts";
import {automakersSliceActions} from "../../../store/automakers/automakers-slice.ts";

export const useAddSubRow = (automakersList: Automakers[]) => {
    const dispatch = useDispatch<AppDispatch>();

    const addSubRow = (parentId: string, newSubRow: Automakers) => {
        const newData = JSON.parse(JSON.stringify(automakersList)) as Automakers[];

        const addSubRowRecursive = (rows: Automakers[]): boolean => {
            for (let i = 0; i < rows.length; i++) {
                if (rows[i].id === parentId) {
                    if (!rows[i].subRows) rows[i].subRows = [];
                    rows[i]?.subRows?.push(newSubRow);
                    return true;
                }
                const subrows = rows[i].subRows || [];
                if (addSubRowRecursive(subrows)) {
                    return true;
                }
            }
            return false;
        };

        addSubRowRecursive(newData);
        dispatch(automakersSliceActions.updateAutomaker(newData));
    };
    return {addSubRow}
};

