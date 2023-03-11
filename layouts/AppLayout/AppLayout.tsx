import { Footer, Header } from "@/components";
import { IAppLayout } from "./AppLayout.interface";

export const AppLayout = ({ children }: IAppLayout) => {
  return (
    <>
      <Header />
      <main className="mb-[404px] flex-auto">{children}</main>
      <Footer />
    </>
  );
};
