import UserDetail from "@/components/UserDetail";
import { profile_data } from "@/data/profile-data";
import BackImg from "@assets/back.svg";
import Image from "next/image";
import Link from "next/link";

function UserDetailPage(props) {
  const id = props.params.id;
  const userDetail = profile_data[id];
  // console.log("debug specific data!!", userDetail);
  return (
    <>
      <Link href="/" className="bg-white p-5 px-7 rounded fixed top-2 right-4 shadow-sm">
        <Image src={BackImg} width={30} height={30} />
      </Link>
      <UserDetail {...userDetail} />
    </>
  );
}

export default UserDetailPage;
