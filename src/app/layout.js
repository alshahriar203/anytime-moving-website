import '../styles/common.css';
import Navbar from '../components/Navbar';
import Footer from '../components/FooterFinal';
// import styles from './page.module.scss';

// import cn from 'classnames';
export const metadata = {
  title: 'Anytime Moving',
  description: 'Your trusted moving company based in Halifax, Nova Scotia. We specialize in residential and commercial moves, ensuring a stress-free and seamless relocation experience with expert care and attention to detail.',
  icons: {
    icon: '/anytime-logo.svg', // Path to the favicon file
  },
};

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          <Navbar/>
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    );
  }
  
  