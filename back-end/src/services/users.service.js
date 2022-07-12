import User from "../database/models/users";

export const create = async ({ name, email, password }) => {
  const register = await User.create(name, email, password);
  return register;
}

