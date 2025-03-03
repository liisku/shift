import { Box } from "@mui/material";

import AboutMe from "./AboutMe";

const AboutUs = () => {
  return (
    <Box sx={{ p: 4 }}>
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
  );
};

export default AboutUs;
