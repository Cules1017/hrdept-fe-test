
import  { SearchBarProvider } from "../context/SearchBarContext";
import DataListTable from "../components/ViewList/DataListTable";

const Home = () => {

  return (
    <SearchBarProvider>
      <main className="flex min-h-screen flex-col items-center justify-center p-4">
      
       <DataListTable />
      </main>
    </SearchBarProvider>
  );
};

export default Home;
