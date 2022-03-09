import { createServer } from 'http';

const server = createServer((req, res) => {
  console.log('Hello World');
  console.log(res.statusCode);
  if (req.url === '/') {
    res.write('Hello World 2');
    res.end();
  }
});
server.listen(5000, () => {
  console.log('Server is running');
});
