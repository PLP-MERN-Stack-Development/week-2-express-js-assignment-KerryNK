# 🚂 Express.js Product Inventory Management System

A RESTful API built with Express.js for managing product inventory, featuring CRUD operations, custom middleware, error handling, filtering, pagination, and search.

## 🚀 Features

- CRUD for Products: Create, read, update, and delete products.
- Stock Tracking: Track product availability with `inStock`.
- Filtering: Filter products by category.
- Search: Search products by name.
- Pagination: Paginate product listings.
- Statistics: Get product counts by category.
- Middleware: Custom logger, API key authentication, and validation.
- Error Handling: Global error handler and custom error classes.

## 🛠️ Getting Started

1. clone the repository:
   `sh
   git clone <your-repo-url>
   cd week-2-express-js-assignment-KerryNK
   `

2. Install dependencies:
   `sh
   npm install
   `

3. Set up environment variables:
   - Copy `.env.example` to `.env` and fill in your API key.

4. Run the server:
   `sh
   npm start
   `
   The server will run on [http://localhost:3000](http://localhost:3000) by default.

## 📦 API Endpoints

| Method | Endpoint                  | Description                        |
|--------|---------------------------|------------------------------------|
| GET    | `/api/products`           | List all products (supports filtering, search, pagination) |
| GET    | `/api/products/:id`       | Get a product by ID                |
| POST   | `/api/products`           | Create a new product               |
| PUT    | `/api/products/:id`       | Update an existing product         |
| DELETE | `/api/products/:id`       | Delete a product                   |
| GET    | `/api/products/stats`     | Get product statistics             |

### Query Parameters for `/api/products`

- `category`: Filter by category (e.g., `/api/products?category=Electronics`)
- `search`: Search by product name (e.g., `/api/products?search=phone`)
- `page`: Page number for pagination (e.g., `/api/products?page=2`)
- `limit`: Number of items per page (e.g., `/api/products?limit=5`)

## 📝 Example Requests

Create a Product

`http
POST /api/products
Content-Type: application/json
x-api-key: [your-api-key]

{
  "name": "Laptop",
  "description": "A powerful laptop",
  "price": 1200,
  "category": "Electronics",
  "inStock": true
}
`

Get Products (filtered, paginated)

`http
GET /api/products?category=Electronics&page=1&limit=2
x-api-key: <your-api-key>
`
Search Products**

```http
GET /api/products?search=laptop
x-api-key: <your-api-key>
```

Get Product Statistics

`http
GET /api/products/stats
x-api-key: <your-api-key>
`

## 🛡️ Middleware

- Logger: Logs request method, URL, and timestamp.
- Authentication: Checks for a valid API key in headers (`x-api-key`).
- Validation: Ensures product data is valid on create/update.

## ⚠️ Error Handling

- Returns appropriate HTTP status codes and error messages.
- Handles validation, authentication, and not found errors.

## 📂 Project Structure

`
.
├── controllers/
├── middleware/
├── models/
├── routes/
├── .env.example
├── server.js
└── README.md
`

## 🌐 Resources

- [Express.js Documentation](https://expressjs.com/)
- [RESTful API Design](https://restfulapi.net/)
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

## ✅ Submission

- Complete all endpoints and middleware.
- Document your API and provide request/response examples.
- Push your code to GitHub
