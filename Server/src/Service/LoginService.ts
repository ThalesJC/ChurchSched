import User from "../../models/user";

interface LoginData {
  name: string;
  phoneNumber: string;
}

export default class LoginService {
  public login = async ({ name, phoneNumber }: LoginData) => {
    // if (!name || !phoneNumber) {
    //   throw new Error("Params missing");
    // }

    const user = await User.findAll({});

    // if (!user) {
    //   throw new Error("User not found");
    // }

    return user;
  };
  // public teste = async () => {
  //   const users = await User.findAll();
  //   console.log("camada SERVICE", users);
    
  //   return users;
  // };
};
