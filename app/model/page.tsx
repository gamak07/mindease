import React from 'react'
import Header from '@/src/features/model/Header';
import Chat from '@/src/features/model/Chat';

export default function Page() {
  return (
    <div className='min-h-screen bg-gray-50 flex flex-col'>
      <Header />
      <Chat />
    </div>
  )
}
