import { Resolvers } from "@/graphql/typedef/graphql";

import AchievementsQuery from "./achievements";
import ContactsQuery from "./contacts";
import FundamentalQuery from "./fundamental";
import SkillsQuery from "./skills";

const resolvers: Resolvers = {
  Query: {
    ...AchievementsQuery,
    ...ContactsQuery,
    ...FundamentalQuery,
    ...SkillsQuery,
  }
};

export default resolvers;
