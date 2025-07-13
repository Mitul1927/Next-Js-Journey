import { ReactNode } from "react";
import "./globals.css";

type LayoutProps = {
  children: ReactNode;
  teams: ReactNode;
  comments: ReactNode;
};

export const metadata = {
  title: "Members",
  description: "members page",
};

const Layout = ({ children, teams, comments }: LayoutProps) => {
  return (
    <>
      <section>{children}</section>
      <section className="border p-[10rem] w-[30rem]">{teams}</section>
      <section className="border p-[10rem] w-[30rem]">{comments}</section>
    </>
  );
};

export default Layout;
