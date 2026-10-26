
import type { Product, Repository } from "./models";
import { ValidationError, NotFoundError } from "./errors";

class InMemoryRepository<T extends { id: number }>
  implements Repository<T> {
  private items: T[] = [];

  getAll(): T[] {
    return [...this.items];
  }

  getById(id: number): T | undefined {
    return this.items.find(item => item.id === id);
  }

  add(item: T): void {
    this.items.push(item);
  }

  update(id: number, updated: T): boolean {
    const index = this.items.findIndex(item => item.id === id);

    if (index === -1) return false;

    this.items[index] = updated;
    return true;
  }

  delete(id: number): boolean {
    const index = this.items.findIndex(item => item.id === id);

    if (index === -1) return false;

    this.items.splice(index, 1);
    return true;
  }
}

export class InventoryService {
  private repository = new InMemoryRepository<Product>();
  private nextId = 1;

  addProduct(
    name: string,
    price: number,
    stock: number,
    category: string
  ): Product {
    if (!name.trim() || !category.trim()) {
      throw new ValidationError(
        "Product name and category are required."
      );
    }

    if (!Number.isFinite(price) || price <= 0) {
      throw new ValidationError("Price must be positive.");
    }

    if (!Number.isInteger(stock) || stock < 0) {
      throw new ValidationError(
        "Stock must be a non-negative integer."
      );
    }

    const product: Product = {
      id: this.nextId++,
      name: name.trim(),
      price,
      stock,
      category: category.trim()
    };

    this.repository.add(product);
    return product;
  }

  getProduct(id: number): Product {
    const product = this.repository.getById(id);

    if (!product) {
      throw new NotFoundError(`Product ${id} not found.`);
    }

    return product;
  }

  async getProducts(): Promise<Product[]> {
    return this.repository.getAll();
  }

  searchProducts(keyword: string): Product[] {
    const query = keyword.trim().toLowerCase();

    if (!query) {
      throw new ValidationError("Search keyword is required.");
    }

    return this.repository.getAll().filter(product =>
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    );
  }

  updateStock(id: number, quantity: number): Product {
    if (!Number.isInteger(quantity) || quantity === 0) {
      throw new ValidationError(
        "Quantity must be a non-zero integer."
      );
    }

    const product = this.getProduct(id);
    const newStock = product.stock + quantity;

    if (newStock < 0) {
      throw new ValidationError("Insufficient stock.");
    }

    const updated = { ...product, stock: newStock };
    this.repository.update(id, updated);

    return updated;
  }

  deleteProduct(id: number): void {
    this.getProduct(id);

    if (!this.repository.delete(id)) {
      throw new NotFoundError("Unable to delete product.");
    }
  }

  getLowStockProducts(limit = 5): Product[] {
    if (!Number.isInteger(limit) || limit < 0) {
      throw new ValidationError(
        "Stock limit must be a non-negative integer."
      );
    }

    return this.repository.getAll().filter(
      product => product.stock <= limit
    );
  }
}
