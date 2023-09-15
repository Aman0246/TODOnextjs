import './globals.css'
export default function Loading() {
    // Or a custom loading skeleton component
    return(   
 <div className='w-screen flex justify-center h-[58vh] items-center'>
    <div class="loading-wave">
  <div class="loading-bar"></div>
  <div class="loading-bar"></div>
  <div class="loading-bar"></div>
  <div class="loading-bar"></div>
</div>
    </div>)
  
  }