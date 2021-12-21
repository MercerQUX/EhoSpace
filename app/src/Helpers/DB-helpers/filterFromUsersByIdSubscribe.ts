import { ICommonProfile } from "../../models/ICommonProfile";

type filterFromUsersByIdSubscribeType = {
  id: number;
  allUsers: ICommonProfile[];
};

export const filterFromUsersByIdSubscribe = ({
  id,
  allUsers,
}: filterFromUsersByIdSubscribeType) =>
  allUsers.filter((users: any) => users.id === id)[0];
