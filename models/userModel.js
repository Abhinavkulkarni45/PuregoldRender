import bcrypt from 'bcryptjs';

// Mock user data
const users = [
  {
    id: 1,
    username: 'user1',
    password: bcrypt.hashSync('password1', 10), // hashed password
  },
  {
    id: 2,
    username: 'user2',
    password: bcrypt.hashSync('password2', 10), // hashed password
  },
];

export const findUserByUsername = (username) => {
  return users.find(user => user.username === username);
};
