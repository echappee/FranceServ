<template>
  <div class="template">
    <!-- HEADER -->
    <header class="container-fluid header justify-content-between">
      <div class="d-flex align-items-center">
        <svg
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
          <g>
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

    <b-navbar class="p-0 m-0">
      <b-collapse
        id="collapse-menu-usager"
        class="w-100"
        is-nav="is-nav"
        accordion="menu-accordion"
      >
        <div
          class="
            subheader
            d-flex
            flex-column flex-md-row
            justify-content-md-center
            w-100
          "
        >
          <div
            class="
              menu-link
              bleu
              d-flex
              flex-row flex-md-column
              justify-content-md-center
              align-items-center
              p-0 p-md-2
            "
          >
            <nuxt-link
              class="my-2 stretched-link"
              to="/usager/ma-france-services"
            >
              <b-icon
                class="ml-3 mr-2 mx-md-0"
                icon="geo-alt"
                font-scale="2"
              ></b-icon>
            </nuxt-link>
            <p class="text-md-center">Ma France Services</p>
          </div>
          <div
            class="
              menu-link
              violet
              d-flex
              flex-row flex-md-column
              justify-content-md-center
              align-items-center
              p-0 p-md-2
            "
          >
            <nuxt-link class="my-2 stretched-link" to="/usager/demarche">
              <b-icon
                class="ml-3 mr-2 mx-md-0"
                icon="folder"
                font-scale="2"
              ></b-icon>
            </nuxt-link>
            <p class="text-md-center">Préparer ma démarche</p>
          </div>
          <div
            class="
              menu-link
              bleuCanard
              d-flex
              flex-row flex-md-column
              justify-content-md-center
              align-items-center
              p-0 p-md-2
            "
          >
            <nuxt-link class="my-2 stretched-link" to="/usager/rendez-vous">
              <b-icon
                class="ml-3 mr-2 mx-md-0"
                icon="chat-dots"
                font-scale="2"
              ></b-icon>
            </nuxt-link>
            <p class="text-md-center">Prendre rendez-vous</p>
          </div>
          <div
            class="
              menu-link
              rose
              d-flex
              flex-row flex-md-column
              justify-content-md-center
              align-items-center
              p-0 p-md-2
            "
          >
            <nuxt-link
              class="my-2 stretched-link"
              to="/usager/evaluer-ma-france-services"
            >
              <b-icon
                class="ml-3 mr-2 mx-md-0"
                icon="card-checklist"
                font-scale="2"
              ></b-icon>
            </nuxt-link>
            <p class="text-md-center">J'évalue ma France Services</p>
          </div>
          <div
            class="
              menu-link
              orange
              d-flex
              flex-row flex-md-column
              justify-content-md-center
              align-items-center
              p-0 p-md-2
            "
          >
            <a class="my-2 stretched-link" href="/" target="blank">
              <b-icon
                class="ml-3 mr-2 mx-md-0"
                icon="camera-video"
                font-scale="2"
              ></b-icon
            ></a>
            <p class="text-md-center">Visioconférence</p>
          </div>
          <div
            class="
              clickable
              menu-link
              vert
              d-flex
              flex-row flex-md-column
              justify-content-md-center
              align-items-center
              p-0 p-md-2
            "
          >
            <div class="my-2 stretched-link">
              <b-icon
                class="ml-3 mr-2 mx-md-0"
                icon="question-circle"
                font-scale="2"
              ></b-icon>
            </div>
            <p class="text-md-center">Signaler un problème</p>
          </div>
        </div>
      </b-collapse>
    </b-navbar>

    <div class="container">
      <h1 class="title">Ma France Services</h1>
      <div class="presentation">
        <p class="trait">
          Mises en place par le gouvernement depuis 2019, les « France Services
          » sont des lieux d'accueil où vous pouvez trouver l'aide dont vous
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
              <g>
                <path
                  d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"
                ></path>
                <path
                  d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                ></path>
              </g>
            </svg>

            <h5 class="mb-0 mb-md-0">Me géolocaliser</h5>
          </button>
        </div>
        <div class="resultats">
          <div v-if="resultats && resultats.length">
            {{ resultats.length }} résultats correspondent à votre recherche.
            <ul>
              <b-collapse visible class="justify-content-space-between">
                <b-card class="">
                  <div v-for="(element, index) in resultats" :key="index">
                    {{ element.properties.lib_france_services }}
                    {{ element.properties.code_postal }}
                  </div>
                </b-card>
              </b-collapse>
            </ul>
          </div>

          <div v-if="resultatDEPARTEMENT && resultatDEPARTEMENT.length">
            {{ resultatDEPARTEMENT.length }} résultats correspondent à votre
            recherche. Departement
            <b-list-group>
              <b-list-group-item
                v-for="(element, index) in resultatDEPARTEMENT"
                :key="index"
              >
                <div>{{ element.properties.lib_france_services }}</div>
                <div>{{ element.properties.code_postal }}</div>
                <!-- <b-card class="justify-content"
                  >{{ element.properties.ADRESSE }}
                  {{ element.properties.code_postal }}</b-card -->
              </b-list-group-item>
            </b-list-group>
          </div>

          <div v-if="resultatCP && resultatCP.length">
            {{ resultatCP.length }} résultats correspondent à votre recherche.
            CP
            <b-list-group>
              <b-list-group-item
                v-for="(element, index) in resultatCP"
                :key="index"
              >
                <div>{{ element.properties.lib_france_services }}</div>
                <div>{{ element.properties.code_postal }}</div>
                <!-- <b-card class="justify-content"
                  >{{ element.properties.ADRESSE }}
                  {{ element.properties.code_postal }}</b-card -->
              </b-list-group-item>
            </b-list-group>
          </div>

          <div v-else>
            {{ total }} France Services sont actuellement répertoriées.
          </div>

          <div
            v-if="
              (resultats && resultats.length) ||
              (resultatDEPARTEMENT && resultatDEPARTEMENT.length) ||
              (resultatCP && resultatCP.length === 0)
            "
          >
            Aucun resultat correspond à votre recherche
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

    resultatDEPARTEMENT(): any {
      const geolocalisations: any[] = require('assets/geo.json')
      const toReturnDEPARTEMENT: any[] = geolocalisations[0].features.filter(
        (feature: any) => feature.properties.DEPARTEMENT === this.query
      )
      return toReturnDEPARTEMENT
    },

    resultatCP(): any {
      const geolocalisations: any[] = require('assets/geo.json')
      const toReturnCP: any[] = geolocalisations[0].features.filter(
        (feature: any) =>
          feature.properties.code_postal.startsWith(this.query) &&
          this.query.length > 0
      )
      return toReturnCP
    },
    // zeero(): any {
    //   const geolocalisations: any[] = require('assets/geo.json')
    //   const CP = geolocalisations[0].features.filter((feature: any) =>
    //     feature.properties.code_postal.startsWith(this.query)
    //   )
    //   console.log
    //   return CP
    // },

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

<style lang="scss">
.container {
  margin: 0 auto;
  height: 100vh;
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
  z-index: 1;
}
a {
  color: grey;
  /* height: 20px; */
  /* margin: 10px 15px; */
}

.subheader {
  background-color: #f7f7f7;
  .menu-link {
    position: relative;
    transition: all 0.11s ease-in-out;
    a {
      color: #fff;
    }
    p {
      margin: 0;
      font-weight: bold;
      color: #fff;
    }
    &.bleu {
      background-color: $colorBleu;
      &:hover {
        background-color: darken($colorBleu, 5%);
      }
    }
    &.violet {
      background-color: $colorViolet;
      &:hover {
        background-color: darken($colorViolet, 5%);
      }
    }
    &.rose {
      background-color: $colorRose;
      &:hover {
        background-color: darken($colorRose, 5%);
      }
    }
    &.vert {
      background-color: $colorVert;
      &:hover {
        background-color: darken($colorVert, 5%);
      }
    }
    &.bleuCanard {
      background-color: $colorBleuCanard;
      &:hover {
        background-color: darken($colorBleuCanard, 5%);
      }
    }
    &.orange {
      background-color: $colorOrange;
      &:hover {
        background-color: darken($colorOrange, 5%);
      }
    }
    &.rouge {
      background-color: $colorRouge;
      &:hover {
        background-color: darken($colorRouge, 5%);
      }
    }
  }
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

  /* .m-md-2 {
    display: none;
  } */
}
</style>
