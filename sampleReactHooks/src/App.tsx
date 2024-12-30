import { Header } from "./components/layout/Header";
import UseActionStatePage from "./components/useActionState/useActionState";

const formData = {
  userName: "",
  age: 0,
  comment: "",
};

function App() {
  return (
    <>
      <Header />
      <h2 className="p-4 text-2xl font-bold border">useActionState</h2>
      <UseActionStatePage {...formData} />
    </>
  );
}

export default App;
