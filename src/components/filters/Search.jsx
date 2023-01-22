import React, { useEffect, useState } from "react";

const Search = () => {
  const [users, setUsers] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        console.log(data);
        setUsers(data);
        setIsLoading(false);
        setIsError(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
        console.error(error.message);
      }
    };

    fetchUsers();
  }, []);

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  const filtersUsers = [...users].filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <div>
        {users &&
          filtersUsers?.map((user) => {
            return <h3 key={user.id}>{user.name}</h3>;
          })}
      </div>
    </>
  );
};

export default Search;
