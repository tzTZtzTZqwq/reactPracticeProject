const submitCode = async (code,input,setConsoleOutput) => {
    setConsoleOutput('Your code has been submitted at '+new Date().toLocaleTimeString()+'. Please wait.');
    console.log(1);
    return;
    try {
      const response = await fetch('https://java.tonyz.top/program/judge.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, input })
      });
      const data = await response.json();
      if (typeof data.output === 'string') {
        setConsoleOutput(data.output);
      } else {
        console.error('Expected output to be a string but got:', data.output);
        setConsoleOutput("Error");
      }
      return data;
    } catch (error) {
      console.error('Error', error);
      setConsoleOutput("Error"+error);
    }
  };

  const runCode = async (code,input,setConsoleOutput) => {
    console.log(2);
    return;
    setConsoleOutput('Your code has been submitted at '+new Date().toLocaleTimeString()+'. Please wait.');
    try {
      const response = await fetch('https://java.tonyz.top/program/attempt.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, input })
      });
      const data = await response.json();
      if (typeof data.output === 'string') {
        setConsoleOutput(data.output);
      } else {
        console.error('error 01 got:', data.output);
        setConsoleOutput("Error");
      }
      return data;
    } catch (error) {
      console.error('Error', error);
      setConsoleOutput("Error"+error);
    }
  };

export {submitCode,runCode}