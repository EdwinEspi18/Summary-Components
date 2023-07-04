function App() {
  return (
    <div className='w-screen h-screen flex flex-col justify-between'>
      <div className='bg-gradient-to-t from-indigo-700 via-indigo-600 to-indigo-500 w-full h-[21.5rem] rounded-bl-3xl rounded-br-3xl flex flex-col justify-around items-center p-3'>
        <p className='text-gray-300 text-xl font-medium'>Your Result</p>
        <div className='w-40 h-40 rounded-full bg-gradient-to-b from-indigo-800 to-indigo-600 flex flex-col items-center justify-center'>
          <p className='text-7xl text-white font-bold'>76</p>
          <p className='mt-3 text-gray-400 font-bold'>of 100</p>
        </div>
        <p className='text-white text-3xl font-semibold'>Great</p>
        <p className='text-center w-72 pb-1 text-gray-400 font-medium'>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
      <div className='w-full flex flex-col justify-between flex-1 px-7 py-2'>
        <h2 className='font-bold text-xl mb-1'>Summary</h2>
        <div className='w-full flex flex-col justify-center items-center flex-1 gap-2'>
          <div className='w-full h-11 rounded-lg bg-red-600/10 flex items-center justify-between px-5'>
            <div className='flex items-center justify-around w-24'>
              <img src='/images/icon-reaction.svg' alt='flash icon' />
              <p className='text-red-500 font-semibold'>Reaction</p>
            </div>
            <div>
              <span className='font-bold'>80</span> / 100
            </div>
          </div>
          <div className='w-full h-11 rounded-lg bg-yellow-600/10 flex items-center justify-between px-5'>
            <div className='flex items-center justify-around w-24'>
              <img src='/images/icon-memory.svg' alt='flash icon' />
              <p className='text-yellow-500 font-semibold'>Memory</p>
            </div>
            <div>
              <span className='font-bold'>92</span> / 100
            </div>
          </div>
          <div className='w-full h-11 rounded-lg bg-green-600/10 flex items-center justify-between px-5'>
            <div className='flex items-center justify-around w-24'>
              <img src='/images/icon-verbal.svg' alt='flash icon' />
              <p className='text-green-500 font-semibold'>Verbal</p>
            </div>
            <div>
              <span className='font-bold'>61</span> / 100
            </div>
          </div>
          <div className='w-full h-11 rounded-lg bg-blue-600/10 flex items-center justify-between px-5'>
            <div className='flex items-center justify-around w-24'>
              <img src='/images/icon-visual.svg' alt='flash icon' />
              <p className='text-blue-500 font-semibold text-start'>Visual</p>
            </div>
            <div>
              <span className='font-bold'>72</span> / 100
            </div>
          </div>
        </div>
        <button className='w-full bg-slate-800 h-11 rounded-full text-white font-medium text-lg mt-1'>
          Continue
        </button>
      </div>
    </div>
  );
}

export default App;
