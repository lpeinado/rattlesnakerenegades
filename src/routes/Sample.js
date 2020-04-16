import React, { useState } from 'react'

const Sample = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div className="journal">
      Count: {counter}
      <button onClick={() => setCounter(counter + 1)}>Add</button>
      <article>
        <h1>Fancy title here</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </article>
    </div>
  )
}

export default Sample
