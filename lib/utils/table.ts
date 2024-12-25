// Table utility functions
export function getPaginatedItems<T>(
  items: T[],
  page: number,
  itemsPerPage: number
): T[] {
  return items.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );
}

export function getTotalPages(totalItems: number, itemsPerPage: number): number {
  return Math.ceil(totalItems / itemsPerPage);
}