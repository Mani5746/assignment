import { Children } from 'react';
import '../styles/global.css'

const layout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default layout;
