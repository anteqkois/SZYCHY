const serverURL = '/api/v1';

export const user = () => {
  return `${serverURL}/auth`;
};

// export const projects = (slug) => {
//   return slug ? `${serverURL}/projects/${slug}` : `${serverURL}/projects`;
// };
