<script>
// import simplebar from "simplebar-vue";
// import i18n from "../i18n";
import { userService } from '@/helpers/fakebackend/user.service';
import axios from 'axios';
import TranslateModal from "@/components/translate";

export default {
  data() {
    return {
      transactionData:[],
      user: []
      // languages: [
      //   {
      //     flag: require("@/assets/images/flags/us.jpg"),
      //     language: "en",
      //     title: "English"
      //   },
      //   {
      //     flag: require("@/assets/images/flags/french.jpg"),
      //     language: "fr",
      //     title: "French"
      //   },
      //   {
      //     flag: require("@/assets/images/flags/spain.jpg"),
      //     language: "es",
      //     title: "spanish"
      //   },
      //   {
      //     flag: require("@/assets/images/flags/chaina.png"),
      //     language: "zh",
      //     title: "Chinese"
      //   },
      //   {
      //     flag: require("@/assets/images/flags/arabic.png"),
      //     language: "ar",
      //     title: "Arabic"
      //   }
      // ],
      // current_language: "en"
    };
  },
  name: "TopNav",
  components: {
    TranslateModal
    // simplebar 
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.getAfricanaData()
  },

  methods: {
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

    toggleMenu() {
      this.$parent.toggleMenu();
    },
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
    // toggleRightSidebar() {
    //   this.$parent.toggleRightSidebar();
    // },
    // setLanguage(locale) {
    //   i18n.locale = locale;
    //   this.current_language = i18n.locale;
    // }
  }
};
</script>

<template>
  <header id="page-topbar">
    <div class="navbar-header">
      <div class="d-flex">
        <!-- LOGO -->
        <!-- <div class="navbar-brand-box">
          <a href="index.html" class="logo logo-dark">
            <span class="logo-sm">
              <img src="@/assets/images/logo-sm-dark.png" alt height="22" />
            </span>
            <span class="logo-lg">
              <img src="@/assets/images/logo-dark.png" alt height="20" />
            </span>
          </a>

          <a href="index.html" class="logo logo-light">
            <span class="logo-sm">
              <img src="@/assets/images/logo-sm-light.png" alt height="22" />
            </span>
            <span class="logo-lg">
              <img src="@/assets/images/logo-light.png" alt height="20" />
            </span>
          </a>
        </div> -->

        <button @click="toggleMenu" type="button" class="btn btn-sm px-3 font-size-24 header-item waves-effect"
          id="vertical-menu-btn">
          <i class="ri-menu-2-line align-middle"></i>
        </button>

        <!-- App Search-->
        <form class="app-search d-none d-lg-block">
          <div class="position-relative">
            <input type="text" class="form-control" :placeholder="$t('navbar.search.text')" />
            <span class="ri-search-line"></span>
          </div>
        </form>
      </div>

      <div class="d-flex">
        <div class="dropdown d-inline-block d-lg-none ml-2">
          <button type="button" class="btn header-item noti-icon waves-effect" id="page-header-search-dropdown"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="ri-search-line"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
            aria-labelledby="page-header-search-dropdown">
            <form class="p-3">
              <div class="form-group m-0">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Search ..." />
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
        <div class="dropdown d-none d-lg-inline-block ml-1">
          <button type="button" class="btn header-item noti-icon waves-effect" @click="initFullScreen">
            <i class="ri-fullscreen-line"></i>
          </button>
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

        <!-- <b-dropdown
          right
          menu-class="dropdown-menu-lg p-0"
          toggle-class="header-item noti-icon"
          variant="black"
        >
          <template v-slot:button-content>
            <i class="ri-notification-3-line"></i>
            <span class="noti-dot"></span>
          </template>
          <div class="p-3">
            <div class="row align-items-center">
              <div class="col">
                <h6 class="m-0">{{ $t('navbar.dropdown.notification.text')}}</h6>
              </div>
              <div class="col-auto">
                <a href="#!" class="small">{{ $t('navbar.dropdown.notification.subtext')}}</a>
              </div>
            </div>
          </div>
          <simplebar style="max-height: 230px;">
       <a href class="text-reset notification-item">
              <div class="media">
                <div class="avatar-xs mr-3">
                  <span class="avatar-title bg-primary rounded-circle font-size-16">
                    <i class="ri-shopping-cart-line"></i>
                  </span>
                </div>
                <div class="media-body">
                  <h6 class="mt-0 mb-1">{{ $t('navbar.dropdown.notification.order.title')}}</h6>
                  <div class="font-size-12 text-muted">
                    <p class="mb-1">{{ $t('navbar.dropdown.notification.order.text')}}</p>
                    <p class="mb-0">
                      <i class="mdi mdi-clock-outline"></i>
                      {{ $t('navbar.dropdown.notification.order.time')}}
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a href class="text-reset notification-item">
              <div class="media">
                <img
                  src="@/assets/images/users/avatar-3.jpg"
                  class="mr-3 rounded-circle avatar-xs"
                  alt="user-pic"
                />
                <div class="media-body">
                  <h6 class="mt-0 mb-1">{{ $t('navbar.dropdown.notification.james.title')}}</h6>
                  <div class="font-size-12 text-muted">
                    <p class="mb-1">{{ $t('navbar.dropdown.notification.james.text')}}</p>
                    <p class="mb-0">
                      <i class="mdi mdi-clock-outline"></i>
                      {{ $t('navbar.dropdown.notification.james.time')}}
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a href class="text-reset notification-item">
              <div class="media">
                <div class="avatar-xs mr-3">
                  <span class="avatar-title bg-success rounded-circle font-size-16">
                    <i class="ri-checkbox-circle-line"></i>
                  </span>
                </div>
                <div class="media-body">
                  <h6 class="mt-0 mb-1">{{ $t('navbar.dropdown.notification.item.title')}}</h6>
                  <div class="font-size-12 text-muted">
                    <p class="mb-1">{{ $t('navbar.dropdown.notification.item.text')}}</p>
                    <p class="mb-0">
                      <i class="mdi mdi-clock-outline"></i>
                      {{ $t('navbar.dropdown.notification.item.time')}}
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a href class="text-reset notification-item">
              <div class="media">
                <img
                  src="@/assets/images/users/avatar-4.jpg"
                  class="mr-3 rounded-circle avatar-xs"
                  alt="user-pic"
                />
                <div class="media-body">
                  <h6 class="mt-0 mb-1">{{ $t('navbar.dropdown.notification.salena.title')}}</h6>
                  <div class="font-size-12 text-muted">
                    <p class="mb-1">{{ $t('navbar.dropdown.notification.salena.text')}}</p>
                    <p class="mb-0">
                      <i class="mdi mdi-clock-outline"></i>
                      {{ $t('navbar.dropdown.notification.salena.time')}}
                    </p>
                  </div>
                </div>
              </div>
            </a> 
          </simplebar>
          <div class="p-2 border-top">
            <a
              class="btn btn-sm btn-link font-size-14 btn-block text-center"
              href="javascript:void(0)"
            >
              <i class="mdi mdi-arrow-right-circle mr-1"></i>
              {{ $t('navbar.dropdown.notification.button')}}
            </a>
          </div>
        </b-dropdown> -->

        <b-dropdown right variant="black" toggle-class="header-item" class="d-inline-block user-dropdown">
          <template v-slot:button-content>
            <img :src="`${ transactionData.url }`" class="rounded-circle header-profile-user" 
              alt="" />
            <!-- <img class="rounded-circle header-profile-user" 
            src="@/assets/images/users/avatar-2.jpg"
              alt="Header Avatar" /> -->
            <span class="d-none d-xl-inline-block ml-1">{{ user.username }}</span>
            <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
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
            {{ $t('navbar.dropdown.kevin.list.logout') }}
          </a>
        </b-dropdown>
        <div>
   
  </div>

      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.notify-item {
  .active {
    color: #16181b;
    background-color: #f8f9fa;
  }
}
</style>