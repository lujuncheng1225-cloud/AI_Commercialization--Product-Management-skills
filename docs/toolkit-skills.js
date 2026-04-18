const skills=[
{id:'competitor-feature',category:'竞品分析',title:'竞品功能对比',titleEn:'Feature Comparison',desc:'输入产品名，AI 帮你生成结构化功能对比矩阵',descEn:'Generate a structured feature comparison matrix for any two products',level:'入门',sourceRef:'skills/problem-statement/SKILL.md',sourceFit:'adjacent',
steps:[
{title:'你要对比哪两个产品？',fields:[{key:'productA',label:'产品 A',type:'text',placeholder:'如：TikTok'},{key:'productB',label:'产品 B',type:'text',placeholder:'如：Instagram Reels'}]},
{title:'你想重点对比哪些方面？',fields:[{key:'dimensions',type:'checkbox',options:['核心功能','用户体验','变现模式','用户增长','技术架构','市场定位'],defaults:['核心功能','用户体验']}]},
{title:'补充你的背景信息（可选）',fields:[{key:'context',label:'你的产品/背景',type:'textarea',placeholder:'如：我正在做一个短视频社交产品，面向 Z 世代用户'}]}
],
prompt:d=>`请从产品判断视角完成一次竞品功能对比。\n\n对比对象：\n· ${d.productA}\n· ${d.productB}\n\n重点维度：\n${d.dimensions.map(v=>'· '+v).join('\n')}\n\n${d.context?'我的背景：'+d.context+'\n\n':''}请按以下结构输出：\n1. 对比结论：两者最核心的定位差异是什么\n2. 功能矩阵：只列会影响用户选择的功能差异\n3. 用户任务差异：分别更适合什么用户任务\n4. 可借鉴点：哪些值得学，哪些不能照抄\n5. 风险和假设：哪些判断依赖公开信息或待验证信息\n6. 下一步：如果要做产品决策，最该补哪 3 条证据`,
tips:['输出后重点看“不能照抄”的部分','公开信息不完整时，要把判断写成假设','可以追问“哪些差异会影响我们的路线图”']},

{id:'competitor-pricing',category:'竞品分析',title:'竞品定价分析',titleEn:'Pricing Analysis',desc:'对比竞品定价策略，找到定价机会点',descEn:'Compare competitor pricing strategies and find pricing opportunities',level:'进阶',sourceRef:'skills/pricing-packaging-brief/SKILL.md',sourceFit:'direct',
steps:[
{title:'你要分析哪些产品的定价？',fields:[{key:'products',label:'产品列表',type:'textarea',placeholder:'每行一个，如：\nNotion\nCoda\nObsidian'},{key:'market',label:'目标市场',type:'text',placeholder:'如：全球 SaaS 市场'}]},
{title:'你已有的定价信息（可选）',fields:[{key:'pricing',label:'已知定价信息',type:'textarea',placeholder:'如：Notion 免费/$8/$15'}]},
{title:'你的分析重点是什么？',fields:[{key:'focus',type:'checkbox',options:['定价模型对比','价格区间分析','功能与价格关系','用户分层策略','免费版策略'],defaults:['定价模型对比','价格区间分析']}]}
],
prompt:d=>`请做一次竞品定价结构分析。重点不是抄价格，而是拆出它们的套餐逻辑。\n\n分析对象：\n${d.products.split('\n').filter(Boolean).map(v=>'· '+v).join('\n')}\n\n目标市场：${d.market}\n${d.pricing?'已知定价信息：\n'+d.pricing+'\n\n':''}重点分析维度：\n${d.focus.map(v=>'· '+v).join('\n')}\n\n请按以下结构输出：\n1. 已知信息和信息缺口：哪些价格是已知，哪些需要复查\n2. 定价模型对比：订阅、按量、席位、混合模式分别如何使用\n3. 套餐边界：免费层保护了什么，付费层卡了什么\n4. 升级触发点：用户为什么从低档升级到高档\n5. 我方机会：哪些定位空间成立，哪些只是看起来便宜\n6. 风险：如果照抄竞品，最可能错在哪里`,
tips:['不知道竞品定价时先标注待查，不要编价格','追问“哪些套餐边界最值得我们验证”']},

{id:'competitor-tracking',category:'竞品分析',title:'竞品动态追踪',titleEn:'Competitive Tracking',desc:'生成竞品监控框架，系统化追踪竞品变化',descEn:'Build a competitive monitoring framework to track changes systematically',level:'入门',sourceRef:'skills/voice-of-customer-synthesis/SKILL.md',sourceFit:'adjacent',
steps:[
{title:'你要追踪哪些竞品？',fields:[{key:'competitors',label:'竞品列表',type:'textarea',placeholder:'每行一个，如：\nFigma\nSketch\nAdobe XD'}]},
{title:'你关注的动态类型？',fields:[{key:'trackTypes',type:'checkbox',options:['产品更新','新功能发布','定价变化','市场活动','融资动态','团队变化','用户评价'],defaults:['产品更新','新功能发布','定价变化']}]}
],
prompt:d=>`请帮我建立一个竞品动态追踪框架。目标是识别会影响产品决策的信号，而不是收集新闻。\n\n追踪目标：\n${d.competitors.split('\n').filter(Boolean).map(v=>'· '+v).join('\n')}\n\n重点追踪类型：\n${d.trackTypes.map(v=>'· '+v).join('\n')}\n\n请输出：\n1. 信息来源清单：每类信息从哪里查，哪些来源更可靠\n2. 追踪频率：哪些要周看，哪些月看即可\n3. 信号分级：哪些是噪音，哪些会影响 roadmap、定价或增长判断\n4. 周报模板：只保留变化、证据、影响和建议动作\n5. 反误判规则：哪些动态看起来重要但不应过度反应`,
tips:['可以把生成的追踪框架放入 Notion / 飞书多维表格使用','追问"帮我设计竞品动态周报的具体格式"']},

{id:'user-persona',category:'用户研究',title:'用户画像生成',titleEn:'User Persona',desc:'输入产品信息，AI 生成详细的用户画像',descEn:'Generate detailed user personas based on your product info',level:'入门',sourceRef:'skills/problem-statement/SKILL.md',sourceFit:'adjacent',
steps:[
{title:'你的产品是什么？',fields:[{key:'product',label:'产品描述',type:'textarea',placeholder:'如：一个面向独立设计师的项目管理工具'}]},
{title:'你的目标用户大致是谁？',fields:[{key:'target',label:'目标用户',type:'text',placeholder:'如：自由职业设计师、小团队负责人'}]},
{title:'用户会在什么场景下使用？',fields:[{key:'scenarios',type:'checkbox',options:['日常工作','项目管理','创意协作','远程办公','学习培训','个人兴趣'],defaults:['日常工作','项目管理']}]}
],
prompt:d=>`请基于输入信息生成可用于产品判断的用户画像。不要把画像写成漂亮人设，要写成能指导需求和取舍的用户模型。\n\n产品：${d.product}\n目标用户：${d.target}\n使用场景：\n${d.scenarios.map(v=>'· '+v).join('\n')}\n\n请生成 3 个用户画像，每个包含：\n1. 用户任务：他真正想完成什么\n2. 当前痛点：痛在哪里，为什么现在重要\n3. 行为特征：如何发现、试用、复用产品\n4. 决策因素：什么会促成采用或付费\n5. 证据缺口：哪些内容只是推断，需要后续验证\n6. 产品含义：这类用户会影响哪些功能、定价或增长判断`,
tips:['生成的画像可用于 PRD、设计评审和营销文案','追问"帮我补充用户获取渠道分析"']},

{id:'user-feedback',category:'用户研究',title:'用户反馈分析',titleEn:'Feedback Analysis',desc:'粘贴用户反馈，AI 帮你提炼关键洞察',descEn:'Paste user feedback and extract key insights',level:'入门',sourceRef:'skills/voice-of-customer-synthesis/SKILL.md',sourceFit:'direct',
steps:[
{title:'粘贴用户反馈',fields:[{key:'feedback',label:'用户反馈内容',type:'textarea',placeholder:'每条反馈一行，如：\n"导出功能太慢了"\n"希望支持暗色模式"\n"协作功能不够流畅"'}]},
{title:'你希望重点分析什么？',fields:[{key:'focus',type:'radio',options:['功能需求提炼','情感倾向分析','优先级排序','全部都分析'],defaults:'全部都分析'}]}
],
prompt:d=>`请把下面的用户反馈整理成能支持产品决策的 VOC synthesis。\n\n原始反馈：\n${d.feedback}\n\n分析重点：${d.focus}\n\n请按以下结构输出：\n1. Recurring Themes：重复出现的主题，不要把单条反馈放大成趋势\n2. Supporting Signals：每个主题对应的原始证据或代表性表达\n3. Inferred Causes：可能原因，必须标注为推断\n4. Product Implications：对功能、体验、定价或沟通的含义\n5. Priority：哪些应该先处理，为什么\n6. Evidence Gaps：还缺哪些证据会改变判断\n\n要求：\n- 区分 observation、pattern、inference 和 recommendation\n- 不要把用户原话直接翻译成功能需求\n- 不要因为声音大就默认优先级最高`,
tips:['反馈越多越好，但必须保留证据和推断的区别','追问“哪些主题最可能影响转化或留存”']},

{id:'user-churn',category:'用户研究',title:'用户流失分析',titleEn:'Churn Analysis',desc:'分析用户为什么离开，找到挽回策略',descEn:'Analyze why users leave and find retention strategies',level:'进阶',sourceRef:'skills/retention-levers-review/SKILL.md',sourceFit:'direct',
steps:[
{title:'你的产品是什么？',fields:[{key:'product',label:'产品描述',type:'text',placeholder:'如：在线教育平台，月费 99 元'}]},
{title:'你知道的流失情况',fields:[{key:'data',label:'流失数据',type:'textarea',placeholder:'如：月流失率约 8%，主要在第 7-14 天流失'}]},
{title:'你怀疑的流失原因',fields:[{key:'suspects',type:'checkbox',options:['新手指引不够','核心价值不明显','竞品更便宜','功能满足不了需求','使用频次低','付费门槛高'],defaults:['新手指引不够','核心价值不明显']}]}
],
prompt:d=>`请做一次留存与流失诊断。目标是找出 repeat value 是否成立，而不是直接写召回话术。\n\n产品：${d.product}\n\n流失数据：\n${d.data}\n\n当前怀疑原因：\n${d.suspects.map(v=>'· '+v).join('\n')}\n\n请输出：\n1. 当前流失模式：发生在首次价值前、首次价值后，还是重复价值阶段\n2. 主要解释：最可能的 1 个原因和关键依据\n3. 最强替代解释：还有哪个解释也成立\n4. 待验证证据：下一步最该看的行为数据或用户反馈\n5. 干预建议：先修产品价值、使用触发，还是召回触达\n6. 风险：哪些动作可能只提高短期回访但不改善长期留存`,
tips:['数据不多也没关系，AI 会基于常见模式给出分析框架','追问"帮我设计新用户 Onboarding 优化方案"']},

{id:'req-priority',category:'需求管理',title:'需求优先级排序',titleEn:'Priority Sorting',desc:'粘贴需求列表，AI 用专业框架帮你排序',descEn:'Sort requirements using professional frameworks (RICE, ICE, etc.)',level:'进阶',sourceRef:'commands/prioritize.md',sourceFit:'direct',
steps:[
{title:'粘贴你的需求列表',fields:[{key:'requirements',label:'需求列表',type:'textarea',placeholder:'每行一个，如：\n1. 支持暗色模式\n2. 导出为 PDF\n3. 团队协作权限管理'}]},
{title:'选择排序框架',fields:[{key:'framework',type:'radio',options:['RICE（覆盖×影响×信心÷工作量）','ICE（影响×信心×难易度）','自定义权重'],defaults:'RICE（覆盖×影响×信心÷工作量）'}]}
],
prompt:d=>`请帮我做需求优先级判断。不要为了表格好看而制造假精确分数。\n\n需求列表：\n${d.requirements}\n\n拟使用框架：${d.framework}\n\n请按以下结构输出：\n1. 先判断框架是否适合：如果数据不足，说明应该如何降级使用\n2. 排序依据：每个需求按影响、证据、成本、风险做相对判断\n3. 排序结果：分为立即做 / 计划做 / 暂缓\n4. 如果只能选 3 个：给出主推荐，并说明为什么不是其他项\n5. 信息缺口：哪些数据一旦补齐可能改变排序\n6. 执行建议：下一步如何组织评审或补数据\n\n要求：\n- 分数只能作为辅助，不要伪装成确定结论\n- 区分战略取舍和 backlog 打分\n- 明确写出不适合使用该框架的情况`,
tips:['需求描述越详细，排序越可靠','追问“如果不用 RICE，应该用什么更轻的框架”']},

{id:'prd-draft',category:'需求管理',title:'PRD 初稿生成',titleEn:'PRD Draft',desc:'输入需求信息，AI 生成结构化 PRD 初稿',descEn:'Generate a structured PRD draft from your requirements',level:'进阶',sourceRef:'commands/write-prd.md',sourceFit:'direct',
steps:[
{title:'你要做什么功能/产品？',fields:[{key:'requirement',label:'需求描述',type:'textarea',placeholder:'如：为项目管理工具增加甘特图功能，支持任务依赖关系可视化'}]},
{title:'谁会用这个功能？',fields:[{key:'users',label:'目标用户',type:'text',placeholder:'如：项目经理、团队负责人'}]},
{title:'关键功能点',fields:[{key:'features',label:'核心功能',type:'textarea',placeholder:'每行一个，如：\n任务时间线展示\n拖拽调整时间\n任务依赖连线'}]},
{title:'有什么约束条件？',fields:[{key:'constraints',type:'checkbox',options:['有上线时间要求','需要兼容旧版','有技术限制','需要考虑性能','需要多端适配','暂无特殊约束'],defaults:['暂无特殊约束']}]}
],
prompt:d=>`请生成一份 PRD 初稿。先把问题和范围写清楚，再写功能，不要把功能清单当成 PRD。\n\n需求：${d.requirement}\n目标用户：${d.users}\n\n核心功能：\n${d.features.split('\n').filter(Boolean).map(v=>'· '+v).join('\n')}\n\n约束条件：\n${d.constraints.map(v=>'· '+v).join('\n')}\n\n请按以下结构输出：\n1. Executive Summary：这次要解决什么，为什么现在做\n2. Problem Statement：用户问题、业务问题、已知证据和假设\n3. Goals / Non-goals：目标、成功指标、明确不做什么\n4. Users and Scenarios：目标用户和关键场景\n5. Solution Scope：must-have、should-have、out of scope\n6. Requirements：功能需求、非功能需求、数据需求\n7. Risks and Dependencies：主要风险、依赖和待决问题\n8. Review Gates：这份 PRD 当前是否可进入评审，哪些地方需要补证据\n\n要求：\n- 不要臆造指标 baseline\n- 如果信息不足，标注为假设\n- 明确说明为什么不是更大或更小版本`,
tips:['PRD 初稿需要根据实际情况调整完善','追问"帮我补充竞品在这方面的做法"']},

{id:'req-review',category:'需求管理',title:'需求评审模拟',titleEn:'Review Simulation',desc:'AI 扮演评审专家，提前发现需求漏洞',descEn:'AI acts as a reviewer to find gaps in your requirements',level:'进阶',sourceRef:'skills/review-gates/SKILL.md',sourceFit:'direct',
steps:[
{title:'粘贴你的需求描述',fields:[{key:'requirement',label:'需求描述',type:'textarea',placeholder:'如：我们计划增加 AI 写作助手功能，用户输入主题自动生成文章大纲…'}]},
{title:'你希望从哪些角度评审？',fields:[{key:'angles',type:'checkbox',options:['完整性','可行性','用户价值','技术风险','边界条件','异常场景','性能影响','数据安全'],defaults:['完整性','可行性','用户价值','边界条件']}]}
],
prompt:d=>`你是一个严格但建设性的需求评审专家。请对以下需求进行评审：\n\n${d.requirement}\n\n评审角度：\n${d.angles.map(v=>'· '+v).join('\n')}\n\n请输出：\n1. 需求理解确认\n2. 发现的问题（P0 致命 / P1 重要 / P2 建议）\n3. 遗漏的场景和边界条件\n4. 潜在的技术风险\n5. 改进建议\n6. 评审结论：通过 / 有条件通过 / 需要修改`,
tips:['这个 Skill 相当于免费的评审预演','追问"如果我是评审委员会成员，我会怎么提问"']},

{id:'pricing-strategy',category:'定价策略',title:'定价方案建议',titleEn:'Pricing Strategy',desc:'把产品价值、价值指标、免费层边界和升级触发点拆成可执行的定价推演',descEn:'Turn product value, value metric, free tier boundary, and upgrade triggers into a pricing brief',level:'进阶',sourceRef:'commands/redesign-pricing-packages.md',sourceFit:'direct',
steps:[
{title:'产品形态和目标用户',fields:[{key:'product',label:'产品描述',type:'textarea',placeholder:'如：SaaS 项目管理工具，核心功能是看板、甘特图、团队协作'},{key:'deliverable',label:'核心交付物',type:'text',placeholder:'如：项目空间 / 自动化报表 / 生成次数 / 专家服务结果'},{key:'target',label:'目标用户',type:'text',placeholder:'如：独立创作者、小团队负责人、企业管理员'}]},
{title:'用户如何使用并获得价值？',fields:[{key:'usageMetric',label:'可能的使用维度',type:'checkbox',options:['按座席','按项目数','按生成量/用量','按存储/时长','按结果交付','混合模式','不确定'],defaults:['不确定']},{key:'frequency',label:'使用频率',type:'radio',options:['高频日常使用','周期性项目使用','低频但高价值使用','一次性消耗使用','不确定'],defaults:'不确定'},{key:'value',label:'核心价值',type:'textarea',placeholder:'如：提升团队协作效率 30%，减少会议时间'}]},
{title:'免费层和升级触发点',fields:[{key:'freeBoundary',label:'当前或设想的免费/付费边界',type:'textarea',placeholder:'如：免费版支持 3 个项目，付费版解锁团队协作、高级报表和导出'},{key:'upgradeSignals',label:'可能的升级触发点',type:'checkbox',options:['用量触顶','高级模型/高级功能','多人协作','商用授权','导出/去水印','速度/优先队列','数据/权限/安全','不确定'],defaults:['不确定']}]},
{title:'竞品锚点和业务约束',fields:[{key:'competitors',label:'竞品定价',type:'textarea',placeholder:'如：\nJira：$7.75/人/月起\nAsana：$10.99/人/月起'},{key:'constraints',label:'业务约束（可选）',type:'textarea',placeholder:'如：收入目标、成本限制、不能影响老用户、需要先小流量灰度'}]}
],
prompt:d=>`你是一个负责商业化定价的产品负责人。\n\n请不要直接报一个价格。先把定价问题拆成可推演的商业结构。\n\n产品描述：\n${d.product}\n\n核心交付物：${d.deliverable}\n目标用户：${d.target}\n\n可能的使用维度：\n${d.usageMetric.map(v=>'· '+v).join('\n')}\n\n使用频率：${d.frequency}\n\n用户核心价值：\n${d.value}\n\n当前或设想的免费/付费边界：\n${d.freeBoundary}\n\n可能的升级触发点：\n${d.upgradeSignals.map(v=>'· '+v).join('\n')}\n\n竞品定价：\n${d.competitors}\n\n业务约束：\n${d.constraints}\n\n请按以下结构输出：\n1. 信息缺口与关键假设：哪些结论依赖假设，哪些信息必须补齐\n2. 目标客群与购买动机：谁最可能付费，为什么现在付费\n3. Value metric 建议：主价值指标、备选指标、不建议使用的指标，以及理由\n4. 套餐结构建议：Free / Pro / Team 或 Studio，每档覆盖的用户、功能边界和建议价格区间\n5. 免费层边界：哪些能力应该免费，哪些能力必须付费，为什么\n6. 升级触发点：用户在什么使用节点、价值节点或组织节点会升级\n7. 竞品锚点与定位空间：哪些价格可以参考，哪些不能照抄\n8. 上线策略：小范围实验、价格展示方式、老用户保护和指标 guardrails\n9. 风险与取舍：这个定价方案可能伤害什么，需要保护什么\n\n要求：\n- 不要输出 SWOT\n- 不要给通用定价理论\n- 每个建议都要回扣到上面的输入信息\n- 如果信息不足，明确标注为假设，不要伪装成结论`,
tips:['如果输出不对，优先重填核心交付物、价值指标和免费层边界','追问"如果只做小范围价格实验，第一版该怎么设计"']},

{id:'ab-pricing',category:'定价策略',title:'AB 定价实验设计',titleEn:'Pricing Experiment',desc:'科学设计定价实验，用数据驱动定价决策',descEn:'Design scientific pricing experiments with data-driven decisions',level:'高级',sourceRef:'skills/growth-experiment-design/SKILL.md',sourceFit:'direct',
steps:[
{title:'你的实验目标是什么？',fields:[{key:'goal',label:'实验目标',type:'text',placeholder:'如：验证 $29/月 vs $39/月 哪个 ARPU 更高'}]},
{title:'你要测试的变量',fields:[{key:'variables',label:'变量定义',type:'textarea',placeholder:'如：\nA组：$29/月\nB组：$39/月（含高级功能）'}]},
{title:'你有哪些可用数据？',fields:[{key:'data',label:'可用数据',type:'checkbox',options:['月活用户数','当前转化率','ARPU','流失率','用户分群数据','竞品定价'],defaults:['月活用户数','当前转化率','ARPU']}]}
],
prompt:d=>`请设计一个定价实验。目标是验证一个关键假设，而不是一次性证明整套定价方案正确。\n\n实验目标：${d.goal}\n\n测试变量：\n${d.variables}\n\n可用数据：\n${d.data.map(v=>'· '+v).join('\n')}\n\n请按以下结构输出：\n1. 核心假设：这次实验到底验证什么\n2. 实验变量：只保留一个主变量，其他变量如何保持稳定\n3. 受众和分流：哪些用户进入实验，哪些用户不应该进入\n4. Primary Metric：主指标是什么\n5. Guardrails：收入、转化、留存、投诉或退款等保护指标\n6. 判定规则：什么结果继续、停止或迭代\n7. 风险控制：老用户保护、价格感知、样本量不足时怎么处理\n8. 下一步：实验通过后进入什么动作`,
tips:['定价实验涉及收入，建议小流量测试后逐步放量','追问"如果实验结果不显著怎么办"']},

{id:'data-anomaly',category:'数据分析',title:'数据异常解读',titleEn:'Anomaly Diagnosis',desc:'描述数据异常，AI 帮你排查原因',descEn:'Describe a data anomaly and get root cause analysis',level:'入门',sourceRef:'skills/conversion-funnel-diagnostic/SKILL.md',sourceFit:'adjacent',
steps:[
{title:'描述你观察到的异常',fields:[{key:'anomaly',label:'异常描述',type:'textarea',placeholder:'如：昨天 DAU 突然下降了 15%，从 10 万降到 8.5 万'}]},
{title:'你有哪些相关信息？',fields:[{key:'info',label:'可用信息',type:'textarea',placeholder:'如：\n安卓端下降明显，iOS 端正常\n新用户和活跃用户都在下降'}]}
],
prompt:d=>`请做一次数据异常诊断。先判断异常发生在哪里，再判断可能原因，不要直接跳到解决方案。\n\n异常描述：\n${d.anomaly}\n\n相关信息：\n${d.info}\n\n请输出：\n1. 已知事实：只列输入里已经给出的信息\n2. 异常定位：可能发生在哪个漏斗阶段、用户分群或数据口径\n3. 主要解释：最可能的 1-2 个原因和依据\n4. 最强替代解释：还可能是什么\n5. 排查顺序：先查什么，再查什么，为什么\n6. 临时处置：如果需要快速止损，应该做什么\n7. 不确定性：哪些结论目前不能确认`,
tips:['描述越详细，排查方向越准确','追问"帮我设计一个数据异常自动告警方案"']},

{id:'report-gen',category:'数据分析',title:'周报/月报生成',titleEn:'Report Generator',desc:'输入关键信息，AI 生成结构化汇报',descEn:'Generate structured weekly or monthly reports',level:'入门',sourceRef:'skills/revenue-metrics-scorecard/SKILL.md',sourceFit:'adjacent',
steps:[
{title:'核心指标数据',fields:[{key:'metrics',label:'指标数据',type:'textarea',placeholder:'如：\nDAU：12.5 万（环比 +8%）\n付费转化率：3.2%（环比 +0.3%）'}]},
{title:'关键进展和事件',fields:[{key:'progress',label:'关键进展',type:'textarea',placeholder:'如：\n- 完成了 v2.0 发布\n- 上线了推荐系统'}]},
{title:'存在的问题和风险',fields:[{key:'risks',label:'问题与风险',type:'textarea',placeholder:'如：\n- 安卓端崩溃率偏高\n- 竞品发布了类似功能'}]}
],
prompt:d=>`请根据以下信息生成一份产品周报。重点是判断变化和下一步，而不是罗列流水账。\n\n核心指标：\n${d.metrics}\n\n关键进展：\n${d.progress}\n\n问题与风险：\n${d.risks}\n\n请输出：\n1. 本周结论：2-3 句话说明最重要变化\n2. 指标解读：哪些指标改善，哪些指标恶化，哪些需要继续观察\n3. 关键进展：只写和目标相关的进展\n4. 风险和阻塞：标注影响、证据和 owner 建议\n5. 下周重点：不超过 3 件事\n6. 需要决策或协作：明确希望谁做什么`,
tips:['周报重在简洁，突出变化和行动','追问"帮我优化这份周报，让它更简洁"']},

{id:'dashboard-design',category:'数据分析',title:'数据看板设计',titleEn:'Dashboard Design',desc:'设计产品数据看板，明确核心监控指标',descEn:'Design product dashboards with key metrics',level:'进阶',sourceRef:'skills/revenue-metrics-scorecard/SKILL.md',sourceFit:'direct',
steps:[
{title:'你的产品是什么？',fields:[{key:'product',label:'产品描述',type:'text',placeholder:'如：电商小程序，主要卖美妆产品'}]},
{title:'你的监控目标是什么？',fields:[{key:'goals',type:'checkbox',options:['用户增长','活跃度','商业化','留存','用户体验','运营效率'],defaults:['用户增长','商业化','留存']}]}
],
prompt:d=>`请设计一个产品数据看板。先定义主判断，再定义指标，不要把所有能看的数都放进去。\n\n产品：${d.product}\n监控目标：\n${d.goals.map(v=>'· '+v).join('\n')}\n\n请输出：\n1. Primary Metric：当前最应该代表目标结果的主指标\n2. Diagnostic Metrics：解释主指标变化的关键诊断指标\n3. Guardrails：防止错误优化的保护指标\n4. 看板分区：每个分区回答什么业务问题\n5. 指标口径：核心指标的定义、分母、分子和更新频率\n6. 告警规则：哪些变化需要人工介入\n7. 不放进看板的指标：哪些指标容易制造噪音`,
tips:['先确定北极星指标，再搭建看板','追问"帮我用 SQL 写这些指标的计算逻辑"']},

{id:'monetization',category:'商业化',title:'商业化方案',titleEn:'Monetization Plan',desc:'为你的产品设计完整的商业化方案',descEn:'Design a complete monetization plan for your product',level:'高级',sourceRef:'commands/commercial-strategy-review.md',sourceFit:'direct',
steps:[
{title:'你的产品是什么？',fields:[{key:'product',label:'产品描述',type:'textarea',placeholder:'如：AI 写作助手工具，已有 5 万免费用户'}]},
{title:'你倾向什么商业模式？',fields:[{key:'model',type:'radio',options:['订阅制','按量付费','广告变现','电商/交易','混合模式','不确定，帮我分析'],defaults:'不确定，帮我分析'}]},
{title:'目标市场规模',fields:[{key:'market',label:'目标市场',type:'text',placeholder:'如：国内中小企业，年预算 5000-50000 元'}]}
],
prompt:d=>`请做一次商业化策略评审。目标是找出最限制收入增长的那个杠杆，而不是平均给一堆建议。\n\n产品：${d.product}\n偏好商业模式：${d.model}\n目标市场：${d.market}\n\n请按以下结构输出：\n1. 当前商业化假设：用户为什么付费，收入来自哪里\n2. 主约束判断：当前最可能卡在定价、包装、转化、留存还是获客质量\n3. 证据和信息缺口：哪些是已知，哪些必须补齐\n4. 商业模式建议：订阅、按量、积分、广告或混合模式是否匹配\n5. 产品分层：免费层、付费层、高级权益各自承担什么角色\n6. 优先动作：下一步最该验证或改造的 1-3 件事\n7. 风险与 guardrails：可能伤害哪些指标，如何保护\n\n要求：\n- 不要直接套收入公式伪装成测算\n- 不要同时把所有杠杆都列为同等优先\n- 信息不足时标注为假设`,
tips:['商业化建议必须落到一个主约束上','追问“如果只做一个小实验，应该先测什么”']},

{id:'retention-strategy',category:'商业化',title:'续订挽回策略',titleEn:'Retention Strategy',desc:'设计用户续订和流失挽回策略',descEn:'Design subscription renewal and win-back strategies',level:'高级',sourceRef:'commands/analyze-paid-retention.md',sourceFit:'direct',
steps:[
{title:'你的产品是什么？',fields:[{key:'product',label:'产品描述',type:'text',placeholder:'如：SaaS 设计工具，月费 49 元'}]},
{title:'流失用户有什么特征？',fields:[{key:'traits',label:'流失特征',type:'textarea',placeholder:'如：\n大多在订阅第 3 个月流失\n使用频率低于每周 1 次\n主要来自免费试用转化'}]}
],
prompt:d=>`请分析付费用户续订和流失挽回问题。先判断 repeat value 是否成立，再讨论触达和优惠。\n\n产品：${d.product}\n\n流失用户特征：\n${d.traits}\n\n请输出：\n1. 留存模式判断：是价值不足、使用频率不足、价格不匹配，还是生命周期触达问题\n2. 高风险分群：哪些付费用户最需要预警\n3. 预警信号：哪些行为或指标代表续订风险上升\n4. 干预策略：产品修复、权益提醒、触达召回、优惠挽回分别何时用\n5. 不建议动作：哪些短期优惠可能伤害长期收入质量\n6. 实验设计：下一轮最小可验证干预是什么\n7. Guardrails：续费率、ARPPU、退款、投诉或降级风险如何监控`,
tips:['挽回成本远低于获客成本，值得投入','追问"帮我设计具体的挽回邮件模板"']},

{id:'growth-experiment',category:'增长策略',title:'增长实验设计',titleEn:'Growth Experiment',desc:'设计科学的增长实验，系统化推动用户增长',descEn:'Design scientific growth experiments',level:'进阶',sourceRef:'skills/growth-experiment-design/SKILL.md',sourceFit:'direct',
steps:[
{title:'你的增长目标是什么？',fields:[{key:'goal',label:'增长目标',type:'text',placeholder:'如：3 个月内 DAU 从 10 万增长到 30 万'}]},
{title:'你可以用的增长杠杆',fields:[{key:'levers',type:'checkbox',options:['产品驱动增长','渠道投放','内容营销','社交裂变','SEO/ASO','合作BD','付费获客'],defaults:['产品驱动增长','社交裂变','内容营销']}]},
{title:'有什么约束条件？',fields:[{key:'constraints',label:'约束条件',type:'textarea',placeholder:'如：\n市场预算每月 5 万\n技术团队只有 2 人\n不能做补贴'}]}
],
prompt:d=>`请设计增长实验。每个实验必须绑定一个假设、一个主指标和一个决策规则。\n\n增长目标：${d.goal}\n\n可用杠杆：\n${d.levers.map(v=>'· '+v).join('\n')}\n\n约束条件：\n${d.constraints}\n\n请输出：\n1. 增长模型拆解：目标指标受哪些关键环节影响\n2. 主约束判断：当前最可能先卡在哪里\n3. 实验列表：每个实验包含 Hypothesis / Change / Audience / Primary Metric / Decision Rule\n4. 优先级：按证据价值、成本、风险排序\n5. 最便宜但最锋利的下一步：先做哪个实验，为什么\n6. Guardrails：不要为了增长伤害什么\n7. 暂缓项：哪些实验现在不该做`,
tips:['增长实验不是点子列表，而是决策机制','追问“哪个实验能最快区分两个主要解释”']},

{id:'market-entry',category:'增长策略',title:'市场进入策略',titleEn:'Market Entry',desc:'为新市场进入制定策略和行动计划',descEn:'Develop strategies and action plans for new market entry',level:'高级',sourceRef:'skills/experiment-brief/SKILL.md',sourceFit:'adjacent',
steps:[
{title:'你的产品是什么？',fields:[{key:'product',label:'产品描述',type:'textarea',placeholder:'如：AI 图片编辑 App，目前在国内运营'}]},
{title:'你想进入什么市场？',fields:[{key:'market',label:'目标市场',type:'text',placeholder:'如：东南亚市场 / 日本市场 / 北美市场'}]},
{title:'你有哪些资源？',fields:[{key:'resources',label:'可用资源',type:'checkbox',options:['本地化团队','市场预算','本地合作伙伴','技术基础设施','品牌知名度','政府/政策支持'],defaults:['市场预算','技术基础设施']}]}
],
prompt:d=>`请做一次市场进入策略推演。目标是判断先验证什么，而不是直接写全年计划。\n\n产品：${d.product}\n目标市场：${d.market}\n\n可用资源：\n${d.resources.map(v=>'· '+v).join('\n')}\n\n请输出：\n1. 进入假设：为什么这个市场可能成立\n2. 关键不确定性：用户需求、竞品、渠道、支付、合规、本地化各有什么风险\n3. 最小验证路径：进入前先验证哪 3 件事\n4. 进入方式建议：直接进入、合作、代理、本地化试点分别适合什么条件\n5. 资源取舍：当前资源最不应该浪费在哪里\n6. 里程碑：第 1 月、第 3 月、第 6 月分别验证什么\n7. Stop Conditions：出现什么信号应该暂停`,
tips:['市场进入需要充分调研，建议先做小规模验证','追问"帮我分析这个市场的竞争格局"']},

{id:'cross-team-email',category:'项目沟通',title:'跨部门沟通邮件',titleEn:'Cross-team Email',desc:'生成专业的跨部门沟通邮件，推动协作',descEn:'Generate professional cross-team communication emails',level:'入门',sourceRef:'skills/workshop-facilitation/SKILL.md',sourceFit:'adjacent',
steps:[
{title:'你的沟通目的是什么？',fields:[{key:'purpose',label:'沟通目的',type:'text',placeholder:'如：请求技术团队排期支持新功能开发'}]},
{title:'对方是什么角色/部门？',fields:[{key:'audience',label:'对方角色',type:'text',placeholder:'如：技术负责人、设计团队、运营团队'}]},
{title:'关键信息',fields:[{key:'info',label:'关键信息',type:'textarea',placeholder:'如：\n需求背景：用户反馈强烈\n期望时间：下个迭代\n影响范围：影响 30% 的活跃用户'}]}
],
prompt:d=>`你是一个擅长跨部门沟通的产品经理。请帮我写一封沟通邮件：\n\n沟通目的：${d.purpose}\n对方：${d.audience}\n\n关键信息：\n${d.info}\n\n请输出：\n1. 邮件主题（简洁有力）\n2. 邮件正文（专业但不生硬）\n3. 行动呼吁（明确的下一步）\n\n要求：\n- 语气专业友好\n- 结构清晰（背景 → 需求 → 价值 → 请求）\n- 体现对对方工作量和立场的理解\n- 长度控制在 200 字以内`,
tips:['好的邮件要站在对方角度写','追问"帮我改成更正式/更轻松的语气"']},

{id:'project-retrospective',category:'项目沟通',title:'项目复盘报告',titleEn:'Project Retrospective',desc:'生成结构化的项目复盘，沉淀经验教训',descEn:'Generate structured project retrospectives',level:'进阶',sourceRef:'skills/review-gates/SKILL.md',sourceFit:'adjacent',
steps:[
{title:'项目名称和基本情况',fields:[{key:'project',label:'项目描述',type:'textarea',placeholder:'如：v2.0 大版本升级，历时 3 个月，团队 8 人'}]},
{title:'项目结果如何？',fields:[{key:'result',label:'项目结果',type:'textarea',placeholder:'如：\n按时上线\n核心指标提升了 20%\n但有 3 个已知 bug 待修复'}]},
{title:'发生了哪些关键事件？',fields:[{key:'events',label:'关键事件',type:'textarea',placeholder:'如：\n第 2 周需求变更导致返工\n第 6 周测试发现严重 bug\n上线前 2 天临时加需求'}]}
],
prompt:d=>`请生成一份项目复盘。重点是找出可复用的机制问题，不是写漂亮总结。\n\n项目：${d.project}\n\n结果：\n${d.result}\n\n关键事件：\n${d.events}\n\n请输出：\n1. 项目结论：目标是否达成，偏差在哪里\n2. 事实时间线：只列影响结果的关键事件\n3. Keep：哪些做法应该保留，证据是什么\n4. Problem：哪些问题影响结果，根因是什么\n5. Action：每个行动项要有 owner 类型、截止建议和验证方式\n6. 下次预警信号：哪些迹象出现时应提前介入\n7. Review Gate：这次复盘还有哪些证据缺口`,
tips:['复盘重在诚实，不要回避问题','追问"帮我识别这次项目中最大的风险管理失误"']}
];
