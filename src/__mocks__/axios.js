const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "Adilet",
          last: "Zhusupov",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/37.jpg",
        },
        login: {
          username: "the GOAT",
        },
      },
      {
        name: {
          first: "Adilet",
          last: "Zhusupov",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/37.jpg",
        },
        login: {
          username: "the GOAT",
        },
      },
      {
        name: {
          first: "Adilet",
          last: "Zhusupov",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/37.jpg",
        },
        login: {
          username: "the GOAT",
        },
      },
      {
        name: {
          first: "Adilet",
          last: "Zhusupov",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/37.jpg",
        },
        login: {
          username: "the GOAT",
        },
      },
      {
        name: {
          first: "Adilet",
          last: "Zhusupov",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/37.jpg",
        },
        login: {
          username: "the GOAT",
        },
      },
    ],
  },
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
