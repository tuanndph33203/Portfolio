import React, { createContext, useState, useEffect, ReactNode } from 'react';

// Hàm tạo ID duy nhất
const generateUniqueId = () => {
  return 'xxxx-xxxx-4xxx-yxxx-xxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0;
    var v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

// Tạo Context
const UserIdContext = createContext<string>('');

// Provider
const UserIdProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userId, setUserId] = useState<string>('');

  useEffect(() => {
    let storedUserId = localStorage.getItem('user_id');
    if (!storedUserId) {
      storedUserId = generateUniqueId();
      localStorage.setItem('user_id', storedUserId);
    }
    setUserId(storedUserId);
  }, []);

  return (
    <UserIdContext.Provider value={userId}>{children}</UserIdContext.Provider>
  );
};

export { UserIdProvider, UserIdContext };
