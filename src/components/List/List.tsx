import Box from "../Box/Box";
import InfiniteScroll from "../InfiniteScroll/InfiniteScroll";
import { StyledList } from "./List.style";

export interface ListProps<T> {
  data: T[];
  step?: number;
  renderItem?: (item: T, index: number) => React.ReactNode;
  split?: boolean;
}

const List = <T,>({
  data,
  step = 999,
  renderItem,
  split = true,
}: ListProps<T>) => {
  return (
    <StyledList>
      <InfiniteScroll items={data || []} step={step}>
        {(item, index) => (
          <Box key={index}>
            {renderItem && renderItem(item, index)}
            {split && index < data.length - 1 && (
              <div style={{ height: "1px", backgroundColor: "#ccc" }} /> // 分割线
            )}
          </Box>
        )}
      </InfiniteScroll>
    </StyledList>
  );
};

export default List;
