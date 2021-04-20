import { ApolloServer } from "apollo-server-micro";
import { schema } from "@/graphql/schema";

const server = new ApolloServer({ schema });
const handler = server.createHandler({ path: "/api/graphql" });

export const config = {
    api: {
        bodyParser: false,
    },
};

export default handler;
