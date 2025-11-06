import Header from './../components/navigation/Header';
import Sidebar from './../components/navigation/Sidebar';  
  export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex">
        <Header />
        <aside className={`fixed inset-y-0 left-0 p-4 z-50
          transform transition-all duration-300 ease-in-out translate-x-0 w-64`}>
            <Sidebar />
        </aside>
        <main className={`ml-0 md:ml-64 transition-all duration-300 ease-in-out`}>
          {children}
        </main>
      </div>
    );
  }