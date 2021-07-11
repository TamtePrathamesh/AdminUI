// export const getAdminList = () => {
//   return new Promise((resolve, reject) => {
//     fetch('privateURL')
//       .then((res) => res.json())
//       .then((res) => resolve(res))
//       .catch((res) => reject(res));
//   });
// };
export const getAdminList = async () => {
  try {
    let res = await fetch('privateURL');
    res = await res.json();
    return res;
  } catch (error) {
    console.error(error);
  }
};
