import { Hind_Siliguri } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/navbar/NavBar' 
import Footer from '@/components/footer/Footer'
import { AppProvider } from '@/components/appContext/AppProvider'
import ResponsiveNavbar from '@/components/responsiveNavbar/ResponsiveNavbar'

 const Siliguri = Hind_Siliguri({
  subsets:['bengali'],
  weight:['300','400','500','600','700'],
  variable:'--font-siliguri',
 })

export const metadata = {
  title: 'Celltron',
  description: 'Exploring my self',
}

export default function RootLayout(props) {
 
  return (
    <html lang="en" className={Siliguri.variable}>
       
      <body>
         <AppProvider>
           {/* <div className='sticky top-0 '> <NavBar/> </div>  */}
       <div className='sticky top-0'> <ResponsiveNavbar/></div> 
            {props.children}
            <Footer/>
          </AppProvider> 

        </body>
    </html>
  )
}
