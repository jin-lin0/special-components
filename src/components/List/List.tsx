import InfiniteScroll from "../InfiniteScroll/InfiniteScroll";
import { StyledItem, StyledList } from "./List.style";

export interface ListItem {
  id: string | number;
  [key: string]: any;
}

export interface ListProps<T> {
  data: T[];
  itemKey?: keyof T | ((item: T) => string);
  itemValue?: keyof T | ((item: T) => string);
  onItemClick?: (item: T, index: number) => void;
  step?: number;
  showIndex?: boolean;
}

const List = <T extends ListItem>({
  data,
  itemKey,
  itemValue,
  onItemClick,
  step = 10,
  showIndex = true,
}: ListProps<T>) => {
  const listData = data || [];

  return (
    <StyledList>
      <InfiniteScroll items={listData} step={step}>
        {(item, index) => (
          <StyledItem
            key={itemKey ? item[itemKey as keyof T] : index}
            onClick={onItemClick && (() => onItemClick(item, index))}
          >
            {showIndex && `${index + 1}. `}
            {itemValue ? item[itemValue as keyof T] : item}
          </StyledItem>
        )}
      </InfiniteScroll>
    </StyledList>
  );
};

export default List;
