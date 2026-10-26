# Inventory Management System

A modular TypeScript application for managing products and inventory stock, with input validation and custom error handling.

## Files

- `models.ts` — Defines the Product interface and generic Repository contract.
- `errors.ts` — Provides custom error classes for validation and missing resources.
- `inventory-service.ts` — Implements product CRUD operations, search, stock updates, and low-stock filtering.
- `main.ts` — Demonstrates inventory operations, asynchronous methods, and error handling.

## Features
- Add, retrieve, update, and delete products
- Search products by name or category
- Update stock quantities
- Identify low-stock products
- Validate user input
- Handle errors with custom error classes

## Concepts Practiced
- Interfaces and generics
- Classes and encapsulation
- Inheritance and custom errors
- CRUD operations
- Array methods
- ES module imports and exports
- Async/await and Promises
- Type-safe error handling

## Current Limitations
- Data is stored in memory and resets when the application restarts.
- No database or graphical interface is included.

## Future Improvements
- Database integration
- Automated unit tests
- REST API integration
- Web-based dashboard

## Technology
TypeScript

