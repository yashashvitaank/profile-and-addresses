'use client'
import ProfilePhoto from "@assets/profile.svg"
import Image from "next/image"
import Link from "next/link";

function Details(props){
    const {email, contact, interests, description} = props;
    return(
        <div className="flex flex-col justify-start gap-3 text-sm">
            <p><span className="font-bold">email: </span><a href={`mailto:+${email}`}>{email}</a></p>
            <p><span className="font-bold">Interests: </span>{interests}</p>
            <p><span className="font-bold">Contact Number: </span>{contact}</p>
            <p><span className="font-bold">Description:</span> {description}</p>
        </div>
    )
}

function ProfileCard(props) {
    const {name, description, contact, map, email} = props;
  return (
    <div className="w-screen h-1/2 flex items-center flex-col p-4 bg-white md:w-[50%] md:m-8 md:rounded-3xl md:shadow-md">
        <Image src={ProfilePhoto} alt="profile photo" className="w-[50px] h-[50px] mb-2" />
        <p className="text-base font-bold text-center mb-20">{name}</p>
        <Details {...props} />
        <Link href={window.location.pathname + "?showMap=trur"}>Show on Map</Link>
    </div>
  )
}

export default ProfileCard