import { QueryResolvers } from "@/graphql/typedef/graphql";

const query: QueryResolvers = {
  contacts: () => ([
    {
      name: "Somewhere",
      identity: "loxygenK",
      link: "https://example.com"
    }
  ])
}

export default query;
