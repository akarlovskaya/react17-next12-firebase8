import Head from 'next/head';
import Loader from '../components/Loader';
import toast from 'react-hot-toast';


const Home = () => {
    return (
      <>
        
        <main>
          <div><Loader show/></div>
          <button onClick={() => toast.success('hello toast')}>
            toast
          </button>
        </main>
        
      </>
      
      

    )
  };
  
  export default Home;