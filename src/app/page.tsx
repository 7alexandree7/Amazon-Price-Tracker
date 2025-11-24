import { auth } from "@/auth";
import LoginView from "./LoginView";

export default async function Home() {

  const sesstion = await auth();
  console.log(sesstion);
  return (
    <>
    <LoginView />
    </>
  );
}
