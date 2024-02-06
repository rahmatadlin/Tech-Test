const { User } = require("../models/index.js");
const { Op } = require("sequelize");

class Controller {
  static async readUser(req, res) {
    try {
      const { search } = req.query;
      const { searchSkills } = req.query;
      const { sort } = req.query;

      let option = {
        where: {},
      };

      if (search) {
        option.where.name = {
          [Op.iLike]: `%${search}%`,
        };
      }

      if (searchSkills) {
        option.where.techSkills = {
          [Op.iLike]: `%${searchSkills}%`,
        };
      }

      if (sort) {
        option.order = [["name", "asc"]];
      }

      const users = await User.findAll(option);

      const notification = (await User.getNotification())[0];
      console.log(notification);
      res.render("home", { users, notification });
    } catch (error) {
      res.send(error);
    }
  }

  static async addUserForm(req, res) {
    try {
      res.render("addForm");
    } catch (error) {
      res.send(error);
    }
  }

  static async addUser(req, res) {
    try {
      const {
        name,
        image,
        email,
        summary,
        workingExperience,
        techSkills,
      } = req.body;
      await User.create({
        name,
        image,
        email,
        summary,
        workingExperience,
        techSkills,
      });
      res.redirect("/");
    } catch (error) {
      res.send(error);
    }
  }

  static async readDetailUser(req, res) {
    try {
      const { id } = req.params;
      const users = await User.findOne({
        where: {
          id,
        },
      });

      res.render("detail", { users });
    } catch (error) {
      res.send(error);
    }
  }

  static async editDetailUser(req, res) {
    try {
      const { id } = req.params;
      const {
        name,
        image,
        email,
        summary,
        workingExperience,
        techSkills,
        createdAt,
        updatedAt,
      } = req.body;

      await User.update(
        {
          name,
          image,
          email,
          summary,
          workingExperience,
          techSkills,
          createdAt,
          updatedAt,
        },
        {
          where: {
            id,
          },
        }
      );
      res.redirect("/");
    } catch (error) {
      res.send(error);
    }
  }

  static async deleteUser(req, res) {
    try {
      const { id } = req.params;
      await User.destroy({
        where: {
          id,
        },
      });
      res.redirect("/");
    } catch (error) {
      res.send(error);
    }
  }
}

module.exports = Controller;
