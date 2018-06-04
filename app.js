const http = new easyHTTP;
// Get users
http.get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data))
  .catch(err => console.log(err));


// User data
const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'joe@gmail.com'
}


// Create user
http.post('https://jsonplaceholder.typicode.com/users',data)
  .then(data => console.log(data))
  .catch(err => console.log(err));

  // Update post
http.put('https://jsonplaceholder.typicode.com/users/2',data)
.then(data => console.log(data))
.catch(err => console.log(err));

  // Delete post
  http.delete('https://jsonplaceholder.typicode.com/users/2')
  .then(data => console.log(data))
  .catch(err => console.log(err));