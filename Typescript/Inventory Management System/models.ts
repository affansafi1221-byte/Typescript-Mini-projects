
export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: string;
}

export interface Repository<T extends { id: number }> {
  getAll(): T[];
  getById(id: number): T | undefined;
  add(item: T): void;
  update(id: number, item: T): boolean;
  delete(id: number): boolean;
}
