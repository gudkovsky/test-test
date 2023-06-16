import StartPage from './components/pages/start-page/StartPage.jsx';
import FormPage from './components/pages/form-page/FormPage.jsx';

function App() {
  return (
    <>
      <StartPage startPageShown={false}></StartPage>
      <FormPage FormPageShown={true}></FormPage>
    </>
    )
  }
export default App;
