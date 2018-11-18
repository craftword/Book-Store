import models from "../models";
const Book = models.Books;
const Ratings = models.Ratings;

const book = {
    create(req, res) {
        return Book
            .create({
                title: req.body.title,
                description: req.body.description,
                author: req.body.author,
                dateOfPublication: req.body.dateOfPublication,
                thumbnail: req.body.thumbnail,
                userId: req.body.userId,
                       
                               
            })
            .then(result => {
               res.status(201).send({result, message:"Book created"})
            })
            .catch(error => res.status(400).send(error.message));
    },
     // view details of an event
    view(req, res) {
        return Book
            .findAll({
                where: {
                    id: req.params.Id,              
                  },
                include: [{
                    model: Ratings,
                    as: 'Ratings'
                }]                  
            })            
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error.message));
    },
    list(req, res) {
        //return res.status(400).send("Checkup app")
          return Book
              .findAll({
                include: [{
                  model: Ratings,
                  as: 'Ratings'
                }]
              })            
              .then(result => {
                if (!result) {
                  return res.status(404).send({
                    message: 'No Book Not Found',
                  });
                }
                return res.status(200).send(result);
              })
              .catch(error => res.status(400).send(error));
    },
    update(req, res) {
        return Book
        .find({
            where: {
              id: req.params.Id,              
            },
          })
          .then(book => {
            if (!book) {
              return res.status(404).send({
                message: 'Book Not Found',
              });
            }
            return book
            .update({
                title: req.body.title,
                description: req.body.description,
                author: req.body.author,
                dateOfPublication: req.body.dateOfPublication,
                userId: req.body.userId,
                
             })                            
            .then(result => res.status(201).send({result, message: "Updated successful" }))
            .catch(error => res.status(400).send(error.message)); 
          })
          .catch(error => res.status(400).send(error.message));
    },
    // delete a book
    destroy(req, res) {
        return Book
          .findById(req.params.Id)
          .then(book => {
            if (!book) {
              return res.status(400).send({
                message: 'Book Not Found',
              });
            }
            return book
              .destroy()
              .then(() => res.status(204).send({message: "Deleted successful"}))
              .catch(error => res.status(400).send(error.message));
          })
          .catch(error => res.status(400).send(error.message));
    },
    
};

export default book;