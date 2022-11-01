import * as Sequelize from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { UserDefaultData, UserDefaultDataId } from './user_default_data';

export interface ExecutorAttributes {
  executor_id: number;
  printer_model: string;
}

export type ExecutorPk = 'executor_id' | 'printer_model';
export type ExecutorId = Executor[ExecutorPk];
export type ExecutorCreationAttributes = ExecutorAttributes;

export class Executor extends Model<ExecutorAttributes, ExecutorCreationAttributes> implements ExecutorAttributes {
  executor_id!: number;
  printer_model!: string;

  // Executor belongsTo UserDefaultData via executor_id
  executor!: UserDefaultData;
  getExecutor!: Sequelize.BelongsToGetAssociationMixin<UserDefaultData>;
  setExecutor!: Sequelize.BelongsToSetAssociationMixin<UserDefaultData, UserDefaultDataId>;
  createExecutor!: Sequelize.BelongsToCreateAssociationMixin<UserDefaultData>;

  static initModel (sequelize: Sequelize.Sequelize): typeof Executor {
    return Executor.init({
      executor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'user_default_data',
          key: 'user_id'
        }
      },
      printer_model: {
        type: DataTypes.STRING(30),
        allowNull: false,
        primaryKey: true
      }
    }, {
      sequelize,
      tableName: 'executor',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'executor_id' },
            { name: 'printer_model' }
          ]
        },
        {
          name: 'executor_id_UNIQUE',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'executor_id' }
          ]
        }
      ]
    });
  }
}
