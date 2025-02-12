// Create web server with Node.js
// 1. Install Node.js
// 2. Create a new folder
// 3. Create a new file called comments.js
// 4. Open terminal
// 5. Navigate to the folder
// 6. Run the command: npm init -y
// 7. Run the command: npm install express
// 8. Run the command: node comments.js
// 9. Open browser and go to localhost:3000/comments
// 10. Open Postman and make a GET request
// 11. Open Postman and make a POST request
// 12. Open Postman and make a PUT request
// 13. Open Postman and make a DELETE request

const express = require('express');
const app = express();
app.use(express.json());

let comments = [
  { id: 1, comment: 'Hello' },
  { id: 2, comment: 'World' },
];

app.get('/comments', (req, res) => {
  res.send(comments);
});

app.post('/comments', (req, res) => {
  const comment = {
    id: comments.length + 1,
    comment: req.body.comment,
  };
  comments.push(comment);
  res.send(comment);
});

app.put('/comments/:id', (req, res) => {
  const comment = comments.find((c) => c.id === parseInt(req.params.id));
  if (!comment) return res.status(404).send('The comment with the given ID was not found.');

  comment.comment = req.body.comment;
  res.send(comment);
});

app.delete('/comments/:id', (req, res) => {
  const comment = comments.find((c) => c.id === parseInt(req.params.id));
  if (!comment) return res.status(404).send('The comment with the given ID was not found.');

  const index = comments.indexOf(comment);
  comments.splice(index, 1);
  res.send(comment);
});

app.listen(3000, () => console.log('Server is running on port 3000...'));
