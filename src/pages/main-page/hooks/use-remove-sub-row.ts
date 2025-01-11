import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store.ts";
import { Automakers } from "../../types.ts";
import { automakersSliceActions } from "../../../store/automakers/automakers-slice.ts";

export const useRemoveSubRow = (automakersList: Automakers[]) => {
  const dispatch = useDispatch<AppDispatch>();

  const removeSubRow = (subRowIdToDelete: string, parentId?: string) => {
    const newData = JSON.parse(JSON.stringify(automakersList));

    const removeSubRowRecursive = (rows: Automakers[]): boolean => {
      for (let i = 0; i < rows.length; i++) {
        if (rows[i].id === parentId) {
          const subRowIndex = rows[i].subRows?.findIndex(
            (subRow) => subRow.id === subRowIdToDelete,
          );
          if (subRowIndex !== undefined && subRowIndex !== -1) {
            rows[i]?.subRows?.splice(subRowIndex, 1);
            return true;
          }
        }
        const subrows = rows[i].subRows || [];
        if (removeSubRowRecursive(subrows)) {
          return true;
        }
      }
      return false;
    };

    removeSubRowRecursive(newData);
    dispatch(automakersSliceActions.updateAutomaker(newData));
  };
  return { removeSubRow };
};
