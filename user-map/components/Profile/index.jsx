'use client'
import ProfileDetail from "./ProfileDetail";
import Button from "../Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Profile(props) {
  const router = useRouter();
  const {id} = props;

  const url = `/user-map/user-detail/${id}`;
  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    router.push(url + "?showMap=true");
  }
  return (
    <div className="flex justify-between items-center p-5 bg-white rounded m-4 cursor-pointer hover:scale-[1.01] " onClick={()=>{router.push(url)}}>
        <ProfileDetail {...props} />
    <Button name="Show Map" onClick = {handleClick} />
    </div>
  )
}

export default Profile