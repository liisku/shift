import React from "react";
import { Box, Typography } from "@mui/material";
import Header from "../../components/Header";
import { MenuNavItem } from "../../components/Header";
import Footer from "../../components/Footer";
import HalfBanner from "../../components/HalfBanner";
import AboutMe from "../../components/AboutMe";
import Banner from "../../components/Banner";
import SectionHeading from "../../components/SectionHeading";
import InfoCircle from "../../components/InfoCircle";
import Bullet from "../../components/Bullet";

const HomePage: React.FC = () => {
  const menuItems: MenuNavItem[] = [
    {
      id: "services",
      title: "Palvelumme",
    },
    {
      id: "about",
      title: "Meistä",
    },
    {
      id: "contacts",
      title: "Yhteystiedot",
    },
  ];

  return (
    <>
      <Box id="top">
        <Header
          title="SHIFT"
          subtitle="Uusi terveempi työaika"
          menuItems={menuItems}
        />

        <Banner backgroundUrl="office_people_chatting.jpg" overlay={true}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "flex-end",
              pb: [7, 5, 0, 0],
            }}
          >
            <Box
              sx={{
                width: "fit-content",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                p: [3, 4, 5, 6],
              }}
            >
              <Box
                sx={{
                  width: ["100px", "112px", "128px", "128px"],
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: [6, 6, 6, 6],
                }}
              >
                <img
                  src="certificate.png"
                  alt="Uusi terveempi työaika"
                  width="100%"
                />
              </Box>
              <Box sx={{ width: ["285px", "350px", "400px", "450px"] }}>
                <img src="logo.png" alt="SHIFT-valmennus" width="100%" />
              </Box>
              <Typography
                variant="h1"
                color="white"
                sx={{
                  fontSize: ["1.5rem", "1.7rem", "1.85rem", "1.85rem"],
                  textAlign: "center",
                  maxWidth: "400px",
                }}
              >
                yritysvalmennukset & inspiraatiopäivät
              </Typography>
            </Box>
          </Box>
        </Banner>

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
            tuottavuutta.
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Ihmisiltä puuttuu käsitys terveyttä edistävästä työajasta.
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
            kannalta tarpeeksi ja harjoitellaan uusia toimintamalleja.
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Uusi yhteinen työaika on terveellisempää, tehokkaampaa ja
            turvallisempaa.
          </Typography>
        </HalfBanner>

        <HalfBanner
          imageUrl="training_session.jpg"
          imageAltText="Koulutuspäivä meneillään"
          sx={{ mt: 2 }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <InfoCircle
              texts={["Työaika voi", "olla terveyttä", "edistävää!"]}
              sx={{ mb: 4 }}
            />
          </Box>

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

        <SectionHeading title="Palvelumme" sectionId="services" />

        <Box sx={{ maxWidth: "1200px", mx: "auto", mt: 2 }}>
          <Box sx={{ p: 2 }}>
            <Typography variant="h2" color="primary">
              Inspiraatiopäivät ja luennot (1-3h)
            </Typography>
            <Typography variant="body1">
              Tarjoamme yrityksille ja yhteisöille inspiroivia hetkiä
              mielenkiintoisten aiheiden parissa. Aiheet, joista usein puhumme
              ovat esimerkiksi:
            </Typography>

            <Typography variant="h3" sx={{ mb: 0, mt: 4 }}>
              1. Työssä jaksaminen ja palautuminen
            </Typography>
            <Typography variant="h4" color="primary.main" sx={{ mb: 0 }}>
              Petter Kukkonen
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              Millaisia haasteita vaativa, paljon matkustamista sisältävä
              reissutyö pitää sisällään ja mitkä asiat voivat viedä uupumuksen
              äärelle? Aiheita ja oivalluksia palautumisesta käsitellään
              yhdistetyn maajoukkueen toimintaympäristön näkökulmasta.
            </Typography>

            <Typography variant="h3" sx={{ mb: 0, mt: 4 }}>
              2. Kaikki liike merkitsee
            </Typography>
            <Typography variant="h4" color="primary.main" sx={{ mb: 0 }}>
              Liis Kukkonen
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              Ihmiset yleensä yliarvioivat toimintansa vaikutukset lyhyellä
              aikavälillä - he myös aliarvioivat tekojensa vaikutukset pitkällä
              aikavälillä. Meillä kaikilla on viikossa käytettävissämme
              seitsemän päivää ja vuorokaudessa 24 tuntia. Onko mahdollista
              parantaa terveyttä, tuottavuutta sekä lisätä aktiivisuutta
              työpäiviin niin, ettei siihen käytettäisi aikaa muun elämän
              kustannuksella? Liisin esitys lisää ymmärrystä liikkumisen
              hyödyistä sekä mielelle että keholle.
            </Typography>

            <Typography variant="h3" sx={{ mb: 0, mt: 4 }}>
              3. Yhdessä olemme enemmän
            </Typography>
            <Typography variant="h4" color="primary.main" sx={{ mb: 0 }}>
              Tiimipäivä Liis ja Petter Kukkonen
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              Luomme kulttuurin, jossa suhtaudutaan uudella tavalla tiimityöhön.
              Tässä kulttuurissa ymmärretään millainen vaikutus meistä
              jokaisella on työyhteisöön.
            </Typography>

            <Typography variant="h2" color="primary" sx={{ mt: 6 }}>
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

        <SectionHeading title="Meistä" sectionId="about" />

        <Box sx={{ maxWidth: "1200px", mx: "auto", mt: 2 }}>
          <Box sx={{ p: 2 }}>
            <AboutMe
              key="petter"
              name="Petter Kukkonen"
              role="Valmentaja"
              imageUrl="petter.jpg"
              quote="Elämä on jatkuvaa tasapainoilua, sama koskee suhdetta jaksamisen ja
            palautumisen välillä. Tässä pystyn auttamaan sinua."
              texts={[
                "Olen lähtöisin Lieksasta. Jyväskylään päädyin syksyllä 2004, jolloin aloitin liikuntatieteiden opiskelun yliopistossa. Urheilun ja liikunnan eri tasojen kanssa olen ollut tekemisissä koko ikäni. Lapsuudessani kävin läpi monipuolisen lajikirjon, mutta päädyin lopulta talvilajeihin, mäkihyppyyn ja yhdistettyyn. Ammattivalmentajana olen tehnyt 15-vuotisen uran. Nykyisessä työssäni kehitän Laajavuoren ulkoilualuetta sekä yritän löytää keinoja lasten liikunnan edistämiseksi.",
                "Liikkuminen on minulla verissä. Vuodenajan mukaan tykkään juosta, pyöräillä sekä hiihtää. Kuntosalilla käyn kerran viikossa. Muita harrastuksia ovat lukeminen sekä kirjoittaminen. Teen myös asiantuntijatöitä Ylen Talvistudiossa ja tarjoan vuokrakoteja ihmisille.",
                "Jaksamisen kannalta keskeistä on ymmärtää kehon kokonaisvaltaiseen rasitukseen vaikuttavat tekijät: työ / opiskelu, harrastukset ja muu arki. Kun yhden muuttujan kuorma kasvaa, kahden muun on annettava tilaa. Palautumisen näkökulmasta meillä tulee olla taito ja uskallus kuunnella kehon signaaleja. Ylikuormittunut elimistö on sama kuin kertyvä velka - se pitää lopulta maksaa takaisin.",
              ]}
            />
            <AboutMe
              key="liis"
              name="Liis Kukkonen"
              role="Fysioterapeutti"
              imageUrl="liis.jpg"
              quote="Haluan antaa panokseni sen eteen, että mahdollisimman moni tuntisi aktiivisemman elämäntavan hyödyt kehossaan ja samaan aikaan voisi muokata työaikaa mahdollisimman aktiiviseksi."
              texts={[
                "Olen koko työurani työskennellyt terveydenhuoltoalalla. Ammatiltani olen fysioterapeutti ja tällä hetkellä toimin myös esihenkilönä Mehiläisessä. SHIFT-valmennuksessa toimin asiantuntijana. Ammattini kautta näen usein kuinka tärkeässä roolissa elämäntapavalinnat ovat ihmisten hyvän terveyden ja hyvinvoinnin kannalta. Opittujen elämäntapojen ja arjen valintojen keskeinen merkitys koetaan valitettavasti myös silloin, kun kohtaamme terveydellisiä haasteita. Hyödynnän valmennuksissa myös esihenkilötyön kautta saatua kokemusta.",
                "Vapaa ajallani tykkään hölkätä poluilla ja haastavissa maastoissa sekä osallistua polkujuoksutapahtumiin. Lisäksi hiihdän ja laskettelen paljon. Mielenkiinnon kohteitani ovat myös matkustaminen, kielet ja erilaiset kulttuurit.",
              ]}
              sx={{ mt: 6 }}
            />
          </Box>
        </Box>
      </Box>

      <Footer id="contacts">
        <Typography variant="h3" color="primary">
          Yhteystiedot
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: ["column", "row"],
              gap: [2, 6],
            }}
          >
            <Box>
              <Typography variant="h6" fontWeight="bold">
                Liis Kukkonen
              </Typography>
              <Typography variant="body1">liiskukkonen@gmail.com</Typography>
              <Typography variant="body1">+358 44 0522506</Typography>
            </Box>
            <Box>
              <Typography variant="h6" fontWeight="bold">
                Petter Kukkonen
              </Typography>
              <Typography variant="body1">petterkukkonen@gmail.com</Typography>
              <Typography variant="body1">+358 40 1207772</Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography variant="body2" sx={{ mt: 6 }}>
            <span style={{ fontWeight: "bold" }}>SHIFT</span>
            <span style={{ paddingLeft: "8px", paddingRight: "8px" }}>|</span>
            <span>UUSI TERVEEMPI TYÖAIKA</span>
          </Typography>
        </Box>
      </Footer>
    </>
  );
};

export default HomePage;
