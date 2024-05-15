<template>
  <main class="main">
    <section class="section-full-width">
      <article class="container">
        <div class="content container">
          <div class="section-body">
            <!-- <h3 class="ng-star-inserted">关于我们</h3> -->
            <p>汇聚了中国、硅⾕及华尔街的优秀⼈才，团队成员分布在北京、硅⾕两地。 曾⼯作多年于MSCI、标普、CDP、世界资源研究所，脸书，美国环保局，国家电⽹等中国⼤中型企业和机构，具有全球领先ESG战略咨询服务经验。</p>
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
                      <p class="">在ESG及可持续发展领域拥有近⼆⼗年深厚经验的资深⼈⼠。 此⼈曾在多家世界500强企业、国际组织以及政府智库担任要职，为上百家企业及投资⼈领袖提供过服务。 在其职业⽣涯中，参与制定上市公司ESG信息披露标准，并涉⾜TCFD与ISSB的披露框架。 除此之外，还参与了⾚道银⾏的建设、应对⽓候变化的国家战略规划、碳市场的构建以及绿⾊信贷和绿⾊⾦融环境等多个可持续⾦融领域的课题研究</p>
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
                      <p class="">汇聚了⼀批在全球科技巨头和领先环保机构拥有丰富经验的顶尖⼈才。 团队成员们曾在诸如Meta、美国联邦环保局（US.EPA）、爱⽴信和中兴通讯等知名机构和公司负责重要项⽬和技术开发， 这为团队在数据分析、云计算、环境⻛险计算以及ERP系统和业务系统开发等领域积累了宝贵的经验和深厚的技术功底。</p>
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
  width: 100%;
  .container {
    display: flex;
    flex-direction: column;
    background-image: url(../../assets/images/微信图片_20240411141725.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    max-width: unset;
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
  @media screen and (min-width: 600px) {
    section {
      padding-top: 2rem;
      padding-bottom: 2rem;
    }
  }

  @media screen and (min-width: 800px) {
    section {
      padding-top: 3rem;
      padding-bottom: 3rem;
    }
  }

  @media screen and (min-width: 960px) {
    section {
      padding-top: 3.5rem;
      padding-bottom: 3.5rem;
    }
  }
}

.container {
  width: 100%;
  max-width: calc(1380px - 10.5rem);
  margin-left: auto;
  margin-right: auto;

  .content {
    width: 100%;
    max-width: calc(1380px - 10.5rem);

  }
}



.container {
  // width: calc(100% - 3rem);
  margin-left: auto;
  margin-right: auto;
  // max-width: calc(1280px - 12rem);
}
</style>