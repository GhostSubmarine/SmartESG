<script setup lang="ts">

</script>

<template>
  <main class="main">

    <section class="carousel">
      <article class="container">
        <div class="media">
          <div class="swiper" id="carousel-large-home">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="flex-card large">
                  <div class="card-content">
                    <div class="card-media-wrapper">
                      <div class="card-media media1">
                        <h4>科技融⼊梦想,绿⾊赋能发展</h4>
                      </div>
                    </div>
                    <div class="text-section">
                      <h3>SmartESG | 司⻢致</h3>
                      <p class="">通过数字化变⾰传统分析，提供有效ESG解决⽅案。赋能绿⾊⾦融，推动可持续发展。<br/>⽴⾜中国市场，服务全球低碳转型需求。提供关键数据，助企业与机构做出明智决策。<br/>积极应对⽓候变化挑战，促进社会低碳转型。依托国际化专家团队，深度解析⻛险与机会。<br/>指导客⼾有效⾏动，共同迈向净零⽬标。从ESG披露⾄碳中和管理，累积丰富经验。</p>
                    </div>
                  </div>
                </div>
                </div>
              <div class="swiper-slide">

                <div class="flex-card large">
                  <div class="card-content">
                    <div class="card-media-wrapper">
                      <div class="card-media media2">
                      </div>
                    </div>
                    <div class="text-section">
                      <h3>领先的ESG综合解决⽅案供应商。</h3>
                      <p class="">⽴⾜中国市场为全球应对⽓候变化与低碳转型提供重要的研究，⼯具与数据以助⼒合作伙伴做出更明智的选择，从⽽积极应对⽓候变化等系统性⻛险，共创绿⾊永续未来！</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">

                <div class="flex-card large">
                  <div class="card-content">
                    <div class="card-media-wrapper">
                      <div class="card-media media3">
                      </div>
                    </div>
                    <div class="text-section">
                      <h3>Smartesg汇聚全球强⼤的ESG投研量化研究团队，聚焦本⼟研究和客⼾服务，以中国智慧服务全球。</h3>
                      <p class="">六⼤核⼼优势： 全球视野, 专业定制, 产业专家, 以利并举, 多元合作, 数智赋能</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">

                <div class="flex-card large">
                  <div class="card-content">
                    <div class="card-media-wrapper">
                      <div class="card-media media4"></div>
                    </div>
                    <div class="text-section">
                      <h3>主要客⼾群体</h3>
                      <p class=""></p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">

                <div class="flex-card large">
                  <div class="card-content">
                    <div class="card-media-wrapper">
                      <div class="card-media media5"></div>
                    </div>
                    <div class="text-section">
                      <h3>可持续⻅解</h3>
                      <p class=""></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.flex-card.large {
  padding: 2rem 4rem;
  .card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 2rem;
    margin-left: -2rem;
    margin-right: -2rem;
    .card-media-wrapper {
      margin-bottom: unset;
    }
    .text-section {
      width: 100%;
      max-width: unset;
      margin-top: unset;
      h3 {
        font-size: 2.5rem;
      }
    }
  }
}
.flex-card {
  border-radius: 8px 8px 8px 0;
  padding: 2rem;
  display: inline-block;
  height: 100%;
  width: 100%;
  // background-color: #dee2e6;
  color: #121110;
  box-sizing: border-box;
  position: relative;
  .card-content {
    .card-media-wrapper {
      position: relative;
      width: 100%;
      margin-bottom: 2rem;
      .card-media {
        width: 100%;
        padding-bottom: 100%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 8px 8px 8px 0;
        &.media1 {
          background-image: url('../../assets/images/微信图片_20240411141725.jpg');
        }
        &.media2 {
          background-image: url('../../assets/images/微信图片_20240414101955.png');
        }
        &.media3 {
          background-image: url('../../assets/images/微信图片_20240414105125.png');
        }
        &.media4 {
          background-image: url('../../assets/images/微信图片_20240414105141.png');
        }
        &.media5 {
          background-image: url('../../assets/images/微信图片_20240414105203.png');
        }
      }
    }
    .text-section {
      h3 {
        font-size: 1.5rem;
        font-weight: 400;
      }
      p {
        margin-bottom: 0;
      }
    }
  }
}
@media screen and (min-width: 600px) {
  .flex-card.large {
    padding: 2rem 3rem !important;
    .card-content {
      flex-direction: row-reverse;
      column-gap: 2rem;
      margin-left: unset;
      margin-right: unset;
      .card-media-wrapper {
        flex: 0 1 40%;
        max-width: 20rem;
      }
      .text-section {
        flex: 1 1 60%;
        h3 {
          font-size: 1.75rem;
        }
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .flex-card.large {
    padding: 3rem !important;
    .card-content {
      column-gap: 3rem;
      .text-section {
        h3 {
          font-size: 2.25rem;
        }
      }
    }
  }
}
@media screen and (min-width: 1024px) {
  .flex-card.large {
    padding: 4rem !important;
    .card-content {
      .text-section {
        h3 {
          font-size: 2.25rem;
        }
      }
    }
  }
}
@media screen and (min-width: 1280px) {
  .flex-card.large {
    .card-content {
      .text-section {
        h3 {
          font-size: 2.5rem;
        }
        // p {
        //   font-size: 1rem;
        // }
      }
    }
  }
}



.container {
  width: calc(100% - 3rem);
  margin-left: auto;
  margin-right: auto;
  max-width: calc(1280px - 12rem);
}
.main {
  display: flex;
  flex-direction: columns;
  section.carousel {
    position: relative;
    // padding-top: 3rem;
    padding-bottom: 3rem;
    article.container {
      max-width: calc(1380px - 10.5rem);
    }
    article {
      .media {
        min-height: 28rem;
      }
    }
    @media screen and (min-width: 360px) {
      article.container {
        width: 100%;
      }
    }
  }
  .carousel {
    .swiper {
      // padding-top: 3rem;
      .swiper-slide {
        height: unset;
        &:nth-child(5n+1) {
          .flex-card {
            // background-color: #162227;
            color: #dee2e6;
            &.large {
              padding: 4rem 0!important;
            }
            .card-content {
              align-items: flex-start;
              .card-media-wrapper {
                flex: 0 1 50%;
                max-width: 25rem;
                .card-media {
                  position: relative;
                  h4 {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 100%;
                    text-align: center;
                  }
                }
              }
            }
          }
        }
        &:nth-child(5n+2) {
          .flex-card {
            background-color: #162227;
            color: #dee2e6;
          }
        }
        &:nth-child(5n+3) {
          .flex-card {
            background-color: #343a40;
            color: #dee2e6;
          }
        }
        &:nth-child(5n+4) {
          .flex-card {
            background-color: #4d5257;
            color: #dee2e6;
          }
        }
        &:nth-child(5n+5) {
          .flex-card {
            background-color: #6f7274;
            color: #dee2e6;
          }
        }
      }
    }
  }
  @media screen and (min-width: 600px) {
    section.carousel {
      // padding-top: 4rem;
      padding-bottom: 4rem;
    }
  }
}

@media screen and (min-width: 800px) {
	section {
		// padding-top: 5rem;
		padding-bottom: 5rem;
	}
}
.main {
  flex-grow: 1;
  overflow: hidden;
  // display: block;
  flex-direction: column;
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
    section {
      // padding-top: 4rem;
      padding-bottom: 4rem;

      h2 {
        font-size: 3.25rem;
        line-height: 1.1719;
      }
    }
  }

  @media screen and (min-width: 768px) {
    section {
      h2 {
        font-size: 3.5rem;
      }
    }
  }

  @media screen and (min-width: 800px) {
    section {
      // padding-top: 5rem;
      padding-bottom: 5rem;
    }
  }

  @media screen and (min-width: 960px) {
    section {
      // padding-top: 5.5rem;
      padding-bottom: 5.5rem;

      h2 {
        font-size: 4rem;
      }
    }
  }

  .parallax-header {
    // background-color: rgb(18, 17, 16);
    padding-top: 0px !important;
    padding-bottom: 0px !important;
    position: relative;
    padding-top: 3rem;
    padding-bottom: 3rem;

    .container {
      width: 100%;
      max-width: calc(1380px - 10.5rem);
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
          // background: linear-gradient(rgb(18, 17, 16) 0%, rgb(18, 17, 16) 5%, rgba(18, 17, 16, 0) 100%);
        }

        &::before,
        &::after {
          position: absolute;
          content: "";
          height: 15%;
          left: 0px;
          right: 0px;
          z-index: 10;
        }

        &::after {
          bottom: -2px;
          // background: linear-gradient(0deg, rgb(18, 17, 16) 0%, rgb(18, 17, 16) 5%, rgba(18, 17, 16, 0) 100%);
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
