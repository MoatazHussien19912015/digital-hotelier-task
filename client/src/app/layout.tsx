'use client';
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import Navbar from "@/components/Navbar";
import { useGetCategoriesQuery } from "@/lib/services/categoriesApi";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCategories, setError } from "@/lib/features/categoriesSlice";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

 const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased relative !overflow-auto`}
        >
          <Layout>
          {children}
          </Layout>
          <Toaster />
        </body>
      </html>
    </StoreProvider>
  );
}


function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {data: categories, error: getCategoriesError} = useGetCategoriesQuery();
  const dispatch = useDispatch();
  const { toast } = useToast();

  useEffect(() => {
   if(categories?.length) {
    dispatch(setCategories(categories));  
   }
   if(getCategoriesError) { 
    dispatch(setError(getCategoriesError));
    // checking the error type to show it
    if ('status' in getCategoriesError) { // FetchBaseQueryError
      const errMsg = 'error' in getCategoriesError ? getCategoriesError.error : JSON.stringify(getCategoriesError.data);
      toast({title: 'Error', description: errMsg, variant: "destructive"});
    } else { // serializable error
      toast({title: 'Error', description: getCategoriesError.message, variant: "destructive"});
    }
      }
  }, [categories, getCategoriesError]);
  
  
 

  return (
    <div className="relative flex flex-col items-center min-h-screen mx-auto bg-gray-200">
      <Navbar />
      {children}    
    </div>
      
  );
}
