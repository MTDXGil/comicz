import Header from "@/components/Header";
import "./global.css";
import "./carousel.css";
import Footer from "@/components/Footer";

// Font Awesome
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "Comicz - Đọc truyện tranh online",
  description:
    "Website đọc truyện tranh miễn phí, truyện tranh mới nhất, manga vietsub!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover={false}
          theme="light"
        />
      </body>
    </html>
  );
}
