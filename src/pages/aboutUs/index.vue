<template>
  <main class="main">
    <section class="section-full-width">
      <article class="container">
        <div class="content">
          <div class="section-body">
            <h2>汇聚了中国、硅⾕及华尔街的优秀⼈才，团队成员分布在北京、硅⾕两地。 曾⼯作多年于MSCI、标普、CDP、世界资源研究所，脸书，美国环保局，国家电⽹等中国⼤中型企业和机构，具有全球领先ESG战略咨询服务经验。</h2>
          </div>
          <div class="grid-wrapper">
            <div class="card">
              <div class="card-content">
                <div class="text-section">
                  <h2 class="sequence">01</h2>
                  <h4>创始⼈</h4>
                  <p>
                    在ESG及可持续发展领域拥有近⼆⼗年深厚经验的资深⼈⼠。 此⼈曾在多家世界500强企业、国际组织以及政府智库担任要职，为上百家企业及投资⼈领袖提供过服务。 在其职业⽣涯中，参与制定上市公司ESG信息披露标准，并涉⾜TCFD与ISSB的披露框架。 除此之外，还参与了⾚道银⾏的建设、应对⽓候变化的国家战略规划、碳市场的构建以及绿⾊信贷和绿⾊⾦融环境等多个可持续⾦融领域的课题研究
                  </p>
                </div>
                <div class="arrow">
                  <a>阅读 更多</a>
                  <a>
                    <img src="../../assets/images/arrow.svg" />
                  </a>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="text-section">
                <h2 class="sequence">02</h2>
                <h4>技术团队</h4>
                <p>
                  汇聚了⼀批在全球科技巨头和领先环保机构拥有丰富经验的顶尖⼈才。 团队成员们曾在诸如Meta、美国联邦环保局（US.EPA）、爱⽴信和中兴通讯等知名机构和公司负责重要项⽬和技术开发， 这为团队在数据分析、云计算、环境⻛险计算以及ERP系统和业务系统开发等领域积累了宝贵的经验和深厚的技术功底。
                </p>
              </div>
              <div class="arrow">
                <a>阅读 更多</a>
                <a>
                  <img src="../../assets/images/arrow.svg" />
                </a>
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
* {
  box-sizing: border-box
}
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
h2 {
  font-size: 2rem;
  line-height: 1.4;
}

@media screen and (min-width: 480px) {
  h2 {
    font-size: 2.25rem;
    line-height: 1.28;
  }
}

@media screen and (min-width: 768px) {
  h2 {
    font-size: 2.5rem;
    line-height: 1.28;
  }
}

@media screen and (min-width: 960px) {
  h2 {
    font-size: 2.75rem;
    line-height: 1.28;
  }
}
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
    grid-template-columns: repeat(2,1fr);
    row-gap: 2rem;
    column-gap: 2rem
  }
}
.card {
  background-color: #162227;
  border-radius: 8px 8px 8px 0;
  padding: 1.5rem;
  padding-bottom: 6rem;
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
</style>