
import Description from "./components/Description";
import Header from "./components/Header";
import ObjectView from "./components/ObjectView"
import { Banner, Body, Page, Row } from "./styles";

function App() {
  return (
    <>
      <Page>
        <Body>
          <Header />
          <Banner>
            <Description />
            <ObjectView />
          </Banner>
        </Body>
      </Page>
    </>
  );
}

export default App;
