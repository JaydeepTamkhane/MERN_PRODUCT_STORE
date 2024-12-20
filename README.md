# MERN_PRODUCT_STORE  

A **MERN stack** application designed to manage products, allowing users to create, update, and view products seamlessly. The project demonstrates core full-stack development principles and provides a user-friendly interface with efficient backend management.  

## Features  
- **Home Page**: Displays a list of all products with their details.  
- **Add Product**: Enables users to add new products with relevant details.  
- **Update Product**: Allows users to modify product information.  
- **Responsive Design**: Styled using **Tailwind CSS** for a modern and clean UI.  
- **State Management**: Utilizes React Context API for efficient state handling.  
- **REST API Integration**: Backend APIs built using Express.js and connected to MongoDB.  

---

## Technologies Used  
### Frontend  
- **React**: Component-based UI framework.  
- **React Router**: Navigation and routing within the application.  
- **Tailwind CSS**: For responsive and consistent styling.  

### Backend  
- **Node.js**: Runtime environment for server-side code.  
- **Express.js**: Framework for building RESTful APIs.  
- **MongoDB**: NoSQL database for storing product information.  
- **Mongoose**: ODM for MongoDB for schema design and queries.  

---

## Installation and Setup  

### Prerequisites  
- [Node.js](https://nodejs.org/) installed on your system.  
- MongoDB set up locally or through a cloud service like [MongoDB Atlas](https://www.mongodb.com/atlas).  

### Steps  

#### 1. Clone the repository  
```bash  
git clone https://github.com/JaydeepTamkhane/MERN_PRODUCT_STORE.git  
cd MERN_PRODUCT_STORE  
```  

#### 2. Install dependencies for frontend and backend  
```bash  
cd backend  
npm install  
cd ../frontend  
npm install  
```  

#### 3. Set up environment variables  
Create a `.env` file in the `backend` directory and configure the following:  
```plaintext  
MONGO_URI=your_mongodb_connection_string  
PORT=5000  
```  

#### 4. Start the development servers  
- **Backend**:  
```bash  
cd backend  
npm run start  
```  
- **Frontend**:  
```bash  
cd frontend  
npm run dev  
```  

---

## Folder Structure  

```plaintext  
MERN_PRODUCT_STORE/  
├── backend/          # Backend code (Node.js + Express)  
│   ├── models/       # Mongoose models  
│   ├── routes/       # API routes for CRUD operations  
│   ├── server.js     # Entry point of the backend  
│   └── .env          # Environment variables  
├── frontend/         # Frontend code (React + Tailwind CSS)  
│   ├── src/  
│   │   ├── components/  # React components (Home, CreateProduct, etc.)  
│   │   ├── context/     # React Context API for state management  
│   │   ├── App.jsx      # Main React component  
│   │   └── main.jsx     # Entry point of the frontend  
│   └── vite.config.js   # Vite configuration  
├── images/           # Folder containing your screenshots
│   ├── home.png
│   ├── add-product.png
│   └── update-product.png
├── README.md         # Documentation file 
```  

---

## API Endpoints  

### Product Routes  
| Method | Endpoint           | Description                   |  
|--------|--------------------|-------------------------------|  
| GET    | `/api/products`    | Fetch all products            |  
| POST   | `/api/products`    | Add a new product             |  
| PUT    | `/api/products/:id`| Update an existing product    |  
| DELETE | `/api/products/:id`| Delete a product              |  

---

## Screenshots  

### 1. Home Page  
Displays a list of all available products:  
![Home Page](./images/home.png) 

### 2. Add Product Page  
Form to add a new product:  
![Add Product](./images/add-product.png)  

### 3. Update Product Page  
Interface to edit product details:  
![Update Product](./images/update-product.png) 

---

## Future Enhancements  
- Add **user authentication** for better access control.  
- Implement **search and filter** functionality for the product list.  
- Integrate **image uploads** for product images.  
- Add **pagination** for large product datasets.  

---

## Author  
**Jaydeep Tamkhane**  
- GitHub: [@JaydeepTamkhane](https://github.com/JaydeepTamkhane)  
- LinkedIn: [Jaydeep Tamkhane](https://www.linkedin.com/in/jaydeep-lilachand-tamkhane)  

Feel free to fork and contribute to this project! 😊  

--- 

