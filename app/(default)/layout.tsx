'use client'

import { useEffect, useState } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
import { createClient } from '@/utils/supabase/client'
import { type User } from '@supabase/supabase-js'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [userData, setUserData] = useState<User | null>(null)
  useEffect(() => {
    const fectchUser = async () => {
      const supabase = await createClient();
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error) {
        console.error(error)
        return
      }
      if (user) {
        setUserData(user)
      }
    }
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 1000,
      easing: 'ease-out-cubic',
    })
    fectchUser();
  },[])

  return (
    <>
      <Header userData={ userData} />

      <main className="grow">

        {children}

      </main>

      <Footer />
    </>
  )
}
