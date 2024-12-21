import { PrismaClient } from "@prisma/client";
import app from "./app";

const prisma = new PrismaClient();

const port = process.env.PORT || 8000;

async function main() {
  app.listen(port, () => {
    console.log(`server running at port ${port}`);
  });

  /* const postStudent = await prisma.students.create({
    data: {
      student_name: "John Doe",
      age: "22",
      email: "john.doe@example.com",
      frontend_mark: 75,
      backend_mark: 80,
      status: null,
    },
  }); */
}
main();
