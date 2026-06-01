const fs = require('fs');

let content = fs.readFileSync('src/App.jsx', 'utf8');

// Replace CRM imports
content = content.replace(/from '\.\/components\/CRM\/Activities'/g, "from './modules/crm/activities/Activities'");
content = content.replace(/from '\.\/components\/CRM\/Analytics'/g, "from './modules/crm/analytics/Analytics'");
content = content.replace(/from '\.\/components\/CRM\/Companies'/g, "from './modules/crm/companies/Companies'");
content = content.replace(/from '\.\/components\/CRM\/Contacts'/g, "from './modules/crm/contacts/Contacts'");
content = content.replace(/from '\.\/components\/CRM\/Deals'/g, "from './modules/crm/deals/Deals'");
content = content.replace(/from '\.\/components\/CRM\/Leads'/g, "from './modules/crm/leads/Leads'");
content = content.replace(/from '\.\/components\/CRM\/Pipeline'/g, "from './modules/crm/pipeline/Pipeline'");

// Replace Auth imports
content = content.replace(/from '\.\/components\/auth\//g, "from './modules/auth/");

// Replace Super Admin imports
content = content.replace(/from '\.\/components\/superAdmin\//g, "from './modules/super-admin/");

// Replace Recruiter Dashboard / AI Recruitment imports
content = content.replace(/from '\.\/components\/recruiterDashboard\/Candidates'/g, "from './modules/ai-recruitment/candidates/Candidates'");
content = content.replace(/from '\.\/components\/recruiterDashboard\/DashboardOverview'/g, "from './modules/ai-recruitment/dashboard/DashboardOverview'");
content = content.replace(/from '\.\/components\/recruiterDashboard\/PipelineOverview'/g, "from './modules/ai-recruitment/analytics/PipelineOverview'");
content = content.replace(/from '\.\/components\/recruiterDashboard\/JobAnalytics'/g, "from './modules/ai-recruitment/analytics/JobAnalytics'");
content = content.replace(/from '\.\/components\/recruiterDashboard\/RecruiterDashboardLayout'/g, "from './app/layouts/RecruiterDashboardLayout'");
content = content.replace(/from '\.\/components\/recruiterDashboard\/ResumeScreening'/g, "from './modules/ai-recruitment/interviews/ResumeScreening'");
content = content.replace(/from '\.\/components\/recruiterDashboard\/AIPrescreening'/g, "from './modules/ai-recruitment/interviews/AIPrescreening'");
content = content.replace(/from '\.\/components\/recruiterDashboard\/ConfigureAIInterview'/g, "from './modules/ai-recruitment/interviews/ConfigureAIInterview'");
content = content.replace(/from '\.\/components\/recruiterDashboard\/ReviewAIInterview'/g, "from './modules/ai-recruitment/interviews/ReviewAIInterview'");
content = content.replace(/from '\.\/components\/recruiterDashboard\/OfferTemplates'/g, "from './modules/ai-recruitment/onboarding/OfferTemplates'");
content = content.replace(/from '\.\/components\/recruiterDashboard\/OfferTracking'/g, "from './modules/ai-recruitment/onboarding/OfferTracking'");
content = content.replace(/from '\.\/components\/recruiterDashboard\/OrgInfo'/g, "from './modules/ai-recruitment/dashboard/OrgInfo'");
content = content.replace(/from '\.\/components\/recruiterDashboard\/Integrations'/g, "from './modules/ai-recruitment/dashboard/Integrations'");
content = content.replace(/from '\.\/components\/recruiterDashboard\/Billing'/g, "from './modules/ai-recruitment/dashboard/Billing'");
content = content.replace(/from '\.\/components\/recruiterDashboard\/RecruiterProfile'/g, "from './modules/ai-recruitment/dashboard/RecruiterProfile'");

// Replace other recruiter elements
content = content.replace(/from '\.\/components\/CreateJob'/g, "from './modules/ai-recruitment/jobs/CreateJob'");
content = content.replace(/from '\.\/components\/JobList'/g, "from './modules/ai-recruitment/jobs/JobList'");
content = content.replace(/from '\.\/components\/AIInterviewPortal'/g, "from './modules/ai-recruitment/interviews/AIInterviewPortal'");

// Replace Pipeline imports
content = content.replace(/from '\.\/components\/pipeline\/Stages'/g, "from './modules/ai-recruitment/analytics/Stages'");
content = content.replace(/from '\.\/components\/pipeline\/DragDrop'/g, "from './modules/ai-recruitment/analytics/DragDrop'");
content = content.replace(/from '\.\/components\/pipeline\/CollaborationTools'/g, "from './modules/ai-recruitment/analytics/CollaborationTools'");

// Replace Analytics imports
content = content.replace(/from '\.\/components\/analytics\/RecruiterPerformance'/g, "from './modules/ai-recruitment/analytics/RecruiterPerformance'");
content = content.replace(/from '\.\/components\/analytics\/TimeToHire'/g, "from './modules/ai-recruitment/analytics/TimeToHire'");
content = content.replace(/from '\.\/components\/analytics\/CandidateSourcing'/g, "from './modules/ai-recruitment/analytics/CandidateSourcing'");
content = content.replace(/from '\.\/components\/analytics\/JobPerformance'/g, "from './modules/ai-recruitment/analytics/JobPerformance'");

// Replace Settings
content = content.replace(/from '\.\/components\/Settings'/g, "from "./shared/components/Settings"");

// Replace Candidate Dashboard imports
content = content.replace(/from '\.\/components\/candidateDashboard\//g, "from './modules/ai-recruitment/candidates/candidate-dashboard/");

// Replace Assessments imports
content = content.replace(/from '\.\/components\/assessments\//g, "from './modules/ai-recruitment/assessments/");

// Replace HRMS / Onboarding imports
content = content.replace(/from '\.\/components\/HRMS\/AllEmployees'/g, "from './modules/hrms/employees/AllEmployees'");
content = content.replace(/from '\.\/components\/HRMS\/EmployeeManagement\//g, "from './modules/hrms/employees/");
content = content.replace(/from '\.\/components\/HRMS\/Attendance&Leave\/AttendanceCapture'/g, "from './modules/hrms/attendance/AttendanceCapture'");
content = content.replace(/from '\.\/components\/HRMS\/Attendance&Leave\/DailyPunches'/g, "from './modules/hrms/attendance/DailyPunches'");
content = content.replace(/from '\.\/components\/HRMS\/Attendance&Leave\/DailyAttendance'/g, "from './modules/hrms/attendance/DailyAttendance'");
content = content.replace(/from '\.\/components\/HRMS\/Attendance&Leave\/MonthlyAttendance'/g, "from './modules/hrms/attendance/MonthlyAttendance'");
content = content.replace(/from '\.\/components\/HRMS\/Attendance&Leave\/ManualAttendance'/g, "from './modules/hrms/attendance/ManualAttendance'");
content = content.replace(/from '\.\/components\/HRMS\/Attendance&Leave\/LeaveCorrection'/g, "from './modules/hrms/attendance/LeaveCorrection'");
content = content.replace(/from '\.\/components\/HRMS\/Attendance&Leave\/ShiftManagement'/g, "from './modules/hrms/attendance/ShiftManagement'");
content = content.replace(/from '\.\/components\/HRMS\/Attendance&Leave\/WorkHourRules'/g, "from './modules/hrms/attendance/WorkHourRules'");
content = content.replace(/from '\.\/components\/HRMS\/Attendance&Leave\/LeaveManagement'/g, "from './modules/hrms/leave/LeaveManagement'");
content = content.replace(/from '\.\/components\/HRMS\/Attendance&Leave\/Regularization'/g, "from './modules/hrms/attendance/Regularization'");
content = content.replace(/from '\.\/components\/HRMS\/Attendance&Leave\/HolidayCalendar'/g, "from './modules/hrms/attendance/HolidayCalendar'");
content = content.replace(/from '\.\/components\/HRMS\/Attendance&Leave\/AttendanceReports'/g, "from './modules/hrms/reports/AttendanceReports'");
content = content.replace(/from '\.\/components\/HRMS\/Attendance&Leave\/PayrollIntegration'/g, "from './modules/hrms/attendance/PayrollIntegration'");

content = content.replace(/from '\.\/components\/HRMS\/PayrollManagement\//g, "from './modules/hrms/payroll/");
content = content.replace(/from '\.\/components\/HRMS\/HROperations\//g, "from './modules/hrms/employees/");
content = content.replace(/from '\.\/components\/HRMS\/Reports&Analytics\/AttendanceReports'/g, "from './modules/hrms/reports/AttendanceAnalyticsReports'");
content = content.replace(/from '\.\/components\/HRMS\/Reports&Analytics\//g, "from './modules/hrms/reports/");
content = content.replace(/from '\.\/components\/HRMS\/Forms&Workflows\//g, "from './modules/hrms/dashboard/");

// Onboarding imports
content = content.replace(/from '\.\/components\/HRMS\/Onboarding&Joining\//g, "from './modules/ai-recruitment/onboarding/");
content = content.replace(/from '\.\/components\/HRMS\/OnboardingForm\//g, "from './modules/ai-recruitment/onboarding/");

// Replace Landing Page imports
content = content.replace(/from '\.\/components\/Landing\//g, "from './modules/landing/");

fs.writeFileSync('src/App.jsx', content, 'utf8');
console.log('App.jsx imports updated successfully!');
