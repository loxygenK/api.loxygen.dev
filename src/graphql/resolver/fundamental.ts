import { QueryResolvers } from "@/graphql/typedef/graphql";

const query: QueryResolvers = {
  fundamental: () => ({
    name: "フライさん",
    aka: "loxygen.K",
    belong: [
      {
        name: "NITIC",
        class: "3I/G"
      }
    ],
    comment: "Hello folks, I ma Flisan!"
  })
};

export default query;
