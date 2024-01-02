import { PrismaClient } from "@prisma/client";

type CustomNodeJsGlobal = typeof global & {
  prisma?: PrismaClient;
};

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") prisma = new PrismaClient();
else {
  const globalNode = global as CustomNodeJsGlobal;
  if (!globalNode.prisma) globalNode.prisma = new PrismaClient();
  prisma = globalNode.prisma;
}

export default prisma;
