import QuestionsProvider from "./contexts/questionsProvider";
import RoutesMain from "./routes/routes";

function App() {
  return (
    <>
      <QuestionsProvider>
        <RoutesMain />
      </QuestionsProvider>
    </>
  );
}

export default App;
