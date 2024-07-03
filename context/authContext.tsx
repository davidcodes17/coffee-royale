"use client"; // This marks the file as a client component

import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/navigation"; // Use next/navigation for client-side navigation
import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";

interface User {
  id: string | null;
  username: string | null;
  email: string | null;
}

interface AuthContextProps {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const defaultAuthContext: AuthContextProps = {
  user: null,
  setUser: () => {},
};

export const AuthContext = createContext<AuthContextProps>(defaultAuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const toast = useToast();
  const router = useRouter();

  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        const response: any = await axios.get("/api/auth/profile", {
          withCredentials: true,
          headers: {
            // Any additional headers can be added here
          },
        });
        console.log(response.data);
        setUser(response.data.user);
        localStorage.setItem("userId", response.data.user.id);
      } catch (error: any) {
        console.error("Failed to fetch user details:", error);
        toast({
          title: "Error fetching user data",
          description: error.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        router.push("/login");
      }
    };

    fetchUserDetail();
  }, [toast, router]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
