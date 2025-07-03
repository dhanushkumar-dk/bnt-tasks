import React, { useEffect, useState } from "react";

const List = () => {
  const [user, setuser] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    setTimeout(() => {
      let fetchData = async () => {
        try {
          let response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
          );
          if (!response.ok) throw new Error("Network response was not ok");
          let data = await response.json();
          if (!data) throw new Error("No Data Found!!");
          setuser(data);
          setIsLoading(false);
        } catch (e) {
          console.error("Error fetching data:", e);
          setError("Failed to fetch data");
          setIsLoading(false);
        }
      };
      fetchData();
    }, 2000);
  }, []);

  return (
    <>
      <h2>User database</h2>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {isloading && (
            <tr>
              <td colSpan="4">Loading...</td>
            </tr>
          )}
          {error && (
            <tr>
              <td colSpan="4">Error: {error}</td>
            </tr>
          )}
          {!isloading &&
            !error &&
            user.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.name}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default List;
