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
            <p>通过数字化变⾰传统分析，提供有效ESG解决⽅案。赋能绿⾊⾦融，推动可持续发展。⽴⾜中国市场，服务全球低碳转型需求。提供关键数据，助企业与机构做出明智决策。积极应对⽓候变化挑战，促进社会低碳转型。依托国际化专家团队，深度解析⻛险与机会。指导客⼾有效⾏动，共同迈向净零⽬标。从ESG披露⾄碳中和管理，累积丰富经验。</p>
          </div>
          <div class="media">
            <div class="media-card">
              <img src="../../assets/images/微信图片_20240411141725.jpg" />
            </div>
          </div>
        </div>
      </article>
    </section>
  </main>
</template>

<style lang="scss" scoped>
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
    padding-top: 1.25rem;
    padding-bottom: 2.5rem;
    display: block;

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
              opacity: .6;
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
      padding-top: 1.5rem;
      padding-bottom: 3rem;
    }
  }
  @media screen and (min-width: 600px) {
    h3 {
      font-size: 2.5rem;
    }
  }
  @media screen and (min-width: 768px) {
    section {
      padding-top: 2rem;
      padding-bottom: 4rem;

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
    section {
      padding-top: 2.25rem;
      padding-bottom: 4.5rem;
    }
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
        height: 100%;
        object-fit: cover;
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
