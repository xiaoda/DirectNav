const baseUrl = 'https://hblive.club'

const data = {
  title: '安畅网络',
  nav: [{
    name: '云管理服务',
    text: '安畅提供哪些云管理服务？',
    children: [{
      name: '云战略规划',
      text: '面向云、应用、基础设计及架构的咨询规划',
      link: getUrl('/cloudManagement/cloudInfrastructure')
    }, {
      name: '云托管服务',
      text: '云运维托管及持续运营服务',
      link: getUrl('/cloudManagement/smartCare')
    }, {
      name: '云迁移服务',
      text: '一站式物理迁移上云、云到云迁移服务',
      link: getUrl('/cloudManagement/cloudMigration')
    }, {
      name: '云优化服务',
      text: '云成本、云架构及流程优化服务',
      link: getUrl('/cloudManagement/cloudOptimization')
    }]
  }, {
    name: '解决方案',
    text: '安畅提供哪些解决方案？',
    children: [{
      name: '云安全解决方案',
      text: '通过云安全解决方案为基础设施及业务应用提供稳定而安全的保障',
      children: [{
        name: '等保合规',
        text: '等级保护认证的咨询、整改及测评服务',
        link: getUrl('/cloudSecuritySolution/cloudCompliance')
      }, {
        name: '渗透测试',
        text: 'Web应用、微信小程序、公众号等渗透测试服务',
        link: getUrl('/cloudSecuritySolution/penetrationTest')
      }, {
        name: '云安全架构设计',
        text: '安全架构设计、管理体系咨询、安全运营服务',
        link: getUrl('/cloudSecuritySolution/cloudSecurityArchitectureDesign')
      }, {
        name: '云安全托管（MSS）',
        text: '安全咨询、安全运营中心（SOC）建设、安全管理等服务',
        link: getUrl('/cloudSecuritySolution/mss')
      }]
    }, {
      name: '应用现代化解决方案',
      text: '通过应用现代化能最大化云计算的经济价值，提升业务敏捷性和创新性。',
      children: [{
        name: '低代码解决方案',
        text: '主流平台选型、应用开发、使用培训、私有化实施及运维',
        link: getUrl('/appModernization/lowCode')
      }, {
        name: '应用现代化改造',
        text: '以云原生技术实现应用架构、研发流程和工具链、基础设施的现代化升级',
        link: getUrl('/appModernization/appTransform')
      }, {
        name: '应用定制',
        text: '面向Web应用、小程序、APP提供定制开发服务',
        link: getUrl('/appModernization/customization')
      }, {
        name: 'DevOps咨询实施',
        text: '提供培训、流程和工具适配、敏捷和工程实践落地辅导',
        link: getUrl('/appModernization/devOps')
      }]
    }, {
      name: '行业解决方案',
      text: '多场景、多行业的云上数字化转型方案，助力企业释放云的无限商业潜力。',
      children: [{
        name: '零售消费',
        text: '持续护航智慧零售数字化转型之旅',
        link: getUrl('/industrySolutions/retail')
      }, {
        name: '工业制造',
        text: '大数据赋能新型制造，助力制造行业云上转型。',
        link: getUrl('/industrySolutions/industry')
      }, {
        name: '药械行业',
        text: '数字化手段助力生物制药持续创新',
        link: getUrl('/industrySolutions/medicine')
      }, {
        name: '政府公共部门',
        text: '助推智慧城市转型发展，共同驱动数字中国。',
        link: getUrl('/industrySolutions/government')
      }]
    }, {
      name: '数据智能解决方案',
      text: '沉淀企业数字资产，构建智能化的数据决策平台，实现上云用数赋智。',
      children: [{
        name: '构建数据中台',
        text: '主流公有云的云原生数据平台架构规划与实施',
        link: getUrl('/dataIntelligence/dataCenterPlan')
      }, {
        name: '机器学习',
        text: '数据挖掘、模型构建、图像化数据模型呈现',
        link: getUrl('/dataIntelligence/machineLearning')
      }, {
        name: '大数据迁移',
        text: '数据迁移咨询、方案规划、上云迁移实施',
        link: getUrl('/dataIntelligence/bigDataMigration')
      }, {
        name: '智能RPA',
        text: '业务流程分析、方案设计、选型、功能开发交付',
        link: getUrl('/dataIntelligence/intelligenceRpa')
      }, {
        name: '数据可视化',
        text: '数据分析及建模、UI设计、数据开发（BI）及可视化',
        link: getUrl('/dataIntelligence/businessIntelligence')
      }]
    }, {
      name: '行业云解决方案',
      text: '通过“智能化平台+技术专家团队+服务管理体系”三位一体的服务能力',
      children: [{
        name: '集团云运维',
        text: '云运营体系建立、运营安全保障、运营持续优化',
        link: getUrl('/industryCloud/groupCloudOperation')
      }]
    }]
  }, {
    name: '平台工具',
    text: '安畅有哪些平台工具？',
    children: [{
      name: '多云管理平台-SmartOps',
      text: '基于自动化技术和管理服务帮助用户快速上云、合理使用云资源、简化云管理',
      link: getUrl('/platformTools/smartOps')
    }, {
      name: '云迁移平台-SmartAnt',
      text: '快速将业务迁移上云，摆脱繁琐的迁移上云过程。',
      link: getUrl('/platformTools/smartAnt')
    }, {
      name: '云成本优化平台-CCOP',
      text: '结合业务、财务以及技术精细化运营管理云资源，优化组织的云使用成本。',
      link: getUrl('/platformTools/finOps')
    }, {
      name: '混合云原生应用平台-HCNP',
      text: '为企业应用提供全生命周期管理、数据化运营、全方位监控和服务治理',
      link: getUrl('/platformTools/hcnp')
    }]
  }, {
    name: '云代理服务',
    text: '安畅提供哪些云厂商的代理服务？',
    children: [{
      name: '腾讯云',
      link: getUrl('/cloudAgency/tencentCloud')
    }, {
      name: '阿里云',
      link: getUrl('/cloudAgency/aliCloud')
    }, {
      name: '亚马逊云科技',
      link: getUrl('/cloudAgency/amazonCloud')
    }, {
      name: 'Microsoft Azure',
      link: getUrl('/cloudAgency/microsoftCloud')
    }, {
      name: '华为云',
      link: getUrl('/cloudAgency/huaweiCloud')
    }]
  }, {
    name: '客户案例',
    text: '安畅有哪些客户案例？',
    children: [{
      name: '生物制药',
      text: '数字化手段助力生物制药持续创新',
      link: getUrl('/customerCase/sanofi')
    }, {
      name: '零售消费',
      text: '持续护航智慧零售数字化转型之旅',
      link: getUrl('/customerCase/peetsCoffe')
    }, {
      name: '工业制造',
      text: '大数据赋能新型制造，助力制造行业云上数字化转型。',
      link: getUrl('/customerCase/basf')
    }, {
      name: '政府公共部门',
      text: '助推智慧城市转型发展，共同驱动数字中国。',
      link: getUrl('/customerCase/energy')
    }]
  }, {
    name: '关于我们',
    text: '了解安畅网络的更多信息',
    children: [{
      name: '了解安畅',
      link: getUrl('/us/about')
    }, {
      name: '新闻与公告',
      link: getUrl('/us/news/media')
    }, {
      name: '招聘公告',
      link: getUrl('/us/recruitmentInfo')
    }, {
      name: '投资者关系',
      link: getUrl('/us/news/investor')
    }, {
      name: '联系我们',
      link: getUrl('/us/contact')
    }]
  }]
}

export default data

function getUrl (path) {
  return `${baseUrl}${path}`
}