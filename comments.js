//Create web server
const express = require('express');
const router = express.Router();

//Import the model
const Comment = require('../models/comment');

//Import the controller
const commentController = require('../controllers/commentController');

//Import the middleware
const auth = require('../middleware/auth');

//Import the validation
const { check } = require('express-validator');

//Create comment
// api/comments
router.post('/',
    auth,
    [
        check('comment', 'Comment is required').not().isEmpty(),
        check('comment', 'Comment must be at least 1 character').isLength({ min: 1 })
    ],
    commentController.createComment
);

//Get comments by publication
// api/comments
router.get('/',
    auth,
    commentController.getCommentsByPublication
);

//Update comment
// api/comments
router.put('/:id',
    auth,
    [
        check('comment', 'Comment is required').not().isEmpty(),
        check('comment', 'Comment must be at least 1 character').isLength({ min: 1 })
    ],
    commentController.updateComment
);

//Delete comment
// api/comments
router.delete('/:id',
    auth,
    commentController.deleteComment
);

module.exports = router;