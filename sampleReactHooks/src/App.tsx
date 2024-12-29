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
      <UseActionStatePage {...formData} />
    </>
  );
}

export default App;
