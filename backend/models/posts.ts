import { sequelize } from "../src/db";
import { DataTypes, Model } from "sequelize";

export class Posts extends Model {
  public id!: number;
  public title!: string;
  public description!: string;
  public image!: string;
}

Posts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
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
    modelName: "posts",
    tableName: "posts",
    timestamps: false,
    underscored: false,
  }
);
