<script setup lang="ts">

</script>

<template>
  <main class="main">
    <section>
      <article>
        <div class="container">
          <div class="content">
            <h3 data-superheading="科技融⼊梦想,绿⾊赋能发展">
              SmartESG | 司⻢致信息科技
            </h3>
            <p>司⻢致信息科技公司（Smartesg）由ESG领域专家创⽴，致⼒于通过数字科技创新，解决可持续发展问题。作为领先的ESG解决⽅案供应商，Smartesg为全球应对⽓候变化和低碳转型提供数据、研究和⼯具，助⼒企业、⾦融机构及政府做出明智决策。公司依托国际背景的本⼟专家团队，帮助客⼾理解系统性⻛险，迈向净零⽬标。
              <br />从ESG披露到评级提升，从碳中和管理到投资组合⽓候⻛险量化，Smartesg积累了丰富经验，并与国内外机构建⽴战略合作。期待携⼿更多伙伴，迈向可持续未来！</p>
          </div>
          <div class="media">
            <div class="media-card">
              <img src="../../assets/images/微信图片_20240411141725.jpg" />
            </div>
          </div>
        </div>
      </article>
    </section>
    <section style="padding-bottom: 2rem;">
      <article class="container">
        <div class="content">
          <!-- <div class="section-body">
            <h6>汇聚中国、硅⾕及华尔街的优秀⼈才，团队分布在北京、硅⾕两地。成员曾就职于MSCI、标普、CDP、世界资源研究所、脸书、美国环保局、国家电⽹等知名企业和机构，拥有丰富的ESG战略咨询服务经验。</h6>
          </div> -->
          <div class="grid-wrapper">
            <div class="card">
              <div class="card-content">
                <div class="text-section">
                  <h2 class="sequence">01</h2>
                  <h4>Mission</h4>
                  <p>
                    致⼒于⽤市场化的⼿段解决可持续发展问题，从⽽加速低碳转型，积极应对⽓候变化。将科技融⼊梦想，⽤绿⾊赋能发展。
                  </p>
                </div>
                <!-- <div class="arrow">
                  <a>阅读 更多</a>
                  <a>
                    <img src="../../assets/images/arrow.svg" />
                  </a>
                </div> -->
              </div>
            </div>
            <div class="card">
              <div class="text-section">
                <h2 class="sequence">02</h2>
                <h4>公司简介</h4>
                <p>
                  领先的ESG综合解决⽅案供应商。⽴⾜中国市场为全球应对⽓候变化与低碳转型提供重要的研究，⼯具与数据以助⼒合作伙伴做出更明智的选择，从⽽积极应对⽓候变化等系统性⻛险，共创绿⾊永续未来！
                </p>
              </div>
              <!-- <div class="arrow">
                <a>阅读 更多</a>
                <a>
                  <img src="../../assets/images/arrow.svg" />
                </a>
              </div> -->
            </div>
            <div class="card">
              <div class="text-section">
                <h2 class="sequence">03</h2>
                <h4>核⼼优势</h4>
                <p>
                  Smartesg汇聚全球强⼤的ESG投研技术研发团队，聚焦本⼟研究和客⼾服务，以中国智慧服务全球。六⼤核⼼优势： 全球视野, 专业定制, 产业专家, 以利并举, 多元合作, 数智赋能
                </p>
              </div>
              <!-- <div class="arrow">
                <a>阅读 更多</a>
                <a>
                  <img src="../../assets/images/arrow.svg" />
                </a>
              </div> -->
            </div>
          </div>
        </div>
      </article>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.grid-wrapper {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  column-gap: 1rem;
  margin-top: 4rem;
}
// .grid-wrapper {
//   display:grid;
//   grid-template-columns: repeat(2,1fr);
//   row-gap: 2rem;
//   column-gap: 2rem
// }
@media screen and (min-width: 600px) {
  .grid-wrapper {
    display:grid;
    grid-template-columns: repeat(3,1fr);
    row-gap: 2rem;
    column-gap: 2rem
  }
}
.card {
  background-color: #162227;
  border-radius: 8px 8px 8px 0;
  padding: 1.5rem;
  display: inline-block;
  position: relative;
  color: #dee2e6;
  width: 100%;
  height: 100%;
  .card-content {
    transition: .5s all ease-in-out;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}
.sequence {
  color: #f2f4f3;
  margin-bottom: .5rem;
}
h4 {
  margin-top: 0;
  margin-bottom: 1rem;
  position: relative;
}
p {
  margin-bottom: 2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;/*省略几行写几*/
  -webkit-box-orient: vertical;
}
.arrow {
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  display: flex;
  align-items: center;
  a {
    color: unset;
    text-decoration: none;
    position: relative;
    text-transform: uppercase;
    line-height: 1;
    padding-bottom: .75em;
    display: inline-block;
    font-weight: 500;
    letter-spacing: .08em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-bottom: 0;
    img {
      height: 18px;
      margin-left: .75rem;
      transition: .25s all ease-in-out;
    }
  }
}
.card:hover .arrow a img {
  margin-left: 1rem;
  transform: scale(1.1);
}
.main {
  * {
    box-sizing: border-box;
  }

  h3 {
    font-size: 2rem;
    line-height: 1.125;
  }

  section {
    position: relative;
    // padding-top: 1.25rem;
    // padding-bottom: 2.5rem;
    display: block;

    .article-container {
      display: flex;
      flex-direction: column;

      .article-content {
        flex: 1 0 100%;
        padding-top: 1.5rem;
        padding-bottom: 3rem;
      }
    }

    article {
      width: 100%;
      max-width: calc(1380px - 10.5rem);
      margin-left: auto;
      margin-right: auto;

      .container {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        max-width: calc(1380px - 10.5rem);
        display: flex;
        flex-direction: column;

        .content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
          gap: 1.5rem;

          h3 {
            margin-bottom: 0;
            padding-top: 2rem;
            position: relative;

            &::before {
              content: attr(data-superheading);
              font-size: 1rem;
              font-weight: 500;
              text-transform: uppercase;
              position: absolute;
              top: 0;
              letter-spacing: .125rem;
              line-height: 1;
              font-weight: 700;
            }
          }
        }

        .media {
          .media-card {
            img {
              margin-left: auto;
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 480px) {
    section {
      // padding-top: 1.5rem;
      // padding-bottom: 3rem;
    }
  }

  @media screen and (min-width: 600px) {
    h3 {
      font-size: 2.5rem;
    }
  }

  @media screen and (min-width: 768px) {
    section {
      // padding-top: 2rem;
      // padding-bottom: 4rem;

      .article-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      }

      article {
        .container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);

          .content {
            margin-left: auto;
            // max-width: calc(600px - 8rem);
          }

          .media {
            .media-card {
              img {
                margin-left: unset;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 960px) {
    // section {
    //   padding-top: 2.25rem;
    //   padding-bottom: 4.5rem;
    // }
  }

  .media {
    flex: 1 0 100%;
    color: #121110;
    min-height: 320px;
    position: relative;

    .media-card {
      height: 100%;
      width: 100%;
      max-width: 768px;
      max-height: 768px;
      display: flex;
      flex-direction: column;

      img {
        border-radius: 1rem 1rem 1rem 0;
        // max-height: 100%;
        // object-fit: cover;
        max-width: 100%;
      }
    }
  }

  @media screen and (min-width: 600px) {
    .media {
      min-height: 480px;
    }
  }

  @media screen and (min-width: 768px) {
    .media {
      display: flex;
      padding-left: 3rem;

      .media-card {
        height: calc(100% - 1.5rem);

        img {
          height: 400px;
          max-height: 400px;
          margin: auto 0;
        }
      }
    }
  }

  @media screen and (min-width: 960px) {
    .media {
      padding-left: 4rem;

      .media-card {
        // max-width: calc(600px - 8rem);
      }
    }
  }

  @media screen and (min-width: 1280px) {
    .media {
      padding-left: 5rem;
    }
  }
}
</style>
