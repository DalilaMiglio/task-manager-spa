import { Navigate } from "react-router-dom";
import { auth } from "../services/firebase";

interface Props {
  children: React.ReactNode;
}

export default function ProtectedRoute({
  children,
}: Props) {
  return auth.currentUser ? (
    children
  ) : (
    <Navigate to="/login" />
  );
}