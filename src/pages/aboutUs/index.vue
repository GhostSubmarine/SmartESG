<template>
  <main class="main">
    <section class="section-full-width">
      <article class="container">
        <div class="content container">
          <div class="section-body">
            <h3 class="ng-star-inserted">关于我们</h3>
            <p>汇聚了中国、硅⾕及华尔街的优秀⼈才，团队成员分布在北京、硅⾕两地。 曾⼯作多年于
              MSCI、标普、CDP、世界资源研究所，脸书，美国环保局，国家电⽹等中国⼤中型企业和
              机构，具有全球领先ESG战略咨询服务经验。</p>
          </div>
        </div>
      </article>
    </section>
    <!-- <img src="../../assets/images/微信图片_20240411141725.jpg" style="width: 100%; max-width: calc(1280px - 3rem); margin: 0 auto;padding-bottom: 3rem;" />
    <section class="half-and-half">
      <article class="container">
        <div class="content">
          <div class="content-wrapper">
            <h6 data-title="创始⼈介绍">
              在ESG及可持续发展领域拥有近⼆⼗年深厚经验的资深⼈⼠。 此⼈曾在多家世界
500强企业、国际组织以及政府智库担任要职，为上百家企业及投资⼈领袖提供过服
务。 在其职业⽣涯中，参与制定上市公司ESG信息披露标准，并涉⾜TCFD与ISSB的披露
框架。 除此之外，还参与了⾚道银⾏的建设、应对⽓候变化的国家战略规划、碳市场的
构建以及绿⾊信贷和绿⾊⾦融环境等多个可持续⾦融领域的课题研究。</h6>
          </div>
        </div>

        <div class="media fade-top-bottom">
        </div>
      </article>
    </section>
    <section class="half-and-half">
      <article class="container">
        <div class="content reverse">
          <div class="content-wrapper">
            <h6 data-title="技术团队介绍">
              汇聚了⼀批在全球科技巨头和领先环保机构拥有丰富经验的顶尖⼈才。 团队
成员们曾在诸如Meta、美国联邦环保局（US.EPA）、爱⽴信和中兴通讯等知名机构和公
司负责重要项⽬和技术开发， 这为团队在数据分析、云计算、环境⻛险计算以及ERP系
统和业务系统开发等领域积累了宝贵的经验和深厚的技术功底。</h6>
          </div>
        </div>

        <div class="media fade-top-bottom">
        </div>
      </article>
    </section> -->
    <section class="carousel">
      <article class="container">
        <div class="media">
          <div class="swiper" id="carousel-large-home">
            <div class="swiper-wrapper">
              <!-- Start Slides -->
              <div class="swiper-slide">

                <div class="flex-card large">
                  <div class="card-content">
                    <div class="card-media-wrapper">
                      <div class="card-media">
                      </div>
                    </div>
                    <div class="text-section">
                      <h3>创始⼈</h3>
                      <p class="">在ESG及可持续发展领域拥有近⼆⼗年深厚经验的资深⼈⼠。 此⼈曾在多家世界
500强企业、国际组织以及政府智库担任要职，为上百家企业及投资⼈领袖提供过服
务。 在其职业⽣涯中，参与制定上市公司ESG信息披露标准，并涉⾜TCFD与ISSB的披露
框架。 除此之外，还参与了⾚道银⾏的建设、应对⽓候变化的国家战略规划、碳市场的
构建以及绿⾊信贷和绿⾊⾦融环境等多个可持续⾦融领域的课题研究</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">

                <div class="flex-card large">
                  <div class="card-content">
                    <div class="card-media-wrapper">
                      <div class="card-media">
                      </div>
                    </div>
                    <div class="text-section">
                      <h3>技术团队</h3>
                      <p class="">汇聚了⼀批在全球科技巨头和领先环保机构拥有丰富经验的顶尖⼈才。 团队
成员们曾在诸如Meta、美国联邦环保局（US.EPA）、爱⽴信和中兴通讯等知名机构和公
司负责重要项⽬和技术开发， 这为团队在数据分析、云计算、环境⻛险计算以及ERP系
统和业务系统开发等领域积累了宝贵的经验和深厚的技术功底。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
    <section class="join-us">
      <article class="container">
        <div class="content">
          <h3>加入我们</h3>
          <div>
            <a href="#">点击获取在招岗位</a>
          </div>
        </div>
      </article>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.join-us {
  .container {
    display: flex;
    flex-direction: column;
    background-image: url(../../assets/images/微信图片_20240411141725.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    >div {
      text-align: center;
      padding: 2rem 0;
    }
  }
  a {
    text-decoration: none;
    font-size: 1rem;
    margin: 0 auto;
    padding: 1rem 1rem;
    background-color: #496d70;
    border-radius: 8px;
    color: #FFFFFF;
  }
  @media screen and (min-width: 600px) {
    .container {
      padding: 6rem 1.5rem;
      h3 {
        text-align: center;
      }
      >div {
        margin-top: 3rem;
        padding: 0;
      }
      a {
        margin-top: 3rem;
      }
    }
    
  }
}
.main {
  // display: flex;
  // flex-direction: column;
  @media screen and (min-width: 600px) {
    section {
      padding-top: 4rem;
      padding-bottom: 4rem;
    }
  }

  @media screen and (min-width: 800px) {
    section {
      padding-top: 5rem;
      padding-bottom: 5rem;
    }
  }

  @media screen and (min-width: 960px) {
    section {
      padding-top: 5.5rem;
      padding-bottom: 5.5rem;
    }
  }
}

.container {
  width: calc(100% - 3rem);
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;

  .content {
    width: 100%;
    max-width: calc(1280px - 3rem);

    .section-body {
      h3 {
        text-align: center;
      }

      p {
        max-width: 35rem;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
}
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
  background-color: #dee2e6;
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
        background-image: url('../../assets/images/微信图片_20240411141725.jpg');
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
        p {
          font-size: 1rem;
        }
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
  section.carousel {
    position: relative;
    padding-top: 0;
    padding-bottom: 3rem;
    article.container {
      max-width: 1440px;
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
      padding-top: 0;
      .swiper-slide {
        height: unset;
        &:nth-child(4n+1) {
          .flex-card {
            background-color: #162227;
            color: #dee2e6;
          }
        }
        &:nth-child(4n+2) {
          .flex-card {
            background-color: #343a40;
            color: #dee2e6;
          }
        }
        &:nth-child(4n+3) {
          .flex-card {
            background-color: #4d5257;
            color: #dee2e6;
          }
        }
        &:nth-child(4n+4) {
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
      padding-top: 0;
      padding-bottom: 4rem;
    }
  }
}
</style>