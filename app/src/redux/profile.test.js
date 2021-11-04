import ProfileReducer, { addPostAC } from "./profile-reducer";
let state = {
  posts: [
    {
      id: 1,
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laboriosam dignissimos explicabo ipsam. Deleniti obcaecati veritatis magnam et incidunt itaque. Nemo nihil provident iusto labore reprehenderit odit nisi accusantium non.
                acilis laborum incidunt. Voluptas, laboriosam! Doloremque perferendis ratione, at enim ut odit dolore numquam! Aliquam nam iste distinctio dicta, ducimus magni.`,
    },
    {
      id: 2,
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laboriosam dignissimos explicabo ipsam. Deleniti obcaecati veritatis magnam et incidunt itaque. Nemo nihil provident iusto labore reprehenderit odit nisi accusantium non.`,
    },
  ],
};

it("should post to will be added", () => {
  // 1. test data
  let action = addPostAC("test post");
  // 2. action
  let newState = ProfileReducer(state, action);
  //3. expected
  expect(newState.posts.length).toBe(3);
});
it("cheack the last post id", () => {
  // 1. test data
  let action = addPostAC("test post");
  // 2. action
  let newState = ProfileReducer(state, action);
  //3. expected
  expect(newState.posts[newState.posts.length-2].id+1).toBe(newState.posts[2].id);
});
