'use client'
import { getMapUrl } from "@/utils/getMapUrl";
import Loader from "../Loader";
import { useState } from "react";
import NoAddress from "../NoAddress";


function Map(props) {
  const { map, hideMap = () => {} } = props;
  const [loader, setLoader] = useState(true);
  const url = getMapUrl(map);
  
  return map ?(
    <div className="container h-full">
        {loader ? <Loader/>: null}
        <embed width="100%" height="100%" src={url} onLoad={()=>{setLoader(false)}} />
    </div>

  ): <NoAddress />;
}

export default Map;
