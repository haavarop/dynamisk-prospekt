import React from "react"
import ContactForm from "../components/ContactForm"
import Container from "../components/Container"
import Layout from "../components/layout"
import TextContainer from "../components/TextContainer"
import "../styles/global.scss"

export default () => (
  <Layout>
    <Container>
      <TextContainer
        title={"Hvem er vi?"}
        text={`Vi tilbyr tjenester innenfor 3D-visualisering og fotografering av eiendommer, alt fra mindre leiligheter 
               til større næringseiendommer. Med våre tjenester kan din bedrift få nøyaktige mål og visuelle 
               fremstillinger på detaljnivå, med stillbilder og dynamiske 3D-visualiseringer i markedets klareste
               og beste oppløsninger. Enklere og bedre har det aldri vært. Se selv her:
        `}
      />
    </Container>
    <Container>
      <iframe
        width={853}
        height={480}
        src={`https://my.matterport.com/showcase-beta?m=VLNkBVFpBUT&play=1`}
        allowFullScreen
        allow={`vr`}
        id={`showcase_iframe`}
        title="3D-demo"
      />
    </Container>
    <Container>
      <ContactForm />
    </Container>
  </Layout>
)
