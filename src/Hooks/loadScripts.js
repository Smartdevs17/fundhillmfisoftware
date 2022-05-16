import { useEffect } from "react";

const LoadScripts = resourceUrl => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = resourceUrl;
    script.async = false;
    document.body.appendChild(script);
    console.log(script)

    return () => {
      document.body.removeChild(script);
    }
  
  }, [resourceUrl]);

  // const script = document.createElement("script");
  // script.async = true;
  // script.src = resourceUrl;
  // script.onload = () => this.scriptLoaded()
  // document.body.appendChild(script);

  // console.log(script)
}

export default LoadScripts;