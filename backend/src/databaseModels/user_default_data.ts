import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Executor, ExecutorId } from './executor';

export interface UserDefaultDataAttributes {
  user_id: number;
  username: string;
  password: string;
  email: string;
  city: string;
}

export type UserDefaultDataPk = 'user_id';
export type UserDefaultDataId = UserDefaultData[UserDefaultDataPk];
export type UserDefaultDataOptionalAttributes = 'user_id';
export type UserDefaultDataCreationAttributes = Optional<UserDefaultDataAttributes, UserDefaultDataOptionalAttributes>;

export class UserDefaultData extends Model<UserDefaultDataAttributes, UserDefaultDataCreationAttributes> implements UserDefaultDataAttributes {
  user_id!: number;
  username!: string;
  password!: string;
  email!: string;
  city!: string;

  // UserDefaultData hasMany Executor via executor_id
  executors!: Executor[];
  getExecutors!: Sequelize.HasManyGetAssociationsMixin<Executor>;
  setExecutors!: Sequelize.HasManySetAssociationsMixin<Executor, ExecutorId>;
  addExecutor!: Sequelize.HasManyAddAssociationMixin<Executor, ExecutorId>;
  addExecutors!: Sequelize.HasManyAddAssociationsMixin<Executor, ExecutorId>;
  createExecutor!: Sequelize.HasManyCreateAssociationMixin<Executor>;
  removeExecutor!: Sequelize.HasManyRemoveAssociationMixin<Executor, ExecutorId>;
  removeExecutors!: Sequelize.HasManyRemoveAssociationsMixin<Executor, ExecutorId>;
  hasExecutor!: Sequelize.HasManyHasAssociationMixin<Executor, ExecutorId>;
  hasExecutors!: Sequelize.HasManyHasAssociationsMixin<Executor, ExecutorId>;
  countExecutors!: Sequelize.HasManyCountAssociationsMixin;

  static initModel (sequelize: Sequelize.Sequelize): typeof UserDefaultData {
    return UserDefaultData.init({
      user_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      username: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: 'name_UNIQUE'
      },
      password: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: 'email_UNIQUE'
      },
      city: {
        type: DataTypes.STRING(30),
        allowNull: false
      }
    }, {
      sequelize,
      tableName: 'user_default_data',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'user_id' }
          ]
        },
        {
          name: 'id_UNIQUE',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'user_id' }
          ]
        },
        {
          name: 'email_UNIQUE',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'email' }
          ]
        },
        {
          name: 'name_UNIQUE',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'username' }
          ]
        }
      ]
    });
  }
}
