import React, { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(true);
    function darkChange() {
        console.log('false!')
        setIsDark(!isDark)
    }
  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');

    } else {
      document.body.classList.remove('dark');
    }
  }, [isDark]); 
  return (
    <div 
        onClick = {darkChange}
      aria-label="Dark mode toggle" id="clickMeButton">huh</div>
  );
};

export default DarkModeToggle