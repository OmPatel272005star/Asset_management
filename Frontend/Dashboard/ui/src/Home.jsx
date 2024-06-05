
import Nav from './Nav'

function Home() {
  return (
    <div className='px-3'>
      <Nav />
      <div className='container-fluid'>
            <div className='row g-3 my-2'>
                <div className='c01-md-3'>
                    <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-item-center rounded'>
                        <div>
                        <h3 className='fs-2'>230</h3>
                        <p className=' fs-5'>Products</p>
                        </div>
                        
                    </div>
                </div>
           </div>
      </div>
    </div>
  )
}

export default Home
