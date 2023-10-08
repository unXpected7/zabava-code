"use client"

import HomeContainer from './container/HomeContainer'
import { Provider } from "react-redux";
import store from '@/store/store';

export default function Home() {
  return (
    <Provider store={store}>
      <main className="flex min-h-screen flex-col gap-10 items-center justify-between py-14 px-8 md:px-10 xl:px-24 bg-grayBg">
        <div>
          <HomeContainer />
        </div>
      </main>
    </Provider>
  )
}
