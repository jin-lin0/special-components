import { useCallback, useEffect, useRef, useState } from "react";

export interface InfiniteScrollProps<T> {
  items: T[];
  step: number;
  children: (item: T, index: number) => React.ReactNode;
}

const InfiniteScroll = <T,>({
  items = [],
  step = 10,
  children,
}: InfiniteScrollProps<T>) => {
  const [visibleItems, setVisibleItems] = useState<T[]>([]);
  const [page, setPage] = useState(1);
  const observerRef = useRef<HTMLDivElement | null>(null);
  const loadMoreItems = useCallback(() => {
    const nextItems = items.slice(0, page * step);
    setVisibleItems(nextItems);
  }, [items, page, step]);

  const checkSentinels = useCallback(() => {
    if (observerRef.current) {
      const rect = observerRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setPage((prevPage) => prevPage + 1);
      }
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      {
        root: null,
        rootMargin: "100px",
        threshold: 0.1,
      }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    loadMoreItems();
  }, [loadMoreItems]);

  useEffect(() => {
    checkSentinels();
  }, [visibleItems, checkSentinels]);

  return (
    <div>
      {visibleItems.map((item, index) => children(item, index))}

      {visibleItems.length < items.length && (
        <div ref={observerRef} style={{ height: "1px" }} />
      )}
    </div>
  );
};

export default InfiniteScroll;
