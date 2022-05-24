import InputForm from "./components/InputForm";
import styles from "./App.module.css";
import { useState } from 'react'

function App() {
  const [allUsers, setAllUsers] = useState('')

  const handleAddUser = (enteredUser) => {
    setAllUsers(prevUsers => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({id: Math.random().toString()})
      return updatedUsers
    })
  }

  return (
    <div className={styles.app}>
        <InputForm onAddUser={handleAddUser}/>
    </div>
  );
}

export default App;
