import User from "../../models/user";

interface IUser {
  name: string;
  phoneNum: string;
}

interface IUpdate extends IUser {
  id: String;
};

export default class LoginService {
  public login = async ({ name, phoneNum }: IUser) => {
    if (!name || !phoneNum) {
      throw new Error("Params missing");
    }

    const user = await User.findOne({ where: {name, phoneNum } });

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  };

  public register = async ({ name, phoneNum }: IUser) => {
    const role = 'user'
    if (!name || !phoneNum) {
      throw new Error("Params missing");
    }

    await User.create({ name, phoneNum, role });

    return {
      name,
      phoneNum,
      role,
    };
  };

  public getAll = async () => {
    const users = await User.findAll();

    return users;
  };

  public update = async ({ id, name, phoneNum }: IUpdate) => {
    try {
      if (!name || !phoneNum) {
        throw new Error("Params missing");
      }
  
      await User.update({ name, phoneNum }, { where: { id } });
  
      return "User updated successfully!";  
    } catch (error) {
      throw new Error("Something gone wrong!");
    }
  };

  public delete = async (id: String) => {
    try {
      if (!id) {
        throw new Error("Params missing");
      }
  
      await User.destroy({ where: { id } });
  
      return "User updated successfully!";
      
    } catch (error) {
      throw new Error("Something gone wrong!");
    }
  };
};
