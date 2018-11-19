import users from '../controllers/users';
import auth from '../middlewares/jwtAuth';
import book from "../controllers/books";
import rate from "../controllers/ratings";


const appApi = (app) => {
    app.get("/api/v1", (req, res) => res.status(200).send({
        message: "Welcome to the Owanbe book Manager App!",
    }));
    // login and signIn
    app.post("/api/v1/users/", users.create);
    app.post("/api/v1/users/login", users.signIn);

    // Books Endpoints
    app.post("/api/v1/books/", auth, book.create);
    app.put("/api/v1/books/:Id", auth, book.update);
    app.get("/api/v1/books/", book.list);
    app.get("/api/v1/books/:Id", book.view);
    app.delete("/api/v1/books/:Id", auth, book.destroy);

    // Ratings Endpoints
    app.post("/api/v1/books/rating", auth, rate.create);
    
 
};

export default appApi;