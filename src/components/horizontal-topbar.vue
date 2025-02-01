<script>
// import simplebar from "simplebar-vue";
import { userService } from '@/helpers/fakebackend/user.service';
import axios from 'axios';
import i18n from "../i18n";
import { layoutComputed } from "@/state/helpers";
import TranslateModal from "@/components/translate";

export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...layoutComputed,
  },
  components: { 
    TranslateModal
    // simplebar 
  },
  data() {
    return {
      transactionData:[],
      user: [],
      // languages: [
      //   {
      //     flag: require("@/assets/images/flags/us.jpg"),
      //     language: "en",
      //     title: "English",
      //   },
      //   {
      //     flag: require("@/assets/images/flags/french.jpg"),
      //     language: "fr",
      //     title: "French",
      //   },
      //   {
      //     flag: require("@/assets/images/flags/spain.jpg"),
      //     language: "es",
      //     title: "spanish",
      //   },
      //   {
      //     flag: require("@/assets/images/flags/chaina.png"),
      //     language: "zh",
      //     title: "Chinese",
      //   },
      //   {
      //     flag: require("@/assets/images/flags/arabic.png"),
      //     language: "ar",
      //     title: "Arabic",
      //   },
      // ],
      // current_language: "en",
    };
  },
  methods: {
    initFullScreen() {
      document.body.classList.toggle("fullscreen-enable");
      if (
        !document.fullscreenElement &&
        /* alternative standard method */ !document.mozFullScreenElement &&
        !document.webkitFullscreenElement
      ) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(
            Element.ALLOW_KEYBOARD_INPUT
          );
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    },
    toggleRightSidebar() {
      this.$parent.toggleRightSidebar();
    },
    toggleMenu() {
      let element = document.getElementById("topnav-menu-content");
      element.classList.toggle("show");
    },
    setLanguage(locale) {
      i18n.locale = locale;
      this.current_language = i18n.locale;
    },
    getAfricanaData(){
    var self = this
    var user = JSON.parse(localStorage.getItem("user"));

    axios.get(userService.API_URL+"profile_api/v1/get_docs/"+user.email)
    .then(function (response) {
      // console.log(JSON.stringify(response.data[0].projectUpload.image))
      self.transactionData = response.data
      // self.image = 'data:image/png;base64,'+ btoa (this.transactionData[0].projectUpload.image);
    })
    .catch(function (error) {
      console.log(error)
    })
  },
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.getAfricanaData()
    // this.value = this.languages.find((x) => x.language === i18n.locale);
    // this.text = this.value.title;
    // this.flag = this.value.flag;
  },
  watch: {
    type: {
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "dark":
              document.body.setAttribute("data-topbar", "dark");
              break;
            case "light":
              document.body.setAttribute("data-topbar", "light");
              document.body.removeAttribute("data-layout-size", "boxed");
              break;
            case "colored":
              document.body.setAttribute("data-topbar", "colored");
              document.body.removeAttribute("data-layout-size", "boxed");
              break;
            default:
              document.body.setAttribute("data-topbar", "dark");
              break;
          }
        }
      },
    },
    width: {
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "boxed":
              document.body.setAttribute("data-layout-size", "boxed");
              break;
            case "fluid":
              document.body.setAttribute("data-layout-mode", "fluid");
              document.body.removeAttribute("data-layout-size");
              break;
            default:
              document.body.setAttribute("data-layout-mode", "fluid");
              break;
          }
        }
      },
    },
  },
};
</script>

<template>
  <header id="page-topbar">
    <div class="navbar-header">
      <div class="d-flex">
        <!-- LOGO -->
        <div class="navbar-brand-box">
          <a href="index.html" class="logo logo-dark">
            <span class="logo-sm">
              <img src="@/assets/images/favicon.png" alt height="22" />
            </span>
            <span class="logo-lg">
              <img src="@/assets/images/favicon.png" alt height="20" />
            </span>
          </a>

          <a href="index.html" class="logo logo-light">
            <span class="logo-sm">
              <img src="@/assets/images/favicon.png" alt height="22" />
            </span>
            <span class="logo-lg">
              <img src="@/assets/images/favicon.png" alt height="20" />
            </span>
          </a>
        </div>

        <button
          type="button"
          class="btn btn-sm px-3 font-size-24 d-lg-none header-item"
          data-toggle="collapse"
          @click="toggleMenu"
        >
          <i class="ri-menu-2-line align-middle"></i>
        </button>

        <!-- App Search-->
        <form class="app-search d-none d-lg-block">
          <div class="position-relative">
            <input
              type="text"
              class="form-control"
              :placeholder="$t('navbar.search.text')"
            />
            <span class="ri-search-line"></span>
          </div>
        </form>

      </div>

      <div class="d-flex">
        <div class="dropdown d-inline-block d-lg-none ml-2">
          <button
            type="button"
            class="btn header-item noti-icon waves-effect"
            id="page-header-search-dropdown"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="ri-search-line"></i>
          </button>
          <div
            class="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
            aria-labelledby="page-header-search-dropdown"
          >
            <form class="p-3">
              <div class="form-group m-0">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search ..."
                  />
                  <div class="input-group-append">
                    <button class="btn btn-primary" type="submit">
                      <i class="ri-search-line"></i>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="">
          <button type="button" class="btn header-item noti-icon waves-effect">
            
        <b-button
          class="mx-1 text-white"
          variant="success"
          size="sm"
          v-b-modal.translate-modal
        >
          Local Ln
        </b-button>
    <translate-modal></translate-modal>
          </button>
        </div>

        <div class="dropdown d-none d-lg-inline-block ml-1">
          <button
            type="button"
            class="btn header-item noti-icon waves-effect"
            data-toggle="fullscreen"
            @click="initFullScreen"
          >
            <i class="ri-fullscreen-line"></i>
          </button>
        </div>

        <b-dropdown
          right
          variant="black"
          toggle-class="header-item"
          class="d-inline-block user-dropdown"
        >
        <template v-slot:button-content>
            <img :src="`${ transactionData.url }`" class="rounded-circle header-profile-user" 
              alt="" />
            <!-- <img class="rounded-circle header-profile-user" 
            src="@/assets/images/users/avatar-2.jpg"
              alt="Header Avatar" /> -->
            <span class="d-none d-xl-inline-block ml-1">{{ user.username }}</span>
          </template>
          <!-- item-->
          <router-link to="/kaufer/profile" custom v-slot="{ navigate }">
              <button @click="navigate" role="link" class="btn btn-sm btn-primary btn-edit d-flex dropdown-item">
                <i class="ri-user-line align-middle mr-1"></i>
            {{ $t('navbar.dropdown.kevin.list.profile') }}
              </button>
            </router-link>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item text-danger" href="/logout">
            <i class="ri-shut-down-line align-middle mr-1 text-danger"></i>
            {{ $t("navbar.dropdown.kevin.list.logout") }}
          </a>
        </b-dropdown>
      </div>
    </div>
  </header>
</template>