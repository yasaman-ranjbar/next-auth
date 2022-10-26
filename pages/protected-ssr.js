import { getSession, useSession } from "next-auth/react";
import HomeLayout from "../Layout/HomeLayout";

const index = ({session}) => {
  const { data: session, status } = useSession();
  return (
    <HomeLayout>
      <h1>protected page</h1>
    </HomeLayout>
  );
};

export default index;
// get session in server side

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if(!session) { 
    return {
        redirect: {
            destination: '/api/auth/signin?callbackUrl=http://localhost:3000/protected-ssr' ,
            permanent:false,
        }
    }
  }
  return {
    props: {
      session,
    },
  };
}
