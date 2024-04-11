<script setup lang="ts">

</script>

<template>
  <main class="main">

  </main>
</template>

<style lang="scss" scoped>
.main {
  flex-grow: 1;
  overflow: hidden;
  display: block;
  scroll-margin-top: calc(80px + 1rem);
  .headline {
    @media screen and (min-width: 1280px) {
      .container {
        width: 100%;
      }
    }
    .content {
      margin-left: auto;
      margin-right: auto;
      max-width: calc(1280px - 12rem);
      text-align: center;
    }
  }
  @media screen and (min-width: 600px) {
    .headline {
      padding-top: 4rem;
      padding-bottom: 4rem;
      h2 {
        font-size: 3.25rem;
		    line-height: 1.1719;
      }
    }
  }
  @media screen and (min-width: 768px) {
    .headline {
      h2 {
        font-size: 3.5rem;
      }
    }
  }
  @media screen and (min-width: 800px) {
    .headline {
      padding-top: 5rem;
      padding-bottom: 5rem;
    }
  }
  @media screen and (min-width: 960px) {
    .headline {
      padding-top: 5.5rem;
      padding-bottom: 5.5rem;
      h2 {
        font-size: 4rem;
      }
    }
  }
  .parallax-header {
    background-color: rgb(18, 17, 16);
    padding-top: 0px !important;
    padding-bottom: 0px !important;
    position: relative;
    padding-top: 3rem;
    padding-bottom: 3rem;
    .container {
      width: 100%;
      max-width: 1440px;
      margin-left: auto;
      margin-right: auto;
      .content {
        height: 20rem;
        .images-content-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          @media screen and (min-width: 960px) {
            .image-grid-wrapper {
              left: 15%;
            }
          }
          .image-grid-wrapper {
            width: 110%;
            left: -5%;
            position: absolute;
            display: flex;
            flex-direction: row;
            align-items: center;
            top: 0%;
            transform: rotate(15deg);
            .card-column {
              margin: 0px 0.3rem;
              .card {
                margin: 0.6rem 0px;
              }
            }
            .card-column {
              position: relative;
              min-width: 4.5rem;
              margin: 0px 0.4rem;
              flex: 1 1 0%;
              
              .card {
                aspect-ratio: 1 / 1;
                position: relative;
                background-size: cover;
                border-radius: 8px 8px 8px 0px;
                margin: 0.8rem 0px;
                background-position: center center;
                overflow: hidden;
              }
              .grow {
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0s;
                &:hover {
                  transform: scale(1.1);
                  box-shadow: 0 0 2rem rgba(222, 226, 230, 0.2);
                  z-index: 5;
                }
              }
            }
            @media screen and (min-width: 600px) {
              .card-column {
                margin: 0px 0.4rem;
                .card {
                  margin: 0.8rem 0px;
                }
              }
            }
            .start-animation:nth-child(1) {
              animation-delay: 0.541s;
            }
            .start-animation {
              animation-name: headermove;
              animation-iteration-count: 1;
              animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
              animation-duration: 5s;
              animation-fill-mode: forwards;
            }
          }
        }
      }
      @media screen and (min-width: 480px) {
        .content {
          height: 25rem;
        }
      }
      @media screen and (min-width: 600px) {
        .content {
          height: 30rem;
        }
      }
      @media screen and (min-width: 800px) {
        .content {
          height: 35rem;
        }
      }
      @media screen and (min-width: 960px) {
        .content {
            height: 40rem;
        }
      }
      @media screen and (min-width: 1440px) {
        .content {
          height: 45rem;
        }
      }
      .fade-top-bottom {
        position: relative;
        &::before {
          top: -2px;
          background: linear-gradient(rgb(18, 17, 16) 0%, rgb(18, 17, 16) 5%, rgba(18, 17, 16, 0) 100%);
        }
        &::before, &::after {
          position: absolute;
          content: "";
          height: 15%;
          left: 0px;
          right: 0px;
          z-index: 10;
        }
        &::after {
          bottom: -2px;
          background: linear-gradient(0deg, rgb(18, 17, 16) 0%, rgb(18, 17, 16) 5%, rgba(18, 17, 16, 0) 100%);
        }
      }
    }
  }
  @media screen and (min-width: 800px) {
    .parallax-header {
      padding-top: 5rem;
      padding-bottom: 5rem;
    }
  }
  @media screen and (min-width: 600px) {
    .parallax-header {
      padding-top: 4rem;
      padding-bottom: 4rem;
    }
  }

}
@media screen and (min-width: 960px) {
  .main {
    scroll-margin-top: calc(15px + 3rem);
  }
}
</style>
