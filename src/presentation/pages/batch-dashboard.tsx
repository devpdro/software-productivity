import { Sidebar } from "../components/Common";
import { Main } from "../components/BatchDashboard";

function BatchDashboard() {
  return (
    <main style={{ display: "flex",}}>
      <Sidebar />
      <Main />
    </main>
  );
}

export default BatchDashboard;
