<template>
  <div class="internationnal">
    <img class="headimg" :src="img1" alt="" />

    <div class="centerbody">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>国际标准</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="wrapper">
        <div class="card">
          <div class="card-img">
            <img src="/assets/img/cdp.png" alt="" />
          </div>
          <div class="card-text">
            <div class="card-text-head">
              <strong>碳信息披露项目（CDP）的环境信息披露</strong>
            </div>
            <div class="card-text-content">
              <p>
                &ensp;&ensp;&ensp;&ensp;2000年在英国成立，是国际性的非盈利组织，专门为企业、城市和地区提供全球唯一的测量，披露，管理和分享重要环境信息的系统，目前拥有全球最大的企业气候变化数据库。旨在通过市场力量鼓励企业去披露他们对干环境和自然资源的影响，并使他们采取行动减少其产生的影响。CDP
                已经拥有全球最大的关于气候变化，水和森林风险的信息数据库，并且把这些运用于战略性的商业投资和政策决定核心。每年CDP代表机构投资者、采购公司以及政府发出信息披露请求来收集相关数据。CDP主要通过市场的力量鼓励企业披露其对环境和自然资源的影响，并通过采取行动减缓这些影响。通过CDP的全球报告系统，公司、投资者及城市管理人可以更好地降低风险，抓住机遇，做出更有利干社会可持续发展的投资决策。2012年，CDP进入中国。
                CDP将根据组织经营活动中对气候变化、森林和水的消耗
                和影响进行评价并给出问卷;企业将根据自身经营活动进行相应的回答:包括公司战略、治理、风险管理、目标及行动结果等要素，其中所候变化
                旨在提升企业对自身经营中所消耗的能源进行管理，并通过盘查或核查
                温室气体数据以减少温室气体采取具体行动。
              </p>
            </div>
            <div class="card-text-link">
              <a href="https://www.cdp.net/en/responses" target="_blank">点击跳转</a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-img">
            <img src="/assets/img/GRI.png" alt="" />
          </div>
          <div class="card-text">
            <div class="card-text-head">
              <strong>全球报告倡议组织（GRI）的GRI标准</strong>
            </div>
            <div class="card-text-content">
              <p>
                &ensp;&ensp;&ensp;&ensp;GRI是一个国际非营利组织，旨在通过提供可持续发展报告指南，帮助企业认识和披露其商业活动在重要可持续发展议题上的影响，从而促进全球经济的可持续发展。GRI开创与编制了目前全球最为广泛使用的可持续发展报告框架，该框架从经济、环境、社会和治理四个维度衡量和披露企业的可持续发展绩效。GRI的报告指南几乎代表可持续发展报告领域的最佳实践。
                GRI由美国非政府组织环境责任经济联盟(Coalition for Environmentally Responsible
                Economics,CERES)以及联合国环境规划署(UNEP)于1997年联合倡议并成立。这一组织最初的目的是促进企业建立问责机制，规范环境责任行为，其后拓展到社会、经济以及治理范畴。GRI陆续在制定、推广和传播全球通用的可持续发展报告框架方面开展了大量工作，并且得到了政府、商界、社会公众等多方广泛支持。自GRI在2000年发布首份可持续发展报告指南(G1)，为企业提供可持续发展报告的第一个全球框架以来，GRI已经发布了五代报告指南。
              </p>
            </div>
            <div class="card-text-link">
              <a href="https://www.cdp.net/en/responses" target="_blank">点击跳转</a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-img">
            <img src="/assets/img/IIRC.png" alt="" />
          </div>
          <div class="card-text">
            <div class="card-text-head">
              <strong>国际综合报告委员会（IIRC）的国际综合报告框架</strong>
            </div>
            <div class="card-text-content">
              <p>
                &ensp;&ensp;&ensp;&ensp;国际综合报告委员会（IIRC）的目标是制定综合报告的框架，框架的目的是：
                1．通过展示长期和广泛的决策后果来满足长期投资者的信息需求；
                2．反映在做影响长期绩效和形势的决定时，环境、社会、公司治理和财务因素之间的内在联系，明确可持续发展和经济价值之间的关系；
                3．提供合适的框架用于在信息披露和决策时能够系统地将社会和环境因素考虑在内；
                4．重新考虑衡量绩效的标准，使其不只注重于对短期财务的表现；
                5．通过对日常运作的业务的管理，使报告更接近信息使用者的需要。
              </p>
            </div>
            <div class="card-text-link">
              <a href="https://www.cdp.net/en/responses" target="_blank">点击跳转</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import img1 from '/assets/img/international-img.jpg'
</script>

<style lang="scss" scoped>
@import './international.scss';
</style>
