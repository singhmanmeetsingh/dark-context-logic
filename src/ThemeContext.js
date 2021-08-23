import React from 'react';

export const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  };
export const ThemeContext = React.createContext(themes.light);

export const  ThemeProvider  =  ({ children })  =>  {
    const  [toggle, setToggle]  =  React.useState(false);
    const toggleFunction =  ()  =>  {
    setToggle(!toggle);
};
return  (
    <ThemeContext.Provider value={{ toggle, toggleFunction , themes }}>
        {children}
    </ThemeContext.Provider>
    );
};