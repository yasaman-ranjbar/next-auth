import { signIn, useSession } from "next-auth/react";
import HomeLayout from "../Layout/HomeLayout";

const index = () => {
  const { data: session, status } = useSession({
    required: true,
    // if not uthenticate redirect to login
    onUnauthenticated() {
      signIn();
    },
  });

  if (status === "loading") {
    return (
      <HomeLayout>
        <div>loading ... </div>
      </HomeLayout>
    );
  }
  return (
    <HomeLayout>
      <h1>{session.user.name} , wellcome to profile</h1>
    </HomeLayout>
  );
};

export default index;
