import { QueryResolvers, SkillLevel, SkillGroup } from "@/graphql/typedef/graphql";

const query: QueryResolvers = {
  skills: (_, args) => ([
    {
      name: "Something",
      level: SkillLevel.Available,
      group: args.group ?? SkillGroup.Backend
    }
  ])
}

export default query;
