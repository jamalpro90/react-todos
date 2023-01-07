import React, { createContext, useState } from "react";

export const editContext = createContext();

function EditProvider({ children }) {
  const [editMode, setEditMode] = useState({
    mode: false,
    value: { text: "", id: 0 },
  });

  return (
    <editContext.Provider value={{ editMode, setEditMode }}>
      {children}
    </editContext.Provider>
  );
}

export default EditProvider;
