import ProfilePhoto from "@assets/profile.svg";
import Image from "next/image";

function ProfileDetail(props) {
  const {name, email, contact} = props;
  return (
    <div className="flex gap-4">
        <div>
            <Image src={ProfilePhoto} alt="profile" width={50} height={50} className="w-8 h-8" />
        </div>
        <div className="flex flex-col text-sm">
            <p className="mb-1 font-bold ">{props.name}</p>
            <p>{props.email}</p>
            <p>{props.contact}</p>
        </div>
    </div>
  )
}

export default ProfileDetail