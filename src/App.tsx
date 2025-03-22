

import { Toaster } from 'react-hot-toast';
import './App.css'
import Header from './components/Header';
import PageContainer from './route/PageContainer';

function App() {

  return (
    <>
    <Header/>
    <Toaster position='top-center'/>
    <PageContainer/>
   
    </>
  )
}

export default App
