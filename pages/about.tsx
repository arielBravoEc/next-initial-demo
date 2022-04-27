import { FC } from "react";
import DarkLayout from "../components/layouts/DarkLayout";
import MainLayout from "../components/layouts/MainLayout";

export default function Home() {
  return (
    <>
      <h1 className="title">About Page</h1>

      <p className="description">
        Get started by editing <code className="code">pages/index.js</code>
      </p>
    </>
  );
}

Home.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
