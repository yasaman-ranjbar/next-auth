// client side auth and securing

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session, status } = useSession();
  console.log(status);

  return (
    <div className=" flex item-center justify-center gap-4 bg-indigo-500 shadow-lg w-full py-4 px-10 text-white">
      <li>
        <Link href="">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/profile">
          <a>Profile</a>
        </Link>
      </li>
      {!session &&
        status ===!
          "loading" && (
            <li>
              <button onClick={() => signIn()}>sign In</button>
            </li>
          )}
      {session && (
        <li>
          <button onClick={() => signOut()}>sign Out</button>
        </li>
      )}
    </div>
  );
};

export default Header;
