import { ICommonProfile } from "../../models/ICommonProfile";
import { IShortProfile } from "../../models/IShortProfile";
import { filterFromUsersByIdSubscribe } from "./filterFromUsersByIdSubscribe";

type transformateInShortProfileType = {
  arraySubscribeID: number[];
  allUsers: ICommonProfile[];
};

export const transformateInShortProfile = ({
  arraySubscribeID,
  allUsers,
}: transformateInShortProfileType) => {
  const cuttingProfiles = arraySubscribeID.map((u: any) => {
    const followUser = filterFromUsersByIdSubscribe({ id: u, allUsers });
    let shortUser: IShortProfile = {
      id: followUser.id,
      avatar: followUser.avatar,
      name: followUser.name,
      surname: followUser.surname,
      nickname: followUser.nickname,
      country: followUser.country
    };
    return shortUser;
  });
  return cuttingProfiles;
};
