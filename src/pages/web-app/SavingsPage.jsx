import Sidebar from '../../components/web-app/Sidebar'
import HeaderName from '../../components/web-app/HeaderName'

const SavingsPage = () => {
  return (
    <div className="max-w-full h-screen flex font-montserrat">
      
      <Sidebar />
      <div className="w-4/5 bg- h-full p-[5%]">
        <HeaderName />
        <h1>Savings</h1>
      </div>
    </div>
  )
}

export default SavingsPage