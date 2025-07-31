import Counter from "./components/Counter";

const App = () => {
  return (
    <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center">
      {Counter()}
    </div>
  );
};

export default App;
