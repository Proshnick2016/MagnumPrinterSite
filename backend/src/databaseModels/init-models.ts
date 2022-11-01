import type { Sequelize } from 'sequelize';
import { Executor as _Executor } from './executor';
import type { ExecutorAttributes, ExecutorCreationAttributes } from './executor';
import { UserDefaultData as _UserDefaultData } from './user_default_data';
import type { UserDefaultDataAttributes, UserDefaultDataCreationAttributes } from './user_default_data';

export {
  _Executor as Executor,
  _UserDefaultData as UserDefaultData
};

export type {
  ExecutorAttributes,
  ExecutorCreationAttributes,
  UserDefaultDataAttributes,
  UserDefaultDataCreationAttributes
};

export function initModels (sequelize: Sequelize) {
  const Executor = _Executor.initModel(sequelize);
  const UserDefaultData = _UserDefaultData.initModel(sequelize);

  Executor.belongsTo(UserDefaultData, { as: 'executor', foreignKey: 'executor_id' });
  UserDefaultData.hasMany(Executor, { as: 'executors', foreignKey: 'executor_id' });

  return {
    Executor,
    UserDefaultData
  };
}
