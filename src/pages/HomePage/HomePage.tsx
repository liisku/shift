import React from "react";
import { Box, Typography } from "@mui/material";
import Header from "../../components/Header";
import AboutUs from "./components/AboutUs";
import Footer from "../../components/Footer";
import Hero from "./components/Hero";
import HalfBanner from "../../components/HalfBanner";
import Quote from "../../components/Quote";
const HomePage: React.FC = () => {
  return (
    <>
      <Box id="top">
        <Header />

        <Hero />

        <HalfBanner
          imageUrl="sofa_sidelight.jpg"
          imageAltText="Aurinkoinen sohvanurkkaus avotoimistossa"
          sx={{
            mt: 2,
          }}
        >
          <Typography variant="h2" color="primary">
            Haaste
          </Typography>
          <Typography variant="body1">
            Työssä uupuminen on hiljainen epidemia, joka uhkaa yritysten
            menestystä. Pitkäaikainen istuminen ja vähäinen fyysinen aktiivisuus
            johtavat terveysongelmiin, heikentävät työhyvinvointia ja laskevat
            tuottavuutta. Ihmisiltä puuttuu käsitys terveyttä edistävästä
            työajasta.
          </Typography>
        </HalfBanner>

        <HalfBanner
          imageSide="right"
          imageUrl="man_rides_a_bike.jpg"
          imageAltText="Mies työmatkalla pyörällä"
          sx={{
            mt: 2,
          }}
        >
          <Typography variant="h2" color="primary">
            Muutos
          </Typography>
          <Typography variant="body1">
            Luomme kulttuurin, jossa suhtaudutaan uudella tavalla liikkumiseen.
            Tässä kulttuurissa ymmärretään millainen liikkuminen on terveyden
            kannalta tarpeeksi ja harjoitellaan uusia toimintamalleja. Uusi
            yhteinen työaika on terveellisempää, tehokkaampaa ja turvallisempaa.
          </Typography>
        </HalfBanner>

        <Box
          sx={{
            width: "100%",
            maxWidth: "1200px",
            mx: "auto",
            my: 4,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Quote
            backgroundColor="primary.main"
            color="white"
            sx={{
              width: ["80%", "70%", "50%"],
              textAlign: "center",
              py: 8,
            }}
          >
            Työaika voi olla terveyttä edistävää!
          </Quote>
        </Box>

        <HalfBanner
          imageUrl="training_session.jpg"
          imageAltText="Koulutuspäivä meneillään"
          sx={{
            mt: 2,
          }}
        >
          <Typography variant="h2" color="primary">
            SHIFT-menetelmä
          </Typography>
          <Typography variant="body1">
            Menetelmämme perustuu huippu-urheilun ja terveydenhuollon alalta
            saatuun kokemukseen. Se yhdistää omat havaintomme sekä aiheeseen
            liittyvän tutkimustiedon.
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Valmennuskohtaamisissamme varmistamme autenttisen ja rehellisen
            tilan, jossa voi tulla esiin heikkouksineen ja oivaltaa uutta.
          </Typography>
        </HalfBanner>

        <Box
          id="services"
          sx={{
            width: "100%",
            backgroundColor: "grey.200",
            mt: 2,
            h3: {
              textAlign: "center",
            },
          }}
        >
          <Quote>Palvelumme</Quote>
        </Box>

        <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
          <Box sx={{ p: 4 }}>
            <Typography variant="h2" color="primary">
              Inspiraatiopäivät ja luennot (1-3h)
            </Typography>
            <Typography variant="body1">
              Tarjoamme yrityksille ja yhteisöille inspiroivia hetkiä
              mielenkiintoisten aiheiden parissa. Aiheet, joista usein puhumme
              ovat esimerkiksi:
            </Typography>
            <Typography variant="h3" sx={{ mt: 2 }}>
              1. "Työssä jaksaminen ja palautuminen" (Petter Kukkonen)
            </Typography>
            <Typography variant="body1">
              Millaisia haasteita vaativa, paljon matkustamista sisältävä
              reissutyö pitää sisällään ja mitkä asiat voivat viedä uupumuksen
              äärelle? Aiheita ja oivalluksia palautumisesta käsitellään
              yhdistetyn maajoukkueen toimintaympäristön näkökulmasta.
            </Typography>
            <Typography variant="h3" sx={{ mt: 2 }}>
              2. "Kaikki liike merkitsee" (Liis Kukkonen)
            </Typography>
            <Typography variant="body1">
              Ihmiset yleensä yliarvioivat toimintansa vaikutukset lyhyellä
              aikavälillä - he myös aliarvioivat tekojensa vaikutukset pitkällä
              aikavälillä. Meillä kaikilla on viikossa käytettävissämme
              seitsemän päivää ja vuorokaudessa 24 tuntia. Onko mahdollista
              parantaa terveyttä, tuottavuutta sekä lisätä aktiivisuutta
              työpäiviin niin, ettei siihen käytettäisi aikaa muun elämän
              kustannuksella? Liisin esitys lisää ymmärrystä liikkumisen
              hyödyistä sekä mielelle että keholle.
            </Typography>
            <Typography variant="h3" sx={{ mt: 2 }}>
              3. "Yhdessä olemme enemmän" (tiimipäivä Liis ja Petter Kukkonen)
            </Typography>
            <Typography variant="body1">
              Luomme kulttuurin, jossa suhtaudutaan uudella tavalla tiimityöhön.
              Tässä kulttuurissa ymmärretään millainen vaikutus meistä
              jokaisella on työyhteisöön.
            </Typography>
            <Typography variant="h3" sx={{ mt: 2 }}>
              Yritysvalmennukset
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Toteutamme erimittaisia valmennuksia, joissa tavoite sovitaan
              yhdessä yrityksen kanssa.
            </Typography>
            <img src="palvelumalli.jpg" alt="Palvelumallimme" width="100%" />
            <Typography variant="body1" sx={{ mt: 2 }}>
              Ole yhteydessä tarkemmista yksityiskohdista!
            </Typography>
          </Box>
        </Box>

        <Box
          id="about"
          sx={{
            width: "100%",
            backgroundColor: "grey.200",
            mt: 2,
            h3: {
              textAlign: "center",
            },
          }}
        >
          <Quote>Meistä</Quote>
        </Box>

        <Box id="about" sx={{ maxWidth: "1200px", mx: "auto" }}>
          <AboutUs />
        </Box>
      </Box>

      <Box id="contacts">
        <Footer />
      </Box>
    </>
  );
};

export default HomePage;
