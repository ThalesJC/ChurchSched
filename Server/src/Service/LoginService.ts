import User from "../../models/user";

interface LoginData {
  name: string;
  phoneNumber: string;
}

export default class LoginService {
  public login = async ({ name, phoneNumber }: LoginData) => {
    if (!name || !phoneNumber) {
      throw new Error("Params missing");
    }

    const user = await User.findOne({ where: {name, phoneNum: phoneNumber } });

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  };

  public register = async ({ name, phoneNumber }: LoginData) => {
    const role = 'user'
    if (!name || !phoneNumber) {
      throw new Error("Params missing");
    }

    await User.create({ name, phoneNum: phoneNumber, role });

    return {
      name,
      phoneNumber,
      role,
    };
  };

  public getAll = async () => {
    const users = await User.findAll();

    return users;
  };

  public update = async ({ name, phoneNumber }: LoginData) => {
    if (!name || !phoneNumber) {
      throw new Error("Params missing");
    }

    await User.update({ name, phoneNum: phoneNumber }, { where: { name } });

    return true;
  };

  public delete = async (id: Number) => {
    if (!id) {
      throw new Error("Params missing");
    }

    await User.destroy({ where: { id } });

    return true;
  };
};
