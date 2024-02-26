const users = [
  {
    id: 1,
    name: "Food Admin",
    password: "admin",
    email: "admin@example.com",
    allergies: ["E100", "milk"],
  },
];

async function login(email, password) {
  const validUser = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!validUser) {
    throw new Error("Invalid username or password");
  }

  const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.${btoa(validUser.id.toString())}.very-secret-signature`;

  return {
    token,
    user: validUser,
  };
}

function register({ email, name, password }) {
  const existingUser = users.find((user) => user.email === email);

  if (existingUser) {
    throw new Error("User already exists");
  }

  const user = {
    id: users.length + 1,
    name,
    email,
    password,
    allergies: [],
  };

  users.push(user);

  return user;
}

function whoami(token) {
  const userId = atob(token.split(".")[1]);

  return users.find((user) => user.id == userId);
}

async function updateProfile({ name, allergies, password, token}) {
  const user = await whoami(token);

  if (!user) throw new Error(`Invalid token`);
  
  user.name = name;
  user.allergies = allergies;
  user.password = password; 

  return user;
}

export default {
  login,
  register,
  whoami,
  updateProfile,
};
