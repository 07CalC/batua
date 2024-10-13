import { createContext, useEffect, useState } from "react";


export const AllContext = createContext();

export const AllContextProvider = ({ children }) => {
    const [date, setDate] = useState(new Date().getFullYear() + "-" + (new Date().getMonth()+1)  + "-" + new Date().getDate())
    const [dailyExpense, setDailyExpense] = useState([])
    const [monthlyExpense, setMonthlyExpense] = useState(0)
    const [monthlyFamilyExpense, setMonthlyFamilyExpense] = useState(0)
    const [dailyFamilyExpense, setDailyFamilyExpense] = useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [signedUser, setSignedUser] = useState({})
    const [isFamily, setIsFamily] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [lineGraphData, setLineGraphData] = useState([])
    const [familyLineGraphData, setFamilyLineGraphData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const getMe = async () => {
      const res = await fetch(`http://localhost:8000/api/auth/me`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      })

      const data = await res.json()
      setIsLoggedIn(true)
      setSignedUser(data)
    }
  
    const getDailyData = async () => {
        setIsLoading(true)
        const res = await fetch(`http://localhost:8000/api/transaction/getdailyexpense`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
                date: date
            }),
        })

        const data = await res.json()
        setDailyExpense(data)
        
    }

    const getMonthlyExpense = async () => {
        const res = await fetch(`http://localhost:8000/api/transaction/getmonthlyexpense`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
                date: date
            }),
        })

        const data = await res.json()
        setMonthlyExpense(data)
        
    }


    const getmonthlyFamilyexpense = async () => {
        const res = await fetch(`http://localhost:8000/api/transaction/getmonthlyfamilyexpense`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
                date: date
            }),
        })

        const data = await res.json()
        setMonthlyFamilyExpense(data)

    }

    const getDailyFamilyExpense = async () => {
        const res = await fetch(`http://localhost:8000/api/transaction/getdailyfamilyexpense`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
                date: date
            }),
        })

        const data = await res.json()
        setDailyFamilyExpense(data)
      }
        

     const getLineData = async() => {
      const res = await fetch(`http://localhost:8000/api/transaction/getLineGraphData`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          date: date
        }),
      })

      const data = await res.json()
      setLineGraphData(data)
     }

     const getFamilyLineGraphData = async() => {
      const res = await fetch(`http://localhost:8000/api/transaction/getFamilyLineGraphData`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          date: date
        }),
      })

      const data = await res.json()
      setFamilyLineGraphData(data)
      setIsLoading(false)
    }
      

    useEffect(() => {
        getDailyData()
        getMonthlyExpense()
        getmonthlyFamilyexpense()
        getDailyFamilyExpense()
        getLineData()
        getFamilyLineGraphData()
    },[date,signedUser])
    

    useEffect(()=>{
        getMe()
    },[isLoggedIn])

  return (
    <AllContext.Provider
      value={{
        date,
        setDate,
        dailyExpense,
        monthlyExpense,
        isLoggedIn,
        setIsLoggedIn,
        signedUser,
        monthlyFamilyExpense,
        dailyFamilyExpense,
        isFamily,
        setIsFamily,
        darkMode,
        setDarkMode,
        lineGraphData,
        familyLineGraphData,
        isLoading
      }}
    >
      {children}
    </AllContext.Provider>
  );
};
