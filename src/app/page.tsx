import DefaultLayout from "@/components/Layouts/DefaultLayout";

import { Metadata } from "next";
import Index from "@/components/Dashboard";

export const metadata:Metadata={
  title:"MediCore : a leading research platform for drug discovery",
  description:"this is description for medicore"

}
export default function Home() {
  return (
    <>
     <DefaultLayout>
       <Index/>
     </DefaultLayout>
    </>
  );
}