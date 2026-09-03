import { BookOpen, Bot, Briefcase, Calendar, ClipboardCheck, Compass, Contact, HardDrive, ListTodo, MessageSquare, Mic, Presentation, Workflow, type LucideIcon } from "lucide-react"
import { MagiClaw, Skills } from "@/enhance/lucide-react"
import { RouteName } from "@/routes/constants"
import type { SidebarMarketMenuItem } from "@/layouts/BaseLayout/components/MagicSidebar/hooks/useSidebarMarketMenuItems.types"

export const BASE_MARKET_MENU_ITEMS: SidebarMarketMenuItem[] = [
	{
		titleKey: "sidebar:slidesTemplates.title",
		routeName: RouteName.SuperSlidesTemplates,
		testId: "sidebar-content-slides-templates-button",
		Icon: Presentation,
	},
	{
		titleKey: "sidebar:audioRecordings.title",
		routeName: RouteName.AudioRecordings,
		testId: "sidebar-content-audio-recordings-button",
		Icon: Mic,
	},
	{
		titleKey: "sidebar:crewMarket.title",
		routeName: RouteName.CrewMarket,
		testId: "sidebar-content-crew-market-button",
		Icon: Bot,
	},
	{
		titleKey: "sidebar:superLobster.title",
		routeName: RouteName.MagiClaw,
		testId: "sidebar-content-magic-claw-button",
		Icon: MagiClaw as LucideIcon,
	},
	{
		titleKey: "sidebar:skillsLibrary.title",
		routeName: RouteName.CrewMarketSkills,
		testId: "sidebar-content-skills-library-button",
		Icon: Skills as LucideIcon,
	},
	{
		titleKey: "sidebar:office.messenger",
		routeName: RouteName.Chat,
		testId: "sidebar-content-messenger-button",
		Icon: MessageSquare,
	},
	{
		titleKey: "sidebar:office.contacts",
		routeName: RouteName.Contacts,
		testId: "sidebar-content-contacts-button",
		Icon: Contact,
	},
	{
		titleKey: "sidebar:office.calendar",
		routeName: RouteName.Calendar,
		testId: "sidebar-content-calendar-button",
		Icon: Calendar,
	},
	{
		titleKey: "sidebar:office.tasks",
		routeName: RouteName.Tasks,
		testId: "sidebar-content-tasks-button",
		Icon: ListTodo,
	},
	{
		titleKey: "sidebar:office.drive",
		routeName: RouteName.DriveMe,
		testId: "sidebar-content-drive-button",
		Icon: HardDrive,
	},
	{
		titleKey: "sidebar:office.wiki",
		routeName: RouteName.Knowledge,
		testId: "sidebar-content-wiki-button",
		Icon: BookOpen,
	},
	{
		titleKey: "sidebar:office.approval",
		routeName: RouteName.MagicApproval,
		testId: "sidebar-content-approval-button",
		Icon: ClipboardCheck,
	},
	{
		titleKey: "sidebar:office.workflow",
		routeName: RouteName.Flows,
		testId: "sidebar-content-workflow-button",
		Icon: Workflow,
	},
	{
		titleKey: "sidebar:office.explore",
		routeName: RouteName.Explore,
		testId: "sidebar-content-explore-button",
		Icon: Compass,
	},
	{
		titleKey: "sidebar:office.workplace",
		routeName: RouteName.Applications,
		testId: "sidebar-content-workplace-button",
		Icon: Briefcase,
	},
]
