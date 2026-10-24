import { useRef, useState, useEffect } from "react";

const useThrottle = (value, delay) => {
  // Throttled value ko store karega
  const [throttledVal, setThrottledVal] = useState(value);

  // Last execution ka timestamp store karega
  // useRef isliye use kiya kyunki value update hogi lekin re-render nahi hoga
  const lastExecuted = useRef(0);

  useEffect(() => {
    // Current time (milliseconds mein)
    const now = Date.now();

    // Check karo ke last update se delay complete hua ya nahi
    if (now - lastExecuted.current >= delay) {
      // Delay complete ho gaya, throttled value update karo
      setThrottledVal(value);

      // Last execution ka time current time se update kar do
      lastExecuted.current = now;
    }

    // Agar delay complete nahi hua to value update nahi hogi.
    // User jitni bhi baar value change kare,
    // throttled value sirf delay complete hone ke baad hi update hogi.

  }, [value, delay]);

  // Throttled value return karo
  return throttledVal;
};

export default useThrottle;