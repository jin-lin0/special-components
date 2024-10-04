import { useState, useEffect, useRef } from "react";
import StyledVirtualList from "./VirtualList.style";

export interface VirtualListProps<T> {
  data: T[];
  renderItem: (item: T, index: number) => JSX.Element;
  getItemHeight: (index: number) => number;
  height: number;
  width: number;
  overscan?: number;
  split?: boolean;
}

const VirtualList = <T,>({
  data,
  renderItem,
  getItemHeight,
  height,
  width,
  overscan = 5,
  split = true,
}: VirtualListProps<T>) => {
  const [scrollTop, setScrollTop] = useState(0);
  const [offsets, setOffsets] = useState<number[]>([]);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateOffsets = () => {
      const heights: number[] = [];
      for (let i = 0; i < data.length; i++) {
        heights[i] = getItemHeight(i) + (heights[i - 1] || 0);
      }
      setOffsets(heights);
    };
    calculateOffsets();
  }, [data, getItemHeight]);

  const startIndex = offsets.findIndex((offset) => offset > scrollTop) - 1;
  const endIndex = offsets.findIndex((offset) => offset > scrollTop + height);

  const visibleItems = [];
  for (
    let i = Math.max(0, startIndex - overscan);
    i <= endIndex + overscan;
    i++
  ) {
    const top = i === 0 ? 0 : offsets[i - 1];
    const itemHeight = i === 0 ? offsets[0] : offsets[i] - offsets[i - 1];

    visibleItems.push(
      <div
        key={i}
        style={{
          position: "absolute",
          top: `${top}px`,
          height: `${itemHeight}px`,
          width: "100%",
        }}
      >
        {renderItem(data[i], i)}
        {split && i < data.length - 1 && (
          <div style={{ height: "1px", backgroundColor: "#ccc" }} />
        )}
      </div>
    );
  }

  return (
    <StyledVirtualList
      ref={listRef}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        overflowY: "auto",
        position: "relative",
      }}
      onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
    >
      <div
        style={{
          height: `${offsets[offsets.length - 1]}px`,
          position: "relative",
        }}
      >
        {visibleItems}
      </div>
    </StyledVirtualList>
  );
};

export default VirtualList;
