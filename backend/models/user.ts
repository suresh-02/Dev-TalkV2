import { DataTypes, Model } from "sequelize";
import { sequelize } from "../src/db";

export class User extends Model {
  public id!: number;
  public username!: string;
  public password!: string;
  public email!: string;
  public image!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "user",
    tableName: "user",
    timestamps: false,
    underscored: false,
  }
);

(async () => {
  try {
    const tableExist = await sequelize.getQueryInterface().showAllTables();
    if (!tableExist.includes("user")) {
      await User.sync();
      console.log("Table created sucessfully");
    }
  } catch (error) {
    console.log("teble creation failed", error);
  }
})();
