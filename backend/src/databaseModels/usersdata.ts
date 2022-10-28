import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface UsersdataAttributes {
  id: number;
  name: string;
  password: string;
  email: string;
  city: string;
  printerType: string;
}

export type UsersdataPk = 'id';
export type UsersdataId = Usersdata[UsersdataPk];
export type UsersdataOptionalAttributes = 'id';
export type UsersdataCreationAttributes = Optional<UsersdataAttributes, UsersdataOptionalAttributes>;

export class Usersdata extends Model<UsersdataAttributes, UsersdataCreationAttributes> implements UsersdataAttributes {
  id!: number;
  name!: string;
  password!: string;
  email!: string;
  city!: string;
  printerType!: string;

  static initModel (sequelize: Sequelize.Sequelize): typeof Usersdata {
    return Usersdata.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      password: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: 'email_UNIQUE'
      },
      city: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      printerType: {
        type: DataTypes.STRING(255),
        allowNull: false
      }
    }, {
      sequelize,
      tableName: 'usersdata',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'id' }
          ]
        },
        {
          name: 'id_UNIQUE',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'id' }
          ]
        },
        {
          name: 'email_UNIQUE',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'email' }
          ]
        }
      ]
    });
  }
}
