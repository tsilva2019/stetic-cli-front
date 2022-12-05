<template>
  <!-- <navbar btnBackground="bg-gradient-success" /> -->
  <div
    class="page-header align-items-start min-vh-100"
    style="
      background-image: url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80');
    "
  >
    <span class="mask bg-gradient-dark opacity-6"></span>
    <div class="container my-auto">
      <div class="row">
        <div class="col-lg-4 col-md-8 col-12 mx-auto">
          <div class="card z-index-0 fadeIn3 fadeInBottom">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div
                class="bg-gradient-success shadow-success border-radius-lg py-3 pe-1"
              >
                <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">
                  Logar
                </h4>
                <div class="row mt-3">
                  <div class="col-2 text-center ms-auto">
                    <a class="btn btn-link px-3" href="javascript:;">
                      <i class="fab fa-instagram text-white text-lg"></i>
                    </a>
                  </div>
                  <div class="col-2 text-center px-1">
                    <a class="btn btn-link px-3" href="javascript:;">
                      <i class="fab fa-youtube text-white text-lg"></i>
                    </a>
                  </div>
                  <div class="col-2 text-center me-auto">
                    <a class="btn btn-link px-3" href="javascript:;">
                      <i class="fab fa-whatsapp text-white text-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <form
                @submit.stop.prevent="submit"
                role="form"
                class="text-start mt-3"
              >
                <div class="mb-3">
                  <material-input
                    id="email"
                    type="email"
                    label="Email"
                    name="email"
                    @aoValueInput="setEmail"
                  />
                </div>
                <div class="mb-3">
                  <material-input
                    id="password"
                    type="password"
                    label="Senha"
                    name="password"
                    @aoValueInput="setSenha"
                  />
                </div>
                <material-switch id="rememberMe" name="rememberMe"
                  >Lembrar-me</material-switch
                >
                <div class="text-center">
                  <material-button
                    class="my-4 mb-2"
                    variant="gradient"
                    color="success"
                    fullWidth
                    >Entrar</material-button
                  >
                </div>
                <p class="mt-4 text-sm text-center">
                  Ainda não tem conta?
                  <router-link
                    :to="{ name: 'SignUp' }"
                    class="text-success text-gradient font-weight-bold"
                    >Cadastre-se</router-link
                  >
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialSwitch from "@/components/MaterialSwitch.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import axios from "axios";
import Cookie from 'js-cookie';
import { mapMutations } from "vuex";


export default {
  name: "sign-in",
  components: {
    MaterialInput,
    MaterialSwitch,
    MaterialButton,
  },
  data() {
    return {
      email: "",
      senha: "",
    };
  },
  beforeMount() {
    this.toggleEveryDisplay();
    this.toggleHideConfig();
  },
  beforeUnmount() {
    this.toggleEveryDisplay();
    this.toggleHideConfig();
  },
  methods: {
    ...mapMutations(["toggleEveryDisplay", "toggleHideConfig"]),
    setEmail(value) {
      this.email = value;
    },
    setSenha(value) {
      this.senha = value;
    },
    submit() {
      const payload = {
        login: this.email,
        senha: this.senha,
      };
      console.log(payload);
      axios(
        "http://localhost:3002/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access": "application/json",
          },
          data: payload,
        }
      )
        .then(res => {
          Cookie.set('token', res.data.token);
          this.$router.push('/dashboard')
        })
    },
  },
};
</script>
