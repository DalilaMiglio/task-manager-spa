import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

import { db } from "./firebase";
import type { Task } from "../types/task";

const tasksCollection = collection(db, "tasks");

export async function createTask(
  data: Omit<Task, "id">
) {
  await addDoc(tasksCollection, data);
}

export async function getTasks(
  userId: string
): Promise<Task[]> {
  const q = query(
    tasksCollection,
    where("userId", "==", userId),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map(
    (document) =>
      ({
        id: document.id,
        ...document.data(),
      }) as Task
  );
}

export async function updateTask(
  id: string,
  data: Partial<Task>
) {
  await updateDoc(
    doc(db, "tasks", id),
    data
  );
}

export async function deleteTask(
  id: string
) {
  await deleteDoc(
    doc(db, "tasks", id)
  );
}