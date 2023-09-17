import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config'
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation';

type authContextType = {
    user: any;
};

export type Props = {
    children: ReactNode;

};

const authContextDefaultValues: authContextType = {
    user: null
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children  }: Props) => {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const pathname = usePathname()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);
    useEffect(() => {
        if (!user && !loading) {
            router.push('/')
        }
    },[user, pathname])
    return <AuthContext.Provider value={{ user }}>
        {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
}
