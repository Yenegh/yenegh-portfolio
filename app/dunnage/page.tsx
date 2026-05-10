import type { Metadata } from "next";
import DunnageRoom from "./DunnageRoom";

export const metadata: Metadata = {
  title: "dunnage",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NzbcPage() {
  return <DunnageRoom />;
}
