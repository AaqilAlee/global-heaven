import React from 'react'
import { useRouter } from "next/router";
// import fetchTeamLead from '../board-of-directors/'

const index = () => {
  const router = useRouter();
  const data = router.query.id;

  // useEffect(() => {
  //   if (id) {
  //     fetchCategory(id).then((response) => {
  //       if (response?.data) {
  //         setCategory(response.data);
  //       }
  //     });
  //   }  
  // }, [id]);

  return (
    <>
      <h1>sfgsdfgsdfgsdfgsdfg {data}</h1>
      <h1>sfgsdfgsdfgsdfgsdfg</h1>
      <h1>sfgsdfgsdfgsdfgsdfg</h1>
      <h1>sfgsdfgsdfgsdfgsdfg</h1>
      <h1>sfgsdfgsdfgsdfgsdfg</h1>
      <h1>sfgsdfgsdfgsdfgsdfg</h1>
      <h1>sfgsdfgsdfgsdfgsdfg</h1>
      <h1>sfgsdfgsdfgsdfgsdfg</h1>
      <h1>sfgsdfgsdfgsdfgsdfg</h1>
      <h1>sfgsdfgsdfgsdfgsdfg</h1>
      <h1>sfgsdfgsdfgsdfgsdfg</h1>
    </>
  )
}

export default index