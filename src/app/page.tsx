import { auth } from "@/auth";
import LoginView from "./LoginView";
import Header from "@/components/Header";


export default async function Home() {

  const sesstion = await auth();
  const user = sesstion?.user;


  return (
    <>
      {user ? (
      <Header user={user} />
      ) : (
        <LoginView />
      )}
    </>
  );
}
