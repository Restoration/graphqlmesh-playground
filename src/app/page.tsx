import { demo } from "@/modules/demo";
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
    (async ()=> {
      await demo()
    })()
  }, [])
  return (
    <></>
  );
}
