"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    get formatDate() {
      return this.date.toISOString().split("T")[0];
    }

    static async getNotification() {
      try {
        const notification = await User.findAll({
          attributes: [
            [sequelize.fn("COUNT", sequelize.col("id")), "totalUsers"],
          ],
        });

        return notification;
      } catch (error) {
        throw error;
      }
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      email: DataTypes.STRING,
      summary: DataTypes.TEXT,
      workingExperience: DataTypes.TEXT,
      techSkills: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
