let store = {
  pageProfile: {
    posts: [
      {
        body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laboriosam dignissimos explicabo ipsam. Deleniti obcaecati veritatis magnam et incidunt itaque. Nemo nihil provident iusto labore reprehenderit odit nisi accusantium non.
            acilis laborum incidunt. Voluptas, laboriosam! Doloremque perferendis ratione, at enim ut odit dolore numquam! Aliquam nam iste distinctio dicta, ducimus magni.`,
      },
      {
        body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laboriosam dignissimos explicabo ipsam. Deleniti obcaecati veritatis magnam et incidunt itaque. Nemo nihil provident iusto labore reprehenderit odit nisi accusantium non.`,
      },
    ],
  },
  pageDialogs: {
    dialogsUsers: [
      { id: 1, name: "Lux" },
      { id: 2, name: "Lili" },
      { id: 3, name: "Frank" },
      { id: 4, name: "Mazer" },
      { id: 5, name: "Vincent" },
    ],
    dialogsMessages: [
      { body: "Hello", other: false },
      { body: "How are you?", other: false },
      { body: "I'm fine", other: false },
    ],
  },
};

export default store;
window.store = store;
