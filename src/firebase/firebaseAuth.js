import { createContext, FC, useState } from "react";
import { getAuth } from "firebase/auth";
import app from './index'

const auth = getAuth(app)

// const AuthContext = 
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
}