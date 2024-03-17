'use client'

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Map from "../Map";
import ProfileCard from "../ProfileCard";
import Loader from "../Loader";


function UserDetail(props) {
  const [ showMap, setShowMap] = useState(true); //state to set show map or hide map
  const { id, map } = props;
  const searchParams = useSearchParams();

  const hideMap = () => {
    // toggle function to show or hide map
    setShowMap(!showMap);
  }


  useEffect(() => {
    // setting the state when mounting the component and on update of the url
    setShowMap(searchParams.has('showMap'));
  },[searchParams]);

  return (
    <div className="w-screen h-screen flex items-center flex-col" >
      {/* <p className="font-bold text-center p-4 text-lg">Profile</p> */}
      { // if Summary button clicked then the map address of the selected user will be displayed
      showMap ?
      <Map map={map} hideMap={hideMap} />

      // else the detail of that user will be displayed
    : <ProfileCard {...props} hideMap={hideMap}/>
    }
    </div>

  );
}

export default UserDetail;