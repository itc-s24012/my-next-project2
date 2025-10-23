import Hero from "@/app/_components/Hero";
import Sheet from "@/app/_components/Sheet";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function NewsLayout({ children }: Props) {
  return (
    <>
      <Hero title="News" sub="ニュース" />
      <Sheet>{children}</Sheet>
    </>
  );
}
