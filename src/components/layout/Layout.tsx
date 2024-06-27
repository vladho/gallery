import react, {ReactNode} from "react";
import Header from "../header/Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children  }) => {
  return (
    <>
      <Header title="title"/>
      <main>
        {children}
      </main>
    </>
  );
};

export default Layout;