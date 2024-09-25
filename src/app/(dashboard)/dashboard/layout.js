
import connectDB from '@/app/(home)/lib/Database/Database';
import "../../globals.css";
import SideNavigationSeparator from '../admin_component/Sidenav';
import { AuthProvider } from '@/app/(home)/AuthProvider/AuthProvider';


const layout = async({children}) => {
    await connectDB()
    return (
       <html>
        <body className='bg-purple-300 w-full min-h-screen'>
        <AuthProvider>
            <SideNavigationSeparator/>
        <main className='mx-[17vw] container '>
            {children}
        </main>
        </AuthProvider>
        </body>
       </html>
    );
};

export default layout;