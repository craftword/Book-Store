import models from "../models";
const Rating = models.Ratings;

const rating = {
    create(req, res) {
        return Rating
            .count({
                where: { 
                    userId:req.body.userId
                },
                
            })
            .then(count => {
                if (count != 0) {
                    res.status(401).json({message: "You have already rated this book" })
                }else {
                    Rating.create({
                        userId: req.body.userId,
                        bookId: req.body.bookId,
                        rating: req.body.rating,                  
                       
                    })
                    .then(result => res.status(201).send({result, message: "Rating successful"}))
                    .catch(error => res.status(400).send(error.message));
                }       
            
            })
            .catch(error => res.status(400).send(error.message));
            
    },
    
};

export default rating;