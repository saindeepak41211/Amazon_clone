const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/api/products', (req, res) => {
  res.json([{ id: 1, name: 'Sample Product' }]);
});

app.listen(5000, () => console.log('Server running on port 5000'));