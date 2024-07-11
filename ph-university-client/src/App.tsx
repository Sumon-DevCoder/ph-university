import MainLayout from "./components/layouts/MainLayout";
import ProtectedRoute from "./components/layouts/ProtectedRoute";

const App = () => {
  return (
    <div>
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    </div>
  );
};

export default App;
