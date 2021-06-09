<template>
  <div class="template">
    <!-- HEADER -->
    <header class="container-fluid header justify-content-between">
      <div class="d-flex align-items-center">
        <svg
          data-v-147c69c6=""
          viewBox="0 0 16 16"
          width="1em"
          height="1em"
          focusable="false"
          role="img"
          aria-label="arrow left square"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="bi-arrow-left-square iconReturn b-icon bi align-items-center"
          style="font-size: 200%"
        >
          <g data-v-147c69c6="">
            <path
              fill-rule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
            ></path>
          </g>
        </svg>
        <div class="accueil pl-4 align-items-center">
          Mon Espace France Services
        </div>
      </div>
      <b-nav align="right" class="role">
        <b-nav-item active>Mon Espace Usager</b-nav-item>
        <b-nav-item>Mon Espace Agent</b-nav-item>
      </b-nav>
    </header>

    <div class="menuResponsive">
      <b-dropdown id="dropdown-1" text="Espace Usager" class="m-md-2">
        <b-dropdown-item>Ma France Services</b-dropdown-item>
        <b-dropdown-item>Préparer ma démarche</b-dropdown-item>
        <b-dropdown-item>Prendre rdv</b-dropdown-item>
        <b-dropdown-item>J'évalue ma France Services</b-dropdown-item>
        <b-dropdown-item>Visioconférence</b-dropdown-item>
        <b-dropdown-item>Signaler un problème</b-dropdown-item>
      </b-dropdown>
      <b-dropdown id="dropdown-1" text="Espace Agent" class="m-md-2">
      </b-dropdown>
    </div>
    <!-- NAVIGATION  -->
    <div
      data-v-147c69c6=""
      class="
        subheader
        d-flex
        flex-column flex-md-row
        justify-content-md-center
        w-100
      "
    >
      <div
        data-v-147c69c6=""
        class="
          menu-link
          bleu
          d-flex
          flex-row flex-md-column
          justify-content-md-center
          align-items-center
          p-0 p-md-2
          bg-success
        "
      >
        <a
          data-v-147c69c6=""
          href="/usager/ma-france-services"
          class="my-2 stretched-link nuxt-link-exact-active nuxt-link-active"
          aria-current="page"
          ><svg
            data-v-147c69c6=""
            viewBox="0 0 16 16"
            width="1em"
            height="1em"
            focusable="false"
            role="img"
            aria-label="geo alt"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi-geo-alt ml-3 mr-2 mx-md-0 b-icon bi"
            style="font-size: 200%"
          >
            <g data-v-147c69c6="">
              <path
                d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"
              ></path>
              <path
                d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
              ></path>
            </g></svg
        ></a>
        <p data-v-147c69c6="" class="text-md-center">Ma France Services</p>
      </div>
      <div
        data-v-147c69c6=""
        class="
          menu-link
          violet
          d-flex
          flex-row flex-md-column
          justify-content-md-center
          align-items-center
          p-0 p-md-2
          bg-secondary
        "
      >
        <a
          data-v-147c69c6=""
          href="/usager/demarche"
          class="my-2 stretched-link"
          ><svg
            data-v-147c69c6=""
            viewBox="0 0 16 16"
            width="1em"
            height="1em"
            focusable="false"
            role="img"
            aria-label="folder"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi-folder ml-3 mr-2 mx-md-0 b-icon bi"
            style="font-size: 200%"
          >
            <g data-v-147c69c6="">
              <path
                d="M.54 3.87L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"
              ></path>
            </g></svg
        ></a>
        <p data-v-147c69c6="" class="text-md-center">Préparer ma démarche</p>
      </div>
      <div
        data-v-147c69c6=""
        class="
          menu-link
          bleuCanard
          d-flex
          flex-row flex-md-column
          justify-content-md-center
          align-items-center
          p-0 p-md-2
          bg-info
        "
      >
        <a
          data-v-147c69c6=""
          href="/usager/rendez-vous"
          class="my-2 stretched-link"
          ><svg
            data-v-147c69c6=""
            viewBox="0 0 16 16"
            width="1em"
            height="1em"
            focusable="false"
            role="img"
            aria-label="chat dots"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi-chat-dots ml-3 mr-2 mx-md-0 b-icon bi"
            style="font-size: 200%"
          >
            <g data-v-147c69c6="">
              <path
                d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
              ></path>
              <path
                d="M2.165 15.803l.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"
              ></path>
            </g></svg
        ></a>
        <p data-v-147c69c6="" class="text-md-center">Prendre rendez-vous</p>
      </div>
      <div
        data-v-147c69c6=""
        class="
          menu-link
          rose
          d-flex
          flex-row flex-md-column
          justify-content-md-center
          align-items-center
          p-0 p-md-2
          bg-warning
        "
      >
        <a
          data-v-147c69c6=""
          href="/usager/evaluer-ma-france-services"
          class="my-2 stretched-link"
          ><svg
            data-v-147c69c6=""
            viewBox="0 0 16 16"
            width="1em"
            height="1em"
            focusable="false"
            role="img"
            aria-label="card checklist"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi-card-checklist ml-3 mr-2 mx-md-0 b-icon bi"
            style="font-size: 200%"
          >
            <g data-v-147c69c6="">
              <path
                d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
              ></path>
              <path
                d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"
              ></path>
            </g></svg
        ></a>
        <p data-v-147c69c6="" class="text-md-center">
          J'évalue ma France Services
        </p>
      </div>
      <div
        data-v-147c69c6=""
        class="
          menu-link
          orange
          d-flex
          flex-row flex-md-column
          justify-content-md-center
          align-items-center
          p-0 p-md-2
          bg-info
        "
      >
        <a
          data-v-147c69c6=""
          href="https://www.mon-espace-france-services.fr/visio"
          target="blank"
          class="my-2 stretched-link"
          ><svg
            data-v-147c69c6=""
            viewBox="0 0 16 16"
            width="1em"
            height="1em"
            focusable="false"
            role="img"
            aria-label="camera video"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi-camera-video ml-3 mr-2 mx-md-0 b-icon bi"
            style="font-size: 200%"
          >
            <g data-v-147c69c6="">
              <path
                fill-rule="evenodd"
                d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175l3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"
              ></path>
            </g></svg
        ></a>
        <p data-v-147c69c6="" class="text-md-center">Visioconférence</p>
      </div>
      <div
        data-v-147c69c6=""
        class="
          d-flex
          flex-row flex-md-column
          justify-content-md-center
          align-items-center
          p-0 p-md-2
          bg-success
        "
      >
        <div data-v-147c69c6="" class="my-2 stretched-link">
          <svg
            data-v-147c69c6=""
            viewBox="0 0 16 16"
            width="1em"
            height="1em"
            focusable="false"
            role="img"
            aria-label="question circle"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi-question-circle ml-3 mr-2 mx-md-0 b-icon bi"
            style="font-size: 200%"
          >
            <g data-v-147c69c6="">
              <path
                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
              ></path>
              <path
                d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"
              ></path>
            </g>
          </svg>
        </div>
        <p data-v-147c69c6="" class="text-md-center">Signaler un problème</p>
      </div>
    </div>

    <div class="container">
      <h1 class="title">Ma France Services</h1>
      <div class="presentation">
        <p class="trait">
          Mises en place par le gouvernement depuis 2019, les « France Services
          » sont des lieux d’accueil où vous pouvez trouver l’aide dont vous
          avez besoin pour réaliser vos démarches administratives (impôts, Caf,
          retraites, etc.). Les France Services sont présentes partout en
          France, où que vous soyez. Fini les casse-têtes administratifs, prenez
          rendez-vous dans votre France Services !
        </p>
      </div>

      <!-- FORM -->
      <div class="container">
        <!-- input -->
        <div class="row">
          <b-form-group
            id="input-group-2"
            label="Recherchez la France Services de votre territoire :"
            label-for="input-2"
            class="col-7"
          >
            <b-input-group prepend="Commune ou code postal" class="mb-2">
              <b-form-input
                v-model="query"
                placeholder="Insérer une adresse"
                type="text"
                class="col-6"
              ></b-form-input>
            </b-input-group>
          </b-form-group>

          <!-- bouton -->
          <button
            data-v-38957b0b=""
            type="button"
            class="
              btn
              geolocation
              p-3 p-md-4
              d-flex
              flex-md-column
              align-items-center
              justify-content
              btn-secondary
              col-3
            "
            @click="localisationFranceServ"
          >
            <svg
              data-v-38957b0b=""
              viewBox="0 0 16 16"
              width="1em"
              height="1em"
              focusable="false"
              role="img"
              aria-label="geo alt"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi-geo-alt geo mb-md-3 mr-3 mr-md-0 b-icon bi"
              style="font-size: 200%"
            >
              <g data-v-38957b0b="">
                <path
                  d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"
                ></path>
                <path
                  d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                ></path>
              </g>
            </svg>

            <h5 data-v-38957b0b="" class="mb-0 mb-md-0">Me géolocaliser</h5>
          </button>
        </div>
        <div class="resultats">
          <div v-if="resultats && resultats.length">
            {{ resultats.length }} résultats correspondent à votre recherche.
            <ul>
              <b-collapse visible class="justify-content-space-betweens">
                <b-card class="">
                  <div v-for="(element, index) in resultats" :key="index">
                    {{ element.properties.lib_france_services }}
                    {{ element.properties.code_postal }}
                  </div>
                </b-card>
              </b-collapse>
            </ul>
          </div>
          <div v-else>
            {{ total }} France Services sont actuellement répertoriées.
          </div>
          <div v-if="fsProximite.properties">
            <b-collapse visible class="col-10">
              <b-card class="mt-11">
                {{ fsProximite.properties.lib_france_services }}
                {{ fsProximite.properties.code_postal }}
                <!-- </div> -->
              </b-card>
            </b-collapse>
          </div>
        </div>
      </div>
    </div>

    <!-- FOOTER -->
    <div class="footer d-flex row fill fixed-bottom">
      <span class="col">2021 - Mon Espace France Services</span>
      <a href="/MentionsLegales.vue" class="col"> Mentions légales</a>
      <a href="" class="col">Politique de confidentialité</a>
      <a href="" class="col"> Déclaration relative aux cookies</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import haversine from 'haversine-distance'

export default Vue.extend({
  data() {
    return {
      query: '' as string,
      fsProximite: {} as any,
    }
  },

  computed: {
    // Ne pas oublier de typer sinon ERREURS.Ici type any car tableau
    resultats(): any {
      // 1. on récupère le fichier geo.json
      // @ts-ignore
      // 2. On rentre dans le tableau, ici c'est le premier objet qui nous intéresse donc [0]. ensuite c'est la propriété features de l'objet.
      // 3.On utilise la méthode filter pour récupérer les éléments correspondant à la recherche.
      const geolocalisations: any[] = require('assets/geo.json')
      const toReturn: any[] = geolocalisations[0].features.filter(
        (feature: any) =>
          feature.properties.lib_france_services.toLowerCase().trim() ===
          this.query.toLowerCase().trim()
      )
      // Bien penser à retourner le résultat
      return toReturn
    },

    total(): number {
      const geolocalisations: any[] = require('assets/geo.json')
      const total: number = geolocalisations[0].features.length
      return total
    },
  },
  methods: {
    localisationFranceServ(): void {
      let FranceServGeolcalisee = {} as any
      let distanceMinimum = undefined as number | undefined
      const geolocalisations: any[] = require('assets/geo.json')
      // console.error('ICI1)')
      navigator.geolocation.getCurrentPosition((position) => {
        const longitude: number = position.coords.latitude
        const latitude: number = position.coords.longitude

        geolocalisations[0].features.forEach(
          (FranceService: any, index: number) => {
            const longitudeFS: number = FranceService.properties.LONGITUDE
            const latitudeFS: number = FranceService.properties.LATITUDE
            const distancecalculee = haversine(
              [latitude, longitude],
              [longitudeFS, latitudeFS]
            )

            if (index === 0) {
              distanceMinimum = distancecalculee
              FranceServGeolcalisee = FranceService
            } else if (distancecalculee < distanceMinimum) {
              distanceMinimum = distancecalculee
              FranceServGeolcalisee = FranceService
            }
          }
        )

        this.fsProximite = FranceServGeolcalisee
      })

      // TEST
      // navigator.geolocation.getCurrentPosition(this.maFonction(position))

      // console.error('ICI2')
    },

    //   mafonction(position: number[]): void {
    //     const longitude: number = position.coords.latitude
    //     const latitude: number = position.coords.longitude

    //     geolocalisations[0].features.forEach(
    //       (FranceServices: any, index: number) => {
    //         const longitudeFS: number = FranceServices.properties.LONGITUDE
    //         const latitudeFS: number = FranceServices.properties.LATITUDE
    //         const distancecalculee = haversine(
    //           [latitude, longitude],
    //           [longitudeFS, latitudeFS]
    //         )

    //         if (index === 0) {
    //           distanceMinimum = distancecalculee
    //           FranceServGeolcalisee = FranceServices
    //         } else if (distancecalculee < distanceMinimum) {
    //           distanceMinimum = distancecalculee
    //           FranceServGeolcalisee = FranceServices
    //         }
    //       }
    //     )

    //     this.fsProximite = FranceServGeolcalisee
    //   },
  },

  //   function geo_success(position) {
  //        const geolocalisations: any[] = require('assets/geo.json')

  //   AfficherLaGeolocalisationFS(position.coords.latitude, position.coords.longitude);
  // }}
})
</script>

<style>
.container {
  margin: 0 auto;
  /* height: 100vh; */
  /* display: block; */
  justify-content: center;
  align-items: center;
  text-align: center;
}
.menuResponsive {
  display: none;
}
.header {
  background-color: #1a6c9f;
  color: #fff;
  height: 70px;
  display: flex;
  align-items: center;
}
.accueil {
  font-size: 20px;
}

.nav-link {
  color: white;
  transition: all 0.11s ease-in-out;
}
.subheader {
  color: #f7f7f7;
  font-size: 15px;
  font-weight: bold;
}
svg {
  color: white;
}

.title {
  margin: 50px;
  font-weight: 200;
  color: #196d9f;
  font-family: Helvetica, sans-serif;
}
.presentation {
  /* display: flex; */
  margin-top: 50px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: left;
}
.trait {
  border-left: 5px solid #159dd3;
  padding-left: 10px;
}

.btn {
  background-color: #159dd3;
  color: #fff;
  margin-top: 20px;
}
label {
  text-align: left !important;
  margin-top: 30px;
}
.resultats {
  text-align: left;
}
.footer {
  color: grey;
  background: #f7f7f7;
  height: 50px;
  align-items: center;
  padding-left: 50px;
}
a {
  color: grey;
  /* height: 20px; */
  /* margin: 10px 15px; */
}
@media (max-width: 576px) {
  footer {
    display: block;
  }
  .menuResponsive {
    display: flex;
  }
  .role {
    display: none;
  }
  .accueil {
    font-size: 20px;
  }
  .subheader {
    display: none;
  }
  button {
    display: none;
  }
}
</style>
