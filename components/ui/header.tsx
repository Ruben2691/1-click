import Link from 'next/link'
import Logo from './logo'
import MobileMenu from './mobile-menu'
import { createClient } from '@/utils/supabase/client'
import { redirect } from 'next/navigation';
import { User } from '@supabase/supabase-js';

export default function Header({ userData }: { userData: User | null }) {
  const signOut = async () => {
    const supabase = await createClient();
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error(error)
      return
    }
    return redirect("/signout");
  }
  return (
    <header className="absolute w-full z-30 pt-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <Link
            href="/"
            className="relative flex items-center justify-center w-14 h-14 border border-transparent rounded-full shadow-2xl [background:linear-gradient(var(--color-slate-900),var(--color-slate-900))_padding-box,conic-gradient(var(--color-slate-400),var(--color-slate-700)_25%,var(--color-slate-700)_75%,var(--color-slate-400)_100%)_border-box] before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-2xl max-w-none shadow-white/30 shadow-md hover:shadow-white/50 hover:shadow-lg transition-shadow duration-300"
          >
            <Logo />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow justify-center flex-wrap items-center">
              {/* <li>
                <Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="/about">About</Link>
              </li>
              <li>
                <Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="/integrations">Integrations</Link>
              </li>
              <li>
                <Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="/customers">Customers</Link>
              </li>
              <li>
                <Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="/changelog">Changelog</Link>
              </li> */}
            </ul>
          </nav>

          {/* Desktop sign in links */}
          {userData ? (
            <ul className="flex-1 flex justify-end items-center">
              <li>
                <Link
                  className="font-medium text-sm text-slate-300 hover:text-white whitespace-nowrap transition duration-150 ease-in-out"
                  href="/account"
                >
                  Account
                </Link>
              </li>
              <li className="ml-6">
                <form action={signOut}>
                  <button className="btn-sm text-slate-300 hover:text-white transition duration-150 ease-in-out w-full group [background:linear-gradient(var(--color-slate-900),var(--color-slate-900))_padding-box,conic-gradient(var(--color-slate-400),var(--color-slate-700)_25%,var(--color-slate-700)_75%,var(--color-slate-400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none">
                    <span className="relative inline-flex items-center">
                      Sign out{" "}
                      <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                        -&gt;
                      </span>
                    </span>
                  </button>
                </form>
              </li>
            </ul>
          ) : (
            <ul className="flex-1 flex justify-end items-center">
              <li>
                <Link
                  className="font-medium text-sm text-slate-300 hover:text-white whitespace-nowrap transition duration-150 ease-in-out"
                  href="/signin"
                >
                  Sign in
                </Link>
              </li>
              <li className="ml-6">
                <Link
                  className="btn-sm text-slate-300 hover:text-white transition duration-150 ease-in-out w-full group [background:linear-gradient(var(--color-slate-900),var(--color-slate-900))_padding-box,conic-gradient(var(--color-slate-400),var(--color-slate-700)_25%,var(--color-slate-700)_75%,var(--color-slate-400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none"
                  href="/signup"
                >
                  <span className="relative inline-flex items-center">
                    Sign up{" "}
                    <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </span>
                </Link>
              </li>
            </ul>
          )}

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
