const db = require("../models");

//obtener todos los usuarios
const getAllUsers = async () => {
  try {
    let users = await db.User.findAll();
    return users;
  } catch (error) {
    return error.message || "failed to get users";
  }
};

//obtener un usuario especifico
const getUser = async (id) => {
  try {
    let user = await db.User.findByPk(id);
    return user;
  } catch (error) {
    return error.message || "failed to get user";
  }
};

//crear un usuario
const createUser = async (name, email, password) => {
  try {
    let newUser = await db.User.create({
      name,
      email,
      password,
    });
    return newUser;
  } catch (error) {
    return error.message || "User could not be created";
  }
};

//actualizar un usuario
const updateUser = async (id, name, email, password) => {
  try {
    let updatedUser = await db.User.update(
      {
        name,
        email,
        password,
      },
      {
        where: {
          id,
        },
      }
    );
    return updatedUser;
  } catch (error) {
    return error.message || "User could not be updated";
  }
};

//eliminar un usuario
const deleteUser = async (id) => {
  try {
    const deletedUser = await db.User.destroy({
      where: {
        id,
      },
    });
    return deletedUser;
  } catch (error) {
    return error.message || "User could not be deleted";
  }
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
