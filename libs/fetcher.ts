import axios from "axios";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default fetcher;

// const fetcher = async <T>(url: string): Promise<T> => {
//   try {
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error(`Network response was not ok: ${response.status}`);
//     }

//     const data = await response.json() as T;
//     return data;
//   } catch (error: any) { // Explicitly specify 'error' as any type
//     if (error instanceof Error) {
//       throw new Error(`Fetch error: ${error.message}`);
//     } else {
//       throw new Error(`Fetch error: ${String(error)}`);
//     }
//   }
// };

// export default fetcher;
