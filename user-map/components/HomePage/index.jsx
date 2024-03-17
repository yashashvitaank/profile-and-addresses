'use client'
import { profile_data } from "@/data/profile-data"
import { Children, useEffect, useState } from "react"
import Profile from "../Profile"
import FilterBy from "../FilterBy";

function HomePage() {
  const [filterInput, setFilterInput] = useState({name: "", location: ""});
  const [users, setUsers] = useState();
  const data = Object.values(profile_data);
  console.log("debug!!!", filterInput);

  const handleSearch = ()=>{
    const {name, location} = filterInput;
    const filteredArray = data.filter((user)=>{
      return(
        user.name.toLowerCase().includes(name.toLowerCase()) && user.map.toLowerCase().includes(location.toLowerCase())
      )
    })
    console.log("debug filtered array..",filteredArray, "Name=", name, "Location=", location)
    setUsers(filteredArray);
  }

  useEffect(()=>{
    
    setUsers(data);
  },[])

  return users &&(
    <div>
      <div className="m-6">
        <div className="flex flex-col items-start md:flex-row md:justify-between">
        <p className="text-left font-bold text-2xl mb-2">Profiles</p>
        <FilterBy filterInput={filterInput} setFilterInput={setFilterInput} handleSearch={handleSearch} />
        </div>
      </div>
        {users.length ?
        Children.toArray(
          users.map((detail)=>{
              return(
                  <Profile {...detail} />
              )
          })
      ) : <p>No Users Found</p>
      }
    </div>
  )
}

export default HomePage