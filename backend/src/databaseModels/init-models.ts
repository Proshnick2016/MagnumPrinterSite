import type { Sequelize } from 'sequelize';
import { Usersdata as _Usersdata } from './usersdata';
import type { UsersdataAttributes, UsersdataCreationAttributes } from './usersdata';

export {
  _Usersdata as Usersdata
};

export type {
  UsersdataAttributes,
  UsersdataCreationAttributes
};

export function initModels (sequelize: Sequelize) {
  const Usersdata = _Usersdata.initModel(sequelize);

  return {
    Usersdata
  };
}
