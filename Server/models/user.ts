import { Model, INTEGER, STRING } from 'sequelize';
import db from './index';

class User extends Model {
  id!: number;
  name!: string;
  phoneNum!: string;
  role!: string;
  password!: string;
};

User.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  phoneNum: {
    type: STRING,
    allowNull: false,
  },
  role: {
    type: STRING,
    allowNull: false,
  }
}, {
  sequelize: db,
  modelName: 'users',
  timestamps: false,
});

export default User;