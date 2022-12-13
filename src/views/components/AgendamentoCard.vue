<template>
    <div class="card">
      <div class="card-header pb-0">
        <div class="row">
          <div class="col-lg-6 col-7">
            <h6>{{ title }}</h6>
            <p class="text-sm mb-0" v-html="description"></p>
          </div>
          <div class="col-lg-6 col-5 my-auto text-end">
            <div class="dropdown float-lg-end pe-4">
              <a
                class="cursor-pointer"
                id="dropdownTable"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fa fa-ellipsis-v text-secondary" aria-hidden="true"></i>
              </a>
              <ul
                class="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5"
                aria-labelledby="dropdownTable"
                style=""
              >
                <li>
                  <a class="dropdown-item border-radius-md" href="javascript:;">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item border-radius-md" href="javascript:;">
                    AnotherAction
                  </a>
                </li>
                <li>
                  <a class="dropdown-item border-radius-md" href="javascript:;">
                    SomethingElse
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body px-0 pb-2">
        <div class="table-responsive">
          <table class="table align-items-center mb-0">
            <thead>
              <tr>
                <th
                  v-for="(heading, index) of headers"
                  :key="index"
                  :class="[
                    index === 1 ? 'ps-2' : '',
                    index >= 2 ? 'text-center' : '',
                  ]"
                  class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >
                  {{ heading }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(
                  { foto, name, servico, status, data },
                  index
                ) of agendamentos"
                :key="index"
              >
              <td>
                      <div class="d-flex px-2 py-1">
                        <div>
                          <img
                            :src="`${ foto }`"
                            class="avatar avatar-sm me-3 border-radius-lg"
                            alt="user1"
                          />
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">{{ name }}</h6>
                          <p class="text-xs text-secondary mb-0">
                            john@creative-tim.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-xs font-weight-bold mb-0">{{ servico }}</p>
                      <!-- <p class="text-xs text-secondary mb-0">Organization</p> -->
                    </td>
                    <td class="align-middle text-center text-sm">
                      <span class="badge badge-sm bg-gradient-success"
                        >{{ status }}</span
                      >
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold"
                        >{{ data }}</span
                      >
                    </td>
                    <td class="align-middle text-center">
                      <a
                        href="javascript:;"
                        class="text-secondary font-weight-bold text-xs"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
                      >
                      <i class="text-sm fas fa-pen text-secondary"></i>
                      </a>
                    </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "projectCard",
    props: {
      title: {
        type: String,
        default: "",
      },
      description: {
        type: String,
        default: "",
      },
      headers: {
        type: Array,
        required: true,
      },
      agendamentos: {
        type: Array,
        required: true,
        foto: String,
        name: String,
        servico: String,
        status: String,
        data: String,
        // progres: {
        //   type: Object,
        //   percentage: Number,
        //   color: String,
        // },
      },
    },
  };
  </script>
  