import { useSelector } from 'react-redux'

const Home = () => {
  const { firstName, id } = useSelector((state: any) => state.auth.user)

  return (
    <div className="min-h-screen w-100 bg-dark">
      <h1 className="text-4xl text-aquamarine p-4">Hello, {firstName}</h1>

      <h2 className="text-2xl text-bone p-4">Welcome to your dash board</h2>
      <h2 className="text-2xl text-lime p-4">{id}</h2>
      <h2 className="text-2xl text-cyan p-4">{id}</h2>
    </div>
  )
}

export default Home
