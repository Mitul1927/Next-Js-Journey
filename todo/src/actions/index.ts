"use server";
import { db } from "@/utils/db";

export async function createTodo(formData: FormData) {
  "use server";

  const input = formData.get("input") as string;

  await db.todo.create({
    data: { input: input },
  });
}

export async function editTodo(formData: FormData) {
  "use server";

  const input = formData.get("input") as string;
  const inputId = formData.get("inputId") as string;

  await db.todo.update({
    where: { id: inputId },
    data: { input: input },
  });
}

export async function deleteTodo(formData: FormData) {
  "use server";

  const inputId = formData.get("inputId") as string;

  await db.todo.delete({
    where: { id: inputId },
  });
}