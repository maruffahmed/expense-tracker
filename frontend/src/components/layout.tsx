import Footer from "./common/footer";
import Header from "./common/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-full">
      <Header />
      {/* Render page content */}
      {children}
      <Footer />
    </div>
  );
}
