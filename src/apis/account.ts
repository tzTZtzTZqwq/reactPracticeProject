import { apiRoot } from "./apiDefines";

const register = async (username: string, password: string) => {
  try {
    const response = await fetch(apiRoot + '/account/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
      credentials: 'include' 
    });

    const cookies = response.headers.get('set-cookie');

    if (cookies) {
      const cookieList = cookies.split(/,\s*(?=[^;]+\=)/);

      cookieList.forEach(cookie => {
        const cookieName = cookie.split('=')[0].trim();
        if (cookieName === 'userId' || cookieName === 'username') {
          const [nameValue, ...attributes] = cookie.split(';');
          const sanitizedCookie = `${nameValue}; ${attributes.join(';')}`
            .replace(/(\r\n|\n|\r)/gm, "")
            .trim();

          document.cookie = sanitizedCookie;
        }
      });
    }

    const data = await response.json();
    return data.status !== '0' ? parseInt(data.status) : 0;
  } catch (error) {
    return -1;
  }
};

const handleVerificationSuccess = async (token:string, ekey:string) => {
  try {
    const response = await fetch(apiRoot+'/account/verifyCaptcha', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({token,ekey}),
      credentials:'include'
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error', error);
    return "Error"+error;
  }
};

const handleVerifyEmail = async (token:string,email:string) => {
  try {
    const response = await fetch(apiRoot+'/account/verifyEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({token,email}),
      credentials:'include'
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error', error);
    return "Error"+error;
  }
};


export {register,handleVerificationSuccess,handleVerifyEmail}