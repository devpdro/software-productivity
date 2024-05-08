import { Sidebar, Wrapper } from "../components/Common";

function Dashboard() {
  return (
    <main style={{ display: "flex" }}>
      <Sidebar />
      <Wrapper />
    </main>
  );
}

export default Dashboard;
