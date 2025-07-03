import { useState, createContext, useEffect, useContext } from "react"
import axios from "axios"

type UserContextType = {
    user: { f_name: string; l_name: string; email: string } | null;
    setUser: (u: any) => void;
    loading: boolean;
}
const UserContext = createContext<UserContextType>({
    user: null,
    setUser: () => { },
    loading: true
})

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<UserContextType['user']>(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        axios.get("http://127.0.0.1:5000/checkauth", {withCredentials:true}).then(
            res =>{
                if(res.data.loggedIn){
                    setUser({f_name: res.data.f_name, email:res.data.email, l_name:res.data.l_name});
                }
            }
        ).catch(()=>setUser(null))
        .finally(()=>setLoading(false));
    },[]);

    return (
        <UserContext.Provider value={{user, setUser, loading}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext);