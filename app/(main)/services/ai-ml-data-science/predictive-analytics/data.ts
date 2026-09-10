import { Package, Users, ShieldAlert, DollarSign, Wrench, Globe2, Briefcase, Database, SlidersHorizontal, LineChart, RefreshCw, Rocket, Award, Eye, Crosshair, BarChart3, TrendingUp } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/ai-ml-data-science",
  backLabel: "Back to AI, ML & Data Science",
  titleTop: "Predictive",
  titleBottom: "Analytics",
  description: "Turn historical signals into forward-looking guidance—forecasting, scoring, and monitoring designed for operators and executives.",
  heroImage: "/images/stock/stock-909e6b9a6d.jpg",
  heroImageAlt: "Forecasting",
  topBadge: { icon: null as any, title: "Forecasting", subtitle: "Data-driven", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "85% Accurate", subtitle: "Predictions", colorClass: "bg-emerald-500/10" },
  stats: [
    { value: 80, suffix: "+", label: "AI Projects" },
    { value: 95, suffix: "%", label: "Model Accuracy" },
    { value: 30, suffix: "+", label: "Data Scientists" },
    { value: 50, suffix: "+", label: "Clients Served" },
  ],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Service", headingWhite: "Offerings", subtitle: "Six focused capabilities covering forecasting, risk, and operational intelligence." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our", headingWhite: "Process", subtitle: "Six phases on an alternating vertical timeline." };
export const techHeading: ServicePageSectionProps = { headingGray: "Technology", headingWhite: "Stack", subtitle: "Representative tools by category." };
export const ctaProps: CTAProps = { headingTop: "Ready to Predict Your", headingBottom: "Business Future?", description: "We help you move from spreadsheets to governed forecasts and scores your teams can operationalize." };

export const services: ServiceOffering[] = [
  { icon: Package, title: "Demand Forecasting", description: "SKU-level and aggregate forecasts with seasonality, promotions, and supply constraints encoded for planners.", features: ["Hierarchical models", "Scenario planning", "Accuracy tracking"] },
  { icon: Users, title: "Customer Churn Prediction", description: "Early-warning scores with drivers your teams can act on—offers, success plays, and retention experiments.", features: ["Explainability", "Cohort views", "Playbooks"] },
  { icon: ShieldAlert, title: "Risk Assessment & Scoring", description: "Credit, fraud, and operational risk models with policy thresholds, overrides, and governance documentation.", features: ["Calibration", "Fairness review", "Audit trails"] },
  { icon: DollarSign, title: "Revenue & Sales Forecasting", description: "Pipeline and revenue projections that combine historical performance with forward-looking signals.", features: ["CRM signals", "Executive rollups", "Variance analysis"] },
  { icon: Wrench, title: "Predictive Maintenance", description: "Sensor-informed health scores, remaining-useful-life estimates, and work-order prioritization for uptime.", features: ["Anomaly fusion", "Spares planning", "Alert fatigue controls"] },
  { icon: Globe2, title: "Market & Trend Analysis", description: "Macro and competitive signals distilled into forecasts and narratives product and GTM leaders can trust.", features: ["External data", "Nowcasts", "Insight briefs"] },
];

export const processSteps: ProcessStep[] = [
  { step: "01", title: "Business Goal Definition", description: "Align metrics, decision cadence, and acceptable error so models map to how leaders actually choose.", icon: Briefcase },
  { step: "02", title: "Data Collection & Audit", description: "Profile sources, fix gaps, and document assumptions before any model claims precision it cannot support.", icon: Database },
  { step: "03", title: "Feature Engineering", description: "Craft stable predictors, handle leakage, and validate business logic encoded in transforms.", icon: SlidersHorizontal },
  { step: "04", title: "Model Development", description: "Train baselines through advanced learners with cross-validation tuned to your forecasting horizon.", icon: LineChart },
  { step: "05", title: "Validation & Backtesting", description: "Walk-forward tests, stress scenarios, and sensitivity analysis so stakeholders see robustness—not cherry-picking.", icon: RefreshCw },
  { step: "06", title: "Deployment & Monitoring", description: "Dashboards, scheduled retrains, and drift checks that keep predictions aligned with market reality.", icon: Rocket },
];

export const techCategories: TechCategory[] = [
  { label: "Statistical Tools", items: [{ name: "R", logo: `${DEVICON}/r/r-original.svg` }, { name: "SAS", logo: `${DEVICON}/sas/sas-original.svg` }, { name: "SPSS", logo: `${DEVICON}/spss/spss-original.svg` }, { name: "Stata", logo: `${DEVICON}/stata/stata-original-wordmark.svg` }, { name: "Python", logo: `${DEVICON}/python/python-original.svg` }] },
  { label: "ML Libraries", items: [{ name: "scikit-learn", logo: `${DEVICON}/scikitlearn/scikitlearn-original.svg` }, { name: "XGBoost", logo: `${DEVICON}/xgboost/xgboost-original.svg` }, { name: "Prophet", logo: `${DEVICON}/prophet/prophet-original.svg` }, { name: "statsmodels", logo: `${DEVICON}/statsmodels/statsmodels-original.svg` }] },
  { label: "Visualization", items: [{ name: "Tableau", logo: `${DEVICON}/python/python-original.svg` }, { name: "Power BI", logo: `${DEVICON}/microsoftsqlserver/microsoftsqlserver-original.svg` }, { name: "Looker", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` }, { name: "Plotly", logo: `${DEVICON}/plotly/plotly-original.svg` }] },
  { label: "Data Platforms", items: [{ name: "Snowflake", logo: `${DEVICON}/snowflake/snowflake-original.svg` }, { name: "Databricks", logo: `${DEVICON}/python/python-original.svg` }, { name: "BigQuery", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` }, { name: "Redshift", logo: `${DEVICON}/redshift/redshift-original.svg` }] },
];

export const whyChoose: WhyChooseItem[] = [
  { icon: Award, title: "Domain Expertise", description: "Forecasting and risk practitioners who speak both statistics and the language of revenue, ops, and finance." },
  { icon: Eye, title: "Explainable Models", description: "Driver charts, cohort drill-downs, and documentation so teams trust the number—not just the headline." },
  { icon: Crosshair, title: "Proven Accuracy", description: "Rigorous backtesting, leakage checks, and benchmark comparisons before anything reaches production." },
  { icon: Briefcase, title: "Business-First Approach", description: "We optimize for decisions and dollars—not leaderboard scores that ignore constraints and costs." },
];
