import UserDetail from "@/components/UserDetail";

import { profile_data } from "@/data/profile-data";
import Link from "next/link";

function UserDetailPage(props) {
  const id = props.params.id;
  const userDetail = profile_data[id];
  // console.log("debug specific data!!", userDetail);
  return (
    <>
      <Link href="/" className="bg-blue-500 p-5 px-7 rounded fixed top-2 right-4 text-white">
        Back
      </Link>
      <UserDetail {...userDetail} />
    </>
  );
}

export default UserDetailPage;
