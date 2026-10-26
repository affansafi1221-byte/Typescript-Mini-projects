
import { InventoryService } from "./inventoryservice";
import { AppError } from "./errors";

async function main(): Promise<void> {
  const inventory = new InventoryService();

  try {
    console.log("--- Inventory Management System ---");

    const laptop = inventory.addProduct(
      "Laptop",
      120000,
      10,
      "Electronics"
    );

    inventory.addProduct(
      "Keyboard",
      2500,
      3,
      "Accessories"
    );

    inventory.addProduct(
      "Mouse",
      1200,
      0,
      "Accessories"
    );

    console.log("\nAll Products:");
    console.table(await inventory.getProducts());

    console.log("\nSearch Results:");
    console.table(inventory.searchProducts("accessories"));

    console.log("\nStock Update:");
    console.log(inventory.updateStock(laptop.id, -2));

    console.log("\nLow Stock Products:");
    console.table(inventory.getLowStockProducts());

    console.log("\nTesting Error Handling:");

    try {
      inventory.updateStock(laptop.id, -100);
    } catch (error: unknown) {
      if (error instanceof AppError) {
        console.error(`${error.name}: ${error.message}`);
      } else {
        console.error("Unexpected error occurred.");
      }
    }

    console.log("\nFinal Inventory:");
    console.table(await inventory.getProducts());

  } catch (error: unknown) {
    if (error instanceof AppError) {
      console.error(`${error.name}: ${error.message}`);
    } else {
      console.error("An unexpected error occurred.");
    }
  }
}

main().catch((error: unknown) => {
  console.error("Application failed:", error);
});
