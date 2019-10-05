import { Link } from "gatsby"
import React from "react"
import Container from "../components/Container"
import ApartmentIcon from "../components/Icons/apartment"
import Floorplan from "../components/Icons/floorplan"
import HousesIcon from "../components/Icons/houses"
import Layout from "../components/layout"
import TextContainer from "../components/TextContainer"
import "../styles/global.scss"
import "../styles/home.scss"

export default () => (
  <Layout>
    <Container>
      <div>
        <TextContainer
          header
          title={"Redefinert fotografering av eiendom - enkelt og greit"}
        />
        <Link to="/contact">
          <button className="button">Ta Kontakt</button>
        </Link>
      </div>
      <iframe
        width={600}
        height={400}
        src={`https://my.matterport.com/showcase-beta?m=VLNkBVFpBUT&play=1`}
        allowFullScreen
        allow={`vr`}
        id={`showcase_iframe`}
        title="3D-demo"
      />
    </Container>
    <Container>
      <Floorplan width={490} height={360} />
      <TextContainer
        textRight
        title={`Digital visning`}
        text={`Tradisjonelle fotoløsninger og plantegninger har ikke forutsetninger for å fortelle hele historien om en eiendom. 
               Våre løsninger har det. Vi gir deg muligheten til å manøvrere deg rundt på en eiendom og se den i et som om det skulle være et dukkehus dukkehusperspektiv. Det er helt avgjørende for å forstå boligens struktur og kvalitet. `}
      />
    </Container>
    <Container>
      <TextContainer
        title={`Hva gjør vi?`}
        text={`
        Vi tilbyr tjenester innen fotografering og 3D-visualisering av eiendommer, enten det er mindre leiligheter, hus eller større næringseiendommer.
        Våre stillbilder og 3D-fremstillinger er i markedets klareste og beste oppløsninger, samtidig som at våre formater er mer brukervennlige enn noen gang før. I tillegg kan våre løsninger generere plantegninger, nøyaktige mål og visuelle fremstillinger på detaljnivå.`}
      />
      <div className="no-mobile">
        <ApartmentIcon width={490} height={372} />
      </div>
    </Container>
    <Container>
      <HousesIcon width={490} height={354} />
      <TextContainer
        textRight
        title={`Hvordan kan våre tjenester hjelpe din bedrift?`}
        text={`Teknologien vi tilbyr innebærer visuelle fremstilling av eiendommer 
        som har vist seg å gi konkurransefortrinn til bedrifter verden over. 
        Dette er blant annet fordi: `}
        list={[
          `Vår teknologi gir dine kunder mulighet for en virtuell omvisning av eiendommer.`,
          `Dine kunder får et mer virkelighetsnært og detaljert bilde av eiendommer.`,
          `Bruk av våre tjenester gjør salgsannonsene dine unike.`,
        ]}
      />
    </Container>
    <Container>
      <TextContainer
        textTop
        title={`Slik skaper vi verdi for din bedrift`}
        list={[
          `Våre dynamiske prospekter fremstilles i høy oppløsning.`,
          `Dynamiske modeller gir en unik oversikt av eiendommer.`,
          `Det er mulig å integrere løsningene våre på dine nettsider.`,
          `I andre land har lignende teknologi hjulpet bedrifter å øke nettsideaktivitet betraktelig.`,
          `Bedrifter fra utlandet med lignende teknologi rapporterer at salgsobjekter står halvparten så lenge på markedet før salg.`,
          `Bruk av våre tjenester hjelper din bedrift å nå en større målgruppe.`,
        ]}
      />
      <TextContainer
        textTop
        title={`Våre tjenester er også aktuelle for andre aktører`}
        list={[
          `Tjenestene våre kan benyttes for å kartlegge større næringsbygg som skoler, hotell eller kontorbygg.`,
          `3D-fremstillinger er et effektivt virkemiddel for å kartlegge og organisere konstruksjonsprosesser.`,
          `I forbindelse med forsikringssaker bidrar våre tjenester til forbedret dokumentasjon av eiendommer. På denne måten kan et 3D-prospekt være et sikkerhetsnett.`,
          `Flere velger å selge og leie ut boligene sine uten megler. La oss hjelpe deg å ta annonsen din til nye høyder.`,
        ]}
      />
    </Container>
    <Container>
      <h3 style={{ maxWidth: "600px" }}>
        Dessuten har vi konkurransedyktige priser, og vi strekker oss så langt
        som nødvendig for å gjøre våre kunder 100% fornøyd.
      </h3>
    </Container>
  </Layout>
)
