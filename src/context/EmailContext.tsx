import React, { createContext, useState } from "react";

interface EmailContextType {
  email: string;
  setEmail: (email: string) => void;
}

export const EmailContext = createContext<EmailContextType>({
  email: "",
  setEmail: () => {},
});

export const EmailProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [email, setEmail] = useState("");

  return (
    <EmailContext.Provider value={{ email, setEmail }}>
      {children}
    </EmailContext.Provider>
  );
};