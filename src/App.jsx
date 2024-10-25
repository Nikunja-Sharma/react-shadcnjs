import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from '@/components/ui/button'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center p-8">
      <div className="flex space-x-8 mb-12">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="h-16 hover:drop-shadow-glow transition-all" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="h-16 hover:drop-shadow-glow transition-all" alt="React logo" />
        </a>
        <a href="https://tailwindcss.com" target="_blank" rel="noreferrer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s" className="h-16 hover:drop-shadow-glow transition-all" alt="Tailwind CSS logo" />
        </a>
        <a href="https://ui.shadcn.com" target="_blank" rel="noreferrer">
          <img src="https://ui.shadcn.com/apple-touch-icon.png" className="h-16 hover:drop-shadow-glow transition-all" alt="shadcn/ui logo" />
        </a>
      </div>
      <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Premium Tech Stack
      </h1>
      <p className="text-xl text-gray-300 mb-8 text-center max-w-2xl">
        Experience the power of cutting-edge web development with our carefully curated tech stack. Build faster, smarter, and more efficiently than ever before.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <FeatureCard
          title="Lightning Fast"
          description="Vite's blazing fast hot module replacement (HMR) ensures your development experience is smooth and efficient."
        />
        <FeatureCard
          title="Component-Driven"
          description="React's component-based architecture allows for modular and reusable code, speeding up your development process."
        />
        <FeatureCard
          title="Stylish & Responsive"
          description="Tailwind CSS provides a utility-first approach to styling, making it easy to create beautiful, responsive designs."
        />
        <FeatureCard
          title="Pre-built Components"
          description="shadcn/ui offers a collection of re-usable components that you can copy and paste into your apps."
        />
      </div>
      <div className="mb-12">
        <Button
          onClick={() => setCount((count) => count + 1)}
          variant="outline"
          size="lg"
          className="text-lg px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-none"
        >
          Interactions: {count}
        </Button>
      </div>
      <p className="text-center text-gray-400 max-w-md">
        Ready to get started? Edit <code className="font-mono bg-gray-700 px-1 py-0.5 rounded">src/App.jsx</code> and save to see your changes in real-time.
      </p>
    </div>
  )
}

function FeatureCard({ title, description }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

export default App
