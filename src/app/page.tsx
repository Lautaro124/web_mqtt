'use client'
import { useState, useCallback } from "react";

export default function Home() {
  const [isOn, setIsOn] = useState<boolean>(false);

  const handleButton = useCallback(() => {
    fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: isOn ? 'Off' : 'On'
      }),
    })
      .then((json) => json)
      .catch((error) => console.error(error));
    setIsOn(!isOn);
  }, [isOn])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <section className="flex flex-col items-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-300">
          Control de Luz
        </h1>
        <label htmlFor="check" className="bg-slate-400 w-20 h-10 rounded-full relative cursor-pointer peer-checked:bg-slate-800">
          <input
            type="checkbox"
            name="chekc"
            id="check"
            checked={isOn}
            onChange={handleButton}
            className="sr-only peer"
          />
          <span className="w-2/5 h-4/5 bg-slate-600 absolute rounded-full transition-all duration-75 left-1 top-1 peer-checked:bg-slate-100 peer-checked:left-11"></span>
        </label>
        <p className="text-lg text-gray-300">
          {isOn ? 'Encendido' : 'Apagado'}
        </p>
      </section>
    </main>
  );
}
