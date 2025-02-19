import { apiRoot } from "./apiDefines";

const getTutorial = async (tutorialCode:string) => {
    try {
      const response = await fetch(apiRoot+'/tutorial/getTutorial', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({tutorialCode})
      });
      const data = await response.json();
      if (data.status != '0') {
        return ""
      } else {
        return data.data;
      }
    } catch (error) {
      return ""
    }
  };

export {getTutorial}