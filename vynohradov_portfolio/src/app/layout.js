import './globals.css';
import Starfield from '../components/Starfield.jsx';
//<Starfield />
export const metadata = {
    title: 'Nikolay Vynohradov Portfolio',
};

export default function Layout({ children }) {
    return (
        <html lang="en" className="dark">
        <body className="relative">
        <Starfield />
        {children}
        </body>
        </html>
    );
}