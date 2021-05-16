import { QueryResolvers } from "@/graphql/typedef/graphql";

const query: QueryResolvers = {
  works: () => ([
    {
      name: "A work",
      used: ["Python"],
      description: "A test work.",
      checks: []
    }
  ]),
  traces: () => ([
    {
      year: 2020,
      month: 12,
      content: "A content",
      prize: "Some prize"
    }
  ])
}

export default query;
