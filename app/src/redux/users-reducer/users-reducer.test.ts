import {
  followedTC,
  followingAC,
  getTotalUsersTC,
  setUsersAC,
  loadedPageAC,
  toggleIsDisabledFollowingAC,
  toggleIsFetchingAC,
  totalUsersAC,
  getUsersTC,
  UsersActionsType,
  UsersThunksType,
} from "./users-creator";
import { mocked } from "ts-jest/utils";
import UsersReducer, { initialStateType } from "./users-reducer";

import {
  getNumberTotalUsersAPI,
  getPartUsersAPI,
  rewriteUserAPI,
} from "../../API/user-API";
import { usersType } from "../types/ReducersTypes";
import { MaybeMockedDeep } from "ts-jest/dist/utils/testing";
jest.mock("../../API/user-API.ts");

let testingState: initialStateType = {
  users: [
    {
      id: 9,
      followed: true,
      name: "Mathew",
      surname: "Miller",
      nickname: "Favicon",
      country: "Russian",
      city: "Not indicated",
      avatar:
        "https://cs12.pikabu.ru/post_img/2020/06/17/3/1592363988226447395.gif",
      status:
        "ggggggggggggggggggg ggggggggggggggggggggggggggd\n\n\n\n ggggggggggggggggggggggggggggggggddddddggggggggggggggdddddddd fffgggggggggggggggggddddddddddddddddg",
    },
    {
      id: 10,
      followed: true,
      name: "Barbara",
      surname: "Moore",
      nickname: "",
      status: "I wanna lol!!!",
      country: "Russian",
      city: "Krasnodar",
      avatar:
        "https://static.vecteezy.com/system/resources/previews/002/623/603/original/portrait-of-a-beautiful-woman-in-half-turn-lady-with-a-bun-hair-style-avatar-for-social-networks-fashion-and-beauty-illustration-in-flat-style-vector.jpg",
    },
  ],
  pageSize: 4,
  totalUsersCount: 0,
  numLoadedPages: 1,
  isFetching: true,
  isEmpty: false,
  isFollowingDisabled: false,
};

let gottenUsers: Array<usersType> = [
  {
    id: 11,
    followed: true,
    name: "BarbaraLOX",
    surname: "Moore 2",
    nickname: "",
    status: "I wanna lol!",
    country: "Russian",
    city: "Krasnodar",
    avatar:
      "https://static.vecteezy.com/system/resources/previews/002/623/603/original/portrait-of-a-beautiful-woman-in-half-turn-lady-with-a-bun-hair-style-avatar-for-social-networks-fashion-and-beauty-illustration-in-flat-style-vector.jpg",
  },
  {
    id: 12,
    followed: true,
    name: "Barbara",
    surname: "Moore 3",
    nickname: "",
    status: "I wanna lol!",
    country: "Russian",
    city: "Krasnodar",
    avatar:
      "https://static.vecteezy.com/system/resources/previews/002/623/603/original/portrait-of-a-beautiful-woman-in-half-turn-lady-with-a-bun-hair-style-avatar-for-social-networks-fashion-and-beauty-illustration-in-flat-style-vector.jpg",
  },
];

describe("Full testing of actions in the USERS-REDUCER", () => {
  let reducer: (action: UsersActionsType) => initialStateType;
  beforeEach(() => {
    reducer = (action) => UsersReducer(testingState, action);
  });
  describe("Testing FollowAC", () => {
    it("Changes to TRUE in state using followingAC", () => {
      const newTestingState = reducer(followingAC(9, true));
      const result = newTestingState.users[0].followed;
      expect(result).toBeTruthy();
    });
    it("Changes to FALSE in state using followingAC", () => {
      const newTestingState = reducer(followingAC(10, false));
      const result = newTestingState.users[1].followed;
      expect(result).toBeFalsy();
    });
  });
  it("Add users in state with other users", () => {
    const newTestingState = reducer(setUsersAC(gottenUsers));
    const result = newTestingState.users;
    expect(result).toStrictEqual([...testingState.users, ...gottenUsers]);
  });
  it("Variable to toggle users page load", () => {
    const newTestingState = reducer(toggleIsFetchingAC(false));
    const result = newTestingState.isFetching;
    expect(result).toBeFalsy();
  });
  it("Variable to activate and deactivate the subscription button when using the user", () => {
    const newTestingState = reducer(toggleIsDisabledFollowingAC(true));
    const result = newTestingState.isFollowingDisabled;
    expect(result).toBeTruthy();
  });
});

describe("Full testing of thunks in the USERS-REDUCER", () => {
  let thunkFollowed: UsersThunksType | any;
  let thunkGetTotalUser: UsersThunksType | any;
  let thunkGetUsers: UsersThunksType | any;

  let dispatchMock: any;

  let rewriteUserAPIMock: MaybeMockedDeep<typeof rewriteUserAPI>;
  let getNumberTotalUsersAPIMock: MaybeMockedDeep<
    typeof getNumberTotalUsersAPI
  >;
  let getPartUsersAPIMock: MaybeMockedDeep<typeof getPartUsersAPI>;
  beforeEach(() => {
    thunkFollowed = followedTC(testingState.users[0], true);
    thunkGetTotalUser = getTotalUsersTC();
    thunkGetUsers = getUsersTC(2, 2);
    dispatchMock = jest.fn();
    rewriteUserAPIMock = mocked(rewriteUserAPI, true).mockReturnValue(
      Promise.resolve({
        resultCode: 200,
        data: {},
      })
    );
    getNumberTotalUsersAPIMock = mocked(
      getNumberTotalUsersAPI,
      true
    ).mockReturnValue(
      Promise.resolve({
        resultCode: 200,
        data: [2],
      })
    );
    getPartUsersAPIMock = mocked(getPartUsersAPI, true).mockReturnValue(
      Promise.resolve({
        resultCode: 200,
        data: gottenUsers,
      })
    );
  });

  it("FollowTC testing for serviceability", async () => {
    thunkFollowed(dispatchMock);
    await rewriteUserAPIMock;
    expect(dispatchMock).toBeCalledTimes(3);

    expect(dispatchMock).toHaveBeenNthCalledWith(
      1,
      toggleIsDisabledFollowingAC(true)
    );
    expect(dispatchMock).toHaveBeenNthCalledWith(
      2,
      followingAC(testingState.users[0].id, true)
    );
    expect(dispatchMock).toHaveBeenNthCalledWith(
      3,
      toggleIsDisabledFollowingAC(false)
    );
  });

  it("getTotalUsersTC get total count users from server", async () => {
    thunkGetTotalUser(dispatchMock);
    let data = await getNumberTotalUsersAPIMock();
    expect(dispatchMock).toBeCalledTimes(1);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, totalUsersAC(data));
  });

  it("getPartUsersAPI get part users from server", async () => {
    thunkGetUsers(dispatchMock);
    let data = await getPartUsersAPIMock(2,2);
    expect(dispatchMock).toBeCalledTimes(3);

    expect(dispatchMock).toHaveBeenNthCalledWith(1, setUsersAC(data));
    expect(dispatchMock).toHaveBeenNthCalledWith(2, loadedPageAC());
    expect(dispatchMock).toHaveBeenNthCalledWith(3, toggleIsFetchingAC(false));
  });
});
