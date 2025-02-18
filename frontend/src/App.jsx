import { BrowserRouter,Routes, Route} from 'react-router-dom'
import { Signin } from './Components/Signin'
import { Signup } from './Components/Signup'
import { Dashboard } from './Components/Dashboard'
import { Transaction } from './Components/Transaction'
import { RecoilRoot } from 'recoil'
import { OrIn } from './Components/Redirect'

function App(){
  
  return (
    <div>
      
      <BrowserRouter>
      <RecoilRoot>
      <Routes>
        <Route path="/" element = {<OrIn/>}></Route>
          <Route path = "/signin" element={<Signin/>}></Route>
          <Route path = "/signup" element = {<Signup/>}></Route>
          <Route path="/home" element={<Dashboard/>}></Route>
          <Route path="/transactions" element = {<Transaction/>}/>
      </Routes>
      </RecoilRoot>
      </BrowserRouter>
        
      
    </div>
  )
}

export default App
