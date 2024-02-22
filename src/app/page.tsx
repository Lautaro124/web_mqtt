'use client'
import { useState } from "react";

export default function Home() {
  const [isOn, setIsOn] = useState<boolean>(false);

  const handleButton = () => {
    fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: isOn ? 'On' : 'Off'
      }),
    })
      .then((json) => json)
      .catch((error) => console.error(error));
    setIsOn(!isOn);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={handleButton}>
        {isOn ? 'Turn off' : 'Turn on'}
      </button>
    </main>
  );
}
