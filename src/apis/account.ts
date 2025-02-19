import { apiRoot } from "./apiDefines";

const register = async (username: string,password:string) => {
    try {
      const response = await fetch(apiRoot+'/account/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username,password})
      });
      const data = await response.json();
      if (data.status != '0') {
        return parseInt(data.status)
      } else {
        return 0
      }
      return data;
    } catch (error) {
      return -1
    }
  };

export {register}