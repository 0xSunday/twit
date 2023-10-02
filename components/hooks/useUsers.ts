// import useSWR from "swr";

// const fetcher = async (url:string) => {
//   const response = await fetch(url);
//   if (!response.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return response.json();
// };

// const useUsers = () => {
//   const { data, error } = useSWR('/api/user', fetcher);

//   return {
//     data,
//     error,
//     isLoading: !data && !error, // Assuming loading state until data or error is available
//   };
// };

// export default useUsers;


import fetcher from "@/libs/fetcher";
import useSWR from "swr";

// import fetcher from "@/libs/fetcher";

const useUsers = () => {
  const { data, error, isLoading, mutate } = useSWR('/api/user', fetcher)

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useUsers;
