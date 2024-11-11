"use client";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const { user } = useSelector((state) => state.user);

    useEffect(() => {
      if (!user?.email || user.status === "completed") {
        router.push("/");
      }
    }, [user, router]);

    if (!user?.email || user.status === "completed") {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};
