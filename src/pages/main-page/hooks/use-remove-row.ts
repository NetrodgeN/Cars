import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store.ts";
import { Automakers } from "../../types.ts";
import { automakersSliceActions } from "../../../store/automakers/automakers-slice.ts";

export const useRemoveRow = (automakersList: Automakers[]) => {
  const dispatch = useDispatch<AppDispatch>();

  const removeRow = (rowIdToDelete: string | string[], parentId?: string) => {
    const newData = JSON.parse(JSON.stringify(automakersList)) as Automakers[];

    const removeRowRecursive = (rows: Automakers[], idToDelete: string): boolean => {
      for (let i = 0; i < rows.length; i++) {
        /** Проверяем что на то, что это не подстрока */
        if (rows[i].id === idToDelete) {
          rows.splice(i, 1);
          return true;
        }

        /** Если это подстрока */
        if (rows[i].id === parentId) {
          const subRowIndex = rows[i].subRows?.findIndex(
            (subRow) => subRow.id === idToDelete,
          );

          // Если подстрока найдена, удаляем её
          if (subRowIndex !== undefined && subRowIndex !== -1) {
            rows[i]?.subRows?.splice(subRowIndex, 1);
            return true;
          }
        }

        // Рекурсивно проверяем подстроки
        const subrows = rows[i].subRows || [];
        if (removeRowRecursive(subrows, idToDelete)) {
          return true;
        }
      }
      return false;
    };

    // Если rowIdToDelete - это массив, удаляем каждый элемент
    if (Array.isArray(rowIdToDelete)) {
      rowIdToDelete.forEach(id => removeRowRecursive(newData, id));
    } else {
      // Если это строка, просто вызываем функцию
      removeRowRecursive(newData, rowIdToDelete);
    }

    dispatch(automakersSliceActions.updateAutomaker(newData));
  };
  return { removeRow };
};
