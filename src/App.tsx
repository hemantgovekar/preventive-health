import PreventiveHealthComponent from './components/PreventiveHealthComponent';
import data from './data/preventativehealth.json'

export const App = () => {
  console.log(data);

  return (
    <>
      <PreventiveHealthComponent />
    </>
  )
}

